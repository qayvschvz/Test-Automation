import { l as a } from "./validate.io-array.0fe38477.js";
import { l as f } from "./validate.io-integer.23f0bb33.js";
var i = a, n = f;
function l(r) {
  var e;
  if (!i(r) || (e = r.length, !e))
    return !1;
  for (var t = 0; t < e; t++)
    if (!n(r[t]))
      return !1;
  return !0;
}
var m = l;
export {
  m as l
};
//# sourceMappingURL=validate.io-integer-array.9000b14a.js.map
