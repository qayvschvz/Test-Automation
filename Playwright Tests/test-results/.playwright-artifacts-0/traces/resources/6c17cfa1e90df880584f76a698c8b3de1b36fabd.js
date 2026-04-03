import { c as O, a as w, _ as P, d as F } from "./@babel.7bf9beb3.js";
import { a as G, r as L } from "./dom-helpers.2bf980ac.js";
const k = {
  disabled: !1
}, V = window.React, b = V.createContext(null), g = window.React, R = window.ReactDOM;
var C = "unmounted", h = "exited", v = "entering", x = "entered", M = "exiting", c = /* @__PURE__ */ function(u) {
  O(l, u);
  function l(t, e) {
    var n;
    n = u.call(this, t, e) || this;
    var r = e, i = r && !r.isMounting ? t.enter : t.appear, s;
    return n.appearStatus = null, t.in ? i ? (s = h, n.appearStatus = v) : s = x : t.unmountOnExit || t.mountOnEnter ? s = C : s = h, n.state = {
      status: s
    }, n.nextCallback = null, n;
  }
  l.getDerivedStateFromProps = function(e, n) {
    var r = e.in;
    return r && n.status === C ? {
      status: h
    } : null;
  };
  var a = l.prototype;
  return a.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, a.componentDidUpdate = function(e) {
    var n = null;
    if (e !== this.props) {
      var r = this.state.status;
      this.props.in ? r !== v && r !== x && (n = v) : (r === v || r === x) && (n = M);
    }
    this.updateStatus(!1, n);
  }, a.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, a.getTimeouts = function() {
    var e = this.props.timeout, n, r, i;
    return n = r = i = e, e != null && typeof e != "number" && (n = e.exit, r = e.enter, i = e.appear !== void 0 ? e.appear : r), {
      exit: n,
      enter: r,
      appear: i
    };
  }, a.updateStatus = function(e, n) {
    e === void 0 && (e = !1), n !== null ? (this.cancelNextCallback(), n === v ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && this.state.status === h && this.setState({
      status: C
    });
  }, a.performEnter = function(e) {
    var n = this, r = this.props.enter, i = this.context ? this.context.isMounting : e, s = this.props.nodeRef ? [i] : [R.findDOMNode(this), i], o = s[0], p = s[1], d = this.getTimeouts(), f = i ? d.appear : d.enter;
    if (!e && !r || k.disabled) {
      this.safeSetState({
        status: x
      }, function() {
        n.props.onEntered(o);
      });
      return;
    }
    this.props.onEnter(o, p), this.safeSetState({
      status: v
    }, function() {
      n.props.onEntering(o, p), n.onTransitionEnd(f, function() {
        n.safeSetState({
          status: x
        }, function() {
          n.props.onEntered(o, p);
        });
      });
    });
  }, a.performExit = function() {
    var e = this, n = this.props.exit, r = this.getTimeouts(), i = this.props.nodeRef ? void 0 : R.findDOMNode(this);
    if (!n || k.disabled) {
      this.safeSetState({
        status: h
      }, function() {
        e.props.onExited(i);
      });
      return;
    }
    this.props.onExit(i), this.safeSetState({
      status: M
    }, function() {
      e.props.onExiting(i), e.onTransitionEnd(r.exit, function() {
        e.safeSetState({
          status: h
        }, function() {
          e.props.onExited(i);
        });
      });
    });
  }, a.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, a.safeSetState = function(e, n) {
    n = this.setNextCallback(n), this.setState(e, n);
  }, a.setNextCallback = function(e) {
    var n = this, r = !0;
    return this.nextCallback = function(i) {
      r && (r = !1, n.nextCallback = null, e(i));
    }, this.nextCallback.cancel = function() {
      r = !1;
    }, this.nextCallback;
  }, a.onTransitionEnd = function(e, n) {
    this.setNextCallback(n);
    var r = this.props.nodeRef ? this.props.nodeRef.current : R.findDOMNode(this), i = e == null && !this.props.addEndListener;
    if (!r || i) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback], o = s[0], p = s[1];
      this.props.addEndListener(o, p);
    }
    e != null && setTimeout(this.nextCallback, e);
  }, a.render = function() {
    var e = this.state.status;
    if (e === C)
      return null;
    var n = this.props, r = n.children, i = w(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return /* @__PURE__ */ g.createElement(b.Provider, {
      value: null
    }, typeof r == "function" ? r(e, i) : g.cloneElement(g.Children.only(r), i));
  }, l;
}(g.Component);
c.contextType = b;
c.propTypes = {};
function m() {
}
c.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: m,
  onEntering: m,
  onEntered: m,
  onExit: m,
  onExiting: m,
  onExited: m
};
c.UNMOUNTED = C;
c.EXITED = h;
c.ENTERING = v;
c.ENTERED = x;
c.EXITING = M;
const j = c, I = window.React;
var W = function(l, a) {
  return l && a && a.split(" ").forEach(function(t) {
    return G(l, t);
  });
}, D = function(l, a) {
  return l && a && a.split(" ").forEach(function(t) {
    return L(l, t);
  });
}, _ = /* @__PURE__ */ function(u) {
  O(l, u);
  function l() {
    for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return t = u.call.apply(u, [this].concat(n)) || this, t.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, t.onEnter = function(i, s) {
      var o = t.resolveArguments(i, s), p = o[0], d = o[1];
      t.removeClasses(p, "exit"), t.addClass(p, d ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(i, s);
    }, t.onEntering = function(i, s) {
      var o = t.resolveArguments(i, s), p = o[0], d = o[1], f = d ? "appear" : "enter";
      t.addClass(p, f, "active"), t.props.onEntering && t.props.onEntering(i, s);
    }, t.onEntered = function(i, s) {
      var o = t.resolveArguments(i, s), p = o[0], d = o[1], f = d ? "appear" : "enter";
      t.removeClasses(p, f), t.addClass(p, f, "done"), t.props.onEntered && t.props.onEntered(i, s);
    }, t.onExit = function(i) {
      var s = t.resolveArguments(i), o = s[0];
      t.removeClasses(o, "appear"), t.removeClasses(o, "enter"), t.addClass(o, "exit", "base"), t.props.onExit && t.props.onExit(i);
    }, t.onExiting = function(i) {
      var s = t.resolveArguments(i), o = s[0];
      t.addClass(o, "exit", "active"), t.props.onExiting && t.props.onExiting(i);
    }, t.onExited = function(i) {
      var s = t.resolveArguments(i), o = s[0];
      t.removeClasses(o, "exit"), t.addClass(o, "exit", "done"), t.props.onExited && t.props.onExited(i);
    }, t.resolveArguments = function(i, s) {
      return t.props.nodeRef ? [t.props.nodeRef.current, i] : [i, s];
    }, t.getClassNames = function(i) {
      var s = t.props.classNames, o = typeof s == "string", p = o && s ? s + "-" : "", d = o ? "" + p + i : s[i], f = o ? d + "-active" : s[i + "Active"], U = o ? d + "-done" : s[i + "Done"];
      return {
        baseClassName: d,
        activeClassName: f,
        doneClassName: U
      };
    }, t;
  }
  var a = l.prototype;
  return a.addClass = function(e, n, r) {
    var i = this.getClassNames(n)[r + "ClassName"], s = this.getClassNames("enter"), o = s.doneClassName;
    n === "appear" && r === "done" && o && (i += " " + o), i && (this.appliedClasses[n][r] = i, W(e, i));
  }, a.removeClasses = function(e, n) {
    var r = this.appliedClasses[n], i = r.base, s = r.active, o = r.done;
    this.appliedClasses[n] = {}, i && D(e, i), s && D(e, s), o && D(e, o);
  }, a.render = function() {
    var e = this.props, n = w(e, ["classNames"]);
    return /* @__PURE__ */ I.createElement(j, P({}, n, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, l;
}(I.Component);
_.defaultProps = {
  classNames: ""
};
_.propTypes = {};
const Z = _, X = window.React.Children, S = window.React.cloneElement, T = window.React.isValidElement;
function $(u, l) {
  var a = function(n) {
    return l && T(n) ? l(n) : n;
  }, t = /* @__PURE__ */ Object.create(null);
  return u && X.map(u, function(e) {
    return e;
  }).forEach(function(e) {
    t[e.key] = a(e);
  }), t;
}
function z(u, l) {
  u = u || {}, l = l || {};
  function a(p) {
    return p in l ? l[p] : u[p];
  }
  var t = /* @__PURE__ */ Object.create(null), e = [];
  for (var n in u)
    n in l ? e.length && (t[n] = e, e = []) : e.push(n);
  var r, i = {};
  for (var s in l) {
    if (t[s])
      for (r = 0; r < t[s].length; r++) {
        var o = t[s][r];
        i[t[s][r]] = a(o);
      }
    i[s] = a(s);
  }
  for (r = 0; r < e.length; r++)
    i[e[r]] = a(e[r]);
  return i;
}
function E(u, l, a) {
  return a[l] != null ? a[l] : u.props[l];
}
function H(u, l) {
  return $(u.children, function(a) {
    return S(a, {
      onExited: l.bind(null, a),
      in: !0,
      appear: E(a, "appear", u),
      enter: E(a, "enter", u),
      exit: E(a, "exit", u)
    });
  });
}
function q(u, l, a) {
  var t = $(u.children), e = z(l, t);
  return Object.keys(e).forEach(function(n) {
    var r = e[n];
    if (!!T(r)) {
      var i = n in l, s = n in t, o = l[n], p = T(o) && !o.props.in;
      s && (!i || p) ? e[n] = S(r, {
        onExited: a.bind(null, r),
        in: !0,
        exit: E(r, "exit", u),
        enter: E(r, "enter", u)
      }) : !s && i && !p ? e[n] = S(r, {
        in: !1
      }) : s && i && T(o) && (e[n] = S(r, {
        onExited: a.bind(null, r),
        in: o.props.in,
        exit: E(r, "exit", u),
        enter: E(r, "enter", u)
      }));
    }
  }), e;
}
const N = window.React;
var B = Object.values || function(u) {
  return Object.keys(u).map(function(l) {
    return u[l];
  });
}, J = {
  component: "div",
  childFactory: function(l) {
    return l;
  }
}, A = /* @__PURE__ */ function(u) {
  O(l, u);
  function l(t, e) {
    var n;
    n = u.call(this, t, e) || this;
    var r = n.handleExited.bind(F(n));
    return n.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: r,
      firstRender: !0
    }, n;
  }
  var a = l.prototype;
  return a.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, a.componentWillUnmount = function() {
    this.mounted = !1;
  }, l.getDerivedStateFromProps = function(e, n) {
    var r = n.children, i = n.handleExited, s = n.firstRender;
    return {
      children: s ? H(e, i) : q(e, r, i),
      firstRender: !1
    };
  }, a.handleExited = function(e, n) {
    var r = $(this.props.children);
    e.key in r || (e.props.onExited && e.props.onExited(n), this.mounted && this.setState(function(i) {
      var s = P({}, i.children);
      return delete s[e.key], {
        children: s
      };
    }));
  }, a.render = function() {
    var e = this.props, n = e.component, r = e.childFactory, i = w(e, ["component", "childFactory"]), s = this.state.contextValue, o = B(this.state.children).map(r);
    return delete i.appear, delete i.enter, delete i.exit, n === null ? /* @__PURE__ */ N.createElement(b.Provider, {
      value: s
    }, o) : /* @__PURE__ */ N.createElement(b.Provider, {
      value: s
    }, /* @__PURE__ */ N.createElement(n, i, o));
  }, l;
}(N.Component);
A.propTypes = {};
A.defaultProps = J;
const y = A;
export {
  Z as C,
  j as T,
  y as a
};
//# sourceMappingURL=react-transition-group.1a2e36df.js.map
