function L(e, t) {
  if (!Boolean(e))
    throw new Error(t);
}
function ue(e) {
  return typeof e == "object" && e !== null;
}
function le(e, t) {
  if (!Boolean(e))
    throw new Error(
      t != null ? t : "Unexpected invariant triggered."
    );
}
const pe = /\r\n|[\n\r]/g;
function B(e, t) {
  let n = 0, s = 1;
  for (const i of e.body.matchAll(pe)) {
    if (typeof i.index == "number" || le(!1), i.index >= t)
      break;
    n = i.index + i[0].length, s += 1;
  }
  return {
    line: s,
    column: t + 1 - n
  };
}
function he(e) {
  return Z(
    e.source,
    B(e.source, e.start)
  );
}
function Z(e, t) {
  const n = e.locationOffset.column - 1, s = "".padStart(n) + e.body, i = t.line - 1, r = e.locationOffset.line - 1, a = t.line + r, d = t.line === 1 ? n : 0, h = t.column + d, l = `${e.name}:${a}:${h}
`, E = s.split(/\r\n|[\n\r]/g), f = E[i];
  if (f.length > 120) {
    const I = Math.floor(h / 80), T = h % 80, v = [];
    for (let A = 0; A < f.length; A += 80)
      v.push(f.slice(A, A + 80));
    return l + Q([
      [`${a} |`, v[0]],
      ...v.slice(1, I + 1).map((A) => ["|", A]),
      ["|", "^".padStart(T)],
      ["|", v[I + 1]]
    ]);
  }
  return l + Q([
    [`${a - 1} |`, E[i - 1]],
    [`${a} |`, f],
    ["|", "^".padStart(h)],
    [`${a + 1} |`, E[i + 1]]
  ]);
}
function Q(e) {
  const t = e.filter(([s, i]) => i !== void 0), n = Math.max(...t.map(([s]) => s.length));
  return t.map(([s, i]) => s.padStart(n) + (i ? " " + i : "")).join(`
`);
}
class G extends Error {
  constructor(t, n, s, i, r, a, d) {
    var h, l, E;
    super(t), this.name = "GraphQLError", this.path = r != null ? r : void 0, this.originalError = a != null ? a : void 0, this.nodes = z(
      Array.isArray(n) ? n : n ? [n] : void 0
    );
    const f = z(
      (h = this.nodes) === null || h === void 0 ? void 0 : h.map((T) => T.loc).filter((T) => T != null)
    );
    this.source = s != null ? s : f == null || (l = f[0]) === null || l === void 0 ? void 0 : l.source, this.positions = i != null ? i : f == null ? void 0 : f.map((T) => T.start), this.locations = i && s ? i.map((T) => B(s, T)) : f == null ? void 0 : f.map((T) => B(T.source, T.start));
    const I = ue(
      a == null ? void 0 : a.extensions
    ) ? a == null ? void 0 : a.extensions : void 0;
    this.extensions = (E = d != null ? d : I) !== null && E !== void 0 ? E : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), a != null && a.stack ? Object.defineProperty(this, "stack", {
      value: a.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, G) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc && (t += `

` + he(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + Z(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function z(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function m(e, t, n) {
  return new G(`Syntax Error: ${n}`, void 0, e, [
    t
  ]);
}
let u;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(u || (u = {}));
class de {
  constructor(t, n, s) {
    this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = s;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class K {
  constructor(t, n, s, i, r, a) {
    this.kind = t, this.start = n, this.end = s, this.line = i, this.column = r, this.value = a, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const ee = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, fe = new Set(Object.keys(ee));
function q(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && fe.has(t);
}
let S;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(S || (S = {}));
let o;
(function(e) {
  e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(o || (o = {}));
const Ee = 10, te = 2;
function ne(e) {
  return F(e, []);
}
function F(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Te(e, t);
    default:
      return String(e);
  }
}
function Te(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (Ne(e)) {
    const s = e.toJSON();
    if (s !== e)
      return typeof s == "string" ? s : F(s, n);
  } else if (Array.isArray(e))
    return Ie(e, n);
  return me(e, n);
}
function Ne(e) {
  return typeof e.toJSON == "function";
}
function me(e, t) {
  const n = Object.entries(e);
  if (n.length === 0)
    return "{}";
  if (t.length > te)
    return "[" + xe(e) + "]";
  const s = n.map(
    ([i, r]) => i + ": " + F(r, t)
  );
  return "{ " + s.join(", ") + " }";
}
function Ie(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > te)
    return "[Array]";
  const n = Math.min(Ee, e.length), s = e.length - n, i = [];
  for (let r = 0; r < n; ++r)
    i.push(F(e[r], t));
  return s === 1 ? i.push("... 1 more item") : s > 1 && i.push(`... ${s} more items`), "[" + i.join(", ") + "]";
}
function xe(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const Ae = function(t, n) {
  return t instanceof n;
};
class ie {
  constructor(t, n = "GraphQL request", s = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || L(!1, `Body must be a string. Received: ${ne(t)}.`), this.body = t, this.name = n, this.locationOffset = s, this.locationOffset.line > 0 || L(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || L(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Oe(e) {
  return Ae(e, ie);
}
let j;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(j || (j = {}));
function $(e) {
  return e === 9 || e === 32;
}
function g(e) {
  return e >= 48 && e <= 57;
}
function se(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function re(e) {
  return se(e) || e === 95;
}
function ve(e) {
  return se(e) || g(e) || e === 95;
}
function ye(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER, s = null, i = -1;
  for (let a = 0; a < e.length; ++a) {
    var r;
    const d = e[a], h = _e(d);
    h !== d.length && (s = (r = s) !== null && r !== void 0 ? r : a, i = a, a !== 0 && h < n && (n = h));
  }
  return e.map((a, d) => d === 0 ? a : a.slice(n)).slice(
    (t = s) !== null && t !== void 0 ? t : 0,
    i + 1
  );
}
function _e(e) {
  let t = 0;
  for (; t < e.length && $(e.charCodeAt(t)); )
    ++t;
  return t;
}
function De(e, t) {
  const n = e.replace(/"""/g, '\\"""'), s = n.split(/\r\n|[\n\r]/g), i = s.length === 1, r = s.length > 1 && s.slice(1).every((T) => T.length === 0 || $(T.charCodeAt(0))), a = n.endsWith('\\"""'), d = e.endsWith('"') && !a, h = e.endsWith("\\"), l = d || h, E = !(t != null && t.minimize) && (!i || e.length > 70 || l || r || a);
  let f = "";
  const I = i && $(e.charCodeAt(0));
  return (E && !I || r) && (f += `
`), f += n, (E || l) && (f += `
`), '"""' + f + '"""';
}
class Se {
  constructor(t) {
    const n = new K(o.SOF, 0, 0, 0, 0);
    this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  lookahead() {
    let t = this.token;
    if (t.kind !== o.EOF)
      do
        if (t.next)
          t = t.next;
        else {
          const n = Ce(this, t.end);
          t.next = n, n.prev = t, t = n;
        }
      while (t.kind === o.COMMENT);
    return t;
  }
}
function ke(e) {
  return e === o.BANG || e === o.DOLLAR || e === o.AMP || e === o.PAREN_L || e === o.PAREN_R || e === o.SPREAD || e === o.COLON || e === o.EQUALS || e === o.AT || e === o.BRACKET_L || e === o.BRACKET_R || e === o.BRACE_L || e === o.PIPE || e === o.BRACE_R;
}
function k(e) {
  return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function w(e, t) {
  return oe(e.charCodeAt(t)) && ae(e.charCodeAt(t + 1));
}
function oe(e) {
  return e >= 55296 && e <= 56319;
}
function ae(e) {
  return e >= 56320 && e <= 57343;
}
function D(e, t) {
  const n = e.source.body.codePointAt(t);
  if (n === void 0)
    return o.EOF;
  if (n >= 32 && n <= 126) {
    const s = String.fromCodePoint(n);
    return s === '"' ? `'"'` : `"${s}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function N(e, t, n, s, i) {
  const r = e.line, a = 1 + n - e.lineStart;
  return new K(t, n, s, r, a, i);
}
function Ce(e, t) {
  const n = e.source.body, s = n.length;
  let i = t;
  for (; i < s; ) {
    const r = n.charCodeAt(i);
    switch (r) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++e.line, e.lineStart = i;
        continue;
      case 13:
        n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
        continue;
      case 35:
        return ge(e, i);
      case 33:
        return N(e, o.BANG, i, i + 1);
      case 36:
        return N(e, o.DOLLAR, i, i + 1);
      case 38:
        return N(e, o.AMP, i, i + 1);
      case 40:
        return N(e, o.PAREN_L, i, i + 1);
      case 41:
        return N(e, o.PAREN_R, i, i + 1);
      case 46:
        if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46)
          return N(e, o.SPREAD, i, i + 3);
        break;
      case 58:
        return N(e, o.COLON, i, i + 1);
      case 61:
        return N(e, o.EQUALS, i, i + 1);
      case 64:
        return N(e, o.AT, i, i + 1);
      case 91:
        return N(e, o.BRACKET_L, i, i + 1);
      case 93:
        return N(e, o.BRACKET_R, i, i + 1);
      case 123:
        return N(e, o.BRACE_L, i, i + 1);
      case 124:
        return N(e, o.PIPE, i, i + 1);
      case 125:
        return N(e, o.BRACE_R, i, i + 1);
      case 34:
        return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? Pe(e, i) : Le(e, i);
    }
    if (g(r) || r === 45)
      return Re(e, i, r);
    if (re(r))
      return Ue(e, i);
    throw m(
      e.source,
      i,
      r === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : k(r) || w(n, i) ? `Unexpected character: ${D(e, i)}.` : `Invalid character: ${D(e, i)}.`
    );
  }
  return N(e, o.EOF, s, s);
}
function ge(e, t) {
  const n = e.source.body, s = n.length;
  let i = t + 1;
  for (; i < s; ) {
    const r = n.charCodeAt(i);
    if (r === 10 || r === 13)
      break;
    if (k(r))
      ++i;
    else if (w(n, i))
      i += 2;
    else
      break;
  }
  return N(
    e,
    o.COMMENT,
    t,
    i,
    n.slice(t + 1, i)
  );
}
function Re(e, t, n) {
  const s = e.source.body;
  let i = t, r = n, a = !1;
  if (r === 45 && (r = s.charCodeAt(++i)), r === 48) {
    if (r = s.charCodeAt(++i), g(r))
      throw m(
        e.source,
        i,
        `Invalid number, unexpected digit after 0: ${D(
          e,
          i
        )}.`
      );
  } else
    i = M(e, i, r), r = s.charCodeAt(i);
  if (r === 46 && (a = !0, r = s.charCodeAt(++i), i = M(e, i, r), r = s.charCodeAt(i)), (r === 69 || r === 101) && (a = !0, r = s.charCodeAt(++i), (r === 43 || r === 45) && (r = s.charCodeAt(++i)), i = M(e, i, r), r = s.charCodeAt(i)), r === 46 || re(r))
    throw m(
      e.source,
      i,
      `Invalid number, expected digit but got: ${D(
        e,
        i
      )}.`
    );
  return N(
    e,
    a ? o.FLOAT : o.INT,
    t,
    i,
    s.slice(t, i)
  );
}
function M(e, t, n) {
  if (!g(n))
    throw m(
      e.source,
      t,
      `Invalid number, expected digit but got: ${D(
        e,
        t
      )}.`
    );
  const s = e.source.body;
  let i = t + 1;
  for (; g(s.charCodeAt(i)); )
    ++i;
  return i;
}
function Le(e, t) {
  const n = e.source.body, s = n.length;
  let i = t + 1, r = i, a = "";
  for (; i < s; ) {
    const d = n.charCodeAt(i);
    if (d === 34)
      return a += n.slice(r, i), N(e, o.STRING, t, i + 1, a);
    if (d === 92) {
      a += n.slice(r, i);
      const h = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? be(e, i) : Fe(e, i) : we(e, i);
      a += h.value, i += h.size, r = i;
      continue;
    }
    if (d === 10 || d === 13)
      break;
    if (k(d))
      ++i;
    else if (w(n, i))
      i += 2;
    else
      throw m(
        e.source,
        i,
        `Invalid character within String: ${D(
          e,
          i
        )}.`
      );
  }
  throw m(e.source, i, "Unterminated string.");
}
function be(e, t) {
  const n = e.source.body;
  let s = 0, i = 3;
  for (; i < 12; ) {
    const r = n.charCodeAt(t + i++);
    if (r === 125) {
      if (i < 5 || !k(s))
        break;
      return {
        value: String.fromCodePoint(s),
        size: i
      };
    }
    if (s = s << 4 | C(r), s < 0)
      break;
  }
  throw m(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(
      t,
      t + i
    )}".`
  );
}
function Fe(e, t) {
  const n = e.source.body, s = H(n, t + 2);
  if (k(s))
    return {
      value: String.fromCodePoint(s),
      size: 6
    };
  if (oe(s) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    const i = H(n, t + 8);
    if (ae(i))
      return {
        value: String.fromCodePoint(s, i),
        size: 12
      };
  }
  throw m(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`
  );
}
function H(e, t) {
  return C(e.charCodeAt(t)) << 12 | C(e.charCodeAt(t + 1)) << 8 | C(e.charCodeAt(t + 2)) << 4 | C(e.charCodeAt(t + 3));
}
function C(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function we(e, t) {
  const n = e.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw m(
    e.source,
    t,
    `Invalid character escape sequence: "${n.slice(
      t,
      t + 2
    )}".`
  );
}
function Pe(e, t) {
  const n = e.source.body, s = n.length;
  let i = e.lineStart, r = t + 3, a = r, d = "";
  const h = [];
  for (; r < s; ) {
    const l = n.charCodeAt(r);
    if (l === 34 && n.charCodeAt(r + 1) === 34 && n.charCodeAt(r + 2) === 34) {
      d += n.slice(a, r), h.push(d);
      const E = N(
        e,
        o.BLOCK_STRING,
        t,
        r + 3,
        ye(h).join(`
`)
      );
      return e.line += h.length - 1, e.lineStart = i, E;
    }
    if (l === 92 && n.charCodeAt(r + 1) === 34 && n.charCodeAt(r + 2) === 34 && n.charCodeAt(r + 3) === 34) {
      d += n.slice(a, r), a = r + 1, r += 4;
      continue;
    }
    if (l === 10 || l === 13) {
      d += n.slice(a, r), h.push(d), l === 13 && n.charCodeAt(r + 1) === 10 ? r += 2 : ++r, d = "", a = r, i = r;
      continue;
    }
    if (k(l))
      ++r;
    else if (w(n, r))
      r += 2;
    else
      throw m(
        e.source,
        r,
        `Invalid character within String: ${D(
          e,
          r
        )}.`
      );
  }
  throw m(e.source, r, "Unterminated string.");
}
function Ue(e, t) {
  const n = e.source.body, s = n.length;
  let i = t + 1;
  for (; i < s; ) {
    const r = n.charCodeAt(i);
    if (ve(r))
      ++i;
    else
      break;
  }
  return N(
    e,
    o.NAME,
    t,
    i,
    n.slice(t, i)
  );
}
function ze(e, t) {
  return new Ve(e, t).parseDocument();
}
class Ve {
  constructor(t, n) {
    const s = Oe(t) ? t : new ie(t);
    this._lexer = new Se(s), this._options = n;
  }
  parseName() {
    const t = this.expectToken(o.NAME);
    return this.node(t, {
      kind: u.NAME,
      value: t.value
    });
  }
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: u.DOCUMENT,
      definitions: this.many(
        o.SOF,
        this.parseDefinition,
        o.EOF
      )
    });
  }
  parseDefinition() {
    if (this.peek(o.BRACE_L))
      return this.parseOperationDefinition();
    const t = this.peekDescription(), n = t ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === o.NAME) {
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (t)
        throw m(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (n.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  parseOperationDefinition() {
    const t = this._lexer.token;
    if (this.peek(o.BRACE_L))
      return this.node(t, {
        kind: u.OPERATION_DEFINITION,
        operation: S.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const n = this.parseOperationType();
    let s;
    return this.peek(o.NAME) && (s = this.parseName()), this.node(t, {
      kind: u.OPERATION_DEFINITION,
      operation: n,
      name: s,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseOperationType() {
    const t = this.expectToken(o.NAME);
    switch (t.value) {
      case "query":
        return S.QUERY;
      case "mutation":
        return S.MUTATION;
      case "subscription":
        return S.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  parseVariableDefinitions() {
    return this.optionalMany(
      o.PAREN_L,
      this.parseVariableDefinition,
      o.PAREN_R
    );
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: u.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(o.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(o.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  parseVariable() {
    const t = this._lexer.token;
    return this.expectToken(o.DOLLAR), this.node(t, {
      kind: u.VARIABLE,
      name: this.parseName()
    });
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: u.SELECTION_SET,
      selections: this.many(
        o.BRACE_L,
        this.parseSelection,
        o.BRACE_R
      )
    });
  }
  parseSelection() {
    return this.peek(o.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    const t = this._lexer.token, n = this.parseName();
    let s, i;
    return this.expectOptionalToken(o.COLON) ? (s = n, i = this.parseName()) : i = n, this.node(t, {
      kind: u.FIELD,
      alias: s,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(o.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  parseArguments(t) {
    const n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(o.PAREN_L, n, o.PAREN_R);
  }
  parseArgument(t = !1) {
    const n = this._lexer.token, s = this.parseName();
    return this.expectToken(o.COLON), this.node(n, {
      kind: u.ARGUMENT,
      name: s,
      value: this.parseValueLiteral(t)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  parseFragment() {
    const t = this._lexer.token;
    this.expectToken(o.SPREAD);
    const n = this.expectOptionalKeyword("on");
    return !n && this.peek(o.NAME) ? this.node(t, {
      kind: u.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(t, {
      kind: u.INLINE_FRAGMENT,
      typeCondition: n ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseFragmentDefinition() {
    var t;
    const n = this._lexer.token;
    return this.expectKeyword("fragment"), ((t = this._options) === null || t === void 0 ? void 0 : t.allowLegacyFragmentVariables) === !0 ? this.node(n, {
      kind: u.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(n, {
      kind: u.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  parseValueLiteral(t) {
    const n = this._lexer.token;
    switch (n.kind) {
      case o.BRACKET_L:
        return this.parseList(t);
      case o.BRACE_L:
        return this.parseObject(t);
      case o.INT:
        return this._lexer.advance(), this.node(n, {
          kind: u.INT,
          value: n.value
        });
      case o.FLOAT:
        return this._lexer.advance(), this.node(n, {
          kind: u.FLOAT,
          value: n.value
        });
      case o.STRING:
      case o.BLOCK_STRING:
        return this.parseStringLiteral();
      case o.NAME:
        switch (this._lexer.advance(), n.value) {
          case "true":
            return this.node(n, {
              kind: u.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(n, {
              kind: u.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(n, {
              kind: u.NULL
            });
          default:
            return this.node(n, {
              kind: u.ENUM,
              value: n.value
            });
        }
      case o.DOLLAR:
        if (t)
          if (this.expectToken(o.DOLLAR), this._lexer.token.kind === o.NAME) {
            const s = this._lexer.token.value;
            throw m(
              this._lexer.source,
              n.start,
              `Unexpected variable "$${s}" in constant value.`
            );
          } else
            throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const t = this._lexer.token;
    return this._lexer.advance(), this.node(t, {
      kind: u.STRING,
      value: t.value,
      block: t.kind === o.BLOCK_STRING
    });
  }
  parseList(t) {
    const n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, {
      kind: u.LIST,
      values: this.any(o.BRACKET_L, n, o.BRACKET_R)
    });
  }
  parseObject(t) {
    const n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, {
      kind: u.OBJECT,
      fields: this.any(o.BRACE_L, n, o.BRACE_R)
    });
  }
  parseObjectField(t) {
    const n = this._lexer.token, s = this.parseName();
    return this.expectToken(o.COLON), this.node(n, {
      kind: u.OBJECT_FIELD,
      name: s,
      value: this.parseValueLiteral(t)
    });
  }
  parseDirectives(t) {
    const n = [];
    for (; this.peek(o.AT); )
      n.push(this.parseDirective(t));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  parseDirective(t) {
    const n = this._lexer.token;
    return this.expectToken(o.AT), this.node(n, {
      kind: u.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(t)
    });
  }
  parseTypeReference() {
    const t = this._lexer.token;
    let n;
    if (this.expectOptionalToken(o.BRACKET_L)) {
      const s = this.parseTypeReference();
      this.expectToken(o.BRACKET_R), n = this.node(t, {
        kind: u.LIST_TYPE,
        type: s
      });
    } else
      n = this.parseNamedType();
    return this.expectOptionalToken(o.BANG) ? this.node(t, {
      kind: u.NON_NULL_TYPE,
      type: n
    }) : n;
  }
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: u.NAMED_TYPE,
      name: this.parseName()
    });
  }
  peekDescription() {
    return this.peek(o.STRING) || this.peek(o.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  parseSchemaDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("schema");
    const s = this.parseConstDirectives(), i = this.many(
      o.BRACE_L,
      this.parseOperationTypeDefinition,
      o.BRACE_R
    );
    return this.node(t, {
      kind: u.SCHEMA_DEFINITION,
      description: n,
      directives: s,
      operationTypes: i
    });
  }
  parseOperationTypeDefinition() {
    const t = this._lexer.token, n = this.parseOperationType();
    this.expectToken(o.COLON);
    const s = this.parseNamedType();
    return this.node(t, {
      kind: u.OPERATION_TYPE_DEFINITION,
      operation: n,
      type: s
    });
  }
  parseScalarTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("scalar");
    const s = this.parseName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: u.SCALAR_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i
    });
  }
  parseObjectTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("type");
    const s = this.parseName(), i = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    return this.node(t, {
      kind: u.OBJECT_TYPE_DEFINITION,
      description: n,
      name: s,
      interfaces: i,
      directives: r,
      fields: a
    });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(o.AMP, this.parseNamedType) : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany(
      o.BRACE_L,
      this.parseFieldDefinition,
      o.BRACE_R
    );
  }
  parseFieldDefinition() {
    const t = this._lexer.token, n = this.parseDescription(), s = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(o.COLON);
    const r = this.parseTypeReference(), a = this.parseConstDirectives();
    return this.node(t, {
      kind: u.FIELD_DEFINITION,
      description: n,
      name: s,
      arguments: i,
      type: r,
      directives: a
    });
  }
  parseArgumentDefs() {
    return this.optionalMany(
      o.PAREN_L,
      this.parseInputValueDef,
      o.PAREN_R
    );
  }
  parseInputValueDef() {
    const t = this._lexer.token, n = this.parseDescription(), s = this.parseName();
    this.expectToken(o.COLON);
    const i = this.parseTypeReference();
    let r;
    this.expectOptionalToken(o.EQUALS) && (r = this.parseConstValueLiteral());
    const a = this.parseConstDirectives();
    return this.node(t, {
      kind: u.INPUT_VALUE_DEFINITION,
      description: n,
      name: s,
      type: i,
      defaultValue: r,
      directives: a
    });
  }
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("interface");
    const s = this.parseName(), i = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    return this.node(t, {
      kind: u.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: s,
      interfaces: i,
      directives: r,
      fields: a
    });
  }
  parseUnionTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("union");
    const s = this.parseName(), i = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
    return this.node(t, {
      kind: u.UNION_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i,
      types: r
    });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(o.EQUALS) ? this.delimitedMany(o.PIPE, this.parseNamedType) : [];
  }
  parseEnumTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("enum");
    const s = this.parseName(), i = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
    return this.node(t, {
      kind: u.ENUM_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i,
      values: r
    });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(
      o.BRACE_L,
      this.parseEnumValueDefinition,
      o.BRACE_R
    );
  }
  parseEnumValueDefinition() {
    const t = this._lexer.token, n = this.parseDescription(), s = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: u.ENUM_VALUE_DEFINITION,
      description: n,
      name: s,
      directives: i
    });
  }
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw m(
        this._lexer.source,
        this._lexer.token.start,
        `${R(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("input");
    const s = this.parseName(), i = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
    return this.node(t, {
      kind: u.INPUT_OBJECT_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i,
      fields: r
    });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(
      o.BRACE_L,
      this.parseInputValueDef,
      o.BRACE_R
    );
  }
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead();
    if (t.kind === o.NAME)
      switch (t.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(t);
  }
  parseSchemaExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const n = this.parseConstDirectives(), s = this.optionalMany(
      o.BRACE_L,
      this.parseOperationTypeDefinition,
      o.BRACE_R
    );
    if (n.length === 0 && s.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: u.SCHEMA_EXTENSION,
      directives: n,
      operationTypes: s
    });
  }
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const n = this.parseName(), s = this.parseConstDirectives();
    if (s.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: u.SCALAR_TYPE_EXTENSION,
      name: n,
      directives: s
    });
  }
  parseObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const n = this.parseName(), s = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), r = this.parseFieldsDefinition();
    if (s.length === 0 && i.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: u.OBJECT_TYPE_EXTENSION,
      name: n,
      interfaces: s,
      directives: i,
      fields: r
    });
  }
  parseInterfaceTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const n = this.parseName(), s = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), r = this.parseFieldsDefinition();
    if (s.length === 0 && i.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: u.INTERFACE_TYPE_EXTENSION,
      name: n,
      interfaces: s,
      directives: i,
      fields: r
    });
  }
  parseUnionTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const n = this.parseName(), s = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    if (s.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: u.UNION_TYPE_EXTENSION,
      name: n,
      directives: s,
      types: i
    });
  }
  parseEnumTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const n = this.parseName(), s = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    if (s.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: u.ENUM_TYPE_EXTENSION,
      name: n,
      directives: s,
      values: i
    });
  }
  parseInputObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const n = this.parseName(), s = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    if (s.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: u.INPUT_OBJECT_TYPE_EXTENSION,
      name: n,
      directives: s,
      fields: i
    });
  }
  parseDirectiveDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(o.AT);
    const s = this.parseName(), i = this.parseArgumentDefs(), r = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const a = this.parseDirectiveLocations();
    return this.node(t, {
      kind: u.DIRECTIVE_DEFINITION,
      description: n,
      name: s,
      arguments: i,
      repeatable: r,
      locations: a
    });
  }
  parseDirectiveLocations() {
    return this.delimitedMany(o.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    const t = this._lexer.token, n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(j, n.value))
      return n;
    throw this.unexpected(t);
  }
  node(t, n) {
    var s;
    return ((s = this._options) === null || s === void 0 ? void 0 : s.noLocation) !== !0 && (n.loc = new de(
      t,
      this._lexer.lastToken,
      this._lexer.source
    )), n;
  }
  peek(t) {
    return this._lexer.token.kind === t;
  }
  expectToken(t) {
    const n = this._lexer.token;
    if (n.kind === t)
      return this._lexer.advance(), n;
    throw m(
      this._lexer.source,
      n.start,
      `Expected ${ce(t)}, found ${R(n)}.`
    );
  }
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this._lexer.advance(), !0) : !1;
  }
  expectKeyword(t) {
    const n = this._lexer.token;
    if (n.kind === o.NAME && n.value === t)
      this._lexer.advance();
    else
      throw m(
        this._lexer.source,
        n.start,
        `Expected "${t}", found ${R(n)}.`
      );
  }
  expectOptionalKeyword(t) {
    const n = this._lexer.token;
    return n.kind === o.NAME && n.value === t ? (this._lexer.advance(), !0) : !1;
  }
  unexpected(t) {
    const n = t != null ? t : this._lexer.token;
    return m(
      this._lexer.source,
      n.start,
      `Unexpected ${R(n)}.`
    );
  }
  any(t, n, s) {
    this.expectToken(t);
    const i = [];
    for (; !this.expectOptionalToken(s); )
      i.push(n.call(this));
    return i;
  }
  optionalMany(t, n, s) {
    if (this.expectOptionalToken(t)) {
      const i = [];
      do
        i.push(n.call(this));
      while (!this.expectOptionalToken(s));
      return i;
    }
    return [];
  }
  many(t, n, s) {
    this.expectToken(t);
    const i = [];
    do
      i.push(n.call(this));
    while (!this.expectOptionalToken(s));
    return i;
  }
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    const s = [];
    do
      s.push(n.call(this));
    while (this.expectOptionalToken(t));
    return s;
  }
}
function R(e) {
  const t = e.value;
  return ce(e.kind) + (t != null ? ` "${t}"` : "");
}
function ce(e) {
  return ke(e) ? `"${e}"` : e;
}
const Me = Object.freeze({});
function Be(e, t, n = ee) {
  const s = /* @__PURE__ */ new Map();
  for (const O of Object.values(u))
    s.set(O, je(t, O));
  let i, r = Array.isArray(e), a = [e], d = -1, h = [], l, E, f;
  const I = [], T = [];
  let v = e;
  do {
    d++;
    const O = d === a.length, Y = O && h.length !== 0;
    if (O) {
      if (E = T.length === 0 ? void 0 : I[I.length - 1], l = f, f = T.pop(), Y)
        if (r) {
          l = l.slice();
          let _ = 0;
          for (const [V, J] of h) {
            const X = V - _;
            J === null ? (l.splice(X, 1), _++) : l[X] = J;
          }
        } else {
          l = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(l)
          );
          for (const [_, V] of h)
            l[_] = V;
        }
      d = i.index, a = i.keys, h = i.edits, r = i.inArray, i = i.prev;
    } else {
      if (E = f ? r ? d : a[d] : void 0, l = f ? f[E] : v, l == null)
        continue;
      f && I.push(E);
    }
    let y;
    if (!Array.isArray(l)) {
      var A, P;
      q(l) || L(!1, `Invalid AST Node: ${ne(l)}.`);
      const _ = O ? (A = s.get(l.kind)) === null || A === void 0 ? void 0 : A.leave : (P = s.get(l.kind)) === null || P === void 0 ? void 0 : P.enter;
      if (y = _ == null ? void 0 : _.call(t, l, E, f, I, T), y === Me)
        break;
      if (y === !1) {
        if (!O) {
          I.pop();
          continue;
        }
      } else if (y !== void 0 && (h.push([E, y]), !O))
        if (q(y))
          l = y;
        else {
          I.pop();
          continue;
        }
    }
    if (y === void 0 && Y && h.push([E, l]), O)
      I.pop();
    else {
      var U;
      i = {
        inArray: r,
        index: d,
        keys: a,
        edits: h,
        prev: i
      }, r = Array.isArray(l), a = r ? l : (U = n[l.kind]) !== null && U !== void 0 ? U : [], d = -1, h = [], f && T.push(f), f = l;
    }
  } while (i !== void 0);
  return h.length !== 0 && (v = h[h.length - 1][1]), v;
}
function je(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function $e(e) {
  return `"${e.replace(Ge, Ye)}"`;
}
const Ge = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Ye(e) {
  return Je[e.charCodeAt(0)];
}
const Je = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
];
function qe(e) {
  return Be(e, Qe);
}
const Xe = 80, Qe = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  Document: {
    leave: (e) => c(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = p("(", c(e.variableDefinitions, ", "), ")"), n = c(
        [
          e.operation,
          c([e.name, t]),
          c(e.directives, " ")
        ],
        " "
      );
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: s }) => e + ": " + t + p(" = ", n) + p(" ", c(s, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => x(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: s, selectionSet: i }) {
      const r = p("", e, ": ") + t;
      let a = r + p("(", c(n, ", "), ")");
      return a.length > Xe && (a = r + p(`(
`, b(c(n, `
`)), `
)`)), c([a, c(s, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + p(" ", c(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => c(
      [
        "...",
        p("on ", e),
        c(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: s, selectionSet: i }) => `fragment ${e}${p("(", c(n, ", "), ")")} on ${t} ${p("", c(s, " "), " ")}` + i
  },
  IntValue: {
    leave: ({ value: e }) => e
  },
  FloatValue: {
    leave: ({ value: e }) => e
  },
  StringValue: {
    leave: ({ value: e, block: t }) => t ? De(e) : $e(e)
  },
  BooleanValue: {
    leave: ({ value: e }) => e ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: e }) => e
  },
  ListValue: {
    leave: ({ values: e }) => "[" + c(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + c(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + p("(", c(t, ", "), ")")
  },
  NamedType: {
    leave: ({ name: e }) => e
  },
  ListType: {
    leave: ({ type: e }) => "[" + e + "]"
  },
  NonNullType: {
    leave: ({ type: e }) => e + "!"
  },
  SchemaDefinition: {
    leave: ({ description: e, directives: t, operationTypes: n }) => p("", e, `
`) + c(["schema", c(t, " "), x(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => p("", e, `
`) + c(["scalar", t, c(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: s, fields: i }) => p("", e, `
`) + c(
      [
        "type",
        t,
        p("implements ", c(n, " & ")),
        c(s, " "),
        x(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: s, directives: i }) => p("", e, `
`) + t + (W(n) ? p(`(
`, b(c(n, `
`)), `
)`) : p("(", c(n, ", "), ")")) + ": " + s + p(" ", c(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: s, directives: i }) => p("", e, `
`) + c(
      [t + ": " + n, p("= ", s), c(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: s, fields: i }) => p("", e, `
`) + c(
      [
        "interface",
        t,
        p("implements ", c(n, " & ")),
        c(s, " "),
        x(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: s }) => p("", e, `
`) + c(
      ["union", t, c(n, " "), p("= ", c(s, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: s }) => p("", e, `
`) + c(["enum", t, c(n, " "), x(s)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => p("", e, `
`) + c([t, c(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: s }) => p("", e, `
`) + c(["input", t, c(n, " "), x(s)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: s, locations: i }) => p("", e, `
`) + "directive @" + t + (W(n) ? p(`(
`, b(c(n, `
`)), `
)`) : p("(", c(n, ", "), ")")) + (s ? " repeatable" : "") + " on " + c(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => c(
      ["extend schema", c(e, " "), x(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => c(["extend scalar", e, c(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: s }) => c(
      [
        "extend type",
        e,
        p("implements ", c(t, " & ")),
        c(n, " "),
        x(s)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: s }) => c(
      [
        "extend interface",
        e,
        p("implements ", c(t, " & ")),
        c(n, " "),
        x(s)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => c(
      [
        "extend union",
        e,
        c(t, " "),
        p("= ", c(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => c(["extend enum", e, c(t, " "), x(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => c(["extend input", e, c(t, " "), x(n)], " ")
  }
};
function c(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((s) => s).join(t)) !== null && n !== void 0 ? n : "";
}
function x(e) {
  return p(`{
`, b(c(e, `
`)), `
}`);
}
function p(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function b(e) {
  return p("  ", e.replace(/\n/g, `
  `));
}
function W(e) {
  var t;
  return (t = e == null ? void 0 : e.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function He(e) {
  return e.kind === u.FIELD || e.kind === u.FRAGMENT_SPREAD || e.kind === u.INLINE_FRAGMENT;
}
export {
  Me as B,
  u as K,
  ze as a,
  He as i,
  qe as p,
  Be as v
};
//# sourceMappingURL=graphql.add7d3ad.js.map
