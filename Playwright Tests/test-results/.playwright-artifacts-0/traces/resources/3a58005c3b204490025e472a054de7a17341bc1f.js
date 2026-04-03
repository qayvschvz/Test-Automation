import { a as l, b as _, _ as P } from "./tslib.0d11ab8c.js";
import { I as le, F as D, E as F } from "./intl-messageformat.eb8c2d83.js";
function ye(e, t, a) {
  if (a === void 0 && (a = Error), !e)
    throw new a(t);
}
var m;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(m || (m = {}));
var g;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(g || (g = {}));
var M;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(M || (M = {}));
function kt(e) {
  return e.type === g.literal;
}
function Xt(e) {
  return e.type === g.argument;
}
function Se(e) {
  return e.type === g.number;
}
function Be(e) {
  return e.type === g.date;
}
function Re(e) {
  return e.type === g.time;
}
function Ae(e) {
  return e.type === g.select;
}
function Ne(e) {
  return e.type === g.plural;
}
function Vt(e) {
  return e.type === g.pound;
}
function _e(e) {
  return e.type === g.tag;
}
function Ie(e) {
  return !!(e && typeof e == "object" && e.type === M.number);
}
function Pe(e) {
  return !!(e && typeof e == "object" && e.type === M.dateTime);
}
var fe = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Me = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Oe(e) {
  var t = {};
  return e.replace(Me, function(a) {
    var r = a.length;
    switch (a[0]) {
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = r === 4 ? "short" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var Le = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ce(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Le).filter(function(v) {
    return v.length > 0;
  }), a = [], r = 0, i = t; r < i.length; r++) {
    var n = i[r], s = n.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = s[0], h = s.slice(1), u = 0, f = h; u < f.length; u++) {
      var E = f[u];
      if (E.length === 0)
        throw new Error("Invalid number skeleton");
    }
    a.push({ stem: o, options: h });
  }
  return a;
}
function De(e) {
  return e.replace(/^(.*?)-/, "");
}
var K = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, me = /^(@+)?(\+|#+)?[rs]?$/g, Fe = /(\*)(0+)|(#+)(0+)|(0+)/g, ce = /^(0+)$/;
function ee(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(me, function(a, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Ee(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Ge(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var a = e.slice(0, 2);
    if (a === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : a === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !ce.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function te(e) {
  var t = {}, a = Ee(e);
  return a || t;
}
function we(e) {
  for (var t = {}, a = 0, r = e; a < r.length; a++) {
    var i = r[a];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = De(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = l(l(l({}, t), { notation: "scientific" }), i.options.reduce(function(h, u) {
          return l(l({}, h), te(u));
        }, {}));
        continue;
      case "engineering":
        t = l(l(l({}, t), { notation: "engineering" }), i.options.reduce(function(h, u) {
          return l(l({}, h), te(u));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(Fe, function(h, u, f, E, v, H) {
          if (u)
            t.minimumIntegerDigits = f.length;
          else {
            if (E && v)
              throw new Error("We currently do not support maximum integer digits");
            if (H)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (ce.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (K.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(K, function(h, u, f, E, v, H) {
        return f === "*" ? t.minimumFractionDigits = u.length : E && E[0] === "#" ? t.maximumFractionDigits = E.length : v && H ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + H.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var n = i.options[0];
      n === "w" ? t = l(l({}, t), { trailingZeroDisplay: "stripIfInteger" }) : n && (t = l(l({}, t), ee(n)));
      continue;
    }
    if (me.test(i.stem)) {
      t = l(l({}, t), ee(i.stem));
      continue;
    }
    var s = Ee(i.stem);
    s && (t = l(l({}, t), s));
    var o = Ge(i.stem);
    o && (t = l(l({}, t), o));
  }
  return t;
}
var L = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function Ue(e, t) {
  for (var a = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var n = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        n++, r++;
      var s = 1 + (n & 1), o = n < 2 ? 1 : 3 + (n >> 1), h = "a", u = ke(t);
      for ((u == "H" || u == "k") && (o = 0); o-- > 0; )
        a += h;
      for (; s-- > 0; )
        a = u + a;
    } else
      i === "J" ? a += "H" : a += i;
  }
  return a;
}
function ke(e) {
  var t = e.hourCycle;
  if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var a = e.language, r;
  a !== "root" && (r = e.maximize().region);
  var i = L[r || ""] || L[a || ""] || L["".concat(a, "-001")] || L["001"];
  return i[0];
}
var U, Xe = new RegExp("^".concat(fe.source, "*")), Ve = new RegExp("".concat(fe.source, "*$"));
function c(e, t) {
  return { start: e, end: t };
}
var je = !!String.prototype.startsWith, Ze = !!String.fromCodePoint, We = !!Object.fromEntries, ze = !!String.prototype.codePointAt, qe = !!String.prototype.trimStart, Qe = !!String.prototype.trimEnd, Ye = !!Number.isSafeInteger, Je = Ye ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, X = !0;
try {
  var $e = ve("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  X = ((U = $e.exec("a")) === null || U === void 0 ? void 0 : U[0]) === "a";
} catch {
  X = !1;
}
var re = je ? function(t, a, r) {
  return t.startsWith(a, r);
} : function(t, a, r) {
  return t.slice(r, r + a.length) === a;
}, V = Ze ? String.fromCodePoint : function() {
  for (var t = [], a = 0; a < arguments.length; a++)
    t[a] = arguments[a];
  for (var r = "", i = t.length, n = 0, s; i > n; ) {
    if (s = t[n++], s > 1114111)
      throw RangeError(s + " is not a valid code point");
    r += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
  }
  return r;
}, ae = We ? Object.fromEntries : function(t) {
  for (var a = {}, r = 0, i = t; r < i.length; r++) {
    var n = i[r], s = n[0], o = n[1];
    a[s] = o;
  }
  return a;
}, ge = ze ? function(t, a) {
  return t.codePointAt(a);
} : function(t, a) {
  var r = t.length;
  if (!(a < 0 || a >= r)) {
    var i = t.charCodeAt(a), n;
    return i < 55296 || i > 56319 || a + 1 === r || (n = t.charCodeAt(a + 1)) < 56320 || n > 57343 ? i : (i - 55296 << 10) + (n - 56320) + 65536;
  }
}, Ke = qe ? function(t) {
  return t.trimStart();
} : function(t) {
  return t.replace(Xe, "");
}, et = Qe ? function(t) {
  return t.trimEnd();
} : function(t) {
  return t.replace(Ve, "");
};
function ve(e, t) {
  return new RegExp(e, t);
}
var j;
if (X) {
  var ie = ve("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  j = function(t, a) {
    var r;
    ie.lastIndex = a;
    var i = ie.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  j = function(t, a) {
    for (var r = []; ; ) {
      var i = ge(t, a);
      if (i === void 0 || be(i) || it(i))
        break;
      r.push(i), a += i >= 65536 ? 2 : 1;
    }
    return V.apply(void 0, r);
  };
var tt = function() {
  function e(t, a) {
    a === void 0 && (a = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!a.ignoreTag, this.locale = a.locale, this.requiresOtherClause = !!a.requiresOtherClause, this.shouldParseSkeletons = !!a.shouldParseSkeletons;
  }
  return e.prototype.parse = function() {
    if (this.offset() !== 0)
      throw Error("parser can only be used once");
    return this.parseMessage(0, "", !1);
  }, e.prototype.parseMessage = function(t, a, r) {
    for (var i = []; !this.isEOF(); ) {
      var n = this.char();
      if (n === 123) {
        var s = this.parseArgument(t, r);
        if (s.err)
          return s;
        i.push(s.val);
      } else {
        if (n === 125 && t > 0)
          break;
        if (n === 35 && (a === "plural" || a === "selectordinal")) {
          var o = this.clonePosition();
          this.bump(), i.push({
            type: g.pound,
            location: c(o, this.clonePosition())
          });
        } else if (n === 60 && !this.ignoreTag && this.peek() === 47) {
          if (r)
            break;
          return this.error(m.UNMATCHED_CLOSING_TAG, c(this.clonePosition(), this.clonePosition()));
        } else if (n === 60 && !this.ignoreTag && Z(this.peek() || 0)) {
          var s = this.parseTag(t, a);
          if (s.err)
            return s;
          i.push(s.val);
        } else {
          var s = this.parseLiteral(t, a);
          if (s.err)
            return s;
          i.push(s.val);
        }
      }
    }
    return { val: i, err: null };
  }, e.prototype.parseTag = function(t, a) {
    var r = this.clonePosition();
    this.bump();
    var i = this.parseTagName();
    if (this.bumpSpace(), this.bumpIf("/>"))
      return {
        val: {
          type: g.literal,
          value: "<".concat(i, "/>"),
          location: c(r, this.clonePosition())
        },
        err: null
      };
    if (this.bumpIf(">")) {
      var n = this.parseMessage(t + 1, a, !0);
      if (n.err)
        return n;
      var s = n.val, o = this.clonePosition();
      if (this.bumpIf("</")) {
        if (this.isEOF() || !Z(this.char()))
          return this.error(m.INVALID_TAG, c(o, this.clonePosition()));
        var h = this.clonePosition(), u = this.parseTagName();
        return i !== u ? this.error(m.UNMATCHED_CLOSING_TAG, c(h, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
          val: {
            type: g.tag,
            value: i,
            children: s,
            location: c(r, this.clonePosition())
          },
          err: null
        } : this.error(m.INVALID_TAG, c(o, this.clonePosition())));
      } else
        return this.error(m.UNCLOSED_TAG, c(r, this.clonePosition()));
    } else
      return this.error(m.INVALID_TAG, c(r, this.clonePosition()));
  }, e.prototype.parseTagName = function() {
    var t = this.offset();
    for (this.bump(); !this.isEOF() && at(this.char()); )
      this.bump();
    return this.message.slice(t, this.offset());
  }, e.prototype.parseLiteral = function(t, a) {
    for (var r = this.clonePosition(), i = ""; ; ) {
      var n = this.tryParseQuote(a);
      if (n) {
        i += n;
        continue;
      }
      var s = this.tryParseUnquoted(t, a);
      if (s) {
        i += s;
        continue;
      }
      var o = this.tryParseLeftAngleBracket();
      if (o) {
        i += o;
        continue;
      }
      break;
    }
    var h = c(r, this.clonePosition());
    return {
      val: { type: g.literal, value: i, location: h },
      err: null
    };
  }, e.prototype.tryParseLeftAngleBracket = function() {
    return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !rt(this.peek() || 0)) ? (this.bump(), "<") : null;
  }, e.prototype.tryParseQuote = function(t) {
    if (this.isEOF() || this.char() !== 39)
      return null;
    switch (this.peek()) {
      case 39:
        return this.bump(), this.bump(), "'";
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        if (t === "plural" || t === "selectordinal")
          break;
        return null;
      default:
        return null;
    }
    this.bump();
    var a = [this.char()];
    for (this.bump(); !this.isEOF(); ) {
      var r = this.char();
      if (r === 39)
        if (this.peek() === 39)
          a.push(39), this.bump();
        else {
          this.bump();
          break;
        }
      else
        a.push(r);
      this.bump();
    }
    return V.apply(void 0, a);
  }, e.prototype.tryParseUnquoted = function(t, a) {
    if (this.isEOF())
      return null;
    var r = this.char();
    return r === 60 || r === 123 || r === 35 && (a === "plural" || a === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), V(r));
  }, e.prototype.parseArgument = function(t, a) {
    var r = this.clonePosition();
    if (this.bump(), this.bumpSpace(), this.isEOF())
      return this.error(m.EXPECT_ARGUMENT_CLOSING_BRACE, c(r, this.clonePosition()));
    if (this.char() === 125)
      return this.bump(), this.error(m.EMPTY_ARGUMENT, c(r, this.clonePosition()));
    var i = this.parseIdentifierIfPossible().value;
    if (!i)
      return this.error(m.MALFORMED_ARGUMENT, c(r, this.clonePosition()));
    if (this.bumpSpace(), this.isEOF())
      return this.error(m.EXPECT_ARGUMENT_CLOSING_BRACE, c(r, this.clonePosition()));
    switch (this.char()) {
      case 125:
        return this.bump(), {
          val: {
            type: g.argument,
            value: i,
            location: c(r, this.clonePosition())
          },
          err: null
        };
      case 44:
        return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(m.EXPECT_ARGUMENT_CLOSING_BRACE, c(r, this.clonePosition())) : this.parseArgumentOptions(t, a, i, r);
      default:
        return this.error(m.MALFORMED_ARGUMENT, c(r, this.clonePosition()));
    }
  }, e.prototype.parseIdentifierIfPossible = function() {
    var t = this.clonePosition(), a = this.offset(), r = j(this.message, a), i = a + r.length;
    this.bumpTo(i);
    var n = this.clonePosition(), s = c(t, n);
    return { value: r, location: s };
  }, e.prototype.parseArgumentOptions = function(t, a, r, i) {
    var n, s = this.clonePosition(), o = this.parseIdentifierIfPossible().value, h = this.clonePosition();
    switch (o) {
      case "":
        return this.error(m.EXPECT_ARGUMENT_TYPE, c(s, h));
      case "number":
      case "date":
      case "time": {
        this.bumpSpace();
        var u = null;
        if (this.bumpIf(",")) {
          this.bumpSpace();
          var f = this.clonePosition(), E = this.parseSimpleArgStyleIfPossible();
          if (E.err)
            return E;
          var v = et(E.val);
          if (v.length === 0)
            return this.error(m.EXPECT_ARGUMENT_STYLE, c(this.clonePosition(), this.clonePosition()));
          var H = c(f, this.clonePosition());
          u = { style: v, styleLocation: H };
        }
        var y = this.tryParseArgumentClose(i);
        if (y.err)
          return y;
        var b = c(i, this.clonePosition());
        if (u && re(u == null ? void 0 : u.style, "::", 0)) {
          var d = Ke(u.style.slice(2));
          if (o === "number") {
            var E = this.parseNumberSkeletonFromString(d, u.styleLocation);
            return E.err ? E : {
              val: { type: g.number, value: r, location: b, style: E.val },
              err: null
            };
          } else {
            if (d.length === 0)
              return this.error(m.EXPECT_DATE_TIME_SKELETON, b);
            var x = d;
            this.locale && (x = Ue(d, this.locale));
            var v = {
              type: M.dateTime,
              pattern: x,
              location: u.styleLocation,
              parsedOptions: this.shouldParseSkeletons ? Oe(x) : {}
            }, B = o === "date" ? g.date : g.time;
            return {
              val: { type: B, value: r, location: b, style: v },
              err: null
            };
          }
        }
        return {
          val: {
            type: o === "number" ? g.number : o === "date" ? g.date : g.time,
            value: r,
            location: b,
            style: (n = u == null ? void 0 : u.style) !== null && n !== void 0 ? n : null
          },
          err: null
        };
      }
      case "plural":
      case "selectordinal":
      case "select": {
        var S = this.clonePosition();
        if (this.bumpSpace(), !this.bumpIf(","))
          return this.error(m.EXPECT_SELECT_ARGUMENT_OPTIONS, c(S, l({}, S)));
        this.bumpSpace();
        var w = this.parseIdentifierIfPossible(), J = 0;
        if (o !== "select" && w.value === "offset") {
          if (!this.bumpIf(":"))
            return this.error(m.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, c(this.clonePosition(), this.clonePosition()));
          this.bumpSpace();
          var E = this.tryParseDecimalInteger(m.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, m.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
          if (E.err)
            return E;
          this.bumpSpace(), w = this.parseIdentifierIfPossible(), J = E.val;
        }
        var O = this.tryParsePluralOrSelectOptions(t, o, a, w);
        if (O.err)
          return O;
        var y = this.tryParseArgumentClose(i);
        if (y.err)
          return y;
        var $ = c(i, this.clonePosition());
        return o === "select" ? {
          val: {
            type: g.select,
            value: r,
            options: ae(O.val),
            location: $
          },
          err: null
        } : {
          val: {
            type: g.plural,
            value: r,
            options: ae(O.val),
            offset: J,
            pluralType: o === "plural" ? "cardinal" : "ordinal",
            location: $
          },
          err: null
        };
      }
      default:
        return this.error(m.INVALID_ARGUMENT_TYPE, c(s, h));
    }
  }, e.prototype.tryParseArgumentClose = function(t) {
    return this.isEOF() || this.char() !== 125 ? this.error(m.EXPECT_ARGUMENT_CLOSING_BRACE, c(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
  }, e.prototype.parseSimpleArgStyleIfPossible = function() {
    for (var t = 0, a = this.clonePosition(); !this.isEOF(); ) {
      var r = this.char();
      switch (r) {
        case 39: {
          this.bump();
          var i = this.clonePosition();
          if (!this.bumpUntil("'"))
            return this.error(m.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, c(i, this.clonePosition()));
          this.bump();
          break;
        }
        case 123: {
          t += 1, this.bump();
          break;
        }
        case 125: {
          if (t > 0)
            t -= 1;
          else
            return {
              val: this.message.slice(a.offset, this.offset()),
              err: null
            };
          break;
        }
        default:
          this.bump();
          break;
      }
    }
    return {
      val: this.message.slice(a.offset, this.offset()),
      err: null
    };
  }, e.prototype.parseNumberSkeletonFromString = function(t, a) {
    var r = [];
    try {
      r = Ce(t);
    } catch {
      return this.error(m.INVALID_NUMBER_SKELETON, a);
    }
    return {
      val: {
        type: M.number,
        tokens: r,
        location: a,
        parsedOptions: this.shouldParseSkeletons ? we(r) : {}
      },
      err: null
    };
  }, e.prototype.tryParsePluralOrSelectOptions = function(t, a, r, i) {
    for (var n, s = !1, o = [], h = /* @__PURE__ */ new Set(), u = i.value, f = i.location; ; ) {
      if (u.length === 0) {
        var E = this.clonePosition();
        if (a !== "select" && this.bumpIf("=")) {
          var v = this.tryParseDecimalInteger(m.EXPECT_PLURAL_ARGUMENT_SELECTOR, m.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (v.err)
            return v;
          f = c(E, this.clonePosition()), u = this.message.slice(E.offset, this.offset());
        } else
          break;
      }
      if (h.has(u))
        return this.error(a === "select" ? m.DUPLICATE_SELECT_ARGUMENT_SELECTOR : m.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
      u === "other" && (s = !0), this.bumpSpace();
      var H = this.clonePosition();
      if (!this.bumpIf("{"))
        return this.error(a === "select" ? m.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : m.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, c(this.clonePosition(), this.clonePosition()));
      var y = this.parseMessage(t + 1, a, r);
      if (y.err)
        return y;
      var b = this.tryParseArgumentClose(H);
      if (b.err)
        return b;
      o.push([
        u,
        {
          value: y.val,
          location: c(H, this.clonePosition())
        }
      ]), h.add(u), this.bumpSpace(), n = this.parseIdentifierIfPossible(), u = n.value, f = n.location;
    }
    return o.length === 0 ? this.error(a === "select" ? m.EXPECT_SELECT_ARGUMENT_SELECTOR : m.EXPECT_PLURAL_ARGUMENT_SELECTOR, c(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(m.MISSING_OTHER_CLAUSE, c(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
  }, e.prototype.tryParseDecimalInteger = function(t, a) {
    var r = 1, i = this.clonePosition();
    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
    for (var n = !1, s = 0; !this.isEOF(); ) {
      var o = this.char();
      if (o >= 48 && o <= 57)
        n = !0, s = s * 10 + (o - 48), this.bump();
      else
        break;
    }
    var h = c(i, this.clonePosition());
    return n ? (s *= r, Je(s) ? { val: s, err: null } : this.error(a, h)) : this.error(t, h);
  }, e.prototype.offset = function() {
    return this.position.offset;
  }, e.prototype.isEOF = function() {
    return this.offset() === this.message.length;
  }, e.prototype.clonePosition = function() {
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column
    };
  }, e.prototype.char = function() {
    var t = this.position.offset;
    if (t >= this.message.length)
      throw Error("out of bound");
    var a = ge(this.message, t);
    if (a === void 0)
      throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
    return a;
  }, e.prototype.error = function(t, a) {
    return {
      val: null,
      err: {
        kind: t,
        message: this.message,
        location: a
      }
    };
  }, e.prototype.bump = function() {
    if (!this.isEOF()) {
      var t = this.char();
      t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
    }
  }, e.prototype.bumpIf = function(t) {
    if (re(this.message, t, this.offset())) {
      for (var a = 0; a < t.length; a++)
        this.bump();
      return !0;
    }
    return !1;
  }, e.prototype.bumpUntil = function(t) {
    var a = this.offset(), r = this.message.indexOf(t, a);
    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
  }, e.prototype.bumpTo = function(t) {
    if (this.offset() > t)
      throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
    for (t = Math.min(t, this.message.length); ; ) {
      var a = this.offset();
      if (a === t)
        break;
      if (a > t)
        throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      if (this.bump(), this.isEOF())
        break;
    }
  }, e.prototype.bumpSpace = function() {
    for (; !this.isEOF() && be(this.char()); )
      this.bump();
  }, e.prototype.peek = function() {
    if (this.isEOF())
      return null;
    var t = this.char(), a = this.offset(), r = this.message.charCodeAt(a + (t >= 65536 ? 2 : 1));
    return r != null ? r : null;
  }, e;
}();
function Z(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function rt(e) {
  return Z(e) || e === 47;
}
function at(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function be(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function it(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function W(e) {
  e.forEach(function(t) {
    if (delete t.location, Ae(t) || Ne(t))
      for (var a in t.options)
        delete t.options[a].location, W(t.options[a].value);
    else
      Se(t) && Ie(t.style) || (Be(t) || Re(t)) && Pe(t.style) ? delete t.style.location : _e(t) && W(t.children);
  });
}
function jt(e, t) {
  t === void 0 && (t = {}), t = l({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var a = new tt(e, t).parse();
  if (a.err) {
    var r = SyntaxError(m[a.err.kind]);
    throw r.location = a.err.location, r.originalMessage = a.err.message, r;
  }
  return t != null && t.captureLocation || W(a.val), a.val;
}
function R(e, t) {
  var a = t && t.cache ? t.cache : lt, r = t && t.serializer ? t.serializer : ut, i = t && t.strategy ? t.strategy : st;
  return i(e, {
    cache: a,
    serializer: r
  });
}
function nt(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function xe(e, t, a, r) {
  var i = nt(r) ? r : a(r), n = t.get(i);
  return typeof n > "u" && (n = e.call(this, r), t.set(i, n)), n;
}
function pe(e, t, a) {
  var r = Array.prototype.slice.call(arguments, 3), i = a(r), n = t.get(i);
  return typeof n > "u" && (n = e.apply(this, r), t.set(i, n)), n;
}
function z(e, t, a, r, i) {
  return a.bind(t, e, r, i);
}
function st(e, t) {
  var a = e.length === 1 ? xe : pe;
  return z(e, this, a, t.cache.create(), t.serializer);
}
function ot(e, t) {
  return z(e, this, pe, t.cache.create(), t.serializer);
}
function ht(e, t) {
  return z(e, this, xe, t.cache.create(), t.serializer);
}
var ut = function() {
  return JSON.stringify(arguments);
};
function q() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
q.prototype.get = function(e) {
  return this.cache[e];
};
q.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var lt = {
  create: function() {
    return new q();
  }
}, A = {
  variadic: ot,
  monadic: ht
}, p;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(p || (p = {}));
var T = function(e) {
  _(t, e);
  function t(a, r, i) {
    var n = this, s = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
    return n = e.call(this, "[@formatjs/intl Error ".concat(a, "] ").concat(r, ` 
`).concat(s ? `
`.concat(s.message, `
`).concat(s.stack) : "")) || this, n.code = a, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(n, t), n;
  }
  return t;
}(Error), ft = function(e) {
  _(t, e);
  function t(a, r) {
    return e.call(this, p.UNSUPPORTED_FORMATTER, a, r) || this;
  }
  return t;
}(T), mt = function(e) {
  _(t, e);
  function t(a, r) {
    return e.call(this, p.INVALID_CONFIG, a, r) || this;
  }
  return t;
}(T), ne = function(e) {
  _(t, e);
  function t(a, r) {
    return e.call(this, p.MISSING_DATA, a, r) || this;
  }
  return t;
}(T), Q = function(e) {
  _(t, e);
  function t(a, r, i) {
    return e.call(this, p.FORMAT_ERROR, "".concat(a, ` 
Locale: `).concat(r, `
`), i) || this;
  }
  return t;
}(T), k = function(e) {
  _(t, e);
  function t(a, r, i, n) {
    var s = e.call(this, "".concat(a, ` 
MessageID: `).concat(i == null ? void 0 : i.id, `
Default Message: `).concat(i == null ? void 0 : i.defaultMessage, `
Description: `).concat(i == null ? void 0 : i.description, ` 
`), r, n) || this;
    return s.descriptor = i, s;
  }
  return t;
}(Q), ct = function(e) {
  _(t, e);
  function t(a, r) {
    var i = e.call(this, p.MISSING_TRANSLATION, 'Missing message: "'.concat(a.id, '" for locale "').concat(r, '", using ').concat(a.defaultMessage ? "default message" : "id", " as fallback.")) || this;
    return i.descriptor = a, i;
  }
  return t;
}(T);
function I(e, t, a) {
  return a === void 0 && (a = {}), t.reduce(function(r, i) {
    return i in e ? r[i] = e[i] : i in a && (r[i] = a[i]), r;
  }, {});
}
var Et = function(e) {
}, gt = function(e) {
}, vt = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Et,
  onWarn: gt
};
function bt() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  };
}
function N(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, a) {
          e[t] = a;
        }
      };
    }
  };
}
function xt(e) {
  e === void 0 && (e = bt());
  var t = Intl.RelativeTimeFormat, a = Intl.ListFormat, r = Intl.DisplayNames, i = R(function() {
    for (var o, h = [], u = 0; u < arguments.length; u++)
      h[u] = arguments[u];
    return new ((o = Intl.DateTimeFormat).bind.apply(o, P([void 0], h, !1)))();
  }, {
    cache: N(e.dateTime),
    strategy: A.variadic
  }), n = R(function() {
    for (var o, h = [], u = 0; u < arguments.length; u++)
      h[u] = arguments[u];
    return new ((o = Intl.NumberFormat).bind.apply(o, P([void 0], h, !1)))();
  }, {
    cache: N(e.number),
    strategy: A.variadic
  }), s = R(function() {
    for (var o, h = [], u = 0; u < arguments.length; u++)
      h[u] = arguments[u];
    return new ((o = Intl.PluralRules).bind.apply(o, P([void 0], h, !1)))();
  }, {
    cache: N(e.pluralRules),
    strategy: A.variadic
  });
  return {
    getDateTimeFormat: i,
    getNumberFormat: n,
    getMessageFormat: R(function(o, h, u, f) {
      return new le(o, h, u, l({ formatters: {
        getNumberFormat: n,
        getDateTimeFormat: i,
        getPluralRules: s
      } }, f || {}));
    }, {
      cache: N(e.message),
      strategy: A.variadic
    }),
    getRelativeTimeFormat: R(function() {
      for (var o = [], h = 0; h < arguments.length; h++)
        o[h] = arguments[h];
      return new (t.bind.apply(t, P([void 0], o, !1)))();
    }, {
      cache: N(e.relativeTime),
      strategy: A.variadic
    }),
    getPluralRules: s,
    getListFormat: R(function() {
      for (var o = [], h = 0; h < arguments.length; h++)
        o[h] = arguments[h];
      return new (a.bind.apply(a, P([void 0], o, !1)))();
    }, {
      cache: N(e.list),
      strategy: A.variadic
    }),
    getDisplayNames: R(function() {
      for (var o = [], h = 0; h < arguments.length; h++)
        o[h] = arguments[h];
      return new (r.bind.apply(r, P([void 0], o, !1)))();
    }, {
      cache: N(e.displayNames),
      strategy: A.variadic
    })
  };
}
function Y(e, t, a, r) {
  var i = e && e[t], n;
  if (i && (n = i[a]), n)
    return n;
  r(new ft("No ".concat(t, " format named: ").concat(a)));
}
function C(e, t) {
  return Object.keys(e).reduce(function(a, r) {
    return a[r] = l({ timeZone: t }, e[r]), a;
  }, {});
}
function se(e, t) {
  var a = Object.keys(l(l({}, e), t));
  return a.reduce(function(r, i) {
    return r[i] = l(l({}, e[i] || {}), t[i] || {}), r;
  }, {});
}
function oe(e, t) {
  if (!t)
    return e;
  var a = le.formats;
  return l(l(l({}, a), e), { date: se(C(a.date, t), C(e.date || {}, t)), time: se(C(a.time, t), C(e.time || {}, t)) });
}
function he(e, t, a, r, i) {
  var n = e.locale, s = e.formats, o = e.messages, h = e.defaultLocale, u = e.defaultFormats, f = e.fallbackOnEmptyString, E = e.onError, v = e.timeZone, H = e.defaultRichTextElements;
  a === void 0 && (a = { id: "" });
  var y = a.id, b = a.defaultMessage;
  ye(!!y, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var d = String(y), x = o && Object.prototype.hasOwnProperty.call(o, d) && o[d];
  if (Array.isArray(x) && x.length === 1 && x[0].type === g.literal)
    return x[0].value;
  if (!r && x && typeof x == "string" && !H)
    return x.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (r = l(l({}, H), r || {}), s = oe(s, v), u = oe(u, v), !x) {
    if (f === !1 && x === "")
      return x;
    if ((!b || n && n.toLowerCase() !== h.toLowerCase()) && E(new ct(a, n)), b)
      try {
        var B = t.getMessageFormat(b, h, u, i);
        return B.format(r);
      } catch (S) {
        return E(new k('Error formatting default message for: "'.concat(d, '", rendering default message verbatim'), n, a, S)), typeof b == "string" ? b : d;
      }
    return d;
  }
  try {
    var B = t.getMessageFormat(x, n, s, l({ formatters: t }, i || {}));
    return B.format(r);
  } catch (S) {
    E(new k('Error formatting message: "'.concat(d, '", using ').concat(b ? "default message" : "id", " as fallback."), n, a, S));
  }
  if (b)
    try {
      var B = t.getMessageFormat(b, h, u, i);
      return B.format(r);
    } catch (S) {
      E(new k('Error formatting the default message for: "'.concat(d, '", rendering message verbatim'), n, a, S));
    }
  return typeof x == "string" ? x : typeof b == "string" ? b : d;
}
var Te = [
  "localeMatcher",
  "formatMatcher",
  "timeZone",
  "hour12",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "hourCycle",
  "dateStyle",
  "timeStyle",
  "calendar",
  "numberingSystem"
];
function G(e, t, a, r) {
  var i = e.locale, n = e.formats, s = e.onError, o = e.timeZone;
  r === void 0 && (r = {});
  var h = r.format, u = l(l({}, o && { timeZone: o }), h && Y(n, t, h, s)), f = I(r, Te, u);
  return t === "time" && !f.hour && !f.minute && !f.second && !f.timeStyle && !f.dateStyle && (f = l(l({}, f), { hour: "numeric", minute: "numeric" })), a(i, f);
}
function pt(e, t) {
  for (var a = [], r = 2; r < arguments.length; r++)
    a[r - 2] = arguments[r];
  var i = a[0], n = a[1], s = n === void 0 ? {} : n, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return G(e, "date", t, s).format(o);
  } catch (h) {
    e.onError(new T(p.FORMAT_ERROR, "Error formatting date.", h));
  }
  return String(o);
}
function Tt(e, t) {
  for (var a = [], r = 2; r < arguments.length; r++)
    a[r - 2] = arguments[r];
  var i = a[0], n = a[1], s = n === void 0 ? {} : n, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return G(e, "time", t, s).format(o);
  } catch (h) {
    e.onError(new T(p.FORMAT_ERROR, "Error formatting time.", h));
  }
  return String(o);
}
function dt(e, t) {
  for (var a = [], r = 2; r < arguments.length; r++)
    a[r - 2] = arguments[r];
  var i = a[0], n = a[1], s = a[2], o = s === void 0 ? {} : s, h = e.timeZone, u = e.locale, f = e.onError, E = I(o, Te, h ? { timeZone: h } : {});
  try {
    return t(u, E).formatRange(i, n);
  } catch (v) {
    f(new T(p.FORMAT_ERROR, "Error formatting date time range.", v));
  }
  return String(i);
}
function Ht(e, t) {
  for (var a = [], r = 2; r < arguments.length; r++)
    a[r - 2] = arguments[r];
  var i = a[0], n = a[1], s = n === void 0 ? {} : n, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return G(e, "date", t, s).formatToParts(o);
  } catch (h) {
    e.onError(new T(p.FORMAT_ERROR, "Error formatting date.", h));
  }
  return [];
}
function yt(e, t) {
  for (var a = [], r = 2; r < arguments.length; r++)
    a[r - 2] = arguments[r];
  var i = a[0], n = a[1], s = n === void 0 ? {} : n, o = typeof i == "string" ? new Date(i || 0) : i;
  try {
    return G(e, "time", t, s).formatToParts(o);
  } catch (h) {
    e.onError(new T(p.FORMAT_ERROR, "Error formatting time.", h));
  }
  return [];
}
var St = [
  "localeMatcher",
  "style",
  "type",
  "fallback"
];
function Bt(e, t, a, r) {
  var i = e.locale, n = e.onError, s = Intl.DisplayNames;
  s || n(new D(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, F.MISSING_INTL_API));
  var o = I(r, St);
  try {
    return t(i, o).of(a);
  } catch (h) {
    n(new T(p.FORMAT_ERROR, "Error formatting display name.", h));
  }
}
var Rt = [
  "localeMatcher",
  "type",
  "style"
], ue = Date.now();
function At(e) {
  return "".concat(ue, "_").concat(e, "_").concat(ue);
}
function Nt(e, t, a, r) {
  r === void 0 && (r = {});
  var i = de(e, t, a, r).reduce(function(n, s) {
    var o = s.value;
    return typeof o != "string" ? n.push(o) : typeof n[n.length - 1] == "string" ? n[n.length - 1] += o : n.push(o), n;
  }, []);
  return i.length === 1 ? i[0] : i;
}
function de(e, t, a, r) {
  var i = e.locale, n = e.onError;
  r === void 0 && (r = {});
  var s = Intl.ListFormat;
  s || n(new D(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, F.MISSING_INTL_API));
  var o = I(r, Rt);
  try {
    var h = {}, u = a.map(function(f, E) {
      if (typeof f == "object") {
        var v = At(E);
        return h[v] = f, v;
      }
      return String(f);
    });
    return t(i, o).formatToParts(u).map(function(f) {
      return f.type === "literal" ? f : l(l({}, f), { value: h[f.value] || f.value });
    });
  } catch (f) {
    n(new T(p.FORMAT_ERROR, "Error formatting list.", f));
  }
  return a;
}
var _t = [
  "localeMatcher",
  "type"
];
function It(e, t, a, r) {
  var i = e.locale, n = e.onError;
  r === void 0 && (r = {}), Intl.PluralRules || n(new D(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, F.MISSING_INTL_API));
  var s = I(r, _t);
  try {
    return t(i, s).select(a);
  } catch (o) {
    n(new Q("Error formatting plural.", i, o));
  }
  return "other";
}
var Pt = ["numeric", "style"];
function Mt(e, t, a) {
  var r = e.locale, i = e.formats, n = e.onError;
  a === void 0 && (a = {});
  var s = a.format, o = !!s && Y(i, "relative", s, n) || {}, h = I(a, Pt, o);
  return t(r, h);
}
function Ot(e, t, a, r, i) {
  i === void 0 && (i = {}), r || (r = "second");
  var n = Intl.RelativeTimeFormat;
  n || e.onError(new D(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, F.MISSING_INTL_API));
  try {
    return Mt(e, t, i).format(a, r);
  } catch (s) {
    e.onError(new Q("Error formatting relative time.", e.locale, s));
  }
  return String(a);
}
var Lt = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "unit",
  "unitDisplay",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "currencyDisplay",
  "currencySign",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "numberingSystem"
];
function He(e, t, a) {
  var r = e.locale, i = e.formats, n = e.onError;
  a === void 0 && (a = {});
  var s = a.format, o = s && Y(i, "number", s, n) || {}, h = I(a, Lt, o);
  return t(r, h);
}
function Ct(e, t, a, r) {
  r === void 0 && (r = {});
  try {
    return He(e, t, r).format(a);
  } catch (i) {
    e.onError(new T(p.FORMAT_ERROR, "Error formatting number.", i));
  }
  return String(a);
}
function Dt(e, t, a, r) {
  r === void 0 && (r = {});
  try {
    return He(e, t, r).formatToParts(a);
  } catch (i) {
    e.onError(new T(p.FORMAT_ERROR, "Error formatting number.", i));
  }
  return [];
}
function Ft(e) {
  var t = e ? e[Object.keys(e)[0]] : void 0;
  return typeof t == "string";
}
function Gt(e) {
  e.onWarn && e.defaultRichTextElements && Ft(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function Zt(e, t) {
  var a = xt(t), r = l(l({}, vt), e), i = r.locale, n = r.defaultLocale, s = r.onError;
  return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && s ? s(new ne('Missing locale data for locale: "'.concat(i, '" in Intl.NumberFormat. Using default locale: "').concat(n, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && s && s(new ne('Missing locale data for locale: "'.concat(i, '" in Intl.DateTimeFormat. Using default locale: "').concat(n, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new mt('"locale" was not configured, using "'.concat(n, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"), Gt(r), l(l({}, r), { formatters: a, formatNumber: Ct.bind(null, r, a.getNumberFormat), formatNumberToParts: Dt.bind(null, r, a.getNumberFormat), formatRelativeTime: Ot.bind(null, r, a.getRelativeTimeFormat), formatDate: pt.bind(null, r, a.getDateTimeFormat), formatDateToParts: Ht.bind(null, r, a.getDateTimeFormat), formatTime: Tt.bind(null, r, a.getDateTimeFormat), formatDateTimeRange: dt.bind(null, r, a.getDateTimeFormat), formatTimeToParts: yt.bind(null, r, a.getDateTimeFormat), formatPlural: It.bind(null, r, a.getPluralRules), formatMessage: he.bind(null, r, a), $t: he.bind(null, r, a), formatList: Nt.bind(null, r, a.getListFormat), formatListToParts: de.bind(null, r, a.getListFormat), formatDisplayName: Bt.bind(null, r, a.getDisplayNames) });
}
export {
  vt as D,
  Vt as a,
  Xt as b,
  Be as c,
  Re as d,
  Pe as e,
  Se as f,
  Ie as g,
  _e as h,
  kt as i,
  Ae as j,
  Ne as k,
  ye as l,
  R as m,
  bt as n,
  Zt as o,
  jt as p,
  he as q,
  A as s
};
//# sourceMappingURL=@formatjs.8b514567.js.map
