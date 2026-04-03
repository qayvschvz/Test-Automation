const V = window.React.useReducer, L = window.React.useRef, b = window.React.useLayoutEffect, A = window.React.useEffect, B = (n) => {
  const [, S] = V((e) => e + 1, 0), s = L(null), {
    replace: i,
    append: g
  } = n, f = i ? i(n.format(n.value)) : n.format(n.value), m = L(!1), O = (e) => {
    const c = e.target.value;
    s.current = [
      c,
      e.target,
      c.length > f.length,
      m.current,
      f === n.format(c)
    ], S();
  };
  return b(() => {
    if (s.current == null)
      return;
    let [
      e,
      c,
      r,
      R,
      h
    ] = s.current;
    s.current = null;
    const D = R && h, E = e.slice(c.selectionStart).search(n.accept || /\d/g), C = E !== -1 ? E : 0, u = (t) => (t.match(n.accept || /\d/g) || []).join(""), w = u(e.substr(0, c.selectionStart)), y = (t) => {
      let a = 0, o = 0;
      for (let d = 0; d !== w.length; ++d) {
        let x = t.indexOf(w[d], a) + 1, v = u(t).indexOf(w[d], o) + 1;
        v - o > 1 && (x = a, v = o), o = Math.max(v, o), a = Math.max(a, x);
      }
      return a;
    };
    if (n.mask === !0 && r && !h) {
      let t = y(e);
      const a = u(e.substr(t))[0];
      t = e.indexOf(a, t), e = `${e.substr(0, t)}${e.substr(t + 1)}`;
    }
    let l = n.format(e);
    g != null && c.selectionStart === e.length && !h && (r ? l = g(l) : u(l.slice(-1)) === "" && (l = l.slice(0, -1)));
    const k = i ? i(l) : l;
    return f === k ? S() : n.onChange(k), () => {
      let t = y(l);
      if (n.mask != null && (r || R && !D))
        for (; l[t] && u(l[t]) === ""; )
          t += 1;
      c.selectionStart = c.selectionEnd = t + (D ? 1 + C : 0);
    };
  }), A(() => {
    const e = (r) => {
      r.code === "Delete" && (m.current = !0);
    }, c = (r) => {
      r.code === "Delete" && (m.current = !1);
    };
    return document.addEventListener("keydown", e), document.addEventListener("keyup", c), () => {
      document.removeEventListener("keydown", e), document.removeEventListener("keyup", c);
    };
  }, []), {
    value: s.current != null ? s.current[0] : f,
    onChange: O
  };
};
export {
  B as u
};
//# sourceMappingURL=rifm.e1d6e4eb.js.map
