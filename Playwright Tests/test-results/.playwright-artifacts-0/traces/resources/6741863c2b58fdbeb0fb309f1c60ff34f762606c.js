import { u as Ar } from "./uri-js.e28dac87.js";
import { f as ze } from "./fast-deep-equal.dc650d63.js";
import { j as Qr } from "./json-schema-traverse.5c29a8cc.js";
import { f as tr } from "./fast-json-stable-stringify.ec72e098.js";
var zr = function(e) {
  for (var s = 0, i = e.length, r = 0, o; r < i; )
    s++, o = e.charCodeAt(r++), o >= 55296 && o <= 56319 && r < i && (o = e.charCodeAt(r), (o & 64512) == 56320 && r++);
  return s;
}, te = {
  copy: Tr,
  checkDataType: Oe,
  checkDataTypes: Nr,
  coerceToTypes: Cr,
  toHash: Te,
  getProperty: Ne,
  escapeQuotes: Ce,
  equal: ze,
  ucs2length: zr,
  varOccurences: qr,
  varReplace: Mr,
  schemaHasRules: kr,
  schemaHasRulesExcept: Kr,
  schemaUnknownRules: Br,
  toQuotedString: Ie,
  getPathExpr: Hr,
  getPath: Jr,
  getData: Zr,
  unescapeFragment: Wr,
  unescapeJsonPointer: Ve,
  escapeFragment: Xr,
  escapeJsonPointer: Ue
};
function Tr(a, e) {
  e = e || {};
  for (var s in a)
    e[s] = a[s];
  return e;
}
function Oe(a, e, s, i) {
  var r = i ? " !== " : " === ", o = i ? " || " : " && ", u = i ? "!" : "", l = i ? "" : "!";
  switch (a) {
    case "null":
      return e + r + "null";
    case "array":
      return u + "Array.isArray(" + e + ")";
    case "object":
      return "(" + u + e + o + "typeof " + e + r + '"object"' + o + l + "Array.isArray(" + e + "))";
    case "integer":
      return "(typeof " + e + r + '"number"' + o + l + "(" + e + " % 1)" + o + e + r + e + (s ? o + u + "isFinite(" + e + ")" : "") + ")";
    case "number":
      return "(typeof " + e + r + '"' + a + '"' + (s ? o + u + "isFinite(" + e + ")" : "") + ")";
    default:
      return "typeof " + e + r + '"' + a + '"';
  }
}
function Nr(a, e, s) {
  switch (a.length) {
    case 1:
      return Oe(a[0], e, s, !0);
    default:
      var i = "", r = Te(a);
      r.array && r.object && (i = r.null ? "(" : "(!" + e + " || ", i += "typeof " + e + ' !== "object")', delete r.null, delete r.array, delete r.object), r.number && delete r.integer;
      for (var o in r)
        i += (i ? " && " : "") + Oe(o, e, s, !0);
      return i;
  }
}
var Be = Te(["string", "number", "integer", "boolean", "null"]);
function Cr(a, e) {
  if (Array.isArray(e)) {
    for (var s = [], i = 0; i < e.length; i++) {
      var r = e[i];
      (Be[r] || a === "array" && r === "array") && (s[s.length] = r);
    }
    if (s.length)
      return s;
  } else {
    if (Be[e])
      return [e];
    if (a === "array" && e === "array")
      return ["array"];
  }
}
function Te(a) {
  for (var e = {}, s = 0; s < a.length; s++)
    e[a[s]] = !0;
  return e;
}
var Ur = /^[a-z$_][a-z$_0-9]*$/i, Vr = /'|\\/g;
function Ne(a) {
  return typeof a == "number" ? "[" + a + "]" : Ur.test(a) ? "." + a : "['" + Ce(a) + "']";
}
function Ce(a) {
  return a.replace(Vr, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t");
}
function qr(a, e) {
  e += "[^0-9]";
  var s = a.match(new RegExp(e, "g"));
  return s ? s.length : 0;
}
function Mr(a, e, s) {
  return e += "([^0-9])", s = s.replace(/\$/g, "$$$$"), a.replace(new RegExp(e, "g"), s + "$1");
}
function kr(a, e) {
  if (typeof a == "boolean")
    return !a;
  for (var s in a)
    if (e[s])
      return !0;
}
function Kr(a, e, s) {
  if (typeof a == "boolean")
    return !a && s != "not";
  for (var i in a)
    if (i != s && e[i])
      return !0;
}
function Br(a, e) {
  if (typeof a != "boolean") {
    for (var s in a)
      if (!e[s])
        return s;
  }
}
function Ie(a) {
  return "'" + Ce(a) + "'";
}
function Hr(a, e, s, i) {
  var r = s ? "'/' + " + e + (i ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : i ? "'[' + " + e + " + ']'" : "'[\\'' + " + e + " + '\\']'";
  return or(a, r);
}
function Jr(a, e, s) {
  var i = Ie(s ? "/" + Ue(e) : Ne(e));
  return or(a, i);
}
var Gr = /^\/(?:[^~]|~0|~1)*$/, Yr = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function Zr(a, e, s) {
  var i, r, o, u;
  if (a === "")
    return "rootData";
  if (a[0] == "/") {
    if (!Gr.test(a))
      throw new Error("Invalid JSON-pointer: " + a);
    r = a, o = "rootData";
  } else {
    if (u = a.match(Yr), !u)
      throw new Error("Invalid JSON-pointer: " + a);
    if (i = +u[1], r = u[2], r == "#") {
      if (i >= e)
        throw new Error("Cannot access property/index " + i + " levels up, current level is " + e);
      return s[e - i];
    }
    if (i > e)
      throw new Error("Cannot access data " + i + " levels up, current level is " + e);
    if (o = "data" + (e - i || ""), !r)
      return o;
  }
  for (var l = o, P = r.split("/"), m = 0; m < P.length; m++) {
    var d = P[m];
    d && (o += Ne(Ve(d)), l += " && " + o);
  }
  return l;
}
function or(a, e) {
  return a == '""' ? e : (a + " + " + e).replace(/([^\\])' \+ '/g, "$1");
}
function Wr(a) {
  return Ve(decodeURIComponent(a));
}
function Xr(a) {
  return encodeURIComponent(Ue(a));
}
function Ue(a) {
  return a.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Ve(a) {
  return a.replace(/~1/g, "/").replace(/~0/g, "~");
}
var ea = te, lr = ra;
function ra(a) {
  ea.copy(a, this);
}
var ie = Ar.exports, He = ze, Ee = te, me = lr, aa = Qr.exports, qe = W;
W.normalizeId = Z;
W.fullPath = pe;
W.url = ge;
W.ids = na;
W.inlineRef = je;
W.schema = Se;
function W(a, e, s) {
  var i = this._refs[s];
  if (typeof i == "string")
    if (this._refs[i])
      i = this._refs[i];
    else
      return W.call(this, a, e, i);
  if (i = i || this._schemas[s], i instanceof me)
    return je(i.schema, this._opts.inlineRefs) ? i.schema : i.validate || this._compile(i);
  var r = Se.call(this, e, s), o, u, l;
  return r && (o = r.schema, e = r.root, l = r.baseId), o instanceof me ? u = o.validate || a.call(this, o.schema, e, void 0, l) : o !== void 0 && (u = je(o, this._opts.inlineRefs) ? o : a.call(this, o, e, void 0, l)), u;
}
function Se(a, e) {
  var s = ie.parse(e), i = ir(s), r = pe(this._getId(a.schema));
  if (Object.keys(a.schema).length === 0 || i !== r) {
    var o = Z(i), u = this._refs[o];
    if (typeof u == "string")
      return sa.call(this, a, u, s);
    if (u instanceof me)
      u.validate || this._compile(u), a = u;
    else if (u = this._schemas[o], u instanceof me) {
      if (u.validate || this._compile(u), o == Z(e))
        return { schema: u, root: a, baseId: r };
      a = u;
    } else
      return;
    if (!a.schema)
      return;
    r = pe(this._getId(a.schema));
  }
  return nr.call(this, s, r, a.schema, a);
}
function sa(a, e, s) {
  var i = Se.call(this, a, e);
  if (i) {
    var r = i.schema, o = i.baseId;
    a = i.root;
    var u = this._getId(r);
    return u && (o = ge(o, u)), nr.call(this, s, o, r, a);
  }
}
var ta = Ee.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
function nr(a, e, s, i) {
  if (a.fragment = a.fragment || "", a.fragment.slice(0, 1) == "/") {
    for (var r = a.fragment.split("/"), o = 1; o < r.length; o++) {
      var u = r[o];
      if (u) {
        if (u = Ee.unescapeFragment(u), s = s[u], s === void 0)
          break;
        var l;
        if (!ta[u] && (l = this._getId(s), l && (e = ge(e, l)), s.$ref)) {
          var P = ge(e, s.$ref), m = Se.call(this, i, P);
          m && (s = m.schema, i = m.root, e = m.baseId);
        }
      }
    }
    if (s !== void 0 && s !== i.schema)
      return { schema: s, root: i, baseId: e };
  }
}
var oa = Ee.toHash([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum"
]);
function je(a, e) {
  if (e === !1)
    return !1;
  if (e === void 0 || e === !0)
    return xe(a);
  if (e)
    return Le(a) <= e;
}
function xe(a) {
  var e;
  if (Array.isArray(a)) {
    for (var s = 0; s < a.length; s++)
      if (e = a[s], typeof e == "object" && !xe(e))
        return !1;
  } else
    for (var i in a)
      if (i == "$ref" || (e = a[i], typeof e == "object" && !xe(e)))
        return !1;
  return !0;
}
function Le(a) {
  var e = 0, s;
  if (Array.isArray(a)) {
    for (var i = 0; i < a.length; i++)
      if (s = a[i], typeof s == "object" && (e += Le(s)), e == 1 / 0)
        return 1 / 0;
  } else
    for (var r in a) {
      if (r == "$ref")
        return 1 / 0;
      if (oa[r])
        e++;
      else if (s = a[r], typeof s == "object" && (e += Le(s) + 1), e == 1 / 0)
        return 1 / 0;
    }
  return e;
}
function pe(a, e) {
  e !== !1 && (a = Z(a));
  var s = ie.parse(a);
  return ir(s);
}
function ir(a) {
  return ie.serialize(a).split("#")[0] + "#";
}
var la = /#\/?$/;
function Z(a) {
  return a ? a.replace(la, "") : "";
}
function ge(a, e) {
  return e = Z(e), ie.resolve(a, e);
}
function na(a) {
  var e = Z(this._getId(a)), s = { "": e }, i = { "": pe(e, !1) }, r = {}, o = this;
  return aa(a, { allKeys: !0 }, function(u, l, P, m, d, h, v) {
    if (l !== "") {
      var t = o._getId(u), n = s[m], c = i[m] + "/" + d;
      if (v !== void 0 && (c += "/" + (typeof v == "number" ? v : Ee.escapeFragment(v))), typeof t == "string") {
        t = n = Z(n ? ie.resolve(n, t) : t);
        var f = o._refs[t];
        if (typeof f == "string" && (f = o._refs[f]), f && f.schema) {
          if (!He(u, f.schema))
            throw new Error('id "' + t + '" resolves to more than one schema');
        } else if (t != Z(c))
          if (t[0] == "#") {
            if (r[t] && !He(u, r[t]))
              throw new Error('id "' + t + '" resolves to more than one schema');
            r[t] = u;
          } else
            o._refs[t] = c;
      }
      s[l] = n, i[l] = c;
    }
  }), r;
}
var Fe = qe, Me = {
  Validation: Je(ia),
  MissingRef: Je(ke)
};
function ia(a) {
  this.message = "validation failed", this.errors = a, this.ajv = this.validation = !0;
}
ke.message = function(a, e) {
  return "can't resolve reference " + e + " from id " + a;
};
function ke(a, e, s) {
  this.message = s || ke.message(a, e), this.missingRef = Fe.url(a, e), this.missingSchema = Fe.normalizeId(Fe.fullPath(this.missingRef));
}
function Je(a) {
  return a.prototype = Object.create(Error.prototype), a.prototype.constructor = a, a;
}
var fr = function(e, s, i) {
  var r = "", o = e.schema.$async === !0, u = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"), l = e.self._getId(e.schema);
  if (e.opts.strictKeywords) {
    var P = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);
    if (P) {
      var m = "unknown keyword: " + P;
      if (e.opts.strictKeywords === "log")
        e.logger.warn(m);
      else
        throw new Error(m);
    }
  }
  if (e.isTop && (r += " var validate = ", o && (e.async = !0, r += "async "), r += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", l && (e.opts.sourceCode || e.opts.processCode) && (r += " " + ("/*# sourceURL=" + l + " */") + " ")), typeof e.schema == "boolean" || !(u || e.schema.$ref)) {
    var s = "false schema", d = e.level, h = e.dataLevel, v = e.schema[s], t = e.schemaPath + e.util.getProperty(s), n = e.errSchemaPath + "/" + s, $ = !e.opts.allErrors, F, c = "data" + (h || ""), S = "valid" + d;
    if (e.schema === !1) {
      e.isTop ? $ = !0 : r += " var " + S + " = false; ";
      var f = f || [];
      f.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (F || "false schema") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: {} ", e.opts.messages !== !1 && (r += " , message: 'boolean schema is false' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), r += " } ") : r += " {} ";
      var p = r;
      r = f.pop(), !e.compositeRule && $ ? e.async ? r += " throw new ValidationError([" + p + "]); " : r += " validate.errors = [" + p + "]; return false; " : r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    } else
      e.isTop ? o ? r += " return data; " : r += " validate.errors = null; return true; " : r += " var " + S + " = true; ";
    return e.isTop && (r += " }; return validate; "), r;
  }
  if (e.isTop) {
    var b = e.isTop, d = e.level = 0, h = e.dataLevel = 0, c = "data";
    if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [""], e.schema.default !== void 0 && e.opts.useDefaults && e.opts.strictDefaults) {
      var g = "default is ignored in the schema root";
      if (e.opts.strictDefaults === "log")
        e.logger.warn(g);
      else
        throw new Error(g);
    }
    r += " var vErrors = null; ", r += " var errors = 0;     ", r += " if (rootData === undefined) rootData = data; ";
  } else {
    var d = e.level, h = e.dataLevel, c = "data" + (h || "");
    if (l && (e.baseId = e.resolve.url(e.baseId, l)), o && !e.async)
      throw new Error("async schema in sync schema");
    r += " var errs_" + d + " = errors;";
  }
  var S = "valid" + d, $ = !e.opts.allErrors, w = "", D = "", F, _ = e.schema.type, O = Array.isArray(_);
  if (_ && e.opts.nullable && e.schema.nullable === !0 && (O ? _.indexOf("null") == -1 && (_ = _.concat("null")) : _ != "null" && (_ = [_, "null"], O = !0)), O && _.length == 1 && (_ = _[0], O = !1), e.schema.$ref && u) {
    if (e.opts.extendRefs == "fail")
      throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
    e.opts.extendRefs !== !0 && (u = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'));
  }
  if (e.schema.$comment && e.opts.$comment && (r += " " + e.RULES.all.$comment.code(e, "$comment")), _) {
    if (e.opts.coerceTypes)
      var I = e.util.coerceToTypes(e.opts.coerceTypes, _);
    var R = e.RULES.types[_];
    if (I || O || R === !0 || R && !M(R)) {
      var t = e.schemaPath + ".type", n = e.errSchemaPath + "/type", t = e.schemaPath + ".type", n = e.errSchemaPath + "/type", E = O ? "checkDataTypes" : "checkDataType";
      if (r += " if (" + e.util[E](_, c, e.opts.strictNumbers, !0) + ") { ", I) {
        var y = "dataType" + d, j = "coerced" + d;
        r += " var " + y + " = typeof " + c + "; var " + j + " = undefined; ", e.opts.coerceTypes == "array" && (r += " if (" + y + " == 'object' && Array.isArray(" + c + ") && " + c + ".length == 1) { " + c + " = " + c + "[0]; " + y + " = typeof " + c + "; if (" + e.util.checkDataType(e.schema.type, c, e.opts.strictNumbers) + ") " + j + " = " + c + "; } "), r += " if (" + j + " !== undefined) ; ";
        var z = I;
        if (z)
          for (var A, Q = -1, L = z.length - 1; Q < L; )
            A = z[Q += 1], A == "string" ? r += " else if (" + y + " == 'number' || " + y + " == 'boolean') " + j + " = '' + " + c + "; else if (" + c + " === null) " + j + " = ''; " : A == "number" || A == "integer" ? (r += " else if (" + y + " == 'boolean' || " + c + " === null || (" + y + " == 'string' && " + c + " && " + c + " == +" + c + " ", A == "integer" && (r += " && !(" + c + " % 1)"), r += ")) " + j + " = +" + c + "; ") : A == "boolean" ? r += " else if (" + c + " === 'false' || " + c + " === 0 || " + c + " === null) " + j + " = false; else if (" + c + " === 'true' || " + c + " === 1) " + j + " = true; " : A == "null" ? r += " else if (" + c + " === '' || " + c + " === 0 || " + c + " === false) " + j + " = null; " : e.opts.coerceTypes == "array" && A == "array" && (r += " else if (" + y + " == 'string' || " + y + " == 'number' || " + y + " == 'boolean' || " + c + " == null) " + j + " = [" + c + "]; ");
        r += " else {   ";
        var f = f || [];
        f.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (F || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { type: '", O ? r += "" + _.join(",") : r += "" + _, r += "' } ", e.opts.messages !== !1 && (r += " , message: 'should be ", O ? r += "" + _.join(",") : r += "" + _, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + t + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), r += " } ") : r += " {} ";
        var p = r;
        r = f.pop(), !e.compositeRule && $ ? e.async ? r += " throw new ValidationError([" + p + "]); " : r += " validate.errors = [" + p + "]; return false; " : r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } if (" + j + " !== undefined) {  ";
        var x = h ? "data" + (h - 1 || "") : "parentData", V = h ? e.dataPathArr[h] : "parentDataProperty";
        r += " " + c + " = " + j + "; ", h || (r += "if (" + x + " !== undefined)"), r += " " + x + "[" + V + "] = " + j + "; } ";
      } else {
        var f = f || [];
        f.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (F || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { type: '", O ? r += "" + _.join(",") : r += "" + _, r += "' } ", e.opts.messages !== !1 && (r += " , message: 'should be ", O ? r += "" + _.join(",") : r += "" + _, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + t + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), r += " } ") : r += " {} ";
        var p = r;
        r = f.pop(), !e.compositeRule && $ ? e.async ? r += " throw new ValidationError([" + p + "]); " : r += " validate.errors = [" + p + "]; return false; " : r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      r += " } ";
    }
  }
  if (e.schema.$ref && !u)
    r += " " + e.RULES.all.$ref.code(e, "$ref") + " ", $ && (r += " } if (errors === ", b ? r += "0" : r += "errs_" + d, r += ") { ", D += "}");
  else {
    var k = e.RULES;
    if (k) {
      for (var R, B = -1, T = k.length - 1; B < T; )
        if (R = k[B += 1], M(R)) {
          if (R.type && (r += " if (" + e.util.checkDataType(R.type, c, e.opts.strictNumbers) + ") { "), e.opts.useDefaults) {
            if (R.type == "object" && e.schema.properties) {
              var v = e.schema.properties, X = Object.keys(v), ee = X;
              if (ee)
                for (var G, fe = -1, oe = ee.length - 1; fe < oe; ) {
                  G = ee[fe += 1];
                  var q = v[G];
                  if (q.default !== void 0) {
                    var U = c + e.util.getProperty(G);
                    if (e.compositeRule) {
                      if (e.opts.strictDefaults) {
                        var g = "default is ignored for: " + U;
                        if (e.opts.strictDefaults === "log")
                          e.logger.warn(g);
                        else
                          throw new Error(g);
                      }
                    } else
                      r += " if (" + U + " === undefined ", e.opts.useDefaults == "empty" && (r += " || " + U + " === null || " + U + " === '' "), r += " ) " + U + " = ", e.opts.useDefaults == "shared" ? r += " " + e.useDefault(q.default) + " " : r += " " + JSON.stringify(q.default) + " ", r += "; ";
                  }
                }
            } else if (R.type == "array" && Array.isArray(e.schema.items)) {
              var le = e.schema.items;
              if (le) {
                for (var q, Q = -1, K = le.length - 1; Q < K; )
                  if (q = le[Q += 1], q.default !== void 0) {
                    var U = c + "[" + Q + "]";
                    if (e.compositeRule) {
                      if (e.opts.strictDefaults) {
                        var g = "default is ignored for: " + U;
                        if (e.opts.strictDefaults === "log")
                          e.logger.warn(g);
                        else
                          throw new Error(g);
                      }
                    } else
                      r += " if (" + U + " === undefined ", e.opts.useDefaults == "empty" && (r += " || " + U + " === null || " + U + " === '' "), r += " ) " + U + " = ", e.opts.useDefaults == "shared" ? r += " " + e.useDefault(q.default) + " " : r += " " + JSON.stringify(q.default) + " ", r += "; ";
                  }
              }
            }
          }
          var C = R.rules;
          if (C) {
            for (var ae, se = -1, he = C.length - 1; se < he; )
              if (ae = C[se += 1], ne(ae)) {
                var ue = ae.code(e, ae.keyword, R.type);
                ue && (r += " " + ue + " ", $ && (w += "}"));
              }
          }
          if ($ && (r += " " + w + " ", w = ""), R.type && (r += " } ", _ && _ === R.type && !I)) {
            r += " else { ";
            var t = e.schemaPath + ".type", n = e.errSchemaPath + "/type", f = f || [];
            f.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (F || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { type: '", O ? r += "" + _.join(",") : r += "" + _, r += "' } ", e.opts.messages !== !1 && (r += " , message: 'should be ", O ? r += "" + _.join(",") : r += "" + _, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + t + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), r += " } ") : r += " {} ";
            var p = r;
            r = f.pop(), !e.compositeRule && $ ? e.async ? r += " throw new ValidationError([" + p + "]); " : r += " validate.errors = [" + p + "]; return false; " : r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ";
          }
          $ && (r += " if (errors === ", b ? r += "0" : r += "errs_" + d, r += ") { ", D += "}");
        }
    }
  }
  $ && (r += " " + D + " "), b ? (o ? (r += " if (errors === 0) return data;           ", r += " else throw new ValidationError(vErrors); ") : (r += " validate.errors = vErrors; ", r += " return errors === 0;       "), r += " }; return validate;") : r += " var " + S + " = errors === errs_" + d + ";";
  function M(H) {
    for (var Y = H.rules, J = 0; J < Y.length; J++)
      if (ne(Y[J]))
        return !0;
  }
  function ne(H) {
    return e.schema[H.keyword] !== void 0 || H.implements && _e(H);
  }
  function _e(H) {
    for (var Y = H.implements, J = 0; J < Y.length; J++)
      if (e.schema[Y[J]] !== void 0)
        return !0;
  }
  return r;
}, ce = qe, Pe = te, hr = Me, fa = tr, Ge = fr, ha = Pe.ucs2length, ua = ze, ca = hr.Validation, va = Ae;
function Ae(a, e, s, i) {
  var r = this, o = this._opts, u = [void 0], l = {}, P = [], m = {}, d = [], h = {}, v = [];
  e = e || { schema: a, refVal: u, refs: l };
  var t = da.call(this, a, e, i), n = this._compilations[t.index];
  if (t.compiling)
    return n.callValidate = g;
  var c = this._formats, f = this.RULES;
  try {
    var p = S(a, e, s, i);
    n.validate = p;
    var b = n.callValidate;
    return b && (b.schema = p.schema, b.errors = null, b.refs = p.refs, b.refVal = p.refVal, b.root = p.root, b.$async = p.$async, o.sourceCode && (b.source = p.source)), p;
  } finally {
    ma.call(this, a, e, i);
  }
  function g() {
    var E = n.validate, y = E.apply(this, arguments);
    return g.errors = E.errors, y;
  }
  function S(E, y, j, z) {
    var A = !y || y && y.schema == E;
    if (y.schema != e.schema)
      return Ae.call(r, E, y, j, z);
    var Q = E.$async === !0, L = Ge({
      isTop: !0,
      schema: E,
      isRoot: A,
      baseId: z,
      root: y,
      schemaPath: "",
      errSchemaPath: "#",
      errorPath: '""',
      MissingRefError: hr.MissingRef,
      RULES: f,
      validate: Ge,
      util: Pe,
      resolve: ce,
      resolveRef: $,
      usePattern: O,
      useDefault: I,
      useCustomRule: R,
      opts: o,
      formats: c,
      logger: r.logger,
      self: r
    });
    L = ve(u, Pa) + ve(P, pa) + ve(d, ga) + ve(v, ya) + L, o.processCode && (L = o.processCode(L, E));
    var x;
    try {
      var V = new Function(
        "self",
        "RULES",
        "formats",
        "root",
        "refVal",
        "defaults",
        "customRules",
        "equal",
        "ucs2length",
        "ValidationError",
        L
      );
      x = V(
        r,
        f,
        c,
        e,
        u,
        d,
        v,
        ua,
        ha,
        ca
      ), u[0] = x;
    } catch (k) {
      throw r.logger.error("Error compiling schema, function code:", L), k;
    }
    return x.schema = E, x.errors = null, x.refs = l, x.refVal = u, x.root = A ? x : y, Q && (x.$async = !0), o.sourceCode === !0 && (x.source = {
      code: L,
      patterns: P,
      defaults: d
    }), x;
  }
  function $(E, y, j) {
    y = ce.url(E, y);
    var z = l[y], A, Q;
    if (z !== void 0)
      return A = u[z], Q = "refVal[" + z + "]", _(A, Q);
    if (!j && e.refs) {
      var L = e.refs[y];
      if (L !== void 0)
        return A = e.refVal[L], Q = w(y, A), _(A, Q);
    }
    Q = w(y);
    var x = ce.call(r, S, e, y);
    if (x === void 0) {
      var V = s && s[y];
      V && (x = ce.inlineRef(V, o.inlineRefs) ? V : Ae.call(r, V, e, s, E));
    }
    if (x === void 0)
      D(y);
    else
      return F(y, x), _(x, Q);
  }
  function w(E, y) {
    var j = u.length;
    return u[j] = y, l[E] = j, "refVal" + j;
  }
  function D(E) {
    delete l[E];
  }
  function F(E, y) {
    var j = l[E];
    u[j] = y;
  }
  function _(E, y) {
    return typeof E == "object" || typeof E == "boolean" ? { code: y, schema: E, inline: !0 } : { code: y, $async: E && !!E.$async };
  }
  function O(E) {
    var y = m[E];
    return y === void 0 && (y = m[E] = P.length, P[y] = E), "pattern" + y;
  }
  function I(E) {
    switch (typeof E) {
      case "boolean":
      case "number":
        return "" + E;
      case "string":
        return Pe.toQuotedString(E);
      case "object":
        if (E === null)
          return "null";
        var y = fa(E), j = h[y];
        return j === void 0 && (j = h[y] = d.length, d[j] = E), "default" + j;
    }
  }
  function R(E, y, j, z) {
    if (r._opts.validateSchema !== !1) {
      var A = E.definition.dependencies;
      if (A && !A.every(function(ee) {
        return Object.prototype.hasOwnProperty.call(j, ee);
      }))
        throw new Error("parent schema must have all required keywords: " + A.join(","));
      var Q = E.definition.validateSchema;
      if (Q) {
        var L = Q(y);
        if (!L) {
          var x = "keyword schema is invalid: " + r.errorsText(Q.errors);
          if (r._opts.validateSchema == "log")
            r.logger.error(x);
          else
            throw new Error(x);
        }
      }
    }
    var V = E.definition.compile, k = E.definition.inline, B = E.definition.macro, T;
    if (V)
      T = V.call(r, y, j, z);
    else if (B)
      T = B.call(r, y, j, z), o.validateSchema !== !1 && r.validateSchema(T, !0);
    else if (k)
      T = k.call(r, z, E.keyword, y, j);
    else if (T = E.definition.validate, !T)
      return;
    if (T === void 0)
      throw new Error('custom keyword "' + E.keyword + '"failed to compile');
    var X = v.length;
    return v[X] = T, {
      code: "customRule" + X,
      validate: T
    };
  }
}
function da(a, e, s) {
  var i = ur.call(this, a, e, s);
  return i >= 0 ? { index: i, compiling: !0 } : (i = this._compilations.length, this._compilations[i] = {
    schema: a,
    root: e,
    baseId: s
  }, { index: i, compiling: !1 });
}
function ma(a, e, s) {
  var i = ur.call(this, a, e, s);
  i >= 0 && this._compilations.splice(i, 1);
}
function ur(a, e, s) {
  for (var i = 0; i < this._compilations.length; i++) {
    var r = this._compilations[i];
    if (r.schema == a && r.root == e && r.baseId == s)
      return i;
  }
  return -1;
}
function pa(a, e) {
  return "var pattern" + a + " = new RegExp(" + Pe.toQuotedString(e[a]) + ");";
}
function ga(a) {
  return "var default" + a + " = defaults[" + a + "];";
}
function Pa(a, e) {
  return e[a] === void 0 ? "" : "var refVal" + a + " = refVal[" + a + "];";
}
function ya(a) {
  return "var customRule" + a + " = customRules[" + a + "];";
}
function ve(a, e) {
  if (!a.length)
    return "";
  for (var s = "", i = 0; i < a.length; i++)
    s += e(i, a);
  return s;
}
var cr = { exports: {} }, be = cr.exports = function() {
  this._cache = {};
};
be.prototype.put = function(e, s) {
  this._cache[e] = s;
};
be.prototype.get = function(e) {
  return this._cache[e];
};
be.prototype.del = function(e) {
  delete this._cache[e];
};
be.prototype.clear = function() {
  this._cache = {};
};
var Ea = te, Sa = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, ba = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], $a = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, vr = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, wa = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, _a = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, dr = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, mr = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, pr = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, gr = /^(?:\/(?:[^~/]|~0|~1)*)*$/, Pr = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, yr = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, Fa = $e;
function $e(a) {
  return a = a == "full" ? "full" : "fast", Ea.copy($e[a]);
}
$e.fast = {
  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
  time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
  "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
  uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
  "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
  "uri-template": dr,
  url: mr,
  email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  hostname: vr,
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: br,
  uuid: pr,
  "json-pointer": gr,
  "json-pointer-uri-fragment": Pr,
  "relative-json-pointer": yr
};
$e.full = {
  date: Er,
  time: Sr,
  "date-time": Oa,
  uri: ja,
  "uri-reference": _a,
  "uri-template": dr,
  url: mr,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: vr,
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: br,
  uuid: pr,
  "json-pointer": gr,
  "json-pointer-uri-fragment": Pr,
  "relative-json-pointer": yr
};
function Ra(a) {
  return a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0);
}
function Er(a) {
  var e = a.match(Sa);
  if (!e)
    return !1;
  var s = +e[1], i = +e[2], r = +e[3];
  return i >= 1 && i <= 12 && r >= 1 && r <= (i == 2 && Ra(s) ? 29 : ba[i]);
}
function Sr(a, e) {
  var s = a.match($a);
  if (!s)
    return !1;
  var i = s[1], r = s[2], o = s[3], u = s[5];
  return (i <= 23 && r <= 59 && o <= 59 || i == 23 && r == 59 && o == 60) && (!e || u);
}
var Da = /t|\s/i;
function Oa(a) {
  var e = a.split(Da);
  return e.length == 2 && Er(e[0]) && Sr(e[1], !0);
}
var Ia = /\/|:/;
function ja(a) {
  return Ia.test(a) && wa.test(a);
}
var xa = /[^\\]\\Z/;
function br(a) {
  if (xa.test(a))
    return !1;
  try {
    return !0;
  } catch {
    return !1;
  }
}
var La = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.errSchemaPath + "/" + s, m = !e.opts.allErrors, d = "data" + (u || ""), h = "valid" + o, v, t;
  if (l == "#" || l == "#/")
    e.isRoot ? (v = e.async, t = "validate") : (v = e.root.schema.$async === !0, t = "root.refVal[0]");
  else {
    var n = e.resolveRef(e.baseId, l, e.isRoot);
    if (n === void 0) {
      var c = e.MissingRefError.message(e.baseId, l);
      if (e.opts.missingRefs == "fail") {
        e.logger.error(c);
        var f = f || [];
        f.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(P) + " , params: { ref: '" + e.util.escapeQuotes(l) + "' } ", e.opts.messages !== !1 && (r += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(l) + "' "), e.opts.verbose && (r += " , schema: " + e.util.toQuotedString(l) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), r += " } ") : r += " {} ";
        var p = r;
        r = f.pop(), !e.compositeRule && m ? e.async ? r += " throw new ValidationError([" + p + "]); " : r += " validate.errors = [" + p + "]; return false; " : r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", m && (r += " if (false) { ");
      } else if (e.opts.missingRefs == "ignore")
        e.logger.warn(c), m && (r += " if (true) { ");
      else
        throw new e.MissingRefError(e.baseId, l, c);
    } else if (n.inline) {
      var b = e.util.copy(e);
      b.level++;
      var g = "valid" + b.level;
      b.schema = n.schema, b.schemaPath = "", b.errSchemaPath = l;
      var S = e.validate(b).replace(/validate\.schema/g, n.code);
      r += " " + S + " ", m && (r += " if (" + g + ") { ");
    } else
      v = n.$async === !0 || e.async && n.$async !== !1, t = n.code;
  }
  if (t) {
    var f = f || [];
    f.push(r), r = "", e.opts.passContext ? r += " " + t + ".call(this, " : r += " " + t + "( ", r += " " + d + ", (dataPath || '')", e.errorPath != '""' && (r += " + " + e.errorPath);
    var $ = u ? "data" + (u - 1 || "") : "parentData", w = u ? e.dataPathArr[u] : "parentDataProperty";
    r += " , " + $ + " , " + w + ", rootData)  ";
    var D = r;
    if (r = f.pop(), v) {
      if (!e.async)
        throw new Error("async schema referenced by sync schema");
      m && (r += " var " + h + "; "), r += " try { await " + D + "; ", m && (r += " " + h + " = true; "), r += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", m && (r += " " + h + " = false; "), r += " } ", m && (r += " if (" + h + ") { ");
    } else
      r += " if (!" + D + ") { if (vErrors === null) vErrors = " + t + ".errors; else vErrors = vErrors.concat(" + t + ".errors); errors = vErrors.length; } ", m && (r += " else { ");
  }
  return r;
}, Aa = function(e, s, i) {
  var r = " ", o = e.schema[s], u = e.schemaPath + e.util.getProperty(s), l = e.errSchemaPath + "/" + s, P = !e.opts.allErrors, m = e.util.copy(e), d = "";
  m.level++;
  var h = "valid" + m.level, v = m.baseId, t = !0, n = o;
  if (n)
    for (var c, f = -1, p = n.length - 1; f < p; )
      c = n[f += 1], (e.opts.strictKeywords ? typeof c == "object" && Object.keys(c).length > 0 || c === !1 : e.util.schemaHasRules(c, e.RULES.all)) && (t = !1, m.schema = c, m.schemaPath = u + "[" + f + "]", m.errSchemaPath = l + "/" + f, r += "  " + e.validate(m) + " ", m.baseId = v, P && (r += " if (" + h + ") { ", d += "}"));
  return P && (t ? r += " if (true) { " : r += " " + d.slice(0, -1) + " "), r;
}, Qa = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "valid" + o, t = "errs__" + o, n = e.util.copy(e), c = "";
  n.level++;
  var f = "valid" + n.level, p = l.every(function(F) {
    return e.opts.strictKeywords ? typeof F == "object" && Object.keys(F).length > 0 || F === !1 : e.util.schemaHasRules(F, e.RULES.all);
  });
  if (p) {
    var b = n.baseId;
    r += " var " + t + " = errors; var " + v + " = false;  ";
    var g = e.compositeRule;
    e.compositeRule = n.compositeRule = !0;
    var S = l;
    if (S)
      for (var $, w = -1, D = S.length - 1; w < D; )
        $ = S[w += 1], n.schema = $, n.schemaPath = P + "[" + w + "]", n.errSchemaPath = m + "/" + w, r += "  " + e.validate(n) + " ", n.baseId = b, r += " " + v + " = " + v + " || " + f + "; if (!" + v + ") { ", c += "}";
    e.compositeRule = n.compositeRule = g, r += " " + c + " if (!" + v + ") {   var err =   ", e.createErrors !== !1 ? (r += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: {} ", e.opts.messages !== !1 && (r += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && d && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), r += " } else {  errors = " + t + "; if (vErrors !== null) { if (" + t + ") vErrors.length = " + t + "; else vErrors = null; } ", e.opts.allErrors && (r += " } ");
  } else
    d && (r += " if (true) { ");
  return r;
}, za = function(e, s, i) {
  var r = " ", o = e.schema[s], u = e.errSchemaPath + "/" + s, l = e.util.toQuotedString(o);
  return e.opts.$comment === !0 ? r += " console.log(" + l + ");" : typeof e.opts.$comment == "function" && (r += " self._opts.$comment(" + l + ", " + e.util.toQuotedString(u) + ", validate.root.schema);"), r;
}, Ta = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "valid" + o, t = e.opts.$data && l && l.$data;
  t && (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; "), t || (r += " var schema" + o + " = validate.schema" + P + ";"), r += "var " + v + " = equal(" + h + ", schema" + o + "); if (!" + v + ") {   ";
  var n = n || [];
  n.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { allowedValue: schema" + o + " } ", e.opts.messages !== !1 && (r += " , message: 'should be equal to constant' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
  var c = r;
  return r = n.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + c + "]); " : r += " validate.errors = [" + c + "]; return false; " : r += " var err = " + c + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", d && (r += " else { "), r;
}, Na = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "valid" + o, t = "errs__" + o, n = e.util.copy(e), c = "";
  n.level++;
  var f = "valid" + n.level, p = "i" + o, b = n.dataLevel = e.dataLevel + 1, g = "data" + b, S = e.baseId, $ = e.opts.strictKeywords ? typeof l == "object" && Object.keys(l).length > 0 || l === !1 : e.util.schemaHasRules(l, e.RULES.all);
  if (r += "var " + t + " = errors;var " + v + ";", $) {
    var w = e.compositeRule;
    e.compositeRule = n.compositeRule = !0, n.schema = l, n.schemaPath = P, n.errSchemaPath = m, r += " var " + f + " = false; for (var " + p + " = 0; " + p + " < " + h + ".length; " + p + "++) { ", n.errorPath = e.util.getPathExpr(e.errorPath, p, e.opts.jsonPointers, !0);
    var D = h + "[" + p + "]";
    n.dataPathArr[b] = p;
    var F = e.validate(n);
    n.baseId = S, e.util.varOccurences(F, g) < 2 ? r += " " + e.util.varReplace(F, g, D) + " " : r += " var " + g + " = " + D + "; " + F + " ", r += " if (" + f + ") break; }  ", e.compositeRule = n.compositeRule = w, r += " " + c + " if (!" + f + ") {";
  } else
    r += " if (" + h + ".length == 0) {";
  var _ = _ || [];
  _.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: {} ", e.opts.messages !== !1 && (r += " , message: 'should contain a valid item' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
  var O = r;
  return r = _.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + O + "]); " : r += " validate.errors = [" + O + "]; return false; " : r += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else { ", $ && (r += "  errors = " + t + "; if (vErrors !== null) { if (" + t + ") vErrors.length = " + t + "; else vErrors = null; } "), e.opts.allErrors && (r += " } "), r;
}, Ca = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "errs__" + o, t = e.util.copy(e), n = "";
  t.level++;
  var c = "valid" + t.level, f = {}, p = {}, b = e.opts.ownProperties;
  for (w in l)
    if (w != "__proto__") {
      var g = l[w], S = Array.isArray(g) ? p : f;
      S[w] = g;
    }
  r += "var " + v + " = errors;";
  var $ = e.errorPath;
  r += "var missing" + o + ";";
  for (var w in p)
    if (S = p[w], S.length) {
      if (r += " if ( " + h + e.util.getProperty(w) + " !== undefined ", b && (r += " && Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(w) + "') "), d) {
        r += " && ( ";
        var D = S;
        if (D)
          for (var F, _ = -1, O = D.length - 1; _ < O; ) {
            F = D[_ += 1], _ && (r += " || ");
            var I = e.util.getProperty(F), R = h + I;
            r += " ( ( " + R + " === undefined ", b && (r += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(F) + "') "), r += ") && (missing" + o + " = " + e.util.toQuotedString(e.opts.jsonPointers ? F : I) + ") ) ";
          }
        r += ")) {  ";
        var E = "missing" + o, y = "' + " + E + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr($, E, !0) : $ + " + " + E);
        var j = j || [];
        j.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { property: '" + e.util.escapeQuotes(w) + "', missingProperty: '" + y + "', depsCount: " + S.length + ", deps: '" + e.util.escapeQuotes(S.length == 1 ? S[0] : S.join(", ")) + "' } ", e.opts.messages !== !1 && (r += " , message: 'should have ", S.length == 1 ? r += "property " + e.util.escapeQuotes(S[0]) : r += "properties " + e.util.escapeQuotes(S.join(", ")), r += " when property " + e.util.escapeQuotes(w) + " is present' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
        var z = r;
        r = j.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + z + "]); " : r += " validate.errors = [" + z + "]; return false; " : r += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else {
        r += " ) { ";
        var A = S;
        if (A)
          for (var F, Q = -1, L = A.length - 1; Q < L; ) {
            F = A[Q += 1];
            var I = e.util.getProperty(F), y = e.util.escapeQuotes(F), R = h + I;
            e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath($, F, e.opts.jsonPointers)), r += " if ( " + R + " === undefined ", b && (r += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(F) + "') "), r += ") {  var err =   ", e.createErrors !== !1 ? (r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { property: '" + e.util.escapeQuotes(w) + "', missingProperty: '" + y + "', depsCount: " + S.length + ", deps: '" + e.util.escapeQuotes(S.length == 1 ? S[0] : S.join(", ")) + "' } ", e.opts.messages !== !1 && (r += " , message: 'should have ", S.length == 1 ? r += "property " + e.util.escapeQuotes(S[0]) : r += "properties " + e.util.escapeQuotes(S.join(", ")), r += " when property " + e.util.escapeQuotes(w) + " is present' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      r += " }   ", d && (n += "}", r += " else { ");
    }
  e.errorPath = $;
  var x = t.baseId;
  for (var w in f) {
    var g = f[w];
    (e.opts.strictKeywords ? typeof g == "object" && Object.keys(g).length > 0 || g === !1 : e.util.schemaHasRules(g, e.RULES.all)) && (r += " " + c + " = true; if ( " + h + e.util.getProperty(w) + " !== undefined ", b && (r += " && Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(w) + "') "), r += ") { ", t.schema = g, t.schemaPath = P + e.util.getProperty(w), t.errSchemaPath = m + "/" + e.util.escapeFragment(w), r += "  " + e.validate(t) + " ", t.baseId = x, r += " }  ", d && (r += " if (" + c + ") { ", n += "}"));
  }
  return d && (r += "   " + n + " if (" + v + " == errors) {"), r;
}, Ua = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "valid" + o, t = e.opts.$data && l && l.$data;
  t && (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ");
  var n = "i" + o, c = "schema" + o;
  t || (r += " var " + c + " = validate.schema" + P + ";"), r += "var " + v + ";", t && (r += " if (schema" + o + " === undefined) " + v + " = true; else if (!Array.isArray(schema" + o + ")) " + v + " = false; else {"), r += "" + v + " = false;for (var " + n + "=0; " + n + "<" + c + ".length; " + n + "++) if (equal(" + h + ", " + c + "[" + n + "])) { " + v + " = true; break; }", t && (r += "  }  "), r += " if (!" + v + ") {   ";
  var f = f || [];
  f.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { allowedValues: schema" + o + " } ", e.opts.messages !== !1 && (r += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
  var p = r;
  return r = f.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + p + "]); " : r += " validate.errors = [" + p + "]; return false; " : r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", d && (r += " else { "), r;
}, Va = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || "");
  if (e.opts.format === !1)
    return d && (r += " if (true) { "), r;
  var v = e.opts.$data && l && l.$data, t;
  v ? (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ", t = "schema" + o) : t = l;
  var n = e.opts.unknownFormats, c = Array.isArray(n);
  if (v) {
    var f = "format" + o, p = "isObject" + o, b = "formatType" + o;
    r += " var " + f + " = formats[" + t + "]; var " + p + " = typeof " + f + " == 'object' && !(" + f + " instanceof RegExp) && " + f + ".validate; var " + b + " = " + p + " && " + f + ".type || 'string'; if (" + p + ") { ", e.async && (r += " var async" + o + " = " + f + ".async; "), r += " " + f + " = " + f + ".validate; } if (  ", v && (r += " (" + t + " !== undefined && typeof " + t + " != 'string') || "), r += " (", n != "ignore" && (r += " (" + t + " && !" + f + " ", c && (r += " && self._opts.unknownFormats.indexOf(" + t + ") == -1 "), r += ") || "), r += " (" + f + " && " + b + " == '" + i + "' && !(typeof " + f + " == 'function' ? ", e.async ? r += " (async" + o + " ? await " + f + "(" + h + ") : " + f + "(" + h + ")) " : r += " " + f + "(" + h + ") ", r += " : " + f + ".test(" + h + "))))) {";
  } else {
    var f = e.formats[l];
    if (!f) {
      if (n == "ignore")
        return e.logger.warn('unknown format "' + l + '" ignored in schema at path "' + e.errSchemaPath + '"'), d && (r += " if (true) { "), r;
      if (c && n.indexOf(l) >= 0)
        return d && (r += " if (true) { "), r;
      throw new Error('unknown format "' + l + '" is used in schema at path "' + e.errSchemaPath + '"');
    }
    var p = typeof f == "object" && !(f instanceof RegExp) && f.validate, b = p && f.type || "string";
    if (p) {
      var g = f.async === !0;
      f = f.validate;
    }
    if (b != i)
      return d && (r += " if (true) { "), r;
    if (g) {
      if (!e.async)
        throw new Error("async format in sync schema");
      var S = "formats" + e.util.getProperty(l) + ".validate";
      r += " if (!(await " + S + "(" + h + "))) { ";
    } else {
      r += " if (! ";
      var S = "formats" + e.util.getProperty(l);
      p && (S += ".validate"), typeof f == "function" ? r += " " + S + "(" + h + ") " : r += " " + S + ".test(" + h + ") ", r += ") { ";
    }
  }
  var $ = $ || [];
  $.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { format:  ", v ? r += "" + t : r += "" + e.util.toQuotedString(l), r += "  } ", e.opts.messages !== !1 && (r += ` , message: 'should match format "`, v ? r += "' + " + t + " + '" : r += "" + e.util.escapeQuotes(l), r += `"' `), e.opts.verbose && (r += " , schema:  ", v ? r += "validate.schema" + P : r += "" + e.util.toQuotedString(l), r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
  var w = r;
  return r = $.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + w + "]); " : r += " validate.errors = [" + w + "]; return false; " : r += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", d && (r += " else { "), r;
}, qa = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "valid" + o, t = "errs__" + o, n = e.util.copy(e);
  n.level++;
  var c = "valid" + n.level, f = e.schema.then, p = e.schema.else, b = f !== void 0 && (e.opts.strictKeywords ? typeof f == "object" && Object.keys(f).length > 0 || f === !1 : e.util.schemaHasRules(f, e.RULES.all)), g = p !== void 0 && (e.opts.strictKeywords ? typeof p == "object" && Object.keys(p).length > 0 || p === !1 : e.util.schemaHasRules(p, e.RULES.all)), S = n.baseId;
  if (b || g) {
    var $;
    n.createErrors = !1, n.schema = l, n.schemaPath = P, n.errSchemaPath = m, r += " var " + t + " = errors; var " + v + " = true;  ";
    var w = e.compositeRule;
    e.compositeRule = n.compositeRule = !0, r += "  " + e.validate(n) + " ", n.baseId = S, n.createErrors = !0, r += "  errors = " + t + "; if (vErrors !== null) { if (" + t + ") vErrors.length = " + t + "; else vErrors = null; }  ", e.compositeRule = n.compositeRule = w, b ? (r += " if (" + c + ") {  ", n.schema = e.schema.then, n.schemaPath = e.schemaPath + ".then", n.errSchemaPath = e.errSchemaPath + "/then", r += "  " + e.validate(n) + " ", n.baseId = S, r += " " + v + " = " + c + "; ", b && g ? ($ = "ifClause" + o, r += " var " + $ + " = 'then'; ") : $ = "'then'", r += " } ", g && (r += " else { ")) : r += " if (!" + c + ") { ", g && (n.schema = e.schema.else, n.schemaPath = e.schemaPath + ".else", n.errSchemaPath = e.errSchemaPath + "/else", r += "  " + e.validate(n) + " ", n.baseId = S, r += " " + v + " = " + c + "; ", b && g ? ($ = "ifClause" + o, r += " var " + $ + " = 'else'; ") : $ = "'else'", r += " } "), r += " if (!" + v + ") {   var err =   ", e.createErrors !== !1 ? (r += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { failingKeyword: " + $ + " } ", e.opts.messages !== !1 && (r += ` , message: 'should match "' + ` + $ + ` + '" schema' `), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && d && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), r += " }   ", d && (r += " else { ");
  } else
    d && (r += " if (true) { ");
  return r;
}, Ma = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "valid" + o, t = "errs__" + o, n = e.util.copy(e), c = "";
  n.level++;
  var f = "valid" + n.level, p = "i" + o, b = n.dataLevel = e.dataLevel + 1, g = "data" + b, S = e.baseId;
  if (r += "var " + t + " = errors;var " + v + ";", Array.isArray(l)) {
    var $ = e.schema.additionalItems;
    if ($ === !1) {
      r += " " + v + " = " + h + ".length <= " + l.length + "; ";
      var w = m;
      m = e.errSchemaPath + "/additionalItems", r += "  if (!" + v + ") {   ";
      var D = D || [];
      D.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { limit: " + l.length + " } ", e.opts.messages !== !1 && (r += " , message: 'should NOT have more than " + l.length + " items' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
      var F = r;
      r = D.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + F + "]); " : r += " validate.errors = [" + F + "]; return false; " : r += " var err = " + F + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", m = w, d && (c += "}", r += " else { ");
    }
    var _ = l;
    if (_) {
      for (var O, I = -1, R = _.length - 1; I < R; )
        if (O = _[I += 1], e.opts.strictKeywords ? typeof O == "object" && Object.keys(O).length > 0 || O === !1 : e.util.schemaHasRules(O, e.RULES.all)) {
          r += " " + f + " = true; if (" + h + ".length > " + I + ") { ";
          var E = h + "[" + I + "]";
          n.schema = O, n.schemaPath = P + "[" + I + "]", n.errSchemaPath = m + "/" + I, n.errorPath = e.util.getPathExpr(e.errorPath, I, e.opts.jsonPointers, !0), n.dataPathArr[b] = I;
          var y = e.validate(n);
          n.baseId = S, e.util.varOccurences(y, g) < 2 ? r += " " + e.util.varReplace(y, g, E) + " " : r += " var " + g + " = " + E + "; " + y + " ", r += " }  ", d && (r += " if (" + f + ") { ", c += "}");
        }
    }
    if (typeof $ == "object" && (e.opts.strictKeywords ? typeof $ == "object" && Object.keys($).length > 0 || $ === !1 : e.util.schemaHasRules($, e.RULES.all))) {
      n.schema = $, n.schemaPath = e.schemaPath + ".additionalItems", n.errSchemaPath = e.errSchemaPath + "/additionalItems", r += " " + f + " = true; if (" + h + ".length > " + l.length + ") {  for (var " + p + " = " + l.length + "; " + p + " < " + h + ".length; " + p + "++) { ", n.errorPath = e.util.getPathExpr(e.errorPath, p, e.opts.jsonPointers, !0);
      var E = h + "[" + p + "]";
      n.dataPathArr[b] = p;
      var y = e.validate(n);
      n.baseId = S, e.util.varOccurences(y, g) < 2 ? r += " " + e.util.varReplace(y, g, E) + " " : r += " var " + g + " = " + E + "; " + y + " ", d && (r += " if (!" + f + ") break; "), r += " } }  ", d && (r += " if (" + f + ") { ", c += "}");
    }
  } else if (e.opts.strictKeywords ? typeof l == "object" && Object.keys(l).length > 0 || l === !1 : e.util.schemaHasRules(l, e.RULES.all)) {
    n.schema = l, n.schemaPath = P, n.errSchemaPath = m, r += "  for (var " + p + " = " + 0 + "; " + p + " < " + h + ".length; " + p + "++) { ", n.errorPath = e.util.getPathExpr(e.errorPath, p, e.opts.jsonPointers, !0);
    var E = h + "[" + p + "]";
    n.dataPathArr[b] = p;
    var y = e.validate(n);
    n.baseId = S, e.util.varOccurences(y, g) < 2 ? r += " " + e.util.varReplace(y, g, E) + " " : r += " var " + g + " = " + E + "; " + y + " ", d && (r += " if (!" + f + ") break; "), r += " }";
  }
  return d && (r += " " + c + " if (" + t + " == errors) {"), r;
}, Ye = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, S, h = "data" + (u || ""), v = e.opts.$data && l && l.$data, t;
  v ? (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ", t = "schema" + o) : t = l;
  var n = s == "maximum", c = n ? "exclusiveMaximum" : "exclusiveMinimum", f = e.schema[c], p = e.opts.$data && f && f.$data, b = n ? "<" : ">", g = n ? ">" : "<", S = void 0;
  if (!(v || typeof l == "number" || l === void 0))
    throw new Error(s + " must be number");
  if (!(p || f === void 0 || typeof f == "number" || typeof f == "boolean"))
    throw new Error(c + " must be number or boolean");
  if (p) {
    var $ = e.util.getData(f.$data, u, e.dataPathArr), w = "exclusive" + o, D = "exclType" + o, F = "exclIsNumber" + o, _ = "op" + o, O = "' + " + _ + " + '";
    r += " var schemaExcl" + o + " = " + $ + "; ", $ = "schemaExcl" + o, r += " var " + w + "; var " + D + " = typeof " + $ + "; if (" + D + " != 'boolean' && " + D + " != 'undefined' && " + D + " != 'number') { ";
    var S = c, I = I || [];
    I.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (S || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: {} ", e.opts.messages !== !1 && (r += " , message: '" + c + " should be boolean' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
    var R = r;
    r = I.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + R + "]); " : r += " validate.errors = [" + R + "]; return false; " : r += " var err = " + R + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else if ( ", v && (r += " (" + t + " !== undefined && typeof " + t + " != 'number') || "), r += " " + D + " == 'number' ? ( (" + w + " = " + t + " === undefined || " + $ + " " + b + "= " + t + ") ? " + h + " " + g + "= " + $ + " : " + h + " " + g + " " + t + " ) : ( (" + w + " = " + $ + " === true) ? " + h + " " + g + "= " + t + " : " + h + " " + g + " " + t + " ) || " + h + " !== " + h + ") { var op" + o + " = " + w + " ? '" + b + "' : '" + b + "='; ", l === void 0 && (S = c, m = e.errSchemaPath + "/" + c, t = $, v = p);
  } else {
    var F = typeof f == "number", O = b;
    if (F && v) {
      var _ = "'" + O + "'";
      r += " if ( ", v && (r += " (" + t + " !== undefined && typeof " + t + " != 'number') || "), r += " ( " + t + " === undefined || " + f + " " + b + "= " + t + " ? " + h + " " + g + "= " + f + " : " + h + " " + g + " " + t + " ) || " + h + " !== " + h + ") { ";
    } else {
      F && l === void 0 ? (w = !0, S = c, m = e.errSchemaPath + "/" + c, t = f, g += "=") : (F && (t = Math[n ? "min" : "max"](f, l)), f === (F ? t : !0) ? (w = !0, S = c, m = e.errSchemaPath + "/" + c, g += "=") : (w = !1, O += "="));
      var _ = "'" + O + "'";
      r += " if ( ", v && (r += " (" + t + " !== undefined && typeof " + t + " != 'number') || "), r += " " + h + " " + g + " " + t + " || " + h + " !== " + h + ") { ";
    }
  }
  S = S || s;
  var I = I || [];
  I.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (S || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { comparison: " + _ + ", limit: " + t + ", exclusive: " + w + " } ", e.opts.messages !== !1 && (r += " , message: 'should be " + O + " ", v ? r += "' + " + t : r += "" + t + "'"), e.opts.verbose && (r += " , schema:  ", v ? r += "validate.schema" + P : r += "" + l, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
  var R = r;
  return r = I.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + R + "]); " : r += " validate.errors = [" + R + "]; return false; " : r += " var err = " + R + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", d && (r += " else { "), r;
}, Ze = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, c, h = "data" + (u || ""), v = e.opts.$data && l && l.$data, t;
  if (v ? (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ", t = "schema" + o) : t = l, !(v || typeof l == "number"))
    throw new Error(s + " must be number");
  var n = s == "maxItems" ? ">" : "<";
  r += "if ( ", v && (r += " (" + t + " !== undefined && typeof " + t + " != 'number') || "), r += " " + h + ".length " + n + " " + t + ") { ";
  var c = s, f = f || [];
  f.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (c || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { limit: " + t + " } ", e.opts.messages !== !1 && (r += " , message: 'should NOT have ", s == "maxItems" ? r += "more" : r += "fewer", r += " than ", v ? r += "' + " + t + " + '" : r += "" + l, r += " items' "), e.opts.verbose && (r += " , schema:  ", v ? r += "validate.schema" + P : r += "" + l, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
  var p = r;
  return r = f.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + p + "]); " : r += " validate.errors = [" + p + "]; return false; " : r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", d && (r += " else { "), r;
}, We = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, c, h = "data" + (u || ""), v = e.opts.$data && l && l.$data, t;
  if (v ? (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ", t = "schema" + o) : t = l, !(v || typeof l == "number"))
    throw new Error(s + " must be number");
  var n = s == "maxLength" ? ">" : "<";
  r += "if ( ", v && (r += " (" + t + " !== undefined && typeof " + t + " != 'number') || "), e.opts.unicode === !1 ? r += " " + h + ".length " : r += " ucs2length(" + h + ") ", r += " " + n + " " + t + ") { ";
  var c = s, f = f || [];
  f.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (c || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { limit: " + t + " } ", e.opts.messages !== !1 && (r += " , message: 'should NOT be ", s == "maxLength" ? r += "longer" : r += "shorter", r += " than ", v ? r += "' + " + t + " + '" : r += "" + l, r += " characters' "), e.opts.verbose && (r += " , schema:  ", v ? r += "validate.schema" + P : r += "" + l, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
  var p = r;
  return r = f.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + p + "]); " : r += " validate.errors = [" + p + "]; return false; " : r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", d && (r += " else { "), r;
}, Xe = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, c, h = "data" + (u || ""), v = e.opts.$data && l && l.$data, t;
  if (v ? (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ", t = "schema" + o) : t = l, !(v || typeof l == "number"))
    throw new Error(s + " must be number");
  var n = s == "maxProperties" ? ">" : "<";
  r += "if ( ", v && (r += " (" + t + " !== undefined && typeof " + t + " != 'number') || "), r += " Object.keys(" + h + ").length " + n + " " + t + ") { ";
  var c = s, f = f || [];
  f.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (c || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { limit: " + t + " } ", e.opts.messages !== !1 && (r += " , message: 'should NOT have ", s == "maxProperties" ? r += "more" : r += "fewer", r += " than ", v ? r += "' + " + t + " + '" : r += "" + l, r += " properties' "), e.opts.verbose && (r += " , schema:  ", v ? r += "validate.schema" + P : r += "" + l, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
  var p = r;
  return r = f.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + p + "]); " : r += " validate.errors = [" + p + "]; return false; " : r += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", d && (r += " else { "), r;
}, ka = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = e.opts.$data && l && l.$data, t;
  if (v ? (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ", t = "schema" + o) : t = l, !(v || typeof l == "number"))
    throw new Error(s + " must be number");
  r += "var division" + o + ";if (", v && (r += " " + t + " !== undefined && ( typeof " + t + " != 'number' || "), r += " (division" + o + " = " + h + " / " + t + ", ", e.opts.multipleOfPrecision ? r += " Math.abs(Math.round(division" + o + ") - division" + o + ") > 1e-" + e.opts.multipleOfPrecision + " " : r += " division" + o + " !== parseInt(division" + o + ") ", r += " ) ", v && (r += "  )  "), r += " ) {   ";
  var n = n || [];
  n.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { multipleOf: " + t + " } ", e.opts.messages !== !1 && (r += " , message: 'should be multiple of ", v ? r += "' + " + t : r += "" + t + "'"), e.opts.verbose && (r += " , schema:  ", v ? r += "validate.schema" + P : r += "" + l, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
  var c = r;
  return r = n.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + c + "]); " : r += " validate.errors = [" + c + "]; return false; " : r += " var err = " + c + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", d && (r += " else { "), r;
}, Ka = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "errs__" + o, t = e.util.copy(e);
  t.level++;
  var n = "valid" + t.level;
  if (e.opts.strictKeywords ? typeof l == "object" && Object.keys(l).length > 0 || l === !1 : e.util.schemaHasRules(l, e.RULES.all)) {
    t.schema = l, t.schemaPath = P, t.errSchemaPath = m, r += " var " + v + " = errors;  ";
    var c = e.compositeRule;
    e.compositeRule = t.compositeRule = !0, t.createErrors = !1;
    var f;
    t.opts.allErrors && (f = t.opts.allErrors, t.opts.allErrors = !1), r += " " + e.validate(t) + " ", t.createErrors = !0, f && (t.opts.allErrors = f), e.compositeRule = t.compositeRule = c, r += " if (" + n + ") {   ";
    var p = p || [];
    p.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: {} ", e.opts.messages !== !1 && (r += " , message: 'should NOT be valid' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
    var b = r;
    r = p.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + b + "]); " : r += " validate.errors = [" + b + "]; return false; " : r += " var err = " + b + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else {  errors = " + v + "; if (vErrors !== null) { if (" + v + ") vErrors.length = " + v + "; else vErrors = null; } ", e.opts.allErrors && (r += " } ");
  } else
    r += "  var err =   ", e.createErrors !== !1 ? (r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: {} ", e.opts.messages !== !1 && (r += " , message: 'should NOT be valid' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d && (r += " if (false) { ");
  return r;
}, Ba = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "valid" + o, t = "errs__" + o, n = e.util.copy(e), c = "";
  n.level++;
  var f = "valid" + n.level, p = n.baseId, b = "prevValid" + o, g = "passingSchemas" + o;
  r += "var " + t + " = errors , " + b + " = false , " + v + " = false , " + g + " = null; ";
  var S = e.compositeRule;
  e.compositeRule = n.compositeRule = !0;
  var $ = l;
  if ($)
    for (var w, D = -1, F = $.length - 1; D < F; )
      w = $[D += 1], (e.opts.strictKeywords ? typeof w == "object" && Object.keys(w).length > 0 || w === !1 : e.util.schemaHasRules(w, e.RULES.all)) ? (n.schema = w, n.schemaPath = P + "[" + D + "]", n.errSchemaPath = m + "/" + D, r += "  " + e.validate(n) + " ", n.baseId = p) : r += " var " + f + " = true; ", D && (r += " if (" + f + " && " + b + ") { " + v + " = false; " + g + " = [" + g + ", " + D + "]; } else { ", c += "}"), r += " if (" + f + ") { " + v + " = " + b + " = true; " + g + " = " + D + "; }";
  return e.compositeRule = n.compositeRule = S, r += "" + c + "if (!" + v + ") {   var err =   ", e.createErrors !== !1 ? (r += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { passingSchemas: " + g + " } ", e.opts.messages !== !1 && (r += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && d && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), r += "} else {  errors = " + t + "; if (vErrors !== null) { if (" + t + ") vErrors.length = " + t + "; else vErrors = null; }", e.opts.allErrors && (r += " } "), r;
}, Ha = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = e.opts.$data && l && l.$data, t;
  v ? (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ", t = "schema" + o) : t = l;
  var n = v ? "(new RegExp(" + t + "))" : e.usePattern(l);
  r += "if ( ", v && (r += " (" + t + " !== undefined && typeof " + t + " != 'string') || "), r += " !" + n + ".test(" + h + ") ) {   ";
  var c = c || [];
  c.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { pattern:  ", v ? r += "" + t : r += "" + e.util.toQuotedString(l), r += "  } ", e.opts.messages !== !1 && (r += ` , message: 'should match pattern "`, v ? r += "' + " + t + " + '" : r += "" + e.util.escapeQuotes(l), r += `"' `), e.opts.verbose && (r += " , schema:  ", v ? r += "validate.schema" + P : r += "" + e.util.toQuotedString(l), r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
  var f = r;
  return r = c.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + f + "]); " : r += " validate.errors = [" + f + "]; return false; " : r += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", d && (r += " else { "), r;
}, Ja = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "errs__" + o, t = e.util.copy(e), n = "";
  t.level++;
  var c = "valid" + t.level, f = "key" + o, p = "idx" + o, b = t.dataLevel = e.dataLevel + 1, g = "data" + b, S = "dataProperties" + o, $ = Object.keys(l || {}).filter(Q), w = e.schema.patternProperties || {}, D = Object.keys(w).filter(Q), F = e.schema.additionalProperties, _ = $.length || D.length, O = F === !1, I = typeof F == "object" && Object.keys(F).length, R = e.opts.removeAdditional, E = O || I || R, y = e.opts.ownProperties, j = e.baseId, z = e.schema.required;
  if (z && !(e.opts.$data && z.$data) && z.length < e.opts.loopRequired)
    var A = e.util.toHash(z);
  function Q(Lr) {
    return Lr !== "__proto__";
  }
  if (r += "var " + v + " = errors;var " + c + " = true;", y && (r += " var " + S + " = undefined;"), E) {
    if (y ? r += " " + S + " = " + S + " || Object.keys(" + h + "); for (var " + p + "=0; " + p + "<" + S + ".length; " + p + "++) { var " + f + " = " + S + "[" + p + "]; " : r += " for (var " + f + " in " + h + ") { ", _) {
      if (r += " var isAdditional" + o + " = !(false ", $.length)
        if ($.length > 8)
          r += " || validate.schema" + P + ".hasOwnProperty(" + f + ") ";
        else {
          var L = $;
          if (L)
            for (var x, V = -1, k = L.length - 1; V < k; )
              x = L[V += 1], r += " || " + f + " == " + e.util.toQuotedString(x) + " ";
        }
      if (D.length) {
        var B = D;
        if (B)
          for (var T, X = -1, ee = B.length - 1; X < ee; )
            T = B[X += 1], r += " || " + e.usePattern(T) + ".test(" + f + ") ";
      }
      r += " ); if (isAdditional" + o + ") { ";
    }
    if (R == "all")
      r += " delete " + h + "[" + f + "]; ";
    else {
      var G = e.errorPath, fe = "' + " + f + " + '";
      if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, f, e.opts.jsonPointers)), O)
        if (R)
          r += " delete " + h + "[" + f + "]; ";
        else {
          r += " " + c + " = false; ";
          var oe = m;
          m = e.errSchemaPath + "/additionalProperties";
          var q = q || [];
          q.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { additionalProperty: '" + fe + "' } ", e.opts.messages !== !1 && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is an invalid additional property" : r += "should NOT have additional properties", r += "' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
          var U = r;
          r = q.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + U + "]); " : r += " validate.errors = [" + U + "]; return false; " : r += " var err = " + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", m = oe, d && (r += " break; ");
        }
      else if (I)
        if (R == "failing") {
          r += " var " + v + " = errors;  ";
          var le = e.compositeRule;
          e.compositeRule = t.compositeRule = !0, t.schema = F, t.schemaPath = e.schemaPath + ".additionalProperties", t.errSchemaPath = e.errSchemaPath + "/additionalProperties", t.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, f, e.opts.jsonPointers);
          var K = h + "[" + f + "]";
          t.dataPathArr[b] = f;
          var C = e.validate(t);
          t.baseId = j, e.util.varOccurences(C, g) < 2 ? r += " " + e.util.varReplace(C, g, K) + " " : r += " var " + g + " = " + K + "; " + C + " ", r += " if (!" + c + ") { errors = " + v + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + h + "[" + f + "]; }  ", e.compositeRule = t.compositeRule = le;
        } else {
          t.schema = F, t.schemaPath = e.schemaPath + ".additionalProperties", t.errSchemaPath = e.errSchemaPath + "/additionalProperties", t.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, f, e.opts.jsonPointers);
          var K = h + "[" + f + "]";
          t.dataPathArr[b] = f;
          var C = e.validate(t);
          t.baseId = j, e.util.varOccurences(C, g) < 2 ? r += " " + e.util.varReplace(C, g, K) + " " : r += " var " + g + " = " + K + "; " + C + " ", d && (r += " if (!" + c + ") break; ");
        }
      e.errorPath = G;
    }
    _ && (r += " } "), r += " }  ", d && (r += " if (" + c + ") { ", n += "}");
  }
  var ae = e.opts.useDefaults && !e.compositeRule;
  if ($.length) {
    var se = $;
    if (se)
      for (var x, he = -1, ue = se.length - 1; he < ue; ) {
        x = se[he += 1];
        var M = l[x];
        if (e.opts.strictKeywords ? typeof M == "object" && Object.keys(M).length > 0 || M === !1 : e.util.schemaHasRules(M, e.RULES.all)) {
          var ne = e.util.getProperty(x), K = h + ne, _e = ae && M.default !== void 0;
          t.schema = M, t.schemaPath = P + ne, t.errSchemaPath = m + "/" + e.util.escapeFragment(x), t.errorPath = e.util.getPath(e.errorPath, x, e.opts.jsonPointers), t.dataPathArr[b] = e.util.toQuotedString(x);
          var C = e.validate(t);
          if (t.baseId = j, e.util.varOccurences(C, g) < 2) {
            C = e.util.varReplace(C, g, K);
            var H = K;
          } else {
            var H = g;
            r += " var " + g + " = " + K + "; ";
          }
          if (_e)
            r += " " + C + " ";
          else {
            if (A && A[x]) {
              r += " if ( " + H + " === undefined ", y && (r += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(x) + "') "), r += ") { " + c + " = false; ";
              var G = e.errorPath, oe = m, Y = e.util.escapeQuotes(x);
              e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(G, x, e.opts.jsonPointers)), m = e.errSchemaPath + "/required";
              var q = q || [];
              q.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { missingProperty: '" + Y + "' } ", e.opts.messages !== !1 && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + Y + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
              var U = r;
              r = q.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + U + "]); " : r += " validate.errors = [" + U + "]; return false; " : r += " var err = " + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", m = oe, e.errorPath = G, r += " } else { ";
            } else
              d ? (r += " if ( " + H + " === undefined ", y && (r += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(x) + "') "), r += ") { " + c + " = true; } else { ") : (r += " if (" + H + " !== undefined ", y && (r += " &&   Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(x) + "') "), r += " ) { ");
            r += " " + C + " } ";
          }
        }
        d && (r += " if (" + c + ") { ", n += "}");
      }
  }
  if (D.length) {
    var J = D;
    if (J)
      for (var T, Ke = -1, xr = J.length - 1; Ke < xr; ) {
        T = J[Ke += 1];
        var M = w[T];
        if (e.opts.strictKeywords ? typeof M == "object" && Object.keys(M).length > 0 || M === !1 : e.util.schemaHasRules(M, e.RULES.all)) {
          t.schema = M, t.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(T), t.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(T), y ? r += " " + S + " = " + S + " || Object.keys(" + h + "); for (var " + p + "=0; " + p + "<" + S + ".length; " + p + "++) { var " + f + " = " + S + "[" + p + "]; " : r += " for (var " + f + " in " + h + ") { ", r += " if (" + e.usePattern(T) + ".test(" + f + ")) { ", t.errorPath = e.util.getPathExpr(e.errorPath, f, e.opts.jsonPointers);
          var K = h + "[" + f + "]";
          t.dataPathArr[b] = f;
          var C = e.validate(t);
          t.baseId = j, e.util.varOccurences(C, g) < 2 ? r += " " + e.util.varReplace(C, g, K) + " " : r += " var " + g + " = " + K + "; " + C + " ", d && (r += " if (!" + c + ") break; "), r += " } ", d && (r += " else " + c + " = true; "), r += " }  ", d && (r += " if (" + c + ") { ", n += "}");
        }
      }
  }
  return d && (r += " " + n + " if (" + v + " == errors) {"), r;
}, Ga = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "errs__" + o, t = e.util.copy(e), n = "";
  t.level++;
  var c = "valid" + t.level;
  if (r += "var " + v + " = errors;", e.opts.strictKeywords ? typeof l == "object" && Object.keys(l).length > 0 || l === !1 : e.util.schemaHasRules(l, e.RULES.all)) {
    t.schema = l, t.schemaPath = P, t.errSchemaPath = m;
    var f = "key" + o, p = "idx" + o, b = "i" + o, g = "' + " + f + " + '", S = t.dataLevel = e.dataLevel + 1, $ = "data" + S, w = "dataProperties" + o, D = e.opts.ownProperties, F = e.baseId;
    D && (r += " var " + w + " = undefined; "), D ? r += " " + w + " = " + w + " || Object.keys(" + h + "); for (var " + p + "=0; " + p + "<" + w + ".length; " + p + "++) { var " + f + " = " + w + "[" + p + "]; " : r += " for (var " + f + " in " + h + ") { ", r += " var startErrs" + o + " = errors; ";
    var _ = f, O = e.compositeRule;
    e.compositeRule = t.compositeRule = !0;
    var I = e.validate(t);
    t.baseId = F, e.util.varOccurences(I, $) < 2 ? r += " " + e.util.varReplace(I, $, _) + " " : r += " var " + $ + " = " + _ + "; " + I + " ", e.compositeRule = t.compositeRule = O, r += " if (!" + c + ") { for (var " + b + "=startErrs" + o + "; " + b + "<errors; " + b + "++) { vErrors[" + b + "].propertyName = " + f + "; }   var err =   ", e.createErrors !== !1 ? (r += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { propertyName: '" + g + "' } ", e.opts.messages !== !1 && (r += " , message: 'property name \\'" + g + "\\' is invalid' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && d && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), d && (r += " break; "), r += " } }";
  }
  return d && (r += " " + n + " if (" + v + " == errors) {"), r;
}, Ya = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "valid" + o, t = e.opts.$data && l && l.$data;
  t && (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ");
  var n = "schema" + o;
  if (!t)
    if (l.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
      var c = [], f = l;
      if (f)
        for (var p, b = -1, g = f.length - 1; b < g; ) {
          p = f[b += 1];
          var S = e.schema.properties[p];
          S && (e.opts.strictKeywords ? typeof S == "object" && Object.keys(S).length > 0 || S === !1 : e.util.schemaHasRules(S, e.RULES.all)) || (c[c.length] = p);
        }
    } else
      var c = l;
  if (t || c.length) {
    var $ = e.errorPath, w = t || c.length >= e.opts.loopRequired, D = e.opts.ownProperties;
    if (d)
      if (r += " var missing" + o + "; ", w) {
        t || (r += " var " + n + " = validate.schema" + P + "; ");
        var F = "i" + o, _ = "schema" + o + "[" + F + "]", O = "' + " + _ + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr($, _, e.opts.jsonPointers)), r += " var " + v + " = true; ", t && (r += " if (schema" + o + " === undefined) " + v + " = true; else if (!Array.isArray(schema" + o + ")) " + v + " = false; else {"), r += " for (var " + F + " = 0; " + F + " < " + n + ".length; " + F + "++) { " + v + " = " + h + "[" + n + "[" + F + "]] !== undefined ", D && (r += " &&   Object.prototype.hasOwnProperty.call(" + h + ", " + n + "[" + F + "]) "), r += "; if (!" + v + ") break; } ", t && (r += "  }  "), r += "  if (!" + v + ") {   ";
        var I = I || [];
        I.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { missingProperty: '" + O + "' } ", e.opts.messages !== !1 && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + O + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
        var R = r;
        r = I.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + R + "]); " : r += " validate.errors = [" + R + "]; return false; " : r += " var err = " + R + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else { ";
      } else {
        r += " if ( ";
        var E = c;
        if (E)
          for (var y, F = -1, j = E.length - 1; F < j; ) {
            y = E[F += 1], F && (r += " || ");
            var z = e.util.getProperty(y), A = h + z;
            r += " ( ( " + A + " === undefined ", D && (r += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(y) + "') "), r += ") && (missing" + o + " = " + e.util.toQuotedString(e.opts.jsonPointers ? y : z) + ") ) ";
          }
        r += ") {  ";
        var _ = "missing" + o, O = "' + " + _ + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr($, _, !0) : $ + " + " + _);
        var I = I || [];
        I.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { missingProperty: '" + O + "' } ", e.opts.messages !== !1 && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + O + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
        var R = r;
        r = I.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + R + "]); " : r += " validate.errors = [" + R + "]; return false; " : r += " var err = " + R + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else { ";
      }
    else if (w) {
      t || (r += " var " + n + " = validate.schema" + P + "; ");
      var F = "i" + o, _ = "schema" + o + "[" + F + "]", O = "' + " + _ + " + '";
      e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr($, _, e.opts.jsonPointers)), t && (r += " if (" + n + " && !Array.isArray(" + n + ")) {  var err =   ", e.createErrors !== !1 ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { missingProperty: '" + O + "' } ", e.opts.messages !== !1 && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + O + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + n + " !== undefined) { "), r += " for (var " + F + " = 0; " + F + " < " + n + ".length; " + F + "++) { if (" + h + "[" + n + "[" + F + "]] === undefined ", D && (r += " || ! Object.prototype.hasOwnProperty.call(" + h + ", " + n + "[" + F + "]) "), r += ") {  var err =   ", e.createErrors !== !1 ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { missingProperty: '" + O + "' } ", e.opts.messages !== !1 && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + O + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", t && (r += "  }  ");
    } else {
      var Q = c;
      if (Q)
        for (var y, L = -1, x = Q.length - 1; L < x; ) {
          y = Q[L += 1];
          var z = e.util.getProperty(y), O = e.util.escapeQuotes(y), A = h + z;
          e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath($, y, e.opts.jsonPointers)), r += " if ( " + A + " === undefined ", D && (r += " || ! Object.prototype.hasOwnProperty.call(" + h + ", '" + e.util.escapeQuotes(y) + "') "), r += ") {  var err =   ", e.createErrors !== !1 ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { missingProperty: '" + O + "' } ", e.opts.messages !== !1 && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + O + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
        }
    }
    e.errorPath = $;
  } else
    d && (r += " if (true) {");
  return r;
}, Za = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h = "data" + (u || ""), v = "valid" + o, t = e.opts.$data && l && l.$data, n;
  if (t ? (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ", n = "schema" + o) : n = l, (l || t) && e.opts.uniqueItems !== !1) {
    t && (r += " var " + v + "; if (" + n + " === false || " + n + " === undefined) " + v + " = true; else if (typeof " + n + " != 'boolean') " + v + " = false; else { "), r += " var i = " + h + ".length , " + v + " = true , j; if (i > 1) { ";
    var c = e.schema.items && e.schema.items.type, f = Array.isArray(c);
    if (!c || c == "object" || c == "array" || f && (c.indexOf("object") >= 0 || c.indexOf("array") >= 0))
      r += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + h + "[i], " + h + "[j])) { " + v + " = false; break outer; } } } ";
    else {
      r += " var itemIndices = {}, item; for (;i--;) { var item = " + h + "[i]; ";
      var p = "checkDataType" + (f ? "s" : "");
      r += " if (" + e.util[p](c, "item", e.opts.strictNumbers, !0) + ") continue; ", f && (r += ` if (typeof item == 'string') item = '"' + item; `), r += " if (typeof itemIndices[item] == 'number') { " + v + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
    }
    r += " } ", t && (r += "  }  "), r += " if (!" + v + ") {   ";
    var b = b || [];
    b.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { i: i, j: j } ", e.opts.messages !== !1 && (r += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (r += " , schema:  ", t ? r += "validate.schema" + P : r += "" + l, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
    var g = r;
    r = b.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + g + "]); " : r += " validate.errors = [" + g + "]; return false; " : r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", d && (r += " else { ");
  } else
    d && (r += " if (true) { ");
  return r;
}, Wa = {
  $ref: La,
  allOf: Aa,
  anyOf: Qa,
  $comment: za,
  const: Ta,
  contains: Na,
  dependencies: Ca,
  enum: Ua,
  format: Va,
  if: qa,
  items: Ma,
  maximum: Ye,
  minimum: Ye,
  maxItems: Ze,
  minItems: Ze,
  maxLength: We,
  minLength: We,
  maxProperties: Xe,
  minProperties: Xe,
  multipleOf: ka,
  not: Ka,
  oneOf: Ba,
  pattern: Ha,
  properties: Ja,
  propertyNames: Ga,
  required: Ya,
  uniqueItems: Za,
  validate: fr
}, er = Wa, Re = te.toHash, Xa = function() {
  var e = [
    {
      type: "number",
      rules: [
        { maximum: ["exclusiveMaximum"] },
        { minimum: ["exclusiveMinimum"] },
        "multipleOf",
        "format"
      ]
    },
    {
      type: "string",
      rules: ["maxLength", "minLength", "pattern", "format"]
    },
    {
      type: "array",
      rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
    },
    {
      type: "object",
      rules: [
        "maxProperties",
        "minProperties",
        "required",
        "dependencies",
        "propertyNames",
        { properties: ["additionalProperties", "patternProperties"] }
      ]
    },
    { rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"] }
  ], s = ["type", "$comment"], i = [
    "$schema",
    "$id",
    "id",
    "$data",
    "$async",
    "title",
    "description",
    "default",
    "definitions",
    "examples",
    "readOnly",
    "writeOnly",
    "contentMediaType",
    "contentEncoding",
    "additionalItems",
    "then",
    "else"
  ], r = ["number", "integer", "string", "array", "object", "boolean", "null"];
  return e.all = Re(s), e.types = Re(r), e.forEach(function(o) {
    o.rules = o.rules.map(function(u) {
      var l;
      if (typeof u == "object") {
        var P = Object.keys(u)[0];
        l = u[P], u = P, l.forEach(function(d) {
          s.push(d), e.all[d] = !0;
        });
      }
      s.push(u);
      var m = e.all[u] = {
        keyword: u,
        code: er[u],
        implements: l
      };
      return m;
    }), e.all.$comment = {
      keyword: "$comment",
      code: er.$comment
    }, o.type && (e.types[o.type] = o);
  }), e.keywords = Re(s.concat(i)), e.custom = {}, e;
}, rr = [
  "multipleOf",
  "maximum",
  "exclusiveMaximum",
  "minimum",
  "exclusiveMinimum",
  "maxLength",
  "minLength",
  "pattern",
  "additionalItems",
  "maxItems",
  "minItems",
  "uniqueItems",
  "maxProperties",
  "minProperties",
  "required",
  "additionalProperties",
  "enum",
  "format",
  "const"
], es = function(a, e) {
  for (var s = 0; s < e.length; s++) {
    a = JSON.parse(JSON.stringify(a));
    var i = e[s].split("/"), r = a, o;
    for (o = 1; o < i.length; o++)
      r = r[i[o]];
    for (o = 0; o < rr.length; o++) {
      var u = rr[o], l = r[u];
      l && (r[u] = {
        anyOf: [
          l,
          { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
        ]
      });
    }
  }
  return a;
}, rs = Me.MissingRef, as = $r;
function $r(a, e, s) {
  var i = this;
  if (typeof this._opts.loadSchema != "function")
    throw new Error("options.loadSchema should be a function");
  typeof e == "function" && (s = e, e = void 0);
  var r = o(a).then(function() {
    var l = i._addSchema(a, void 0, e);
    return l.validate || u(l);
  });
  return s && r.then(
    function(l) {
      s(null, l);
    },
    s
  ), r;
  function o(l) {
    var P = l.$schema;
    return P && !i.getSchema(P) ? $r.call(i, { $ref: P }, !0) : Promise.resolve();
  }
  function u(l) {
    try {
      return i._compile(l);
    } catch (m) {
      if (m instanceof rs)
        return P(m);
      throw m;
    }
    function P(m) {
      var d = m.missingSchema;
      if (t(d))
        throw new Error("Schema " + d + " is loaded but " + m.missingRef + " cannot be resolved");
      var h = i._loadingSchemas[d];
      return h || (h = i._loadingSchemas[d] = i._opts.loadSchema(d), h.then(v, v)), h.then(function(n) {
        if (!t(d))
          return o(n).then(function() {
            t(d) || i.addSchema(n, d, void 0, e);
          });
      }).then(function() {
        return u(l);
      });
      function v() {
        delete i._loadingSchemas[d];
      }
      function t(n) {
        return i._refs[n] || i._schemas[n];
      }
    }
  }
}
var ss = function(e, s, i) {
  var r = " ", o = e.level, u = e.dataLevel, l = e.schema[s], P = e.schemaPath + e.util.getProperty(s), m = e.errSchemaPath + "/" + s, d = !e.opts.allErrors, h, v = "data" + (u || ""), t = "valid" + o, n = "errs__" + o, c = e.opts.$data && l && l.$data, f;
  c ? (r += " var schema" + o + " = " + e.util.getData(l.$data, u, e.dataPathArr) + "; ", f = "schema" + o) : f = l;
  var p = this, b = "definition" + o, g = p.definition, S = "", $, w, D, F, _;
  if (c && g.$data) {
    _ = "keywordValidate" + o;
    var O = g.validateSchema;
    r += " var " + b + " = RULES.custom['" + s + "'].definition; var " + _ + " = " + b + ".validate;";
  } else {
    if (F = e.useCustomRule(p, l, e.schema, e), !F)
      return;
    f = "validate.schema" + P, _ = F.code, $ = g.compile, w = g.inline, D = g.macro;
  }
  var I = _ + ".errors", R = "i" + o, E = "ruleErr" + o, y = g.async;
  if (y && !e.async)
    throw new Error("async keyword in sync schema");
  if (w || D || (r += "" + I + " = null;"), r += "var " + n + " = errors;var " + t + ";", c && g.$data && (S += "}", r += " if (" + f + " === undefined) { " + t + " = true; } else { ", O && (S += "}", r += " " + t + " = " + b + ".validateSchema(" + f + "); if (" + t + ") { ")), w)
    g.statements ? r += " " + F.validate + " " : r += " " + t + " = " + F.validate + "; ";
  else if (D) {
    var j = e.util.copy(e), S = "";
    j.level++;
    var z = "valid" + j.level;
    j.schema = F.validate, j.schemaPath = "";
    var A = e.compositeRule;
    e.compositeRule = j.compositeRule = !0;
    var Q = e.validate(j).replace(/validate\.schema/g, _);
    e.compositeRule = j.compositeRule = A, r += " " + Q;
  } else {
    var L = L || [];
    L.push(r), r = "", r += "  " + _ + ".call( ", e.opts.passContext ? r += "this" : r += "self", $ || g.schema === !1 ? r += " , " + v + " " : r += " , " + f + " , " + v + " , validate.schema" + e.schemaPath + " ", r += " , (dataPath || '')", e.errorPath != '""' && (r += " + " + e.errorPath);
    var x = u ? "data" + (u - 1 || "") : "parentData", V = u ? e.dataPathArr[u] : "parentDataProperty";
    r += " , " + x + " , " + V + " , rootData )  ";
    var k = r;
    r = L.pop(), g.errors === !1 ? (r += " " + t + " = ", y && (r += "await "), r += "" + k + "; ") : y ? (I = "customErrors" + o, r += " var " + I + " = null; try { " + t + " = await " + k + "; } catch (e) { " + t + " = false; if (e instanceof ValidationError) " + I + " = e.errors; else throw e; } ") : r += " " + I + " = null; " + t + " = " + k + "; ";
  }
  if (g.modifying && (r += " if (" + x + ") " + v + " = " + x + "[" + V + "];"), r += "" + S, g.valid)
    d && (r += " if (true) { ");
  else {
    r += " if ( ", g.valid === void 0 ? (r += " !", D ? r += "" + z : r += "" + t) : r += " " + !g.valid + " ", r += ") { ", h = p.keyword;
    var L = L || [];
    L.push(r), r = "";
    var L = L || [];
    L.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (h || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { keyword: '" + p.keyword + "' } ", e.opts.messages !== !1 && (r += ` , message: 'should pass "` + p.keyword + `" keyword validation' `), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + v + " "), r += " } ") : r += " {} ";
    var B = r;
    r = L.pop(), !e.compositeRule && d ? e.async ? r += " throw new ValidationError([" + B + "]); " : r += " validate.errors = [" + B + "]; return false; " : r += " var err = " + B + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    var T = r;
    r = L.pop(), w ? g.errors ? g.errors != "full" && (r += "  for (var " + R + "=" + n + "; " + R + "<errors; " + R + "++) { var " + E + " = vErrors[" + R + "]; if (" + E + ".dataPath === undefined) " + E + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + E + ".schemaPath === undefined) { " + E + '.schemaPath = "' + m + '"; } ', e.opts.verbose && (r += " " + E + ".schema = " + f + "; " + E + ".data = " + v + "; "), r += " } ") : g.errors === !1 ? r += " " + T + " " : (r += " if (" + n + " == errors) { " + T + " } else {  for (var " + R + "=" + n + "; " + R + "<errors; " + R + "++) { var " + E + " = vErrors[" + R + "]; if (" + E + ".dataPath === undefined) " + E + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + E + ".schemaPath === undefined) { " + E + '.schemaPath = "' + m + '"; } ', e.opts.verbose && (r += " " + E + ".schema = " + f + "; " + E + ".data = " + v + "; "), r += " } } ") : D ? (r += "   var err =   ", e.createErrors !== !1 ? (r += " { keyword: '" + (h || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { keyword: '" + p.keyword + "' } ", e.opts.messages !== !1 && (r += ` , message: 'should pass "` + p.keyword + `" keyword validation' `), e.opts.verbose && (r += " , schema: validate.schema" + P + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + v + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && d && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; ")) : g.errors === !1 ? r += " " + T + " " : (r += " if (Array.isArray(" + I + ")) { if (vErrors === null) vErrors = " + I + "; else vErrors = vErrors.concat(" + I + "); errors = vErrors.length;  for (var " + R + "=" + n + "; " + R + "<errors; " + R + "++) { var " + E + " = vErrors[" + R + "]; if (" + E + ".dataPath === undefined) " + E + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + E + '.schemaPath = "' + m + '";  ', e.opts.verbose && (r += " " + E + ".schema = " + f + "; " + E + ".data = " + v + "; "), r += " } } else { " + T + " } "), r += " } ", d && (r += " else { ");
  }
  return r;
};
const ts = "http://json-schema.org/draft-07/schema#", os = "http://json-schema.org/draft-07/schema#", ls = "Core schema meta-schema", ns = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $ref: "#"
    }
  },
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      {
        $ref: "#/definitions/nonNegativeInteger"
      },
      {
        default: 0
      }
    ]
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, is = [
  "object",
  "boolean"
], fs = {
  $id: {
    type: "string",
    format: "uri-reference"
  },
  $schema: {
    type: "string",
    format: "uri"
  },
  $ref: {
    type: "string",
    format: "uri-reference"
  },
  $comment: {
    type: "string"
  },
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  readOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  additionalItems: {
    $ref: "#"
  },
  items: {
    anyOf: [
      {
        $ref: "#"
      },
      {
        $ref: "#/definitions/schemaArray"
      }
    ],
    default: !0
  },
  maxItems: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  contains: {
    $ref: "#"
  },
  maxProperties: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/definitions/stringArray"
  },
  additionalProperties: {
    $ref: "#"
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  properties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependencies: {
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/stringArray"
        }
      ]
    }
  },
  propertyNames: {
    $ref: "#"
  },
  const: !0,
  enum: {
    type: "array",
    items: !0,
    minItems: 1,
    uniqueItems: !0
  },
  type: {
    anyOf: [
      {
        $ref: "#/definitions/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  format: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentEncoding: {
    type: "string"
  },
  if: {
    $ref: "#"
  },
  then: {
    $ref: "#"
  },
  else: {
    $ref: "#"
  },
  allOf: {
    $ref: "#/definitions/schemaArray"
  },
  anyOf: {
    $ref: "#/definitions/schemaArray"
  },
  oneOf: {
    $ref: "#/definitions/schemaArray"
  },
  not: {
    $ref: "#"
  }
}, wr = {
  $schema: ts,
  $id: os,
  title: ls,
  definitions: ns,
  type: is,
  properties: fs,
  default: !0
};
var ar = wr, hs = {
  $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",
  definitions: {
    simpleTypes: ar.definitions.simpleTypes
  },
  type: "object",
  dependencies: {
    schema: ["validate"],
    $data: ["validate"],
    statements: ["inline"],
    valid: { not: { required: ["macro"] } }
  },
  properties: {
    type: ar.properties.type,
    schema: { type: "boolean" },
    statements: { type: "boolean" },
    dependencies: {
      type: "array",
      items: { type: "string" }
    },
    metaSchema: { type: "object" },
    modifying: { type: "boolean" },
    valid: { type: "boolean" },
    $data: { type: "boolean" },
    async: { type: "boolean" },
    errors: {
      anyOf: [
        { type: "boolean" },
        { const: "full" }
      ]
    }
  }
}, us = /^[a-z_$][a-z0-9_$-]*$/i, cs = ss, vs = hs, ds = {
  add: ms,
  get: ps,
  remove: gs,
  validate: Qe
};
function ms(a, e) {
  var s = this.RULES;
  if (s.keywords[a])
    throw new Error("Keyword " + a + " is already defined");
  if (!us.test(a))
    throw new Error("Keyword " + a + " is not a valid identifier");
  if (e) {
    this.validateKeyword(e, !0);
    var i = e.type;
    if (Array.isArray(i))
      for (var r = 0; r < i.length; r++)
        u(a, i[r], e);
    else
      u(a, i, e);
    var o = e.metaSchema;
    o && (e.$data && this._opts.$data && (o = {
      anyOf: [
        o,
        { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
      ]
    }), e.validateSchema = this.compile(o, !0));
  }
  s.keywords[a] = s.all[a] = !0;
  function u(l, P, m) {
    for (var d, h = 0; h < s.length; h++) {
      var v = s[h];
      if (v.type == P) {
        d = v;
        break;
      }
    }
    d || (d = { type: P, rules: [] }, s.push(d));
    var t = {
      keyword: l,
      definition: m,
      custom: !0,
      code: cs,
      implements: m.implements
    };
    d.rules.push(t), s.custom[l] = t;
  }
  return this;
}
function ps(a) {
  var e = this.RULES.custom[a];
  return e ? e.definition : this.RULES.keywords[a] || !1;
}
function gs(a) {
  var e = this.RULES;
  delete e.keywords[a], delete e.all[a], delete e.custom[a];
  for (var s = 0; s < e.length; s++)
    for (var i = e[s].rules, r = 0; r < i.length; r++)
      if (i[r].keyword == a) {
        i.splice(r, 1);
        break;
      }
  return this;
}
function Qe(a, e) {
  Qe.errors = null;
  var s = this._validateKeyword = this._validateKeyword || this.compile(vs, !0);
  if (s(a))
    return !0;
  if (Qe.errors = s.errors, e)
    throw new Error("custom keyword definition is invalid: " + this.errorsText(s.errors));
  return !1;
}
const Ps = "http://json-schema.org/draft-07/schema#", ys = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Es = "Meta-schema for $data reference (JSON Schema extension proposal)", Ss = "object", bs = [
  "$data"
], $s = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, ws = !1, _s = {
  $schema: Ps,
  $id: ys,
  description: Es,
  type: Ss,
  required: bs,
  properties: $s,
  additionalProperties: ws
};
var _r = va, re = qe, Fs = cr.exports, Fr = lr, Rs = tr, Ds = Fa, Os = Xa, Rr = es, Dr = te, tt = N;
N.prototype.validate = js;
N.prototype.compile = xs;
N.prototype.addSchema = Ls;
N.prototype.addMetaSchema = As;
N.prototype.validateSchema = Qs;
N.prototype.getSchema = Ts;
N.prototype.removeSchema = Cs;
N.prototype.addFormat = Hs;
N.prototype.errorsText = Bs;
N.prototype._addSchema = Us;
N.prototype._compile = Vs;
N.prototype.compileAsync = as;
var we = ds;
N.prototype.addKeyword = we.add;
N.prototype.getKeyword = we.get;
N.prototype.removeKeyword = we.remove;
N.prototype.validateKeyword = we.validate;
var Or = Me;
N.ValidationError = Or.Validation;
N.MissingRefError = Or.MissingRef;
N.$dataMetaSchema = Rr;
var ye = "http://json-schema.org/draft-07/schema", sr = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"], Is = ["/properties"];
function N(a) {
  if (!(this instanceof N))
    return new N(a);
  a = this._opts = Dr.copy(a) || {}, Xs(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = Ds(a.format), this._cache = a.cache || new Fs(), this._loadingSchemas = {}, this._compilations = [], this.RULES = Os(), this._getId = qs(a), a.loopRequired = a.loopRequired || 1 / 0, a.errorDataPath == "property" && (a._errorDataPathProperty = !0), a.serialize === void 0 && (a.serialize = Rs), this._metaOpts = Ws(this), a.formats && Ys(this), a.keywords && Zs(this), Js(this), typeof a.meta == "object" && this.addMetaSchema(a.meta), a.nullable && this.addKeyword("nullable", { metaSchema: { type: "boolean" } }), Gs(this);
}
function js(a, e) {
  var s;
  if (typeof a == "string") {
    if (s = this.getSchema(a), !s)
      throw new Error('no schema with key or ref "' + a + '"');
  } else {
    var i = this._addSchema(a);
    s = i.validate || this._compile(i);
  }
  var r = s(e);
  return s.$async !== !0 && (this.errors = s.errors), r;
}
function xs(a, e) {
  var s = this._addSchema(a, void 0, e);
  return s.validate || this._compile(s);
}
function Ls(a, e, s, i) {
  if (Array.isArray(a)) {
    for (var r = 0; r < a.length; r++)
      this.addSchema(a[r], void 0, s, i);
    return this;
  }
  var o = this._getId(a);
  if (o !== void 0 && typeof o != "string")
    throw new Error("schema id must be string");
  return e = re.normalizeId(e || o), jr(this, e), this._schemas[e] = this._addSchema(a, s, i, !0), this;
}
function As(a, e, s) {
  return this.addSchema(a, e, s, !0), this;
}
function Qs(a, e) {
  var s = a.$schema;
  if (s !== void 0 && typeof s != "string")
    throw new Error("$schema must be a string");
  if (s = s || this._opts.defaultMeta || zs(this), !s)
    return this.logger.warn("meta-schema not available"), this.errors = null, !0;
  var i = this.validate(s, a);
  if (!i && e) {
    var r = "schema is invalid: " + this.errorsText();
    if (this._opts.validateSchema == "log")
      this.logger.error(r);
    else
      throw new Error(r);
  }
  return i;
}
function zs(a) {
  var e = a._opts.meta;
  return a._opts.defaultMeta = typeof e == "object" ? a._getId(e) || e : a.getSchema(ye) ? ye : void 0, a._opts.defaultMeta;
}
function Ts(a) {
  var e = Ir(this, a);
  switch (typeof e) {
    case "object":
      return e.validate || this._compile(e);
    case "string":
      return this.getSchema(e);
    case "undefined":
      return Ns(this, a);
  }
}
function Ns(a, e) {
  var s = re.schema.call(a, { schema: {} }, e);
  if (s) {
    var i = s.schema, r = s.root, o = s.baseId, u = _r.call(a, i, r, void 0, o);
    return a._fragments[e] = new Fr({
      ref: e,
      fragment: !0,
      schema: i,
      root: r,
      baseId: o,
      validate: u
    }), u;
  }
}
function Ir(a, e) {
  return e = re.normalizeId(e), a._schemas[e] || a._refs[e] || a._fragments[e];
}
function Cs(a) {
  if (a instanceof RegExp)
    return de(this, this._schemas, a), de(this, this._refs, a), this;
  switch (typeof a) {
    case "undefined":
      return de(this, this._schemas), de(this, this._refs), this._cache.clear(), this;
    case "string":
      var e = Ir(this, a);
      return e && this._cache.del(e.cacheKey), delete this._schemas[a], delete this._refs[a], this;
    case "object":
      var s = this._opts.serialize, i = s ? s(a) : a;
      this._cache.del(i);
      var r = this._getId(a);
      r && (r = re.normalizeId(r), delete this._schemas[r], delete this._refs[r]);
  }
  return this;
}
function de(a, e, s) {
  for (var i in e) {
    var r = e[i];
    !r.meta && (!s || s.test(i)) && (a._cache.del(r.cacheKey), delete e[i]);
  }
}
function Us(a, e, s, i) {
  if (typeof a != "object" && typeof a != "boolean")
    throw new Error("schema should be object or boolean");
  var r = this._opts.serialize, o = r ? r(a) : a, u = this._cache.get(o);
  if (u)
    return u;
  i = i || this._opts.addUsedSchema !== !1;
  var l = re.normalizeId(this._getId(a));
  l && i && jr(this, l);
  var P = this._opts.validateSchema !== !1 && !e, m;
  P && !(m = l && l == re.normalizeId(a.$schema)) && this.validateSchema(a, !0);
  var d = re.ids.call(this, a), h = new Fr({
    id: l,
    schema: a,
    localRefs: d,
    cacheKey: o,
    meta: s
  });
  return l[0] != "#" && i && (this._refs[l] = h), this._cache.put(o, h), P && m && this.validateSchema(a, !0), h;
}
function Vs(a, e) {
  if (a.compiling)
    return a.validate = r, r.schema = a.schema, r.errors = null, r.root = e || r, a.schema.$async === !0 && (r.$async = !0), r;
  a.compiling = !0;
  var s;
  a.meta && (s = this._opts, this._opts = this._metaOpts);
  var i;
  try {
    i = _r.call(this, a.schema, e, a.localRefs);
  } catch (o) {
    throw delete a.validate, o;
  } finally {
    a.compiling = !1, a.meta && (this._opts = s);
  }
  return a.validate = i, a.refs = i.refs, a.refVal = i.refVal, a.root = i.root, i;
  function r() {
    var o = a.validate, u = o.apply(this, arguments);
    return r.errors = o.errors, u;
  }
}
function qs(a) {
  switch (a.schemaId) {
    case "auto":
      return Ks;
    case "id":
      return Ms;
    default:
      return ks;
  }
}
function Ms(a) {
  return a.$id && this.logger.warn("schema $id ignored", a.$id), a.id;
}
function ks(a) {
  return a.id && this.logger.warn("schema id ignored", a.id), a.$id;
}
function Ks(a) {
  if (a.$id && a.id && a.$id != a.id)
    throw new Error("schema $id is different from id");
  return a.$id || a.id;
}
function Bs(a, e) {
  if (a = a || this.errors, !a)
    return "No errors";
  e = e || {};
  for (var s = e.separator === void 0 ? ", " : e.separator, i = e.dataVar === void 0 ? "data" : e.dataVar, r = "", o = 0; o < a.length; o++) {
    var u = a[o];
    u && (r += i + u.dataPath + " " + u.message + s);
  }
  return r.slice(0, -s.length);
}
function Hs(a, e) {
  return typeof e == "string" && (e = new RegExp(e)), this._formats[a] = e, this;
}
function Js(a) {
  var e;
  if (a._opts.$data && (e = _s, a.addMetaSchema(e, e.$id, !0)), a._opts.meta !== !1) {
    var s = wr;
    a._opts.$data && (s = Rr(s, Is)), a.addMetaSchema(s, ye, !0), a._refs["http://json-schema.org/schema"] = ye;
  }
}
function Gs(a) {
  var e = a._opts.schemas;
  if (!!e)
    if (Array.isArray(e))
      a.addSchema(e);
    else
      for (var s in e)
        a.addSchema(e[s], s);
}
function Ys(a) {
  for (var e in a._opts.formats) {
    var s = a._opts.formats[e];
    a.addFormat(e, s);
  }
}
function Zs(a) {
  for (var e in a._opts.keywords) {
    var s = a._opts.keywords[e];
    a.addKeyword(e, s);
  }
}
function jr(a, e) {
  if (a._schemas[e] || a._refs[e])
    throw new Error('schema with key or id "' + e + '" already exists');
}
function Ws(a) {
  for (var e = Dr.copy(a._opts), s = 0; s < sr.length; s++)
    delete e[sr[s]];
  return e;
}
function Xs(a) {
  var e = a._opts.logger;
  if (e === !1)
    a.logger = { log: De, warn: De, error: De };
  else {
    if (e === void 0 && (e = console), !(typeof e == "object" && e.log && e.warn && e.error))
      throw new Error("logger must implement log, warn and error methods");
    a.logger = e;
  }
}
function De() {
}
export {
  tt as a
};
//# sourceMappingURL=ajv.720a773d.js.map
