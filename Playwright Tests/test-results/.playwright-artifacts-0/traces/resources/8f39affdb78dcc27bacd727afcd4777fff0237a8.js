var s = {};
function C(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
var I = function(e, n, t, a) {
  n = n || "&", t = t || "=";
  var r = {};
  if (typeof e != "string" || e.length === 0)
    return r;
  var f = /\+/g;
  e = e.split(n);
  var i = 1e3;
  a && typeof a.maxKeys == "number" && (i = a.maxKeys);
  var y = e.length;
  i > 0 && y > i && (y = i);
  for (var d = 0; d < y; ++d) {
    var c = e[d].replace(f, "%20"), l = c.indexOf(t), m, g, o, p;
    l >= 0 ? (m = c.substr(0, l), g = c.substr(l + 1)) : (m = c, g = ""), o = decodeURIComponent(m), p = decodeURIComponent(g), C(r, o) ? Array.isArray(r[o]) ? r[o].push(p) : r[o] = [r[o], p] : r[o] = p;
  }
  return r;
}, u = function(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "true" : "false";
    case "number":
      return isFinite(e) ? e : "";
    default:
      return "";
  }
}, R = function(e, n, t, a) {
  return n = n || "&", t = t || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(r) {
    var f = encodeURIComponent(u(r)) + t;
    return Array.isArray(e[r]) ? e[r].map(function(i) {
      return f + encodeURIComponent(u(i));
    }).join(n) : f + encodeURIComponent(u(e[r]));
  }).join(n) : a ? encodeURIComponent(u(a)) + t + encodeURIComponent(u(e)) : "";
}, U;
s.decode = U = s.parse = I;
s.encode = s.stringify = R;
export {
  U as p,
  s as q
};
//# sourceMappingURL=querystring.1911be23.js.map
