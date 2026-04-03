var a = {}, v = /~/, h = /~[01]/g;
function w(r) {
  switch (r) {
    case "~1":
      return "/";
    case "~0":
      return "~";
  }
  throw new Error("Invalid tilde escape: " + r);
}
function l(r) {
  return v.test(r) ? r.replace(h, w) : r;
}
function y(r, e, n) {
  var t, i;
  if (e[1] === "constructor" && e[2] === "prototype" || e[1] === "__proto__")
    return r;
  for (var f = 1, c = e.length; f < c && (t = l(e[f++]), i = c > f, typeof r[t] > "u" && (Array.isArray(r) && t === "-" && (t = r.length), i && (e[f] !== "" && e[f] < 1 / 0 || e[f] === "-" ? r[t] = [] : r[t] = {})), !!i); )
    r = r[t];
  var o = r[t];
  return n === void 0 ? delete r[t] : r[t] = n, o;
}
function u(r) {
  if (typeof r == "string") {
    if (r = r.split("/"), r[0] === "")
      return r;
    throw new Error("Invalid JSON pointer.");
  } else if (Array.isArray(r))
    return r;
  throw new Error("Invalid JSON pointer.");
}
function s(r, e) {
  if (typeof r != "object")
    throw new Error("Invalid input object.");
  e = u(e);
  var n = e.length;
  if (n === 1)
    return r;
  for (var t = 1; t < n; ) {
    if (r = r[l(e[t++])], n === t)
      return r;
    if (typeof r != "object")
      return;
  }
}
function d(r, e, n) {
  if (typeof r != "object")
    throw new Error("Invalid input object.");
  if (e = u(e), e.length === 0)
    throw new Error("Invalid JSON pointer for set.");
  return y(r, e, n);
}
function g(r) {
  var e = u(r);
  return {
    get: function(n) {
      return s(n, e);
    },
    set: function(n, t) {
      return d(n, e, t);
    }
  };
}
a.get = s;
a.set = d;
a.compile = g;
export {
  a as j
};
//# sourceMappingURL=jsonpointer.49fa8761.js.map
