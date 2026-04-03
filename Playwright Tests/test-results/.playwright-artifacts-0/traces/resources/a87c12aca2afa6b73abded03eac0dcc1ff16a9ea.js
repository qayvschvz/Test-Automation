var y = { exports: {} }, a = y.exports = function(n, u, r) {
  typeof u == "function" && (r = u, u = {}), r = u.cb || r;
  var e = typeof r == "function" ? r : r.pre || function() {
  }, i = r.post || function() {
  };
  d(u, e, i, n, "", n);
};
a.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0
};
a.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
a.propsKeywords = {
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
a.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};
function d(n, u, r, e, i, o, m, p, s, x) {
  if (e && typeof e == "object" && !Array.isArray(e)) {
    u(e, i, o, m, p, s, x);
    for (var t in e) {
      var f = e[t];
      if (Array.isArray(f)) {
        if (t in a.arrayKeywords)
          for (var l = 0; l < f.length; l++)
            d(n, u, r, f[l], i + "/" + t + "/" + l, o, i, t, e, l);
      } else if (t in a.propsKeywords) {
        if (f && typeof f == "object")
          for (var v in f)
            d(n, u, r, f[v], i + "/" + t + "/" + w(v), o, i, t, e, v);
      } else
        (t in a.keywords || n.allKeys && !(t in a.skipKeywords)) && d(n, u, r, f, i + "/" + t, o, i, t, e);
    }
    r(e, i, o, m, p, s, x);
  }
}
function w(n) {
  return n.replace(/~/g, "~0").replace(/\//g, "~1");
}
export {
  y as j
};
//# sourceMappingURL=json-schema-traverse.5c29a8cc.js.map
