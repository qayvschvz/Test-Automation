import "./hoist-non-react-statics.5d83aeee.js";
import { _ as oe } from "./@babel.7bf9beb3.js";
import { s as se, c as le, m as fe, a as ue, r as ce, p as de, d as me, b as he, n as B, t as j, f as pe, e as T, g as ye, h as ve, i as X } from "./stylis.398e880d.js";
function Y(r) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return e[t] === void 0 && (e[t] = r(t)), e[t];
  };
}
var ge = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xe = /* @__PURE__ */ Y(
  function(r) {
    return ge.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
);
function be(r) {
  if (r.sheet)
    return r.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === r)
      return document.styleSheets[e];
}
function we(r) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", r.key), r.nonce !== void 0 && e.setAttribute("nonce", r.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var Ce = /* @__PURE__ */ function() {
  function r(t) {
    var n = this;
    this._insertTag = function(i) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, a), n.tags.push(i);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var e = r.prototype;
  return e.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, e.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(we(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = be(i);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, r;
}(), Se = function(e, t, n) {
  for (var i = 0, a = 0; i = a, a = T(), i === 38 && a === 12 && (t[n] = 1), !j(a); )
    B();
  return ve(e, X);
}, ke = function(e, t) {
  var n = -1, i = 44;
  do
    switch (j(i)) {
      case 0:
        i === 38 && T() === 12 && (t[n] = 1), e[n] += Se(X - 1, t, n);
        break;
      case 2:
        e[n] += ye(i);
        break;
      case 4:
        if (i === 44) {
          e[++n] = T() === 58 ? "&\f" : "", t[n] = e[n].length;
          break;
        }
      default:
        e[n] += pe(i);
    }
  while (i = B());
  return e;
}, Ae = function(e, t) {
  return me(ke(he(e), t));
}, L = /* @__PURE__ */ new WeakMap(), Re = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var t = e.value, n = e.parent, i = e.column === n.column && e.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !L.get(n)) && !i) {
      L.set(e, !0);
      for (var a = [], o = Ae(t, a), s = n.props, l = 0, m = 0; l < o.length; l++)
        for (var u = 0; u < s.length; u++, m++)
          e.props[m] = a[l] ? o[l].replace(/&\f/g, s[u]) : s[u] + " " + o[l];
    }
  }
}, Pe = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, Oe = [de], Ee = function(e) {
  var t = e.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var c = f.getAttribute("data-emotion");
      c.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var i = e.stylisPlugins || Oe, a = {}, o, s = [];
  o = e.container || document.head, Array.prototype.forEach.call(
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(f) {
      for (var c = f.getAttribute("data-emotion").split(" "), v = 1; v < c.length; v++)
        a[c[v]] = !0;
      s.push(f);
    }
  );
  var l, m = [Re, Pe];
  {
    var u, h = [ue, ce(function(f) {
      u.insert(f);
    })], R = fe(m.concat(i, h)), x = function(c) {
      return se(le(c), R);
    };
    l = function(c, v, b, g) {
      u = b, x(c ? c + "{" + v.styles + "}" : v.styles), g && (d.inserted[v.name] = !0);
    };
  }
  var d = {
    key: t,
    sheet: new Ce({
      key: t,
      container: o,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: a,
    registered: {},
    insert: l
  };
  return d.sheet.hydrate(s), d;
}, Te = !0, _e = function(e, t, n) {
  var i = e.key + "-" + t.name;
  (n === !1 || Te === !1) && e.registered[i] === void 0 && (e.registered[i] = t.styles);
}, Ne = function(e, t, n) {
  _e(e, t, n);
  var i = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var a = t;
    do
      e.insert(t === a ? "." + i : "", a, e.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Me(r) {
  for (var e = 0, t, n = 0, i = r.length; i >= 4; ++n, i -= 4)
    t = r.charCodeAt(n) & 255 | (r.charCodeAt(++n) & 255) << 8 | (r.charCodeAt(++n) & 255) << 16 | (r.charCodeAt(++n) & 255) << 24, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, e = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      e ^= (r.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (r.charCodeAt(n + 1) & 255) << 8;
    case 1:
      e ^= r.charCodeAt(n) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var Ie = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Le(r) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return e[t] === void 0 && (e[t] = r(t)), e[t];
  };
}
var Fe = /[A-Z]|^ms/g, $e = /_EMO_([^_]+?)_([^]*?)_EMO_/g, K = function(e) {
  return e.charCodeAt(1) === 45;
}, F = function(e) {
  return e != null && typeof e != "boolean";
}, P = /* @__PURE__ */ Le(function(r) {
  return K(r) ? r : r.replace(Fe, "-$&").toLowerCase();
}), $ = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace($e, function(n, i, a) {
          return p = {
            name: i,
            styles: a,
            next: p
          }, i;
        });
  }
  return Ie[e] !== 1 && !K(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function w(r, e, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0)
    return t;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return p = {
          name: t.name,
          styles: t.styles,
          next: p
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            p = {
              name: n.name,
              styles: n.styles,
              next: p
            }, n = n.next;
        var i = t.styles + ";";
        return i;
      }
      return Ge(r, e, t);
    }
    case "function": {
      if (r !== void 0) {
        var a = p, o = t(r);
        return p = a, w(r, e, o);
      }
      break;
    }
  }
  if (e == null)
    return t;
  var s = e[t];
  return s !== void 0 ? s : t;
}
function Ge(r, e, t) {
  var n = "";
  if (Array.isArray(t))
    for (var i = 0; i < t.length; i++)
      n += w(r, e, t[i]) + ";";
  else
    for (var a in t) {
      var o = t[a];
      if (typeof o != "object")
        e != null && e[o] !== void 0 ? n += a + "{" + e[o] + "}" : F(o) && (n += P(a) + ":" + $(a, o) + ";");
      else if (Array.isArray(o) && typeof o[0] == "string" && (e == null || e[o[0]] === void 0))
        for (var s = 0; s < o.length; s++)
          F(o[s]) && (n += P(a) + ":" + $(a, o[s]) + ";");
      else {
        var l = w(r, e, o);
        switch (a) {
          case "animation":
          case "animationName": {
            n += P(a) + ":" + l + ";";
            break;
          }
          default:
            n += a + "{" + l + "}";
        }
      }
    }
  return n;
}
var G = /label:\s*([^\s;\n{]+)\s*(;|$)/g, p, Z = function(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var i = !0, a = "";
  p = void 0;
  var o = e[0];
  o == null || o.raw === void 0 ? (i = !1, a += w(n, t, o)) : a += o[0];
  for (var s = 1; s < e.length; s++)
    a += w(n, t, e[s]), i && (a += o[s]);
  G.lastIndex = 0;
  for (var l = "", m; (m = G.exec(a)) !== null; )
    l += "-" + m[1];
  var u = Me(a) + l;
  return {
    name: u,
    styles: a,
    next: p
  };
};
const W = window.React, We = window.React.useLayoutEffect;
var He = W["useInsertionEffect"] ? W["useInsertionEffect"] : !1, H = He || We;
const J = window.React.createContext, De = window.React.useContext, Ve = window.React.forwardRef;
var Q = /* @__PURE__ */ J(
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ee({
    key: "css"
  }) : null
), dt = Q.Provider, ee = function(e) {
  return /* @__PURE__ */ Ve(function(t, n) {
    var i = De(Q);
    return e(t, i, n);
  });
}, te = /* @__PURE__ */ J({});
const ze = window.React.useContext, qe = window.React.useRef;
var mt = /* @__PURE__ */ ee(function(r, e) {
  var t = r.styles, n = Z([t], void 0, ze(te)), i = qe();
  return H(function() {
    var a = e.key + "-global", o = new e.sheet.constructor({
      key: a,
      nonce: e.sheet.nonce,
      container: e.sheet.container,
      speedy: e.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return e.sheet.tags.length && (o.before = e.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", a), o.hydrate([l])), i.current = [o, s], function() {
      o.flush();
    };
  }, [e]), H(function() {
    var a = i.current, o = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && Ne(e, n.next, !0), o.tags.length) {
      var l = o.tags[o.tags.length - 1].nextElementSibling;
      o.before = l, o.flush();
    }
    e.insert("", n, o, !1);
  }, [e, n.name]), null;
});
function Ue() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return Z(e);
}
var ht = function() {
  var e = Ue.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Be = !0;
function je(r, e, t) {
  var n = "";
  return t.split(" ").forEach(function(i) {
    r[i] !== void 0 ? e.push(r[i] + ";") : n += i + " ";
  }), n;
}
var Xe = function(e, t, n) {
  var i = e.key + "-" + t.name;
  (n === !1 || Be === !1) && e.registered[i] === void 0 && (e.registered[i] = t.styles);
}, Ye = function(e, t, n) {
  Xe(e, t, n);
  var i = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var a = t;
    do
      e.insert(t === a ? "." + i : "", a, e.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Ke(r) {
  for (var e = 0, t, n = 0, i = r.length; i >= 4; ++n, i -= 4)
    t = r.charCodeAt(n) & 255 | (r.charCodeAt(++n) & 255) << 8 | (r.charCodeAt(++n) & 255) << 16 | (r.charCodeAt(++n) & 255) << 24, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, e = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      e ^= (r.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (r.charCodeAt(n + 1) & 255) << 8;
    case 1:
      e ^= r.charCodeAt(n) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var Ze = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Je = /[A-Z]|^ms/g, Qe = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ne = function(e) {
  return e.charCodeAt(1) === 45;
}, D = function(e) {
  return e != null && typeof e != "boolean";
}, O = /* @__PURE__ */ Y(function(r) {
  return ne(r) ? r : r.replace(Je, "-$&").toLowerCase();
}), V = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Qe, function(n, i, a) {
          return y = {
            name: i,
            styles: a,
            next: y
          }, i;
        });
  }
  return Ze[e] !== 1 && !ne(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function C(r, e, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0)
    return t;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return y = {
          name: t.name,
          styles: t.styles,
          next: y
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            y = {
              name: n.name,
              styles: n.styles,
              next: y
            }, n = n.next;
        var i = t.styles + ";";
        return i;
      }
      return et(r, e, t);
    }
    case "function": {
      if (r !== void 0) {
        var a = y, o = t(r);
        return y = a, C(r, e, o);
      }
      break;
    }
  }
  if (e == null)
    return t;
  var s = e[t];
  return s !== void 0 ? s : t;
}
function et(r, e, t) {
  var n = "";
  if (Array.isArray(t))
    for (var i = 0; i < t.length; i++)
      n += C(r, e, t[i]) + ";";
  else
    for (var a in t) {
      var o = t[a];
      if (typeof o != "object")
        e != null && e[o] !== void 0 ? n += a + "{" + e[o] + "}" : D(o) && (n += O(a) + ":" + V(a, o) + ";");
      else if (Array.isArray(o) && typeof o[0] == "string" && (e == null || e[o[0]] === void 0))
        for (var s = 0; s < o.length; s++)
          D(o[s]) && (n += O(a) + ":" + V(a, o[s]) + ";");
      else {
        var l = C(r, e, o);
        switch (a) {
          case "animation":
          case "animationName": {
            n += O(a) + ":" + l + ";";
            break;
          }
          default:
            n += a + "{" + l + "}";
        }
      }
    }
  return n;
}
var z = /label:\s*([^\s;\n{]+)\s*(;|$)/g, y, tt = function(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var i = !0, a = "";
  y = void 0;
  var o = e[0];
  o == null || o.raw === void 0 ? (i = !1, a += C(n, t, o)) : a += o[0];
  for (var s = 1; s < e.length; s++)
    a += C(n, t, e[s]), i && (a += o[s]);
  z.lastIndex = 0;
  for (var l = "", m; (m = z.exec(a)) !== null; )
    l += "-" + m[1];
  var u = Ke(a) + l;
  return {
    name: u,
    styles: a,
    next: y
  };
};
const nt = window.React.useContext, E = window.React.createElement, rt = window.React.Fragment;
var at = xe, it = function(e) {
  return e !== "theme";
}, q = function(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96 ? at : it;
}, U = function(e, t, n) {
  var i;
  if (t) {
    var a = t.shouldForwardProp;
    i = e.__emotion_forwardProp && a ? function(o) {
      return e.__emotion_forwardProp(o) && a(o);
    } : a;
  }
  return typeof i != "function" && n && (i = e.__emotion_forwardProp), i;
}, ot = function() {
  return null;
}, st = function r(e, t) {
  var n = e.__emotion_real === e, i = n && e.__emotion_base || e, a, o;
  t !== void 0 && (a = t.label, o = t.target);
  var s = U(e, t, n), l = s || q(i), m = !l("as");
  return function() {
    var u = arguments, h = n && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (a !== void 0 && h.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0)
      h.push.apply(h, u);
    else {
      h.push(u[0][0]);
      for (var R = u.length, x = 1; x < R; x++)
        h.push(u[x], u[0][x]);
    }
    var d = ee(function(f, c, v) {
      var b = m && f.as || i, g = "", N = [], S = f;
      if (f.theme == null) {
        S = {};
        for (var M in f)
          S[M] = f[M];
        S.theme = nt(te);
      }
      typeof f.className == "string" ? g = je(c.registered, N, f.className) : f.className != null && (g = f.className + " ");
      var I = tt(h.concat(N), c.registered, S);
      Ye(c, I, typeof b == "string"), g += c.key + "-" + I.name, o !== void 0 && (g += " " + o);
      var re = m && s === void 0 ? q(b) : l, k = {};
      for (var A in f)
        m && A === "as" || re(A) && (k[A] = f[A]);
      k.className = g, k.ref = v;
      var ae = /* @__PURE__ */ E(b, k), ie = /* @__PURE__ */ E(ot, null);
      return /* @__PURE__ */ E(rt, null, ie, ae);
    });
    return d.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", d.defaultProps = e.defaultProps, d.__emotion_real = d, d.__emotion_base = i, d.__emotion_styles = h, d.__emotion_forwardProp = s, Object.defineProperty(d, "toString", {
      value: function() {
        return "." + o;
      }
    }), d.withComponent = function(f, c) {
      return r(f, oe({}, t, c, {
        shouldForwardProp: U(d, c, !0)
      })).apply(void 0, h);
    }, d;
  };
}, lt = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], _ = st.bind();
lt.forEach(function(r) {
  _[r] = _(r);
});
const pt = _;
export {
  dt as C,
  mt as G,
  te as T,
  Ee as a,
  Ue as c,
  pt as e,
  ht as k
};
//# sourceMappingURL=@emotion.a904228a.js.map
