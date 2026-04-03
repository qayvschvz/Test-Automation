import { e as K, f as B, h as w, j as ee, k as te, l as re, m as ne, n as T, o as Z, p as nt, q as D, r as ae, s as x, t as U, u as kt, v as dt, w as ct, x as Tt, y as Q, z as At, A as fr, B as hr } from "./@babel.7bf9beb3.js";
import { s as vr } from "./json-schema-merge-allof.84d57478.js";
import { q as gr, r as pr } from "./core-js.5cf99ca8.js";
import { t as yr, u as br, p as Sr, g as wr, i as Fr } from "./lodash.e7e500d3.js";
import { j as Er } from "./jsonpointer.49fa8761.js";
import { p as _ } from "./prop-types.a683c6cd.js";
import { s as Cr } from "./shortid.a875005d.js";
import { a as Dr } from "./ajv.720a773d.js";
import { a as xr } from "./ajv-keywords.09943dd7.js";
const Fe = window.React;
function Or(e) {
  var r = e.errors;
  return Fe.createElement("div", {
    className: "panel panel-danger errors"
  }, Fe.createElement("div", {
    className: "panel-heading"
  }, Fe.createElement("h3", {
    className: "panel-title"
  }, "Errors")), Fe.createElement("ul", {
    className: "list-group"
  }, r.map(function(a, t) {
    return Fe.createElement("li", {
      key: t,
      className: "list-group-item text-danger"
    }, a.stack);
  })));
}
var at = { exports: {} }, R = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L = typeof Symbol == "function" && Symbol.for, mt = L ? Symbol.for("react.element") : 60103, ft = L ? Symbol.for("react.portal") : 60106, We = L ? Symbol.for("react.fragment") : 60107, qe = L ? Symbol.for("react.strict_mode") : 60108, Ue = L ? Symbol.for("react.profiler") : 60114, Me = L ? Symbol.for("react.provider") : 60109, Ve = L ? Symbol.for("react.context") : 60110, ht = L ? Symbol.for("react.async_mode") : 60111, je = L ? Symbol.for("react.concurrent_mode") : 60111, Le = L ? Symbol.for("react.forward_ref") : 60112, Ke = L ? Symbol.for("react.suspense") : 60113, $r = L ? Symbol.for("react.suspense_list") : 60120, He = L ? Symbol.for("react.memo") : 60115, ze = L ? Symbol.for("react.lazy") : 60116, Pr = L ? Symbol.for("react.block") : 60121, _r = L ? Symbol.for("react.fundamental") : 60117, Rr = L ? Symbol.for("react.responder") : 60118, Nr = L ? Symbol.for("react.scope") : 60119;
function Y(e) {
  if (typeof e == "object" && e !== null) {
    var r = e.$$typeof;
    switch (r) {
      case mt:
        switch (e = e.type, e) {
          case ht:
          case je:
          case We:
          case Ue:
          case qe:
          case Ke:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ve:
              case Le:
              case ze:
              case He:
              case Me:
                return e;
              default:
                return r;
            }
        }
      case ft:
        return r;
    }
  }
}
function It(e) {
  return Y(e) === je;
}
R.AsyncMode = ht;
R.ConcurrentMode = je;
R.ContextConsumer = Ve;
R.ContextProvider = Me;
R.Element = mt;
R.ForwardRef = Le;
R.Fragment = We;
R.Lazy = ze;
R.Memo = He;
R.Portal = ft;
R.Profiler = Ue;
R.StrictMode = qe;
R.Suspense = Ke;
R.isAsyncMode = function(e) {
  return It(e) || Y(e) === ht;
};
R.isConcurrentMode = It;
R.isContextConsumer = function(e) {
  return Y(e) === Ve;
};
R.isContextProvider = function(e) {
  return Y(e) === Me;
};
R.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mt;
};
R.isForwardRef = function(e) {
  return Y(e) === Le;
};
R.isFragment = function(e) {
  return Y(e) === We;
};
R.isLazy = function(e) {
  return Y(e) === ze;
};
R.isMemo = function(e) {
  return Y(e) === He;
};
R.isPortal = function(e) {
  return Y(e) === ft;
};
R.isProfiler = function(e) {
  return Y(e) === Ue;
};
R.isStrictMode = function(e) {
  return Y(e) === qe;
};
R.isSuspense = function(e) {
  return Y(e) === Ke;
};
R.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === We || e === je || e === Ue || e === qe || e === Ke || e === $r || typeof e == "object" && e !== null && (e.$$typeof === ze || e.$$typeof === He || e.$$typeof === Me || e.$$typeof === Ve || e.$$typeof === Le || e.$$typeof === _r || e.$$typeof === Rr || e.$$typeof === Nr || e.$$typeof === Pr);
};
R.typeOf = Y;
(function(e) {
  e.exports = R;
})(at);
const Ft = window.React;
function xe(e) {
  var r = e.type, a = r === void 0 ? "default" : r, t = e.icon, n = e.className, i = K(e, ["type", "icon", "className"]);
  return Ft.createElement("button", B({
    type: "button",
    className: "btn btn-".concat(a, " ").concat(n)
  }, i), Ft.createElement("i", {
    className: "glyphicon glyphicon-".concat(t)
  }));
}
const Qe = window.React;
function vt(e) {
  var r = e.className, a = e.onClick, t = e.disabled;
  return Qe.createElement("div", {
    className: "row"
  }, Qe.createElement("p", {
    className: "col-xs-3 col-xs-offset-9 text-right ".concat(r)
  }, Qe.createElement(xe, {
    type: "info",
    icon: "plus",
    className: "btn-add col-xs-12",
    "aria-label": "Add",
    tabIndex: "0",
    onClick: a,
    disabled: t
  })));
}
var kr = _.exports.shape({
  ArrayFieldTemplate: _.exports.elementType,
  FieldTemplate: _.exports.elementType,
  ObjectFieldTemplate: _.exports.elementType,
  definitions: _.exports.object.isRequired,
  rootSchema: _.exports.object,
  fields: _.exports.objectOf(_.exports.elementType).isRequired,
  formContext: _.exports.object.isRequired,
  widgets: _.exports.objectOf(_.exports.oneOfType([_.exports.func, _.exports.object])).isRequired
});
_.exports.bool, _.exports.bool, _.exports.object, _.exports.any, _.exports.object, _.exports.func, _.exports.func.isRequired, _.exports.func, _.exports.arrayOf(_.exports.string), _.exports.bool, kr.isRequired, _.exports.bool, _.exports.object.isRequired, _.exports.shape({
  "ui:options": _.exports.shape({
    addable: _.exports.bool,
    orderable: _.exports.bool,
    removable: _.exports.bool
  })
});
const A = window.React, Tr = window.React.Component;
function Bt(e) {
  var r = e.TitleField, a = e.idSchema, t = e.title, n = e.required;
  if (!t)
    return null;
  var i = "".concat(a.$id, "__title");
  return A.createElement(r, {
    id: i,
    title: t,
    required: n
  });
}
function Ar(e) {
  var r = e.DescriptionField, a = e.idSchema, t = e.description;
  if (!t)
    return null;
  var n = "".concat(a.$id, "__description");
  return A.createElement(r, {
    id: n,
    description: t
  });
}
function Wt(e) {
  var r = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  return A.createElement("div", {
    key: e.key,
    className: e.className
  }, A.createElement("div", {
    className: e.hasToolbar ? "col-xs-9" : "col-xs-12"
  }, e.children), e.hasToolbar && A.createElement("div", {
    className: "col-xs-3 array-item-toolbox"
  }, A.createElement("div", {
    className: "btn-group",
    style: {
      display: "flex",
      justifyContent: "space-around"
    }
  }, (e.hasMoveUp || e.hasMoveDown) && A.createElement(xe, {
    icon: "arrow-up",
    "aria-label": "Move up",
    className: "array-item-move-up",
    tabIndex: "-1",
    style: r,
    disabled: e.disabled || e.readonly || !e.hasMoveUp,
    onClick: e.onReorderClick(e.index, e.index - 1)
  }), (e.hasMoveUp || e.hasMoveDown) && A.createElement(xe, {
    icon: "arrow-down",
    className: "array-item-move-down",
    "aria-label": "Move down",
    tabIndex: "-1",
    style: r,
    disabled: e.disabled || e.readonly || !e.hasMoveDown,
    onClick: e.onReorderClick(e.index, e.index + 1)
  }), e.hasRemove && A.createElement(xe, {
    type: "danger",
    icon: "remove",
    "aria-label": "Remove",
    className: "array-item-remove",
    tabIndex: "-1",
    style: r,
    disabled: e.disabled || e.readonly,
    onClick: e.onDropIndexClick(e.index)
  }))));
}
function Ir(e) {
  return A.createElement("fieldset", {
    className: e.className,
    id: e.idSchema.$id
  }, A.createElement(Bt, {
    key: "array-field-title-".concat(e.idSchema.$id),
    TitleField: e.TitleField,
    idSchema: e.idSchema,
    title: e.uiSchema["ui:title"] || e.title,
    required: e.required
  }), (e.uiSchema["ui:description"] || e.schema.description) && A.createElement("div", {
    className: "field-description",
    key: "field-description-".concat(e.idSchema.$id)
  }, e.uiSchema["ui:description"] || e.schema.description), A.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-".concat(e.idSchema.$id)
  }, e.items && e.items.map(Wt)), e.canAdd && A.createElement(vt, {
    className: "array-item-add",
    onClick: e.onAddClick,
    disabled: e.disabled || e.readonly
  }));
}
function Br(e) {
  return A.createElement("fieldset", {
    className: e.className,
    id: e.idSchema.$id
  }, A.createElement(Bt, {
    key: "array-field-title-".concat(e.idSchema.$id),
    TitleField: e.TitleField,
    idSchema: e.idSchema,
    title: e.uiSchema["ui:title"] || e.title,
    required: e.required
  }), (e.uiSchema["ui:description"] || e.schema.description) && A.createElement(Ar, {
    key: "array-field-description-".concat(e.idSchema.$id),
    DescriptionField: e.DescriptionField,
    idSchema: e.idSchema,
    description: e.uiSchema["ui:description"] || e.schema.description
  }), A.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-".concat(e.idSchema.$id)
  }, e.items && e.items.map(function(r) {
    return Wt(r);
  })), e.canAdd && A.createElement(vt, {
    className: "array-item-add",
    onClick: e.onAddClick,
    disabled: e.disabled || e.readonly
  }));
}
function it() {
  return Cr.generate();
}
function Et(e) {
  return x(e) ? e.map(function(r) {
    return {
      key: it(),
      item: r
    };
  }) : [];
}
function Ee(e) {
  return e.map(function(r) {
    return r.item;
  });
}
var qt = /* @__PURE__ */ function(e) {
  ee(r, e);
  function r(a) {
    var t;
    te(this, r), t = re(this, ne(r).call(this, a)), w(T(t), "_getNewFormDataRow", function() {
      var l = t.props, o = l.schema, s = l.registry, u = s === void 0 ? z() : s, d = u.rootSchema, c = o.items;
      return ut(o) && Rt(o) && (c = o.additionalItems), Ye(c, void 0, d);
    }), w(T(t), "onAddClick", function(l) {
      l && l.preventDefault();
      var o = t.props.onChange, s = {
        key: it(),
        item: t._getNewFormDataRow()
      }, u = [].concat(Z(t.state.keyedFormData), [s]);
      t.setState({
        keyedFormData: u,
        updatedKeyedFormData: !0
      }, function() {
        return o(Ee(u));
      });
    }), w(T(t), "onAddIndexClick", function(l) {
      return function(o) {
        o && o.preventDefault();
        var s = t.props.onChange, u = {
          key: it(),
          item: t._getNewFormDataRow()
        }, d = Z(t.state.keyedFormData);
        d.splice(l, 0, u), t.setState({
          keyedFormData: d,
          updatedKeyedFormData: !0
        }, function() {
          return s(Ee(d));
        });
      };
    }), w(T(t), "onDropIndexClick", function(l) {
      return function(o) {
        o && o.preventDefault();
        var s = t.props.onChange, u = t.state.keyedFormData, d;
        if (t.props.errorSchema) {
          d = {};
          var c = t.props.errorSchema;
          for (var m in c)
            m = nt(m), m < l ? d[m] = c[m] : m > l && (d[m - 1] = c[m]);
        }
        var f = u.filter(function(v, h) {
          return h !== l;
        });
        t.setState({
          keyedFormData: f,
          updatedKeyedFormData: !0
        }, function() {
          return s(Ee(f), d);
        });
      };
    }), w(T(t), "onReorderClick", function(l, o) {
      return function(s) {
        s && (s.preventDefault(), s.target.blur());
        var u = t.props.onChange, d;
        if (t.props.errorSchema) {
          d = {};
          var c = t.props.errorSchema;
          for (var m in c)
            m == l ? d[o] = c[l] : m == o ? d[l] = c[o] : d[m] = c[m];
        }
        var f = t.state.keyedFormData;
        function v() {
          var y = f.slice();
          return y.splice(l, 1), y.splice(o, 0, f[l]), y;
        }
        var h = v();
        t.setState({
          keyedFormData: h
        }, function() {
          return u(Ee(h), d);
        });
      };
    }), w(T(t), "onChangeForIndex", function(l) {
      return function(o, s) {
        var u = t.props, d = u.formData, c = u.onChange, m = d.map(function(f, v) {
          var h = typeof o > "u" ? null : o;
          return l === v ? h : f;
        });
        c(m, s && t.props.errorSchema && D({}, t.props.errorSchema, w({}, l, s)));
      };
    }), w(T(t), "onSelectChange", function(l) {
      t.props.onChange(l);
    });
    var n = a.formData, i = Et(n);
    return t.state = {
      keyedFormData: i,
      updatedKeyedFormData: !1
    }, t;
  }
  return ae(r, [{
    key: "isItemRequired",
    value: function(t) {
      return x(t.type) ? !gr(t.type, "null") : t.type !== "null";
    }
  }, {
    key: "canAddItem",
    value: function(t) {
      var n = this.props, i = n.schema, l = n.uiSchema, o = ce(l), s = o.addable;
      return s !== !1 && (i.maxItems !== void 0 ? s = t.length < i.maxItems : s = !0), s;
    }
  }, {
    key: "render",
    value: function() {
      var t = this.props, n = t.schema, i = t.uiSchema, l = t.idSchema, o = t.registry, s = o === void 0 ? z() : o, u = s.rootSchema;
      if (!n.hasOwnProperty("items")) {
        var d = s.fields, c = d.UnsupportedField;
        return A.createElement(c, {
          schema: n,
          idSchema: l,
          reason: "Missing items definition"
        });
      }
      return ut(n) ? this.renderFixedArray() : ir(n, i, u) ? this.renderFiles() : yt(n, u) ? this.renderMultiSelect() : this.renderNormalArray();
    }
  }, {
    key: "renderNormalArray",
    value: function() {
      var t = this, n = this.props, i = n.schema, l = n.uiSchema, o = n.errorSchema, s = n.idSchema, u = n.name, d = n.required, c = n.disabled, m = n.readonly, f = n.autofocus, v = n.registry, h = v === void 0 ? z() : v, y = n.onBlur, p = n.onFocus, g = n.idPrefix, S = n.rawErrors, E = i.title === void 0 ? u : i.title, b = h.ArrayFieldTemplate, F = h.rootSchema, N = h.fields, C = h.formContext, $ = N.TitleField, W = N.DescriptionField, M = I(i.items, F), k = Ee(this.state.keyedFormData), V = {
        canAdd: this.canAddItem(k),
        items: this.state.keyedFormData.map(function(O, q) {
          var H = O.key, fe = O.item, ie = I(i.items, F, fe), oe = o ? o[q] : void 0, Se = s.$id + "_" + q, Je = be(ie, Se, F, fe, g);
          return t.renderArrayFieldItem({
            key: H,
            index: q,
            canMoveUp: q > 0,
            canMoveDown: q < k.length - 1,
            itemSchema: ie,
            itemIdSchema: Je,
            itemErrorSchema: oe,
            itemData: fe,
            itemUiSchema: l.items,
            autofocus: f && q === 0,
            onBlur: y,
            onFocus: p
          });
        }),
        className: "field field-array field-array-of-".concat(M.type),
        DescriptionField: W,
        disabled: c,
        idSchema: s,
        uiSchema: l,
        onAddClick: this.onAddClick,
        readonly: m,
        required: d,
        schema: i,
        title: E,
        TitleField: $,
        formContext: C,
        formData: k,
        rawErrors: S,
        registry: h
      }, J = l["ui:ArrayFieldTemplate"] || b || Br;
      return A.createElement(J, V);
    }
  }, {
    key: "renderMultiSelect",
    value: function() {
      var t = this.props, n = t.schema, i = t.idSchema, l = t.uiSchema, o = t.formData, s = t.disabled, u = t.readonly, d = t.required, c = t.label, m = t.placeholder, f = t.autofocus, v = t.onBlur, h = t.onFocus, y = t.registry, p = y === void 0 ? z() : y, g = t.rawErrors, S = this.props.formData, E = p.widgets, b = p.rootSchema, F = p.formContext, N = I(n.items, b, o), C = Be(N), $ = D({}, ce(l), {
        enumOptions: C
      }), W = $.widget, M = W === void 0 ? "select" : W, k = K($, ["widget"]), V = me(n, M, E);
      return A.createElement(V, {
        id: i && i.$id,
        multiple: !0,
        onChange: this.onSelectChange,
        onBlur: v,
        onFocus: h,
        options: k,
        schema: n,
        registry: p,
        value: S,
        disabled: s,
        readonly: u,
        required: d,
        label: c,
        placeholder: m,
        formContext: F,
        autofocus: f,
        rawErrors: g
      });
    }
  }, {
    key: "renderFiles",
    value: function() {
      var t = this.props, n = t.schema, i = t.uiSchema, l = t.idSchema, o = t.name, s = t.disabled, u = t.readonly, d = t.autofocus, c = t.onBlur, m = t.onFocus, f = t.registry, v = f === void 0 ? z() : f, h = t.rawErrors, y = n.title || o, p = this.props.formData, g = v.widgets, S = v.formContext, E = ce(i), b = E.widget, F = b === void 0 ? "files" : b, N = K(E, ["widget"]), C = me(n, F, g);
      return A.createElement(C, {
        options: N,
        id: l && l.$id,
        multiple: !0,
        onChange: this.onSelectChange,
        onBlur: c,
        onFocus: m,
        schema: n,
        title: y,
        value: p,
        disabled: s,
        readonly: u,
        formContext: S,
        autofocus: d,
        rawErrors: h
      });
    }
  }, {
    key: "renderFixedArray",
    value: function() {
      var t = this, n = this.props, i = n.schema, l = n.uiSchema, o = n.formData, s = n.errorSchema, u = n.idPrefix, d = n.idSchema, c = n.name, m = n.required, f = n.disabled, v = n.readonly, h = n.autofocus, y = n.registry, p = y === void 0 ? z() : y, g = n.onBlur, S = n.onFocus, E = n.rawErrors, b = i.title || c, F = this.props.formData, N = p.ArrayFieldTemplate, C = p.rootSchema, $ = p.fields, W = p.formContext, M = $.TitleField, k = i.items.map(function(q, H) {
        return I(q, C, o[H]);
      }), V = Rt(i) ? I(i.additionalItems, C, o) : null;
      (!F || F.length < k.length) && (F = F || [], F = F.concat(new Array(k.length - F.length)));
      var J = {
        canAdd: this.canAddItem(F) && V,
        className: "field field-array field-array-fixed-items",
        disabled: f,
        idSchema: d,
        formData: o,
        items: this.state.keyedFormData.map(function(q, H) {
          var fe = q.key, ie = q.item, oe = H >= k.length, Se = oe ? I(i.additionalItems, C, ie) : k[H], Je = d.$id + "_" + H, dr = be(Se, Je, C, ie, u), cr = oe ? l.additionalItems || {} : x(l.items) ? l.items[H] : l.items || {}, mr = s ? s[H] : void 0;
          return t.renderArrayFieldItem({
            key: fe,
            index: H,
            canRemove: oe,
            canMoveUp: H >= k.length + 1,
            canMoveDown: oe && H < F.length - 1,
            itemSchema: Se,
            itemData: ie,
            itemUiSchema: cr,
            itemIdSchema: dr,
            itemErrorSchema: mr,
            autofocus: h && H === 0,
            onBlur: g,
            onFocus: S
          });
        }),
        onAddClick: this.onAddClick,
        readonly: v,
        required: m,
        schema: i,
        uiSchema: l,
        title: b,
        TitleField: M,
        formContext: W,
        rawErrors: E
      }, O = l["ui:ArrayFieldTemplate"] || N || Ir;
      return A.createElement(O, J);
    }
  }, {
    key: "renderArrayFieldItem",
    value: function(t) {
      var n = t.key, i = t.index, l = t.canRemove, o = l === void 0 ? !0 : l, s = t.canMoveUp, u = s === void 0 ? !0 : s, d = t.canMoveDown, c = d === void 0 ? !0 : d, m = t.itemSchema, f = t.itemData, v = t.itemUiSchema, h = t.itemIdSchema, y = t.itemErrorSchema, p = t.autofocus, g = t.onBlur, S = t.onFocus, E = t.rawErrors, b = this.props, F = b.disabled, N = b.readonly, C = b.uiSchema, $ = b.registry, W = $ === void 0 ? z() : $, M = W.fields.SchemaField, k = D({
        orderable: !0,
        removable: !0
      }, C["ui:options"]), V = k.orderable, J = k.removable, O = {
        moveUp: V && u,
        moveDown: V && c,
        remove: J && o
      };
      return O.toolbar = U(O).some(function(q) {
        return O[q];
      }), {
        children: A.createElement(M, {
          index: i,
          schema: m,
          uiSchema: v,
          formData: f,
          errorSchema: y,
          idSchema: h,
          required: this.isItemRequired(m),
          onChange: this.onChangeForIndex(i),
          onBlur: g,
          onFocus: S,
          registry: this.props.registry,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          autofocus: p,
          rawErrors: E
        }),
        className: "array-item",
        disabled: F,
        hasToolbar: O.toolbar,
        hasMoveUp: O.moveUp,
        hasMoveDown: O.moveDown,
        hasRemove: O.remove,
        index: i,
        key: n,
        onAddIndexClick: this.onAddIndexClick,
        onDropIndexClick: this.onDropIndexClick,
        onReorderClick: this.onReorderClick,
        readonly: N
      };
    }
  }, {
    key: "itemTitle",
    get: function() {
      var t = this.props.schema;
      return t.items.title || t.items.description || "Item";
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(t, n) {
      if (n.updatedKeyedFormData)
        return {
          updatedKeyedFormData: !1
        };
      var i = t.formData || [], l = n.keyedFormData || [], o = i.length === l.length ? l.map(function(s, u) {
        return {
          key: s.key,
          item: i[u]
        };
      }) : Et(i);
      return {
        keyedFormData: o
      };
    }
  }]), r;
}(Tr);
w(qt, "defaultProps", {
  uiSchema: {},
  formData: [],
  idSchema: {},
  required: !1,
  disabled: !1,
  readonly: !1,
  autofocus: !1
});
const Wr = window.React;
function Ut(e) {
  var r = e.schema, a = e.name, t = e.uiSchema, n = e.idSchema, i = e.formData, l = e.registry, o = l === void 0 ? z() : l, s = e.required, u = e.disabled, d = e.readonly, c = e.autofocus, m = e.onChange, f = e.onFocus, v = e.onBlur, h = e.rawErrors, y = r.title, p = o.widgets, g = o.formContext, S = o.fields, E = ce(t), b = E.widget, F = b === void 0 ? "checkbox" : b, N = K(E, ["widget"]), C = me(r, F, p), $;
  return x(r.oneOf) ? $ = Be({
    oneOf: r.oneOf.map(function(W) {
      return D({}, W, {
        title: W.title || (W.const === !0 ? "Yes" : "No")
      });
    })
  }) : $ = Be({
    enum: r.enum || [!0, !1],
    enumNames: r.enumNames || (r.enum && r.enum[0] === !1 ? ["No", "Yes"] : ["Yes", "No"])
  }), Wr.createElement(C, {
    options: D({}, N, {
      enumOptions: $
    }),
    schema: r,
    id: n && n.$id,
    onChange: m,
    onFocus: f,
    onBlur: v,
    label: y === void 0 ? a : y,
    value: i,
    required: s,
    disabled: u,
    readonly: d,
    registry: o,
    formContext: g,
    autofocus: c,
    rawErrors: h,
    DescriptionField: S.DescriptionField
  });
}
Ut.defaultProps = {
  uiSchema: {},
  disabled: !1,
  readonly: !1,
  autofocus: !1
};
const Ct = window.React;
function qr(e) {
  var r = e.id, a = e.description;
  return a ? typeof a == "string" ? Ct.createElement("p", {
    id: r,
    className: "field-description"
  }, a) : Ct.createElement("div", {
    id: r,
    className: "field-description"
  }, a) : null;
}
const Ne = window.React, Ur = window.React.Component;
var ot = /* @__PURE__ */ function(e) {
  ee(r, e);
  function r(a) {
    var t;
    te(this, r), t = re(this, ne(r).call(this, a)), w(T(t), "onOptionChange", function(o) {
      var s = nt(o, 10), u = t.props, d = u.formData, c = u.onChange, m = u.options, f = u.registry, v = f.rootSchema, h = I(m[s], v, d), y = void 0;
      if (_e(d) === "object" && (h.type === "object" || h.properties)) {
        y = B({}, d);
        var p = m.slice();
        p.splice(s, 1);
        var g = !0, S = !1, E = void 0;
        try {
          for (var b = kt(p), F; !(g = (F = b.next()).done); g = !0) {
            var N = F.value;
            if (N.properties)
              for (var C in N.properties)
                y.hasOwnProperty(C) && delete y[C];
          }
        } catch ($) {
          S = !0, E = $;
        } finally {
          try {
            !g && b.return != null && b.return();
          } finally {
            if (S)
              throw E;
          }
        }
      }
      c(Ye(m[s], y, v)), t.setState({
        selectedOption: nt(o, 10)
      });
    });
    var n = t.props, i = n.formData, l = n.options;
    return t.state = {
      selectedOption: t.getMatchingOption(i, l)
    }, t;
  }
  return ae(r, [{
    key: "componentDidUpdate",
    value: function(t, n) {
      if (!G(this.props.formData, t.formData) && this.props.idSchema.$id === t.idSchema.$id) {
        var i = this.getMatchingOption(this.props.formData, this.props.options);
        if (!n || i === this.state.selectedOption)
          return;
        this.setState({
          selectedOption: i
        });
      }
    }
  }, {
    key: "getMatchingOption",
    value: function(t, n) {
      var i = Re(t, n);
      return i !== 0 ? i : this && this.state ? this.state.selectedOption : 0;
    }
  }, {
    key: "render",
    value: function() {
      var t = this.props, n = t.baseType, i = t.disabled, l = t.errorSchema, o = t.formData, s = t.idPrefix, u = t.idSchema, d = t.onBlur, c = t.onChange, m = t.onFocus, f = t.options, v = t.registry, h = t.uiSchema, y = t.schema, p = v.fields.SchemaField, g = v.widgets, S = this.state.selectedOption, E = ce(h), b = E.widget, F = b === void 0 ? "select" : b, N = K(E, ["widget"]), C = me({
        type: "number"
      }, F, g), $ = f[S] || null, W;
      $ && (W = $.type ? $ : B({}, $, {
        type: n
      }));
      var M = f.map(function(k, V) {
        return {
          label: k.title || "Option ".concat(V + 1),
          value: V
        };
      });
      return Ne.createElement("div", {
        className: "panel panel-default panel-body"
      }, Ne.createElement("div", {
        className: "form-group"
      }, Ne.createElement(C, B({
        id: "".concat(u.$id).concat(y.oneOf ? "__oneof_select" : "__anyof_select"),
        schema: {
          type: "number",
          default: 0
        },
        onChange: this.onOptionChange,
        onBlur: d,
        onFocus: m,
        value: S,
        options: {
          enumOptions: M
        }
      }, N))), $ !== null && Ne.createElement(p, {
        schema: W,
        uiSchema: h,
        errorSchema: l,
        idSchema: u,
        idPrefix: s,
        formData: o,
        onChange: c,
        onBlur: d,
        onFocus: m,
        registry: v,
        disabled: i
      }));
    }
  }]), r;
}(Ur);
ot.defaultProps = {
  disabled: !1,
  errorSchema: {},
  idSchema: {},
  uiSchema: {}
};
const Dt = window.React;
var Mr = /\.([0-9]*0)*$/, Vr = /[0.]0*$/, Mt = /* @__PURE__ */ function(e) {
  ee(r, e);
  function r(a) {
    var t;
    return te(this, r), t = re(this, ne(r).call(this, a)), w(T(t), "handleChange", function(n) {
      t.setState({
        lastValue: n
      }), "".concat(n).charAt(0) === "." && (n = "0".concat(n));
      var i = typeof n == "string" && n.match(Mr) ? Oe(n.replace(Vr, "")) : Oe(n);
      t.props.onChange(i);
    }), t.state = {
      lastValue: a.value
    }, t;
  }
  return ae(r, [{
    key: "render",
    value: function() {
      var t = this.props.registry.fields.StringField, n = this.props, i = n.formData, l = K(n, ["formData"]), o = this.state.lastValue, s = i;
      if (typeof o == "string" && typeof s == "number") {
        var u = new RegExp("".concat(s).replace(".", "\\.") + "\\.?0*$");
        o.match(u) && (s = o);
      }
      return Dt.createElement(t, B({}, l, {
        formData: s,
        onChange: this.handleChange
      }));
    }
  }]), r;
}(Dt.Component);
Mt.defaultProps = {
  uiSchema: {}
};
const X = window.React, jr = window.React.Component;
function Lr(e) {
  var r = e.TitleField, a = e.DescriptionField;
  return X.createElement("fieldset", {
    id: e.idSchema.$id
  }, (e.uiSchema["ui:title"] || e.title) && X.createElement(r, {
    id: "".concat(e.idSchema.$id, "__title"),
    title: e.title || e.uiSchema["ui:title"],
    required: e.required,
    formContext: e.formContext
  }), e.description && X.createElement(a, {
    id: "".concat(e.idSchema.$id, "__description"),
    description: e.description,
    formContext: e.formContext
  }), e.properties.map(function(t) {
    return t.content;
  }), Kn(e.schema, e.uiSchema, e.formData) && X.createElement(vt, {
    className: "object-property-expand",
    onClick: e.onAddClick(e.schema),
    disabled: e.disabled || e.readonly
  }));
}
var Vt = /* @__PURE__ */ function(e) {
  ee(r, e);
  function r() {
    var a, t;
    te(this, r);
    for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++)
      i[l] = arguments[l];
    return t = re(this, (a = ne(r)).call.apply(a, [this].concat(i))), w(T(t), "state", {
      wasPropertyKeyModified: !1,
      additionalProperties: {}
    }), w(T(t), "onPropertyChange", function(o) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return function(u, d) {
        !u && s && (u = "");
        var c = D({}, t.props.formData, w({}, o, u));
        t.props.onChange(c, d && t.props.errorSchema && D({}, t.props.errorSchema, w({}, o, d)));
      };
    }), w(T(t), "onDropPropertyClick", function(o) {
      return function(s) {
        s.preventDefault();
        var u = t.props, d = u.onChange, c = u.formData, m = D({}, c);
        delete m[o], d(m);
      };
    }), w(T(t), "getAvailableKey", function(o, s) {
      for (var u = 0, d = o; s.hasOwnProperty(d); )
        d = "".concat(o, "-").concat(++u);
      return d;
    }), w(T(t), "onKeyChange", function(o) {
      return function(s, u) {
        if (o !== s) {
          s = t.getAvailableKey(s, t.props.formData);
          var d = D({}, t.props.formData), c = w({}, o, s), m = U(d).map(function(v) {
            var h = c[v] || v;
            return w({}, h, d[v]);
          }), f = B.apply(void 0, [{}].concat(Z(m)));
          t.setState({
            wasPropertyKeyModified: !0
          }), t.props.onChange(f, u && t.props.errorSchema && D({}, t.props.errorSchema, w({}, s, u)));
        }
      };
    }), w(T(t), "handleAddClick", function(o) {
      return function() {
        var s = o.additionalProperties.type, u = D({}, t.props.formData);
        if (o.additionalProperties.hasOwnProperty("$ref")) {
          var d = t.props.registry, c = d === void 0 ? z() : d, m = I({
            $ref: o.additionalProperties.$ref
          }, c.rootSchema, t.props.formData);
          s = m.type;
        }
        u[t.getAvailableKey("newKey", u)] = t.getDefaultValue(s), t.props.onChange(u);
      };
    }), t;
  }
  return ae(r, [{
    key: "isRequired",
    value: function(t) {
      var n = this.props.schema;
      return x(n.required) && n.required.indexOf(t) !== -1;
    }
  }, {
    key: "getDefaultValue",
    value: function(t) {
      switch (t) {
        case "string":
          return "New Value";
        case "array":
          return [];
        case "boolean":
          return !1;
        case "null":
          return null;
        case "number":
          return 0;
        case "object":
          return {};
        default:
          return "New Value";
      }
    }
  }, {
    key: "render",
    value: function() {
      var t = this, n = this.props, i = n.uiSchema, l = n.formData, o = n.errorSchema, s = n.idSchema, u = n.name, d = n.required, c = n.disabled, m = n.readonly, f = n.idPrefix, v = n.onBlur, h = n.onFocus, y = n.registry, p = y === void 0 ? z() : y, g = p.rootSchema, S = p.fields, E = p.formContext, b = S.SchemaField, F = S.TitleField, N = S.DescriptionField, C = I(this.props.schema, g, l), $ = C.title === void 0 ? u : C.title, W = i["ui:description"] || C.description, M;
      try {
        var k = U(C.properties || {});
        M = Yn(k, i["ui:order"]);
      } catch (O) {
        return X.createElement("div", null, X.createElement("p", {
          className: "config-error",
          style: {
            color: "red"
          }
        }, "Invalid ", u || "root", " object field configuration:", X.createElement("em", null, O.message), "."), X.createElement("pre", null, dt(C)));
      }
      var V = i["ui:ObjectFieldTemplate"] || p.ObjectFieldTemplate || Lr, J = {
        title: i["ui:title"] || $,
        description: W,
        TitleField: F,
        DescriptionField: N,
        properties: M.map(function(O) {
          var q = C.properties[O].hasOwnProperty(pt);
          return {
            content: X.createElement(b, {
              key: O,
              name: O,
              required: t.isRequired(O),
              schema: C.properties[O],
              uiSchema: q ? i.additionalProperties : i[O],
              errorSchema: o[O],
              idSchema: s[O],
              idPrefix: f,
              formData: (l || {})[O],
              wasPropertyKeyModified: t.state.wasPropertyKeyModified,
              onKeyChange: t.onKeyChange(O),
              onChange: t.onPropertyChange(O, q),
              onBlur: v,
              onFocus: h,
              registry: p,
              disabled: c,
              readonly: m,
              onDropPropertyClick: t.onDropPropertyClick
            }),
            name: O,
            readonly: m,
            disabled: c,
            required: d
          };
        }),
        readonly: m,
        disabled: c,
        required: d,
        idSchema: s,
        uiSchema: i,
        schema: C,
        formData: l,
        formContext: E
      };
      return X.createElement(V, B({}, J, {
        onAddClick: this.handleAddClick
      }));
    }
  }]), r;
}(jr);
w(Vt, "defaultProps", {
  uiSchema: {},
  formData: {},
  errorSchema: {},
  idSchema: {},
  required: !1,
  disabled: !1,
  readonly: !1
});
const P = window.React;
var Kr = "*", Hr = {
  array: "ArrayField",
  boolean: "BooleanField",
  integer: "NumberField",
  number: "NumberField",
  object: "ObjectField",
  string: "StringField",
  null: "NullField"
};
function zr(e, r, a, t) {
  var n = r["ui:field"];
  if (typeof n == "function")
    return n;
  if (typeof n == "string" && n in t)
    return t[n];
  var i = Hr[Pe(e)];
  return !i && (e.anyOf || e.oneOf) ? function() {
    return null;
  } : i in t ? t[i] : function() {
    var l = t.UnsupportedField;
    return P.createElement(l, {
      schema: e,
      idSchema: a,
      reason: "Unknown field type ".concat(e.type)
    });
  };
}
function jt(e) {
  var r = e.label, a = e.required, t = e.id;
  return r ? P.createElement("label", {
    className: "control-label",
    htmlFor: t
  }, r, a && P.createElement("span", {
    className: "required"
  }, Kr)) : null;
}
function Yr(e) {
  var r = e.id, a = e.label, t = e.onChange;
  return P.createElement("input", {
    className: "form-control",
    type: "text",
    id: r,
    onBlur: function(i) {
      return t(i.target.value);
    },
    defaultValue: a
  });
}
function Jr(e) {
  var r = e.help;
  return r ? typeof r == "string" ? P.createElement("p", {
    className: "help-block"
  }, r) : P.createElement("div", {
    className: "help-block"
  }, r) : null;
}
function Qr(e) {
  var r = e.errors, a = r === void 0 ? [] : r;
  return a.length === 0 ? null : P.createElement("div", null, P.createElement("ul", {
    className: "error-detail bs-callout bs-callout-info"
  }, a.filter(function(t) {
    return !!t;
  }).map(function(t, n) {
    return P.createElement("li", {
      className: "text-danger",
      key: n
    }, t);
  })));
}
function Lt(e) {
  var r = e.id, a = e.label, t = e.children, n = e.errors, i = e.help, l = e.description, o = e.hidden, s = e.required, u = e.displayLabel;
  return o ? P.createElement("div", {
    className: "hidden"
  }, t) : P.createElement(Gr, e, u && P.createElement(jt, {
    label: a,
    required: s,
    id: r
  }), u && l ? l : null, t, n, i);
}
Lt.defaultProps = {
  hidden: !1,
  readonly: !1,
  required: !1,
  displayLabel: !0
};
function Gr(e) {
  var r = e.id, a = e.classNames, t = e.disabled, n = e.label, i = e.onKeyChange, l = e.onDropPropertyClick, o = e.readonly, s = e.required, u = e.schema, d = "".concat(n, " Key"), c = u.hasOwnProperty(pt);
  return c ? P.createElement("div", {
    className: a
  }, P.createElement("div", {
    className: "row"
  }, P.createElement("div", {
    className: "col-xs-5 form-additional"
  }, P.createElement("div", {
    className: "form-group"
  }, P.createElement(jt, {
    label: d,
    required: s,
    id: "".concat(r, "-key")
  }), P.createElement(Yr, {
    label: n,
    required: s,
    id: "".concat(r, "-key"),
    onChange: i
  }))), P.createElement("div", {
    className: "form-additional form-group col-xs-5"
  }, e.children), P.createElement("div", {
    className: "col-xs-2"
  }, P.createElement(xe, {
    type: "danger",
    icon: "remove",
    className: "array-item-remove btn-block",
    tabIndex: "-1",
    style: {
      border: "0"
    },
    disabled: t || o,
    onClick: l(n)
  })))) : P.createElement("div", {
    className: a
  }, e.children);
}
function Xr(e) {
  var r = e.uiSchema, a = e.formData, t = e.errorSchema, n = e.idPrefix, i = e.name, l = e.onKeyChange, o = e.onDropPropertyClick, s = e.required, u = e.registry, d = u === void 0 ? z() : u, c = e.wasPropertyKeyModified, m = c === void 0 ? !1 : c, f = d.rootSchema, v = d.fields, h = d.formContext, y = r["ui:FieldTemplate"] || d.FieldTemplate || Lt, p = e.idSchema, g = I(e.schema, f, a);
  p = de(be(g, null, f, a, n), p);
  var S = zr(g, r, p, v), E = v.DescriptionField, b = Boolean(e.disabled || r["ui:disabled"]), F = Boolean(e.readonly || r["ui:readonly"] || e.schema.readOnly || g.readOnly), N = Boolean(e.autofocus || r["ui:autofocus"]);
  if (U(g).length === 0)
    return null;
  var C = zn(g, r, f), $ = t.__errors, W = K(t, ["__errors"]), M = P.createElement(S, B({}, e, {
    idSchema: p,
    schema: g,
    uiSchema: D({}, r, {
      classNames: void 0
    }),
    disabled: b,
    readonly: F,
    autofocus: N,
    errorSchema: W,
    formContext: h,
    rawErrors: $
  })), k = p.$id, V;
  m ? V = i : V = r["ui:title"] || e.schema.title || g.title || i;
  var J = r["ui:description"] || e.schema.description || g.description, O = $, q = r["ui:help"], H = r["ui:widget"] === "hidden", fe = ["form-group", "field", "field-".concat(g.type), O && O.length > 0 ? "field-error has-error has-danger" : "", r.classNames].join(" ").trim(), ie = {
    description: P.createElement(E, {
      id: k + "__description",
      description: J,
      formContext: h
    }),
    rawDescription: J,
    help: P.createElement(Jr, {
      help: q
    }),
    rawHelp: typeof q == "string" ? q : void 0,
    errors: P.createElement(Qr, {
      errors: O
    }),
    rawErrors: O,
    id: k,
    label: V,
    hidden: H,
    onKeyChange: l,
    onDropPropertyClick: o,
    required: s,
    disabled: b,
    readonly: F,
    displayLabel: C,
    classNames: fe,
    formContext: h,
    fields: v,
    schema: g,
    uiSchema: r,
    registry: d
  }, oe = d.fields.AnyOfField, Se = d.fields.OneOfField;
  return P.createElement(y, ie, P.createElement(P.Fragment, null, M, g.anyOf && !Ie(g) && P.createElement(oe, {
    disabled: b,
    errorSchema: t,
    formData: a,
    idPrefix: n,
    idSchema: p,
    onBlur: e.onBlur,
    onChange: e.onChange,
    onFocus: e.onFocus,
    options: g.anyOf,
    baseType: g.type,
    registry: d,
    schema: g,
    uiSchema: r
  }), g.oneOf && !Ie(g) && P.createElement(Se, {
    disabled: b,
    errorSchema: t,
    formData: a,
    idPrefix: n,
    idSchema: p,
    onBlur: e.onBlur,
    onChange: e.onChange,
    onFocus: e.onFocus,
    options: g.oneOf,
    baseType: g.type,
    registry: d,
    schema: g,
    uiSchema: r
  })));
}
var Kt = /* @__PURE__ */ function(e) {
  ee(r, e);
  function r() {
    return te(this, r), re(this, ne(r).apply(this, arguments));
  }
  return ae(r, [{
    key: "shouldComponentUpdate",
    value: function(t, n) {
      return !G(this.props, t);
    }
  }, {
    key: "render",
    value: function() {
      return Xr(this.props);
    }
  }]), r;
}(P.Component);
Kt.defaultProps = {
  uiSchema: {},
  errorSchema: {},
  idSchema: {},
  disabled: !1,
  readonly: !1,
  autofocus: !1
};
const Zr = window.React;
function Ht(e) {
  var r = e.schema, a = e.name, t = e.uiSchema, n = e.idSchema, i = e.formData, l = e.required, o = e.disabled, s = e.readonly, u = e.autofocus, d = e.onChange, c = e.onBlur, m = e.onFocus, f = e.registry, v = f === void 0 ? z() : f, h = e.rawErrors, y = r.title, p = r.format, g = v.widgets, S = v.formContext, E = Ie(r) && Be(r), b = E ? "select" : "text";
  p && Hn(r, p, g) && (b = p);
  var F = ce(t), N = F.widget, C = N === void 0 ? b : N, $ = F.placeholder, W = $ === void 0 ? "" : $, M = K(F, ["widget", "placeholder"]), k = me(r, C, g);
  return Zr.createElement(k, {
    options: D({}, M, {
      enumOptions: E
    }),
    schema: r,
    uiSchema: t,
    id: n && n.$id,
    label: y === void 0 ? a : y,
    value: i,
    onChange: d,
    onBlur: c,
    onFocus: m,
    required: l,
    disabled: o,
    readonly: s,
    formContext: S,
    autofocus: u,
    registry: v,
    placeholder: W,
    rawErrors: h
  });
}
Ht.defaultProps = {
  uiSchema: {},
  disabled: !1,
  readonly: !1,
  autofocus: !1
};
const xt = window.React;
var en = "*";
function tn(e) {
  var r = e.id, a = e.title, t = e.required;
  return xt.createElement("legend", {
    id: r
  }, a, t && xt.createElement("span", {
    className: "required"
  }, en));
}
const rn = window.React.Component;
var nn = /* @__PURE__ */ function(e) {
  ee(r, e);
  function r() {
    return te(this, r), re(this, ne(r).apply(this, arguments));
  }
  return ae(r, [{
    key: "componentDidMount",
    value: function() {
      this.props.formData === void 0 && this.props.onChange(null);
    }
  }, {
    key: "render",
    value: function() {
      return null;
    }
  }]), r;
}(rn);
const we = window.React;
function an(e) {
  var r = e.schema, a = e.idSchema, t = e.reason;
  return we.createElement("div", {
    className: "unsupported-field"
  }, we.createElement("p", null, "Unsupported field schema", a && a.$id && we.createElement("span", null, " for", " field ", we.createElement("code", null, a.$id)), t && we.createElement("em", null, ": ", t), "."), r && we.createElement("pre", null, dt(r, null, 2)));
}
const on = {
  AnyOfField: ot,
  ArrayField: qt,
  BooleanField: Ut,
  DescriptionField: qr,
  NumberField: Mt,
  ObjectField: Vt,
  OneOfField: ot,
  SchemaField: Kt,
  StringField: Ht,
  TitleField: tn,
  NullField: nn,
  UnsupportedField: an
}, le = window.React, ln = window.React.Component;
function sn(e, r) {
  for (var a = [], t = e; t <= r; t++)
    a.push({
      value: t,
      label: ue(t, 2)
    });
  return a;
}
function un(e) {
  return U(e).every(function(r) {
    return e[r] !== -1;
  });
}
function dn(e) {
  var r = e.type, a = e.range, t = e.value, n = e.select, i = e.rootId, l = e.disabled, o = e.readonly, s = e.autofocus, u = e.registry, d = e.onBlur, c = i + "_" + r, m = u.widgets.SelectWidget;
  return le.createElement(m, {
    schema: {
      type: "integer"
    },
    id: c,
    className: "form-control",
    options: {
      enumOptions: sn(a[0], a[1])
    },
    placeholder: r,
    value: t,
    disabled: l,
    readonly: o,
    autofocus: s,
    onChange: function(v) {
      return n(r, v);
    },
    onBlur: d
  });
}
var gt = /* @__PURE__ */ function(e) {
  ee(r, e);
  function r(a) {
    var t;
    return te(this, r), t = re(this, ne(r).call(this, a)), w(T(t), "onChange", function(n, i) {
      t.setState(w({}, n, typeof i > "u" ? -1 : i), function() {
        un(t.state) && t.props.onChange(Nt(t.state, t.props.time));
      });
    }), w(T(t), "setNow", function(n) {
      n.preventDefault();
      var i = t.props, l = i.time, o = i.disabled, s = i.readonly, u = i.onChange;
      if (!(o || s)) {
        var d = Te(new Date().toJSON(), l);
        t.setState(d, function() {
          return u(Nt(t.state, l));
        });
      }
    }), w(T(t), "clear", function(n) {
      n.preventDefault();
      var i = t.props, l = i.time, o = i.disabled, s = i.readonly, u = i.onChange;
      o || s || t.setState(Te("", l), function() {
        return u(void 0);
      });
    }), t.state = Te(a.value, a.time), t;
  }
  return ae(r, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function(t) {
      this.setState(Te(t.value, t.time));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function(t, n) {
      return wt(this, t, n);
    }
  }, {
    key: "render",
    value: function() {
      var t = this, n = this.props, i = n.id, l = n.disabled, o = n.readonly, s = n.autofocus, u = n.registry, d = n.onBlur, c = n.options;
      return le.createElement("ul", {
        className: "list-inline"
      }, this.dateElementProps.map(function(m, f) {
        return le.createElement("li", {
          key: f
        }, le.createElement(dn, B({
          rootId: i,
          select: t.onChange
        }, m, {
          disabled: l,
          readonly: o,
          registry: u,
          onBlur: d,
          autofocus: s && f === 0
        })));
      }), (c.hideNowButton !== "undefined" ? !c.hideNowButton : !0) && le.createElement("li", null, le.createElement("a", {
        href: "#",
        className: "btn btn-info btn-now",
        onClick: this.setNow
      }, "Now")), (c.hideClearButton !== "undefined" ? !c.hideClearButton : !0) && le.createElement("li", null, le.createElement("a", {
        href: "#",
        className: "btn btn-warning btn-clear",
        onClick: this.clear
      }, "Clear")));
    }
  }, {
    key: "dateElementProps",
    get: function() {
      var t = this.props, n = t.time, i = t.options, l = this.state, o = l.year, s = l.month, u = l.day, d = l.hour, c = l.minute, m = l.second, f = [{
        type: "year",
        range: i.yearsRange,
        value: o
      }, {
        type: "month",
        range: [1, 12],
        value: s
      }, {
        type: "day",
        range: [1, 31],
        value: u
      }];
      return n && f.push({
        type: "hour",
        range: [0, 23],
        value: d
      }, {
        type: "minute",
        range: [0, 59],
        value: c
      }, {
        type: "second",
        range: [0, 59],
        value: m
      }), f;
    }
  }]), r;
}(ln);
w(gt, "defaultProps", {
  time: !1,
  disabled: !1,
  readonly: !1,
  autofocus: !1,
  options: {
    yearsRange: [1900, new Date().getFullYear() + 2]
  }
});
const cn = window.React;
function zt(e) {
  var r = e.registry.widgets.AltDateWidget;
  return cn.createElement(r, B({
    time: !0
  }, e));
}
zt.defaultProps = D({}, gt.defaultProps, {
  time: !0
});
const Ge = window.React;
function Yt(e) {
  if (!e.id)
    throw console.log("No id for", e), new Error("no id for props ".concat(dt(e)));
  var r = e.value, a = e.readonly, t = e.disabled, n = e.autofocus, i = e.onBlur, l = e.onFocus, o = e.options, s = e.schema, u = K(e, ["value", "readonly", "disabled", "autofocus", "onBlur", "onFocus", "options", "schema", "uiSchema", "formContext", "registry", "rawErrors"]);
  o.inputType ? u.type = o.inputType : u.type || (s.type === "number" ? (u.type = "number", u.step = "any") : s.type === "integer" ? (u.type = "number", u.step = "1") : u.type = "text"), o.autocomplete && (u.autoComplete = o.autocomplete), s.multipleOf && (u.step = s.multipleOf), typeof s.minimum < "u" && (u.min = s.minimum), typeof s.maximum < "u" && (u.max = s.maximum);
  var d = function(m) {
    var f = m.target.value;
    return e.onChange(f === "" ? o.emptyValue : f);
  };
  return [Ge.createElement("input", B({
    key: u.id,
    className: "form-control",
    readOnly: a,
    disabled: t,
    autoFocus: n,
    value: r == null ? "" : r
  }, u, {
    list: s.examples ? "examples_".concat(u.id) : null,
    onChange: d,
    onBlur: i && function(c) {
      return i(u.id, c.target.value);
    },
    onFocus: l && function(c) {
      return l(u.id, c.target.value);
    }
  })), s.examples ? Ge.createElement("datalist", {
    id: "examples_".concat(u.id)
  }, Z(new ct(s.examples.concat(s.default ? [s.default] : []))).map(function(c) {
    return Ge.createElement("option", {
      key: c,
      value: c
    });
  })) : null];
}
Yt.defaultProps = {
  required: !1,
  disabled: !1,
  readonly: !1,
  autofocus: !1
};
const Ce = window.React;
function Jt(e) {
  var r = e.schema, a = e.id, t = e.value, n = e.disabled, i = e.readonly, l = e.label, o = e.autofocus, s = e.onBlur, u = e.onFocus, d = e.onChange, c = e.DescriptionField, m = Ae(r);
  return Ce.createElement("div", {
    className: "checkbox ".concat(n || i ? "disabled" : "")
  }, r.description && Ce.createElement(c, {
    description: r.description
  }), Ce.createElement("label", null, Ce.createElement("input", {
    type: "checkbox",
    id: a,
    checked: typeof t > "u" ? !1 : t,
    required: m,
    disabled: n || i,
    autoFocus: o,
    onChange: function(v) {
      return d(v.target.checked);
    },
    onBlur: s && function(f) {
      return s(a, f.target.checked);
    },
    onFocus: u && function(f) {
      return u(a, f.target.checked);
    }
  }), Ce.createElement("span", null, l)));
}
Jt.defaultProps = {
  autofocus: !1
};
const he = window.React;
function mn(e, r, a) {
  var t = a.indexOf(e), n = r.slice(0, t).concat(e, r.slice(t));
  return n.sort(function(i, l) {
    return a.indexOf(i) > a.indexOf(l);
  });
}
function fn(e, r) {
  return r.filter(function(a) {
    return a !== e;
  });
}
function Qt(e) {
  var r = e.id, a = e.disabled, t = e.options, n = e.value, i = e.autofocus, l = e.readonly, o = e.onChange, s = t.enumOptions, u = t.enumDisabled, d = t.inline;
  return he.createElement("div", {
    className: "checkboxes",
    id: r
  }, s.map(function(c, m) {
    var f = n.indexOf(c.value) !== -1, v = u && u.indexOf(c.value) != -1, h = a || v || l ? "disabled" : "", y = he.createElement("span", null, he.createElement("input", {
      type: "checkbox",
      id: "".concat(r, "_").concat(m),
      checked: f,
      disabled: a || v || l,
      autoFocus: i && m === 0,
      onChange: function(g) {
        var S = s.map(function(E) {
          var b = E.value;
          return b;
        });
        g.target.checked ? o(mn(c.value, n, S)) : o(fn(c.value, n));
      }
    }), he.createElement("span", null, c.label));
    return d ? he.createElement("label", {
      key: m,
      className: "checkbox-inline ".concat(h)
    }, y) : he.createElement("div", {
      key: m,
      className: "checkbox ".concat(h)
    }, he.createElement("label", null, y));
  }));
}
Qt.defaultProps = {
  autofocus: !1,
  options: {
    inline: !1
  }
};
const hn = window.React;
function vn(e) {
  var r = e.disabled, a = e.readonly, t = e.registry.widgets.BaseInput;
  return hn.createElement(t, B({
    type: "color"
  }, e, {
    disabled: r || a
  }));
}
const gn = window.React;
function pn(e) {
  var r = e.onChange, a = e.registry.widgets.BaseInput;
  return gn.createElement(a, B({
    type: "date"
  }, e, {
    onChange: function(n) {
      return r(n || void 0);
    }
  }));
}
const yn = window.React;
function bn(e) {
  var r = e.value, a = e.onChange, t = e.registry.widgets.BaseInput;
  return yn.createElement(t, B({
    type: "datetime-local"
  }, e, {
    value: ra(r),
    onChange: function(i) {
      return a(na(i));
    }
  }));
}
const Sn = window.React;
function wn(e) {
  var r = e.registry.widgets.BaseInput;
  return Sn.createElement(r, B({
    type: "email"
  }, e));
}
const ye = window.React, Fn = window.React.Component;
function En(e, r) {
  return e.replace(";base64", ";name=".concat(encodeURIComponent(r), ";base64"));
}
function Cn(e) {
  var r = e.name, a = e.size, t = e.type;
  return new Tt(function(n, i) {
    var l = new window.FileReader();
    l.onerror = i, l.onload = function(o) {
      n({
        dataURL: En(o.target.result, r),
        name: r,
        size: a,
        type: t
      });
    }, l.readAsDataURL(e);
  });
}
function Dn(e) {
  return Tt.all([].map.call(e, Cn));
}
function xn(e) {
  var r = e.filesInfo;
  return r.length === 0 ? null : ye.createElement("ul", {
    className: "file-info"
  }, r.map(function(a, t) {
    var n = a.name, i = a.size, l = a.type;
    return ye.createElement("li", {
      key: t
    }, ye.createElement("strong", null, n), " (", l, ", ", i, " bytes)");
  }));
}
function On(e) {
  return e.filter(function(r) {
    return typeof r < "u";
  }).map(function(r) {
    var a = aa(r), t = a.blob, n = a.name;
    return {
      name: n,
      size: t.size,
      type: t.type
    };
  });
}
var Gt = /* @__PURE__ */ function(e) {
  ee(r, e);
  function r(a) {
    var t;
    te(this, r), t = re(this, ne(r).call(this, a)), w(T(t), "onChange", function(l) {
      var o = t.props, s = o.multiple, u = o.onChange;
      Dn(l.target.files).then(function(d) {
        var c = {
          values: d.map(function(m) {
            return m.dataURL;
          }),
          filesInfo: d
        };
        t.setState(c, function() {
          u(s ? c.values : c.values[0]);
        });
      });
    });
    var n = a.value, i = x(n) ? n : [n];
    return t.state = {
      values: i,
      filesInfo: On(i)
    }, t;
  }
  return ae(r, [{
    key: "shouldComponentUpdate",
    value: function(t, n) {
      return wt(this, t, n);
    }
  }, {
    key: "render",
    value: function() {
      var t = this, n = this.props, i = n.multiple, l = n.id, o = n.readonly, s = n.disabled, u = n.autofocus, d = n.options, c = this.state.filesInfo;
      return ye.createElement("div", null, ye.createElement("p", null, ye.createElement("input", {
        ref: function(f) {
          return t.inputRef = f;
        },
        id: l,
        type: "file",
        disabled: o || s,
        onChange: this.onChange,
        defaultValue: "",
        autoFocus: u,
        multiple: i,
        accept: d.accept
      })), ye.createElement(xn, {
        filesInfo: c
      }));
    }
  }]), r;
}(Fn);
Gt.defaultProps = {
  autofocus: !1
};
const $n = window.React;
function Pn(e) {
  var r = e.id, a = e.value;
  return $n.createElement("input", {
    type: "hidden",
    id: r,
    value: typeof a > "u" ? "" : a
  });
}
const _n = window.React;
function Rn(e) {
  var r = e.registry.widgets.BaseInput;
  return _n.createElement(r, B({
    type: "password"
  }, e));
}
const ve = window.React;
function Xt(e) {
  var r = e.options, a = e.value, t = e.required, n = e.disabled, i = e.readonly, l = e.autofocus, o = e.onBlur, s = e.onFocus, u = e.onChange, d = e.id, c = Math.random().toString(), m = r.enumOptions, f = r.enumDisabled, v = r.inline;
  return ve.createElement("div", {
    className: "field-radio-group",
    id: d
  }, m.map(function(h, y) {
    var p = h.value === a, g = f && f.indexOf(h.value) != -1, S = n || g || i ? "disabled" : "", E = ve.createElement("span", null, ve.createElement("input", {
      type: "radio",
      checked: p,
      name: c,
      required: t,
      value: h.value,
      disabled: n || g || i,
      autoFocus: l && y === 0,
      onChange: function(F) {
        return u(h.value);
      },
      onBlur: o && function(b) {
        return o(d, b.target.value);
      },
      onFocus: s && function(b) {
        return s(d, b.target.value);
      }
    }), ve.createElement("span", null, h.label));
    return v ? ve.createElement("label", {
      key: y,
      className: "radio-inline ".concat(S)
    }, E) : ve.createElement("div", {
      key: y,
      className: "radio ".concat(S)
    }, ve.createElement("label", null, E));
  }));
}
Xt.defaultProps = {
  autofocus: !1
};
const Xe = window.React;
function Nn(e) {
  var r = e.schema, a = e.value, t = e.registry.widgets.BaseInput;
  return Xe.createElement("div", {
    className: "field-range-wrapper"
  }, Xe.createElement(t, B({
    type: "range"
  }, e, ur(r))), Xe.createElement("span", {
    className: "range-view"
  }, a));
}
const Ze = window.React;
var kn = new ct(["number", "integer"]);
function et(e, r) {
  var a = e.type, t = e.items;
  if (r !== "") {
    {
      if (a === "array" && t && kn.has(t.type))
        return r.map(Oe);
      if (a === "boolean")
        return r === "true";
      if (a === "number")
        return Oe(r);
    }
    if (e.enum) {
      if (e.enum.every(function(n) {
        return _e(n) === "number";
      }))
        return Oe(r);
      if (e.enum.every(function(n) {
        return _e(n) === "boolean";
      }))
        return r === "true";
    }
    return r;
  }
}
function tt(e, r) {
  return r ? [].slice.call(e.target.options).filter(function(a) {
    return a.selected;
  }).map(function(a) {
    return a.value;
  }) : e.target.value;
}
function Zt(e) {
  var r = e.schema, a = e.id, t = e.options, n = e.value, i = e.required, l = e.disabled, o = e.readonly, s = e.multiple, u = e.autofocus, d = e.onChange, c = e.onBlur, m = e.onFocus, f = e.placeholder, v = t.enumOptions, h = t.enumDisabled, y = s ? [] : "";
  return Ze.createElement("select", {
    id: a,
    multiple: s,
    className: "form-control",
    value: typeof n > "u" ? y : n,
    required: i,
    disabled: l || o,
    autoFocus: u,
    onBlur: c && function(p) {
      var g = tt(p, s);
      c(a, et(r, g));
    },
    onFocus: m && function(p) {
      var g = tt(p, s);
      m(a, et(r, g));
    },
    onChange: function(g) {
      var S = tt(g, s);
      d(et(r, S));
    }
  }, !s && r.default === void 0 && Ze.createElement("option", {
    value: ""
  }, f), v.map(function(p, g) {
    var S = p.value, E = p.label, b = h && h.indexOf(S) != -1;
    return Ze.createElement("option", {
      key: g,
      value: S,
      disabled: b
    }, E);
  }));
}
Zt.defaultProps = {
  autofocus: !1
};
const Tn = window.React;
function er(e) {
  var r = e.id, a = e.options, t = e.placeholder, n = e.value, i = e.required, l = e.disabled, o = e.readonly, s = e.autofocus, u = e.onChange, d = e.onBlur, c = e.onFocus, m = function(v) {
    var h = v.target.value;
    return u(h === "" ? a.emptyValue : h);
  };
  return Tn.createElement("textarea", {
    id: r,
    className: "form-control",
    value: n || "",
    placeholder: t,
    required: i,
    disabled: l,
    readOnly: o,
    autoFocus: s,
    rows: a.rows,
    onBlur: d && function(f) {
      return d(r, f.target.value);
    },
    onFocus: c && function(f) {
      return c(r, f.target.value);
    },
    onChange: m
  });
}
er.defaultProps = {
  autofocus: !1,
  options: {}
};
const An = window.React;
function In(e) {
  var r = e.registry.widgets.BaseInput;
  return An.createElement(r, e);
}
const Bn = window.React;
function Wn(e) {
  var r = e.registry.widgets.BaseInput;
  return Bn.createElement(r, B({
    type: "url"
  }, e));
}
const qn = window.React;
function Un(e) {
  var r = e.registry.widgets.BaseInput;
  return qn.createElement(r, B({
    type: "number"
  }, e, ur(e.schema)));
}
const Mn = {
  BaseInput: Yt,
  PasswordWidget: Rn,
  RadioWidget: Xt,
  UpDownWidget: Un,
  RangeWidget: Nn,
  SelectWidget: Zt,
  TextWidget: In,
  DateWidget: pn,
  DateTimeWidget: bn,
  AltDateWidget: gt,
  AltDateTimeWidget: zt,
  EmailWidget: wn,
  URLWidget: Wn,
  TextareaWidget: er,
  HiddenWidget: Pn,
  ColorWidget: vn,
  FileWidget: Gt,
  CheckboxWidget: Jt,
  CheckboxesWidget: Qt
};
var ge = tr(), Ot = null, $t = null;
function tr() {
  var e = new Dr({
    errorDataPath: "property",
    allErrors: !0,
    multipleOfPrecision: 8,
    schemaId: "auto",
    unknownFormats: "ignore",
    $data: !0
  });
  return xr(e), e.addFormat("data-url", /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/), e.addFormat("color", /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/), e;
}
function Vn(e) {
  return e.length ? e.reduce(function(r, a) {
    var t = a.property, n = a.message, i = yr(t), l = r;
    i.length > 0 && i[0] === "" && i.splice(0, 1);
    var o = !0, s = !1, u = void 0;
    try {
      for (var d = kt(i.slice(0)), c; !(o = (c = d.next()).done); o = !0) {
        var m = c.value;
        m in l || (l[m] = {}), l = l[m];
      }
    } catch (f) {
      s = !0, u = f;
    } finally {
      try {
        !o && d.return != null && d.return();
      } finally {
        if (s)
          throw u;
      }
    }
    return x(l.__errors) ? l.__errors = l.__errors.concat(n) : n && (l.__errors = [n]), r;
  }, {}) : {};
}
function pe(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "root", a = [];
  return "__errors" in e && (a = a.concat(e.__errors.map(function(t) {
    return {
      stack: "".concat(r, ": ").concat(t)
    };
  }))), U(e).reduce(function(t, n) {
    return n !== "__errors" && (t = t.concat(pe(e[n], n))), t;
  }, a);
}
function lt(e) {
  var r = {
    __errors: [],
    addError: function(t) {
      this.__errors.push(t);
    }
  };
  return j(e) ? U(e).reduce(function(a, t) {
    return D({}, a, w({}, t, lt(e[t])));
  }, r) : x(e) ? e.reduce(function(a, t, n) {
    return D({}, a, w({}, n, lt(t)));
  }, r) : r;
}
function rr(e) {
  return U(e).reduce(function(r, a) {
    return a === "addError" ? r : a === "__errors" ? D({}, r, w({}, a, e[a])) : D({}, r, w({}, a, rr(e[a])));
  }, {});
}
function jn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e === null ? [] : e.map(function(r) {
    var a = r.dataPath, t = r.keyword, n = r.message, i = r.params, l = r.schemaPath, o = "".concat(a);
    return {
      name: t,
      property: o,
      message: n,
      params: i,
      stack: "".concat(o, " ").concat(n).trim(),
      schemaPath: l
    };
  });
}
function nr(e, r, a, t) {
  var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = r;
  e = Ye(r, e, l, !0);
  var o = !G($t, n), s = !G(Ot, i);
  (o || s) && (ge = tr()), n && o && x(n) && (ge.addMetaSchema(n), $t = n), i && s && j(i) && (U(i).forEach(function(p) {
    ge.addFormat(p, i[p]);
  }), Ot = i);
  var u = null;
  try {
    ge.validate(r, e);
  } catch (p) {
    u = p;
  }
  var d = jn(ge.errors);
  ge.errors = null;
  var c = u && u.message && typeof u.message == "string" && u.message.includes("no schema with key or ref ");
  c && (d = [].concat(Z(d), [{
    stack: u.message
  }])), typeof t == "function" && (d = t(d));
  var m = Vn(d);
  if (c && (m = D({}, m, {
    $schema: {
      __errors: [u.message]
    }
  })), typeof a != "function")
    return {
      errors: d,
      errorSchema: m
    };
  var f = a(e, lt(e)), v = rr(f), h = de(m, v, !0), y = pe(h);
  return {
    errors: y,
    errorSchema: h
  };
}
function Pt(e, r) {
  try {
    return ge.validate(e, r);
  } catch {
    return !1;
  }
}
function ar(e) {
  var r = Ln(e, "string");
  return Q(r) === "symbol" ? r : String(r);
}
function Ln(e, r) {
  if (Q(e) !== "object" || e === null)
    return e;
  var a = e[hr];
  if (a !== void 0) {
    var t = a.call(e, r || "default");
    if (Q(t) !== "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
const _t = window.React;
var pt = "__additional_property", rt = {
  boolean: {
    checkbox: "CheckboxWidget",
    radio: "RadioWidget",
    select: "SelectWidget",
    hidden: "HiddenWidget"
  },
  string: {
    text: "TextWidget",
    password: "PasswordWidget",
    email: "EmailWidget",
    hostname: "TextWidget",
    ipv4: "TextWidget",
    ipv6: "TextWidget",
    uri: "URLWidget",
    "data-url": "FileWidget",
    radio: "RadioWidget",
    select: "SelectWidget",
    textarea: "TextareaWidget",
    hidden: "HiddenWidget",
    date: "DateWidget",
    datetime: "DateTimeWidget",
    "date-time": "DateTimeWidget",
    "alt-date": "AltDateWidget",
    "alt-datetime": "AltDateTimeWidget",
    color: "ColorWidget",
    file: "FileWidget"
  },
  number: {
    text: "TextWidget",
    select: "SelectWidget",
    updown: "UpDownWidget",
    range: "RangeWidget",
    radio: "RadioWidget",
    hidden: "HiddenWidget"
  },
  integer: {
    text: "TextWidget",
    select: "SelectWidget",
    updown: "UpDownWidget",
    range: "RangeWidget",
    radio: "RadioWidget",
    hidden: "HiddenWidget"
  },
  array: {
    select: "SelectWidget",
    checkboxes: "CheckboxesWidget",
    files: "FileWidget",
    hidden: "HiddenWidget"
  }
};
function Kn(e, r, a) {
  if (!e.additionalProperties)
    return !1;
  var t = ce(r), n = t.expandable;
  return n === !1 ? n : e.maxProperties !== void 0 ? U(a).length < e.maxProperties : !0;
}
function z() {
  return {
    fields: on,
    widgets: Mn,
    definitions: {},
    rootSchema: {},
    formContext: {}
  };
}
function Pe(e) {
  var r = e.type;
  return !r && e.const ? _e(e.const) : !r && e.enum ? "string" : !r && (e.properties || e.additionalProperties) ? "object" : r instanceof Array && r.length === 2 && r.includes("null") ? r.find(function(a) {
    return a !== "null";
  }) : r;
}
function me(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = Pe(e);
  function n(o) {
    if (!o.MergedWidget) {
      var s = o.defaultProps && o.defaultProps.options || {};
      o.MergedWidget = function(u) {
        var d = u.options, c = d === void 0 ? {} : d, m = K(u, ["options"]);
        return _t.createElement(o, B({
          options: D({}, s, c)
        }, m));
      };
    }
    return o.MergedWidget;
  }
  if (typeof r == "function" || at.exports.isForwardRef(_t.createElement(r)) || at.exports.isMemo(r))
    return n(r);
  if (typeof r != "string")
    throw new Error("Unsupported widget definition: ".concat(Q(r)));
  if (a.hasOwnProperty(r)) {
    var i = a[r];
    return me(e, i, a);
  }
  if (!rt.hasOwnProperty(t))
    throw new Error('No widget for type "'.concat(t, '"'));
  if (rt[t].hasOwnProperty(r)) {
    var l = a[rt[t][r]];
    return me(e, l, a);
  }
  throw new Error('No widget "'.concat(r, '" for type "').concat(t, '"'));
}
function Hn(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  try {
    return me(e, r, a), !0;
  } catch (t) {
    if (t.message && (t.message.startsWith("No widget") || t.message.startsWith("Unsupported widget")))
      return !1;
    throw t;
  }
}
function se(e, r, a) {
  var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = j(e) ? e : {}, l = j(t) ? t : {}, o = r;
  if (j(o) && j(i.default))
    o = de(o, i.default);
  else if ("default" in i)
    o = i.default;
  else if ("$ref" in i) {
    var s = bt(i.$ref, a);
    return se(s, o, a, l, n);
  } else if ("dependencies" in i) {
    var u = lr(i, a, l);
    return se(u, o, a, l, n);
  } else
    ut(i) ? o = i.items.map(function(v, h) {
      return se(v, x(r) ? r[h] : void 0, a, l, n);
    }) : "oneOf" in i ? i = i.oneOf[Re(void 0, i.oneOf)] : "anyOf" in i && (i = i.anyOf[Re(void 0, i.anyOf)]);
  switch (typeof o > "u" && (o = i.default), Pe(i)) {
    case "object":
      return U(i.properties || {}).reduce(function(v, h) {
        var y = se(i.properties[h], (o || {})[h], a, (l || {})[h], n);
        return (n || y !== void 0) && (v[h] = y), v;
      }, {});
    case "array":
      if (x(o) && (o = o.map(function(v, h) {
        return se(i.items[h] || i.additionalItems || {}, v, a);
      })), x(t) && (o = t.map(function(v, h) {
        return se(i.items, (o || {})[h], a, v);
      })), i.minItems) {
        if (yt(i, a))
          return o || [];
        var d = o ? o.length : 0;
        if (i.minItems > d) {
          var c = o || [], m = x(i.items) ? i.additionalItems : i.items, f = pr(new Array(i.minItems - d), se(m, m.defaults, a));
          return c.concat(f);
        }
      }
  }
  return o;
}
function Ye(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!j(e))
    throw new Error("Invalid schema: " + e);
  var n = I(e, a, r), i = se(n, e.default, a, r, t);
  return typeof r > "u" ? i : j(r) || x(r) ? st(i, r) : r === 0 || r === !1 || r === "" ? r : r || i;
}
function st(e, r) {
  if (x(r))
    return x(e) || (e = []), r.map(function(t, n) {
      return e[n] ? st(e[n], t) : t;
    });
  if (j(r)) {
    var a = B({}, e);
    return U(r).reduce(function(t, n) {
      return t[n] = st(e ? e[n] : {}, r[n]), t;
    }, a);
  } else
    return r;
}
function ce(e) {
  return U(e).filter(function(r) {
    return r.indexOf("ui:") === 0;
  }).reduce(function(r, a) {
    var t = e[a];
    return a === "ui:widget" && j(t) ? (console.warn("Setting options via ui:widget object is deprecated, use ui:options instead"), D({}, r, t.options || {}, {
      widget: t.component
    })) : a === "ui:options" && j(t) ? D({}, r, t) : D({}, r, w({}, a.substring(3), t));
  }, {});
}
function zn(e, r, a) {
  var t = ce(r), n = t.label, i = n === void 0 ? !0 : n;
  return e.type === "array" && (i = yt(e, a) || ir(e, r, a)), e.type === "object" && (i = !1), e.type === "boolean" && !r["ui:widget"] && (i = !1), r["ui:field"] && (i = !1), i;
}
function j(e) {
  return typeof File < "u" && e instanceof File ? !1 : Q(e) === "object" && e !== null && !x(e);
}
function de(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, t = B({}, e);
  return U(r).reduce(function(n, i) {
    var l = e ? e[i] : {}, o = r[i];
    return e && e.hasOwnProperty(i) && j(o) ? n[i] = de(l, o, a) : a && x(l) && x(o) ? n[i] = l.concat(o) : n[i] = o, n;
  }, t);
}
function Oe(e) {
  if (e !== "") {
    if (e === null)
      return null;
    if (/\.$/.test(e) || /\.0$/.test(e))
      return e;
    var r = Number(e), a = typeof r == "number" && !At(r);
    return /\.\d*0$/.test(e) ? e : a ? r : e;
  }
}
function Yn(e, r) {
  if (!x(r))
    return e;
  var a = function(c) {
    return c.reduce(function(m, f) {
      return m[f] = !0, m;
    }, {});
  }, t = function(c) {
    return c.length > 1 ? "properties '".concat(c.join("', '"), "'") : "property '".concat(c[0], "'");
  }, n = a(e), i = r.filter(function(d) {
    return d === "*" || n[d];
  }), l = a(i), o = e.filter(function(d) {
    return !l[d];
  }), s = i.indexOf("*");
  if (s === -1) {
    if (o.length)
      throw new Error("uiSchema order list does not contain ".concat(t(o)));
    return i;
  }
  if (s !== i.lastIndexOf("*"))
    throw new Error("uiSchema order list contains more than one wildcard item");
  var u = Z(i);
  return u.splice.apply(u, [s, 1].concat(Z(o))), u;
}
function Jn(e) {
  return x(e.enum) && e.enum.length === 1 || e.hasOwnProperty("const");
}
function Qn(e) {
  if (x(e.enum) && e.enum.length === 1)
    return e.enum[0];
  if (e.hasOwnProperty("const"))
    return e.const;
  throw new Error("schema cannot be inferred as a constant");
}
function Ie(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = I(e, r), t = a.oneOf || a.anyOf;
  return x(a.enum) ? !0 : x(t) ? t.every(function(n) {
    return Jn(n);
  }) : !1;
}
function yt(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return !e.uniqueItems || !e.items ? !1 : Ie(e.items, r);
}
function ir(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (r["ui:widget"] === "files")
    return !0;
  if (e.items) {
    var t = I(e.items, a);
    return t.type === "string" && t.format === "data-url";
  }
  return !1;
}
function ut(e) {
  return x(e.items) && e.items.length > 0 && e.items.every(function(r) {
    return j(r);
  });
}
function Rt(e) {
  return e.additionalItems === !0 && console.warn("additionalItems=true is currently not supported"), j(e.additionalItems);
}
function Be(e) {
  if (e.enum)
    return e.enum.map(function(a, t) {
      var n = e.enumNames && e.enumNames[t] || String(a);
      return {
        label: n,
        value: a
      };
    });
  var r = e.oneOf || e.anyOf;
  return r.map(function(a, t) {
    var n = Qn(a), i = a.title || String(n);
    return {
      label: i,
      value: n
    };
  });
}
function bt(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = e;
  if (e.startsWith("#"))
    e = decodeURIComponent(e.substring(1));
  else
    throw new Error("Could not find a definition for ".concat(a, "."));
  var t = Er.get(r, e);
  if (t === void 0)
    throw new Error("Could not find a definition for ".concat(a, "."));
  return t.hasOwnProperty("$ref") ? bt(t.$ref, r) : t;
}
var _e = function(r) {
  if (x(r))
    return "array";
  if (typeof r == "string")
    return "string";
  if (r == null)
    return "null";
  if (typeof r == "boolean")
    return "boolean";
  if (isNaN(r)) {
    if (Q(r) === "object")
      return "object";
  } else
    return "number";
  return "string";
};
function Gn(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return e = D({}, e, {
    properties: D({}, e.properties)
  }), U(a).forEach(function(t) {
    if (!e.properties.hasOwnProperty(t)) {
      var n;
      e.additionalProperties.hasOwnProperty("$ref") ? n = I({
        $ref: e.additionalProperties.$ref
      }, r, a) : e.additionalProperties.hasOwnProperty("type") ? n = D({}, e.additionalProperties) : n = {
        type: _e(a[t])
      }, e.properties[t] = n, e.properties[t][pt] = !0;
    }
  }), e;
}
function Xn(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (e.hasOwnProperty("$ref"))
    return or(e, r, a);
  if (e.hasOwnProperty("dependencies")) {
    var t = lr(e, r, a);
    return I(t, r, a);
  } else
    return e.hasOwnProperty("allOf") ? D({}, e, {
      allOf: e.allOf.map(function(n) {
        return I(n, r, a);
      })
    }) : e;
}
function or(e, r, a) {
  var t = bt(e.$ref, r), n = K(e, ["$ref"]);
  return I(D({}, t, n), r, a);
}
function I(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!j(e))
    return {};
  var t = Xn(e, r, a);
  if ("allOf" in e)
    try {
      t = vr(D({}, t, {
        allOf: t.allOf
      }));
    } catch (o) {
      console.warn(`could not merge subschemas in allOf:
` + o);
      var n = t, i = K(n, ["allOf"]);
      return i;
    }
  var l = t.hasOwnProperty("additionalProperties") && t.additionalProperties !== !1;
  return l ? Gn(t, r, a) : t;
}
function lr(e, r, a) {
  var t = e.dependencies, n = t === void 0 ? {} : t, i = K(e, ["dependencies"]);
  return "oneOf" in i ? i = i.oneOf[Re(a, i.oneOf)] : "anyOf" in i && (i = i.anyOf[Re(a, i.anyOf)]), sr(n, i, r, a);
}
function sr(e, r, a, t) {
  for (var n in e)
    if (t[n] !== void 0 && !(r.properties && !(n in r.properties))) {
      var i = e[n], l = K(e, [n].map(ar));
      return x(i) ? r = Zn(r, i) : j(i) && (r = ea(r, a, t, n, i)), sr(l, r, a, t);
    }
  return r;
}
function Zn(e, r) {
  if (!r)
    return e;
  var a = x(e.required) ? fr(new ct([].concat(Z(e.required), Z(r)))) : r;
  return D({}, e, {
    required: a
  });
}
function ea(e, r, a, t, n) {
  var i = I(n, r, a), l = i.oneOf, o = K(i, ["oneOf"]);
  if (e = St(e, o), l === void 0)
    return e;
  if (!x(l))
    throw new Error("invalid: it is some ".concat(Q(l), " instead of an array"));
  var s = l.map(function(u) {
    return u.hasOwnProperty("$ref") ? or(u, r, a) : u;
  });
  return ta(e, r, a, t, s);
}
function ta(e, r, a, t, n) {
  var i = n.filter(function(d) {
    if (!d.properties)
      return !1;
    var c = d.properties[t];
    if (c) {
      var m = {
        type: "object",
        properties: w({}, t, c)
      }, f = nr(a, m), v = f.errors;
      return v.length === 0;
    }
  });
  if (i.length !== 1)
    return console.warn("ignoring oneOf in dependencies because there isn't exactly one subschema that is valid"), e;
  var l = i[0], o = l.properties, s = K(o, [t].map(ar)), u = D({}, l, {
    properties: s
  });
  return St(e, I(u, r, a));
}
function St(e, r) {
  var a = B({}, e);
  return U(r).reduce(function(t, n) {
    var i = e ? e[n] : {}, l = r[n];
    return e && e.hasOwnProperty(n) && j(l) ? t[n] = St(i, l) : e && r && (Pe(e) === "object" || Pe(r) === "object") && n === "required" && x(i) && x(l) ? t[n] = br(i, l) : t[n] = l, t;
  }, a);
}
function ke(e) {
  return Object.prototype.toString.call(e) === "[object Arguments]";
}
function G(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  if (e === r)
    return !0;
  if (typeof e == "function" || typeof r == "function")
    return !0;
  if (Q(e) !== "object" || Q(r) !== "object")
    return !1;
  if (e === null || r === null)
    return !1;
  if (e instanceof Date && r instanceof Date)
    return e.getTime() === r.getTime();
  if (e instanceof RegExp && r instanceof RegExp)
    return e.source === r.source && e.global === r.global && e.multiline === r.multiline && e.lastIndex === r.lastIndex && e.ignoreCase === r.ignoreCase;
  if (ke(e) || ke(r)) {
    if (!(ke(e) && ke(r)))
      return !1;
    var n = Array.prototype.slice;
    return G(n.call(e), n.call(r), a, t);
  } else {
    if (e.constructor !== r.constructor)
      return !1;
    var i = U(e), l = U(r);
    if (i.length === 0 && l.length === 0)
      return !0;
    if (i.length !== l.length)
      return !1;
    for (var o = a.length; o--; )
      if (a[o] === e)
        return t[o] === r;
    a.push(e), t.push(r), i.sort(), l.sort();
    for (var s = i.length - 1; s >= 0; s--)
      if (i[s] !== l[s])
        return !1;
    for (var u, d = i.length - 1; d >= 0; d--)
      if (u = i[d], !G(e[u], r[u], a, t))
        return !1;
    return a.pop(), t.pop(), !0;
  }
}
function wt(e, r, a) {
  var t = e.props, n = e.state;
  return !G(t, r) || !G(n, a);
}
function be(e, r, a) {
  var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "root", i = {
    $id: r || n
  };
  if ("$ref" in e || "dependencies" in e || "allOf" in e) {
    var l = I(e, a, t);
    return be(l, r, a, t, n);
  }
  if ("items" in e && !e.items.$ref)
    return be(e.items, r, a, t, n);
  if (e.type !== "object")
    return i;
  for (var o in e.properties || {}) {
    var s = e.properties[o], u = i.$id + "_" + o;
    i[o] = be(
      j(s) ? s : {},
      u,
      a,
      (t || {})[o],
      n
    );
  }
  return i;
}
function $e(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 ? arguments[2] : void 0, t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = {
    $name: r.replace(/^\./, "")
  };
  if ("$ref" in e || "dependencies" in e || "allOf" in e) {
    var i = I(e, a, t);
    return $e(i, r, a, t);
  }
  if (e.hasOwnProperty("additionalProperties") && (n.__rjsf_additionalProperties = !0), e.hasOwnProperty("items") && x(t))
    t.forEach(function(o, s) {
      n[s] = $e(e.items, "".concat(r, ".").concat(s), a, o);
    });
  else if (e.hasOwnProperty("properties"))
    for (var l in e.properties)
      n[l] = $e(
        e.properties[l],
        "".concat(r, ".").concat(l),
        a,
        (t || {})[l]
      );
  return n;
}
function Te(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (!e)
    return {
      year: -1,
      month: -1,
      day: -1,
      hour: r ? -1 : 0,
      minute: r ? -1 : 0,
      second: r ? -1 : 0
    };
  var a = new Date(e);
  if (At(a.getTime()))
    throw new Error("Unable to parse date " + e);
  return {
    year: a.getUTCFullYear(),
    month: a.getUTCMonth() + 1,
    day: a.getUTCDate(),
    hour: r ? a.getUTCHours() : 0,
    minute: r ? a.getUTCMinutes() : 0,
    second: r ? a.getUTCSeconds() : 0
  };
}
function Nt(e) {
  var r = e.year, a = e.month, t = e.day, n = e.hour, i = n === void 0 ? 0 : n, l = e.minute, o = l === void 0 ? 0 : l, s = e.second, u = s === void 0 ? 0 : s, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, c = Date.UTC(r, a - 1, t, i, o, u), m = new Date(c).toJSON();
  return d ? m : m.slice(0, 10);
}
function ra(e) {
  if (!e)
    return "";
  var r = new Date(e), a = ue(r.getFullYear(), 4), t = ue(r.getMonth() + 1, 2), n = ue(r.getDate(), 2), i = ue(r.getHours(), 2), l = ue(r.getMinutes(), 2), o = ue(r.getSeconds(), 2), s = ue(r.getMilliseconds(), 3);
  return "".concat(a, "-").concat(t, "-").concat(n, "T").concat(i, ":").concat(l, ":").concat(o, ".").concat(s);
}
function na(e) {
  if (e)
    return new Date(e).toJSON();
}
function ue(e, r) {
  for (var a = String(e); a.length < r; )
    a = "0" + a;
  return a;
}
function aa(e) {
  var r = e.split(","), a = r[0].split(";"), t = a[0].replace("data:", ""), n = a.filter(function(d) {
    return d.split("=")[0] === "name";
  }), i;
  n.length !== 1 ? i = "unknown" : i = n[0].split("=")[1];
  for (var l = atob(r[1]), o = [], s = 0; s < l.length; s++)
    o.push(l.charCodeAt(s));
  var u = new window.Blob([new Uint8Array(o)], {
    type: t
  });
  return {
    blob: u,
    name: i
  };
}
function ur(e) {
  var r = {};
  return e.multipleOf && (r.step = e.multipleOf), (e.minimum || e.minimum === 0) && (r.min = e.minimum), (e.maximum || e.maximum === 0) && (r.max = e.maximum), r;
}
function Re(e, r, a) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    if (n.properties) {
      var i = {
        anyOf: U(n.properties).map(function(s) {
          return {
            required: [s]
          };
        })
      }, l = void 0;
      if (n.anyOf) {
        var o = B({}, n);
        o.allOf ? o.allOf = o.allOf.slice() : o.allOf = [], o.allOf.push(i), l = o;
      } else
        l = B({}, n, i);
      if (delete l.required, Pt(l, e))
        return t;
    } else if (Pt(r[t], e))
      return t;
  }
  return 0;
}
function Ae(e) {
  return e.const || e.enum && e.enum.length === 1 && e.enum[0] === !0 ? !0 : e.anyOf && e.anyOf.length === 1 ? Ae(e.anyOf[0]) : e.oneOf && e.oneOf.length === 1 ? Ae(e.oneOf[0]) : e.allOf ? e.allOf.some(Ae) : !1;
}
const De = window.React, ia = window.React.Component;
var oa = /* @__PURE__ */ function(e) {
  ee(r, e);
  function r(a) {
    var t;
    return te(this, r), t = re(this, ne(r).call(this, a)), w(T(t), "getUsedFormData", function(n, i) {
      if (i.length === 0 && Q(n) !== "object")
        return n;
      var l = Sr(n, i);
      return x(n) ? U(l).map(function(o) {
        return l[o];
      }) : l;
    }), w(T(t), "getFieldNames", function(n, i) {
      var l = function o(s) {
        var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [""];
        return U(s).forEach(function(c) {
          if (Q(s[c]) === "object") {
            var m = d.map(function(f) {
              return "".concat(f, ".").concat(c);
            });
            s[c].__rjsf_additionalProperties && s[c].$name !== "" ? u.push(s[c].$name) : o(s[c], u, m);
          } else
            c === "$name" && s[c] !== "" && d.forEach(function(f) {
              f = f.replace(/^\./, "");
              var v = wr(i, f);
              (Q(v) !== "object" || Fr(v)) && u.push(f);
            });
        }), u;
      };
      return l(n);
    }), w(T(t), "onChange", function(n, i) {
      if (j(n) || x(n)) {
        var l = t.getStateFromProps(t.props, n);
        n = l.formData;
      }
      var o = !t.props.noValidate && t.props.liveValidate, s = {
        formData: n
      }, u = n;
      if (t.props.omitExtraData === !0 && t.props.liveOmit === !0) {
        var d = I(t.state.schema, t.state.schema, n), c = $e(d, "", t.state.schema, n), m = t.getFieldNames(c, n);
        u = t.getUsedFormData(n, m), s = {
          formData: u
        };
      }
      if (o) {
        var f = t.validate(u), v = f.errors, h = f.errorSchema, y = v, p = h;
        t.props.extraErrors && (h = de(h, t.props.extraErrors, !0), v = pe(h)), s = {
          formData: u,
          errors: v,
          errorSchema: h,
          schemaValidationErrors: y,
          schemaValidationErrorSchema: p
        };
      } else if (!t.props.noValidate && i) {
        var g = t.props.extraErrors ? de(i, t.props.extraErrors, !0) : i;
        s = {
          formData: u,
          errorSchema: g,
          errors: pe(g)
        };
      }
      t.setState(s, function() {
        return t.props.onChange && t.props.onChange(t.state);
      });
    }), w(T(t), "onBlur", function() {
      if (t.props.onBlur) {
        var n;
        (n = t.props).onBlur.apply(n, arguments);
      }
    }), w(T(t), "onFocus", function() {
      if (t.props.onFocus) {
        var n;
        (n = t.props).onFocus.apply(n, arguments);
      }
    }), w(T(t), "onSubmit", function(n) {
      if (n.preventDefault(), n.target === n.currentTarget) {
        n.persist();
        var i = t.state.formData;
        if (t.props.omitExtraData === !0) {
          var l = I(t.state.schema, t.state.schema, i), o = $e(l, "", t.state.schema, i), s = t.getFieldNames(o, i);
          i = t.getUsedFormData(i, s);
        }
        if (!t.props.noValidate) {
          var u = t.validate(i), d = u.errors, c = u.errorSchema, m = d, f = c;
          if (U(d).length > 0) {
            t.props.extraErrors && (c = de(c, t.props.extraErrors, !0), d = pe(c)), t.setState({
              errors: d,
              errorSchema: c,
              schemaValidationErrors: m,
              schemaValidationErrorSchema: f
            }, function() {
              t.props.onError ? t.props.onError(d) : console.error("Form validation failed", d);
            });
            return;
          }
        }
        var v, h;
        t.props.extraErrors ? (v = t.props.extraErrors, h = pe(v)) : (v = {}, h = []), t.setState({
          formData: i,
          errors: h,
          errorSchema: v
        }, function() {
          t.props.onSubmit && t.props.onSubmit(D({}, t.state, {
            formData: i,
            status: "submitted"
          }), n);
        });
      }
    }), t.state = t.getStateFromProps(a, a.formData), t.props.onChange && !G(t.state.formData, t.props.formData) && t.props.onChange(t.state), t.formElement = null, t;
  }
  return ae(r, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function(t) {
      var n = this.getStateFromProps(t, t.formData);
      !G(n.formData, t.formData) && !G(n.formData, this.state.formData) && this.props.onChange && this.props.onChange(n), this.setState(n);
    }
  }, {
    key: "getStateFromProps",
    value: function(t, n) {
      var i = this.state || {}, l = "schema" in t ? t.schema : this.props.schema, o = "uiSchema" in t ? t.uiSchema : this.props.uiSchema, s = typeof n < "u", u = "liveValidate" in t ? t.liveValidate : this.props.liveValidate, d = s && !t.noValidate && u, c = l, m = Ye(l, n, c), f = I(l, c, m), v = t.customFormats, h = t.additionalMetaSchemas, y = function() {
        return t.noValidate ? {
          errors: [],
          errorSchema: {}
        } : t.liveValidate ? {
          errors: i.errors || [],
          errorSchema: i.errorSchema || {}
        } : {
          errors: i.schemaValidationErrors || [],
          errorSchema: i.schemaValidationErrorSchema || {}
        };
      }, p, g, S, E;
      if (d) {
        var b = this.validate(m, l, h, v);
        p = b.errors, g = b.errorSchema, S = p, E = g;
      } else {
        var F = y();
        p = F.errors, g = F.errorSchema, S = i.schemaValidationErrors, E = i.schemaValidationErrorSchema;
      }
      t.extraErrors && (g = de(g, t.extraErrors, !0), p = pe(g));
      var N = be(f, o["ui:rootFieldId"], c, m, t.idPrefix), C = {
        schema: l,
        uiSchema: o,
        idSchema: N,
        formData: m,
        edit: s,
        errors: p,
        errorSchema: g,
        additionalMetaSchemas: h
      };
      return S && (C.schemaValidationErrors = S, C.schemaValidationErrorSchema = E), C;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function(t, n) {
      return wt(this, t, n);
    }
  }, {
    key: "validate",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.props.schema, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.props.additionalMetaSchemas, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : this.props.customFormats, o = this.props, s = o.validate, u = o.transformErrors, d = this.getRegistry(), c = d.rootSchema, m = I(n, c, t);
      return nr(t, m, s, u, i, l);
    }
  }, {
    key: "renderErrors",
    value: function() {
      var t = this.state, n = t.errors, i = t.errorSchema, l = t.schema, o = t.uiSchema, s = this.props, u = s.ErrorList, d = s.showErrorList, c = s.formContext;
      return n.length && d != !1 ? De.createElement(u, {
        errors: n,
        errorSchema: i,
        schema: l,
        uiSchema: o,
        formContext: c
      }) : null;
    }
  }, {
    key: "getRegistry",
    value: function() {
      var t = z(), n = t.fields, i = t.widgets;
      return {
        fields: D({}, n, this.props.fields),
        widgets: D({}, i, this.props.widgets),
        ArrayFieldTemplate: this.props.ArrayFieldTemplate,
        ObjectFieldTemplate: this.props.ObjectFieldTemplate,
        FieldTemplate: this.props.FieldTemplate,
        definitions: this.props.schema.definitions || {},
        rootSchema: this.props.schema,
        formContext: this.props.formContext || {}
      };
    }
  }, {
    key: "submit",
    value: function() {
      this.formElement && this.formElement.dispatchEvent(new CustomEvent("submit", {
        cancelable: !0
      }));
    }
  }, {
    key: "render",
    value: function() {
      var t = this, n = this.props, i = n.children, l = n.id, o = n.idPrefix, s = n.className, u = n.tagName, d = n.name, c = n.method, m = n.target, f = n.action, v = n.autocomplete, h = n.autoComplete, y = n.enctype, p = n.acceptcharset, g = n.noHtml5Validate, S = n.disabled, E = n.formContext, b = this.state, F = b.schema, N = b.uiSchema, C = b.formData, $ = b.errorSchema, W = b.idSchema, M = this.getRegistry(), k = M.fields.SchemaField, V = u || "form";
      v && console.warn("Using autocomplete property of Form is deprecated, use autoComplete instead.");
      var J = h || v;
      return De.createElement(V, {
        className: s || "rjsf",
        id: l,
        name: d,
        method: c,
        target: m,
        action: f,
        autoComplete: J,
        encType: y,
        acceptCharset: p,
        noValidate: g,
        onSubmit: this.onSubmit,
        ref: function(q) {
          t.formElement = q;
        }
      }, this.renderErrors(), De.createElement(k, {
        schema: F,
        uiSchema: N,
        errorSchema: $,
        idSchema: W,
        idPrefix: o,
        formContext: E,
        formData: C,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        registry: M,
        disabled: S
      }), i || De.createElement("div", null, De.createElement("button", {
        type: "submit",
        className: "btn btn-info"
      }, "Submit")));
    }
  }]), r;
}(ia);
w(oa, "defaultProps", {
  uiSchema: {},
  noValidate: !1,
  liveValidate: !1,
  disabled: !1,
  noHtml5Validate: !1,
  ErrorList: Or,
  omitExtraData: !1
});
export {
  oa as F
};
//# sourceMappingURL=@rjsf.e20bb01a.js.map
