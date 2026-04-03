import { l as a } from "./validate.io-array.0fe38477.js";
import { l as c } from "./validate.io-integer-array.9000b14a.js";
import { l as h } from "./validate.io-function.2298ad7d.js";
var m = a, s = c, p = h, o = Math.pow(2, 31) - 1;
function w(e, r) {
  var l = 1, t;
  if (e === 0)
    return r;
  if (r === 0)
    return e;
  for (; e % 2 === 0 && r % 2 === 0; )
    e = e / 2, r = r / 2, l = l * 2;
  for (; e % 2 === 0; )
    e = e / 2;
  for (; r; ) {
    for (; r % 2 === 0; )
      r = r / 2;
    e > r && (t = r, r = e, e = t), r = r - e;
  }
  return l * e;
}
function g(e, r) {
  var l = 0, t;
  if (e === 0)
    return r;
  if (r === 0)
    return e;
  for (; (e & 1) === 0 && (r & 1) === 0; )
    e >>>= 1, r >>>= 1, l++;
  for (; (e & 1) === 0; )
    e >>>= 1;
  for (; r; ) {
    for (; (r & 1) === 0; )
      r >>>= 1;
    e > r && (t = r, r = e, e = t), r = r - e;
  }
  return e << l;
}
function v() {
  var e = arguments.length, r, l, t, u, i, f, n;
  for (r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  if (s(r)) {
    if (e === 2)
      return i = r[0], f = r[1], i < 0 && (i = -i), f < 0 && (f = -f), i <= o && f <= o ? g(i, f) : w(i, f);
    t = r;
  } else if (m(r[0]))
    if (e > 1) {
      if (t = r[0], l = r[1], !p(l))
        throw new TypeError("gcd()::invalid input argument. Accessor must be a function. Value: `" + l + "`.");
    } else
      t = r[0];
  else
    throw new TypeError("gcd()::invalid input argument. Must provide an array of integers. Value: `" + r[0] + "`.");
  if (u = t.length, u < 2)
    return null;
  if (l) {
    for (i = new Array(u), n = 0; n < u; n++)
      i[n] = l(t[n], n);
    t = i;
  }
  if (e < 3 && !s(t))
    throw new TypeError("gcd()::invalid input argument. Accessed array values must be integers. Value: `" + t + "`.");
  for (n = 0; n < u; n++)
    i = t[n], i < 0 && (t[n] = -i);
  for (i = t[0], n = 1; n < u; n++)
    f = t[n], f <= o && i <= o ? i = g(i, f) : i = w(i, f);
  return i;
}
var T = v;
export {
  T as l
};
//# sourceMappingURL=compute-gcd.13f3416d.js.map
