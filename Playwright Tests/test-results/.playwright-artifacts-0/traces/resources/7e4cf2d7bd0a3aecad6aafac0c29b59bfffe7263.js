var i = { exports: {} }, n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = window.React, u = Symbol.for("react.element"), y = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
function s(o, e, f) {
  var r, t = {}, _ = null, p = null;
  f !== void 0 && (_ = "" + f), e.key !== void 0 && (_ = "" + e.key), e.ref !== void 0 && (p = e.ref);
  for (r in e)
    c.call(e, r) && !m.hasOwnProperty(r) && (t[r] = e[r]);
  if (o && o.defaultProps)
    for (r in e = o.defaultProps, e)
      t[r] === void 0 && (t[r] = e[r]);
  return { $$typeof: u, type: o, key: _, ref: p, props: t, _owner: d.current };
}
n.Fragment = y;
n.jsx = s;
n.jsxs = s;
(function(o) {
  o.exports = n;
})(i);
export {
  i as j
};
//# sourceMappingURL=react.3ed3d361.js.map
