import { E as wt } from "./@babel.7bf9beb3.js";
import { l as mt } from "./lodash.debounce.25dca524.js";
import { c as fe } from "./classnames.76e0eef6.js";
import { r as bt } from "./resize-observer-polyfill.12d49da5.js";
import { j as Ot } from "./json2mq.41462e59.js";
import { r as kt } from "./enquire.js.69628d15.js";
var Ve = {}, Je = {}, de = {}, Ze = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = void 0;
  var e = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    swiping: !1,
    touchObject: {
      startX: 0,
      startY: 0,
      curX: 0,
      curY: 0
    },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0
  }, r = e;
  n.default = r;
})(Ze);
var s = {};
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.checkSpecKeys = s.checkNavigable = s.changeSlide = s.canUseDOM = s.canGoNext = void 0;
s.clamp = et;
s.swipeStart = s.swipeMove = s.swipeEnd = s.slidesOnRight = s.slidesOnLeft = s.slideHandler = s.siblingDirection = s.safePreventDefault = s.lazyStartIndex = s.lazySlidesOnRight = s.lazySlidesOnLeft = s.lazyEndIndex = s.keyHandler = s.initializedState = s.getWidth = s.getTrackLeft = s.getTrackCSS = s.getTrackAnimateCSS = s.getTotalSlides = s.getSwipeDirection = s.getSlideCount = s.getRequiredLazySlides = s.getPreClones = s.getPostClones = s.getOnDemandLazySlides = s.getNavigableIndexes = s.getHeight = s.extractObject = void 0;
var Pt = Tt(window.React);
function Tt(n) {
  return n && n.__esModule ? n : { default: n };
}
function $e(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function R(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $e(Object(r), !0).forEach(function(i) {
      _t(n, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return n;
}
function _t(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function et(n, e, r) {
  return Math.max(e, Math.min(n, r));
}
var Y = function(e) {
  var r = ["onTouchStart", "onTouchMove", "onWheel"];
  r.includes(e._reactName) || e.preventDefault();
};
s.safePreventDefault = Y;
var Re = function(e) {
  for (var r = [], i = ze(e), t = De(e), l = i; l < t; l++)
    e.lazyLoadedList.indexOf(l) < 0 && r.push(l);
  return r;
};
s.getOnDemandLazySlides = Re;
var Lt = function(e) {
  for (var r = [], i = ze(e), t = De(e), l = i; l < t; l++)
    r.push(l);
  return r;
};
s.getRequiredLazySlides = Lt;
var ze = function(e) {
  return e.currentSlide - tt(e);
};
s.lazyStartIndex = ze;
var De = function(e) {
  return e.currentSlide + rt(e);
};
s.lazyEndIndex = De;
var tt = function(e) {
  return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
};
s.lazySlidesOnLeft = tt;
var rt = function(e) {
  return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
};
s.lazySlidesOnRight = rt;
var te = function(e) {
  return e && e.offsetWidth || 0;
};
s.getWidth = te;
var je = function(e) {
  return e && e.offsetHeight || 0;
};
s.getHeight = je;
var He = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i, t, l, a;
  return i = e.startX - e.curX, t = e.startY - e.curY, l = Math.atan2(t, i), a = Math.round(l * 180 / Math.PI), a < 0 && (a = 360 - Math.abs(a)), a <= 45 && a >= 0 || a <= 360 && a >= 315 ? "left" : a >= 135 && a <= 225 ? "right" : r === !0 ? a >= 35 && a <= 135 ? "up" : "down" : "vertical";
};
s.getSwipeDirection = He;
var Ie = function(e) {
  var r = !0;
  return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (r = !1), r;
};
s.canGoNext = Ie;
var Ct = function(e, r) {
  var i = {};
  return r.forEach(function(t) {
    return i[t] = e[t];
  }), i;
};
s.extractObject = Ct;
var Et = function(e) {
  var r = Pt.default.Children.count(e.children), i = e.listRef, t = Math.ceil(te(i)), l = e.trackRef && e.trackRef.node, a = Math.ceil(te(l)), o;
  if (e.vertical)
    o = t;
  else {
    var u = e.centerMode && parseInt(e.centerPadding) * 2;
    typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (u *= t / 100), o = Math.ceil((t - u) / e.slidesToShow);
  }
  var f = i && je(i.querySelector('[data-index="0"]')), h = f * e.slidesToShow, d = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
  e.rtl && e.currentSlide === void 0 && (d = r - 1 - e.initialSlide);
  var b = e.lazyLoadedList || [], M = Re(R(R({}, e), {}, {
    currentSlide: d,
    lazyLoadedList: b
  }));
  b = b.concat(M);
  var k = {
    slideCount: r,
    slideWidth: o,
    listWidth: t,
    trackWidth: a,
    currentSlide: d,
    slideHeight: f,
    listHeight: h,
    lazyLoadedList: b
  };
  return e.autoplaying === null && e.autoplay && (k.autoplaying = "playing"), k;
};
s.initializedState = Et;
var xt = function(e) {
  var r = e.waitForAnimate, i = e.animating, t = e.fade, l = e.infinite, a = e.index, o = e.slideCount, u = e.lazyLoad, f = e.currentSlide, h = e.centerMode, d = e.slidesToScroll, b = e.slidesToShow, M = e.useCSS, k = e.lazyLoadedList;
  if (r && i)
    return {};
  var p = a, g, L, c, O = {}, C = {}, x = l ? a : et(a, 0, o - 1);
  if (t) {
    if (!l && (a < 0 || a >= o))
      return {};
    a < 0 ? p = a + o : a >= o && (p = a - o), u && k.indexOf(p) < 0 && (k = k.concat(p)), O = {
      animating: !0,
      currentSlide: p,
      lazyLoadedList: k,
      targetSlide: p
    }, C = {
      animating: !1,
      targetSlide: p
    };
  } else
    g = p, p < 0 ? (g = p + o, l ? o % d !== 0 && (g = o - o % d) : g = 0) : !Ie(e) && p > f ? p = g = f : h && p >= o ? (p = l ? o : o - 1, g = l ? 0 : o - 1) : p >= o && (g = p - o, l ? o % d !== 0 && (g = 0) : g = o - b), !l && p + b >= o && (g = o - b), L = J(R(R({}, e), {}, {
      slideIndex: p
    })), c = J(R(R({}, e), {}, {
      slideIndex: g
    })), l || (L === c && (p = g), L = c), u && (k = k.concat(Re(R(R({}, e), {}, {
      currentSlide: p
    })))), M ? (O = {
      animating: !0,
      currentSlide: g,
      trackStyle: We(R(R({}, e), {}, {
        left: L
      })),
      lazyLoadedList: k,
      targetSlide: x
    }, C = {
      animating: !1,
      currentSlide: g,
      trackStyle: V(R(R({}, e), {}, {
        left: c
      })),
      swipeLeft: null,
      targetSlide: x
    }) : O = {
      currentSlide: g,
      trackStyle: V(R(R({}, e), {}, {
        left: c
      })),
      lazyLoadedList: k,
      targetSlide: x
    };
  return {
    state: O,
    nextState: C
  };
};
s.slideHandler = xt;
var Mt = function(e, r) {
  var i, t, l, a, o, u = e.slidesToScroll, f = e.slidesToShow, h = e.slideCount, d = e.currentSlide, b = e.targetSlide, M = e.lazyLoad, k = e.infinite;
  if (a = h % u !== 0, i = a ? 0 : (h - d) % u, r.message === "previous")
    l = i === 0 ? u : f - i, o = d - l, M && !k && (t = d - l, o = t === -1 ? h - 1 : t), k || (o = b - u);
  else if (r.message === "next")
    l = i === 0 ? u : i, o = d + l, M && !k && (o = (d + u) % h + i), k || (o = b + u);
  else if (r.message === "dots")
    o = r.index * r.slidesToScroll;
  else if (r.message === "children") {
    if (o = r.index, k) {
      var p = ot(R(R({}, e), {}, {
        targetSlide: o
      }));
      o > r.currentSlide && p === "left" ? o = o - h : o < r.currentSlide && p === "right" && (o = o + h);
    }
  } else
    r.message === "index" && (o = Number(r.index));
  return o;
};
s.changeSlide = Mt;
var Rt = function(e, r, i) {
  return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !r ? "" : e.keyCode === 37 ? i ? "next" : "previous" : e.keyCode === 39 ? i ? "previous" : "next" : "";
};
s.keyHandler = Rt;
var zt = function(e, r, i) {
  return e.target.tagName === "IMG" && Y(e), !r || !i && e.type.indexOf("mouse") !== -1 ? "" : {
    dragging: !0,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};
s.swipeStart = zt;
var Dt = function(e, r) {
  var i = r.scrolling, t = r.animating, l = r.vertical, a = r.swipeToSlide, o = r.verticalSwiping, u = r.rtl, f = r.currentSlide, h = r.edgeFriction, d = r.edgeDragged, b = r.onEdge, M = r.swiped, k = r.swiping, p = r.slideCount, g = r.slidesToScroll, L = r.infinite, c = r.touchObject, O = r.swipeEvent, C = r.listHeight, x = r.listWidth;
  if (!i) {
    if (t)
      return Y(e);
    l && a && o && Y(e);
    var D, I = {}, v = J(r);
    c.curX = e.touches ? e.touches[0].pageX : e.clientX, c.curY = e.touches ? e.touches[0].pageY : e.clientY, c.swipeLength = Math.round(Math.sqrt(Math.pow(c.curX - c.startX, 2)));
    var y = Math.round(Math.sqrt(Math.pow(c.curY - c.startY, 2)));
    if (!o && !k && y > 10)
      return {
        scrolling: !0
      };
    o && (c.swipeLength = y);
    var P = (u ? -1 : 1) * (c.curX > c.startX ? 1 : -1);
    o && (P = c.curY > c.startY ? 1 : -1);
    var E = Math.ceil(p / g), m = He(r.touchObject, o), w = c.swipeLength;
    return L || (f === 0 && (m === "right" || m === "down") || f + 1 >= E && (m === "left" || m === "up") || !Ie(r) && (m === "left" || m === "up")) && (w = c.swipeLength * h, d === !1 && b && (b(m), I.edgeDragged = !0)), !M && O && (O(m), I.swiped = !0), l ? D = v + w * (C / x) * P : u ? D = v - w * P : D = v + w * P, o && (D = v + w * P), I = R(R({}, I), {}, {
      touchObject: c,
      swipeLeft: D,
      trackStyle: V(R(R({}, r), {}, {
        left: D
      }))
    }), Math.abs(c.curX - c.startX) < Math.abs(c.curY - c.startY) * 0.8 || c.swipeLength > 10 && (I.swiping = !0, Y(e)), I;
  }
};
s.swipeMove = Dt;
var jt = function(e, r) {
  var i = r.dragging, t = r.swipe, l = r.touchObject, a = r.listWidth, o = r.touchThreshold, u = r.verticalSwiping, f = r.listHeight, h = r.swipeToSlide, d = r.scrolling, b = r.onSwipe, M = r.targetSlide, k = r.currentSlide, p = r.infinite;
  if (!i)
    return t && Y(e), {};
  var g = u ? f / o : a / o, L = He(l, u), c = {
    dragging: !1,
    edgeDragged: !1,
    scrolling: !1,
    swiping: !1,
    swiped: !1,
    swipeLeft: null,
    touchObject: {}
  };
  if (d || !l.swipeLength)
    return c;
  if (l.swipeLength > g) {
    Y(e), b && b(L);
    var O, C, x = p ? k : M;
    switch (L) {
      case "left":
      case "up":
        C = x + be(r), O = h ? me(r, C) : C, c.currentDirection = 0;
        break;
      case "right":
      case "down":
        C = x - be(r), O = h ? me(r, C) : C, c.currentDirection = 1;
        break;
      default:
        O = x;
    }
    c.triggerSlideHandler = O;
  } else {
    var D = J(r);
    c.trackStyle = We(R(R({}, r), {}, {
      left: D
    }));
  }
  return c;
};
s.swipeEnd = jt;
var nt = function(e) {
  for (var r = e.infinite ? e.slideCount * 2 : e.slideCount, i = e.infinite ? e.slidesToShow * -1 : 0, t = e.infinite ? e.slidesToShow * -1 : 0, l = []; i < r; )
    l.push(i), i = t + e.slidesToScroll, t += Math.min(e.slidesToScroll, e.slidesToShow);
  return l;
};
s.getNavigableIndexes = nt;
var me = function(e, r) {
  var i = nt(e), t = 0;
  if (r > i[i.length - 1])
    r = i[i.length - 1];
  else
    for (var l in i) {
      if (r < i[l]) {
        r = t;
        break;
      }
      t = i[l];
    }
  return r;
};
s.checkNavigable = me;
var be = function(e) {
  var r = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
  if (e.swipeToSlide) {
    var i, t = e.listRef, l = t.querySelectorAll && t.querySelectorAll(".slick-slide") || [];
    if (Array.from(l).every(function(u) {
      if (e.vertical) {
        if (u.offsetTop + je(u) / 2 > e.swipeLeft * -1)
          return i = u, !1;
      } else if (u.offsetLeft - r + te(u) / 2 > e.swipeLeft * -1)
        return i = u, !1;
      return !0;
    }), !i)
      return 0;
    var a = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, o = Math.abs(i.dataset.index - a) || 1;
    return o;
  } else
    return e.slidesToScroll;
};
s.getSlideCount = be;
var ce = function(e, r) {
  return r.reduce(function(i, t) {
    return i && e.hasOwnProperty(t);
  }, !0) ? null : console.error("Keys Missing:", e);
};
s.checkSpecKeys = ce;
var V = function(e) {
  ce(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var r, i, t = e.slideCount + 2 * e.slidesToShow;
  e.vertical ? i = t * e.slideHeight : r = at(e) * e.slideWidth;
  var l = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };
  if (e.useTransform) {
    var a = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", o = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", u = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
    l = R(R({}, l), {}, {
      WebkitTransform: a,
      transform: o,
      msTransform: u
    });
  } else
    e.vertical ? l.top = e.left : l.left = e.left;
  return e.fade && (l = {
    opacity: 1
  }), r && (l.width = r), i && (l.height = i), window && !window.addEventListener && window.attachEvent && (e.vertical ? l.marginTop = e.left + "px" : l.marginLeft = e.left + "px"), l;
};
s.getTrackCSS = V;
var We = function(e) {
  ce(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var r = V(e);
  return e.useTransform ? (r.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, r.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? r.transition = "top " + e.speed + "ms " + e.cssEase : r.transition = "left " + e.speed + "ms " + e.cssEase, r;
};
s.getTrackAnimateCSS = We;
var J = function(e) {
  if (e.unslick)
    return 0;
  ce(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var r = e.slideIndex, i = e.trackRef, t = e.infinite, l = e.centerMode, a = e.slideCount, o = e.slidesToShow, u = e.slidesToScroll, f = e.slideWidth, h = e.listWidth, d = e.variableWidth, b = e.slideHeight, M = e.fade, k = e.vertical, p = 0, g, L, c = 0;
  if (M || e.slideCount === 1)
    return 0;
  var O = 0;
  if (t ? (O = -Q(e), a % u !== 0 && r + u > a && (O = -(r > a ? o - (r - a) : a % u)), l && (O += parseInt(o / 2))) : (a % u !== 0 && r + u > a && (O = o - a % u), l && (O = parseInt(o / 2))), p = O * f, c = O * b, k ? g = r * b * -1 + c : g = r * f * -1 + p, d === !0) {
    var C, x = i && i.node;
    if (C = r + Q(e), L = x && x.childNodes[C], g = L ? L.offsetLeft * -1 : 0, l === !0) {
      C = t ? r + Q(e) : r, L = x && x.children[C], g = 0;
      for (var D = 0; D < C; D++)
        g -= x && x.children[D] && x.children[D].offsetWidth;
      g -= parseInt(e.centerPadding), g += L && (h - L.offsetWidth) / 2;
    }
  }
  return g;
};
s.getTrackLeft = J;
var Q = function(e) {
  return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
};
s.getPreClones = Q;
var it = function(e) {
  return e.unslick || !e.infinite ? 0 : e.slideCount;
};
s.getPostClones = it;
var at = function(e) {
  return e.slideCount === 1 ? 1 : Q(e) + e.slideCount + it(e);
};
s.getTotalSlides = at;
var ot = function(e) {
  return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + lt(e) ? "left" : "right" : e.targetSlide < e.currentSlide - ut(e) ? "right" : "left";
};
s.siblingDirection = ot;
var lt = function(e) {
  var r = e.slidesToShow, i = e.centerMode, t = e.rtl, l = e.centerPadding;
  if (i) {
    var a = (r - 1) / 2 + 1;
    return parseInt(l) > 0 && (a += 1), t && r % 2 === 0 && (a += 1), a;
  }
  return t ? 0 : r - 1;
};
s.slidesOnRight = lt;
var ut = function(e) {
  var r = e.slidesToShow, i = e.centerMode, t = e.rtl, l = e.centerPadding;
  if (i) {
    var a = (r - 1) / 2 + 1;
    return parseInt(l) > 0 && (a += 1), !t && r % 2 === 0 && (a += 1), a;
  }
  return t ? r - 1 : 0;
};
s.slidesOnLeft = ut;
var Ht = function() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
};
s.canUseDOM = Ht;
var pe = {};
function Oe(n) {
  return Oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Oe(n);
}
Object.defineProperty(pe, "__esModule", {
  value: !0
});
pe.Track = void 0;
var A = st(window.React), ye = st(fe.exports), ge = s;
function st(n) {
  return n && n.__esModule ? n : { default: n };
}
function ke() {
  return ke = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }
    return n;
  }, ke.apply(this, arguments);
}
function It(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ae(n, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i);
  }
}
function Wt(n, e, r) {
  return e && Ae(n.prototype, e), r && Ae(n, r), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Nt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Pe(n, e);
}
function Pe(n, e) {
  return Pe = Object.setPrototypeOf || function(i, t) {
    return i.__proto__ = t, i;
  }, Pe(n, e);
}
function $t(n) {
  var e = qt();
  return function() {
    var i = re(n), t;
    if (e) {
      var l = re(this).constructor;
      t = Reflect.construct(i, arguments, l);
    } else
      t = i.apply(this, arguments);
    return At(this, t);
  };
}
function At(n, e) {
  if (e && (Oe(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Te(n);
}
function Te(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function qt() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function re(n) {
  return re = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, re(n);
}
function qe(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function W(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qe(Object(r), !0).forEach(function(i) {
      _e(n, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : qe(Object(r)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return n;
}
function _e(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
var Se = function(e) {
  var r, i, t, l, a;
  e.rtl ? a = e.slideCount - 1 - e.index : a = e.index, t = a < 0 || a >= e.slideCount, e.centerMode ? (l = Math.floor(e.slidesToShow / 2), i = (a - e.currentSlide) % e.slideCount === 0, a > e.currentSlide - l - 1 && a <= e.currentSlide + l && (r = !0)) : r = e.currentSlide <= a && a < e.currentSlide + e.slidesToShow;
  var o;
  e.targetSlide < 0 ? o = e.targetSlide + e.slideCount : e.targetSlide >= e.slideCount ? o = e.targetSlide - e.slideCount : o = e.targetSlide;
  var u = a === o;
  return {
    "slick-slide": !0,
    "slick-active": r,
    "slick-center": i,
    "slick-cloned": t,
    "slick-current": u
  };
}, Xt = function(e) {
  var r = {};
  return (e.variableWidth === void 0 || e.variableWidth === !1) && (r.width = e.slideWidth), e.fade && (r.position = "relative", e.vertical ? r.top = -e.index * parseInt(e.slideHeight) : r.left = -e.index * parseInt(e.slideWidth), r.opacity = e.currentSlide === e.index ? 1 : 0, e.useCSS && (r.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase)), r;
}, we = function(e, r) {
  return e.key || r;
}, Yt = function(e) {
  var r, i = [], t = [], l = [], a = A.default.Children.count(e.children), o = (0, ge.lazyStartIndex)(e), u = (0, ge.lazyEndIndex)(e);
  return A.default.Children.forEach(e.children, function(f, h) {
    var d, b = {
      message: "children",
      index: h,
      slidesToScroll: e.slidesToScroll,
      currentSlide: e.currentSlide
    };
    !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(h) >= 0 ? d = f : d = /* @__PURE__ */ A.default.createElement("div", null);
    var M = Xt(W(W({}, e), {}, {
      index: h
    })), k = d.props.className || "", p = Se(W(W({}, e), {}, {
      index: h
    }));
    if (i.push(/* @__PURE__ */ A.default.cloneElement(d, {
      key: "original" + we(d, h),
      "data-index": h,
      className: (0, ye.default)(p, k),
      tabIndex: "-1",
      "aria-hidden": !p["slick-active"],
      style: W(W({
        outline: "none"
      }, d.props.style || {}), M),
      onClick: function(c) {
        d.props && d.props.onClick && d.props.onClick(c), e.focusOnSelect && e.focusOnSelect(b);
      }
    })), e.infinite && e.fade === !1) {
      var g = a - h;
      g <= (0, ge.getPreClones)(e) && a !== e.slidesToShow && (r = -g, r >= o && (d = f), p = Se(W(W({}, e), {}, {
        index: r
      })), t.push(/* @__PURE__ */ A.default.cloneElement(d, {
        key: "precloned" + we(d, r),
        "data-index": r,
        tabIndex: "-1",
        className: (0, ye.default)(p, k),
        "aria-hidden": !p["slick-active"],
        style: W(W({}, d.props.style || {}), M),
        onClick: function(c) {
          d.props && d.props.onClick && d.props.onClick(c), e.focusOnSelect && e.focusOnSelect(b);
        }
      }))), a !== e.slidesToShow && (r = a + h, r < u && (d = f), p = Se(W(W({}, e), {}, {
        index: r
      })), l.push(/* @__PURE__ */ A.default.cloneElement(d, {
        key: "postcloned" + we(d, r),
        "data-index": r,
        tabIndex: "-1",
        className: (0, ye.default)(p, k),
        "aria-hidden": !p["slick-active"],
        style: W(W({}, d.props.style || {}), M),
        onClick: function(c) {
          d.props && d.props.onClick && d.props.onClick(c), e.focusOnSelect && e.focusOnSelect(b);
        }
      })));
    }
  }), e.rtl ? t.concat(i, l).reverse() : t.concat(i, l);
}, Ut = /* @__PURE__ */ function(n) {
  Nt(r, n);
  var e = $t(r);
  function r() {
    var i;
    It(this, r);
    for (var t = arguments.length, l = new Array(t), a = 0; a < t; a++)
      l[a] = arguments[a];
    return i = e.call.apply(e, [this].concat(l)), _e(Te(i), "node", null), _e(Te(i), "handleRef", function(o) {
      i.node = o;
    }), i;
  }
  return Wt(r, [{
    key: "render",
    value: function() {
      var t = Yt(this.props), l = this.props, a = l.onMouseEnter, o = l.onMouseOver, u = l.onMouseLeave, f = {
        onMouseEnter: a,
        onMouseOver: o,
        onMouseLeave: u
      };
      return /* @__PURE__ */ A.default.createElement("div", ke({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, f), t);
    }
  }]), r;
}(A.default.PureComponent);
pe.Track = Ut;
var ve = {};
function Le(n) {
  return Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Le(n);
}
Object.defineProperty(ve, "__esModule", {
  value: !0
});
ve.Dots = void 0;
var ee = ft(window.React), Ft = ft(fe.exports), Xe = s;
function ft(n) {
  return n && n.__esModule ? n : { default: n };
}
function Ye(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function Bt(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ye(Object(r), !0).forEach(function(i) {
      Kt(n, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Ye(Object(r)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return n;
}
function Kt(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function Gt(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ue(n, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i);
  }
}
function Qt(n, e, r) {
  return e && Ue(n.prototype, e), r && Ue(n, r), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Vt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Ce(n, e);
}
function Ce(n, e) {
  return Ce = Object.setPrototypeOf || function(i, t) {
    return i.__proto__ = t, i;
  }, Ce(n, e);
}
function Jt(n) {
  var e = tr();
  return function() {
    var i = ne(n), t;
    if (e) {
      var l = ne(this).constructor;
      t = Reflect.construct(i, arguments, l);
    } else
      t = i.apply(this, arguments);
    return Zt(this, t);
  };
}
function Zt(n, e) {
  if (e && (Le(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return er(n);
}
function er(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function tr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ne(n) {
  return ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ne(n);
}
var rr = function(e) {
  var r;
  return e.infinite ? r = Math.ceil(e.slideCount / e.slidesToScroll) : r = Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1, r;
}, nr = /* @__PURE__ */ function(n) {
  Vt(r, n);
  var e = Jt(r);
  function r() {
    return Gt(this, r), e.apply(this, arguments);
  }
  return Qt(r, [{
    key: "clickHandler",
    value: function(t, l) {
      l.preventDefault(), this.props.clickHandler(t);
    }
  }, {
    key: "render",
    value: function() {
      for (var t = this.props, l = t.onMouseEnter, a = t.onMouseOver, o = t.onMouseLeave, u = t.infinite, f = t.slidesToScroll, h = t.slidesToShow, d = t.slideCount, b = t.currentSlide, M = rr({
        slideCount: d,
        slidesToScroll: f,
        slidesToShow: h,
        infinite: u
      }), k = {
        onMouseEnter: l,
        onMouseOver: a,
        onMouseLeave: o
      }, p = [], g = 0; g < M; g++) {
        var L = (g + 1) * f - 1, c = u ? L : (0, Xe.clamp)(L, 0, d - 1), O = c - (f - 1), C = u ? O : (0, Xe.clamp)(O, 0, d - 1), x = (0, Ft.default)({
          "slick-active": u ? b >= C && b <= c : b === C
        }), D = {
          message: "dots",
          index: g,
          slidesToScroll: f,
          currentSlide: b
        }, I = this.clickHandler.bind(this, D);
        p = p.concat(/* @__PURE__ */ ee.default.createElement("li", {
          key: g,
          className: x
        }, /* @__PURE__ */ ee.default.cloneElement(this.props.customPaging(g), {
          onClick: I
        })));
      }
      return /* @__PURE__ */ ee.default.cloneElement(this.props.appendDots(p), Bt({
        className: this.props.dotsClass
      }, k));
    }
  }]), r;
}(ee.default.PureComponent);
ve.Dots = nr;
var K = {};
function Ee(n) {
  return Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ee(n);
}
Object.defineProperty(K, "__esModule", {
  value: !0
});
K.PrevArrow = K.NextArrow = void 0;
var B = ct(window.React), dt = ct(fe.exports), ir = s;
function ct(n) {
  return n && n.__esModule ? n : { default: n };
}
function ie() {
  return ie = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }
    return n;
  }, ie.apply(this, arguments);
}
function Fe(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function ae(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fe(Object(r), !0).forEach(function(i) {
      ar(n, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Fe(Object(r)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return n;
}
function ar(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function pt(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Be(n, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i);
  }
}
function vt(n, e, r) {
  return e && Be(n.prototype, e), r && Be(n, r), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function ht(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && xe(n, e);
}
function xe(n, e) {
  return xe = Object.setPrototypeOf || function(i, t) {
    return i.__proto__ = t, i;
  }, xe(n, e);
}
function yt(n) {
  var e = ur();
  return function() {
    var i = oe(n), t;
    if (e) {
      var l = oe(this).constructor;
      t = Reflect.construct(i, arguments, l);
    } else
      t = i.apply(this, arguments);
    return or(this, t);
  };
}
function or(n, e) {
  if (e && (Ee(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lr(n);
}
function lr(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function ur() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function oe(n) {
  return oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, oe(n);
}
var sr = /* @__PURE__ */ function(n) {
  ht(r, n);
  var e = yt(r);
  function r() {
    return pt(this, r), e.apply(this, arguments);
  }
  return vt(r, [{
    key: "clickHandler",
    value: function(t, l) {
      l && l.preventDefault(), this.props.clickHandler(t, l);
    }
  }, {
    key: "render",
    value: function() {
      var t = {
        "slick-arrow": !0,
        "slick-prev": !0
      }, l = this.clickHandler.bind(this, {
        message: "previous"
      });
      !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (t["slick-disabled"] = !0, l = null);
      var a = {
        key: "0",
        "data-role": "none",
        className: (0, dt.default)(t),
        style: {
          display: "block"
        },
        onClick: l
      }, o = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      }, u;
      return this.props.prevArrow ? u = /* @__PURE__ */ B.default.cloneElement(this.props.prevArrow, ae(ae({}, a), o)) : u = /* @__PURE__ */ B.default.createElement("button", ie({
        key: "0",
        type: "button"
      }, a), " ", "Previous"), u;
    }
  }]), r;
}(B.default.PureComponent);
K.PrevArrow = sr;
var fr = /* @__PURE__ */ function(n) {
  ht(r, n);
  var e = yt(r);
  function r() {
    return pt(this, r), e.apply(this, arguments);
  }
  return vt(r, [{
    key: "clickHandler",
    value: function(t, l) {
      l && l.preventDefault(), this.props.clickHandler(t, l);
    }
  }, {
    key: "render",
    value: function() {
      var t = {
        "slick-arrow": !0,
        "slick-next": !0
      }, l = this.clickHandler.bind(this, {
        message: "next"
      });
      (0, ir.canGoNext)(this.props) || (t["slick-disabled"] = !0, l = null);
      var a = {
        key: "1",
        "data-role": "none",
        className: (0, dt.default)(t),
        style: {
          display: "block"
        },
        onClick: l
      }, o = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      }, u;
      return this.props.nextArrow ? u = /* @__PURE__ */ B.default.cloneElement(this.props.nextArrow, ae(ae({}, a), o)) : u = /* @__PURE__ */ B.default.createElement("button", ie({
        key: "1",
        type: "button"
      }, a), " ", "Next"), u;
    }
  }]), r;
}(B.default.PureComponent);
K.NextArrow = fr;
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.InnerSlider = void 0;
var H = Z(window.React), dr = Z(Ze), cr = Z(mt), pr = Z(fe.exports), z = s, vr = pe, hr = ve, Ke = K, yr = Z(bt);
function Z(n) {
  return n && n.__esModule ? n : { default: n };
}
function le(n) {
  return le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, le(n);
}
function ue() {
  return ue = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }
    return n;
  }, ue.apply(this, arguments);
}
function gr(n, e) {
  if (n == null)
    return {};
  var r = Sr(n, e), i, t;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    for (t = 0; t < l.length; t++)
      i = l[t], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(n, i) || (r[i] = n[i]));
  }
  return r;
}
function Sr(n, e) {
  if (n == null)
    return {};
  var r = {}, i = Object.keys(n), t, l;
  for (l = 0; l < i.length; l++)
    t = i[l], !(e.indexOf(t) >= 0) && (r[t] = n[t]);
  return r;
}
function Ge(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function S(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ge(Object(r), !0).forEach(function(i) {
      _(n, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Ge(Object(r)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return n;
}
function wr(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Qe(n, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i);
  }
}
function mr(n, e, r) {
  return e && Qe(n.prototype, e), r && Qe(n, r), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function br(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Me(n, e);
}
function Me(n, e) {
  return Me = Object.setPrototypeOf || function(i, t) {
    return i.__proto__ = t, i;
  }, Me(n, e);
}
function Or(n) {
  var e = Pr();
  return function() {
    var i = se(n), t;
    if (e) {
      var l = se(this).constructor;
      t = Reflect.construct(i, arguments, l);
    } else
      t = i.apply(this, arguments);
    return kr(this, t);
  };
}
function kr(n, e) {
  if (e && (le(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return T(n);
}
function T(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Pr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function se(n) {
  return se = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, se(n);
}
function _(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
var Tr = /* @__PURE__ */ function(n) {
  br(r, n);
  var e = Or(r);
  function r(i) {
    var t;
    wr(this, r), t = e.call(this, i), _(T(t), "listRefHandler", function(a) {
      return t.list = a;
    }), _(T(t), "trackRefHandler", function(a) {
      return t.track = a;
    }), _(T(t), "adaptHeight", function() {
      if (t.props.adaptiveHeight && t.list) {
        var a = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
        t.list.style.height = (0, z.getHeight)(a) + "px";
      }
    }), _(T(t), "componentDidMount", function() {
      if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
        var a = (0, z.getOnDemandLazySlides)(S(S({}, t.props), t.state));
        a.length > 0 && (t.setState(function(u) {
          return {
            lazyLoadedList: u.lazyLoadedList.concat(a)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(a));
      }
      var o = S({
        listRef: t.list,
        trackRef: t.track
      }, t.props);
      t.updateState(o, !0, function() {
        t.adaptHeight(), t.props.autoplay && t.autoPlay("update");
      }), t.props.lazyLoad === "progressive" && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new yr.default(function() {
        t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(function() {
          return t.onWindowResized();
        }, t.props.speed))) : t.onWindowResized();
      }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(u) {
        u.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, u.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
      }), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized);
    }), _(T(t), "componentWillUnmount", function() {
      t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(a) {
        return clearTimeout(a);
      }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
    }), _(T(t), "componentDidUpdate", function(a) {
      if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
        var o = (0, z.getOnDemandLazySlides)(S(S({}, t.props), t.state));
        o.length > 0 && (t.setState(function(h) {
          return {
            lazyLoadedList: h.lazyLoadedList.concat(o)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(o));
      }
      t.adaptHeight();
      var u = S(S({
        listRef: t.list,
        trackRef: t.track
      }, t.props), t.state), f = t.didPropsChange(a);
      f && t.updateState(u, f, function() {
        t.state.currentSlide >= H.default.Children.count(t.props.children) && t.changeSlide({
          message: "index",
          index: H.default.Children.count(t.props.children) - t.props.slidesToShow,
          currentSlide: t.state.currentSlide
        }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
      });
    }), _(T(t), "onWindowResized", function(a) {
      t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, cr.default)(function() {
        return t.resizeWindow(a);
      }, 50), t.debouncedResize();
    }), _(T(t), "resizeWindow", function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, o = Boolean(t.track && t.track.node);
      if (!!o) {
        var u = S(S({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state);
        t.updateState(u, a, function() {
          t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        }), t.setState({
          animating: !1
        }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
      }
    }), _(T(t), "updateState", function(a, o, u) {
      var f = (0, z.initializedState)(a);
      a = S(S(S({}, a), f), {}, {
        slideIndex: f.currentSlide
      });
      var h = (0, z.getTrackLeft)(a);
      a = S(S({}, a), {}, {
        left: h
      });
      var d = (0, z.getTrackCSS)(a);
      (o || H.default.Children.count(t.props.children) !== H.default.Children.count(a.children)) && (f.trackStyle = d), t.setState(f, u);
    }), _(T(t), "ssrInit", function() {
      if (t.props.variableWidth) {
        var a = 0, o = 0, u = [], f = (0, z.getPreClones)(S(S(S({}, t.props), t.state), {}, {
          slideCount: t.props.children.length
        })), h = (0, z.getPostClones)(S(S(S({}, t.props), t.state), {}, {
          slideCount: t.props.children.length
        }));
        t.props.children.forEach(function(I) {
          u.push(I.props.style.width), a += I.props.style.width;
        });
        for (var d = 0; d < f; d++)
          o += u[u.length - 1 - d], a += u[u.length - 1 - d];
        for (var b = 0; b < h; b++)
          a += u[b];
        for (var M = 0; M < t.state.currentSlide; M++)
          o += u[M];
        var k = {
          width: a + "px",
          left: -o + "px"
        };
        if (t.props.centerMode) {
          var p = "".concat(u[t.state.currentSlide], "px");
          k.left = "calc(".concat(k.left, " + (100% - ").concat(p, ") / 2 ) ");
        }
        return {
          trackStyle: k
        };
      }
      var g = H.default.Children.count(t.props.children), L = S(S(S({}, t.props), t.state), {}, {
        slideCount: g
      }), c = (0, z.getPreClones)(L) + (0, z.getPostClones)(L) + g, O = 100 / t.props.slidesToShow * c, C = 100 / c, x = -C * ((0, z.getPreClones)(L) + t.state.currentSlide) * O / 100;
      t.props.centerMode && (x += (100 - C * O / 100) / 2);
      var D = {
        width: O + "%",
        left: x + "%"
      };
      return {
        slideWidth: C + "%",
        trackStyle: D
      };
    }), _(T(t), "checkImagesLoad", function() {
      var a = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], o = a.length, u = 0;
      Array.prototype.forEach.call(a, function(f) {
        var h = function() {
          return ++u && u >= o && t.onWindowResized();
        };
        if (!f.onclick)
          f.onclick = function() {
            return f.parentNode.focus();
          };
        else {
          var d = f.onclick;
          f.onclick = function() {
            d(), f.parentNode.focus();
          };
        }
        f.onload || (t.props.lazyLoad ? f.onload = function() {
          t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
        } : (f.onload = h, f.onerror = function() {
          h(), t.props.onLazyLoadError && t.props.onLazyLoadError();
        }));
      });
    }), _(T(t), "progressiveLazyLoad", function() {
      for (var a = [], o = S(S({}, t.props), t.state), u = t.state.currentSlide; u < t.state.slideCount + (0, z.getPostClones)(o); u++)
        if (t.state.lazyLoadedList.indexOf(u) < 0) {
          a.push(u);
          break;
        }
      for (var f = t.state.currentSlide - 1; f >= -(0, z.getPreClones)(o); f--)
        if (t.state.lazyLoadedList.indexOf(f) < 0) {
          a.push(f);
          break;
        }
      a.length > 0 ? (t.setState(function(h) {
        return {
          lazyLoadedList: h.lazyLoadedList.concat(a)
        };
      }), t.props.onLazyLoad && t.props.onLazyLoad(a)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
    }), _(T(t), "slideHandler", function(a) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = t.props, f = u.asNavFor, h = u.beforeChange, d = u.onLazyLoad, b = u.speed, M = u.afterChange, k = t.state.currentSlide, p = (0, z.slideHandler)(S(S(S({
        index: a
      }, t.props), t.state), {}, {
        trackRef: t.track,
        useCSS: t.props.useCSS && !o
      })), g = p.state, L = p.nextState;
      if (!!g) {
        h && h(k, g.currentSlide);
        var c = g.lazyLoadedList.filter(function(O) {
          return t.state.lazyLoadedList.indexOf(O) < 0;
        });
        d && c.length > 0 && d(c), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), M && M(k), delete t.animationEndCallback), t.setState(g, function() {
          f && t.asNavForIndex !== a && (t.asNavForIndex = a, f.innerSlider.slideHandler(a)), L && (t.animationEndCallback = setTimeout(function() {
            var O = L.animating, C = gr(L, ["animating"]);
            t.setState(C, function() {
              t.callbackTimers.push(setTimeout(function() {
                return t.setState({
                  animating: O
                });
              }, 10)), M && M(g.currentSlide), delete t.animationEndCallback;
            });
          }, b));
        });
      }
    }), _(T(t), "changeSlide", function(a) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = S(S({}, t.props), t.state), f = (0, z.changeSlide)(u, a);
      if (!(f !== 0 && !f) && (o === !0 ? t.slideHandler(f, o) : t.slideHandler(f), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
        var h = t.list.querySelectorAll(".slick-current");
        h[0] && h[0].focus();
      }
    }), _(T(t), "clickHandler", function(a) {
      t.clickable === !1 && (a.stopPropagation(), a.preventDefault()), t.clickable = !0;
    }), _(T(t), "keyHandler", function(a) {
      var o = (0, z.keyHandler)(a, t.props.accessibility, t.props.rtl);
      o !== "" && t.changeSlide({
        message: o
      });
    }), _(T(t), "selectHandler", function(a) {
      t.changeSlide(a);
    }), _(T(t), "disableBodyScroll", function() {
      var a = function(u) {
        u = u || window.event, u.preventDefault && u.preventDefault(), u.returnValue = !1;
      };
      window.ontouchmove = a;
    }), _(T(t), "enableBodyScroll", function() {
      window.ontouchmove = null;
    }), _(T(t), "swipeStart", function(a) {
      t.props.verticalSwiping && t.disableBodyScroll();
      var o = (0, z.swipeStart)(a, t.props.swipe, t.props.draggable);
      o !== "" && t.setState(o);
    }), _(T(t), "swipeMove", function(a) {
      var o = (0, z.swipeMove)(a, S(S(S({}, t.props), t.state), {}, {
        trackRef: t.track,
        listRef: t.list,
        slideIndex: t.state.currentSlide
      }));
      !o || (o.swiping && (t.clickable = !1), t.setState(o));
    }), _(T(t), "swipeEnd", function(a) {
      var o = (0, z.swipeEnd)(a, S(S(S({}, t.props), t.state), {}, {
        trackRef: t.track,
        listRef: t.list,
        slideIndex: t.state.currentSlide
      }));
      if (!!o) {
        var u = o.triggerSlideHandler;
        delete o.triggerSlideHandler, t.setState(o), u !== void 0 && (t.slideHandler(u), t.props.verticalSwiping && t.enableBodyScroll());
      }
    }), _(T(t), "touchEnd", function(a) {
      t.swipeEnd(a), t.clickable = !0;
    }), _(T(t), "slickPrev", function() {
      t.callbackTimers.push(setTimeout(function() {
        return t.changeSlide({
          message: "previous"
        });
      }, 0));
    }), _(T(t), "slickNext", function() {
      t.callbackTimers.push(setTimeout(function() {
        return t.changeSlide({
          message: "next"
        });
      }, 0));
    }), _(T(t), "slickGoTo", function(a) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (a = Number(a), isNaN(a))
        return "";
      t.callbackTimers.push(setTimeout(function() {
        return t.changeSlide({
          message: "index",
          index: a,
          currentSlide: t.state.currentSlide
        }, o);
      }, 0));
    }), _(T(t), "play", function() {
      var a;
      if (t.props.rtl)
        a = t.state.currentSlide - t.props.slidesToScroll;
      else if ((0, z.canGoNext)(S(S({}, t.props), t.state)))
        a = t.state.currentSlide + t.props.slidesToScroll;
      else
        return !1;
      t.slideHandler(a);
    }), _(T(t), "autoPlay", function(a) {
      t.autoplayTimer && clearInterval(t.autoplayTimer);
      var o = t.state.autoplaying;
      if (a === "update") {
        if (o === "hovered" || o === "focused" || o === "paused")
          return;
      } else if (a === "leave") {
        if (o === "paused" || o === "focused")
          return;
      } else if (a === "blur" && (o === "paused" || o === "hovered"))
        return;
      t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
        autoplaying: "playing"
      });
    }), _(T(t), "pause", function(a) {
      t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
      var o = t.state.autoplaying;
      a === "paused" ? t.setState({
        autoplaying: "paused"
      }) : a === "focused" ? (o === "hovered" || o === "playing") && t.setState({
        autoplaying: "focused"
      }) : o === "playing" && t.setState({
        autoplaying: "hovered"
      });
    }), _(T(t), "onDotsOver", function() {
      return t.props.autoplay && t.pause("hovered");
    }), _(T(t), "onDotsLeave", function() {
      return t.props.autoplay && t.state.autoplaying === "hovered" && t.autoPlay("leave");
    }), _(T(t), "onTrackOver", function() {
      return t.props.autoplay && t.pause("hovered");
    }), _(T(t), "onTrackLeave", function() {
      return t.props.autoplay && t.state.autoplaying === "hovered" && t.autoPlay("leave");
    }), _(T(t), "onSlideFocus", function() {
      return t.props.autoplay && t.pause("focused");
    }), _(T(t), "onSlideBlur", function() {
      return t.props.autoplay && t.state.autoplaying === "focused" && t.autoPlay("blur");
    }), _(T(t), "render", function() {
      var a = (0, pr.default)("slick-slider", t.props.className, {
        "slick-vertical": t.props.vertical,
        "slick-initialized": !0
      }), o = S(S({}, t.props), t.state), u = (0, z.extractObject)(o, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), f = t.props.pauseOnHover;
      u = S(S({}, u), {}, {
        onMouseEnter: f ? t.onTrackOver : null,
        onMouseLeave: f ? t.onTrackLeave : null,
        onMouseOver: f ? t.onTrackOver : null,
        focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
      });
      var h;
      if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
        var d = (0, z.extractObject)(o, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), b = t.props.pauseOnDotsHover;
        d = S(S({}, d), {}, {
          clickHandler: t.changeSlide,
          onMouseEnter: b ? t.onDotsLeave : null,
          onMouseOver: b ? t.onDotsOver : null,
          onMouseLeave: b ? t.onDotsLeave : null
        }), h = /* @__PURE__ */ H.default.createElement(hr.Dots, d);
      }
      var M, k, p = (0, z.extractObject)(o, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      p.clickHandler = t.changeSlide, t.props.arrows && (M = /* @__PURE__ */ H.default.createElement(Ke.PrevArrow, p), k = /* @__PURE__ */ H.default.createElement(Ke.NextArrow, p));
      var g = null;
      t.props.vertical && (g = {
        height: t.state.listHeight
      });
      var L = null;
      t.props.vertical === !1 ? t.props.centerMode === !0 && (L = {
        padding: "0px " + t.props.centerPadding
      }) : t.props.centerMode === !0 && (L = {
        padding: t.props.centerPadding + " 0px"
      });
      var c = S(S({}, g), L), O = t.props.touchMove, C = {
        className: "slick-list",
        style: c,
        onClick: t.clickHandler,
        onMouseDown: O ? t.swipeStart : null,
        onMouseMove: t.state.dragging && O ? t.swipeMove : null,
        onMouseUp: O ? t.swipeEnd : null,
        onMouseLeave: t.state.dragging && O ? t.swipeEnd : null,
        onTouchStart: O ? t.swipeStart : null,
        onTouchMove: t.state.dragging && O ? t.swipeMove : null,
        onTouchEnd: O ? t.touchEnd : null,
        onTouchCancel: t.state.dragging && O ? t.swipeEnd : null,
        onKeyDown: t.props.accessibility ? t.keyHandler : null
      }, x = {
        className: a,
        dir: "ltr",
        style: t.props.style
      };
      return t.props.unslick && (C = {
        className: "slick-list"
      }, x = {
        className: a
      }), /* @__PURE__ */ H.default.createElement("div", x, t.props.unslick ? "" : M, /* @__PURE__ */ H.default.createElement("div", ue({
        ref: t.listRefHandler
      }, C), /* @__PURE__ */ H.default.createElement(vr.Track, ue({
        ref: t.trackRefHandler
      }, u), t.props.children)), t.props.unslick ? "" : k, t.props.unslick ? "" : h);
    }), t.list = null, t.track = null, t.state = S(S({}, dr.default), {}, {
      currentSlide: t.props.initialSlide,
      slideCount: H.default.Children.count(t.props.children)
    }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
    var l = t.ssrInit();
    return t.state = S(S({}, t.state), l), t;
  }
  return mr(r, [{
    key: "didPropsChange",
    value: function(t) {
      for (var l = !1, a = 0, o = Object.keys(this.props); a < o.length; a++) {
        var u = o[a];
        if (!t.hasOwnProperty(u)) {
          l = !0;
          break;
        }
        if (!(le(t[u]) === "object" || typeof t[u] == "function") && t[u] !== this.props[u]) {
          l = !0;
          break;
        }
      }
      return l || H.default.Children.count(this.props.children) !== H.default.Children.count(t.children);
    }
  }]), r;
}(H.default.Component);
de.InnerSlider = Tr;
var gt = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = void 0;
  var e = r(window.React);
  function r(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var i = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function(a) {
      return /* @__PURE__ */ e.default.createElement("ul", {
        style: {
          display: "block"
        }
      }, a);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function(a) {
      return /* @__PURE__ */ e.default.createElement("button", null, a + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0
  }, t = i;
  n.default = t;
})(gt);
(function(n) {
  function e(v) {
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
      return typeof y;
    } : function(y) {
      return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
    }, e(v);
  }
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = void 0;
  var r = o(window.React), i = de, t = o(Ot), l = o(gt), a = s;
  function o(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function u() {
    return u = Object.assign || function(v) {
      for (var y = 1; y < arguments.length; y++) {
        var P = arguments[y];
        for (var E in P)
          Object.prototype.hasOwnProperty.call(P, E) && (v[E] = P[E]);
      }
      return v;
    }, u.apply(this, arguments);
  }
  function f(v, y) {
    var P = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var E = Object.getOwnPropertySymbols(v);
      y && (E = E.filter(function(m) {
        return Object.getOwnPropertyDescriptor(v, m).enumerable;
      })), P.push.apply(P, E);
    }
    return P;
  }
  function h(v) {
    for (var y = 1; y < arguments.length; y++) {
      var P = arguments[y] != null ? arguments[y] : {};
      y % 2 ? f(Object(P), !0).forEach(function(E) {
        x(v, E, P[E]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(P)) : f(Object(P)).forEach(function(E) {
        Object.defineProperty(v, E, Object.getOwnPropertyDescriptor(P, E));
      });
    }
    return v;
  }
  function d(v, y) {
    if (!(v instanceof y))
      throw new TypeError("Cannot call a class as a function");
  }
  function b(v, y) {
    for (var P = 0; P < y.length; P++) {
      var E = y[P];
      E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(v, E.key, E);
    }
  }
  function M(v, y, P) {
    return y && b(v.prototype, y), P && b(v, P), Object.defineProperty(v, "prototype", { writable: !1 }), v;
  }
  function k(v, y) {
    if (typeof y != "function" && y !== null)
      throw new TypeError("Super expression must either be null or a function");
    v.prototype = Object.create(y && y.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), Object.defineProperty(v, "prototype", { writable: !1 }), y && p(v, y);
  }
  function p(v, y) {
    return p = Object.setPrototypeOf || function(E, m) {
      return E.__proto__ = m, E;
    }, p(v, y);
  }
  function g(v) {
    var y = O();
    return function() {
      var E = C(v), m;
      if (y) {
        var w = C(this).constructor;
        m = Reflect.construct(E, arguments, w);
      } else
        m = E.apply(this, arguments);
      return L(this, m);
    };
  }
  function L(v, y) {
    if (y && (e(y) === "object" || typeof y == "function"))
      return y;
    if (y !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return c(v);
  }
  function c(v) {
    if (v === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return v;
  }
  function O() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function C(v) {
    return C = Object.setPrototypeOf ? Object.getPrototypeOf : function(P) {
      return P.__proto__ || Object.getPrototypeOf(P);
    }, C(v);
  }
  function x(v, y, P) {
    return y in v ? Object.defineProperty(v, y, { value: P, enumerable: !0, configurable: !0, writable: !0 }) : v[y] = P, v;
  }
  var D = (0, a.canUseDOM)() && kt(), I = /* @__PURE__ */ function(v) {
    k(P, v);
    var y = g(P);
    function P(E) {
      var m;
      return d(this, P), m = y.call(this, E), x(c(m), "innerSliderRefHandler", function(w) {
        return m.innerSlider = w;
      }), x(c(m), "slickPrev", function() {
        return m.innerSlider.slickPrev();
      }), x(c(m), "slickNext", function() {
        return m.innerSlider.slickNext();
      }), x(c(m), "slickGoTo", function(w) {
        var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return m.innerSlider.slickGoTo(w, q);
      }), x(c(m), "slickPause", function() {
        return m.innerSlider.pause("paused");
      }), x(c(m), "slickPlay", function() {
        return m.innerSlider.autoPlay("play");
      }), m.state = {
        breakpoint: null
      }, m._responsiveMediaHandlers = [], m;
    }
    return M(P, [{
      key: "media",
      value: function(m, w) {
        D.register(m, w), this._responsiveMediaHandlers.push({
          query: m,
          handler: w
        });
      }
    }, {
      key: "componentDidMount",
      value: function() {
        var m = this;
        if (this.props.responsive) {
          var w = this.props.responsive.map(function(j) {
            return j.breakpoint;
          });
          w.sort(function(j, N) {
            return j - N;
          }), w.forEach(function(j, N) {
            var U;
            N === 0 ? U = (0, t.default)({
              minWidth: 0,
              maxWidth: j
            }) : U = (0, t.default)({
              minWidth: w[N - 1] + 1,
              maxWidth: j
            }), (0, a.canUseDOM)() && m.media(U, function() {
              m.setState({
                breakpoint: j
              });
            });
          });
          var q = (0, t.default)({
            minWidth: w.slice(-1)[0]
          });
          (0, a.canUseDOM)() && this.media(q, function() {
            m.setState({
              breakpoint: null
            });
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this._responsiveMediaHandlers.forEach(function(m) {
          D.unregister(m.query, m.handler);
        });
      }
    }, {
      key: "render",
      value: function() {
        var m = this, w, q;
        this.state.breakpoint ? (q = this.props.responsive.filter(function(G) {
          return G.breakpoint === m.state.breakpoint;
        }), w = q[0].settings === "unslick" ? "unslick" : h(h(h({}, l.default), this.props), q[0].settings)) : w = h(h({}, l.default), this.props), w.centerMode && (w.slidesToScroll > 1, w.slidesToScroll = 1), w.fade && (w.slidesToShow > 1, w.slidesToScroll > 1, w.slidesToShow = 1, w.slidesToScroll = 1);
        var j = r.default.Children.toArray(this.props.children);
        j = j.filter(function(G) {
          return typeof G == "string" ? !!G.trim() : !!G;
        }), w.variableWidth && (w.rows > 1 || w.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), w.variableWidth = !1);
        for (var N = [], U = null, $ = 0; $ < j.length; $ += w.rows * w.slidesPerRow) {
          for (var he = [], F = $; F < $ + w.rows * w.slidesPerRow; F += w.slidesPerRow) {
            for (var Ne = [], X = F; X < F + w.slidesPerRow && (w.variableWidth && j[X].props.style && (U = j[X].props.style.width), !(X >= j.length)); X += 1)
              Ne.push(/* @__PURE__ */ r.default.cloneElement(j[X], {
                key: 100 * $ + 10 * F + X,
                tabIndex: -1,
                style: {
                  width: "".concat(100 / w.slidesPerRow, "%"),
                  display: "inline-block"
                }
              }));
            he.push(/* @__PURE__ */ r.default.createElement("div", {
              key: 10 * $ + F
            }, Ne));
          }
          w.variableWidth ? N.push(/* @__PURE__ */ r.default.createElement("div", {
            key: $,
            style: {
              width: U
            }
          }, he)) : N.push(/* @__PURE__ */ r.default.createElement("div", {
            key: $
          }, he));
        }
        if (w === "unslick") {
          var St = "regular slider " + (this.props.className || "");
          return /* @__PURE__ */ r.default.createElement("div", {
            className: St
          }, j);
        } else
          N.length <= w.slidesToShow && (w.unslick = !0);
        return /* @__PURE__ */ r.default.createElement(i.InnerSlider, u({
          style: this.props.style,
          ref: this.innerSliderRefHandler
        }, w), N);
      }
    }]), P;
  }(r.default.Component);
  n.default = I;
})(Je);
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = void 0;
  var e = r(Je);
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  var i = e.default;
  n.default = i;
})(Ve);
const Rr = /* @__PURE__ */ wt(Ve);
export {
  Rr as S
};
//# sourceMappingURL=react-slick.88ab9fca.js.map
