const Ir = "5";
var Qt;
typeof window < "u" && ((Qt = window.__svelte ?? (window.__svelte = {})).v ?? (Qt.v = /* @__PURE__ */ new Set())).add(Ir);
let et = !1, Nr = !1;
function Dr() {
  et = !0;
}
Dr();
const Rr = 1, kr = 2, Xt = 4, Lr = 8, Cr = 16, xr = 2, N = Symbol(), Mr = "http://www.w3.org/1999/xhtml", qt = !1;
var kt = Array.isArray, Fr = Array.prototype.indexOf, jr = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, tr = Object.getOwnPropertyDescriptors, qr = Object.prototype, Br = Array.prototype, Lt = Object.getPrototypeOf;
function Ur(t) {
  return t();
}
function Pt(t) {
  for (var r = 0; r < t.length; r++)
    t[r]();
}
const x = 2, rr = 4, Ct = 8, xt = 16, Z = 32, nt = 64, at = 128, R = 256, ct = 512, L = 1024, B = 2048, G = 4096, er = 8192, pt = 16384, Vr = 32768, Yr = 1 << 17, zr = 1 << 19, nr = 1 << 20, It = 1 << 21, W = Symbol("$state"), Hr = Symbol("legacy props"), Kr = Symbol("");
function Gr(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Wr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Zr(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function $r() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Jr(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Qr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function te() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function H(t) {
  if (typeof t != "object" || t === null || W in t)
    return t;
  const r = Lt(t);
  if (r !== qr && r !== Br)
    return t;
  var e = /* @__PURE__ */ new Map(), n = kt(t), l = /* @__PURE__ */ V(0), i = h, f = (o) => {
    var u = h;
    j(i);
    var s = o();
    return j(u), s;
  };
  return n && e.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, u, s) {
        (!("value" in s) || s.configurable === !1 || s.enumerable === !1 || s.writable === !1) && Qr();
        var v = e.get(u);
        return v === void 0 ? (v = f(() => /* @__PURE__ */ V(s.value)), e.set(u, v)) : M(
          v,
          f(() => H(s.value))
        ), !0;
      },
      deleteProperty(o, u) {
        var s = e.get(u);
        if (s === void 0)
          u in o && (e.set(
            u,
            f(() => /* @__PURE__ */ V(N))
          ), Tt(l));
        else {
          if (n && typeof u == "string") {
            var v = (
              /** @type {Source<number>} */
              e.get("length")
            ), a = Number(u);
            Number.isInteger(a) && a < v.v && M(v, a);
          }
          M(s, N), Tt(l);
        }
        return !0;
      },
      get(o, u, s) {
        var b;
        if (u === W)
          return t;
        var v = e.get(u), a = u in o;
        if (v === void 0 && (!a || (b = ut(o, u)) != null && b.writable) && (v = f(() => /* @__PURE__ */ V(H(a ? o[u] : N))), e.set(u, v)), v !== void 0) {
          var c = P(v);
          return c === N ? void 0 : c;
        }
        return Reflect.get(o, u, s);
      },
      getOwnPropertyDescriptor(o, u) {
        var s = Reflect.getOwnPropertyDescriptor(o, u);
        if (s && "value" in s) {
          var v = e.get(u);
          v && (s.value = P(v));
        } else if (s === void 0) {
          var a = e.get(u), c = a == null ? void 0 : a.v;
          if (a !== void 0 && c !== N)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return s;
      },
      has(o, u) {
        var c;
        if (u === W)
          return !0;
        var s = e.get(u), v = s !== void 0 && s.v !== N || Reflect.has(o, u);
        if (s !== void 0 || p !== null && (!v || (c = ut(o, u)) != null && c.writable)) {
          s === void 0 && (s = f(() => /* @__PURE__ */ V(v ? H(o[u]) : N)), e.set(u, s));
          var a = P(s);
          if (a === N)
            return !1;
        }
        return v;
      },
      set(o, u, s, v) {
        var _;
        var a = e.get(u), c = u in o;
        if (n && u === "length")
          for (var b = s; b < /** @type {Source<number>} */
          a.v; b += 1) {
            var S = e.get(b + "");
            S !== void 0 ? M(S, N) : b in o && (S = f(() => /* @__PURE__ */ V(N)), e.set(b + "", S));
          }
        a === void 0 ? (!c || (_ = ut(o, u)) != null && _.writable) && (a = f(() => /* @__PURE__ */ V(void 0)), M(
          a,
          f(() => H(s))
        ), e.set(u, a)) : (c = a.v !== N, M(
          a,
          f(() => H(s))
        ));
        var y = Reflect.getOwnPropertyDescriptor(o, u);
        if (y != null && y.set && y.set.call(v, s), !c) {
          if (n && typeof u == "string") {
            var g = (
              /** @type {Source<number>} */
              e.get("length")
            ), C = Number(u);
            Number.isInteger(C) && C >= g.v && M(g, C + 1);
          }
          Tt(l);
        }
        return !0;
      },
      ownKeys(o) {
        P(l);
        var u = Reflect.ownKeys(o).filter((a) => {
          var c = e.get(a);
          return c === void 0 || c.v !== N;
        });
        for (var [s, v] of e)
          v.v !== N && !(s in o) && u.push(s);
        return u;
      },
      setPrototypeOf() {
        Xr();
      }
    }
  );
}
function Tt(t, r = 1) {
  M(t, t.v + r);
}
var re, ee, ne;
// @__NO_SIDE_EFFECTS__
function ir(t) {
  return ee.call(t);
}
// @__NO_SIDE_EFFECTS__
function ie(t) {
  return ne.call(t);
}
function le(t, r) {
  return /* @__PURE__ */ ir(t);
}
function lr(t) {
  return t === this.v;
}
function ue(t, r) {
  return t != t ? r == r : t !== r || t !== null && typeof t == "object" || typeof t == "function";
}
function Mt(t) {
  return !ue(t, this.v);
}
// @__NO_SIDE_EFFECTS__
function tt(t) {
  var r = x | B, e = h !== null && (h.f & x) !== 0 ? (
    /** @type {Derived} */
    h
  ) : null;
  return p === null || e !== null && (e.f & R) !== 0 ? r |= R : p.f |= nr, {
    ctx: E,
    deps: null,
    effects: null,
    equals: lr,
    f: r,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: e ?? p
  };
}
// @__NO_SIDE_EFFECTS__
function ur(t) {
  const r = /* @__PURE__ */ tt(t);
  return r.equals = Mt, r;
}
function fr(t) {
  var r = t.effects;
  if (r !== null) {
    t.effects = null;
    for (var e = 0; e < r.length; e += 1)
      bt(
        /** @type {Effect} */
        r[e]
      );
  }
}
function fe(t) {
  for (var r = t.parent; r !== null; ) {
    if ((r.f & x) === 0)
      return (
        /** @type {Effect} */
        r
      );
    r = r.parent;
  }
  return null;
}
function sr(t) {
  var r, e = p;
  z(fe(t));
  try {
    fr(t), r = yr(t);
  } finally {
    z(e);
  }
  return r;
}
function or(t) {
  var r = sr(t), e = (Y || (t.f & R) !== 0) && t.deps !== null ? G : L;
  q(t, e), t.equals(r) || (t.v = r, t.wv = br());
}
function ar(t) {
  p === null && h === null && Zr(), h !== null && (h.f & R) !== 0 && p === null && Wr(), it && Gr();
}
function se(t, r) {
  var e = r.last;
  e === null ? r.last = r.first = t : (e.next = t, t.prev = e, r.last = t);
}
function gt(t, r, e, n = !0) {
  var l = p, i = {
    ctx: E,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | B,
    first: null,
    fn: r,
    last: null,
    next: null,
    parent: l,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (e)
    try {
      Ft(i), i.f |= Vr;
    } catch (u) {
      throw bt(i), u;
    }
  else r !== null && jt(i);
  var f = e && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (nr | at)) === 0;
  if (!f && n && (l !== null && se(i, l), h !== null && (h.f & x) !== 0)) {
    var o = (
      /** @type {Derived} */
      h
    );
    (o.effects ?? (o.effects = [])).push(i);
  }
  return i;
}
function cr(t) {
  const r = gt(Ct, null, !1);
  return q(r, L), r.teardown = t, r;
}
function Bt(t) {
  ar();
  var r = p !== null && (p.f & Z) !== 0 && E !== null && !E.m;
  if (r) {
    var e = (
      /** @type {ComponentContext} */
      E
    );
    (e.e ?? (e.e = [])).push({
      fn: t,
      effect: p,
      reaction: h
    });
  } else {
    var n = vr(t);
    return n;
  }
}
function oe(t) {
  return ar(), ae(t);
}
function vr(t) {
  return gt(rr, t, !1);
}
function ae(t) {
  return gt(Ct, t, !0);
}
function ce(t, r = [], e = tt) {
  const n = r.map(e);
  return ve(() => t(...n.map(P)));
}
function ve(t, r = 0) {
  return gt(Ct | xt | r, t, !0);
}
function _r(t) {
  var r = t.teardown;
  if (r !== null) {
    const e = it, n = h;
    Ut(!0), j(null);
    try {
      r.call(null);
    } finally {
      Ut(e), j(n);
    }
  }
}
function dr(t, r = !1) {
  var e = t.first;
  for (t.first = t.last = null; e !== null; ) {
    var n = e.next;
    (e.f & nt) !== 0 ? e.parent = null : bt(e, r), e = n;
  }
}
function _e(t) {
  for (var r = t.first; r !== null; ) {
    var e = r.next;
    (r.f & Z) === 0 && bt(r), r = e;
  }
}
function bt(t, r = !0) {
  var e = !1;
  (r || (t.f & zr) !== 0) && t.nodes_start !== null && (de(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), e = !0), dr(t, r && !e), ht(t, 0), q(t, pt);
  var n = t.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  _r(t);
  var l = t.parent;
  l !== null && l.first !== null && hr(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function de(t, r) {
  for (; t !== null; ) {
    var e = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ie(t)
    );
    t.remove(), t = e;
  }
}
function hr(t) {
  var r = t.parent, e = t.prev, n = t.next;
  e !== null && (e.next = n), n !== null && (n.prev = e), r !== null && (r.first === t && (r.first = n), r.last === t && (r.last = e));
}
let vt = [];
function he() {
  var t = vt;
  vt = [], Pt(t);
}
function pr(t) {
  vt.length === 0 && queueMicrotask(he), vt.push(t);
}
let ft = !1, Nt = !1, _t = null, K = !1, it = !1;
function Ut(t) {
  it = t;
}
let st = [];
let h = null, F = !1;
function j(t) {
  h = t;
}
let p = null;
function z(t) {
  p = t;
}
let I = null;
function pe(t) {
  h !== null && h.f & It && (I === null ? I = [t] : I.push(t));
}
let m = null, D = 0, k = null;
function ge(t) {
  k = t;
}
let gr = 1, dt = 0, Y = !1;
function br() {
  return ++gr;
}
function wt(t) {
  var a;
  var r = t.f;
  if ((r & B) !== 0)
    return !0;
  if ((r & G) !== 0) {
    var e = t.deps, n = (r & R) !== 0;
    if (e !== null) {
      var l, i, f = (r & ct) !== 0, o = n && p !== null && !Y, u = e.length;
      if (f || o) {
        var s = (
          /** @type {Derived} */
          t
        ), v = s.parent;
        for (l = 0; l < u; l++)
          i = e[l], (f || !((a = i == null ? void 0 : i.reactions) != null && a.includes(s))) && (i.reactions ?? (i.reactions = [])).push(s);
        f && (s.f ^= ct), o && v !== null && (v.f & R) === 0 && (s.f ^= R);
      }
      for (l = 0; l < u; l++)
        if (i = e[l], wt(
          /** @type {Derived} */
          i
        ) && or(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
    }
    (!n || p !== null && !Y) && q(t, L);
  }
  return !1;
}
function be(t, r) {
  for (var e = r; e !== null; ) {
    if ((e.f & at) !== 0)
      try {
        e.fn(t);
        return;
      } catch {
        e.f ^= at;
      }
    e = e.parent;
  }
  throw ft = !1, t;
}
function Vt(t) {
  return (t.f & pt) === 0 && (t.parent === null || (t.parent.f & at) === 0);
}
function yt(t, r, e, n) {
  if (ft) {
    if (e === null && (ft = !1), Vt(r))
      throw t;
    return;
  }
  if (e !== null && (ft = !0), be(t, r), Vt(r))
    throw t;
}
function wr(t, r, e = !0) {
  var n = t.reactions;
  if (n !== null)
    for (var l = 0; l < n.length; l++) {
      var i = n[l];
      I != null && I.includes(t) || ((i.f & x) !== 0 ? wr(
        /** @type {Derived} */
        i,
        r,
        !1
      ) : r === i && (e ? q(i, B) : (i.f & L) !== 0 && q(i, G), jt(
        /** @type {Effect} */
        i
      )));
    }
}
function yr(t) {
  var b;
  var r = m, e = D, n = k, l = h, i = Y, f = I, o = E, u = F, s = t.f;
  m = /** @type {null | Value[]} */
  null, D = 0, k = null, Y = (s & R) !== 0 && (F || !K || h === null), h = (s & (Z | nt)) === 0 ? t : null, I = null, zt(t.ctx), F = !1, dt++, t.f |= It;
  try {
    var v = (
      /** @type {Function} */
      (0, t.fn)()
    ), a = t.deps;
    if (m !== null) {
      var c;
      if (ht(t, D), a !== null && D > 0)
        for (a.length = D + m.length, c = 0; c < m.length; c++)
          a[D + c] = m[c];
      else
        t.deps = a = m;
      if (!Y)
        for (c = D; c < a.length; c++)
          ((b = a[c]).reactions ?? (b.reactions = [])).push(t);
    } else a !== null && D < a.length && (ht(t, D), a.length = D);
    if (At() && k !== null && !F && a !== null && (t.f & (x | G | B)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      k.length; c++)
        wr(
          k[c],
          /** @type {Effect} */
          t
        );
    return l !== null && l !== t && (dt++, k !== null && (n === null ? n = k : n.push(.../** @type {Source[]} */
    k))), v;
  } finally {
    m = r, D = e, k = n, h = l, Y = i, I = f, zt(o), F = u, t.f ^= It;
  }
}
function we(t, r) {
  let e = r.reactions;
  if (e !== null) {
    var n = Fr.call(e, t);
    if (n !== -1) {
      var l = e.length - 1;
      l === 0 ? e = r.reactions = null : (e[n] = e[l], e.pop());
    }
  }
  e === null && (r.f & x) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (m === null || !m.includes(r)) && (q(r, G), (r.f & (R | ct)) === 0 && (r.f ^= ct), fr(
    /** @type {Derived} **/
    r
  ), ht(
    /** @type {Derived} **/
    r,
    0
  ));
}
function ht(t, r) {
  var e = t.deps;
  if (e !== null)
    for (var n = r; n < e.length; n++)
      we(t, e[n]);
}
function Ft(t) {
  var r = t.f;
  if ((r & pt) === 0) {
    q(t, L);
    var e = p, n = E, l = K;
    p = t, K = !0;
    try {
      (r & xt) !== 0 ? _e(t) : dr(t), _r(t);
      var i = yr(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = gr;
      var f = t.deps, o;
      qt && Nr && t.f & B;
    } catch (u) {
      yt(u, t, e, n || t.ctx);
    } finally {
      K = l, p = e;
    }
  }
}
function ye() {
  try {
    $r();
  } catch (t) {
    if (_t !== null)
      yt(t, _t, null);
    else
      throw t;
  }
}
function Ee() {
  var t = K;
  try {
    var r = 0;
    for (K = !0; st.length > 0; ) {
      r++ > 1e3 && ye();
      var e = st, n = e.length;
      st = [];
      for (var l = 0; l < n; l++) {
        var i = Se(e[l]);
        Ae(i);
      }
      rt.clear();
    }
  } finally {
    Nt = !1, K = t, _t = null;
  }
}
function Ae(t) {
  var r = t.length;
  if (r !== 0)
    for (var e = 0; e < r; e++) {
      var n = t[e];
      if ((n.f & (pt | er)) === 0)
        try {
          wt(n) && (Ft(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? hr(n) : n.fn = null));
        } catch (l) {
          yt(l, n, null, n.ctx);
        }
    }
}
function jt(t) {
  Nt || (Nt = !0, queueMicrotask(Ee));
  for (var r = _t = t; r.parent !== null; ) {
    r = r.parent;
    var e = r.f;
    if ((e & (nt | Z)) !== 0) {
      if ((e & L) === 0) return;
      r.f ^= L;
    }
  }
  st.push(r);
}
function Se(t) {
  for (var r = [], e = t; e !== null; ) {
    var n = e.f, l = (n & (Z | nt)) !== 0, i = l && (n & L) !== 0;
    if (!i && (n & er) === 0) {
      if ((n & rr) !== 0)
        r.push(e);
      else if (l)
        e.f ^= L;
      else
        try {
          wt(e) && Ft(e);
        } catch (u) {
          yt(u, e, null, e.ctx);
        }
      var f = e.first;
      if (f !== null) {
        e = f;
        continue;
      }
    }
    var o = e.parent;
    for (e = e.next; e === null && o !== null; )
      e = o.next, o = o.parent;
  }
  return r;
}
function P(t) {
  var r = t.f, e = (r & x) !== 0;
  if (h !== null && !F) {
    if (!(I != null && I.includes(t))) {
      var n = h.deps;
      t.rv < dt && (t.rv = dt, m === null && n !== null && n[D] === t ? D++ : m === null ? m = [t] : (!Y || !m.includes(t)) && m.push(t));
    }
  } else if (e && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var l = (
      /** @type {Derived} */
      t
    ), i = l.parent;
    i !== null && (i.f & R) === 0 && (l.f ^= R);
  }
  return e && (l = /** @type {Derived} */
  t, wt(l) && or(l)), it && rt.has(t) ? rt.get(t) : t.v;
}
function Dt(t) {
  var r = F;
  try {
    return F = !0, t();
  } finally {
    F = r;
  }
}
const Te = -7169;
function q(t, r) {
  t.f = t.f & Te | r;
}
function Oe(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (W in t)
      Rt(t);
    else if (!Array.isArray(t))
      for (let r in t) {
        const e = t[r];
        typeof e == "object" && e && W in e && Rt(e);
      }
  }
}
function Rt(t, r = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !r.has(t)) {
    r.add(t), t instanceof Date && t.getTime();
    for (let n in t)
      try {
        Rt(t[n], r);
      } catch {
      }
    const e = Lt(t);
    if (e !== Object.prototype && e !== Array.prototype && e !== Map.prototype && e !== Set.prototype && e !== Date.prototype) {
      const n = tr(e);
      for (let l in n) {
        const i = n[l].get;
        if (i)
          try {
            i.call(t);
          } catch {
          }
      }
    }
  }
}
const rt = /* @__PURE__ */ new Map();
function Et(t, r) {
  var e = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: lr,
    rv: 0,
    wv: 0
  };
  return e;
}
// @__NO_SIDE_EFFECTS__
function V(t, r) {
  const e = Et(t);
  return pe(e), e;
}
// @__NO_SIDE_EFFECTS__
function me(t, r = !1) {
  var n;
  const e = Et(t);
  return r || (e.equals = Mt), et && E !== null && E.l !== null && ((n = E.l).s ?? (n.s = [])).push(e), e;
}
function M(t, r, e = !1) {
  h !== null && !F && At() && (h.f & (x | xt)) !== 0 && !(I != null && I.includes(t)) && te();
  let n = e ? H(r) : r;
  return Pe(t, n);
}
function Pe(t, r) {
  if (!t.equals(r)) {
    var e = t.v;
    it ? rt.set(t, r) : rt.set(t, e), t.v = r, (t.f & x) !== 0 && ((t.f & B) !== 0 && sr(
      /** @type {Derived} */
      t
    ), q(t, (t.f & R) === 0 ? L : G)), t.wv = br(), Er(t, B), At() && p !== null && (p.f & L) !== 0 && (p.f & (Z | nt)) === 0 && (k === null ? ge([t]) : k.push(t));
  }
  return r;
}
function Yt(t, r = 1) {
  var e = P(t), n = r === 1 ? e++ : e--;
  return M(t, e), n;
}
function Er(t, r) {
  var e = t.reactions;
  if (e !== null)
    for (var n = At(), l = e.length, i = 0; i < l; i++) {
      var f = e[i], o = f.f;
      (o & B) === 0 && (!n && f === p || (q(f, r), (o & (L | R)) !== 0 && ((o & x) !== 0 ? Er(
        /** @type {Derived} */
        f,
        G
      ) : jt(
        /** @type {Effect} */
        f
      ))));
    }
}
let E = null;
function zt(t) {
  E = t;
}
function Ie(t, r = !1, e) {
  var n = E = {
    p: E,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
  et && !r && (E.l = {
    s: null,
    u: null,
    r1: [],
    r2: Et(!1)
  }), cr(() => {
    n.d = !0;
  });
}
function Ne(t) {
  const r = E;
  if (r !== null) {
    const f = r.e;
    if (f !== null) {
      var e = p, n = h;
      r.e = null;
      try {
        for (var l = 0; l < f.length; l++) {
          var i = f[l];
          z(i.effect), j(i.reaction), vr(i.fn);
        }
      } finally {
        z(e), j(n);
      }
    }
    E = r.p, r.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function At() {
  return !et || E !== null && E.l === null;
}
function De(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Re = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function ke(t) {
  return Re.includes(t);
}
const Le = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Ce(t) {
  return t = t.toLowerCase(), Le[t] ?? t;
}
function xe(t, r) {
  if (r) {
    const e = document.body;
    t.autofocus = !0, pr(() => {
      document.activeElement === e && t.focus();
    });
  }
}
function Me(t) {
  var r = h, e = p;
  j(null), z(null);
  try {
    return t();
  } finally {
    j(r), z(e);
  }
}
const Fe = /* @__PURE__ */ new Set(), je = /* @__PURE__ */ new Set();
function Ar(t, r, e, n = {}) {
  function l(i) {
    if (n.capture || Be.call(r, i), !i.cancelBubble)
      return Me(() => e == null ? void 0 : e.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? pr(() => {
    r.addEventListener(t, l, n);
  }) : r.addEventListener(t, l, n), l;
}
function $(t, r, e, n, l) {
  var i = { capture: n, passive: l }, f = Ar(t, r, e, i);
  (r === document.body || r === window || r === document) && cr(() => {
    r.removeEventListener(t, f, i);
  });
}
function qe(t) {
  for (var r = 0; r < t.length; r++)
    Fe.add(t[r]);
  for (var e of je)
    e(t);
}
function Be(t) {
  var _;
  var r = this, e = (
    /** @type {Node} */
    r.ownerDocument
  ), n = t.type, l = ((_ = t.composedPath) == null ? void 0 : _.call(t)) || [], i = (
    /** @type {null | Element} */
    l[0] || t.target
  ), f = 0, o = t.__root;
  if (o) {
    var u = l.indexOf(o);
    if (u !== -1 && (r === document || r === /** @type {any} */
    window)) {
      t.__root = r;
      return;
    }
    var s = l.indexOf(r);
    if (s === -1)
      return;
    u <= s && (f = u);
  }
  if (i = /** @type {Element} */
  l[f] || t.target, i !== r) {
    jr(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || e;
      }
    });
    var v = h, a = p;
    j(null), z(null);
    try {
      for (var c, b = []; i !== null; ) {
        var S = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + n];
          if (y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i))
            if (kt(y)) {
              var [g, ...C] = y;
              g.apply(i, [t, ...C]);
            } else
              y.call(i, t);
        } catch (d) {
          c ? b.push(d) : c = d;
        }
        if (t.cancelBubble || S === r || S === null)
          break;
        i = S;
      }
      if (c) {
        for (let d of b)
          queueMicrotask(() => {
            throw d;
          });
        throw c;
      }
    } finally {
      t.__root = r, delete t.currentTarget, j(v), z(a);
    }
  }
}
function Ue(t) {
  var r = document.createElement("template");
  return r.innerHTML = t, r.content;
}
function Ve(t, r) {
  var e = (
    /** @type {Effect} */
    p
  );
  e.nodes_start === null && (e.nodes_start = t, e.nodes_end = r);
}
// @__NO_SIDE_EFFECTS__
function Ye(t, r) {
  var e = (r & xr) !== 0, n, l = !t.startsWith("<!>");
  return () => {
    n === void 0 && (n = Ue(l ? t : "<!>" + t), n = /** @type {Node} */
    /* @__PURE__ */ ir(n));
    var i = (
      /** @type {TemplateNode} */
      e || re ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Ve(i, i), i;
  };
}
function ze(t, r) {
  t !== null && t.before(
    /** @type {Node} */
    r
  );
}
function He(t, r, e, n, l) {
  var o;
  var i = (o = r.$$slots) == null ? void 0 : o[e], f = !1;
  i === !0 && (i = r.children, f = !0), i === void 0 || i(t, f ? () => n : n);
}
function Sr(t) {
  var r, e, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var l = t.length;
    for (r = 0; r < l; r++) t[r] && (e = Sr(t[r])) && (n && (n += " "), n += e);
  } else for (e in t) t[e] && (n && (n += " "), n += e);
  return n;
}
function Ke() {
  for (var t, r, e = 0, n = "", l = arguments.length; e < l; e++) (t = arguments[e]) && (r = Sr(t)) && (n && (n += " "), n += r);
  return n;
}
function Ge(t) {
  return typeof t == "object" ? Ke(t) : t ?? "";
}
const Ht = [...` 	
\r\f \v\uFEFF`];
function We(t, r, e) {
  var n = t == null ? "" : "" + t;
  if (e) {
    for (var l in e)
      if (e[l])
        n = n ? n + " " + l : l;
      else if (n.length)
        for (var i = l.length, f = 0; (f = n.indexOf(l, f)) >= 0; ) {
          var o = f + i;
          (f === 0 || Ht.includes(n[f - 1])) && (o === n.length || Ht.includes(n[o])) ? n = (f === 0 ? "" : n.substring(0, f)) + n.substring(o + 1) : f = o;
        }
  }
  return n === "" ? null : n;
}
function Kt(t, r = !1) {
  var e = r ? " !important;" : ";", n = "";
  for (var l in t) {
    var i = t[l];
    i != null && i !== "" && (n += " " + l + ": " + i + e);
  }
  return n;
}
function Ot(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Ze(t, r) {
  if (r) {
    var e = "", n, l;
    if (Array.isArray(r) ? (n = r[0], l = r[1]) : n = r, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, f = 0, o = !1, u = [];
      n && u.push(...Object.keys(n).map(Ot)), l && u.push(...Object.keys(l).map(Ot));
      var s = 0, v = -1;
      const y = t.length;
      for (var a = 0; a < y; a++) {
        var c = t[a];
        if (o ? c === "/" && t[a - 1] === "*" && (o = !1) : i ? i === c && (i = !1) : c === "/" && t[a + 1] === "*" ? o = !0 : c === '"' || c === "'" ? i = c : c === "(" ? f++ : c === ")" && f--, !o && i === !1 && f === 0) {
          if (c === ":" && v === -1)
            v = a;
          else if (c === ";" || a === y - 1) {
            if (v !== -1) {
              var b = Ot(t.substring(s, v).trim());
              if (!u.includes(b)) {
                c !== ";" && a++;
                var S = t.substring(s, a).trim();
                e += " " + S + ";";
              }
            }
            s = a + 1, v = -1;
          }
        }
      }
    }
    return n && (e += Kt(n)), l && (e += Kt(l, !0)), e = e.trim(), e === "" ? null : e;
  }
  return t == null ? null : String(t);
}
function $e(t, r, e, n, l, i) {
  var f = t.__className;
  if (f !== e || f === void 0) {
    var o = We(e, n, i);
    o == null ? t.removeAttribute("class") : r ? t.className = o : t.setAttribute("class", o), t.__className = e;
  } else if (i && l !== i)
    for (var u in i) {
      var s = !!i[u];
      (l == null || s !== !!l[u]) && t.classList.toggle(u, s);
    }
  return i;
}
function mt(t, r = {}, e, n) {
  for (var l in e) {
    var i = e[l];
    r[l] !== i && (e[l] == null ? t.style.removeProperty(l) : t.style.setProperty(l, i, n));
  }
}
function Je(t, r, e, n) {
  var l = t.__style;
  if (l !== r) {
    var i = Ze(r, n);
    i == null ? t.removeAttribute("style") : t.style.cssText = i, t.__style = r;
  } else n && (Array.isArray(n) ? (mt(t, e == null ? void 0 : e[0], n[0]), mt(t, e == null ? void 0 : e[1], n[1], "important")) : mt(t, e, n));
  return n;
}
const J = Symbol("class"), Q = Symbol("style"), Tr = Symbol("is custom element"), Or = Symbol("is html");
function Qe(t, r) {
  r ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Gt(t, r, e, n) {
  var l = mr(t);
  l[r] !== (l[r] = e) && (r === "loading" && (t[Kr] = e), e == null ? t.removeAttribute(r) : typeof e != "string" && Pr(t).includes(r) ? t[r] = e : t.setAttribute(r, e));
}
function Xe(t, r, e, n, l = !1) {
  var i = mr(t), f = i[Tr], o = !i[Or], u = r || {}, s = t.tagName === "OPTION";
  for (var v in r)
    v in e || (e[v] = null);
  e.class ? e.class = Ge(e.class) : e[J] && (e.class = null), e[Q] && (e.style ?? (e.style = null));
  var a = Pr(t);
  for (const _ in e) {
    let d = e[_];
    if (s && _ === "value" && d == null) {
      t.value = t.__value = "", u[_] = d;
      continue;
    }
    if (_ === "class") {
      var c = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      $e(t, c, d, n, r == null ? void 0 : r[J], e[J]), u[_] = d, u[J] = e[J];
      continue;
    }
    if (_ === "style") {
      Je(t, d, r == null ? void 0 : r[Q], e[Q]), u[_] = d, u[Q] = e[Q];
      continue;
    }
    var b = u[_];
    if (d !== b) {
      u[_] = d;
      var S = _[0] + _[1];
      if (S !== "$$")
        if (S === "on") {
          const T = {}, O = "$$" + _;
          let A = _.slice(2);
          var y = ke(A);
          if (De(A) && (A = A.slice(0, -7), T.capture = !0), !y && b) {
            if (d != null) continue;
            t.removeEventListener(A, u[O], T), u[O] = null;
          }
          if (d != null)
            if (y)
              t[`__${A}`] = d, qe([A]);
            else {
              let w = function(U) {
                u[_].call(this, U);
              };
              u[O] = Ar(A, t, w, T);
            }
          else y && (t[`__${A}`] = void 0);
        } else if (_ === "style")
          Gt(t, _, d);
        else if (_ === "autofocus")
          xe(
            /** @type {HTMLElement} */
            t,
            !!d
          );
        else if (!f && (_ === "__value" || _ === "value" && d != null))
          t.value = t.__value = d;
        else if (_ === "selected" && s)
          Qe(
            /** @type {HTMLOptionElement} */
            t,
            d
          );
        else {
          var g = _;
          o || (g = Ce(g));
          var C = g === "defaultValue" || g === "defaultChecked";
          if (d == null && !f && !C)
            if (i[_] = null, g === "value" || g === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                t
              );
              const O = r === void 0;
              if (g === "value") {
                let A = T.defaultValue;
                T.removeAttribute(g), T.defaultValue = A, T.value = T.__value = O ? A : null;
              } else {
                let A = T.defaultChecked;
                T.removeAttribute(g), T.defaultChecked = A, T.checked = O ? A : !1;
              }
            } else
              t.removeAttribute(_);
          else C || a.includes(g) && (f || typeof d != "string") ? t[g] = d : typeof d != "function" && Gt(t, g, d);
        }
    }
  }
  return u;
}
function mr(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Tr]: t.nodeName.includes("-"),
      [Or]: t.namespaceURI === Mr
    })
  );
}
var Wt = /* @__PURE__ */ new Map();
function Pr(t) {
  var r = Wt.get(t.nodeName);
  if (r) return r;
  Wt.set(t.nodeName, r = []);
  for (var e, n = t, l = Element.prototype; l !== n; ) {
    e = tr(n);
    for (var i in e)
      e[i].set && r.push(i);
    n = Lt(n);
  }
  return r;
}
function tn(t = !1) {
  const r = (
    /** @type {ComponentContextLegacy} */
    E
  ), e = r.l.u;
  if (!e) return;
  let n = () => Oe(r.s);
  if (t) {
    let l = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const f = /* @__PURE__ */ tt(() => {
      let o = !1;
      const u = r.s;
      for (const s in u)
        u[s] !== i[s] && (i[s] = u[s], o = !0);
      return o && l++, l;
    });
    n = () => P(f);
  }
  e.b.length && oe(() => {
    Zt(r, n), Pt(e.b);
  }), Bt(() => {
    const l = Dt(() => e.m.map(Ur));
    return () => {
      for (const i of l)
        typeof i == "function" && i();
    };
  }), e.a.length && Bt(() => {
    Zt(r, n), Pt(e.a);
  });
}
function Zt(t, r) {
  if (t.l.s)
    for (const e of t.l.s) P(e);
  r();
}
function X(t, r) {
  var i;
  var e = (
    /** @type {Record<string, Function[] | Function>} */
    (i = t.$$events) == null ? void 0 : i[r.type]
  ), n = kt(e) ? e.slice() : e == null ? [] : [e];
  for (var l of n)
    l.call(this, r);
}
let lt = !1;
function rn(t) {
  var r = lt;
  try {
    return lt = !1, [t(), lt];
  } finally {
    lt = r;
  }
}
const en = {
  get(t, r) {
    if (!t.exclude.includes(r))
      return P(t.version), r in t.special ? t.special[r]() : t.props[r];
  },
  set(t, r, e) {
    return r in t.special || (t.special[r] = ot(
      {
        get [r]() {
          return t.props[r];
        }
      },
      /** @type {string} */
      r,
      Xt
    )), t.special[r](e), Yt(t.version), !0;
  },
  getOwnPropertyDescriptor(t, r) {
    if (!t.exclude.includes(r) && r in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[r]
      };
  },
  deleteProperty(t, r) {
    return t.exclude.includes(r) || (t.exclude.push(r), Yt(t.version)), !0;
  },
  has(t, r) {
    return t.exclude.includes(r) ? !1 : r in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((r) => !t.exclude.includes(r));
  }
};
function $t(t, r) {
  return new Proxy({ props: t, exclude: r, special: {}, version: Et(0) }, en);
}
function Jt(t) {
  var r;
  return ((r = t.ctx) == null ? void 0 : r.d) ?? !1;
}
function ot(t, r, e, n) {
  var A;
  var l = (e & Rr) !== 0, i = !et || (e & kr) !== 0, f = (e & Lr) !== 0, o = (e & Cr) !== 0, u = !1, s;
  f ? [s, u] = rn(() => (
    /** @type {V} */
    t[r]
  )) : s = /** @type {V} */
  t[r];
  var v = W in t || Hr in t, a = f && (((A = ut(t, r)) == null ? void 0 : A.set) ?? (v && r in t && ((w) => t[r] = w))) || void 0, c = (
    /** @type {V} */
    n
  ), b = !0, S = !1, y = () => (S = !0, b && (b = !1, o ? c = Dt(
    /** @type {() => V} */
    n
  ) : c = /** @type {V} */
  n), c);
  s === void 0 && n !== void 0 && (a && i && Jr(), s = y(), a && a(s));
  var g;
  if (i)
    g = () => {
      var w = (
        /** @type {V} */
        t[r]
      );
      return w === void 0 ? y() : (b = !0, S = !1, w);
    };
  else {
    var C = (l ? tt : ur)(
      () => (
        /** @type {V} */
        t[r]
      )
    );
    C.f |= Yr, g = () => {
      var w = P(C);
      return w !== void 0 && (c = /** @type {V} */
      void 0), w === void 0 ? c : w;
    };
  }
  if ((e & Xt) === 0)
    return g;
  if (a) {
    var _ = t.$$legacy;
    return function(w, U) {
      return arguments.length > 0 ? ((!i || !U || _ || u) && a(U ? g() : w), w) : g();
    };
  }
  var d = !1, T = /* @__PURE__ */ me(s), O = /* @__PURE__ */ tt(() => {
    var w = g(), U = P(T);
    return d ? (d = !1, U) : T.v = w;
  });
  return f && P(O), l || (O.equals = Mt), function(w, U) {
    if (arguments.length > 0) {
      const St = U ? P(O) : i && f ? H(w) : w;
      if (!O.equals(St)) {
        if (d = !0, M(T, St), S && c !== void 0 && (c = St), Jt(O))
          return w;
        Dt(() => P(O));
      }
      return w;
    }
    return Jt(O) ? O.v : P(O);
  };
}
function nn(...t) {
  return t.filter(Boolean).join(" ");
}
function un() {
  return Math.random().toString(36).substring(2, 9);
}
var ln = /* @__PURE__ */ Ye("<button><!></button>");
function fn(t, r) {
  const e = $t(r, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), n = $t(e, ["variant", "size", "class"]);
  Ie(r, !1);
  let l = ot(r, "variant", 8, "default"), i = ot(r, "size", 8, "default");
  const f = {
    base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10"
      }
    }
  };
  let o = ot(r, "class", 8, "");
  tn();
  var u = ln();
  let s;
  var v = le(u);
  He(v, r, "default", {}), ce(
    (a) => s = Xe(u, s, { class: a, ...n }),
    [
      () => nn(f.base, l() ? f.variants.variant[l()] : "", i() ? f.variants.size[i()] : "", o())
    ],
    ur
  ), $("click", u, function(a) {
    X.call(this, r, a);
  }), $("keydown", u, function(a) {
    X.call(this, r, a);
  }), $("keyup", u, function(a) {
    X.call(this, r, a);
  }), $("mouseenter", u, function(a) {
    X.call(this, r, a);
  }), $("mouseleave", u, function(a) {
    X.call(this, r, a);
  }), ze(t, u), Ne();
}
export {
  fn as Button,
  nn as cn,
  un as generateId
};
//# sourceMappingURL=index.js.map
