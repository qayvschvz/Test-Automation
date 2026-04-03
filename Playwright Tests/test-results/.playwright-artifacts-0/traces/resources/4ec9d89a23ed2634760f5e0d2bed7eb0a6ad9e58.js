import { l as u } from "./compute-gcd.13f3416d.js";
import { l as m } from "./validate.io-array.0fe38477.js";
import { l as c } from "./validate.io-integer-array.9000b14a.js";
import { l as g } from "./validate.io-function.2298ad7d.js";
var o = u, p = m, s = c, b = g;
function y() {
  var l = arguments.length, n, f, i, t, e, a, r;
  for (n = new Array(l), r = 0; r < l; r++)
    n[r] = arguments[r];
  if (s(n)) {
    if (l === 2)
      return e = n[0], a = n[1], e < 0 && (e = -e), a < 0 && (a = -a), e === 0 || a === 0 ? 0 : e / o(e, a) * a;
    i = n;
  } else if (p(n[0]))
    if (l > 1) {
      if (i = n[0], f = n[1], !b(f))
        throw new TypeError("lcm()::invalid input argument. Accessor must be a function. Value: `" + f + "`.");
    } else
      i = n[0];
  else
    throw new TypeError("lcm()::invalid input argument. Must provide an array of integers. Value: `" + n[0] + "`.");
  if (t = i.length, t < 2)
    return null;
  if (f) {
    for (e = new Array(t), r = 0; r < t; r++)
      e[r] = f(i[r], r);
    i = e;
  }
  if (l < 3 && !s(i))
    throw new TypeError("lcm()::invalid input argument. Accessed array values must be integers. Value: `" + i + "`.");
  for (r = 0; r < t; r++)
    e = i[r], e < 0 && (i[r] = -e);
  for (e = i[0], r = 1; r < t; r++) {
    if (a = i[r], e === 0 || a === 0)
      return 0;
    e = e / o(e, a) * a;
  }
  return e;
}
var h = y;
export {
  h as l
};
//# sourceMappingURL=compute-lcm.09f5037e.js.map
