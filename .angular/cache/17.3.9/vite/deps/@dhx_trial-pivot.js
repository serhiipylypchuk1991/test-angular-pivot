import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/@dhx/trial-pivot/dist/pivot.es.js
function K() {
}
function Ee(l, e) {
  for (const t in e)
    l[t] = e[t];
  return (
    /** @type {T & S} */
    l
  );
}
function Mi(l) {
  return l();
}
function Wn() {
  return /* @__PURE__ */ Object.create(null);
}
function Ae(l) {
  l.forEach(Mi);
}
function Ye(l) {
  return typeof l == "function";
}
function $(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function Eo(l) {
  return Object.keys(l).length === 0;
}
function Ri(l, ...e) {
  if (l == null) {
    for (const n of e)
      n(void 0);
    return K;
  }
  const t = l.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function De(l, e, t) {
  l.$$.on_destroy.push(Ri(e, t));
}
function pe(l, e, t, n) {
  if (l) {
    const i = Di(l, e, t, n);
    return l[0](i);
  }
}
function Di(l, e, t, n) {
  return l[1] && n ? Ee(t.ctx.slice(), l[1](n(e))) : t.ctx;
}
function be(l, e, t, n) {
  if (l[2] && n) {
    const i = l[2](n(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const o = [], s = Math.max(e.dirty.length, i.length);
      for (let r = 0; r < s; r += 1)
        o[r] = e.dirty[r] | i[r];
      return o;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function we(l, e, t, n, i, o) {
  if (i) {
    const s = Di(e, t, n, o);
    l.p(s, i);
  }
}
function ye(l) {
  if (l.ctx.length > 32) {
    const e = [], t = l.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Fe(l) {
  const e = {};
  for (const t in l)
    t[0] !== "$" && (e[t] = l[t]);
  return e;
}
function Pe(l) {
  return l ?? "";
}
function ze(l) {
  return l && Ye(l.destroy) ? l.destroy : K;
}
function I(l, e) {
  l.appendChild(e);
}
function O(l, e, t) {
  l.insertBefore(e, t || null);
}
function E(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function Nt(l, e) {
  for (let t = 0; t < l.length; t += 1)
    l[t] && l[t].d(e);
}
function F(l) {
  return document.createElement(l);
}
function Oo(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function ie(l) {
  return document.createTextNode(l);
}
function J() {
  return ie(" ");
}
function he() {
  return ie("");
}
function Q(l, e, t, n) {
  return l.addEventListener(e, t, n), () => l.removeEventListener(e, t, n);
}
function $t(l) {
  return function(e) {
    return e.stopPropagation(), l.call(this, e);
  };
}
function b(l, e, t) {
  t == null ? l.removeAttribute(e) : l.getAttribute(e) !== t && l.setAttribute(e, t);
}
function Ei(l) {
  return l === "" ? null : +l;
}
function Ao(l) {
  return Array.from(l.childNodes);
}
function de(l, e) {
  e = "" + e, l.data !== e && (l.data = /** @type {string} */
  e);
}
function Ue(l, e) {
  l.value = e ?? "";
}
function ue(l, e, t, n) {
  t == null ? l.style.removeProperty(e) : l.style.setProperty(e, t, "");
}
function se(l, e, t) {
  l.classList.toggle(e, !!t);
}
function Ho(l, e, { bubbles: t = false, cancelable: n = false } = {}) {
  return new CustomEvent(l, { detail: e, bubbles: t, cancelable: n });
}
var No = class {
  /**
   * @private
   * @default false
   */
  is_svg = false;
  /** parent for creating node */
  e = void 0;
  /** html tag nodes */
  n = void 0;
  /** target */
  t = void 0;
  /** anchor */
  a = void 0;
  constructor(e = false) {
    this.is_svg = e, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(e) {
    this.h(e);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(e, t, n = null) {
    this.e || (this.is_svg ? this.e = Oo(
      /** @type {keyof SVGElementTagNameMap} */
      t.nodeName
    ) : this.e = F(
      /** @type {keyof HTMLElementTagNameMap} */
      t.nodeType === 11 ? "TEMPLATE" : t.nodeName
    ), this.t = t.tagName !== "TEMPLATE" ? t : (
      /** @type {HTMLTemplateElement} */
      t.content
    ), this.c(e)), this.i(n);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(e) {
    for (let t = 0; t < this.n.length; t += 1)
      O(this.t, this.n[t], e);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(E);
  }
};
function Le(l, e) {
  return new l(e);
}
var Et;
function Dt(l) {
  Et = l;
}
function _t() {
  if (!Et)
    throw new Error("Function called outside component initialization");
  return Et;
}
function Je(l) {
  _t().$$.on_mount.push(l);
}
function An(l) {
  _t().$$.after_update.push(l);
}
function Fo(l) {
  _t().$$.on_destroy.push(l);
}
function He() {
  const l = _t();
  return (e, t, { cancelable: n = false } = {}) => {
    const i = l.$$.callbacks[e];
    if (i) {
      const o = Ho(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return i.slice().forEach((s) => {
        s.call(l, o);
      }), !o.defaultPrevented;
    }
    return true;
  };
}
function Gt(l, e) {
  return _t().$$.context.set(l, e), e;
}
function Oe(l) {
  return _t().$$.context.get(l);
}
function Ne(l, e) {
  const t = l.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
var dt = [];
var ge = [];
var ht = [];
var yn = [];
var To = Promise.resolve();
var kn = false;
function Lo() {
  kn || (kn = true, To.then(Oi));
}
function vn(l) {
  ht.push(l);
}
function $e(l) {
  yn.push(l);
}
var gn = /* @__PURE__ */ new Set();
var st = 0;
function Oi() {
  if (st !== 0)
    return;
  const l = Et;
  do {
    try {
      for (; st < dt.length; ) {
        const e = dt[st];
        st++, Dt(e), zo(e.$$);
      }
    } catch (e) {
      throw dt.length = 0, st = 0, e;
    }
    for (Dt(null), dt.length = 0, st = 0; ge.length; )
      ge.pop()();
    for (let e = 0; e < ht.length; e += 1) {
      const t = ht[e];
      gn.has(t) || (gn.add(t), t());
    }
    ht.length = 0;
  } while (dt.length);
  for (; yn.length; )
    yn.pop()();
  kn = false, gn.clear(), Dt(l);
}
function zo(l) {
  if (l.fragment !== null) {
    l.update(), Ae(l.before_update);
    const e = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, e), l.after_update.forEach(vn);
  }
}
function Io(l) {
  const e = [], t = [];
  ht.forEach((n) => l.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ht = e;
}
var Yt = /* @__PURE__ */ new Set();
var lt;
function Z() {
  lt = {
    r: 0,
    c: [],
    p: lt
    // parent group
  };
}
function x() {
  lt.r || Ae(lt.c), lt = lt.p;
}
function w(l, e) {
  l && l.i && (Yt.delete(l), l.i(e));
}
function k(l, e, t, n) {
  if (l && l.o) {
    if (Yt.has(l))
      return;
    Yt.add(l), lt.c.push(() => {
      Yt.delete(l), n && (t && l.d(1), n());
    }), l.o(e);
  } else
    n && n();
}
function ke(l) {
  return l?.length !== void 0 ? l : Array.from(l);
}
function qo(l, e) {
  l.d(1), e.delete(l.key);
}
function gt(l, e) {
  k(l, 1, 1, () => {
    e.delete(l.key);
  });
}
function it(l, e, t, n, i, o, s, r, a, f, u, c) {
  let d = l.length, h = o.length, m = d;
  const _ = {};
  for (; m--; )
    _[l[m].key] = m;
  const g = [], C = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), D = [];
  for (m = h; m--; ) {
    const v = c(i, o, m), M = t(v);
    let z = s.get(M);
    z ? D.push(() => z.p(v, e)) : (z = f(M, v), z.c()), C.set(M, g[m] = z), M in _ && S.set(M, Math.abs(m - _[M]));
  }
  const p = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
  function R(v) {
    w(v, 1), v.m(r, u), s.set(v.key, v), u = v.first, h--;
  }
  for (; d && h; ) {
    const v = g[h - 1], M = l[d - 1], z = v.key, H = M.key;
    v === M ? (u = v.first, d--, h--) : C.has(H) ? !s.has(z) || p.has(z) ? R(v) : y.has(H) ? d-- : S.get(z) > S.get(H) ? (y.add(z), R(v)) : (p.add(H), d--) : (a(M, s), d--);
  }
  for (; d--; ) {
    const v = l[d];
    C.has(v.key) || a(v, s);
  }
  for (; h; )
    R(g[h - 1]);
  return Ae(D), g;
}
function Ai(l, e) {
  const t = {}, n = {}, i = { $$scope: 1 };
  let o = l.length;
  for (; o--; ) {
    const s = l[o], r = e[o];
    if (r) {
      for (const a in s)
        a in r || (n[a] = 1);
      for (const a in r)
        i[a] || (t[a] = r[a], i[a] = 1);
      l[o] = r;
    } else
      for (const a in s)
        i[a] = 1;
  }
  for (const s in n)
    s in t || (t[s] = void 0);
  return t;
}
function Hi(l) {
  return typeof l == "object" && l !== null ? l : {};
}
function et(l, e, t) {
  const n = l.$$.props[e];
  n !== void 0 && (l.$$.bound[n] = t, t(l.$$.ctx[n]));
}
function V(l) {
  l && l.c();
}
function W(l, e, t) {
  const { fragment: n, after_update: i } = l.$$;
  n && n.m(e, t), vn(() => {
    const o = l.$$.on_mount.map(Mi).filter(Ye);
    l.$$.on_destroy ? l.$$.on_destroy.push(...o) : Ae(o), l.$$.on_mount = [];
  }), i.forEach(vn);
}
function B(l, e) {
  const t = l.$$;
  t.fragment !== null && (Io(t.after_update), Ae(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Po(l, e) {
  l.$$.dirty[0] === -1 && (dt.push(l), Lo(), l.$$.dirty.fill(0)), l.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(l, e, t, n, i, o, s = null, r = [-1]) {
  const a = Et;
  Dt(l);
  const f = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: K,
    not_equal: i,
    bound: Wn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Wn(),
    dirty: r,
    skip_bound: false,
    root: e.target || a.$$.root
  };
  s && s(f.root);
  let u = false;
  if (f.ctx = t ? t(l, e.props || {}, (c, d, ...h) => {
    const m = h.length ? h[0] : d;
    return f.ctx && i(f.ctx[c], f.ctx[c] = m) && (!f.skip_bound && f.bound[c] && f.bound[c](m), u && Po(l, c)), d;
  }) : [], f.update(), u = true, Ae(f.before_update), f.fragment = n ? n(f.ctx) : false, e.target) {
    if (e.hydrate) {
      const c = Ao(e.target);
      f.fragment && f.fragment.l(c), c.forEach(E);
    } else
      f.fragment && f.fragment.c();
    e.intro && w(l.$$.fragment), W(l, e.target, e.anchor), Oi();
  }
  Dt(a);
}
var te = class {
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$ = void 0;
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$set = void 0;
  /** @returns {void} */
  $destroy() {
    B(this, 1), this.$destroy = K;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ye(t))
      return K;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const i = n.indexOf(t);
      i !== -1 && n.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Eo(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
  }
};
var jo = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(jo);
var rt = [];
function Ni(l, e = K) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if ($(l, r) && (l = r, t)) {
      const a = !rt.length;
      for (const f of n)
        f[1](), rt.push(f, l);
      if (a) {
        for (let f = 0; f < rt.length; f += 2)
          rt[f][0](rt[f + 1]);
        rt.length = 0;
      }
    }
  }
  function o(r) {
    i(r(l));
  }
  function s(r, a = K) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i, o) || K), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
var Wo = (/* @__PURE__ */ new Date()).valueOf();
var Bo = () => Wo++;
var Vo = class {
  constructor(e) {
    this._nextHandler = null, this._dispatch = e, this.exec = this.exec.bind(this);
  }
  exec(e, t) {
    return __async(this, null, function* () {
      return this._dispatch(e, t), this._nextHandler && (yield this._nextHandler.exec(e, t)), t;
    });
  }
  setNext(e) {
    return this._nextHandler = e;
  }
};
var Yo = (/* @__PURE__ */ new Date()).valueOf();
var Bn = () => Yo++;
function Go(l, e) {
  if (Object.keys(l).length !== Object.keys(e).length)
    return false;
  for (const t in e) {
    const n = l[t], i = e[t];
    if (!Ut(n, i))
      return false;
  }
  return true;
}
function Ut(l, e) {
  if (typeof l == "number" || typeof l == "string" || typeof l == "boolean" || l === null)
    return l === e;
  if (typeof l != typeof e || (l === null || e === null) && l !== e || l instanceof Date && e instanceof Date && l.getTime() !== e.getTime())
    return false;
  if (typeof l == "object")
    if (Array.isArray(l) && Array.isArray(e)) {
      if (l.length !== e.length)
        return false;
      for (let t = l.length - 1; t >= 0; t--)
        if (!Ut(l[t], e[t]))
          return false;
      return true;
    } else
      return Go(l, e);
  return l === e;
}
function Sn(l) {
  if (typeof l != "object" || l === null)
    return l;
  if (l instanceof Date)
    return new Date(l);
  if (l instanceof Array)
    return l.map(Sn);
  const e = {};
  for (const t in l)
    e[t] = Sn(l[t]);
  return e;
}
var Fi = 2;
var Uo = class {
  constructor(e) {
    e && (this._writable = e.writable, this._async = e.async), this._values = {}, this._state = {};
  }
  setState(e, t = 0) {
    const n = {};
    return this._wrapProperties(
      e,
      this._state,
      this._values,
      "",
      n,
      t
    ), n;
  }
  getState() {
    return this._values;
  }
  getReactive() {
    return this._state;
  }
  _wrapProperties(e, t, n, i, o, s) {
    for (const r in e) {
      const a = t[r], f = n[r], u = e[r];
      if (a && (f === u && typeof u != "object" || u instanceof Date && f instanceof Date && f.getTime() === u.getTime()))
        continue;
      const c = i + (i ? "." : "") + r;
      a ? (a.__parse(u, c, o, s) && (n[r] = u), s & Fi ? o[c] = a.__trigger : a.__trigger()) : (u && u.__reactive ? t[r] = this._wrapNested(u, u, c, o) : t[r] = this._wrapWritable(u), n[r] = u), o[c] = o[c] || null;
    }
  }
  _wrapNested(e, t, n, i) {
    const o = this._wrapWritable(e);
    return this._wrapProperties(e, o, t, n, i, 0), o.__parse = (s, r, a, f) => (this._wrapProperties(s, o, t, r, a, f), false), o;
  }
  _wrapWritable(e) {
    const t = [], n = function() {
      for (let i = 0; i < t.length; i++)
        t[i](e);
    };
    return {
      subscribe: (i) => (t.push(i), this._async ? setTimeout(i, 1, e) : i(e), () => {
        const o = t.indexOf(i);
        o >= 0 && t.splice(o, 1);
      }),
      __trigger: () => {
        t.length && (this._async ? setTimeout(n, 1) : n());
      },
      __parse: function(i) {
        return e = i, true;
      }
    };
  }
};
var Ko = class {
  constructor(e, t, n, i) {
    typeof e == "function" ? this._setter = e : this._setter = e.setState.bind(e), this._routes = t, this._parsers = n, this._prev = {}, this._triggers = /* @__PURE__ */ new Map(), this._sources = /* @__PURE__ */ new Map(), this._routes.forEach((o) => {
      o.in.forEach((s) => {
        const r = this._triggers.get(s) || [];
        r.push(o), this._triggers.set(s, r);
      }), o.out.forEach((s) => {
        const r = this._sources.get(s) || {};
        o.in.forEach((a) => r[a] = true), this._sources.set(s, r);
      });
    }), this._routes.forEach((o) => {
      o.length = Math.max(
        ...o.in.map((s) => Ti(s, this._sources, 1))
      );
    }), this._bus = i;
  }
  init(e) {
    const t = {};
    for (const n in e)
      if (this._prev[n] !== e[n]) {
        const i = this._parsers[n];
        t[n] = i ? i(e[n]) : e[n];
      }
    this._prev = this._prev ? __spreadValues(__spreadValues({}, this._prev), e) : __spreadValues({}, e), this.setState(t), this._bus && this._bus.exec("init-state", t);
  }
  setStateAsync(e) {
    const t = this._setter(e, Fi);
    return this._async ? Object.assign(this._async.signals, t) : this._async = {
      signals: t,
      timer: setTimeout(this._applyState.bind(this), 1)
    }, t;
  }
  _applyState() {
    const e = this._async;
    if (e) {
      this._async = null, this._triggerUpdates(e.signals, []);
      for (const t in e.signals) {
        const n = e.signals[t];
        n && n();
      }
    }
  }
  setState(e, t = []) {
    const n = this._setter(e);
    return this._triggerUpdates(n, t), n;
  }
  _triggerUpdates(e, t) {
    const n = Object.keys(e), i = !t.length;
    t = t || [];
    for (let o = 0; o < n.length; o++) {
      const s = n[o], r = this._triggers.get(s);
      r && r.forEach((a) => {
        t.indexOf(a) == -1 && t.push(a);
      });
    }
    i && this._execNext(t);
  }
  _execNext(e) {
    for (; e.length; ) {
      e.sort((n, i) => n.length < i.length ? 1 : -1);
      const t = e[e.length - 1];
      e.splice(e.length - 1), t.exec(e);
    }
  }
};
function Ti(l, e, t) {
  const n = e.get(l);
  if (!n)
    return t;
  const i = Object.keys(n).map((o) => Ti(o, e, t + 1));
  return Math.max(...i);
}
var Xo = class {
  constructor() {
    this._nextHandler = null, this._handlers = {}, this._tag = /* @__PURE__ */ new WeakMap(), this.exec = this.exec.bind(this);
  }
  on(e, t, n) {
    let i = this._handlers[e];
    i ? n && n.intercept ? i.unshift(t) : i.push(t) : i = this._handlers[e] = [t], n && n.tag && this._tag.set(t, n.tag);
  }
  intercept(e, t, n) {
    this.on(e, t, __spreadProps(__spreadValues({}, n), { intercept: true }));
  }
  detach(e) {
    for (const t in this._handlers) {
      const n = this._handlers[t];
      for (let i = n.length - 1; i >= 0; i--)
        this._tag.get(n[i]) === e && n.splice(i, 1);
    }
  }
  exec(e, t) {
    return __async(this, null, function* () {
      const n = this._handlers[e];
      if (n)
        for (let i = 0; i < n.length; i++) {
          const o = n[i](t);
          if (o === false || o && o.then && (yield o) === false)
            return;
        }
      return this._nextHandler && (yield this._nextHandler.exec(e, t)), t;
    });
  }
  setNext(e) {
    return this._nextHandler = e;
  }
};
var Jo = (l, e) => l.key > e.key ? 1 : -1;
var Qo = (l, e) => l.key < e.key ? 1 : -1;
var Zo = class {
  constructor(e, t, n, i, o) {
    o === "desc" ? this._sort = Qo : o === "asc" ? this._sort = Jo : o && (this._sort = (s, r) => o(s.key, r.key)), this._label = n, this._meta = i || null, this._table = e, this._getter = t, this._prepared = 0;
  }
  getIndexes() {
    return this._indexes;
  }
  getValue(e) {
    return this._values[e].key;
  }
  getSize() {
    return this._values.length;
  }
  getLabel() {
    return this._label;
  }
  getOptions() {
    return this._prepareOptions(), this._values.map((e) => e.key);
  }
  getMeta() {
    return this._meta;
  }
  reset() {
    this._prepared = 0;
  }
  prepare() {
    if (this._prepared & 1)
      return;
    this._prepared = this._prepared | 1, this._prepareOptions();
    const { _table: e, _keys: t } = this, n = e.count();
    this._values.forEach((o, s) => o.index = s);
    const i = this._indexes = new Array(n);
    for (let o = 0; o < n; o++) {
      const { key: s } = this._prepareKey(o);
      i[o] = t.get(s).index;
    }
  }
  _prepareOptions() {
    if (this._prepared & 2)
      return;
    this._prepared = this._prepared | 2;
    const e = this._table.count(), t = this._keys = /* @__PURE__ */ new Map(), n = this._values = [];
    for (let i = 0; i < e; i++) {
      const { key: o, value: s } = this._prepareKey(i);
      typeof t.get(o) > "u" && t.set(o, n[n.length] = { key: s, index: 0 });
    }
    this._sort && n.sort(this._sort);
  }
  _prepareKey(e) {
    const t = this._getter(e);
    return { key: t instanceof Date ? t.getTime() : t, value: t };
  }
};
var xo = class {
  constructor(e) {
    this._pivot = e;
  }
  toArray({ cleanRows: e, filters: t, ops: n }) {
    this._pivot.filter(t), this._pivot.operations(n), this._pivot.resetCursor();
    let i = 0;
    const o = [], { limit: s, transpose: r } = this._pivot.getContext(), [a, , f] = this._pivot.getWidth(), u = f || 1, c = s.rows || 0, d = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), m = [];
    for (; ; ) {
      const S = {}, D = this._pivot.next(d, i, h, S);
      if (!D)
        break;
      if (r) {
        this._pivot.transpose(o, D, a, f);
        for (let p = 0; p < u; p++)
          m.push(S);
        i += u;
      } else
        o.push(D), m.push(S), i++;
      if (i >= c)
        break;
    }
    const [_, g] = this._pivot.getWidth();
    e && this._cleanRows(o, _);
    const C = {
      data: o,
      columns: Array.from(d).sort((S, D) => S > D ? 1 : -1),
      width: g + _,
      scaleWidth: _ + (r ? 1 : 0),
      rowData: m
    };
    return C.columnData = this._pivot.aggregateColumns(C, h), C.marks = this._pivot.mark(C, h), C;
  }
  toNested({ filters: e, ops: t }) {
    this._pivot.filter(e), this._pivot.operations(t), this._pivot.resetCursor();
    const n = /* @__PURE__ */ new Map(), i = this._pivot.nested(n);
    return i.columnData = this._pivot.aggregateColumns(i, n), i.marks = this._pivot.mark(i, n), i;
  }
  toXHeader(e, t) {
    return this._pivot.getXHeader(e, t);
  }
  _cleanRows(e, t) {
    const n = e.length, i = new Array(t);
    for (let o = 0; o < n; o++) {
      const s = e[o];
      for (let r = 0; r < t; r++) {
        if (i[r] !== s[r]) {
          for (let a = r; a < t; a++)
            i[a] = s[a];
          break;
        }
        s[r] = "";
      }
    }
  }
};
function Li(l, e) {
  if (typeof l == "object")
    return function a(f, u) {
      let c;
      return c = typeof f.arg == "number" ? f.arg.toString() : typeof f.arg == "object" ? a(f.arg, u) : function(d) {
        const h = d.length;
        for (let m = 0; m < h; m++) {
          const _ = d[m];
          if (!(_ >= "0" && _ <= "9" || _ >= "a" && _ <= "z" || _ >= "A" && _ <= "Z"))
            return false;
        }
        return true;
      }(f.arg) ? u.property(f.arg) : Li(f.arg, u), `${u.method(f.op)}(${c})`;
    }(l, e);
  let t = "";
  const n = l.length;
  let i = 0, o = false, s = false, r = 0;
  for (; i < n; ) {
    const a = l[i];
    if (i++, a === '"')
      o ? t += l.substr(r, i - r) : r = i - 1, o = !o;
    else {
      if (o)
        continue;
      const f = a === "," || a === "/" || a === "*" || a === "+" || a === "-" || a === "(" || a === ")", u = a === " " || a === "	" || a === ` 
` || a === "\r";
      if (s) {
        if (!f && !u)
          continue;
        {
          const c = l.substr(r, i - r - 1);
          t += a === "(" ? e.method(c) : e.property(c), s = false;
        }
      }
      if (u)
        continue;
      f || Vn(a) || a === "." && l[i - 2] && Vn(l[i - 2]) ? t += a : (s = true, r = i - 1);
    }
  }
  return s && (t += e.property(l.substr(r, i - r))), t;
}
function Vn(l) {
  return l === "0" || l === "1" || l === "2" || l === "3" || l === "4" || l === "5" || l === "6" || l === "7" || l === "8" || l === "9";
}
function zi(l, e) {
  return new Function(e.propertyName, e.methodName, e.contextName, "return " + Li(l, e));
}
function Yn(l, e, t, n) {
  const i = Ii(l, t), o = {
    table: l,
    order: e,
    from: 0,
    to: 0,
    array: (s, r) => {
      const a = r.to - r.from, f = new Array(a), u = Hn[s];
      for (let c = 0; c < a; c++)
        f[c] = u(r.order[c + r.from]);
      return f;
    }
  };
  return function(s, r) {
    return o.from = s, o.to = r, i(0, n, o);
  };
}
function Gn(l, e, t, n) {
  const i = Ii(l, t), o = {
    table: l,
    order: e,
    range: [],
    array: (s, r) => {
      const a = o.range.length, f = [], u = Hn[s];
      for (let c = 0; c < a; c += 2) {
        const d = o.range[c], h = o.range[c + 1];
        for (let m = d; m < h; m++)
          f.push(u(r.order[m]));
      }
      return f;
    }
  };
  return function(s) {
    return o.range = s, i(0, n, o);
  };
}
function qt(l, e) {
  const t = $o(l);
  return function(n) {
    return t(n, e, null);
  };
}
var Un = 0;
var Hn = [];
function Ii(l, e) {
  return zi(e, {
    propertyName: "d",
    methodName: "m",
    contextName: "c",
    property: (t) => {
      const n = Un;
      return Hn[n] = l.getColumn(t).getter, Un += 1, `c.array("${n}", c)`;
    },
    method: (t) => `m.${t.toLowerCase()}`
  });
}
function $o(l) {
  return zi(l, {
    propertyName: "d",
    methodName: "m",
    contextName: "c",
    property: () => "d",
    method: (e) => `m.${e.toLowerCase()}`
  });
}
var qi = (l, e) => (t) => l(t) && e(t);
function es(l, e, t, n) {
  const i = n.getter(l, e);
  if (typeof t != "object") {
    const o = n.compare.eq(t);
    return (s) => o(i(s));
  } else {
    const o = Object.keys(t);
    let s = null;
    for (let r = 0; r < o.length; r++) {
      const a = n.compare[o[r].toLowerCase()](t[o[r]]), f = (u) => a(i(u));
      s = s ? qi(s, f) : f;
    }
    return s;
  }
}
function ts(l, e, t) {
  const n = Object.keys(e);
  let i = null;
  for (let o = 0; o < n.length; o++) {
    const s = n[o], r = es(l, s, e[s], t);
    i = i ? qi(i, r) : r;
  }
  return i;
}
function ns(l, e, t, n) {
  const i = ts(e, t, n);
  return l.filter((o) => i(o));
}
var ls = class {
  constructor(e, t, n, i, o) {
    this._rows = t, this._cols = n, this._dims = t.concat(n), this._table = e, this._context = o, this._cursor = -1, this._order = this._base_order = this._sort(), this._data = this._dims.map((s) => s.getIndexes()), this.filter(i, true);
  }
  resetCursor() {
    this._cursor = 0, this._group = this._dims.map(() => null), this._order.length && (this._rows.length && this._nextRow(), this._cols.length && this._nextColumn());
  }
  next(e, t, n, i) {
    const { _cursor: o, _cols: s, _order: r, _group: a, _ops: f, _rows: u } = this;
    if (this._cursor >= r.length)
      return null;
    const c = u.length, d = new Array(c + f.length * s.length);
    for (let m = 0; m < c; m++)
      d[m] = u[m].getValue(a[m]);
    const h = this._rows.length ? this._nextRow(s.length > 0) : r.length;
    return this._fillRow(d, t, o, h, c, e, n, i), this._cursor = h, d;
  }
  nested(e) {
    const { _cols: t, _order: n, _rows: i, _ops: o } = this, s = /* @__PURE__ */ new Set(), r = this._context.transpose;
    let { _groupOps: a } = this;
    r && (a = null);
    const f = i.length, u = f > 0 || r ? 1 : 0, c = [{ data: [], values: [] }], d = [];
    let h = [], m = [], _ = this._cursor, g = 0;
    const C = [{}].concat(i.map(() => ({}))), S = [], D = this._context.limit.rows, p = Math.min(this._context.limit.columns, (t.length ? this._sizes[0] * t[0].getSize() : 0) + u), y = function(M) {
      if (c[M])
        for (; M < f; M++)
          for (const [z, H] of e) {
            const A = C[M][z] || 0;
            if (A === 0 || H.length > A)
              for (let T = 0; T < a.length; T++) {
                const j = a[T];
                j && (c[M].values[u + z + T] = j(H.slice(A + 1)), C[M][z] = H.length - 1);
              }
          }
    };
    for (; this._cursor < n.length; ) {
      const M = new Array(p);
      h = m, m = [].concat(this._group);
      const z = this._rows.length ? this._nextRow(t.length > 0) : n.length;
      if (a !== null) {
        for (let T = 0; T < f; T++)
          if (m[T] != h[T]) {
            y(T + 1);
            break;
          }
      }
      const H = {}, A = d.length;
      if (this._fillRow(M, A, _, z, u, s, e, H), r) {
        this.transpose(d, M, -1, o.length);
        for (let T = 0; T < o.length; T++)
          S.push(H);
      } else
        d.push(M), S.push(H);
      if (f > 0) {
        for (let T = 0; T < f; T++)
          if (m[T] != h[T]) {
            for (let j = T; j < f; j++) {
              const L = j + 1, P = L === f;
              r ? c[j].data.push(c[L] = {
                id: 0,
                data: P ? d.slice(A).map((G, ae) => ({
                  id: A + 1 + ae,
                  values: G,
                  data: null
                })) : [],
                values: [i[j].getValue(m[j])]
              }) : c[j].data.push(c[L] = {
                id: P ? A + 1 : 0,
                data: P ? null : [],
                values: P ? M : [i[j].getValue(m[j])]
              });
            }
            break;
          }
        M[0] = i[f - 1].getValue(m[f - 1]);
      } else
        c[0].data.push({ data: null, values: M });
      if (g++, g >= D)
        break;
      this._cursor = _ = z;
    }
    a !== null && y(1);
    const R = Array.from(s).sort((M, z) => M > z ? 1 : -1), v = {
      tree: c[0].data,
      data: d,
      width: p,
      scaleWidth: u,
      columns: R,
      rowData: S
    };
    return this._fillGroupRow(c[0], v, e, i.length - 1), v;
  }
  getContext() {
    return this._context;
  }
  getOperation(e) {
    return this._opInfo[e];
  }
  getWidth() {
    return [
      this._rows.length,
      this._cols.length && this._ops.length ? this._cols[0].getSize() * this._sizes[0] : 0,
      this._ops.length
    ];
  }
  getXHeader(e, t) {
    const { _cols: n, _rows: i, _ops: o, _opInfo: s, _context: r } = this, { nonEmpty: a, meta: f } = t || {}, u = e.tree, c = [], d = r.transpose && o.length ? 1 : 0, h = e.tree ? Math.min(i.length, 1) : i.length + d, m = r.transpose ? 1 : o.length || 1, _ = n.map((H) => H.getSize()), g = _.reduce((H, A) => H * A, m), C = r.transpose ? e.columns.map((H) => H / (o.length || 1)) : e.columns, S = Math.min(Math.ceil(this._context.limit.columns / m), a ? C.length : g / m), D = h + S * m;
    let p = g;
    const y = _.map((H) => p = p / H), R = [];
    if (this._cols.forEach(() => R.push(new Array(D))), a) {
      for (let H = 0; H < h; H++)
        c.push(H);
      for (let H = 0; H < S; H++) {
        const A = h + C[H];
        for (let T = 0; T < m; T++)
          c.push(A + T);
      }
      for (let H = 0; H < n.length; H++) {
        const A = y[H];
        let T = -1, j = 0, L = 0, P;
        for (let G = h; G < c.length; G += m) {
          const ae = c[G];
          if (ae < j)
            L += m;
          else {
            L !== 0 && (L > 1 ? R[H][T] = { colspan: L, text: P } : R[H][T] = { text: P });
            const q = Math.floor((ae - h) / A);
            T = G, j = (q + 1) * A + h, L = m, P = n[H].getValue(q % _[H]);
          }
        }
        L !== 0 && (L > 1 ? R[H][T] = { colspan: L, text: P } : R[H][T] = { text: P });
      }
    } else
      for (let H = 0; H < n.length; H++) {
        const A = _[H], T = y[H];
        let j = 0;
        for (let L = h; L < D; L += T)
          T === 1 ? R[H][L] = n[H].getValue(j++) : R[H][L] = { text: n[H].getValue(j++), colspan: T }, j >= A && (j = 0);
      }
    if (this._ops.length && !this._context.transpose) {
      const H = new Array(D), A = o.length;
      for (let T = h; T < D; T += A)
        for (let j = 0; j < A; j++)
          H[T + j] = s[j].label;
      R.push(H);
    }
    const v = this._ops && this._context.transpose ? h - 1 : -1, M = this._ops && !this._context.transpose ? 1 : 0;
    h && !R.length && R.push([]);
    for (let H = 0; H < h; H++) {
      const A = n.length + M;
      if (u) {
        R[0][0] = { text: "", rowspan: A };
        break;
      }
      const T = H === v ? "" : i[H].getLabel();
      R[0][H] = A > 1 ? { text: T, rowspan: A } : T;
    }
    const z = { data: R };
    if (a && (z.nonEmpty = c), f) {
      const H = new Array(D);
      for (let T = 0; T < h; T++)
        H[T] = i[T].getMeta();
      const A = o.length;
      if (A)
        for (let T = h; T < D; T += A)
          for (let j = 0; j < A; j++)
            H[T + j] = s[j].meta;
      z.meta = H;
    }
    return z;
  }
  filter(e, t) {
    if (!e || Object.keys(e).length === 0)
      if (!t && this._masterRules)
        e = Object.assign(Object.assign({}, this._masterRules), e);
      else {
        this._order = this._base_order;
        return;
      }
    t && (this._masterRules = e), this._order = ns(this._base_order, this._table, e, this._context);
  }
  operations(e) {
    const { _table: t, _order: n, _context: i } = this;
    e = e || [], this._ops = e.map((o) => Yn(t, n, typeof o == "string" ? o : o.math, i.math)), this._groupResultOps = e.map((o) => o.branchMode === "result" ? qt(typeof o == "string" ? o : o.branchMath || o.math, i.math) : null), this._groupResultOps.find((o) => o !== null) || (this._groupResultOps = null), this._groupOps = e.map((o) => o.branchMode === "raw" ? Gn(t, n, typeof o == "string" ? o : o.branchMath || o.math, i.math) : null), this._groupOps.find((o) => o !== null) || (this._groupOps = null), this._opInfo = e.map((o) => typeof o == "string" ? { label: o, math: o } : Object.assign(Object.assign({}, o), { label: o.label || o.math })), this._rowResultOps = Pt(e, "row", "result", (o, s) => ({
      name: s,
      op: qt(o, i.math)
    })), this._rowOps = Pt(e, "row", "raw", (o, s) => ({
      name: s,
      op: Yn(t, n, o, i.math)
    })), this._colResultOps = Pt(e, "column", "result", (o, s) => ({
      name: s,
      op: qt(o, i.math)
    })), this._colOps = Pt(e, "column", "raw", (o, s) => ({
      name: s,
      op: Gn(t, n, o, i.math)
    })), this._marks = e.map((o) => o.marks || null), this._marks.find((o) => o !== null) || (this._marks = null), this._setSizes();
  }
  aggregateColumns(e, t) {
    const { _colOps: n, _colResultOps: i } = this, { columns: o, data: s, scaleWidth: r } = e;
    if (!n && !i)
      return [];
    const a = this._context.transpose, f = this._ops.length, u = [];
    for (let c = 0; c < o.length; c++) {
      const d = o[c], h = t.get(d);
      if (!h)
        continue;
      const m = Array.from(h[0].keys());
      for (let _ = 0; _ < f; _++) {
        const g = a ? r + d / f : r + d + _, C = u[g] || {};
        if (i) {
          const S = i[_];
          if (S) {
            let D;
            a ? D = m.map((p) => s[p + _][d / f + r]) : D = m.map((p) => s[p][d + _ + r]), S.forEach((p) => C[p.name] = p.op(D));
          }
        }
        if (n) {
          const S = n[_];
          S && S.forEach((D) => C[D.name] = D.op(h.slice(1)));
        }
        u[g] = C;
      }
    }
    return u;
  }
  _optimizeGroup(e) {
    const t = {};
    let n = true;
    for (const i in e) {
      const o = e[i];
      t[i] = qt(o, this._context.math), n = false;
    }
    return n ? null : t;
  }
  mark(e, t) {
    const n = [], { _marks: i, _ops: o } = this;
    if (!i)
      return n;
    const s = o.length, { scaleWidth: r, data: a, columnData: f, rowData: u } = e;
    for (const [c, d] of t) {
      const h = d[0];
      for (let m = 0; m < s; m++) {
        const _ = this._marks[m];
        if (_ !== null)
          for (const g of h) {
            let C, S;
            this._context.transpose ? (S = c / s + r, C = g + m) : (S = c + m + r, C = g);
            const D = [];
            for (let p = 0; p < _.length; p++)
              _[p].check(a[C][S], f[S] || {}, u[C] || {}) && D.push(_[p].name);
            if (D.length) {
              let p = n[C];
              typeof p > "u" && (p = n[C] = []), p[S] = D;
            }
          }
      }
    }
    return n;
  }
  transpose(e, t, n, i) {
    if (!i) {
      e.push(t);
      return;
    }
    const o = n < 0 ? 1 : n, s = n < 0 ? 0 : n, r = (t.length - o) / i, a = [];
    for (let f = 0; f < i; f++) {
      const u = [];
      for (let c = 0; c < o; c++)
        u[c] = t[c];
      u[s] = this.getOperation(f).label, a.push(u), e.push(u);
    }
    for (let f = 0; f < r; f++) {
      const u = t[o + f * i];
      if (typeof u < "u") {
        a[0][s + f + 1] = u;
        for (let c = 1; c < i; c++)
          a[c][s + f + 1] = t[o + f * i + c];
      }
    }
  }
  __getHeaderStub() {
    return {};
  }
  _fillGroupRow(e, t, n, i) {
    const { _groupResultOps: o } = this, { columns: s, scaleWidth: r } = t;
    if (o)
      for (let a = 0; a < s.length; a++) {
        const f = s[a];
        for (let u = 0; u < o.length; u++) {
          const c = o[u];
          c && i > 0 && this._fillGroupRowInner(e, c, f + u + r, i);
        }
      }
  }
  _fillGroupRowInner(e, t, n, i) {
    const o = [];
    if (i > 0)
      e.data.forEach((s) => {
        const r = this._fillGroupRowInner(s, t, n, i - 1);
        r !== null && o.push(r);
      });
    else
      for (let s = 0; s < e.data.length; s++) {
        const r = e.data[s].values[n];
        typeof r < "u" && o.push(r);
      }
    return o.length ? e.values[n] = t(o) : null;
  }
  _fillRow(e, t, n, i, o, s, r, a) {
    const { _cols: f, _group: u, _ops: c, _sizes: d, _rows: h, _rowResultOps: m, _rowOps: _ } = this, g = h.length, C = this._groupOps !== null || this._groupResultOps !== null || this._colResultOps !== null || this._colOps !== null || this._marks !== null;
    let S = [];
    if (m !== null && (S = m.map(() => [])), c.length || f.length)
      if (f.length) {
        let D = n;
        for (; D < i; ) {
          let p = 0;
          for (let R = 0; R < f.length; R++)
            p += d[R] * u[g + R];
          const y = this._nextColumn();
          for (let R = 0; R < c.length; R++) {
            const v = e[p + o + R] = c[R](D, y);
            m !== null && S[R].push(v);
          }
          if (C) {
            let R = r.get(p);
            R ? R.push(D, y) : r.set(p, R = [/* @__PURE__ */ new Set(), D, y]), R[0].add(t);
          }
          s.add(p), this._cursor = D = y;
        }
      } else {
        for (let D = 0; D < c.length; D++)
          e[D + o] = c[D](n, i);
        if (C) {
          let D = r.get(0);
          D ? D.push(n, i) : r.set(0, D = [/* @__PURE__ */ new Set(), n, i]), D[0].add(t);
        }
        s.add(0);
      }
    m !== null && m.forEach((D, p) => {
      const y = S[p];
      D && y.length && D.forEach((R) => {
        a[R.name] = R.op(S[p]);
      });
    }), _ !== null && _.forEach((D) => {
      D?.forEach((p) => {
        a[p.name] = p.op(n, i);
      });
    });
  }
  _sort() {
    const { _table: e, _dims: t } = this, n = Math.min(e.count(), this._context.limit.raws), i = new Array(n);
    for (let r = 0; r < n; r++)
      i[r] = r;
    const o = t.length, s = t.map((r) => r.getIndexes());
    return i.sort((r, a) => {
      for (let f = 0; f < o; f++) {
        const u = s[f][r], c = s[f][a];
        if (u > c)
          return 1;
        if (u < c)
          return -1;
      }
      return 0;
    }), i;
  }
  _nextRow(e) {
    const { _data: t, _order: n, _group: i, _rows: o } = this, s = o.length;
    let r = true, a = this._cursor;
    for (; ; ) {
      const f = n[a];
      for (let u = 0; u < s; u++)
        t[u][f] != i[u] && (e || (i[u] = t[u][f]), r = false);
      if (!r)
        break;
      a++;
    }
    return a;
  }
  _nextColumn() {
    const { _data: e, _order: t, _group: n, _rows: i, _cols: o } = this, s = o.length + i.length;
    let r = true, a = this._cursor;
    for (; ; ) {
      const f = t[a];
      for (let u = 0; u < s; u++)
        e[u][f] != n[u] && (n[u] = e[u][f], r = false);
      if (!r)
        break;
      a++;
    }
    return a;
  }
  _setSizes() {
    const e = this._cols.map((n) => n.getSize());
    let t = this._ops.length || 1;
    for (let n = e.length - 1; n >= 0; n--) {
      const i = t;
      t *= e[n], e[n] = i;
    }
    this._sizes = e;
  }
};
function Pt(l, e, t, n) {
  const i = l.map((o) => {
    const s = o[e];
    if (!s)
      return null;
    const r = s.map((a) => (a.source || "raw") === t ? typeof a == "string" ? n(a, Kn(a)) : n(a.math, a.as || Kn(a.math)) : null).filter((a) => a !== null);
    return r.length ? r : null;
  });
  return i.find((o) => !!o) ? i : null;
}
function Kn(l) {
  const e = l.indexOf("(");
  return e === -1 ? l.trim() : l.substring(0, e).trim();
}
var Pi = class {
  constructor(e) {
    this._columns = e.fields, this.parse(e.data);
  }
  parse(e) {
    this._raw = e, this._parse_inner();
  }
  prepare() {
    if (this._prepared)
      return;
    this._prepared = true;
    const e = this._raw, t = this._columns.filter((o) => o.type === 3);
    if (!e || !t.length)
      return;
    const n = e.length, i = t.length;
    for (let o = 0; o < n; o++)
      for (let s = 0; s < i; s++) {
        const r = t[s], a = r.getter(o);
        typeof a == "string" && r.setter(o, new Date(a));
      }
  }
  _parse_inner() {
    this._columns.forEach((e) => {
      const t = e.id;
      e.getter = (n) => this._raw[n][t], e.setter = (n, i) => this._raw[n][t] = i;
    });
  }
  getColumn(e) {
    return this._columns.find((t) => t.id === e);
  }
  count() {
    return this._raw.length;
  }
};
var is = class extends Pi {
  parse(e) {
    this._parse_init(e.length);
    const t = e.length, n = this._columns.length;
    for (let i = 0; i < t; i++) {
      const o = e[i];
      for (let s = 0; s < n; s++) {
        const r = this._columns[s];
        r.data[i] = o[r.id];
      }
    }
  }
  _parse_init(e) {
    this._columns.forEach((t) => {
      const n = t.data = new Array(e);
      t.getter = (i) => n[i], t.setter = (i, o) => n[i] = o;
    });
  }
  count() {
    return this._columns[0].data.length;
  }
};
var os = (l) => Math.round(l);
var ss = (l) => l.reduce((e, t) => e + t, 0);
var rs = (l) => l.reduce((e, t) => t < e ? t : e, l.length ? l[0] : 0);
var as = (l) => l.reduce((e, t) => t > e ? t : e, l.length ? l[0] : 0);
var Kt = (l) => l.length ? l.reduce((e, t) => e + t, 0) / l.length : 0;
var fs = (l, e) => {
  if (!l.length)
    return 0;
  let t = 0, n = 0;
  for (let i = l.length - 1; i >= 0; i--)
    t += e[i], n += l[i] * e[i];
  return n / t;
};
var us = (l) => l.length;
var cs = (l) => l.length ? l[0] : null;
var ds = (l) => l.reduce((e, t) => (t !== null && t !== "" && t !== 0 && e++, e), 0);
var hs = (l) => {
  const e = new Set(l);
  return e.size - (e.has(null) ? 1 : 0) - (e.has("") ? 1 : 0) - (e.has(0) ? 1 : 0) - (e.has(null) ? 1 : 0);
};
var ms = (l) => {
  if (!l.length)
    return 0;
  const e = l.sort((n, i) => n - i), t = Math.floor(e.length / 2);
  return e.length % 2 !== 0 ? e[t] : (e[t - 1] + e[t]) / 2;
};
var _s = (l) => l.reduce((e, t) => e * t, 1);
var ji = (l) => {
  if (!l.length)
    return 0;
  const e = Kt(l);
  return l.reduce((t, n) => t + Math.pow(n - e, 2), 0) / l.length;
};
var Wi = (l) => {
  if (l.length < 2)
    return 0;
  const e = Kt(l);
  return l.reduce((t, n) => t + Math.pow(n - e, 2), 0) / (l.length - 1);
};
var gs = (l) => {
  const e = ji(l);
  return e <= 0 ? 0 : Math.sqrt(e);
};
var ps = (l) => {
  const e = Wi(l);
  return e <= 0 ? 0 : Math.sqrt(e);
};
var bs = {
  round: os,
  sum: ss,
  min: rs,
  max: as,
  avg: Kt,
  wavg: fs,
  count: us,
  any: cs,
  counta: ds,
  countunique: hs,
  median: ms,
  product: _s,
  stdev: ps,
  stdevp: gs,
  var: Wi,
  varp: ji,
  // aliases
  average: Kt
};
var ws = {
  eq: (l) => (e) => e == l,
  neq: (l) => (e) => e != l,
  gt: (l) => (e) => e > l,
  gte: (l) => (e) => e >= l,
  lt: (l) => (e) => e < l,
  lte: (l) => (e) => e <= l,
  in: (l) => (e) => l[e],
  hasPrefix: (l) => (e) => e.indexOf(l) === 0,
  contains: (l) => (e) => e.indexOf(l) !== -1
};
var ys = {
  year: (l) => l.getFullYear(),
  month: (l) => l.getMonth(),
  day: (l) => l.getDate(),
  hour: (l) => l.getHours(),
  minute: (l) => l.getMinutes(),
  quarter: (l) => Math.floor(l.getMonth() / 3) + 1,
  week: (l) => {
    const e = new Date(l);
    e.setHours(0, 0, 0, 0), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
    const t = new Date(e.getFullYear(), 0, 1);
    return Math.ceil(((e.valueOf() - t.valueOf()) / 864e5 + 1) / 7);
  }
};
var ks = class {
  constructor(e) {
    this._tables = {}, this._dimensions = {}, this._preds = Object.assign({}, ys), this._maths = Object.assign({}, bs), this._comps = Object.assign({}, ws), e && e.tables && e.tables.forEach((t) => this.addTable(t)), e && e.dimensions && e.dimensions.forEach((t) => this.addDimension(t));
  }
  addPredicate(e, t) {
    this._preds[e.toLowerCase()] = t;
  }
  addMath(e, t) {
    this._maths[e.toLowerCase()] = t;
  }
  addComparator(e, t) {
    this._comps[e.toLowerCase()] = t;
  }
  getDimension(e) {
    return this._dimensions[e];
  }
  addDimension(e) {
    if (this._dimensions[e.id])
      return;
    const t = this._tables[e.table], n = this._predicateGetter(t, e.rule.by);
    this._dimensions[e.id] = new Zo(t, n, e.label || e.id, e.meta || e, e.sort);
  }
  resetDimensions(e, t) {
    const n = this._dimensions;
    this._dimensions = {}, e && e.forEach((i) => {
      const o = n[i.id];
      t && o ? this._dimensions[i.id] = o : this.addDimension(i);
    });
  }
  addTable(e) {
    const t = (e.driver || "raw") === "raw" ? Pi : is, n = this._tables[e.id] = new t(e);
    e.prepare && n.prepare();
  }
  getTable(e) {
    return this._tables[e];
  }
  compact(e, t) {
    const { rows: n, cols: i, filters: o, limit: s, transpose: r } = t, a = this._tables[e], f = n ? n.map((d) => this._dimensions[d]) : [], u = i ? i.map((d) => this._dimensions[d]) : [];
    [...f, ...u].forEach((d) => d.prepare());
    const c = new ls(a, f, u, o, {
      getter: this._predicateGetter.bind(this),
      math: this._maths,
      compare: this._comps,
      limit: Object.assign({ rows: 1e4, columns: 5e3, raws: 1 / 0 }, s || {}),
      transpose: !!r
    });
    return new xo(c);
  }
  _predicateGetter(e, t) {
    const n = t.indexOf("(");
    if (n !== -1) {
      const i = this._preds[t.substr(0, n).toLowerCase()];
      t = t.substr(n + 1, t.length - n - 2);
      const o = e.getColumn(t).getter;
      return (s) => i(o(s));
    } else
      return e.getColumn(t).getter;
  }
};
var vs = [
  {
    id: "equal",
    type: ["number", "tuple"],
    handler: "eq"
  },
  {
    id: "notEqual",
    type: ["number", "tuple"],
    handler: "neq"
  },
  {
    id: "greater",
    type: ["number", "date", "tuple"],
    handler: "gt"
  },
  {
    id: "greaterOrEqual",
    type: ["number", "date", "tuple"],
    handler: "gte"
  },
  {
    id: "less",
    type: ["number", "date", "tuple"],
    handler: "lt"
  },
  {
    id: "lessOrEqual",
    type: ["number", "date", "tuple"],
    handler: "lte"
  }
];
var Ss = {
  number: "greater",
  text: "contains",
  date: "between",
  tuple: "greater"
};
var Cs = {
  min: (l, e) => l == e.min,
  max: (l, e) => l == e.max
};
function Bi(l, e) {
  return Object.keys(l).find((t) => {
    const n = l[t];
    return n.type && (n.type === e.type || n.type.includes(e.type)) || !n.type && e.type == "number";
  });
}
var Ms = class extends Uo {
  in;
  _router;
  _analytic;
  _tableId;
  constructor(e) {
    super(e), this._router = new Ko(
      super.setState.bind(this),
      // data recalculation dependencies
      [
        {
          in: ["config"],
          out: ["tableConfig"],
          exec: () => {
            const { config: n } = this.getState();
            if (n._ready) {
              const i = this._calculateData(n);
              t.exec("render-table", {
                config: i
              });
            }
          }
        }
      ],
      // data initializers
      {}
    ), this._tableId = "table", this._analytic = new ks();
    const t = this.in = new Xo();
    this._analytic.addMath(
      "toFixed",
      (n) => n && parseFloat(n).toFixed(3)
    ), t.on(
      "update-field",
      ({ id: n, method: i, area: o }) => {
        const s = this._getConfigCopy(), r = s[o].find(
          (f) => f.id == n
        );
        let a = {};
        if (a.method = i, o !== "values") {
          const f = r.base || r.field;
          i ? (a.base = f, a.field = `${f}_by_${i}`) : (a.field = f, a.method = null), this._validateUniqueField(
            s,
            o,
            a.field
          ) && (a = null);
        }
        a ? (Object.assign(r, a), this._removeDuplicatedFields(s, o, a.field), this._updateConfig(s)) : this.setState({});
      }
    ), t.on(
      "add-field",
      ({ id: n, area: i, field: o, method: s }) => {
        const r = this.getState().fields, a = this._getConfigCopy(), f = __spreadValues({}, r.find((c) => c.id == o)), u = this._createUniqueField(
          n,
          f,
          i,
          o,
          s
        );
        this._removeDuplicatedFields(a, i, u.field), !(i !== "values" && this._validateUniqueField(
          a,
          i,
          u.field
        )) && (a[i].push(u), this._updateConfig(a));
      }
    ), t.on(
      "delete-field",
      ({ area: n, id: i }) => {
        const o = this._getConfigCopy(), s = o[n].find(
          (a) => a.id == i
        ), r = s.base || s.field;
        o[n] = o[n].filter(
          (a) => a.id !== i
        ), this._checkDuplicatedFields(o, r) && o.filters[r] && delete o.filters[r], this._updateConfig(o);
      }
    ), t.on(
      "move-field",
      ({ area: n, id: i, before: o, after: s }) => {
        const r = this._getConfigCopy(), a = r[n];
        if (a.length === 1)
          return;
        const f = a.findIndex(
          (h) => h.id === i
        ), u = a.splice(f, 1)[0];
        let c = a.findIndex(
          (h) => o ? h.id === o : h.id === s
        );
        s && (c += 1), a.splice(c, 0, u), r[n] = a;
        const { config: d } = this.getState();
        Ut(r[n], d[n]) || this._updateConfig(r);
      }
    ), t.on("open-filter", (n) => {
      const { id: i, area: o } = n;
      if (i) {
        const { config: s, predicates: r } = this.getState(), a = s[o].find(
          (v) => v.id == i
        ), { field: f, base: u, method: c, type: d } = a;
        let h = u || f, m = d, _ = null, g = {};
        if (o !== "values" && c && c !== "$empty") {
          h = `${c}(${h})`;
          const v = r[c];
          v && (v.filter && (g = v.filter, m = g.type || d), _ = v.template || _);
        }
        const C = this._analytic.getDimension(f).getOptions(), S = s.filters[h];
        let D = null, p = null, y = null;
        if (S) {
          const v = Array.isArray(S);
          D = v ? S : S.includes || null, v || (p = Object.keys(S).find(
            (M) => M !== "includes"
          ), p && (y = S[p]));
        }
        const R = __spreadValues({
          id: a.id,
          field: h,
          type: m,
          options: C,
          format: _,
          filter: p || Ss[m],
          value: y,
          includes: D
        }, g);
        this.setState({ activeFilter: R });
      } else
        this.setState({ activeFilter: null });
    }), t.on("apply-filter", ({ rule: n }) => {
      const i = this._getConfigCopy(), { field: o, filter: s, value: r, includes: a } = n, f = a && a.length !== 0;
      !r && !f && i.filters[o] && delete i.filters[o], (r || f) && (i.filters[o] = {}, r && (i.filters[o][s] = r), f && (i.filters[o].includes = a));
      const { config: u } = this.getState();
      Ut(i.filters, u.filters) || this._updateConfig(i);
    }), t.on("update-config", (n) => {
      const { fields: i } = this.getState();
      n = this._prepareConfig(n, i), this.setState({ config: n });
    }), t.on(
      "show-config-panel",
      ({ mode: n }) => {
        this.setState({ configPanel: n });
      }
    ), t.on(
      "render-table",
      ({ config: n }) => {
        this.setState({ tableConfig: n });
      }
    );
  }
  init(e) {
    this._router.init(__spreadValues({
      config: {},
      fields: [],
      data: [],
      tableShape: {},
      headerShape: {},
      columnShape: {},
      methods: {},
      tableConfig: { columns: [], data: [], split: {}, sizes: {} }
    }, e));
    const { data: t, fields: n, methods: i, predicates: o } = this.getState();
    let { config: s } = this.getState();
    this._setMathMethods(i), this._analytic.addTable({
      id: this._tableId,
      fields: n,
      data: t,
      prepare: true
    });
    const r = this._getPredicates(o);
    this._setDimensions(n, r), this._addFilters(e.filters), this.setState({ data: t }), s = this._prepareConfig(s, n), this.setStateAsync({ config: s });
  }
  setState(e, t) {
    return this._router.setState(e, t);
  }
  setStateAsync(e) {
    this._router.setStateAsync(e);
  }
  _calculateData(e) {
    const { columns: t, rows: n, values: i, filters: o } = e, { limits: s, methods: r, tableShape: a, columnShape: f, fields: u } = this.getState(), {
      cleanRows: c,
      marks: d,
      sizes: h,
      split: m,
      templates: _,
      totalRow: g,
      totalColumn: C,
      tree: S
    } = a, D = m?.left ? S ? 1 : e.rows.length : 0, p = this._analytic.compact(this._tableId, {
      rows: (n || []).map((j) => j.field),
      cols: (t || []).map((j) => j.field),
      filters: {},
      limit: __spreadValues({}, s)
    }), y = this._getHeaderTemplate();
    let R = 0;
    const v = {
      ops: i.map((j) => {
        const { field: L, label: P, method: G, type: ae } = j, q = {
          date: `${G}(${L})`,
          number: `${G}(${L})`,
          text: `${G}(${L})`
        }, U = r[G], le = [], re = [], X = q[ae], ve = U.label || G, oe = { operation: G, field: L };
        if (_ && _[L] ? oe.template = _[L] : ae === "number" && G !== "count" && G !== "counta" && G !== "countunique" && (oe.template = (_e) => _e && parseFloat(_e).toFixed(3)), f.width) {
          const _e = f.width;
          _e[L] && (oe.width = _e[L]);
        }
        if (f.autoWidth?.columns && f.autoWidth.columns[L] && (oe.autowidth = true), d && Object.keys(d).length)
          for (const _e in d) {
            const me = d[_e];
            me === "min" && le.push({
              as: "min",
              math: "min(group)",
              source: "result"
            }), me === "max" && le.push({
              as: "max",
              math: "max(group)",
              source: "result"
            }), re.push({
              name: _e,
              check: typeof me == "string" ? Cs[me] : me
            });
          }
        const ce = {
          column: le,
          math: X,
          label: y(P, L, ve),
          marks: re,
          meta: oe,
          branchMode: U.branchMode || "result"
        };
        U.branchMath && (ce.branchMath = `${U.branchMath}(${L})`);
        let fe = 0;
        const Se = U.branchMath || G;
        return g && (g != "sumOnly" || G == "sum") && (ce.column || (ce.column = []), ce.column.push({
          math: `${Se}(group)`,
          as: "value",
          source: "result"
        }), fe++), C && (C != "sumOnly" || G == "sum") && (ce.row || (ce.row = []), ce.row.push({
          math: `${Se}(group)`,
          as: "" + R,
          source: "result"
        }), fe++), fe == 2 && ce.column.push({
          math: `${Se}(value)`,
          as: "value",
          source: "final"
        }), R++, ce;
      }),
      filters: this._getFilters(o, u),
      cleanRows: c
    }, M = S ? p.toNested(v) : p.toArray(v), z = p.toXHeader(M, { nonEmpty: true, meta: true }), H = z.nonEmpty.length, A = z.nonEmpty[H - 1] + 1;
    let T;
    return S ? T = this._getNestedRows(
      M.tree,
      M.rowData,
      A
    ) : T = this._getRows(M.data, M.rowData, A), {
      columns: this._getColumns(z, e, M.columnData),
      data: T,
      sizes: h,
      tree: S,
      footer: !!g,
      split: { left: D },
      cellStyle: (j, L) => M.marks[j.id - 1] && M.marks[j.id - 1][L.id - 1] ? M.marks[j.id - 1][L.id - 1].join(" ") : ""
    };
  }
  _getHeaderTemplate() {
    const { headerShape: e } = this.getState();
    return e.template || ((t) => t);
  }
  _addFilters(e) {
    for (const t in e)
      this._analytic.addComparator(t, (n) => (i) => {
        if (t == "date" && (i = i.valueOf()), n) {
          const o = Object.entries(n)[0], s = o[0], r = o[1], a = e[t][s];
          if (r && typeof a == "function")
            return a(i, r);
        }
        return true;
      });
    this._analytic.addComparator(
      "includes",
      (t) => (n) => t && t.length !== 0 ? n.getMonth ? t.findIndex(
        (i) => i.valueOf() === n.valueOf()
      ) > -1 : t.indexOf(n) != -1 : true
    );
  }
  _setDimensions(e, t) {
    this._analytic.resetDimensions();
    const { tableShape: n, columnShape: i } = this.getState(), o = this._tableId, s = this._getHeaderTemplate();
    e.forEach((r) => {
      const a = {};
      a.field = r.id;
      const f = n.templates;
      if (f && f[r.id] && (a.template = f[r.id]), i.width) {
        const u = i.width;
        u[r.id] && (a.width = u[r.id]);
      }
      i.autoWidth?.columns && i.autoWidth.columns[r.id] && (a.autowidth = true), this._analytic.addDimension({
        id: r.id,
        label: s(r.label, r.id),
        table: o,
        rule: {
          by: r.id,
          as: r.type || "text"
        },
        meta: a,
        sort: r.sort || "asc"
      });
      for (const u in t) {
        const c = t[u];
        if ((c.type && (r.type === c.type || c.type.includes(r.type)) || !c.type && r.type == "number") && (!c.field || c.field && c.field(r.id))) {
          const d = typeof c.label == "function" ? c.label(r.type) : c.label;
          this._analytic.addDimension({
            id: `${r.id}_by_${u}`,
            label: s(r.label, r.id, d),
            table: o,
            rule: {
              by: `${u}(${r.id})`,
              as: c.type || r.type
            },
            meta: a,
            sort: c.sort || "asc"
          });
        }
      }
    }), this.setState({ predicates: t });
  }
  _getPredicates(e) {
    const t = __spreadValues({}, e);
    for (const n in e) {
      const i = e[n];
      i.handler && this._analytic.addPredicate(n, (o) => i.handler.call(this, o));
    }
    return t;
  }
  _getColumns(e, t, n) {
    const { nonEmpty: i, meta: o } = e, s = this.getState(), { predicates: r, tableShape: a, columnShape: f } = s, u = e.data, c = [], d = [], h = a.tree ? 1 : t.rows.length;
    for (let _ = 0; _ < t.columns.length; _++) {
      const g = t.columns[_];
      let C;
      a.templates && (C = a.templates[g.field]), C = C || this._getPredicateTemplate(g, r), d.push(C);
    }
    for (let _ = 0; _ < i.length; _++) {
      const g = [], C = i[_] + 1;
      let S = 0, D = 0;
      for (let R = 0; R < u.length; R++) {
        let v = u[R][_], M = false;
        if (v && v.rowspan ? (S = R, D = v.rowspan) : M = !v && R < S + D, v) {
          typeof v != "object" && (v = { text: v }), d[R] && v.rowspan != u.length && _ >= h && (v.text = d[R](v.text)), v.text += "";
          const z = R < u.length - 1 && !D;
          this._applyHeaderShape(v, z);
        }
        M || g.push(v || "");
      }
      const p = o[_] ? this._getColumnTemplate(o[_]) : (R) => R, y = {
        id: C,
        header: g,
        template: p,
        sort: f.sort
      };
      if (o[_] && this._applyColumnMeta(y, o[_]), y.field && !o[_].template) {
        const R = t.rows.find(
          (v) => (v.base || v.field) == y.field
        );
        if (R) {
          const v = this._getPredicateTemplate(
            R,
            r
          );
          v && (y.template = (M) => v(M));
        }
      }
      if (n.length) {
        const R = n[i[_]];
        if (R)
          y.footer = { text: p(R.value) };
        else if (!_) {
          const v = this._getHeaderTemplate();
          y.footer = {
            text: v("Total", "$totalFooter")
          };
          let M = 0;
          for (; !n[M] && i[M] === M; )
            M++;
          M > 1 && (y.footer.colspan = M);
        }
      }
      a.tree && _ == 0 && (y.treetoggle = true), c.push(y);
    }
    const m = this._getTotalColumns(
      e,
      t,
      n,
      c[c.length - 1]?.id
    );
    return c.concat(m);
  }
  _getColumnTemplate(e) {
    return (t) => e.template ? e.template(t, e.operation) : t;
  }
  _applyHeaderShape(e, t) {
    const { headerShape: n } = this.getState();
    n.vertical && (e.vertical = true), e.colspan === 1 ? delete e.colspan : n.collapsible && t && (e.collapsible = true, e.open = true);
  }
  _applyColumnMeta(e, t) {
    t.width && (e.width = t.width), t.autowidth && (e.autowidth = true), t.field && (e.field = t.field);
  }
  _getTotalColumns(e, t, n, i) {
    const { data: o, meta: s } = e, { tableShape: r, methods: a } = this.getState(), f = [];
    if (r.totalColumn && o.length > 1 && i) {
      const { values: u, rows: c } = t, d = r.tree ? 1 : c.length;
      let h = 0, m = 0;
      const _ = this._getHeaderTemplate();
      u.forEach((g) => {
        if (r.totalColumn != "sumOnly" || g.method == "sum") {
          const C = a[g.method].label || g.method, S = [];
          for (let R = 0; R < o.length; R++) {
            let v, M = false;
            R < o.length - 1 ? R || (m ? v = { text: " " } : (v = {
              text: _(
                "Total",
                "$totalColumn"
              )
            }, o.length > 2 && (v.rowspan = o.length - 1), M = true)) : v = {
              text: _(
                g.label,
                g.field,
                C
              )
            }, v && this._applyHeaderShape(v, M), v && S.push(v);
          }
          m++;
          const D = this._getColumnTemplate(
            s[d + h]
          ), p = {
            id: i + h + 1,
            header: S,
            template: D
          }, y = n[i + h];
          y && (p.footer = { text: D(y.value) }), this._applyColumnMeta(p, s[d + h]), f.push(p);
        }
        h++;
      }), m > 1 && (f[0].header[0].colspan = m);
    }
    return f;
  }
  _getPredicateTemplate(e, t) {
    let n = null;
    const i = e.method || "$empty", o = t[i];
    return o && o.template && (n = o.template), n;
  }
  _getRowProxy(e, t, n, i) {
    return new Proxy(e, {
      get(o, s) {
        const r = s * 1;
        return isNaN(r) ? o[s] : r > n ? t ? t[r - n - 1] : "" : i ? o.values[r - 1] : o[r - 1];
      }
    });
  }
  _getRows(e, t, n) {
    return e.length === 1 && e[0].length === 0 ? [] : e.map((i, o) => {
      const s = this._getRowProxy(i, t.shift(), n);
      return s.id = o + 1, s;
    });
  }
  _getNestedRows(e, t, n) {
    const i = [];
    return e.forEach((o) => {
      const s = this._getRowProxy(
        o,
        o.data ? null : t.shift(),
        n,
        true
      );
      o.data && (s.id = Bn(), s.data = this._getNestedRows(o.data, t, n), s.open = true), i.push(s);
    }), i;
  }
  _getFilters(e, t) {
    const { filters: n, predicates: i } = this.getState(), o = {};
    for (const s in e) {
      let r = s, a = null;
      const f = s.match(/^(.+?)\((.+?)\)/);
      f && (a = f[1], r = f[2]);
      const u = t.find((c) => c.id === r);
      if (u) {
        o[s] = {};
        const c = Array.isArray(e[s]), d = typeof e[s] == "string" || typeof e[s] == "number" || !!e[s].getMonth;
        if (c)
          o[s].includes = e[s];
        else {
          if (d) {
            const _ = e[s];
            e[s] = { equal: _ };
          }
          let h = u.type;
          if (a) {
            const _ = i[a];
            _ && _.filter?.type && (h = _.filter.type);
          }
          const m = n[h];
          for (const _ in e[s])
            if (_ === "includes")
              o[s][_] = e[s][_];
            else {
              const g = m[_];
              typeof g == "string" ? o[s][g] = e[s][_] : o[s][h] = {
                [_]: e[s][_]
              };
            }
        }
      }
    }
    return o;
  }
  _prepareConfig(e, t) {
    const n = {
      rows: [],
      values: [],
      columns: [],
      filters: {},
      _ready: true
    };
    return e.filters && (n.filters = __spreadValues({}, e.filters)), ["rows", "columns", "values"].forEach((i) => {
      e[i] && (n[i] = e[i].map(
        (o) => {
          if (o.id && o.area)
            return o;
          let s, r;
          typeof o != "string" ? (s = o.field, r = o.method) : (s = o, /\(.*?\)/.test(o) && ([r, s] = o.split(/[()]+/).filter((f) => f)));
          const a = t.find((f) => f.id === s);
          return !r && i === "values" && (r = Bi(
            this.getState().methods,
            a
          )), this._createUniqueField(
            null,
            a,
            i,
            s,
            r ?? null
          );
        }
      ));
    }), n;
  }
  _createUniqueField(e, t, n, i, o) {
    const s = {
      id: e || "u" + Bn(),
      area: n,
      field: i,
      label: t.label,
      type: t.type,
      method: o
    };
    let r;
    return n !== "values" && o && (r = i), r && (s.base = i, s.field = `${i}_by_${s.method}`), s;
  }
  _validateUniqueField(e, t, n) {
    const i = !!e[t].find(
      (o) => o.field == n
    );
    return i && console.warn(
      `Configuration of <${t}> already contains <${n}>`
    ), i;
  }
  _removeDuplicatedFields(e, t, n) {
    if (t !== "values") {
      const i = t == "rows" ? "columns" : "rows";
      e[i] = e[i].filter(
        (o) => o.field !== n
      );
    }
    return e;
  }
  _checkDuplicatedFields(e, t) {
    const n = ["rows", "columns", "values"];
    let i = true;
    return n.forEach((o) => {
      e[o].findIndex((s) => s.base === t || s.field === t) !== -1 && (i = false);
    }), i;
  }
  _updateConfig(e) {
    this.in.exec("update-config", e);
  }
  _getConfigCopy() {
    return Sn(this.getState().config);
  }
  _setMathMethods(e) {
    for (const t in e) {
      const n = e[t];
      n.handler && this._analytic.addMath(t, n.handler);
    }
    this.setState({ methods: e });
  }
};
var Rs = {
  sum: { type: "number", label: "sum" },
  min: { type: ["number", "date"], label: "min" },
  max: { type: ["number", "date"], label: "max" },
  count: {
    type: ["number", "date", "text"],
    label: "count",
    branchMath: "sum"
  },
  counta: {
    type: ["number", "date", "text"],
    label: "counta",
    branchMath: "sum"
  },
  countunique: {
    type: ["number", "text"],
    label: "countunique",
    branchMath: "sum"
  },
  average: { type: "number", label: "average", branchMode: "raw" },
  median: { type: "number", label: "median", branchMode: "raw" },
  product: { type: "number", label: "product" },
  stdev: { type: "number", label: "stdev", branchMode: "raw" },
  stdevp: { type: "number", label: "stdevp", branchMode: "raw" },
  var: { type: "number", label: "var", branchMode: "raw" },
  varp: { type: "number", label: "varp", branchMode: "raw" }
};
var Ds = {
  $empty: {
    label: (l) => `Raw ${l}`,
    type: ["number", "date", "text"]
  },
  year: { label: "Year", type: "date", filter: { type: "number" } },
  quarter: { label: "Quarter", type: "date", filter: { type: "tuple" } },
  month: { label: "Month", type: "date", filter: { type: "tuple" } },
  week: { label: "Week", type: "date", filter: { type: "tuple" } },
  day: { label: "Day", type: "date", filter: { type: "number" } },
  hour: { label: "Hour", type: "date", filter: { type: "number" } },
  minute: { label: "Minute", type: "date", filter: { type: "number" } }
};
function Ot(l, e = "data-id") {
  let t = l;
  for (!t.tagName && l.target && (t = l.target); t; ) {
    if (t.getAttribute && t.getAttribute(e))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Es(l, e = "data-id") {
  const t = Ot(l, e);
  return t ? t.getAttribute(e) : null;
}
function Os(l, e = "data-id") {
  const t = Ot(l, e);
  return t ? Nn(t.getAttribute(e)) : null;
}
function Nn(l) {
  if (typeof l == "string") {
    const e = l * 1;
    if (!isNaN(e))
      return e;
  }
  return l;
}
function Xn(l, e, t) {
  function n(i) {
    const o = Ot(i);
    if (!o)
      return;
    const s = Nn(o.dataset.id);
    if (typeof e == "function")
      return e(s, i);
    let r, a = i.target;
    for (; a != o; ) {
      if (r = a.dataset ? a.dataset.action : null, r && e[r]) {
        e[r](s, i);
        return;
      }
      a = a.parentNode;
    }
    e[t] && e[t](s, i);
  }
  l.addEventListener(t, n);
}
function en(l, e) {
  Xn(l, e, "click"), e.dblclick && Xn(l, e.dblclick, "dblclick");
}
function As(l, e) {
  for (let t = l.length - 1; t >= 0; t--)
    if (l[t] === e) {
      l.splice(t, 1);
      break;
    }
}
var Vi = /* @__PURE__ */ new Date();
var Xt = false;
var xe = [];
var Jn = (l) => {
  if (Xt) {
    Xt = false;
    return;
  }
  for (let e = xe.length - 1; e >= 0; e--) {
    if (l.defaultPrevented)
      return;
    const { node: t, callback: n, date: i, modal: o } = xe[e];
    if (!(i > Vi) && !t.contains(l.target) && t !== l.target && (n(l), o))
      break;
  }
};
var Qn = ["click", "contextmenu"];
var Hs = (l) => {
  Vi = /* @__PURE__ */ new Date(), Xt = true;
  for (let e = xe.length - 1; e >= 0; e--) {
    const { node: t } = xe[e];
    if (!t.contains(l.target) && t !== l.target) {
      Xt = false;
      break;
    }
  }
};
function Ft(l, e, t = false) {
  xe.length || (Qn.forEach(
    (i) => document.addEventListener(i, Jn)
  ), document.addEventListener("mousedown", Hs));
  const n = { node: l, callback: e, date: /* @__PURE__ */ new Date(), modal: t };
  return xe.push(n), {
    destroy() {
      As(xe, n), xe.length || Qn.forEach(
        (i) => document.removeEventListener(i, Jn)
      );
    }
  };
}
var Zn = (/* @__PURE__ */ new Date()).valueOf();
function pt() {
  return Zn += 1, Zn;
}
function qe(l) {
  return l < 10 ? "0" + l : l.toString();
}
function Ns(l) {
  const e = qe(l);
  return e.length == 2 ? "0" + e : e;
}
function Fs(l) {
  let e = l.getDay();
  e === 0 && (e = 7);
  const t = new Date(l.valueOf());
  t.setDate(l.getDate() + (4 - e));
  const n = t.getFullYear(), i = Math.floor(
    (t.getTime() - new Date(n, 0, 1).getTime()) / 864e5
  );
  return 1 + Math.floor(i / 7);
}
var xn = ["", ""];
function Ts(l, e, t) {
  switch (l) {
    case "%d":
      return qe(e.getDate());
    case "%m":
      return qe(e.getMonth() + 1);
    case "%j":
      return e.getDate();
    case "%n":
      return e.getMonth() + 1;
    case "%y":
      return qe(e.getFullYear() % 100);
    case "%Y":
      return e.getFullYear();
    case "%D":
      return t.dayShort[e.getDay()];
    case "%l":
      return t.dayFull[e.getDay()];
    case "%M":
      return t.monthShort[e.getMonth()];
    case "%F":
      return t.monthFull[e.getMonth()];
    case "%h":
      return qe((e.getHours() + 11) % 12 + 1);
    case "%g":
      return (e.getHours() + 11) % 12 + 1;
    case "%G":
      return e.getHours();
    case "%H":
      return qe(e.getHours());
    case "%i":
      return qe(e.getMinutes());
    case "%a":
      return ((e.getHours() > 11 ? t.pm : t.am) || xn)[0];
    case "%A":
      return ((e.getHours() > 11 ? t.pm : t.am) || xn)[1];
    case "%s":
      return qe(e.getSeconds());
    case "%S":
      return Ns(e.getMilliseconds());
    case "%W":
      return qe(Fs(e));
    case "%c": {
      let n = e.getFullYear() + "";
      return n += "-" + qe(e.getMonth() + 1), n += "-" + qe(e.getDate()), n += "T", n += qe(e.getHours()), n += ":" + qe(e.getMinutes()), n += ":" + qe(e.getSeconds()), n;
    }
    default:
      return l;
  }
}
var Ls = /%[a-zA-Z]/g;
function At(l, e) {
  return typeof l == "function" ? l : function(t) {
    return t ? (t.getMonth || (t = new Date(t)), l.replace(
      Ls,
      (n) => Ts(n, t, e)
    )) : "";
  };
}
function $n(l) {
  return l && typeof l == "object" && !Array.isArray(l);
}
function Cn(l, e) {
  for (const t in e) {
    const n = e[t];
    $n(l[t]) && $n(n) ? l[t] = Cn(
      __spreadValues({}, l[t]),
      e[t]
    ) : l[t] = e[t];
  }
  return l;
}
function Fn(l) {
  return {
    getGroup(e) {
      const t = l[e];
      return (n) => t && t[n] || n;
    },
    getRaw() {
      return l;
    },
    extend(e, t) {
      if (!e)
        return this;
      let n;
      return t ? n = Cn(__spreadValues({}, e), l) : n = Cn(__spreadValues({}, l), e), Fn(n);
    }
  };
}
var Yi = {
  pivot: {
    sum: "Sum",
    min: "Min",
    max: "Max",
    count: "Count",
    counta: "CountA",
    countunique: "CountUnique",
    average: "Average",
    median: "Median",
    product: "Product",
    stdev: "StDev",
    stdevp: "StDevP",
    var: "Var",
    varp: "VarP",
    "Raw date": "Raw date",
    "Raw number": "Raw number",
    "Raw text": "Raw text",
    Year: "Year",
    Quarter: "Quarter",
    Month: "Month",
    Week: "Week",
    Day: "Day",
    Hour: "Hour",
    Minute: "Minute",
    W: "W",
    Q: "Q",
    Total: "Total",
    Values: "Values",
    Rows: "Rows",
    Columns: "Columns",
    "Click the + buttons to add data": "Click the + buttons to add data",
    'Click on "Show settings" to see the available configuration options': 'Click on "Show settings" to see the available configuration options',
    "Show settings": "Show settings",
    "Hide settings": "Hide settings"
  }
};
var zs = {
  pivot: {
    sum: "和",
    min: "最小",
    max: "最大",
    count: "数",
    counta: "计数值",
    countunique: "计数唯一",
    average: "平均值",
    median: "中位数",
    product: "乘积",
    stdev: "标准偏差",
    stdevp: "总体标准偏差",
    var: "方差",
    varp: "总体方差",
    "Raw date": "原始日期",
    "Raw number": "原始數",
    "Raw text": "原始文字",
    Year: "年",
    Quarter: "季度",
    Month: "月",
    Week: "周",
    Day: "日",
    Hour: "小时",
    Minute: "分钟",
    W: "周",
    Q: "季度",
    Total: "總",
    Values: "值",
    Rows: "行",
    Columns: "列",
    "Click the + buttons to add data": "点击+按钮添加数据",
    'Click on "Show settings" to see the available configuration options': "点击“显示设置”以查看可用的配置选项",
    "Show settings": "顯示設置",
    "Hide settings": "隱藏設置"
  }
};
var Is = {
  pivot: {
    sum: "Summe",
    min: "Min",
    max: "Max",
    count: "Anzahl",
    counta: "AnzahlA",
    countunique: "AnzahlEinzigartig",
    average: "Míttelwert",
    median: "Median",
    product: "Produkt",
    stdev: "StAbw",
    stdevp: "StAbwn",
    var: "Varianz",
    varp: "Varianzen",
    "Raw date": "Rohdatum",
    "Raw number": "Rohe Zahl",
    "Raw text": "Rohtext",
    Year: "Jahr",
    Quarter: "Quartal",
    Month: "Monat",
    Week: "Woche",
    Day: "Tag",
    Hour: "Stunde",
    Minute: "Minute",
    W: "W",
    Q: "Q",
    Total: "Gesamt",
    Values: "Werte",
    Rows: "Zeilen",
    Columns: "Spalten",
    "Click the + buttons to add data": "Klicken Sie auf die + Schaltflächen, um Daten hinzuzufügen",
    'Click on "Show settings" to see the available configuration options': 'Klicken Sie auf "Einstellungen anzeigen", um die verfügbaren Konfigurationsoptionen anzuzeigen',
    "Show settings": "Einstellungen anzeigen",
    "Hide settings": "Einstellungen ausblenden"
  }
};
var qs = {
  monthFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  dayFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  hours: "Hours",
  minutes: "Minutes",
  done: "Done",
  clear: "Clear",
  today: "Today",
  am: ["am", "AM"],
  pm: ["pm", "PM"],
  weekStart: 7,
  clockFormat: 24
};
var Ps = {
  ok: "OK",
  cancel: "Cancel"
};
var js = {
  timeFormat: "%H:%i",
  dateFormat: "%m/%d/%Y"
};
var Tn = {
  core: Ps,
  calendar: qs,
  formats: js
};
var Ws = {
  monthFull: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  monthShort: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  dayFull: [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ],
  dayShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  hours: "小时",
  minutes: "分钟",
  done: "完成",
  clear: "清除",
  today: "今天",
  am: ["", ""],
  pm: ["", ""],
  weekStart: 7,
  clockFormat: 24
};
var Bs = {
  ok: "确定",
  cancel: "取消"
};
var Vs = {
  timeFormat: "%H:%i",
  dateFormat: "%Y-%m-%d"
};
var Ys = {
  core: Bs,
  calendar: Ws,
  formats: Vs
};
var Gs = {
  monthFull: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  monthShort: [
    "Jan",
    "Feb",
    "Mrz",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ],
  dayFull: [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ],
  dayShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  hours: "Stunden",
  minutes: "Minuten",
  done: "Fertig",
  clear: "Entfernen",
  today: "Heute",
  weekStart: 1,
  clockFormat: 24
};
var Us = {
  ok: "OK",
  cancel: "Abbrechen"
};
var Ks = {
  timeFormat: "%H:%i",
  dateFormat: "%d.%m.%Y"
};
var Xs = {
  core: Us,
  calendar: Gs,
  formats: Ks
};
var Gi = {
  query: {
    "Add filter": "Add filter",
    "Add Filter": "Add Filter",
    "Add Group": "Add Group",
    Edit: "Edit",
    Delete: "Delete",
    "Select all": "Select all",
    "Unselect all": "Unselect all",
    Cancel: "Cancel",
    Apply: "Apply",
    and: "and",
    or: "or",
    in: "in",
    equal: "equal",
    "not equal": "not equal",
    contains: "contains",
    "not contains": "not contains",
    "begins with": "begins with",
    "not begins with": "not begins with",
    "ends with": "ends with",
    "not ends with": "not ends with",
    greater: "greater",
    "greater or equal": "greater or equal",
    less: "less",
    "less or equal": "less or equal",
    between: "between",
    "not between": "not between"
  }
};
var Js = {
  query: {
    "Add filter": "添加过滤器",
    "Add Filter": "添加过滤器",
    "Add Group": "添加组",
    Edit: "编辑",
    Delete: "删除",
    "Select all": "全选",
    "Unselect all": "取消全选",
    Cancel: "取消",
    Apply: "应用",
    and: "与",
    or: "或",
    in: "在",
    equal: "等于",
    "not equal": "不等于",
    contains: "包含",
    "not contains": "不包含",
    "begins with": "开始于",
    "not begins with": "不开始于",
    "ends with": "结束于",
    "not ends with": "不结束于",
    greater: "大于",
    "greater or equal": "大于或等于",
    less: "小于",
    "less or equal": "小于或等于",
    between: "在之间",
    "not between": "不在之间"
  }
};
var Qs = {
  query: {
    "Add filter": "Filter hinzufügen",
    "Add Filter": "Filter Hinzufügen",
    "Add Group": "Gruppe Hinzufügen",
    Edit: "Bearbeiten",
    Delete: "Löschen",
    "Select all": "Alles auswählen",
    "Unselect all": "Alles widerrufen",
    Cancel: "Abbrechen",
    Apply: "Anwenden",
    and: "und",
    or: "oder",
    in: "in",
    equal: "gleich",
    "not equal": "ungleich",
    contains: "enthält",
    "not contains": "nicht enthält",
    "begins with": "beginnt mit",
    "not begins with": "nicht beginnt mit",
    "ends with": "endet mit",
    "not ends with": "nicht endet mit",
    greater: "mehr",
    "greater or equal": "größer oder gleich",
    less: "weniger",
    "less or equal": "weniger oder gleich",
    between: "zwischen",
    "not between": "nicht zwischen"
  }
};
function el(l) {
  let e, t;
  return {
    c() {
      e = F("i"), b(e, "class", t = Pe(
        /*icon*/
        l[0]
      ) + " svelte-ap8ojf");
    },
    m(n, i) {
      O(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      1 && t !== (t = Pe(
        /*icon*/
        n[0]
      ) + " svelte-ap8ojf") && b(e, "class", t);
    },
    d(n) {
      n && E(e);
    }
  };
}
function Zs(l) {
  let e;
  return {
    c() {
      e = ie(
        /*text*/
        l[3]
      );
    },
    m(t, n) {
      O(t, e, n);
    },
    p(t, n) {
      n & /*text*/
      8 && de(
        e,
        /*text*/
        t[3]
      );
    },
    i: K,
    o: K,
    d(t) {
      t && E(e);
    }
  };
}
function xs(l) {
  let e;
  const t = (
    /*#slots*/
    l[11].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[10],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = true;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      1024) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[10],
        e ? be(
          t,
          /*$$scope*/
          i[10],
          o,
          null
        ) : ye(
          /*$$scope*/
          i[10]
        ),
        null
      );
    },
    i(i) {
      e || (w(n, i), e = true);
    },
    o(i) {
      k(n, i), e = false;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function $s(l) {
  let e, t, n, i, o, s, r, a, f = (
    /*icon*/
    l[0] && el(l)
  );
  const u = [xs, Zs], c = [];
  function d(h, m) {
    return (
      /*SLOTS*/
      h[5] ? 0 : 1
    );
  }
  return n = d(l), i = c[n] = u[n](l), {
    c() {
      e = F("button"), f && f.c(), t = J(), i.c(), b(
        e,
        "title",
        /*title*/
        l[2]
      ), b(e, "class", o = Pe(`wx-button ${/*buttonCss*/
      l[4]}`) + " svelte-ap8ojf"), e.disabled = /*disabled*/
      l[1], se(
        e,
        "wx-icon",
        /*icon*/
        l[0] && (!/*SLOTS*/
        l[5] || !/*SLOTS*/
        l[5].default)
      );
    },
    m(h, m) {
      O(h, e, m), f && f.m(e, null), I(e, t), c[n].m(e, null), s = true, r || (a = Q(
        e,
        "click",
        /*handleClick*/
        l[6]
      ), r = true);
    },
    p(h, [m]) {
      h[0] ? f ? f.p(h, m) : (f = el(h), f.c(), f.m(e, t)) : f && (f.d(1), f = null), i.p(h, m), (!s || m & /*title*/
      4) && b(
        e,
        "title",
        /*title*/
        h[2]
      ), (!s || m & /*buttonCss*/
      16 && o !== (o = Pe(`wx-button ${/*buttonCss*/
      h[4]}`) + " svelte-ap8ojf")) && b(e, "class", o), (!s || m & /*disabled*/
      2) && (e.disabled = /*disabled*/
      h[1]), (!s || m & /*buttonCss, icon, SLOTS*/
      49) && se(
        e,
        "wx-icon",
        /*icon*/
        h[0] && (!/*SLOTS*/
        h[5] || !/*SLOTS*/
        h[5].default)
      );
    },
    i(h) {
      s || (w(i), s = true);
    },
    o(h) {
      k(i), s = false;
    },
    d(h) {
      h && E(e), f && f.d(), c[n].d(), r = false, a();
    }
  };
}
function er(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { type: o = "" } = e, { css: s = "" } = e, { click: r } = e, { icon: a = "" } = e, { disabled: f = false } = e, { title: u = "" } = e, { text: c = "" } = e;
  const d = e.$$slots;
  let h;
  const m = He(), _ = (g) => {
    f || (m("click"), r && r(g));
  };
  return l.$$set = (g) => {
    t(13, e = Ee(Ee({}, e), Fe(g))), "type" in g && t(7, o = g.type), "css" in g && t(8, s = g.css), "click" in g && t(9, r = g.click), "icon" in g && t(0, a = g.icon), "disabled" in g && t(1, f = g.disabled), "title" in g && t(2, u = g.title), "text" in g && t(3, c = g.text), "$$scope" in g && t(10, i = g.$$scope);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*type, css*/
    384) {
      let g = o ? o.split(" ").filter((C) => C !== "").map((C) => "wx-" + C).join(" ") : "";
      t(4, h = s + (s ? " " : "") + g);
    }
  }, e = Fe(e), [
    a,
    f,
    u,
    c,
    h,
    d,
    _,
    o,
    s,
    r,
    i,
    n
  ];
}
var mt = class extends te {
  constructor(e) {
    super(), ee(this, e, er, $s, $, {
      type: 7,
      css: 8,
      click: 9,
      icon: 0,
      disabled: 1,
      title: 2,
      text: 3
    });
  }
};
function tl(l) {
  let e, t;
  return {
    c() {
      e = F("span"), t = ie(
        /*label*/
        l[2]
      ), b(e, "class", "svelte-1va8f8p");
    },
    m(n, i) {
      O(n, e, i), I(e, t);
    },
    p(n, i) {
      i & /*label*/
      4 && de(
        t,
        /*label*/
        n[2]
      );
    },
    d(n) {
      n && E(e);
    }
  };
}
function tr(l) {
  let e, t, n, i, o, s, r, a, f = (
    /*label*/
    l[2] && tl(l)
  );
  return {
    c() {
      e = F("div"), t = F("input"), n = J(), i = F("label"), o = F("span"), s = J(), f && f.c(), b(t, "type", "checkbox"), b(
        t,
        "id",
        /*id*/
        l[1]
      ), t.disabled = /*disabled*/
      l[5], t.checked = /*value*/
      l[0], t.value = /*name*/
      l[3], b(t, "class", "svelte-1va8f8p"), b(o, "class", "svelte-1va8f8p"), b(
        i,
        "for",
        /*id*/
        l[1]
      ), b(i, "class", "svelte-1va8f8p"), b(
        e,
        "style",
        /*style*/
        l[4]
      ), b(e, "class", "wx-checkbox svelte-1va8f8p");
    },
    m(u, c) {
      O(u, e, c), I(e, t), I(e, n), I(e, i), I(i, o), I(i, s), f && f.m(i, null), r || (a = Q(
        t,
        "change",
        /*handlerChange*/
        l[6]
      ), r = true);
    },
    p(u, [c]) {
      c & /*id*/
      2 && b(
        t,
        "id",
        /*id*/
        u[1]
      ), c & /*disabled*/
      32 && (t.disabled = /*disabled*/
      u[5]), c & /*value*/
      1 && (t.checked = /*value*/
      u[0]), c & /*name*/
      8 && (t.value = /*name*/
      u[3]), /*label*/
      u[2] ? f ? f.p(u, c) : (f = tl(u), f.c(), f.m(i, null)) : f && (f.d(1), f = null), c & /*id*/
      2 && b(
        i,
        "for",
        /*id*/
        u[1]
      ), c & /*style*/
      16 && b(
        e,
        "style",
        /*style*/
        u[4]
      );
    },
    i: K,
    o: K,
    d(u) {
      u && E(e), f && f.d(), r = false, a();
    }
  };
}
function nr(l, e, t) {
  const n = He();
  let { id: i = pt() } = e, { label: o = "" } = e, { name: s = "" } = e, { value: r = false } = e, { style: a = "" } = e, { disabled: f = false } = e;
  function u({ target: c }) {
    t(0, r = c.checked), n("change", { value: r, name: s });
  }
  return l.$$set = (c) => {
    "id" in c && t(1, i = c.id), "label" in c && t(2, o = c.label), "name" in c && t(3, s = c.name), "value" in c && t(0, r = c.value), "style" in c && t(4, a = c.style), "disabled" in c && t(5, f = c.disabled);
  }, [r, i, o, s, a, f, u];
}
var lr = class extends te {
  constructor(e) {
    super(), ee(this, e, nr, tr, $, {
      id: 1,
      label: 2,
      name: 3,
      value: 0,
      style: 4,
      disabled: 5
    });
  }
};
function ir(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[8].default
  ), r = pe(
    s,
    l,
    /*$$scope*/
    l[7],
    null
  );
  return {
    c() {
      e = F("div"), r && r.c(), b(e, "class", t = `wx-dropdown wx-${/*position*/
      l[0]}-${/*align*/
      l[1]} svelte-1jzzq2v`), ue(
        e,
        "width",
        /*width*/
        l[2]
      );
    },
    m(a, f) {
      O(a, e, f), r && r.m(e, null), l[9](e), n = true, i || (o = ze(Ft.call(
        null,
        e,
        /*down*/
        l[4]
      )), i = true);
    },
    p(a, [f]) {
      r && r.p && (!n || f & /*$$scope*/
      128) && we(
        r,
        s,
        a,
        /*$$scope*/
        a[7],
        n ? be(
          s,
          /*$$scope*/
          a[7],
          f,
          null
        ) : ye(
          /*$$scope*/
          a[7]
        ),
        null
      ), (!n || f & /*position, align*/
      3 && t !== (t = `wx-dropdown wx-${/*position*/
      a[0]}-${/*align*/
      a[1]} svelte-1jzzq2v`)) && b(e, "class", t), (!n || f & /*width*/
      4) && ue(
        e,
        "width",
        /*width*/
        a[2]
      );
    },
    i(a) {
      n || (w(r, a), n = true);
    },
    o(a) {
      k(r, a), n = false;
    },
    d(a) {
      a && E(e), r && r.d(a), l[9](null), i = false, o();
    }
  };
}
function or(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { position: o = "bottom" } = e, { align: s = "start" } = e, { autoFit: r = true } = e, { cancel: a = null } = e, { width: f = "100%" } = e, u;
  An(() => {
    if (r) {
      const h = u.getBoundingClientRect(), m = document.body.getBoundingClientRect();
      return h.right >= m.right && t(1, s = "end"), h.bottom >= m.bottom && t(0, o = "top"), `${o}-${s}`;
    }
  });
  function c(h) {
    a && a(h);
  }
  function d(h) {
    ge[h ? "unshift" : "push"](() => {
      u = h, t(3, u);
    });
  }
  return l.$$set = (h) => {
    "position" in h && t(0, o = h.position), "align" in h && t(1, s = h.align), "autoFit" in h && t(5, r = h.autoFit), "cancel" in h && t(6, a = h.cancel), "width" in h && t(2, f = h.width), "$$scope" in h && t(7, i = h.$$scope);
  }, [
    o,
    s,
    f,
    u,
    c,
    r,
    a,
    i,
    n,
    d
  ];
}
var tn = class extends te {
  constructor(e) {
    super(), ee(this, e, or, ir, $, {
      position: 0,
      align: 1,
      autoFit: 5,
      cancel: 6,
      width: 2
    });
  }
};
function sr() {
  let l = null, e = false, t, n, i, o;
  const s = (d, h, m, _) => {
    t = d, n = h, i = m, o = _;
  }, r = (d) => {
    l = d, e = l !== null, i(l);
  }, a = (d, h) => {
    const m = d === null ? null : Math.max(0, Math.min(l + d, n.length - 1));
    m !== l && (r(m), t ? f(m, h) : requestAnimationFrame(() => f(m, h)));
  }, f = (d, h) => {
    if (d !== null && t) {
      const m = t.querySelectorAll(".list > .item")[d];
      m && (m.scrollIntoView({ block: "nearest" }), h && h.preventDefault());
    }
  };
  return { move: (d) => {
    const h = Os(d), m = n.findIndex((_) => _.id == h);
    m !== l && r(m);
  }, keydown: (d, h) => {
    switch (d.code) {
      case "Enter":
        e ? o() : r(0);
        break;
      case "Space":
        e || r(0);
        break;
      case "Escape":
        i(l = null);
        break;
      case "Tab":
        i(l = null);
        break;
      case "ArrowDown":
        a(e ? 1 : h || 0, d);
        break;
      case "ArrowUp":
        a(e ? -1 : h || 0, d);
        break;
    }
  }, init: s, navigate: a };
}
function nl(l, e, t) {
  const n = l.slice();
  return n[13] = e[t], n[15] = t, n;
}
var rr = (l) => ({ option: l & /*items*/
1 });
var ll = (l) => ({ option: (
  /*data*/
  l[13]
) });
function il(l) {
  let e, t;
  return e = new tn({
    props: {
      cancel: (
        /*func*/
        l[8]
      ),
      $$slots: { default: [cr] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, list, items, navIndex*/
      519 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function ar(l) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = "No data", b(e, "class", "wx-no-data svelte-fl05h9");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && E(e);
    }
  };
}
function fr(l) {
  let e = [], t = /* @__PURE__ */ new Map(), n, i, o = ke(
    /*items*/
    l[0]
  );
  const s = (r) => (
    /*data*/
    r[13].id
  );
  for (let r = 0; r < o.length; r += 1) {
    let a = nl(l, o, r), f = s(a);
    t.set(f, e[r] = ol(f, a));
  }
  return {
    c() {
      for (let r = 0; r < e.length; r += 1)
        e[r].c();
      n = he();
    },
    m(r, a) {
      for (let f = 0; f < e.length; f += 1)
        e[f] && e[f].m(r, a);
      O(r, n, a), i = true;
    },
    p(r, a) {
      a & /*items, navIndex, $$scope*/
      517 && (o = ke(
        /*items*/
        r[0]
      ), Z(), e = it(e, a, s, 1, r, o, t, n.parentNode, gt, ol, n, nl), x());
    },
    i(r) {
      if (!i) {
        for (let a = 0; a < o.length; a += 1)
          w(e[a]);
        i = true;
      }
    },
    o(r) {
      for (let a = 0; a < e.length; a += 1)
        k(e[a]);
      i = false;
    },
    d(r) {
      r && E(n);
      for (let a = 0; a < e.length; a += 1)
        e[a].d(r);
    }
  };
}
function ur(l) {
  let e = (
    /*data*/
    l[13].name + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*items*/
      1 && e !== (e = /*data*/
      n[13].name + "") && de(t, e);
    },
    d(n) {
      n && E(t);
    }
  };
}
function ol(l, e) {
  let t, n, i, o;
  const s = (
    /*#slots*/
    e[6].default
  ), r = pe(
    s,
    e,
    /*$$scope*/
    e[9],
    ll
  ), a = r || ur(e);
  return {
    key: l,
    first: null,
    c() {
      t = F("div"), a && a.c(), n = J(), b(t, "class", "wx-item svelte-fl05h9"), b(t, "data-id", i = /*data*/
      e[13].id), se(
        t,
        "wx-focus",
        /*index*/
        e[15] === /*navIndex*/
        e[2]
      ), this.first = t;
    },
    m(f, u) {
      O(f, t, u), a && a.m(t, null), I(t, n), o = true;
    },
    p(f, u) {
      e = f, r ? r.p && (!o || u & /*$$scope, items*/
      513) && we(
        r,
        s,
        e,
        /*$$scope*/
        e[9],
        o ? be(
          s,
          /*$$scope*/
          e[9],
          u,
          rr
        ) : ye(
          /*$$scope*/
          e[9]
        ),
        ll
      ) : a && a.p && (!o || u & /*items*/
      1) && a.p(e, o ? u : -1), (!o || u & /*items*/
      1 && i !== (i = /*data*/
      e[13].id)) && b(t, "data-id", i), (!o || u & /*items, navIndex*/
      5) && se(
        t,
        "wx-focus",
        /*index*/
        e[15] === /*navIndex*/
        e[2]
      );
    },
    i(f) {
      o || (w(a, f), o = true);
    },
    o(f) {
      k(a, f), o = false;
    },
    d(f) {
      f && E(t), a && a.d(f);
    }
  };
}
function cr(l) {
  let e, t, n, i, o, s;
  const r = [fr, ar], a = [];
  function f(u, c) {
    return (
      /*items*/
      u[0].length ? 0 : 1
    );
  }
  return t = f(l), n = a[t] = r[t](l), {
    c() {
      e = F("div"), n.c(), b(e, "class", "wx-list svelte-fl05h9");
    },
    m(u, c) {
      O(u, e, c), a[t].m(e, null), l[7](e), i = true, o || (s = [
        Q(e, "click", $t(
          /*select*/
          l[5]
        )),
        Q(
          e,
          "mousemove",
          /*move*/
          l[3]
        )
      ], o = true);
    },
    p(u, c) {
      let d = t;
      t = f(u), t === d ? a[t].p(u, c) : (Z(), k(a[d], 1, 1, () => {
        a[d] = null;
      }), x(), n = a[t], n ? n.p(u, c) : (n = a[t] = r[t](u), n.c()), w(n, 1), n.m(e, null));
    },
    i(u) {
      i || (w(n), i = true);
    },
    o(u) {
      k(n), i = false;
    },
    d(u) {
      u && E(e), a[t].d(), l[7](null), o = false, Ae(s);
    }
  };
}
function dr(l) {
  let e, t, n = (
    /*navIndex*/
    l[2] !== null && il(l)
  );
  return {
    c() {
      n && n.c(), e = he();
    },
    m(i, o) {
      n && n.m(i, o), O(i, e, o), t = true;
    },
    p(i, [o]) {
      i[2] !== null ? n ? (n.p(i, o), o & /*navIndex*/
      4 && w(n, 1)) : (n = il(i), n.c(), w(n, 1), n.m(e.parentNode, e)) : n && (Z(), k(n, 1, 1, () => {
        n = null;
      }), x());
    },
    i(i) {
      t || (w(n), t = true);
    },
    o(i) {
      k(n), t = false;
    },
    d(i) {
      i && E(e), n && n.d(i);
    }
  };
}
function hr(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { items: o = [] } = e, s, r = null;
  const a = He(), { move: f, keydown: u, init: c, navigate: d } = sr(), h = () => a("select", { id: o[r]?.id });
  Je(() => {
    a("ready", { navigate: d, keydown: u, move: f });
  });
  function m(g) {
    ge[g ? "unshift" : "push"](() => {
      s = g, t(1, s);
    });
  }
  const _ = () => d(null);
  return l.$$set = (g) => {
    "items" in g && t(0, o = g.items), "$$scope" in g && t(9, i = g.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*list, items*/
    3 && c(s, o, (g) => t(2, r = g), h);
  }, [
    o,
    s,
    r,
    f,
    d,
    h,
    n,
    m,
    _,
    i
  ];
}
var nn = class extends te {
  constructor(e) {
    super(), ee(this, e, hr, dr, $, { items: 0 });
  }
};
var mr = (l) => ({ option: l[1] & /*option*/
4 });
var sl = (l) => ({ option: (
  /*option*/
  l[33]
) });
function _r(l) {
  let e;
  return {
    c() {
      e = F("i"), b(e, "class", "wx-icon wxi-angle-down svelte-1oh2bu");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: K,
    d(t) {
      t && E(e);
    }
  };
}
function gr(l) {
  let e, t, n;
  return {
    c() {
      e = F("i"), b(e, "class", "wx-icon wxi-close svelte-1oh2bu");
    },
    m(i, o) {
      O(i, e, o), t || (n = Q(e, "click", $t(
        /*doUnselect*/
        l[14]
      )), t = true);
    },
    p: K,
    d(i) {
      i && E(e), t = false, n();
    }
  };
}
function rl(l) {
  let e, t;
  return e = new nn({
    props: {
      items: (
        /*filterOptions*/
        l[8]
      ),
      $$slots: {
        default: [
          br,
          ({ option: n }) => ({ 33: n }),
          ({ option: n }) => [0, n ? 4 : 0]
        ]
      },
      $$scope: { ctx: l }
    }
  }), e.$on(
    "ready",
    /*ready*/
    l[12]
  ), e.$on(
    "select",
    /*selectByEvent*/
    l[13]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*filterOptions*/
      256 && (o.items = /*filterOptions*/
      n[8]), i[0] & /*$$scope*/
      134217728 | i[1] & /*option*/
      4 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function pr(l) {
  let e = (
    /*option*/
    l[33].name + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i[1] & /*option*/
      4 && e !== (e = /*option*/
      n[33].name + "") && de(t, e);
    },
    d(n) {
      n && E(t);
    }
  };
}
function br(l) {
  let e;
  const t = (
    /*#slots*/
    l[22].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[27],
    sl
  ), i = n || pr(l);
  return {
    c() {
      i && i.c();
    },
    m(o, s) {
      i && i.m(o, s), e = true;
    },
    p(o, s) {
      n ? n.p && (!e || s[0] & /*$$scope*/
      134217728 | s[1] & /*option*/
      4) && we(
        n,
        t,
        o,
        /*$$scope*/
        o[27],
        e ? be(
          t,
          /*$$scope*/
          o[27],
          s,
          mr
        ) : ye(
          /*$$scope*/
          o[27]
        ),
        sl
      ) : i && i.p && (!e || s[1] & /*option*/
      4) && i.p(o, e ? s : [-1, -1]);
    },
    i(o) {
      e || (w(i, o), e = true);
    },
    o(o) {
      k(i, o), e = false;
    },
    d(o) {
      i && i.d(o);
    }
  };
}
function wr(l) {
  let e, t, n, i, o, s, r;
  function a(d, h) {
    return (
      /*clearButton*/
      d[6] && !/*disabled*/
      d[4] && /*value*/
      d[0] ? gr : _r
    );
  }
  let f = a(l), u = f(l), c = !/*disabled*/
  l[4] && rl(l);
  return {
    c() {
      e = F("div"), t = F("input"), n = J(), u.c(), i = J(), c && c.c(), b(
        t,
        "id",
        /*id*/
        l[1]
      ), t.disabled = /*disabled*/
      l[4], b(
        t,
        "placeholder",
        /*placeholder*/
        l[2]
      ), b(t, "class", "svelte-1oh2bu"), se(
        t,
        "wx-error",
        /*error*/
        l[5]
      ), b(e, "class", "wx-combo svelte-1oh2bu"), b(
        e,
        "title",
        /*title*/
        l[3]
      );
    },
    m(d, h) {
      O(d, e, h), I(e, t), l[23](t), Ue(
        t,
        /*text*/
        l[7]
      ), I(e, n), u.m(e, null), I(e, i), c && c.m(e, null), o = true, s || (r = [
        Q(
          t,
          "input",
          /*input_1_input_handler*/
          l[24]
        ),
        Q(
          t,
          "focus",
          /*onFocus*/
          l[16]
        ),
        Q(
          t,
          "blur",
          /*onBlur*/
          l[17]
        ),
        Q(
          t,
          "input",
          /*input*/
          l[15]
        ),
        Q(
          e,
          "click",
          /*click_handler*/
          l[25]
        ),
        Q(
          e,
          "keydown",
          /*keydown_handler*/
          l[26]
        )
      ], s = true);
    },
    p(d, h) {
      (!o || h[0] & /*id*/
      2) && b(
        t,
        "id",
        /*id*/
        d[1]
      ), (!o || h[0] & /*disabled*/
      16) && (t.disabled = /*disabled*/
      d[4]), (!o || h[0] & /*placeholder*/
      4) && b(
        t,
        "placeholder",
        /*placeholder*/
        d[2]
      ), h[0] & /*text*/
      128 && t.value !== /*text*/
      d[7] && Ue(
        t,
        /*text*/
        d[7]
      ), (!o || h[0] & /*error*/
      32) && se(
        t,
        "wx-error",
        /*error*/
        d[5]
      ), f === (f = a(d)) && u ? u.p(d, h) : (u.d(1), u = f(d), u && (u.c(), u.m(e, i))), /*disabled*/
      d[4] ? c && (Z(), k(c, 1, 1, () => {
        c = null;
      }), x()) : c ? (c.p(d, h), h[0] & /*disabled*/
      16 && w(c, 1)) : (c = rl(d), c.c(), w(c, 1), c.m(e, null)), (!o || h[0] & /*title*/
      8) && b(
        e,
        "title",
        /*title*/
        d[3]
      );
    },
    i(d) {
      o || (w(c), o = true);
    },
    o(d) {
      k(c), o = false;
    },
    d(d) {
      d && E(e), l[23](null), u.d(), c && c.d(), s = false, Ae(r);
    }
  };
}
function yr(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { value: o = "" } = e, { id: s = pt() } = e, { options: r = [] } = e, { textField: a = "label" } = e, { placeholder: f = "" } = e, { title: u = "" } = e, { disabled: c = false } = e, { error: d = false } = e, { clearButton: h = false } = e;
  const m = He();
  let _ = "", g = [], C, S;
  function D(U) {
    t(9, C = U.detail.navigate), t(10, S = U.detail.keydown);
  }
  let p;
  function y(U) {
    const le = U.detail.id;
    v(le, true);
  }
  function R(U) {
    if (!r.length)
      return;
    if (U === "" && h) {
      M();
      return;
    }
    let le = r.find((X) => X[a] === U);
    le || (le = r.find((X) => X[a].toLowerCase().includes(U.toLowerCase())));
    const re = le ? le.id : p || r[0].id;
    v(re, false);
  }
  function v(U, le) {
    if (U || U === 0) {
      let re = r.find((X) => X.id === U);
      t(7, _ = re[a]), t(8, g = r), le && C(null), o !== re.id && (t(0, o = re.id), m("select", { selected: re }));
    }
    !A && le && H.focus();
  }
  function M() {
    t(7, _ = t(0, o = "")), t(8, g = r), m("select", { selected: null });
  }
  function z() {
    t(8, g = _ ? r.filter((U) => U[a].toLowerCase().includes(_.toLowerCase())) : r), g.length ? C(0) : C(null);
  }
  let H, A;
  function T() {
    A = true;
  }
  function j() {
    A = false, setTimeout(
      () => {
        A || R(_);
      },
      200
    );
  }
  const L = () => g.findIndex((U) => U.id === o);
  function P(U) {
    ge[U ? "unshift" : "push"](() => {
      H = U, t(11, H);
    });
  }
  function G() {
    _ = this.value, t(7, _), t(21, p), t(0, o), t(19, r), t(20, a);
  }
  const ae = () => C(L()), q = (U) => S(U, L());
  return l.$$set = (U) => {
    "value" in U && t(0, o = U.value), "id" in U && t(1, s = U.id), "options" in U && t(19, r = U.options), "textField" in U && t(20, a = U.textField), "placeholder" in U && t(2, f = U.placeholder), "title" in U && t(3, u = U.title), "disabled" in U && t(4, c = U.disabled), "error" in U && t(5, d = U.error), "clearButton" in U && t(6, h = U.clearButton), "$$scope" in U && t(27, i = U.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*prevValue, value, options, textField*/
    3670017 && p != o && (t(7, _ = o || o === 0 ? r.find((U) => U.id === o)[a] : ""), t(21, p = o)), l.$$.dirty[0] & /*options*/
    524288 && t(8, g = r);
  }, [
    o,
    s,
    f,
    u,
    c,
    d,
    h,
    _,
    g,
    C,
    S,
    H,
    D,
    y,
    M,
    z,
    T,
    j,
    L,
    r,
    a,
    p,
    n,
    P,
    G,
    ae,
    q,
    i
  ];
}
var kr = class extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      yr,
      wr,
      $,
      {
        value: 0,
        id: 1,
        options: 19,
        textField: 20,
        placeholder: 2,
        title: 3,
        disabled: 4,
        error: 5,
        clearButton: 6
      },
      null,
      [-1, -1]
    );
  }
};
function vr(l) {
  let e, t, n;
  return {
    c() {
      e = F("input"), b(
        e,
        "id",
        /*id*/
        l[2]
      ), e.readOnly = /*readonly*/
      l[3], e.disabled = /*disabled*/
      l[6], b(
        e,
        "placeholder",
        /*placeholder*/
        l[5]
      ), b(
        e,
        "title",
        /*title*/
        l[9]
      ), b(
        e,
        "style",
        /*inputStyle*/
        l[8]
      ), b(e, "class", "svelte-frdgyo");
    },
    m(i, o) {
      O(i, e, o), Ue(
        e,
        /*value*/
        l[0]
      ), l[24](e), t || (n = [
        Q(
          e,
          "input",
          /*input_1_input_handler_2*/
          l[23]
        ),
        Q(
          e,
          "input",
          /*input_handler_2*/
          l[25]
        ),
        Q(
          e,
          "change",
          /*change_handler_2*/
          l[26]
        )
      ], t = true);
    },
    p(i, o) {
      o & /*id*/
      4 && b(
        e,
        "id",
        /*id*/
        i[2]
      ), o & /*readonly*/
      8 && (e.readOnly = /*readonly*/
      i[3]), o & /*disabled*/
      64 && (e.disabled = /*disabled*/
      i[6]), o & /*placeholder*/
      32 && b(
        e,
        "placeholder",
        /*placeholder*/
        i[5]
      ), o & /*title*/
      512 && b(
        e,
        "title",
        /*title*/
        i[9]
      ), o & /*inputStyle*/
      256 && b(
        e,
        "style",
        /*inputStyle*/
        i[8]
      ), o & /*value*/
      1 && e.value !== /*value*/
      i[0] && Ue(
        e,
        /*value*/
        i[0]
      );
    },
    d(i) {
      i && E(e), l[24](null), t = false, Ae(n);
    }
  };
}
function Sr(l) {
  let e, t, n;
  return {
    c() {
      e = F("input"), b(
        e,
        "id",
        /*id*/
        l[2]
      ), e.readOnly = /*readonly*/
      l[3], e.disabled = /*disabled*/
      l[6], b(
        e,
        "placeholder",
        /*placeholder*/
        l[5]
      ), b(e, "type", "number"), b(
        e,
        "style",
        /*inputStyle*/
        l[8]
      ), b(
        e,
        "title",
        /*title*/
        l[9]
      ), b(e, "class", "svelte-frdgyo");
    },
    m(i, o) {
      O(i, e, o), Ue(
        e,
        /*value*/
        l[0]
      ), l[20](e), t || (n = [
        Q(
          e,
          "input",
          /*input_1_input_handler_1*/
          l[19]
        ),
        Q(
          e,
          "input",
          /*input_handler_1*/
          l[21]
        ),
        Q(
          e,
          "change",
          /*change_handler_1*/
          l[22]
        )
      ], t = true);
    },
    p(i, o) {
      o & /*id*/
      4 && b(
        e,
        "id",
        /*id*/
        i[2]
      ), o & /*readonly*/
      8 && (e.readOnly = /*readonly*/
      i[3]), o & /*disabled*/
      64 && (e.disabled = /*disabled*/
      i[6]), o & /*placeholder*/
      32 && b(
        e,
        "placeholder",
        /*placeholder*/
        i[5]
      ), o & /*inputStyle*/
      256 && b(
        e,
        "style",
        /*inputStyle*/
        i[8]
      ), o & /*title*/
      512 && b(
        e,
        "title",
        /*title*/
        i[9]
      ), o & /*value*/
      1 && Ei(e.value) !== /*value*/
      i[0] && Ue(
        e,
        /*value*/
        i[0]
      );
    },
    d(i) {
      i && E(e), l[20](null), t = false, Ae(n);
    }
  };
}
function Cr(l) {
  let e, t, n;
  return {
    c() {
      e = F("input"), b(
        e,
        "id",
        /*id*/
        l[2]
      ), e.readOnly = /*readonly*/
      l[3], e.disabled = /*disabled*/
      l[6], b(
        e,
        "placeholder",
        /*placeholder*/
        l[5]
      ), b(e, "type", "password"), b(
        e,
        "style",
        /*inputStyle*/
        l[8]
      ), b(
        e,
        "title",
        /*title*/
        l[9]
      ), b(e, "class", "svelte-frdgyo");
    },
    m(i, o) {
      O(i, e, o), Ue(
        e,
        /*value*/
        l[0]
      ), l[16](e), t || (n = [
        Q(
          e,
          "input",
          /*input_1_input_handler*/
          l[15]
        ),
        Q(
          e,
          "input",
          /*input_handler*/
          l[17]
        ),
        Q(
          e,
          "change",
          /*change_handler*/
          l[18]
        )
      ], t = true);
    },
    p(i, o) {
      o & /*id*/
      4 && b(
        e,
        "id",
        /*id*/
        i[2]
      ), o & /*readonly*/
      8 && (e.readOnly = /*readonly*/
      i[3]), o & /*disabled*/
      64 && (e.disabled = /*disabled*/
      i[6]), o & /*placeholder*/
      32 && b(
        e,
        "placeholder",
        /*placeholder*/
        i[5]
      ), o & /*inputStyle*/
      256 && b(
        e,
        "style",
        /*inputStyle*/
        i[8]
      ), o & /*title*/
      512 && b(
        e,
        "title",
        /*title*/
        i[9]
      ), o & /*value*/
      1 && e.value !== /*value*/
      i[0] && Ue(
        e,
        /*value*/
        i[0]
      );
    },
    d(i) {
      i && E(e), l[16](null), t = false, Ae(n);
    }
  };
}
function al(l) {
  let e, t;
  return {
    c() {
      e = F("i"), b(e, "class", t = "wx-icon " + /*icon*/
      l[10] + " svelte-frdgyo");
    },
    m(n, i) {
      O(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      1024 && t !== (t = "wx-icon " + /*icon*/
      n[10] + " svelte-frdgyo") && b(e, "class", t);
    },
    d(n) {
      n && E(e);
    }
  };
}
function Mr(l) {
  let e, t, n;
  function i(a, f) {
    return (
      /*type*/
      a[4] == "password" ? Cr : (
        /*type*/
        a[4] == "number" ? Sr : vr
      )
    );
  }
  let o = i(l), s = o(l), r = (
    /*icon*/
    l[10] && al(l)
  );
  return {
    c() {
      e = F("div"), s.c(), t = J(), r && r.c(), b(e, "class", n = "wx-text " + /*css*/
      l[1] + " svelte-frdgyo"), se(
        e,
        "wx-error",
        /*error*/
        l[7]
      ), se(
        e,
        "wx-disabled",
        /*disabled*/
        l[6]
      );
    },
    m(a, f) {
      O(a, e, f), s.m(e, null), I(e, t), r && r.m(e, null);
    },
    p(a, [f]) {
      o === (o = i(a)) && s ? s.p(a, f) : (s.d(1), s = o(a), s && (s.c(), s.m(e, t))), /*icon*/
      a[10] ? r ? r.p(a, f) : (r = al(a), r.c(), r.m(e, null)) : r && (r.d(1), r = null), f & /*css*/
      2 && n !== (n = "wx-text " + /*css*/
      a[1] + " svelte-frdgyo") && b(e, "class", n), f & /*css, error*/
      130 && se(
        e,
        "wx-error",
        /*error*/
        a[7]
      ), f & /*css, disabled*/
      66 && se(
        e,
        "wx-disabled",
        /*disabled*/
        a[6]
      );
    },
    i: K,
    o: K,
    d(a) {
      a && E(e), s.d(), r && r.d();
    }
  };
}
function Rr(l, e, t) {
  let { value: n = "" } = e, { id: i = pt() } = e, { readonly: o = false } = e, { focus: s = false } = e, { select: r = false } = e, { type: a = "text" } = e, { placeholder: f = "" } = e, { disabled: u = false } = e, { error: c = false } = e, { inputStyle: d = "" } = e, { title: h = "" } = e, { css: m = "" } = e, { icon: _ = "" } = e;
  const g = He();
  _ && m.indexOf("wx-icon-left") === -1 && (m = "wx-icon-right " + m);
  let C;
  Je(() => {
    setTimeout(
      () => {
        s && C && C.focus(), r && C && C.select();
      },
      1
    );
  });
  function S() {
    n = this.value, t(0, n);
  }
  function D(L) {
    ge[L ? "unshift" : "push"](() => {
      C = L, t(11, C);
    });
  }
  const p = () => g("change", { value: n, input: true }), y = () => g("change", { value: n });
  function R() {
    n = Ei(this.value), t(0, n);
  }
  function v(L) {
    ge[L ? "unshift" : "push"](() => {
      C = L, t(11, C);
    });
  }
  const M = () => g("change", { value: n, input: true }), z = () => g("change", { value: n });
  function H() {
    n = this.value, t(0, n);
  }
  function A(L) {
    ge[L ? "unshift" : "push"](() => {
      C = L, t(11, C);
    });
  }
  const T = () => g("change", { value: n, input: true }), j = () => g("change", { value: n });
  return l.$$set = (L) => {
    "value" in L && t(0, n = L.value), "id" in L && t(2, i = L.id), "readonly" in L && t(3, o = L.readonly), "focus" in L && t(13, s = L.focus), "select" in L && t(14, r = L.select), "type" in L && t(4, a = L.type), "placeholder" in L && t(5, f = L.placeholder), "disabled" in L && t(6, u = L.disabled), "error" in L && t(7, c = L.error), "inputStyle" in L && t(8, d = L.inputStyle), "title" in L && t(9, h = L.title), "css" in L && t(1, m = L.css), "icon" in L && t(10, _ = L.icon);
  }, [
    n,
    m,
    i,
    o,
    a,
    f,
    u,
    c,
    d,
    h,
    _,
    C,
    g,
    s,
    r,
    S,
    D,
    p,
    y,
    R,
    v,
    M,
    z,
    H,
    A,
    T,
    j
  ];
}
var ln = class extends te {
  constructor(e) {
    super(), ee(this, e, Rr, Mr, $, {
      value: 0,
      id: 2,
      readonly: 3,
      focus: 13,
      select: 14,
      type: 4,
      placeholder: 5,
      disabled: 6,
      error: 7,
      inputStyle: 8,
      title: 9,
      css: 1,
      icon: 10
    });
  }
};
function Dr(l) {
  let e;
  return {
    c() {
      e = F("span"), b(e, "class", "wx-spacer svelte-wurt7c");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: K,
    d(t) {
      t && E(e);
    }
  };
}
function Er(l) {
  let e, t, n;
  return {
    c() {
      e = F("i"), b(e, "class", "wx-pager wxi-angle-left svelte-wurt7c");
    },
    m(i, o) {
      O(i, e, o), t || (n = Q(
        e,
        "click",
        /*click_handler*/
        l[8]
      ), t = true);
    },
    p: K,
    d(i) {
      i && E(e), t = false, n();
    }
  };
}
function Or(l) {
  let e;
  return {
    c() {
      e = F("span"), b(e, "class", "wx-spacer svelte-wurt7c");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: K,
    d(t) {
      t && E(e);
    }
  };
}
function Ar(l) {
  let e, t, n;
  return {
    c() {
      e = F("i"), b(e, "class", "wx-pager wxi-angle-right svelte-wurt7c");
    },
    m(i, o) {
      O(i, e, o), t || (n = Q(
        e,
        "click",
        /*click_handler_1*/
        l[9]
      ), t = true);
    },
    p: K,
    d(i) {
      i && E(e), t = false, n();
    }
  };
}
function Hr(l) {
  let e, t, n, i, o, s, r;
  function a(m, _) {
    return (
      /*part*/
      m[1] != "right" ? Er : Dr
    );
  }
  let f = a(l), u = f(l);
  function c(m, _) {
    return (
      /*part*/
      m[1] != "left" ? Ar : Or
    );
  }
  let d = c(l), h = d(l);
  return {
    c() {
      e = F("div"), u.c(), t = J(), n = F("span"), i = ie(
        /*label*/
        l[2]
      ), o = J(), h.c(), b(n, "class", "wx-label svelte-wurt7c"), b(e, "class", "wx-header svelte-wurt7c");
    },
    m(m, _) {
      O(m, e, _), u.m(e, null), I(e, t), I(e, n), I(n, i), I(e, o), h.m(e, null), s || (r = Q(
        n,
        "click",
        /*changeType*/
        l[4]
      ), s = true);
    },
    p(m, [_]) {
      f === (f = a(m)) && u ? u.p(m, _) : (u.d(1), u = f(m), u && (u.c(), u.m(e, t))), _ & /*label*/
      4 && de(
        i,
        /*label*/
        m[2]
      ), d === (d = c(m)) && h ? h.p(m, _) : (h.d(1), h = d(m), h && (h.c(), h.m(e, null)));
    },
    i: K,
    o: K,
    d(m) {
      m && E(e), u.d(), h.d(), s = false, r();
    }
  };
}
function Nr(l, e, t) {
  const n = He(), o = Oe("wx-i18n").getRaw().calendar.monthFull;
  let { date: s } = e, { type: r } = e, { part: a } = e, f, u, c;
  function d() {
    n("shift", { diff: 0, type: r });
  }
  const h = () => n("shift", { diff: -1, type: r }), m = () => n("shift", { diff: 1, type: r });
  return l.$$set = (_) => {
    "date" in _ && t(5, s = _.date), "type" in _ && t(0, r = _.type), "part" in _ && t(1, a = _.part);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*date, type, month, year*/
    225)
      switch (t(6, f = s.getMonth()), t(7, u = s.getFullYear()), r) {
        case "month":
          t(2, c = `${o[f]} ${u}`);
          break;
        case "year":
          t(2, c = u);
          break;
        case "duodecade": {
          const _ = u - u % 10, g = _ + 9;
          t(2, c = `${_} - ${g}`);
          break;
        }
      }
  }, [
    r,
    a,
    c,
    n,
    d,
    s,
    f,
    u,
    h,
    m
  ];
}
var Fr = class extends te {
  constructor(e) {
    super(), ee(this, e, Nr, Hr, $, { date: 5, type: 0, part: 1 });
  }
};
function Tr(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[2].default
  ), s = pe(
    o,
    l,
    /*$$scope*/
    l[1],
    null
  );
  return {
    c() {
      e = F("button"), s && s.c(), b(e, "class", "svelte-1f88uh6");
    },
    m(r, a) {
      O(r, e, a), s && s.m(e, null), t = true, n || (i = Q(e, "click", function() {
        Ye(
          /*click*/
          l[0]
        ) && l[0].apply(this, arguments);
      }), n = true);
    },
    p(r, [a]) {
      l = r, s && s.p && (!t || a & /*$$scope*/
      2) && we(
        s,
        o,
        l,
        /*$$scope*/
        l[1],
        t ? be(
          o,
          /*$$scope*/
          l[1],
          a,
          null
        ) : ye(
          /*$$scope*/
          l[1]
        ),
        null
      );
    },
    i(r) {
      t || (w(s, r), t = true);
    },
    o(r) {
      k(s, r), t = false;
    },
    d(r) {
      r && E(e), s && s.d(r), n = false, i();
    }
  };
}
function Lr(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { click: o } = e;
  return l.$$set = (s) => {
    "click" in s && t(0, o = s.click), "$$scope" in s && t(1, i = s.$$scope);
  }, [o, i, n];
}
var Ht = class extends te {
  constructor(e) {
    super(), ee(this, e, Lr, Tr, $, { click: 0 });
  }
};
function fl(l, e, t) {
  const n = l.slice();
  return n[17] = e[t], n;
}
function ul(l, e, t) {
  const n = l.slice();
  return n[17] = e[t], n;
}
function cl(l) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = `${/*day*/
      l[17]}`, b(e, "class", "wx-weekday svelte-1bsdg9l");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: K,
    d(t) {
      t && E(e);
    }
  };
}
function dl(l, e) {
  let t, n = (
    /*day*/
    e[17].day + ""
  ), i, o, s, r;
  return {
    key: l,
    first: null,
    c() {
      t = F("div"), i = ie(n), o = J(), b(t, "class", s = "wx-day " + /*day*/
      e[17].css + " svelte-1bsdg9l"), b(t, "data-id", r = /*day*/
      e[17].date), se(t, "wx-out", !/*day*/
      e[17].in), this.first = t;
    },
    m(a, f) {
      O(a, t, f), I(t, i), I(t, o);
    },
    p(a, f) {
      e = a, f & /*days*/
      1 && n !== (n = /*day*/
      e[17].day + "") && de(i, n), f & /*days*/
      1 && s !== (s = "wx-day " + /*day*/
      e[17].css + " svelte-1bsdg9l") && b(t, "class", s), f & /*days*/
      1 && r !== (r = /*day*/
      e[17].date) && b(t, "data-id", r), f & /*days, days*/
      1 && se(t, "wx-out", !/*day*/
      e[17].in);
    },
    d(a) {
      a && E(t);
    }
  };
}
function zr(l) {
  let e, t, n, i, o = [], s = /* @__PURE__ */ new Map(), r, a, f = ke(
    /*weekdays*/
    l[1]
  ), u = [];
  for (let h = 0; h < f.length; h += 1)
    u[h] = cl(ul(l, f, h));
  let c = ke(
    /*days*/
    l[0]
  );
  const d = (h) => (
    /*day*/
    h[17].date
  );
  for (let h = 0; h < c.length; h += 1) {
    let m = fl(l, c, h), _ = d(m);
    s.set(_, o[h] = dl(_, m));
  }
  return {
    c() {
      e = F("div"), t = F("div");
      for (let h = 0; h < u.length; h += 1)
        u[h].c();
      n = J(), i = F("div");
      for (let h = 0; h < o.length; h += 1)
        o[h].c();
      b(t, "class", "wx-weekdays svelte-1bsdg9l"), b(i, "class", "wx-days svelte-1bsdg9l");
    },
    m(h, m) {
      O(h, e, m), I(e, t);
      for (let _ = 0; _ < u.length; _ += 1)
        u[_] && u[_].m(t, null);
      I(e, n), I(e, i);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_] && o[_].m(i, null);
      r || (a = ze(en.call(
        null,
        i,
        /*selectDates*/
        l[2]
      )), r = true);
    },
    p(h, [m]) {
      if (m & /*weekdays*/
      2) {
        f = ke(
          /*weekdays*/
          h[1]
        );
        let _;
        for (_ = 0; _ < f.length; _ += 1) {
          const g = ul(h, f, _);
          u[_] ? u[_].p(g, m) : (u[_] = cl(g), u[_].c(), u[_].m(t, null));
        }
        for (; _ < u.length; _ += 1)
          u[_].d(1);
        u.length = f.length;
      }
      m & /*days*/
      1 && (c = ke(
        /*days*/
        h[0]
      ), o = it(o, m, d, 1, h, c, s, i, qo, dl, null, fl));
    },
    i: K,
    o: K,
    d(h) {
      h && E(e), Nt(u, h);
      for (let m = 0; m < o.length; m += 1)
        o[m].d();
      r = false, a();
    }
  };
}
function Ir(l) {
  const e = l.getDay();
  return e === 0 || e === 6;
}
function qr(l, e, t) {
  let { value: n } = e, { current: i } = e, { cancel: o } = e, { select: s } = e, { part: r } = e, { markers: a = null } = e;
  const f = Oe("wx-i18n").getRaw().calendar, u = (f.weekStart || 7) % 7, c = f.dayShort.slice(u).concat(f.dayShort.slice(0, u));
  let d, h;
  const m = (p, y, R) => new Date(p.getFullYear(), p.getMonth() + (y || 0), p.getDate() + (R || 0));
  let _ = r !== "normal";
  function g() {
    const p = m(i, 0, 1 - i.getDate());
    return p.setDate(p.getDate() - (p.getDay() - (u - 7)) % 7), p;
  }
  function C() {
    const p = m(i, 1, -i.getDate());
    return p.setDate(p.getDate() + (6 - p.getDay() + u) % 7), p;
  }
  const S = { click: D };
  function D(p, y) {
    s && (y.stopPropagation(), s(new Date(new Date(p)))), o && o();
  }
  return l.$$set = (p) => {
    "value" in p && t(3, n = p.value), "current" in p && t(4, i = p.current), "cancel" in p && t(5, o = p.cancel), "select" in p && t(6, s = p.select), "part" in p && t(7, r = p.part), "markers" in p && t(8, a = p.markers);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*part, value, current, date, markers, days*/
    921) {
      r == "normal" ? t(9, h = [n ? m(n).valueOf() : 0]) : t(9, h = n ? [
        n.start ? m(n.start).valueOf() : 0,
        n.end ? m(n.end).valueOf() : 0
      ] : [0, 0]);
      const p = g(), y = C(), R = i.getMonth();
      t(0, d = []);
      for (let v = p; v <= y; v.setDate(v.getDate() + 1)) {
        const M = {
          day: v.getDate(),
          in: v.getMonth() === R,
          date: v.valueOf()
        };
        let z = "";
        if (z += M.in ? "" : " wx-inactive", z += h.indexOf(M.date) > -1 ? " wx-selected" : "", _) {
          const H = M.date == h[0], A = M.date == h[1];
          H && !A ? z += " wx-left" : A && !H && (z += " wx-right"), M.date > h[0] && M.date < h[1] && (z += " wx-inrange");
        }
        if (z += Ir(v) ? " wx-weekend" : "", a) {
          const H = a(v);
          H && (z += " " + H);
        }
        d.push(__spreadProps(__spreadValues({}, M), { css: z }));
      }
    }
  }, [
    d,
    c,
    S,
    n,
    i,
    o,
    s,
    r,
    a,
    h
  ];
}
var Pr = class extends te {
  constructor(e) {
    super(), ee(this, e, qr, zr, $, {
      value: 3,
      current: 4,
      cancel: 5,
      select: 6,
      part: 7,
      markers: 8
    });
  }
};
function hl(l, e, t) {
  const n = l.slice();
  return n[9] = e[t], n[11] = t, n;
}
function ml(l) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = `${/*month*/
      l[9]} `, b(e, "class", "wx-month svelte-pmn9ti"), b(
        e,
        "data-id",
        /*i*/
        l[11]
      ), se(
        e,
        "wx-current",
        /*monthNum*/
        l[1] === /*i*/
        l[11]
      );
    },
    m(t, n) {
      O(t, e, n);
    },
    p(t, n) {
      n & /*monthNum*/
      2 && se(
        e,
        "wx-current",
        /*monthNum*/
        t[1] === /*i*/
        t[11]
      );
    },
    d(t) {
      t && E(e);
    }
  };
}
function jr(l) {
  let e = (
    /*locale*/
    l[2].done + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p: K,
    d(n) {
      n && E(t);
    }
  };
}
function Wr(l) {
  let e, t, n, i, o, s, r, a = ke(
    /*months*/
    l[3]
  ), f = [];
  for (let u = 0; u < a.length; u += 1)
    f[u] = ml(hl(l, a, u));
  return i = new Ht({
    props: {
      click: (
        /*cancel*/
        l[0]
      ),
      $$slots: { default: [jr] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = F("div");
      for (let u = 0; u < f.length; u += 1)
        f[u].c();
      t = J(), n = F("div"), V(i.$$.fragment), b(e, "class", "wx-months svelte-pmn9ti"), b(n, "class", "wx-buttons svelte-pmn9ti");
    },
    m(u, c) {
      O(u, e, c);
      for (let d = 0; d < f.length; d += 1)
        f[d] && f[d].m(e, null);
      O(u, t, c), O(u, n, c), W(i, n, null), o = true, s || (r = ze(en.call(
        null,
        e,
        /*selectMonths*/
        l[4]
      )), s = true);
    },
    p(u, [c]) {
      if (c & /*monthNum, months*/
      10) {
        a = ke(
          /*months*/
          u[3]
        );
        let h;
        for (h = 0; h < a.length; h += 1) {
          const m = hl(u, a, h);
          f[h] ? f[h].p(m, c) : (f[h] = ml(m), f[h].c(), f[h].m(e, null));
        }
        for (; h < f.length; h += 1)
          f[h].d(1);
        f.length = a.length;
      }
      const d = {};
      c & /*cancel*/
      1 && (d.click = /*cancel*/
      u[0]), c & /*$$scope*/
      4096 && (d.$$scope = { dirty: c, ctx: u }), i.$set(d);
    },
    i(u) {
      o || (w(i.$$.fragment, u), o = true);
    },
    o(u) {
      k(i.$$.fragment, u), o = false;
    },
    d(u) {
      u && (E(e), E(t), E(n)), Nt(f, u), B(i), s = false, r();
    }
  };
}
function Br(l, e, t) {
  let { value: n } = e, { current: i } = e, { cancel: o } = e, { part: s } = e;
  const r = Oe("wx-i18n").getRaw().calendar, a = r.monthShort;
  let f;
  const u = { click: c };
  function c(d, h) {
    (d || d === 0) && (h.stopPropagation(), i.setMonth(d), t(6, i)), s === "normal" && t(5, n = new Date(i)), o();
  }
  return l.$$set = (d) => {
    "value" in d && t(5, n = d.value), "current" in d && t(6, i = d.current), "cancel" in d && t(0, o = d.cancel), "part" in d && t(7, s = d.part);
  }, l.$$.update = () => {
    l.$$.dirty & /*part, value, current*/
    224 && (s !== "normal" && n ? s === "left" && n.start ? t(1, f = n.start.getMonth()) : s === "right" && n.end ? t(1, f = n.end.getMonth()) : t(1, f = i.getMonth()) : t(1, f = i.getMonth()));
  }, [o, f, r, a, u, n, i, s];
}
var Vr = class extends te {
  constructor(e) {
    super(), ee(this, e, Br, Wr, $, { value: 5, current: 6, cancel: 0, part: 7 });
  }
};
function _l(l, e, t) {
  const n = l.slice();
  return n[9] = e[t], n[11] = t, n;
}
function gl(l) {
  let e, t = (
    /*y*/
    l[9] + ""
  ), n, i, o;
  return {
    c() {
      e = F("div"), n = ie(t), i = J(), b(e, "class", "wx-year svelte-is1ghx"), b(e, "data-id", o = /*y*/
      l[9]), se(
        e,
        "wx-current",
        /*year*/
        l[2] == /*y*/
        l[9]
      ), se(
        e,
        "wx-prev-decade",
        /*i*/
        l[11] === 0
      ), se(
        e,
        "wx-next-decade",
        /*i*/
        l[11] === 11
      );
    },
    m(s, r) {
      O(s, e, r), I(e, n), I(e, i);
    },
    p(s, r) {
      r & /*years*/
      2 && t !== (t = /*y*/
      s[9] + "") && de(n, t), r & /*years*/
      2 && o !== (o = /*y*/
      s[9]) && b(e, "data-id", o), r & /*year, years*/
      6 && se(
        e,
        "wx-current",
        /*year*/
        s[2] == /*y*/
        s[9]
      );
    },
    d(s) {
      s && E(e);
    }
  };
}
function Yr(l) {
  let e = (
    /*_*/
    l[3].done + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p: K,
    d(n) {
      n && E(t);
    }
  };
}
function Gr(l) {
  let e, t, n, i, o, s, r, a = ke(
    /*years*/
    l[1]
  ), f = [];
  for (let u = 0; u < a.length; u += 1)
    f[u] = gl(_l(l, a, u));
  return i = new Ht({
    props: {
      click: (
        /*cancel*/
        l[0]
      ),
      $$slots: { default: [Yr] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = F("div");
      for (let u = 0; u < f.length; u += 1)
        f[u].c();
      t = J(), n = F("div"), V(i.$$.fragment), b(e, "class", "wx-years svelte-is1ghx"), b(n, "class", "wx-buttons svelte-is1ghx");
    },
    m(u, c) {
      O(u, e, c);
      for (let d = 0; d < f.length; d += 1)
        f[d] && f[d].m(e, null);
      O(u, t, c), O(u, n, c), W(i, n, null), o = true, s || (r = ze(en.call(
        null,
        e,
        /*selectYears*/
        l[4]
      )), s = true);
    },
    p(u, [c]) {
      if (c & /*years, year*/
      6) {
        a = ke(
          /*years*/
          u[1]
        );
        let h;
        for (h = 0; h < a.length; h += 1) {
          const m = _l(u, a, h);
          f[h] ? f[h].p(m, c) : (f[h] = gl(m), f[h].c(), f[h].m(e, null));
        }
        for (; h < f.length; h += 1)
          f[h].d(1);
        f.length = a.length;
      }
      const d = {};
      c & /*cancel*/
      1 && (d.click = /*cancel*/
      u[0]), c & /*$$scope*/
      4096 && (d.$$scope = { dirty: c, ctx: u }), i.$set(d);
    },
    i(u) {
      o || (w(i.$$.fragment, u), o = true);
    },
    o(u) {
      k(i.$$.fragment, u), o = false;
    },
    d(u) {
      u && (E(e), E(t), E(n)), Nt(f, u), B(i), s = false, r();
    }
  };
}
function Ur(l, e, t) {
  const n = Oe("wx-i18n").getRaw().calendar;
  let { value: i } = e, { current: o } = e, { cancel: s } = e, { part: r } = e, a, f;
  const u = { click: c };
  function c(d, h) {
    d && (h.stopPropagation(), o.setFullYear(d), t(5, o)), r === "normal" && t(6, i = new Date(o)), s();
  }
  return l.$$set = (d) => {
    "value" in d && t(6, i = d.value), "current" in d && t(5, o = d.current), "cancel" in d && t(0, s = d.cancel), "part" in d && t(7, r = d.part);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*current, year, years*/
    38) {
      t(2, f = o.getFullYear());
      const d = f - f % 10 - 1, h = d + 12;
      t(1, a = []);
      for (let m = d; m < h; ++m)
        a.push(m);
    }
  }, [s, a, f, n, u, o, i, r];
}
var Kr = class extends te {
  constructor(e) {
    super(), ee(this, e, Ur, Gr, $, { value: 6, current: 5, cancel: 0, part: 7 });
  }
};
var Jt = {
  month: {
    component: Pr,
    next: Jr,
    prev: Xr
  },
  year: {
    component: Vr,
    next: Zr,
    prev: Qr
  },
  duodecade: {
    component: Kr,
    next: $r,
    prev: xr
  }
};
function Xr(l) {
  let e = new Date(l);
  for (e.setMonth(l.getMonth() - 1); l.getMonth() === e.getMonth(); )
    e.setDate(e.getDate() - 1);
  return e;
}
function Jr(l) {
  return l = new Date(l), l.setDate(1), l.setMonth(l.getMonth() + 1), l;
}
function Qr(l) {
  return l = new Date(l), l.setFullYear(l.getFullYear() - 1), l;
}
function Zr(l) {
  return l = new Date(l), l.setFullYear(l.getFullYear() + 1), l;
}
function xr(l) {
  return l = new Date(l), l.setFullYear(l.getFullYear() - 10), l;
}
function $r(l) {
  return l = new Date(l), l.setFullYear(l.getFullYear() + 10), l;
}
function pl(l) {
  let e, t, n, i, o, s, r, a, f = (
    /*done*/
    l[2] && bl(l)
  );
  return i = new Ht({
    props: {
      click: (
        /*func_1*/
        l[14]
      ),
      $$slots: { default: [ta] },
      $$scope: { ctx: l }
    }
  }), r = new Ht({
    props: {
      click: (
        /*func_2*/
        l[15]
      ),
      $$slots: { default: [na] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = F("div"), f && f.c(), t = J(), n = F("div"), V(i.$$.fragment), o = J(), s = F("div"), V(r.$$.fragment), b(n, "class", "wx-button-item svelte-9ihaic"), b(s, "class", "wx-button-item svelte-9ihaic"), b(e, "class", "wx-buttons svelte-9ihaic");
    },
    m(u, c) {
      O(u, e, c), f && f.m(e, null), I(e, t), I(e, n), W(i, n, null), I(e, o), I(e, s), W(r, s, null), a = true;
    },
    p(u, c) {
      u[2] ? f ? (f.p(u, c), c & /*done*/
      4 && w(f, 1)) : (f = bl(u), f.c(), w(f, 1), f.m(e, t)) : f && (Z(), k(f, 1, 1, () => {
        f = null;
      }), x());
      const d = {};
      c & /*$$scope*/
      131072 && (d.$$scope = { dirty: c, ctx: u }), i.$set(d);
      const h = {};
      c & /*$$scope*/
      131072 && (h.$$scope = { dirty: c, ctx: u }), r.$set(h);
    },
    i(u) {
      a || (w(f), w(i.$$.fragment, u), w(r.$$.fragment, u), a = true);
    },
    o(u) {
      k(f), k(i.$$.fragment, u), k(r.$$.fragment, u), a = false;
    },
    d(u) {
      u && E(e), f && f.d(), B(i), B(r);
    }
  };
}
function bl(l) {
  let e, t, n;
  return t = new Ht({
    props: {
      click: (
        /*func*/
        l[13]
      ),
      $$slots: { default: [ea] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = F("div"), V(t.$$.fragment), b(e, "class", "wx-button-item svelte-9ihaic");
    },
    m(i, o) {
      O(i, e, o), W(t, e, null), n = true;
    },
    p(i, o) {
      const s = {};
      o & /*$$scope*/
      131072 && (s.$$scope = { dirty: o, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (w(t.$$.fragment, i), n = true);
    },
    o(i) {
      k(t.$$.fragment, i), n = false;
    },
    d(i) {
      i && E(e), B(t);
    }
  };
}
function ea(l) {
  let e = (
    /*_*/
    l[7]("done") + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p: K,
    d(n) {
      n && E(t);
    }
  };
}
function ta(l) {
  let e = (
    /*_*/
    l[7]("clear") + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p: K,
    d(n) {
      n && E(t);
    }
  };
}
function na(l) {
  let e = (
    /*_*/
    l[7]("today") + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p: K,
    d(n) {
      n && E(t);
    }
  };
}
function la(l) {
  let e, t, n, i, o, s, r, a, f;
  n = new Fr({
    props: {
      date: (
        /*current*/
        l[1]
      ),
      part: (
        /*part*/
        l[3]
      ),
      type: (
        /*type*/
        l[6]
      )
    }
  }), n.$on(
    "shift",
    /*shift_handler*/
    l[12]
  );
  var u = Jt[
    /*type*/
    l[6]
  ].component;
  function c(h, m) {
    return {
      props: {
        value: (
          /*value*/
          h[0]
        ),
        current: (
          /*current*/
          h[1]
        ),
        part: (
          /*part*/
          h[3]
        ),
        markers: (
          /*markers*/
          h[4]
        ),
        select: (
          /*select*/
          h[11]
        ),
        cancel: (
          /*cancel*/
          h[9]
        )
      }
    };
  }
  u && (s = Le(u, c(l)));
  let d = (
    /*type*/
    l[6] === "month" && /*buttons*/
    l[5] && pl(l)
  );
  return {
    c() {
      e = F("div"), t = F("div"), V(n.$$.fragment), i = J(), o = F("div"), s && V(s.$$.fragment), r = J(), d && d.c(), b(t, "class", "wx-wrap svelte-9ihaic"), b(e, "class", a = "wx-calendar " + /*part*/
      (l[3] !== "normal" && /*part*/
      l[3] !== "both" ? "wx-part" : "") + " svelte-9ihaic");
    },
    m(h, m) {
      O(h, e, m), I(e, t), W(n, t, null), I(t, i), I(t, o), s && W(s, o, null), I(o, r), d && d.m(o, null), f = true;
    },
    p(h, [m]) {
      const _ = {};
      if (m & /*current*/
      2 && (_.date = /*current*/
      h[1]), m & /*part*/
      8 && (_.part = /*part*/
      h[3]), m & /*type*/
      64 && (_.type = /*type*/
      h[6]), n.$set(_), m & /*type*/
      64 && u !== (u = Jt[
        /*type*/
        h[6]
      ].component)) {
        if (s) {
          Z();
          const g = s;
          k(g.$$.fragment, 1, 0, () => {
            B(g, 1);
          }), x();
        }
        u ? (s = Le(u, c(h)), V(s.$$.fragment), w(s.$$.fragment, 1), W(s, o, r)) : s = null;
      } else if (u) {
        const g = {};
        m & /*value*/
        1 && (g.value = /*value*/
        h[0]), m & /*current*/
        2 && (g.current = /*current*/
        h[1]), m & /*part*/
        8 && (g.part = /*part*/
        h[3]), m & /*markers*/
        16 && (g.markers = /*markers*/
        h[4]), s.$set(g);
      }
      h[6] === "month" && /*buttons*/
      h[5] ? d ? (d.p(h, m), m & /*type, buttons*/
      96 && w(d, 1)) : (d = pl(h), d.c(), w(d, 1), d.m(o, null)) : d && (Z(), k(d, 1, 1, () => {
        d = null;
      }), x()), (!f || m & /*part*/
      8 && a !== (a = "wx-calendar " + /*part*/
      (h[3] !== "normal" && /*part*/
      h[3] !== "both" ? "wx-part" : "") + " svelte-9ihaic")) && b(e, "class", a);
    },
    i(h) {
      f || (w(n.$$.fragment, h), s && w(s.$$.fragment, h), w(d), f = true);
    },
    o(h) {
      k(n.$$.fragment, h), s && k(s.$$.fragment, h), k(d), f = false;
    },
    d(h) {
      h && E(e), B(n), s && B(s), d && d.d();
    }
  };
}
function ia(l, e, t) {
  const n = He(), i = Oe("wx-i18n").getGroup("calendar");
  let { value: o } = e, { current: s } = e, { done: r = false } = e, { part: a = "normal" } = e, { markers: f = null } = e, { buttons: u = true } = e, c = "month";
  function d(p, y) {
    p.preventDefault(), n("change", { value: y });
  }
  function h() {
    c === "duodecade" ? t(6, c = "year") : c === "year" && t(6, c = "month");
  }
  function m(p) {
    p.diff == 0 ? c === "month" ? t(6, c = "year") : c === "year" && t(6, c = "duodecade") : n("shift", p);
  }
  function _(p) {
    n("change", { select: true, value: p });
  }
  const g = (p) => m(p.detail), C = (p) => d(p, -1), S = (p) => d(p, null), D = (p) => d(p, /* @__PURE__ */ new Date());
  return l.$$set = (p) => {
    "value" in p && t(0, o = p.value), "current" in p && t(1, s = p.current), "done" in p && t(2, r = p.done), "part" in p && t(3, a = p.part), "markers" in p && t(4, f = p.markers), "buttons" in p && t(5, u = p.buttons);
  }, [
    o,
    s,
    r,
    a,
    f,
    u,
    c,
    i,
    d,
    h,
    m,
    _,
    g,
    C,
    S,
    D
  ];
}
var Qt = class extends te {
  constructor(e) {
    super(), ee(this, e, ia, la, $, {
      value: 0,
      current: 1,
      done: 2,
      part: 3,
      markers: 4,
      buttons: 5
    });
  }
};
function oa(l) {
  let e, t;
  return e = new Qt({
    props: {
      value: (
        /*value*/
        l[0]
      ),
      current: (
        /*current*/
        l[1]
      ),
      markers: (
        /*markers*/
        l[2]
      ),
      buttons: (
        /*buttons*/
        l[3]
      )
    }
  }), e.$on(
    "shift",
    /*shift_handler*/
    l[6]
  ), e.$on(
    "change",
    /*change_handler*/
    l[7]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, [i]) {
      const o = {};
      i & /*value*/
      1 && (o.value = /*value*/
      n[0]), i & /*current*/
      2 && (o.current = /*current*/
      n[1]), i & /*markers*/
      4 && (o.markers = /*markers*/
      n[2]), i & /*buttons*/
      8 && (o.buttons = /*buttons*/
      n[3]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function sa(l, e, t) {
  const n = He();
  let { value: i } = e, { current: o } = e, { markers: s = null } = e, { buttons: r = true } = e;
  function a() {
    o || t(1, o = i ? new Date(i) : /* @__PURE__ */ new Date());
  }
  function f({ diff: h, type: m }) {
    const _ = Jt[m];
    t(1, o = h > 0 ? _.next(o) : _.prev(o));
  }
  function u(h) {
    const m = h.value;
    m ? (t(1, o = new Date(m)), t(0, i = new Date(m))) : t(0, i = null), n("change", { value: i });
  }
  const c = (h) => f(h.detail), d = (h) => u(h.detail);
  return l.$$set = (h) => {
    "value" in h && t(0, i = h.value), "current" in h && t(1, o = h.current), "markers" in h && t(2, s = h.markers), "buttons" in h && t(3, r = h.buttons);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && a();
  }, [
    i,
    o,
    s,
    r,
    f,
    u,
    c,
    d
  ];
}
var Ui = class extends te {
  constructor(e) {
    super(), ee(this, e, sa, oa, $, {
      value: 0,
      current: 1,
      markers: 2,
      buttons: 3
    });
  }
};
function wl(l) {
  let e, t;
  return e = new tn({
    props: {
      cancel: (
        /*cancel*/
        l[13]
      ),
      width: (
        /*width*/
        l[4]
      ),
      align: (
        /*align*/
        l[5]
      ),
      autoFit: !!/*align*/
      l[5],
      $$slots: { default: [ra] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*width*/
      16 && (o.width = /*width*/
      n[4]), i & /*align*/
      32 && (o.align = /*align*/
      n[5]), i & /*align*/
      32 && (o.autoFit = !!/*align*/
      n[5]), i & /*$$scope, buttons, value*/
      16777345 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function ra(l) {
  let e, t;
  return e = new Ui({
    props: {
      buttons: (
        /*buttons*/
        l[7]
      ),
      value: (
        /*value*/
        l[0]
      )
    }
  }), e.$on(
    "change",
    /*change_handler*/
    l[17]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*buttons*/
      128 && (o.buttons = /*buttons*/
      n[7]), i & /*value*/
      1 && (o.value = /*value*/
      n[0]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function aa(l) {
  let e, t, n, i, o, s;
  t = new ln({
    props: {
      css: (
        /*css*/
        l[8]
      ),
      title: (
        /*title*/
        l[9]
      ),
      value: (
        /*formattedValue*/
        l[12]
      ),
      id: (
        /*id*/
        l[1]
      ),
      readonly: !/*editable*/
      l[10],
      disabled: (
        /*disabled*/
        l[2]
      ),
      error: (
        /*error*/
        l[3]
      ),
      placeholder: (
        /*placeholder*/
        l[6]
      ),
      icon: "wxi-calendar",
      inputStyle: "cursor: pointer; width: 100%; padding-right: calc(var(--wx-input-icon-size) + var(--wx-input-icon-indent) * 2);"
    }
  }), t.$on(
    "input",
    /*cancel*/
    l[13]
  ), t.$on(
    "change",
    /*doChangeInput*/
    l[15]
  );
  let r = (
    /*popup*/
    l[11] && !/*disabled*/
    l[2] && wl(l)
  );
  return {
    c() {
      e = F("div"), V(t.$$.fragment), n = J(), r && r.c(), b(e, "class", "wx-datepicker svelte-1k3rk87");
    },
    m(a, f) {
      O(a, e, f), W(t, e, null), I(e, n), r && r.m(e, null), i = true, o || (s = [
        Q(
          window,
          "scroll",
          /*cancel*/
          l[13]
        ),
        Q(
          e,
          "click",
          /*click_handler*/
          l[18]
        )
      ], o = true);
    },
    p(a, [f]) {
      const u = {};
      f & /*css*/
      256 && (u.css = /*css*/
      a[8]), f & /*title*/
      512 && (u.title = /*title*/
      a[9]), f & /*formattedValue*/
      4096 && (u.value = /*formattedValue*/
      a[12]), f & /*id*/
      2 && (u.id = /*id*/
      a[1]), f & /*editable*/
      1024 && (u.readonly = !/*editable*/
      a[10]), f & /*disabled*/
      4 && (u.disabled = /*disabled*/
      a[2]), f & /*error*/
      8 && (u.error = /*error*/
      a[3]), f & /*placeholder*/
      64 && (u.placeholder = /*placeholder*/
      a[6]), t.$set(u), /*popup*/
      a[11] && !/*disabled*/
      a[2] ? r ? (r.p(a, f), f & /*popup, disabled*/
      2052 && w(r, 1)) : (r = wl(a), r.c(), w(r, 1), r.m(e, null)) : r && (Z(), k(r, 1, 1, () => {
        r = null;
      }), x());
    },
    i(a) {
      i || (w(t.$$.fragment, a), w(r), i = true);
    },
    o(a) {
      k(t.$$.fragment, a), k(r), i = false;
    },
    d(a) {
      a && E(e), B(t), r && r.d(), o = false, Ae(s);
    }
  };
}
function fa(l, e, t) {
  let { value: n } = e, { id: i = pt() } = e, { disabled: o = false } = e, { error: s = false } = e, { width: r = "unset" } = e, { align: a = "start" } = e, { placeholder: f = "" } = e, { format: u } = e, { buttons: c = true } = e, { css: d = "" } = e, { title: h = "" } = e, { editable: m = false } = e;
  const _ = He(), { calendar: g, formats: C } = Oe("wx-i18n").getRaw(), S = u || C.dateFormat;
  let D = typeof S == "function" ? S : At(S, g), p;
  function y() {
    t(11, p = false);
  }
  function R(A) {
    const T = A === n || A && n && A.valueOf() === n.valueOf() || !A && !n;
    t(0, n = A), T || _("select", { selected: A }), setTimeout(y, 1);
  }
  let v;
  function M(A) {
    if (!m)
      return;
    const { value: T, input: j } = A.detail;
    if (j)
      return;
    t(12, v = "");
    let L = typeof m == "function" ? m(T) : T ? new Date(T) : null;
    L = isNaN(L) ? n || null : L || null, R(L);
  }
  const z = (A) => R(A.detail.value), H = () => t(11, p = true);
  return l.$$set = (A) => {
    "value" in A && t(0, n = A.value), "id" in A && t(1, i = A.id), "disabled" in A && t(2, o = A.disabled), "error" in A && t(3, s = A.error), "width" in A && t(4, r = A.width), "align" in A && t(5, a = A.align), "placeholder" in A && t(6, f = A.placeholder), "format" in A && t(16, u = A.format), "buttons" in A && t(7, c = A.buttons), "css" in A && t(8, d = A.css), "title" in A && t(9, h = A.title), "editable" in A && t(10, m = A.editable);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && t(12, v = n ? D(n) : "");
  }, [
    n,
    i,
    o,
    s,
    r,
    a,
    f,
    c,
    d,
    h,
    m,
    p,
    v,
    y,
    R,
    M,
    u,
    z,
    H
  ];
}
var ua = class extends te {
  constructor(e) {
    super(), ee(this, e, fa, aa, $, {
      value: 0,
      id: 1,
      disabled: 2,
      error: 3,
      width: 4,
      align: 5,
      placeholder: 6,
      format: 16,
      buttons: 7,
      css: 8,
      title: 9,
      editable: 10
    });
  }
};
function ca(l) {
  let e, t, n, i, o, s, r;
  return n = new Qt({
    props: {
      value: {
        start: (
          /*start*/
          l[0]
        ),
        end: (
          /*end*/
          l[1]
        )
      },
      current: (
        /*leftCurrent*/
        l[6]
      ),
      markers: (
        /*markers*/
        l[4]
      ),
      buttons: false,
      part: "left"
    }
  }), n.$on(
    "shift",
    /*shift_handler_1*/
    l[14]
  ), n.$on(
    "change",
    /*change_handler_1*/
    l[15]
  ), s = new Qt({
    props: {
      value: {
        start: (
          /*start*/
          l[0]
        ),
        end: (
          /*end*/
          l[1]
        )
      },
      current: (
        /*rightCurrent*/
        l[7]
      ),
      markers: (
        /*markers*/
        l[4]
      ),
      done: (
        /*done*/
        l[2]
      ),
      buttons: (
        /*buttons*/
        l[5]
      ),
      part: "right"
    }
  }), s.$on(
    "shift",
    /*shift_handler_2*/
    l[16]
  ), s.$on(
    "change",
    /*change_handler_2*/
    l[17]
  ), {
    c() {
      e = F("div"), t = F("div"), V(n.$$.fragment), i = J(), o = F("div"), V(s.$$.fragment), b(t, "class", "wx-half svelte-wlbsu6"), b(o, "class", "wx-half svelte-wlbsu6"), b(e, "class", "wx-rangecalendar svelte-wlbsu6");
    },
    m(a, f) {
      O(a, e, f), I(e, t), W(n, t, null), I(e, i), I(e, o), W(s, o, null), r = true;
    },
    p(a, f) {
      const u = {};
      f & /*start, end*/
      3 && (u.value = {
        start: (
          /*start*/
          a[0]
        ),
        end: (
          /*end*/
          a[1]
        )
      }), f & /*leftCurrent*/
      64 && (u.current = /*leftCurrent*/
      a[6]), f & /*markers*/
      16 && (u.markers = /*markers*/
      a[4]), n.$set(u);
      const c = {};
      f & /*start, end*/
      3 && (c.value = {
        start: (
          /*start*/
          a[0]
        ),
        end: (
          /*end*/
          a[1]
        )
      }), f & /*rightCurrent*/
      128 && (c.current = /*rightCurrent*/
      a[7]), f & /*markers*/
      16 && (c.markers = /*markers*/
      a[4]), f & /*done*/
      4 && (c.done = /*done*/
      a[2]), f & /*buttons*/
      32 && (c.buttons = /*buttons*/
      a[5]), s.$set(c);
    },
    i(a) {
      r || (w(n.$$.fragment, a), w(s.$$.fragment, a), r = true);
    },
    o(a) {
      k(n.$$.fragment, a), k(s.$$.fragment, a), r = false;
    },
    d(a) {
      a && E(e), B(n), B(s);
    }
  };
}
function da(l) {
  let e, t;
  return e = new Qt({
    props: {
      value: {
        start: (
          /*start*/
          l[0]
        ),
        end: (
          /*end*/
          l[1]
        )
      },
      current: (
        /*leftCurrent*/
        l[6]
      ),
      markers: (
        /*markers*/
        l[4]
      ),
      done: (
        /*done*/
        l[2]
      ),
      buttons: (
        /*buttons*/
        l[5]
      ),
      part: "both"
    }
  }), e.$on(
    "shift",
    /*shift_handler*/
    l[12]
  ), e.$on(
    "change",
    /*change_handler*/
    l[13]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*start, end*/
      3 && (o.value = {
        start: (
          /*start*/
          n[0]
        ),
        end: (
          /*end*/
          n[1]
        )
      }), i & /*leftCurrent*/
      64 && (o.current = /*leftCurrent*/
      n[6]), i & /*markers*/
      16 && (o.markers = /*markers*/
      n[4]), i & /*done*/
      4 && (o.done = /*done*/
      n[2]), i & /*buttons*/
      32 && (o.buttons = /*buttons*/
      n[5]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function ha(l) {
  let e, t, n, i;
  const o = [da, ca], s = [];
  function r(a, f) {
    return (
      /*months*/
      a[3] == 1 ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = he();
    },
    m(a, f) {
      s[e].m(a, f), O(a, n, f), i = true;
    },
    p(a, [f]) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Z(), k(s[u], 1, 1, () => {
        s[u] = null;
      }), x(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), w(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (w(t), i = true);
    },
    o(a) {
      k(t), i = false;
    },
    d(a) {
      a && E(n), s[e].d(a);
    }
  };
}
function yl(l, e, t) {
  const n = new Date(l);
  return n.setMonth(n.getMonth() + e), n;
}
function ma(l, e, t) {
  const n = He();
  let { start: i } = e, { end: o } = e, { done: s } = e, { current: r } = e, { months: a = 2 } = e, { markers: f = null } = e, { buttons: u = true } = e, c, d;
  function h(H) {
    t(6, c = H ? new Date(H) : r || /* @__PURE__ */ new Date());
  }
  function m() {
    c && t(7, d = yl(c, 1));
  }
  function _() {
    d && t(6, c = yl(d, -1));
  }
  function g({ diff: H, type: A }) {
    const T = Jt[A];
    H > 0 ? t(7, d = T.next(d)) : H < 0 && t(6, c = T.prev(c));
  }
  function C(H) {
    D(H), i && t(6, c = new Date(i));
  }
  function S(H) {
    D(H), o && t(7, d = new Date(o));
  }
  function D(H) {
    const A = H.value, T = A === -1;
    T || (H.select ? !i || o ? (t(0, i = A), t(1, o = null)) : i > A ? (t(1, o = i), t(0, i = A)) : t(1, o = A) : A ? (t(0, i = new Date(A)), t(1, o = new Date(A))) : t(0, i = t(1, o = null))), (T || !s) && n("change", { start: i, end: o });
  }
  const p = (H) => g(H.detail), y = (H) => C(H.detail), R = (H) => g(H.detail), v = (H) => C(H.detail), M = (H) => g(H.detail), z = (H) => S(H.detail);
  return l.$$set = (H) => {
    "start" in H && t(0, i = H.start), "end" in H && t(1, o = H.end), "done" in H && t(2, s = H.done), "current" in H && t(11, r = H.current), "months" in H && t(3, a = H.months), "markers" in H && t(4, f = H.markers), "buttons" in H && t(5, u = H.buttons);
  }, l.$$.update = () => {
    l.$$.dirty & /*start*/
    1 && h(i), l.$$.dirty & /*leftCurrent*/
    64 && m(), l.$$.dirty & /*rightCurrent*/
    128 && _();
  }, [
    i,
    o,
    s,
    a,
    f,
    u,
    c,
    d,
    g,
    C,
    S,
    r,
    p,
    y,
    R,
    v,
    M,
    z
  ];
}
var _a = class extends te {
  constructor(e) {
    super(), ee(this, e, ma, ha, $, {
      start: 0,
      end: 1,
      done: 2,
      current: 11,
      months: 3,
      markers: 4,
      buttons: 5
    });
  }
};
function kl(l) {
  let e, t;
  return e = new tn({
    props: {
      cancel: (
        /*cancel*/
        l[16]
      ),
      width: (
        /*width*/
        l[4]
      ),
      align: (
        /*align*/
        l[5]
      ),
      autoFit: !!/*align*/
      l[5],
      $$slots: { default: [ga] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*width*/
      16 && (o.width = /*width*/
      n[4]), i & /*align*/
      32 && (o.align = /*align*/
      n[5]), i & /*align*/
      32 && (o.autoFit = !!/*align*/
      n[5]), i & /*$$scope, done, buttons, start, end, months*/
      268486152 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function ga(l) {
  let e, t;
  return e = new _a({
    props: {
      done: (
        /*done*/
        l[3]
      ),
      cancel: (
        /*cancel*/
        l[16]
      ),
      buttons: (
        /*buttons*/
        l[10]
      ),
      start: (
        /*start*/
        l[14]
      ),
      end: (
        /*end*/
        l[15]
      ),
      months: (
        /*months*/
        l[9]
      )
    }
  }), e.$on(
    "change",
    /*change_handler*/
    l[21]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*done*/
      8 && (o.done = /*done*/
      n[3]), i & /*buttons*/
      1024 && (o.buttons = /*buttons*/
      n[10]), i & /*start*/
      16384 && (o.start = /*start*/
      n[14]), i & /*end*/
      32768 && (o.end = /*end*/
      n[15]), i & /*months*/
      512 && (o.months = /*months*/
      n[9]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function pa(l) {
  let e, t, n, i, o, s;
  t = new ln({
    props: {
      css: (
        /*css*/
        l[7]
      ),
      title: (
        /*title*/
        l[8]
      ),
      value: (
        /*formattedValue*/
        l[13]
      ),
      id: (
        /*id*/
        l[0]
      ),
      readonly: !/*editable*/
      l[11],
      disabled: (
        /*disabled*/
        l[1]
      ),
      placeholder: (
        /*placeholder*/
        l[6]
      ),
      error: (
        /*error*/
        l[2]
      ),
      icon: "wxi-calendar",
      inputStyle: "cursor: pointer; width: 100%; padding-right: calc(var(--wx-input-icon-size) + var(--wx-input-icon-indent) * 2);"
    }
  }), t.$on(
    "change",
    /*doInputChange*/
    l[18]
  );
  let r = (
    /*popup*/
    l[12] && !/*disabled*/
    l[1] && kl(l)
  );
  return {
    c() {
      e = F("div"), V(t.$$.fragment), n = J(), r && r.c(), b(e, "class", "wx-daterangepicker svelte-qgs2z8"), se(
        e,
        "wx-disabled",
        /*disabled*/
        l[1]
      ), se(
        e,
        "wx-error",
        /*error*/
        l[2]
      );
    },
    m(a, f) {
      O(a, e, f), W(t, e, null), I(e, n), r && r.m(e, null), i = true, o || (s = [
        Q(
          window,
          "scroll",
          /*cancel*/
          l[16]
        ),
        Q(
          e,
          "click",
          /*click_handler*/
          l[22]
        )
      ], o = true);
    },
    p(a, [f]) {
      const u = {};
      f & /*css*/
      128 && (u.css = /*css*/
      a[7]), f & /*title*/
      256 && (u.title = /*title*/
      a[8]), f & /*formattedValue*/
      8192 && (u.value = /*formattedValue*/
      a[13]), f & /*id*/
      1 && (u.id = /*id*/
      a[0]), f & /*editable*/
      2048 && (u.readonly = !/*editable*/
      a[11]), f & /*disabled*/
      2 && (u.disabled = /*disabled*/
      a[1]), f & /*placeholder*/
      64 && (u.placeholder = /*placeholder*/
      a[6]), f & /*error*/
      4 && (u.error = /*error*/
      a[2]), t.$set(u), /*popup*/
      a[12] && !/*disabled*/
      a[1] ? r ? (r.p(a, f), f & /*popup, disabled*/
      4098 && w(r, 1)) : (r = kl(a), r.c(), w(r, 1), r.m(e, null)) : r && (Z(), k(r, 1, 1, () => {
        r = null;
      }), x()), (!i || f & /*disabled*/
      2) && se(
        e,
        "wx-disabled",
        /*disabled*/
        a[1]
      ), (!i || f & /*error*/
      4) && se(
        e,
        "wx-error",
        /*error*/
        a[2]
      );
    },
    i(a) {
      i || (w(t.$$.fragment, a), w(r), i = true);
    },
    o(a) {
      k(t.$$.fragment, a), k(r), i = false;
    },
    d(a) {
      a && E(e), B(t), r && r.d(), o = false, Ae(s);
    }
  };
}
function ba(l, e, t) {
  let { value: n } = e, { id: i = pt() } = e, { disabled: o = false } = e, { error: s = false } = e, { done: r = false } = e, { width: a = "unset" } = e, { align: f = "start" } = e, { placeholder: u = "" } = e, { css: c } = e, { title: d } = e, { format: h } = e, { months: m = 2 } = e, { buttons: _ } = e, { editable: g = false } = e;
  const C = He(), { calendar: S, formats: D } = Oe("wx-i18n").getRaw(), p = h || D?.dateFormat;
  let y = typeof p == "function" ? p : At(p, S), R;
  function v() {
    t(12, R = false);
  }
  let M;
  function z(P) {
    t(19, n = P.start || P.end ? { start: P.start, end: P.end } : null), (P.start && P.end || !P.start && !P.end) && (C("select", { selected: n }), setTimeout(v, 1));
  }
  function H(P) {
    if (!g)
      return;
    const { value: G, input: ae } = P.detail;
    if (ae)
      return;
    t(13, M = "");
    const [q, U] = G.split(" -").map((le, re) => {
      const X = le.trim();
      let ve = typeof g == "function" ? g(X) : X ? new Date(X) : null, oe = re === 0 ? A : T;
      return isNaN(ve) ? oe || null : ve || null;
    });
    z({ start: q, end: U });
  }
  let A, T;
  const j = (P) => z(P.detail), L = () => t(12, R = true);
  return l.$$set = (P) => {
    "value" in P && t(19, n = P.value), "id" in P && t(0, i = P.id), "disabled" in P && t(1, o = P.disabled), "error" in P && t(2, s = P.error), "done" in P && t(3, r = P.done), "width" in P && t(4, a = P.width), "align" in P && t(5, f = P.align), "placeholder" in P && t(6, u = P.placeholder), "css" in P && t(7, c = P.css), "title" in P && t(8, d = P.title), "format" in P && t(20, h = P.format), "months" in P && t(9, m = P.months), "buttons" in P && t(10, _ = P.buttons), "editable" in P && t(11, g = P.editable);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    524288 && t(13, M = n ? n.start ? y(n.start) + (n.end ? ` - ${y(n.end)}` : "") : y(n) : ""), l.$$.dirty & /*value*/
    524288 && (n ? (t(14, A = n.start || null), t(15, T = n.end || null)) : t(14, A = t(15, T = null)));
  }, [
    i,
    o,
    s,
    r,
    a,
    f,
    u,
    c,
    d,
    m,
    _,
    g,
    R,
    M,
    A,
    T,
    v,
    z,
    H,
    n,
    h,
    j,
    L
  ];
}
var wa = class extends te {
  constructor(e) {
    super(), ee(this, e, ba, pa, $, {
      value: 19,
      id: 0,
      disabled: 1,
      error: 2,
      done: 3,
      width: 4,
      align: 5,
      placeholder: 6,
      css: 7,
      title: 8,
      format: 20,
      months: 9,
      buttons: 10,
      editable: 11
    });
  }
};
function ya(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), s = pe(
    o,
    l,
    /*$$scope*/
    l[7],
    null
  );
  return {
    c() {
      e = F("div"), s && s.c(), b(e, "class", "wx-popup svelte-rd365y"), ue(
        e,
        "top",
        /*top*/
        l[1] + "px"
      ), ue(
        e,
        "left",
        /*left*/
        l[0] + "px"
      );
    },
    m(r, a) {
      O(r, e, a), s && s.m(e, null), l[9](e), t = true, n || (i = ze(Ft.call(
        null,
        e,
        /*down*/
        l[3]
      )), n = true);
    },
    p(r, [a]) {
      s && s.p && (!t || a & /*$$scope*/
      128) && we(
        s,
        o,
        r,
        /*$$scope*/
        r[7],
        t ? be(
          o,
          /*$$scope*/
          r[7],
          a,
          null
        ) : ye(
          /*$$scope*/
          r[7]
        ),
        null
      ), (!t || a & /*top*/
      2) && ue(
        e,
        "top",
        /*top*/
        r[1] + "px"
      ), (!t || a & /*left*/
      1) && ue(
        e,
        "left",
        /*left*/
        r[0] + "px"
      );
    },
    i(r) {
      t || (w(s, r), t = true);
    },
    o(r) {
      k(s, r), t = false;
    },
    d(r) {
      r && E(e), s && s.d(r), l[9](null), n = false, i();
    }
  };
}
function ka(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { left: o = 0 } = e, { top: s = 0 } = e, { area: r = null } = e, { cancel: a } = e, { mount: f } = e, u;
  function c() {
    if (!u)
      return;
    const m = document.body.getBoundingClientRect(), _ = u.getBoundingClientRect();
    _.right >= m.right && t(0, o = m.right - _.width), _.bottom >= m.bottom && t(1, s = m.bottom - _.height - 12);
  }
  r && (f && f(c), An(() => c()));
  function d(m) {
    a && a(m);
  }
  function h(m) {
    ge[m ? "unshift" : "push"](() => {
      u = m, t(2, u);
    });
  }
  return l.$$set = (m) => {
    "left" in m && t(0, o = m.left), "top" in m && t(1, s = m.top), "area" in m && t(4, r = m.area), "cancel" in m && t(5, a = m.cancel), "mount" in m && t(6, f = m.mount), "$$scope" in m && t(7, i = m.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*area*/
    16 && r && (t(1, s = r.top + r.height), t(0, o = r.left));
  }, [o, s, u, d, r, a, f, i, n, h];
}
var va = class extends te {
  constructor(e) {
    super(), ee(this, e, ka, ya, $, {
      left: 0,
      top: 1,
      area: 4,
      cancel: 5,
      mount: 6
    });
  }
};
var Sa = (l) => ({ option: l & /*option*/
524288 });
var vl = (l) => ({ option: (
  /*option*/
  l[19]
) });
var Ca = (l) => ({ option: l & /*selected*/
32 });
var Sl = (l) => ({ option: (
  /*selected*/
  l[5]
) });
function Ma(l) {
  let e;
  return {
    c() {
      e = ie(" ");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && E(e);
    }
  };
}
function Ra(l) {
  let e, t;
  return {
    c() {
      e = F("span"), t = ie(
        /*placeholder*/
        l[1]
      ), b(e, "class", "wx-placeholder svelte-zhb77a");
    },
    m(n, i) {
      O(n, e, i), I(e, t);
    },
    p(n, i) {
      i & /*placeholder*/
      2 && de(
        t,
        /*placeholder*/
        n[1]
      );
    },
    i: K,
    o: K,
    d(n) {
      n && E(e);
    }
  };
}
function Da(l) {
  let e;
  const t = (
    /*#slots*/
    l[13].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[16],
    Sl
  ), i = n || Ea(l);
  return {
    c() {
      i && i.c();
    },
    m(o, s) {
      i && i.m(o, s), e = true;
    },
    p(o, s) {
      n ? n.p && (!e || s & /*$$scope, selected*/
      65568) && we(
        n,
        t,
        o,
        /*$$scope*/
        o[16],
        e ? be(
          t,
          /*$$scope*/
          o[16],
          s,
          Ca
        ) : ye(
          /*$$scope*/
          o[16]
        ),
        Sl
      ) : i && i.p && (!e || s & /*selected*/
      32) && i.p(o, e ? s : -1);
    },
    i(o) {
      e || (w(i, o), e = true);
    },
    o(o) {
      k(i, o), e = false;
    },
    d(o) {
      i && i.d(o);
    }
  };
}
function Ea(l) {
  let e = (
    /*selected*/
    (l[5].name || "") + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*selected*/
      32 && e !== (e = /*selected*/
      (n[5].name || "") + "") && de(t, e);
    },
    d(n) {
      n && E(t);
    }
  };
}
function Cl(l) {
  let e, t;
  return e = new nn({
    props: {
      items: (
        /*options*/
        l[0]
      ),
      $$slots: {
        default: [
          Aa,
          ({ option: n }) => ({ 19: n }),
          ({ option: n }) => n ? 524288 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), e.$on(
    "ready",
    /*ready*/
    l[9]
  ), e.$on(
    "select",
    /*select*/
    l[10]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*options*/
      1 && (o.items = /*options*/
      n[0]), i & /*$$scope, option*/
      589824 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Oa(l) {
  let e = (
    /*option*/
    l[19].name + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*option*/
      524288 && e !== (e = /*option*/
      n[19].name + "") && de(t, e);
    },
    d(n) {
      n && E(t);
    }
  };
}
function Aa(l) {
  let e;
  const t = (
    /*#slots*/
    l[13].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[16],
    vl
  ), i = n || Oa(l);
  return {
    c() {
      i && i.c();
    },
    m(o, s) {
      i && i.m(o, s), e = true;
    },
    p(o, s) {
      n ? n.p && (!e || s & /*$$scope, option*/
      589824) && we(
        n,
        t,
        o,
        /*$$scope*/
        o[16],
        e ? be(
          t,
          /*$$scope*/
          o[16],
          s,
          Sa
        ) : ye(
          /*$$scope*/
          o[16]
        ),
        vl
      ) : i && i.p && (!e || s & /*option*/
      524288) && i.p(o, e ? s : -1);
    },
    i(o) {
      e || (w(i, o), e = true);
    },
    o(o) {
      k(i, o), e = false;
    },
    d(o) {
      i && i.d(o);
    }
  };
}
function Ha(l) {
  let e, t, n, i, o, s, r, a, f, u;
  const c = [Da, Ra, Ma], d = [];
  function h(_, g) {
    return (
      /*selected*/
      _[5] ? 0 : (
        /*placeholder*/
        _[1] ? 1 : 2
      )
    );
  }
  n = h(l), i = d[n] = c[n](l);
  let m = !/*disabled*/
  l[2] && Cl(l);
  return {
    c() {
      e = F("div"), t = F("div"), i.c(), o = J(), s = F("i"), r = J(), m && m.c(), b(t, "class", "wx-label svelte-zhb77a"), b(s, "class", "wx-icon wxi-angle-down svelte-zhb77a"), b(e, "class", "wx-richselect svelte-zhb77a"), b(
        e,
        "title",
        /*title*/
        l[4]
      ), b(e, "tabindex", "0"), se(
        e,
        "wx-error",
        /*error*/
        l[3]
      ), se(
        e,
        "wx-disabled",
        /*disabled*/
        l[2]
      ), se(e, "wx-nowrap", !/*SLOTS*/
      l[8]);
    },
    m(_, g) {
      O(_, e, g), I(e, t), d[n].m(t, null), I(e, o), I(e, s), I(e, r), m && m.m(e, null), a = true, f || (u = [
        Q(
          e,
          "click",
          /*click_handler*/
          l[14]
        ),
        Q(
          e,
          "keydown",
          /*keydown_handler*/
          l[15]
        )
      ], f = true);
    },
    p(_, [g]) {
      let C = n;
      n = h(_), n === C ? d[n].p(_, g) : (Z(), k(d[C], 1, 1, () => {
        d[C] = null;
      }), x(), i = d[n], i ? i.p(_, g) : (i = d[n] = c[n](_), i.c()), w(i, 1), i.m(t, null)), /*disabled*/
      _[2] ? m && (Z(), k(m, 1, 1, () => {
        m = null;
      }), x()) : m ? (m.p(_, g), g & /*disabled*/
      4 && w(m, 1)) : (m = Cl(_), m.c(), w(m, 1), m.m(e, null)), (!a || g & /*title*/
      16) && b(
        e,
        "title",
        /*title*/
        _[4]
      ), (!a || g & /*error*/
      8) && se(
        e,
        "wx-error",
        /*error*/
        _[3]
      ), (!a || g & /*disabled*/
      4) && se(
        e,
        "wx-disabled",
        /*disabled*/
        _[2]
      );
    },
    i(_) {
      a || (w(i), w(m), a = true);
    },
    o(_) {
      k(i), k(m), a = false;
    },
    d(_) {
      _ && E(e), d[n].d(), m && m.d(), f = false, Ae(u);
    }
  };
}
function Na(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { value: o = "" } = e, { options: s = [] } = e, { placeholder: r = "Click to select" } = e, { disabled: a = false } = e, { error: f = false } = e, { title: u = "" } = e;
  const c = He(), d = e.$$slots;
  let h = null, m, _;
  function g(y) {
    t(6, m = y.detail.navigate), t(7, _ = y.detail.keydown);
  }
  function C(y) {
    const { id: R } = y.detail;
    if (R || R === 0) {
      t(12, o = R);
      const v = s.find((M) => M.id === R);
      m(null), c("select", { selected: v });
    }
  }
  const S = () => s.findIndex((y) => y.id === o), D = () => m(S()), p = (y) => _(y, S());
  return l.$$set = (y) => {
    t(18, e = Ee(Ee({}, e), Fe(y))), "value" in y && t(12, o = y.value), "options" in y && t(0, s = y.options), "placeholder" in y && t(1, r = y.placeholder), "disabled" in y && t(2, a = y.disabled), "error" in y && t(3, f = y.error), "title" in y && t(4, u = y.title), "$$scope" in y && t(16, i = y.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*value, options*/
    4097 && t(5, h = o || o === 0 ? s.find((y) => y.id === o) : null);
  }, e = Fe(e), [
    s,
    r,
    a,
    f,
    u,
    h,
    m,
    _,
    d,
    g,
    C,
    S,
    o,
    n,
    D,
    p,
    i
  ];
}
var Ln = class extends te {
  constructor(e) {
    super(), ee(this, e, Na, Ha, $, {
      value: 12,
      options: 0,
      placeholder: 1,
      disabled: 2,
      error: 3,
      title: 4
    });
  }
};
var Fa = (l) => ({});
var Ml = (l) => ({});
function Ta(l) {
  let e, t;
  return e = new mt({
    props: {
      title: (
        /*title*/
        l[4]
      ),
      text: (
        /*value*/
        l[0] && /*textActive*/
        l[7] || /*text*/
        l[6]
      ),
      css: (
        /*css*/
        l[5]
      ),
      type: (
        /*typeStr*/
        l[8]
      ),
      icon: (
        /*value*/
        l[0] && /*iconActive*/
        l[3] || /*icon*/
        l[1]
      ),
      click: (
        /*handleClick*/
        l[9]
      ),
      disabled: (
        /*disabled*/
        l[2]
      )
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*title*/
      16 && (o.title = /*title*/
      n[4]), i & /*value, textActive, text*/
      193 && (o.text = /*value*/
      n[0] && /*textActive*/
      n[7] || /*text*/
      n[6]), i & /*css*/
      32 && (o.css = /*css*/
      n[5]), i & /*typeStr*/
      256 && (o.type = /*typeStr*/
      n[8]), i & /*value, iconActive, icon*/
      11 && (o.icon = /*value*/
      n[0] && /*iconActive*/
      n[3] || /*icon*/
      n[1]), i & /*disabled*/
      4 && (o.disabled = /*disabled*/
      n[2]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function La(l) {
  let e, t;
  return e = new mt({
    props: {
      title: (
        /*title*/
        l[4]
      ),
      text: (
        /*value*/
        l[0] && /*textActive*/
        l[7] || /*text*/
        l[6]
      ),
      css: (
        /*css*/
        l[5]
      ),
      type: (
        /*typeStr*/
        l[8]
      ),
      icon: (
        /*value*/
        l[0] && /*iconActive*/
        l[3] || /*icon*/
        l[1]
      ),
      click: (
        /*handleClick*/
        l[9]
      ),
      disabled: (
        /*disabled*/
        l[2]
      ),
      $$slots: { default: [Ia] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*title*/
      16 && (o.title = /*title*/
      n[4]), i & /*value, textActive, text*/
      193 && (o.text = /*value*/
      n[0] && /*textActive*/
      n[7] || /*text*/
      n[6]), i & /*css*/
      32 && (o.css = /*css*/
      n[5]), i & /*typeStr*/
      256 && (o.type = /*typeStr*/
      n[8]), i & /*value, iconActive, icon*/
      11 && (o.icon = /*value*/
      n[0] && /*iconActive*/
      n[3] || /*icon*/
      n[1]), i & /*disabled*/
      4 && (o.disabled = /*disabled*/
      n[2]), i & /*$$scope*/
      16384 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function za(l) {
  let e, t;
  return e = new mt({
    props: {
      title: (
        /*title*/
        l[4]
      ),
      text: (
        /*value*/
        l[0] && /*textActive*/
        l[7] || /*text*/
        l[6]
      ),
      css: (
        /*css*/
        l[5]
      ),
      type: (
        /*typeStr*/
        l[8]
      ),
      icon: (
        /*value*/
        l[0] && /*iconActive*/
        l[3] || /*icon*/
        l[1]
      ),
      click: (
        /*handleClick*/
        l[9]
      ),
      disabled: (
        /*disabled*/
        l[2]
      ),
      $$slots: { default: [qa] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*title*/
      16 && (o.title = /*title*/
      n[4]), i & /*value, textActive, text*/
      193 && (o.text = /*value*/
      n[0] && /*textActive*/
      n[7] || /*text*/
      n[6]), i & /*css*/
      32 && (o.css = /*css*/
      n[5]), i & /*typeStr*/
      256 && (o.type = /*typeStr*/
      n[8]), i & /*value, iconActive, icon*/
      11 && (o.icon = /*value*/
      n[0] && /*iconActive*/
      n[3] || /*icon*/
      n[1]), i & /*disabled*/
      4 && (o.disabled = /*disabled*/
      n[2]), i & /*$$scope*/
      16384 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Ia(l) {
  let e;
  const t = (
    /*#slots*/
    l[13].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[14],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = true;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      16384) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[14],
        e ? be(
          t,
          /*$$scope*/
          i[14],
          o,
          null
        ) : ye(
          /*$$scope*/
          i[14]
        ),
        null
      );
    },
    i(i) {
      e || (w(n, i), e = true);
    },
    o(i) {
      k(n, i), e = false;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function qa(l) {
  let e;
  const t = (
    /*#slots*/
    l[13].active
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[14],
    Ml
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = true;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      16384) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[14],
        e ? be(
          t,
          /*$$scope*/
          i[14],
          o,
          Fa
        ) : ye(
          /*$$scope*/
          i[14]
        ),
        Ml
      );
    },
    i(i) {
      e || (w(n, i), e = true);
    },
    o(i) {
      k(n, i), e = false;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Pa(l) {
  let e, t, n, i;
  const o = [za, La, Ta], s = [];
  function r(a, f) {
    return (
      /*value*/
      a[0] && /*SLOTS*/
      a[10] && /*SLOTS*/
      a[10].active ? 0 : (
        /*SLOTS*/
        a[10] && /*SLOTS*/
        a[10].default ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = he();
    },
    m(a, f) {
      s[e].m(a, f), O(a, n, f), i = true;
    },
    p(a, [f]) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Z(), k(s[u], 1, 1, () => {
        s[u] = null;
      }), x(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), w(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (w(t), i = true);
    },
    o(a) {
      k(t), i = false;
    },
    d(a) {
      a && E(n), s[e].d(a);
    }
  };
}
function ja(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { value: o = false } = e, { type: s = "" } = e, { icon: r = null } = e, { disabled: a = null } = e, { iconActive: f = null } = e, { click: u } = e, { title: c = "" } = e, { css: d = "" } = e, { text: h = "" } = e, { textActive: m = "" } = e, _ = s;
  function g(S) {
    u && u(S), S.defaultPrevented || t(0, o = !o);
  }
  const C = e.$$slots;
  return l.$$set = (S) => {
    t(15, e = Ee(Ee({}, e), Fe(S))), "value" in S && t(0, o = S.value), "type" in S && t(11, s = S.type), "icon" in S && t(1, r = S.icon), "disabled" in S && t(2, a = S.disabled), "iconActive" in S && t(3, f = S.iconActive), "click" in S && t(12, u = S.click), "title" in S && t(4, c = S.title), "css" in S && t(5, d = S.css), "text" in S && t(6, h = S.text), "textActive" in S && t(7, m = S.textActive), "$$scope" in S && t(14, i = S.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*value, type*/
    2049 && t(8, _ = (o ? "pressed" : "") + (s ? " " + s : ""));
  }, e = Fe(e), [
    o,
    r,
    a,
    f,
    c,
    d,
    h,
    m,
    _,
    g,
    C,
    s,
    u,
    n,
    i
  ];
}
var Wa = class extends te {
  constructor(e) {
    super(), ee(this, e, ja, Pa, $, {
      value: 0,
      type: 11,
      icon: 1,
      disabled: 2,
      iconActive: 3,
      click: 12,
      title: 4,
      css: 5,
      text: 6,
      textActive: 7
    });
  }
};
var Ba = (l) => ({});
var Rl = (l) => ({ mount: (
  /*mount*/
  l[1]
) });
function Va(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[5].default
  ), s = pe(
    o,
    l,
    /*$$scope*/
    l[4],
    Rl
  );
  return {
    c() {
      e = F("div"), t = F("div"), s && s.c(), b(t, "class", n = "wx-" + /*theme*/
      l[0] + "-theme svelte-1dixdmq"), b(e, "class", "wx-portal svelte-1dixdmq");
    },
    m(r, a) {
      O(r, e, a), I(e, t), s && s.m(t, null), l[6](t), i = true;
    },
    p(r, [a]) {
      s && s.p && (!i || a & /*$$scope*/
      16) && we(
        s,
        o,
        r,
        /*$$scope*/
        r[4],
        i ? be(
          o,
          /*$$scope*/
          r[4],
          a,
          Ba
        ) : ye(
          /*$$scope*/
          r[4]
        ),
        Rl
      ), (!i || a & /*theme*/
      1 && n !== (n = "wx-" + /*theme*/
      r[0] + "-theme svelte-1dixdmq")) && b(t, "class", n);
    },
    i(r) {
      i || (w(s, r), i = true);
    },
    o(r) {
      k(s, r), i = false;
    },
    d(r) {
      r && E(e), s && s.d(r), l[6](null);
    }
  };
}
function Ya(l) {
  for (; l !== document.body && !l.getAttribute("data-wx-portal-root"); )
    l = l.parentNode;
  return l;
}
function Ga(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, o, { theme: s = "" } = e, { target: r = void 0 } = e, a = [];
  const f = (c) => {
    a && a.push(c);
  };
  s === "" && (s = Oe("wx-theme")), Je(() => {
    (r || Ya(o)).appendChild(o), a && a.forEach((d) => d());
  }), Fo(() => {
    o && o.parentNode && o.parentNode.removeChild(o);
  });
  function u(c) {
    ge[c ? "unshift" : "push"](() => {
      o = c, t(2, o);
    });
  }
  return l.$$set = (c) => {
    "theme" in c && t(0, s = c.theme), "target" in c && t(3, r = c.target), "$$scope" in c && t(4, i = c.$$scope);
  }, [s, f, o, r, i, n, u];
}
var Ua = class extends te {
  constructor(e) {
    super(), ee(this, e, Ga, Va, $, { theme: 0, target: 3, mount: 1 });
  }
  get mount() {
    return this.$$.ctx[1];
  }
};
function Ka(l) {
  let e, t = `<style>
@font-face {
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
src: local(''),
    url('https://cdn.webix.com/fonts/roboto/regular.woff2') format('woff2'),
    url('https://cdn.webix.com/fonts/roboto/regular.woff') format('woff');
}
@font-face {
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
src: local(''),
    url('https://cdn.webix.com/fonts/roboto/500.woff2') format('woff2'),
    url('https://cdn.webix.com/fonts/roboto/500.woff') format('woff');
}
</style>`, n;
  return {
    c() {
      e = new No(false), n = he(), e.a = n;
    },
    m(i, o) {
      e.m(t, i, o), O(i, n, o);
    },
    p: K,
    i: K,
    o: K,
    d(i) {
      i && (E(n), e.d());
    }
  };
}
var Xa = class extends te {
  constructor(e) {
    super(), ee(this, e, null, Ka, $, {});
  }
};
function Ja(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[3].default
  ), i = pe(
    n,
    l,
    /*$$scope*/
    l[2],
    null
  );
  return {
    c() {
      e = F("div"), i && i.c(), b(e, "class", "wx-material-theme"), ue(e, "height", "100%");
    },
    m(o, s) {
      O(o, e, s), i && i.m(e, null), t = true;
    },
    p(o, s) {
      i && i.p && (!t || s & /*$$scope*/
      4) && we(
        i,
        n,
        o,
        /*$$scope*/
        o[2],
        t ? be(
          n,
          /*$$scope*/
          o[2],
          s,
          null
        ) : ye(
          /*$$scope*/
          o[2]
        ),
        null
      );
    },
    i(o) {
      t || (w(i, o), t = true);
    },
    o(o) {
      k(i, o), t = false;
    },
    d(o) {
      o && E(e), i && i.d(o);
    }
  };
}
function Dl(l) {
  let e, t, n, i, o, s;
  return n = new Xa({}), {
    c() {
      e = F("link"), t = J(), V(n.$$.fragment), i = J(), o = F("link"), b(e, "rel", "preconnect"), b(e, "href", "https://cdn.webix.com"), b(e, "crossorigin", ""), b(o, "rel", "stylesheet"), b(o, "href", "https://webix.io/dev/fonts/wxi/wx-icons.css");
    },
    m(r, a) {
      O(r, e, a), O(r, t, a), W(n, r, a), O(r, i, a), O(r, o, a), s = true;
    },
    i(r) {
      s || (w(n.$$.fragment, r), s = true);
    },
    o(r) {
      k(n.$$.fragment, r), s = false;
    },
    d(r) {
      r && (E(e), E(t), E(i), E(o)), B(n, r);
    }
  };
}
function Qa(l) {
  let e, t, n, i = (
    /*SLOTS*/
    l[1] && /*SLOTS*/
    l[1].default && Ja(l)
  ), o = (
    /*fonts*/
    l[0] && Dl()
  );
  return {
    c() {
      i && i.c(), e = J(), o && o.c(), t = he();
    },
    m(s, r) {
      i && i.m(s, r), O(s, e, r), o && o.m(document.head, null), I(document.head, t), n = true;
    },
    p(s, [r]) {
      s[1] && /*SLOTS*/
      s[1].default && i.p(s, r), /*fonts*/
      s[0] ? o ? r & /*fonts*/
      1 && w(o, 1) : (o = Dl(), o.c(), w(o, 1), o.m(t.parentNode, t)) : o && (Z(), k(o, 1, 1, () => {
        o = null;
      }), x());
    },
    i(s) {
      n || (w(i), w(o), n = true);
    },
    o(s) {
      k(i), k(o), n = false;
    },
    d(s) {
      s && E(e), i && i.d(s), o && o.d(s), E(t);
    }
  };
}
function Za(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { fonts: o = true } = e;
  const s = e.$$slots;
  return Gt("wx-theme", "material"), l.$$set = (r) => {
    t(4, e = Ee(Ee({}, e), Fe(r))), "fonts" in r && t(0, o = r.fonts), "$$scope" in r && t(2, i = r.$$scope);
  }, e = Fe(e), [o, s, i, n];
}
var zn = class extends te {
  constructor(e) {
    super(), ee(this, e, Za, Qa, $, { fonts: 0 });
  }
};
function xa(l) {
  let e;
  const t = (
    /*#slots*/
    l[3].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[2],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = true;
    },
    p(i, [o]) {
      n && n.p && (!e || o & /*$$scope*/
      4) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[2],
        e ? be(
          t,
          /*$$scope*/
          i[2],
          o,
          null
        ) : ye(
          /*$$scope*/
          i[2]
        ),
        null
      );
    },
    i(i) {
      e || (w(n, i), e = true);
    },
    o(i) {
      k(n, i), e = false;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function $a(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { words: o = null } = e, { optional: s = false } = e, r = Oe("wx-i18n");
  return r || (r = Fn(Tn)), r = r.extend(o, s), Gt("wx-i18n", r), l.$$set = (a) => {
    "words" in a && t(0, o = a.words), "optional" in a && t(1, s = a.optional), "$$scope" in a && t(2, i = a.$$scope);
  }, [o, s, i, n];
}
var ef = class extends te {
  constructor(e) {
    super(), ee(this, e, $a, xa, $, { words: 0, optional: 1 });
  }
};
function tf(l) {
  const e = pt();
  l.setAttribute("data-wx-portal-root", e);
}
function Ki(l, e) {
  l.forEach((t) => {
    e(t), t.data && t.data.length && Ki(t.data, e);
  });
}
function Xi(l, e) {
  const t = [];
  return l.forEach((n) => {
    if (n.data) {
      const i = Xi(n.data, e);
      i.length && t.push(__spreadProps(__spreadValues({}, n), { data: i }));
    } else
      e(n) && t.push(n);
  }), t;
}
var nf = 1;
function lf(l) {
  return Ki(l, (e) => {
    e.id = e.id || nf++;
  }), l;
}
var of = {};
function El(l) {
  return of[l];
}
function Ol(l) {
  let e, t;
  return {
    c() {
      e = F("i"), b(e, "class", t = "icon " + /*item*/
      l[0].icon + " svelte-nryequ");
    },
    m(n, i) {
      O(n, e, i);
    },
    p(n, i) {
      i & /*item*/
      1 && t !== (t = "icon " + /*item*/
      n[0].icon + " svelte-nryequ") && b(e, "class", t);
    },
    d(n) {
      n && E(e);
    }
  };
}
function sf(l) {
  let e, t = (
    /*item*/
    l[0].text + ""
  ), n;
  return {
    c() {
      e = F("span"), n = ie(t), b(e, "class", "value svelte-nryequ");
    },
    m(i, o) {
      O(i, e, o), I(e, n);
    },
    p(i, o) {
      o & /*item*/
      1 && t !== (t = /*item*/
      i[0].text + "") && de(n, t);
    },
    i: K,
    o: K,
    d(i) {
      i && E(e);
    }
  };
}
function rf(l) {
  let e, t, n;
  var i = El(
    /*item*/
    l[0].type
  );
  function o(s, r) {
    return { props: { item: (
      /*item*/
      s[0]
    ) } };
  }
  return i && (e = Le(i, o(l))), {
    c() {
      e && V(e.$$.fragment), t = he();
    },
    m(s, r) {
      e && W(e, s, r), O(s, t, r), n = true;
    },
    p(s, r) {
      if (r & /*item*/
      1 && i !== (i = El(
        /*item*/
        s[0].type
      ))) {
        if (e) {
          Z();
          const a = e;
          k(a.$$.fragment, 1, 0, () => {
            B(a, 1);
          }), x();
        }
        i ? (e = Le(i, o(s)), V(e.$$.fragment), w(e.$$.fragment, 1), W(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const a = {};
        r & /*item*/
        1 && (a.item = /*item*/
        s[0]), e.$set(a);
      }
    },
    i(s) {
      n || (e && w(e.$$.fragment, s), n = true);
    },
    o(s) {
      e && k(e.$$.fragment, s), n = false;
    },
    d(s) {
      s && E(t), e && B(e, s);
    }
  };
}
function Al(l) {
  let e, t = (
    /*item*/
    l[0].subtext + ""
  ), n;
  return {
    c() {
      e = F("span"), n = ie(t), b(e, "class", "subtext svelte-nryequ");
    },
    m(i, o) {
      O(i, e, o), I(e, n);
    },
    p(i, o) {
      o & /*item*/
      1 && t !== (t = /*item*/
      i[0].subtext + "") && de(n, t);
    },
    d(i) {
      i && E(e);
    }
  };
}
function Hl(l) {
  let e;
  return {
    c() {
      e = F("i"), b(e, "class", "sub-icon wxi-angle-right svelte-nryequ");
    },
    m(t, n) {
      O(t, e, n);
    },
    d(t) {
      t && E(e);
    }
  };
}
function af(l) {
  let e, t, n, i, o, s, r, a, f, u, c, d = (
    /*item*/
    l[0].icon && Ol(l)
  );
  const h = [rf, sf], m = [];
  function _(S, D) {
    return (
      /*item*/
      S[0].type ? 0 : 1
    );
  }
  n = _(l), i = m[n] = h[n](l);
  let g = (
    /*item*/
    l[0].subtext && Al(l)
  ), C = (
    /*item*/
    l[0].data && Hl()
  );
  return {
    c() {
      e = F("div"), d && d.c(), t = J(), i.c(), o = J(), g && g.c(), s = J(), C && C.c(), b(e, "class", r = "item " + /*item*/
      (l[0].css || "") + " svelte-nryequ"), b(e, "data-id", a = /*item*/
      l[0].id);
    },
    m(S, D) {
      O(S, e, D), d && d.m(e, null), I(e, t), m[n].m(e, null), I(e, o), g && g.m(e, null), I(e, s), C && C.m(e, null), f = true, u || (c = [
        Q(
          e,
          "mouseenter",
          /*onHover*/
          l[1]
        ),
        Q(
          e,
          "click",
          /*click_handler*/
          l[4]
        )
      ], u = true);
    },
    p(S, [D]) {
      S[0].icon ? d ? d.p(S, D) : (d = Ol(S), d.c(), d.m(e, t)) : d && (d.d(1), d = null);
      let p = n;
      n = _(S), n === p ? m[n].p(S, D) : (Z(), k(m[p], 1, 1, () => {
        m[p] = null;
      }), x(), i = m[n], i ? i.p(S, D) : (i = m[n] = h[n](S), i.c()), w(i, 1), i.m(e, o)), /*item*/
      S[0].subtext ? g ? g.p(S, D) : (g = Al(S), g.c(), g.m(e, s)) : g && (g.d(1), g = null), /*item*/
      S[0].data ? C || (C = Hl(), C.c(), C.m(e, null)) : C && (C.d(1), C = null), (!f || D & /*item*/
      1 && r !== (r = "item " + /*item*/
      (S[0].css || "") + " svelte-nryequ")) && b(e, "class", r), (!f || D & /*item*/
      1 && a !== (a = /*item*/
      S[0].id)) && b(e, "data-id", a);
    },
    i(S) {
      f || (w(i), f = true);
    },
    o(S) {
      k(i), f = false;
    },
    d(S) {
      S && E(e), d && d.d(), m[n].d(), g && g.d(), C && C.d(), u = false, Ae(c);
    }
  };
}
function ff(l, e, t) {
  let { item: n } = e, { showSub: i = false } = e, { activeItem: o = null } = e;
  function s() {
    t(2, i = n.data ? n.id : false), t(3, o = this);
  }
  function r(a) {
    Ne.call(this, l, a);
  }
  return l.$$set = (a) => {
    "item" in a && t(0, n = a.item), "showSub" in a && t(2, i = a.showSub), "activeItem" in a && t(3, o = a.activeItem);
  }, [n, s, i, o, r];
}
var uf = class extends te {
  constructor(e) {
    super(), ee(this, e, ff, af, $, { item: 0, showSub: 2, activeItem: 3 });
  }
};
function Nl(l, e, t) {
  const n = l.slice();
  return n[29] = e[t], n;
}
function cf(l) {
  let e, t, n, i;
  function o(f) {
    l[16](f);
  }
  function s(f) {
    l[17](f);
  }
  function r(...f) {
    return (
      /*click_handler_1*/
      l[18](
        /*item*/
        l[29],
        ...f
      )
    );
  }
  let a = { item: (
    /*item*/
    l[29]
  ) };
  return (
    /*showSub*/
    l[5] !== void 0 && (a.showSub = /*showSub*/
    l[5]), /*activeItem*/
    l[6] !== void 0 && (a.activeItem = /*activeItem*/
    l[6]), e = new uf({ props: a }), ge.push(() => et(e, "showSub", o)), ge.push(() => et(e, "activeItem", s)), e.$on("click", r), {
      c() {
        V(e.$$.fragment);
      },
      m(f, u) {
        W(e, f, u), i = true;
      },
      p(f, u) {
        l = f;
        const c = {};
        u[0] & /*options*/
        1 && (c.item = /*item*/
        l[29]), !t && u[0] & /*showSub*/
        32 && (t = true, c.showSub = /*showSub*/
        l[5], $e(() => t = false)), !n && u[0] & /*activeItem*/
        64 && (n = true, c.activeItem = /*activeItem*/
        l[6], $e(() => n = false)), e.$set(c);
      },
      i(f) {
        i || (w(e.$$.fragment, f), i = true);
      },
      o(f) {
        k(e.$$.fragment, f), i = false;
      },
      d(f) {
        B(e, f);
      }
    }
  );
}
function df(l) {
  let e;
  return {
    c() {
      e = F("div"), b(e, "class", "separator svelte-19qa1o8");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && E(e);
    }
  };
}
function Fl(l) {
  let e, t;
  return e = new Ji({
    props: {
      options: (
        /*item*/
        l[29].data
      ),
      at: "right-overlap",
      parent: (
        /*activeItem*/
        l[6]
      ),
      context: (
        /*context*/
        l[1]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    l[19]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*options*/
      1 && (o.options = /*item*/
      n[29].data), i[0] & /*activeItem*/
      64 && (o.parent = /*activeItem*/
      n[6]), i[0] & /*context*/
      2 && (o.context = /*context*/
      n[1]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Tl(l, e) {
  let t, n, i, o, s, r;
  const a = [df, cf], f = [];
  function u(d, h) {
    return (
      /*item*/
      d[29].type === "separator" ? 0 : 1
    );
  }
  n = u(e), i = f[n] = a[n](e);
  let c = (
    /*item*/
    e[29].data && /*showSub*/
    e[5] === /*item*/
    e[29].id && Fl(e)
  );
  return {
    key: l,
    first: null,
    c() {
      t = he(), i.c(), o = J(), c && c.c(), s = he(), this.first = t;
    },
    m(d, h) {
      O(d, t, h), f[n].m(d, h), O(d, o, h), c && c.m(d, h), O(d, s, h), r = true;
    },
    p(d, h) {
      e = d;
      let m = n;
      n = u(e), n === m ? f[n].p(e, h) : (Z(), k(f[m], 1, 1, () => {
        f[m] = null;
      }), x(), i = f[n], i ? i.p(e, h) : (i = f[n] = a[n](e), i.c()), w(i, 1), i.m(o.parentNode, o)), /*item*/
      e[29].data && /*showSub*/
      e[5] === /*item*/
      e[29].id ? c ? (c.p(e, h), h[0] & /*options, showSub*/
      33 && w(c, 1)) : (c = Fl(e), c.c(), w(c, 1), c.m(s.parentNode, s)) : c && (Z(), k(c, 1, 1, () => {
        c = null;
      }), x());
    },
    i(d) {
      r || (w(i), w(c), r = true);
    },
    o(d) {
      k(i), k(c), r = false;
    },
    d(d) {
      d && (E(t), E(o), E(s)), f[n].d(d), c && c.d(d);
    }
  };
}
function hf(l) {
  let e, t = [], n = /* @__PURE__ */ new Map(), i, o, s, r = ke(
    /*options*/
    l[0]
  );
  const a = (f) => (
    /*item*/
    f[29].id
  );
  for (let f = 0; f < r.length; f += 1) {
    let u = Nl(l, r, f), c = a(u);
    n.set(c, t[f] = Tl(c, u));
  }
  return {
    c() {
      e = F("div");
      for (let f = 0; f < t.length; f += 1)
        t[f].c();
      b(e, "data-wx-menu", "true"), b(e, "class", "menu svelte-19qa1o8"), ue(
        e,
        "top",
        /*y*/
        l[3] + "px"
      ), ue(
        e,
        "left",
        /*x*/
        l[2] + "px"
      ), ue(
        e,
        "width",
        /*width*/
        l[4]
      );
    },
    m(f, u) {
      O(f, e, u);
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(e, null);
      l[20](e), i = true, o || (s = [
        ze(Ft.call(
          null,
          e,
          /*cancel*/
          l[10]
        )),
        Q(
          e,
          "mouseleave",
          /*onLeave*/
          l[9]
        )
      ], o = true);
    },
    p(f, u) {
      u[0] & /*options, activeItem, context, showSub, dispatch*/
      355 && (r = ke(
        /*options*/
        f[0]
      ), Z(), t = it(t, u, a, 1, f, r, n, e, gt, Tl, null, Nl), x()), (!i || u[0] & /*y*/
      8) && ue(
        e,
        "top",
        /*y*/
        f[3] + "px"
      ), (!i || u[0] & /*x*/
      4) && ue(
        e,
        "left",
        /*x*/
        f[2] + "px"
      ), (!i || u[0] & /*width*/
      16) && ue(
        e,
        "width",
        /*width*/
        f[4]
      );
    },
    i(f) {
      if (!i) {
        for (let u = 0; u < r.length; u += 1)
          w(t[u]);
        i = true;
      }
    },
    o(f) {
      for (let u = 0; u < t.length; u += 1)
        k(t[u]);
      i = false;
    },
    d(f) {
      f && E(e);
      for (let u = 0; u < t.length; u += 1)
        t[u].d();
      l[20](null), o = false, Ae(s);
    }
  };
}
function mf(l) {
  for (; l; ) {
    l = l.parentNode;
    const e = getComputedStyle(l).position;
    if (l === document.body || e === "relative" || e === "absolute")
      return l;
  }
  return null;
}
function _f(l, e, t) {
  const n = He();
  let { options: i } = e, { left: o = 0 } = e, { top: s = 0 } = e, { at: r = "bottom" } = e, { parent: a = null } = e, { mount: f = null } = e, { context: u = null } = e, c = -1e4, d = -1e4, h, m, _, g, C, S, D, p, y, R, v;
  function M() {
    if (t(2, c = o), t(3, d = s), !v)
      return;
    const G = mf(v), ae = p ? document.body : G;
    if (!G)
      return;
    const q = v.getBoundingClientRect();
    if (!q.width)
      return;
    const U = G.getBoundingClientRect(), le = ae.getBoundingClientRect();
    if (a && r !== "point") {
      m = a.getBoundingClientRect();
      let oe = p ? 0 : 1;
      t(2, c = S ? m.right + oe : m.left - oe), t(3, d = _ ? m.bottom + 1 : m.top), t(4, h = C ? m.width + "px" : "auto");
    } else
      m = { left: o, right: o, top: s, bottom: s };
    let re = g;
    D && t(3, d = m.top - q.height);
    const X = d + q.height - le.bottom;
    X > 0 && t(3, d -= X), c + q.width - le.right > 0 && (S ? re = true : t(2, c = m.right - q.width)), re && t(2, c = m.left - q.width), c < 0 && (r !== "left" ? t(2, c = 0) : t(2, c = m.right)), t(2, c += ae.scrollLeft - U.left), t(3, d += ae.scrollTop - U.top);
  }
  f && f(M), Je(M);
  function z() {
    t(5, y = false);
  }
  function H() {
    n("click", { action: null });
  }
  function A(G) {
    y = G, t(5, y);
  }
  function T(G) {
    R = G, t(6, R);
  }
  const j = (G, ae) => {
    if (!G.data && !ae.defaultPrevented) {
      const q = { context: u, action: G };
      G.handler && G.handler(q), n("click", q);
    }
  };
  function L(G) {
    Ne.call(this, l, G);
  }
  function P(G) {
    ge[G ? "unshift" : "push"](() => {
      v = G, t(7, v);
    });
  }
  return l.$$set = (G) => {
    "options" in G && t(0, i = G.options), "left" in G && t(11, o = G.left), "top" in G && t(12, s = G.top), "at" in G && t(13, r = G.at), "parent" in G && t(14, a = G.parent), "mount" in G && t(15, f = G.mount), "context" in G && t(1, u = G.context);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*options*/
    1 && lf(i), l.$$.dirty[0] & /*at*/
    8192 && (_ = r.indexOf("bottom") !== -1, g = r.indexOf("left") !== -1, S = r.indexOf("right") !== -1, D = r.indexOf("top") !== -1, p = r.indexOf("overlap") !== -1, C = r.indexOf("fit") !== -1), l.$$.dirty[0] & /*parent*/
    16384 && M();
  }, [
    i,
    u,
    c,
    d,
    h,
    y,
    R,
    v,
    n,
    z,
    H,
    o,
    s,
    r,
    a,
    f,
    A,
    T,
    j,
    L,
    P
  ];
}
var Ji = class extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      _f,
      hf,
      $,
      {
        options: 0,
        left: 11,
        top: 12,
        at: 13,
        parent: 14,
        mount: 15,
        context: 1
      },
      null,
      [-1, -1]
    );
  }
};
function gf(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[13].default
  ), s = pe(
    o,
    l,
    /*$$scope*/
    l[14],
    null
  );
  return {
    c() {
      e = F("div"), s && s.c(), b(e, "data-menu-ignore", "true");
    },
    m(r, a) {
      O(r, e, a), s && s.m(e, null), t = true, n || (i = Q(
        e,
        "click",
        /*handler*/
        l[1]
      ), n = true);
    },
    p(r, a) {
      s && s.p && (!t || a & /*$$scope*/
      16384) && we(
        s,
        o,
        r,
        /*$$scope*/
        r[14],
        t ? be(
          o,
          /*$$scope*/
          r[14],
          a,
          null
        ) : ye(
          /*$$scope*/
          r[14]
        ),
        null
      );
    },
    i(r) {
      t || (w(s, r), t = true);
    },
    o(r) {
      k(s, r), t = false;
    },
    d(r) {
      r && E(e), s && s.d(r), n = false, i();
    }
  };
}
function Ll(l) {
  let e, t;
  return e = new Ua({
    props: {
      $$slots: {
        default: [
          pf,
          ({ mount: n }) => ({ 19: n }),
          ({ mount: n }) => n ? 524288 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, at, top, left, mount, parent, item, filteredOptions*/
      540797 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function pf(l) {
  let e, t;
  return e = new Ji({
    props: {
      at: (
        /*at*/
        l[0]
      ),
      top: (
        /*top*/
        l[6]
      ),
      left: (
        /*left*/
        l[5]
      ),
      mount: (
        /*mount*/
        l[19]
      ),
      parent: (
        /*parent*/
        l[4]
      ),
      context: (
        /*item*/
        l[3]
      ),
      options: (
        /*filteredOptions*/
        l[2]
      )
    }
  }), e.$on(
    "click",
    /*onClick*/
    l[8]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*at*/
      1 && (o.at = /*at*/
      n[0]), i & /*top*/
      64 && (o.top = /*top*/
      n[6]), i & /*left*/
      32 && (o.left = /*left*/
      n[5]), i & /*mount*/
      524288 && (o.mount = /*mount*/
      n[19]), i & /*parent*/
      16 && (o.parent = /*parent*/
      n[4]), i & /*item*/
      8 && (o.context = /*item*/
      n[3]), i & /*filteredOptions*/
      4 && (o.options = /*filteredOptions*/
      n[2]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function bf(l) {
  let e, t, n, i = (
    /*SLOTS*/
    l[7] && /*SLOTS*/
    l[7].default && gf(l)
  ), o = (
    /*parent*/
    l[4] && Ll(l)
  );
  return {
    c() {
      i && i.c(), e = J(), o && o.c(), t = he();
    },
    m(s, r) {
      i && i.m(s, r), O(s, e, r), o && o.m(s, r), O(s, t, r), n = true;
    },
    p(s, [r]) {
      s[7] && /*SLOTS*/
      s[7].default && i.p(s, r), /*parent*/
      s[4] ? o ? (o.p(s, r), r & /*parent*/
      16 && w(o, 1)) : (o = Ll(s), o.c(), w(o, 1), o.m(t.parentNode, t)) : o && (Z(), k(o, 1, 1, () => {
        o = null;
      }), x());
    },
    i(s) {
      n || (w(i), w(o), n = true);
    },
    o(s) {
      k(i), k(o), n = false;
    },
    d(s) {
      s && (E(e), E(t)), i && i.d(s), o && o.d(s);
    }
  };
}
function wf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const o = He(), s = e.$$slots;
  let { options: r } = e, { at: a = "bottom" } = e, { resolver: f = null } = e, { dataKey: u = "contextId" } = e, { filter: c = null } = e;
  const d = p;
  var h, m = null, _ = null;
  let g = 0, C = 0;
  function S(y) {
    t(4, _ = null), o("click", y.detail);
  }
  function D(y, R) {
    let v = null;
    for (; y && y.dataset && !v; )
      v = y.dataset[R], y = y.parentNode;
    return v ? Nn(v) : null;
  }
  function p(y, R) {
    if (!y) {
      t(4, _ = null);
      return;
    }
    const v = y.target;
    v && v.dataset && v.dataset.menuIgnore || (t(5, g = y.clientX + 1), t(6, C = y.clientY + 1), t(3, m = typeof R < "u" ? R : D(v, u)), !(f && (t(3, m = f(m, y)), !m)) && (m !== null && c && t(2, h = Xi(r, (M) => c(M, m))), t(4, _ = v), y.preventDefault()));
  }
  return l.$$set = (y) => {
    t(18, e = Ee(Ee({}, e), Fe(y))), "options" in y && t(9, r = y.options), "at" in y && t(0, a = y.at), "resolver" in y && t(10, f = y.resolver), "dataKey" in y && t(11, u = y.dataKey), "filter" in y && t(12, c = y.filter), "$$scope" in y && t(14, i = y.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*options*/
    512 && t(2, h = r);
  }, e = Fe(e), [
    a,
    d,
    h,
    m,
    _,
    g,
    C,
    s,
    S,
    r,
    f,
    u,
    c,
    n,
    i
  ];
}
var yf = class extends te {
  constructor(e) {
    super(), ee(this, e, wf, bf, $, {
      options: 9,
      at: 0,
      resolver: 10,
      dataKey: 11,
      filter: 12,
      handler: 1
    });
  }
  get handler() {
    return this.$$.ctx[1];
  }
};
function kf(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), s = pe(
    o,
    l,
    /*$$scope*/
    l[7],
    null
  );
  return {
    c() {
      e = F("div"), s && s.c(), b(e, "data-menu-ignore", "true");
    },
    m(r, a) {
      O(r, e, a), s && s.m(e, null), t = true, n || (i = Q(e, "contextmenu", function() {
        Ye(
          /*handler*/
          l[0]
        ) && l[0].apply(this, arguments);
      }), n = true);
    },
    p(r, a) {
      l = r, s && s.p && (!t || a & /*$$scope*/
      128) && we(
        s,
        o,
        l,
        /*$$scope*/
        l[7],
        t ? be(
          o,
          /*$$scope*/
          l[7],
          a,
          null
        ) : ye(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(r) {
      t || (w(s, r), t = true);
    },
    o(r) {
      k(s, r), t = false;
    },
    d(r) {
      r && E(e), s && s.d(r), n = false, i();
    }
  };
}
function vf(l) {
  let e, t, n, i, o = (
    /*SLOTS*/
    l[6] && /*SLOTS*/
    l[6].default && kf(l)
  );
  function s(a) {
    l[9](a);
  }
  let r = {
    at: (
      /*at*/
      l[2]
    ),
    options: (
      /*options*/
      l[1]
    ),
    resolver: (
      /*resolver*/
      l[3]
    ),
    dataKey: (
      /*dataKey*/
      l[4]
    ),
    filter: (
      /*filter*/
      l[5]
    )
  };
  return (
    /*handler*/
    l[0] !== void 0 && (r.handler = /*handler*/
    l[0]), t = new yf({ props: r }), ge.push(() => et(t, "handler", s)), t.$on(
      "click",
      /*click_handler*/
      l[10]
    ), {
      c() {
        o && o.c(), e = J(), V(t.$$.fragment);
      },
      m(a, f) {
        o && o.m(a, f), O(a, e, f), W(t, a, f), i = true;
      },
      p(a, [f]) {
        a[6] && /*SLOTS*/
        a[6].default && o.p(a, f);
        const u = {};
        f & /*at*/
        4 && (u.at = /*at*/
        a[2]), f & /*options*/
        2 && (u.options = /*options*/
        a[1]), f & /*resolver*/
        8 && (u.resolver = /*resolver*/
        a[3]), f & /*dataKey*/
        16 && (u.dataKey = /*dataKey*/
        a[4]), f & /*filter*/
        32 && (u.filter = /*filter*/
        a[5]), !n && f & /*handler*/
        1 && (n = true, u.handler = /*handler*/
        a[0], $e(() => n = false)), t.$set(u);
      },
      i(a) {
        i || (w(o), w(t.$$.fragment, a), i = true);
      },
      o(a) {
        k(o), k(t.$$.fragment, a), i = false;
      },
      d(a) {
        a && E(e), o && o.d(a), B(t, a);
      }
    }
  );
}
function Sf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const o = e.$$slots;
  let { handler: s = null } = e, { options: r } = e, { at: a = "bottom" } = e, { resolver: f = null } = e, { dataKey: u = "contextId" } = e, { filter: c = null } = e;
  function d(m) {
    s = m, t(0, s);
  }
  function h(m) {
    Ne.call(this, l, m);
  }
  return l.$$set = (m) => {
    t(11, e = Ee(Ee({}, e), Fe(m))), "handler" in m && t(0, s = m.handler), "options" in m && t(1, r = m.options), "at" in m && t(2, a = m.at), "resolver" in m && t(3, f = m.resolver), "dataKey" in m && t(4, u = m.dataKey), "filter" in m && t(5, c = m.filter), "$$scope" in m && t(7, i = m.$$scope);
  }, e = Fe(e), [
    s,
    r,
    a,
    f,
    u,
    c,
    o,
    i,
    n,
    d,
    h
  ];
}
var Cf = class extends te {
  constructor(e) {
    super(), ee(this, e, Sf, vf, $, {
      handler: 0,
      options: 1,
      at: 2,
      resolver: 3,
      dataKey: 4,
      filter: 5
    });
  }
};
(/* @__PURE__ */ new Date()).valueOf();
var Ve = "number";
var Xe = "text";
var Ze = "date";
var at = "tuple";
var Mn = [
  {
    id: "greater",
    name: "greater",
    short: ">",
    type: [Ve, Ze, at],
    handler: (l, e) => l > e
  },
  {
    id: "less",
    name: "less",
    short: "<",
    type: [Ve, Ze, at],
    handler: (l, e) => l < e
  },
  {
    id: "greaterOrEqual",
    name: "greater or equal",
    short: ">=",
    type: [Ve, Ze, at],
    handler: (l, e) => l >= e
  },
  {
    id: "lessOrEqual",
    name: "less or equal",
    short: "<=",
    type: [Ve, Ze, at],
    handler: (l, e) => l <= e
  },
  {
    id: "equal",
    name: "equal",
    short: "=",
    type: [Ve, at],
    handler: (l, e) => l == e
  },
  {
    id: "equal",
    name: "equal",
    short: "=",
    type: [Xe],
    handler: (l, e) => l.toLowerCase() === e.toLowerCase()
  },
  {
    id: "equal",
    name: "equal",
    short: "=",
    default: true,
    type: [Ze],
    handler: (l, e) => !l || !e ? false : l.valueOf() === e.valueOf()
  },
  {
    id: "notEqual",
    name: "not equal",
    short: "!=",
    type: [Ve, at],
    handler: (l, e) => l != e
  },
  {
    id: "notEqual",
    name: "not equal",
    short: "!=",
    type: [Xe],
    handler: (l, e) => l.toLowerCase() !== e.toLowerCase()
  },
  {
    id: "notEqual",
    name: "not equal",
    short: "!=",
    type: [Ze],
    handler: (l, e) => !l || !e ? true : l.valueOf() !== e.valueOf()
  },
  {
    id: "contains",
    name: "contains",
    default: true,
    type: [Ve, Xe],
    handler: (l, e) => l.toString().toLowerCase().indexOf(e.toString().toLowerCase()) !== -1
  },
  {
    id: "notContains",
    name: "not contains",
    type: [Ve, Xe],
    handler: (l, e) => l.toString().toLowerCase().indexOf(e.toString().toLowerCase()) === -1
  },
  {
    id: "beginsWith",
    name: "begins with",
    type: [Ve, Xe],
    handler: (l, e) => (l = l.toString().toLowerCase(), e = e.toString().toLowerCase(), l.lastIndexOf(e, 0) === 0)
  },
  {
    id: "notBeginsWith",
    name: "not begins with",
    type: [Ve, Xe],
    handler: (l, e) => (l = l.toString().toLowerCase(), e = e.toString().toLowerCase(), l.lastIndexOf(e, 0) !== 0)
  },
  {
    id: "endsWith",
    name: "ends with",
    type: [Ve, Xe],
    handler: (l, e) => (l = l.toString().toLowerCase(), e = e.toString().toLowerCase(), l.indexOf(e, l.length - e.length) !== -1)
  },
  {
    id: "notEndsWith",
    name: "not ends with",
    type: [Ve, Xe],
    handler: (l, e) => (l = l.toString().toLowerCase(), e = e.toString().toLowerCase(), l.indexOf(e, l.length - e.length) === -1)
  },
  {
    id: "between",
    name: "between",
    range: true,
    type: [Ze],
    handler: (l, e) => (!e.start || l > e.start) && (!e.end || l < e.end)
  },
  {
    id: "notBetween",
    name: "not between",
    range: true,
    type: [Ze],
    handler: (l, e) => !e.start || l <= e.start || !e.end || l >= e.end
  }
];
var Rn = (l) => typeof l > "u" ? Mn : Mn.filter((e) => e.type.indexOf(l) !== -1);
var Mf = (l, e) => {
  e = e || Xe;
  let t = Mn.filter((n) => n.id === l);
  return t.length > 1 && (t = t.filter((n) => n.type.indexOf(e) !== -1)), t[0];
};
function zl(l, e, t) {
  const n = l.slice();
  return n[45] = e[t], n[47] = t, n;
}
function Il(l) {
  let e, t;
  return e = new Ln({
    props: {
      options: (
        /*fields*/
        l[0]
      ),
      value: (
        /*_field*/
        l[4]
      )
    }
  }), e.$on(
    "select",
    /*changeField*/
    l[19]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*fields*/
      1 && (o.options = /*fields*/
      n[0]), i[0] & /*_field*/
      16 && (o.value = /*_field*/
      n[4]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Rf(l) {
  let e, t;
  return e = new ln({
    props: { value: (
      /*_value*/
      l[6]
    ), focus: true }
  }), e.$on(
    "change",
    /*changeValue*/
    l[18]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*_value*/
      64 && (o.value = /*_value*/
      n[6]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Df(l) {
  let e, t;
  return e = new kr({
    props: {
      value: (
        /*_value*/
        l[6]
      ),
      focus: true,
      options: (
        /*getComboOptions*/
        l[22](
          /*_options*/
          l[8]
        )
      ),
      $$slots: {
        default: [
          Af,
          ({ option: n }) => ({ 45: n }),
          ({ option: n }) => [0, n ? 16384 : 0]
        ]
      },
      $$scope: { ctx: l }
    }
  }), e.$on(
    "select",
    /*changeValue*/
    l[18]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*_value*/
      64 && (o.value = /*_value*/
      n[6]), i[0] & /*_options*/
      256 && (o.options = /*getComboOptions*/
      n[22](
        /*_options*/
        n[8]
      )), i[1] & /*$$scope, option*/
      147456 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Ef(l) {
  let e, t;
  return e = new ln({
    props: {
      value: (
        /*_value*/
        l[6]
      ),
      focus: true,
      type: "number"
    }
  }), e.$on(
    "change",
    /*changeValue*/
    l[18]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*_value*/
      64 && (o.value = /*_value*/
      n[6]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Of(l) {
  let e, t, n, i;
  const o = [Nf, Hf], s = [];
  function r(a, f) {
    return (
      /*_filter*/
      a[3] == "between" || /*_filter*/
      a[3] == "notBetween" ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = he();
    },
    m(a, f) {
      s[e].m(a, f), O(a, n, f), i = true;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Z(), k(s[u], 1, 1, () => {
        s[u] = null;
      }), x(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), w(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (w(t), i = true);
    },
    o(a) {
      k(t), i = false;
    },
    d(a) {
      a && E(n), s[e].d(a);
    }
  };
}
function Af(l) {
  let e = (
    /*option*/
    (l[45].emptyLabel || /*option*/
    l[45].label) + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i[1] & /*option*/
      16384 && e !== (e = /*option*/
      (n[45].emptyLabel || /*option*/
      n[45].label) + "") && de(t, e);
    },
    d(n) {
      n && E(t);
    }
  };
}
function Hf(l) {
  let e, t;
  return e = new ua({
    props: {
      format: (
        /*f*/
        l[12]
      ),
      value: (
        /*_value*/
        l[6]
      )
    }
  }), e.$on(
    "select",
    /*changeValue*/
    l[18]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*_value*/
      64 && (o.value = /*_value*/
      n[6]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Nf(l) {
  let e, t;
  return e = new wa({
    props: {
      format: (
        /*f*/
        l[12]
      ),
      value: (
        /*_value*/
        l[6]
      ),
      done: true
    }
  }), e.$on(
    "select",
    /*changeValue*/
    l[18]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*_value*/
      64 && (o.value = /*_value*/
      n[6]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Ff(l) {
  let e = (
    /*allSelected*/
    (l[9] ? (
      /*_*/
      l[13]("Unselect all")
    ) : (
      /*_*/
      l[13]("Select all")
    )) + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i[0] & /*allSelected*/
      512 && e !== (e = /*allSelected*/
      (n[9] ? (
        /*_*/
        n[13]("Unselect all")
      ) : (
        /*_*/
        n[13]("Select all")
      )) + "") && de(t, e);
    },
    d(n) {
      n && E(t);
    }
  };
}
function ql(l) {
  let e, t, n, i;
  return t = new lr({
    props: {
      label: (
        /*getLabel*/
        l[21](
          /*option*/
          l[45]
        )
      ),
      name: (
        /*option*/
        l[45]
      ),
      value: (
        /*_includes*/
        l[7] && /*_includes*/
        l[7].includes(
          /*option*/
          l[45]
        )
      )
    }
  }), t.$on(
    "change",
    /*handleChange*/
    l[17]
  ), {
    c() {
      e = F("div"), V(t.$$.fragment), n = J(), b(e, "class", "item svelte-zxdw6a"), b(
        e,
        "tabindex",
        /*i*/
        l[47] ? -1 : 0
      ), b(e, "role", "option");
    },
    m(o, s) {
      O(o, e, s), W(t, e, null), I(e, n), i = true;
    },
    p(o, s) {
      const r = {};
      s[0] & /*visibleValues*/
      1024 && (r.label = /*getLabel*/
      o[21](
        /*option*/
        o[45]
      )), s[0] & /*visibleValues*/
      1024 && (r.name = /*option*/
      o[45]), s[0] & /*_includes, visibleValues*/
      1152 && (r.value = /*_includes*/
      o[7] && /*_includes*/
      o[7].includes(
        /*option*/
        o[45]
      )), t.$set(r);
    },
    i(o) {
      i || (w(t.$$.fragment, o), i = true);
    },
    o(o) {
      k(t.$$.fragment, o), i = false;
    },
    d(o) {
      o && E(e), B(t);
    }
  };
}
function Pl(l) {
  let e, t, n, i, o;
  return t = new mt({
    props: {
      type: "secondary",
      click: (
        /*doCancel*/
        l[15]
      ),
      $$slots: { default: [Tf] },
      $$scope: { ctx: l }
    }
  }), i = new mt({
    props: {
      type: "primary",
      click: (
        /*doApply*/
        l[14]
      ),
      $$slots: { default: [Lf] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = F("div"), V(t.$$.fragment), n = J(), V(i.$$.fragment), b(e, "class", "wrap svelte-zxdw6a");
    },
    m(s, r) {
      O(s, e, r), W(t, e, null), I(e, n), W(i, e, null), o = true;
    },
    p(s, r) {
      const a = {};
      r[1] & /*$$scope*/
      131072 && (a.$$scope = { dirty: r, ctx: s }), t.$set(a);
      const f = {};
      r[1] & /*$$scope*/
      131072 && (f.$$scope = { dirty: r, ctx: s }), i.$set(f);
    },
    i(s) {
      o || (w(t.$$.fragment, s), w(i.$$.fragment, s), o = true);
    },
    o(s) {
      k(t.$$.fragment, s), k(i.$$.fragment, s), o = false;
    },
    d(s) {
      s && E(e), B(t), B(i);
    }
  };
}
function Tf(l) {
  let e = (
    /*_*/
    l[13]("Cancel") + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p: K,
    d(n) {
      n && E(t);
    }
  };
}
function Lf(l) {
  let e = (
    /*_*/
    l[13]("Apply") + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p: K,
    d(n) {
      n && E(t);
    }
  };
}
function zf(l) {
  let e, t, n, i, o, s, r, a, f, u, c, d, h, m, _, g = (
    /*fields*/
    l[0] && /*fieldsSelector*/
    l[1] && Il(l)
  );
  o = new Ln({
    props: {
      options: (
        /*rules*/
        l[11]
      ),
      value: (
        /*_filter*/
        l[3]
      )
    }
  }), o.$on(
    "select",
    /*changeFilter*/
    l[20]
  );
  const C = [Of, Ef, Df, Rf], S = [];
  function D(M, z) {
    return (
      /*_type*/
      M[5] === "date" ? 0 : (
        /*_type*/
        M[5] === "number" ? 1 : (
          /*_type*/
          M[5] === "tuple" ? 2 : 3
        )
      )
    );
  }
  a = D(l), f = S[a] = C[a](l), c = new mt({
    props: {
      click: (
        /*toggleAll*/
        l[16]
      ),
      $$slots: { default: [Ff] },
      $$scope: { ctx: l }
    }
  });
  let p = ke(
    /*visibleValues*/
    l[10]
  ), y = [];
  for (let M = 0; M < p.length; M += 1)
    y[M] = ql(zl(l, p, M));
  const R = (M) => k(y[M], 1, 1, () => {
    y[M] = null;
  });
  let v = (
    /*buttons*/
    l[2] && Pl(l)
  );
  return {
    c() {
      e = F("div"), g && g.c(), t = J(), n = F("div"), i = F("div"), V(o.$$.fragment), s = J(), r = F("div"), f.c(), u = J(), V(c.$$.fragment), d = J(), h = F("div");
      for (let M = 0; M < y.length; M += 1)
        y[M].c();
      m = J(), v && v.c(), b(i, "class", "cell svelte-zxdw6a"), b(r, "class", "cell svelte-zxdw6a"), b(n, "class", "wrap svelte-zxdw6a"), b(h, "class", "list svelte-zxdw6a"), b(h, "role", "listbox"), b(e, "class", "editor svelte-zxdw6a");
    },
    m(M, z) {
      O(M, e, z), g && g.m(e, null), I(e, t), I(e, n), I(n, i), W(o, i, null), I(n, s), I(n, r), S[a].m(r, null), I(e, u), W(c, e, null), I(e, d), I(e, h);
      for (let H = 0; H < y.length; H += 1)
        y[H] && y[H].m(h, null);
      I(e, m), v && v.m(e, null), _ = true;
    },
    p(M, z) {
      M[0] && /*fieldsSelector*/
      M[1] ? g ? (g.p(M, z), z[0] & /*fields, fieldsSelector*/
      3 && w(g, 1)) : (g = Il(M), g.c(), w(g, 1), g.m(e, t)) : g && (Z(), k(g, 1, 1, () => {
        g = null;
      }), x());
      const H = {};
      z[0] & /*rules*/
      2048 && (H.options = /*rules*/
      M[11]), z[0] & /*_filter*/
      8 && (H.value = /*_filter*/
      M[3]), o.$set(H);
      let A = a;
      a = D(M), a === A ? S[a].p(M, z) : (Z(), k(S[A], 1, 1, () => {
        S[A] = null;
      }), x(), f = S[a], f ? f.p(M, z) : (f = S[a] = C[a](M), f.c()), w(f, 1), f.m(r, null));
      const T = {};
      if (z[0] & /*allSelected*/
      512 | z[1] & /*$$scope*/
      131072 && (T.$$scope = { dirty: z, ctx: M }), c.$set(T), z[0] & /*getLabel, visibleValues, _includes, handleChange*/
      2229376) {
        p = ke(
          /*visibleValues*/
          M[10]
        );
        let j;
        for (j = 0; j < p.length; j += 1) {
          const L = zl(M, p, j);
          y[j] ? (y[j].p(L, z), w(y[j], 1)) : (y[j] = ql(L), y[j].c(), w(y[j], 1), y[j].m(h, null));
        }
        for (Z(), j = p.length; j < y.length; j += 1)
          R(j);
        x();
      }
      M[2] ? v ? (v.p(M, z), z[0] & /*buttons*/
      4 && w(v, 1)) : (v = Pl(M), v.c(), w(v, 1), v.m(e, null)) : v && (Z(), k(v, 1, 1, () => {
        v = null;
      }), x());
    },
    i(M) {
      if (!_) {
        w(g), w(o.$$.fragment, M), w(f), w(c.$$.fragment, M);
        for (let z = 0; z < p.length; z += 1)
          w(y[z]);
        w(v), _ = true;
      }
    },
    o(M) {
      k(g), k(o.$$.fragment, M), k(f), k(c.$$.fragment, M), y = y.filter(Boolean);
      for (let z = 0; z < y.length; z += 1)
        k(y[z]);
      k(v), _ = false;
    },
    d(M) {
      M && E(e), g && g.d(), B(o), S[a].d(), B(c), Nt(y, M), v && v.d();
    }
  };
}
var jt = 1;
var ft = 2;
var Ct = 4;
var nt = 8;
var Mt = 16;
var ut = 32;
var pn = 64;
function If(l, e, t) {
  const n = He();
  let { fields: i = null } = e, { fieldsSelector: o = true } = e, { field: s = null } = e, { buttons: r = true } = e, { options: a = null } = e, { includes: f = null } = e, { type: u = "text" } = e, { filter: c = "" } = e, { value: d = "" } = e, { format: h = null } = e;
  const m = Oe("wx-i18n"), _ = m.getRaw(), g = _.query?.dateFormat || _.formats?.dateFormat || "%m/%d/%Y", C = At(g, _.calendar), S = m.getGroup("query");
  let D, p, y, R, v = [], M, z, H, A = false, T = 0;
  Je(() => {
    t(30, A = true);
  });
  const j = (Y) => Y ? Y.toString() : "";
  function L(Y, ne) {
    switch (Y) {
      case jt:
        if (p !== ne)
          return t(4, p = ne), Y;
        break;
      case Mt:
        if (y !== ne)
          return t(5, y = ne), Y;
        break;
      case ft:
        if (D !== ne)
          return t(3, D = ne), Y;
        break;
      case Ct:
        if (R !== ne)
          return t(6, R = ne), Y;
        break;
      case nt:
        if (j(v) != j(ne))
          return t(7, v = ne || []), Y;
        break;
      case pn:
        if (M !== ne)
          return t(8, M = ne || []), Y;
        break;
    }
    return 0;
  }
  let P = null;
  function G(Y) {
    T = T | Y, P || (P = setTimeout(() => {
      const ne = T;
      P = null, T = 0, re(ne);
    }));
  }
  let ae, q = [], U, le;
  function re(Y) {
    if (Y & jt && i) {
      t(8, M = null);
      const ne = i.find((Ge) => Ge.id === p), Ce = R instanceof Date, Re = ne.type === "tuple" || y == "tuple";
      (Ce && ne.type !== "date" || !Ce && ne.type == "date" || isNaN(R) && ne.type == "number" || Re) && t(6, R = null), z = ne.format, H = ne.predicate, Y = Y | L(Mt, ne.type || "text"), n("action", {
        action: "request-options",
        data: { id: p }
      });
    }
    if (Y & Mt && t(11, le = Rn(y).map((ne) => ({ id: ne.id, name: S(ne.name || ne.id) }))), (Y & Mt || Y & ft) && (U = Mf(D, y), U || (U = Rn(y).find((ne) => ne.default), Y = Y | L(ft, U.id)), typeof R == "object" && !(R instanceof Date) && !U.range && (Y = Y | L(Ct, ""))), Y & ft || Y & Ct || Y & pn)
      if (M) {
        const ne = R || R === 0 ? (Re) => U.handler(Re, R || "") : null;
        t(10, q = D && ne ? M.filter(ne) : M);
        let Ce = v;
        v.length && (Ce = v.filter((Re) => q.includes(Re))), Ce.length ? Ce.length !== v.length && (Y = Y | L(nt, Ce)) : Y = Y | L(nt, [...q]);
      } else
        t(10, q = []);
    if (Y & nt && t(9, ae = v.length === q.length), Y & ut) {
      const ne = me();
      n("change", ne);
    }
  }
  function X() {
    const Y = me();
    n("apply", Y);
  }
  function ve() {
    n("cancel");
  }
  function oe() {
    t(9, ae = !ae), G(L(nt, ae ? [...q] : []) | ut);
  }
  function ce(Y) {
    const ne = Y.detail, Ce = ne.value ? [...v, ne.name] : v.filter((Re) => Re != ne.name);
    G(L(nt, Ce) | ut);
  }
  function fe(Y) {
    const { value: ne, selected: Ce } = Y.detail;
    let Re = typeof Ce > "u" ? ne : Ce;
    if (Ce && typeof Ce == "object") {
      const { id: Ge } = Ce;
      (Ge || Ge === 0) && (Re = Ge);
    }
    Re === "$empty" && (Re = ""), G(L(Ct, Re) | ut);
  }
  function Se(Y) {
    const { selected: ne } = Y.detail;
    G(L(jt, ne.id) | ut);
  }
  function _e(Y) {
    const { selected: ne } = Y.detail;
    G(L(ft, ne.id) | ut);
  }
  function me() {
    const Y = {
      filter: D,
      value: R,
      type: y,
      predicate: H
    };
    return p && (Y.field = p), v && v.length && v.length !== q.length ? Y.includes = [...v] : Y.includes = [], { rule: Y };
  }
  function Ie(Y) {
    return z && typeof z == "function" ? z(Y) : Y instanceof Date ? z ? At(z, _.calendar)(Y) : C(Y) : Y;
  }
  function je(Y) {
    let ne = Y ? Y.map((Ce) => ({ id: Ce, label: Ie(Ce) })) : [];
    return [{ id: "$empty", label: "", emptyLabel: "-" }].concat(ne);
  }
  return l.$$set = (Y) => {
    "fields" in Y && t(0, i = Y.fields), "fieldsSelector" in Y && t(1, o = Y.fieldsSelector), "field" in Y && t(23, s = Y.field), "buttons" in Y && t(2, r = Y.buttons), "options" in Y && t(24, a = Y.options), "includes" in Y && t(25, f = Y.includes), "type" in Y && t(26, u = Y.type), "filter" in Y && t(27, c = Y.filter), "value" in Y && t(28, d = Y.value), "format" in Y && t(29, h = Y.format);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*ready, field*/
    1082130432 && A && G(L(jt, s)), l.$$.dirty[0] & /*ready, type*/
    1140850688 && A && G(L(Mt, u)), l.$$.dirty[0] & /*ready, filter*/
    1207959552 && A && G(L(ft, c)), l.$$.dirty[0] & /*ready, value*/
    1342177280 && A && G(L(Ct, d)), l.$$.dirty[0] & /*ready, includes*/
    1107296256 && A && G(L(nt, f)), l.$$.dirty[0] & /*ready, options*/
    1090519040 && A && G(L(pn, a)), l.$$.dirty[0] & /*format, fields*/
    536870913 && h && !i && (z = h);
  }, [
    i,
    o,
    r,
    D,
    p,
    y,
    R,
    v,
    M,
    ae,
    q,
    le,
    g,
    S,
    X,
    ve,
    oe,
    ce,
    fe,
    Se,
    _e,
    Ie,
    je,
    s,
    a,
    f,
    u,
    c,
    d,
    h,
    A
  ];
}
var qf = class extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      If,
      zf,
      $,
      {
        fields: 0,
        fieldsSelector: 1,
        field: 23,
        buttons: 2,
        options: 24,
        includes: 25,
        type: 26,
        filter: 27,
        value: 28,
        format: 29
      },
      null,
      [-1, -1]
    );
  }
};
function Pf(l) {
  let e, t;
  return e = new zn({
    props: {
      fonts: (
        /*fonts*/
        l[0]
      ),
      $$slots: { default: [jf] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*fonts*/
      1 && (o.fonts = /*fonts*/
      n[0]), i & /*$$scope*/
      8 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function jf(l) {
  let e;
  const t = (
    /*#slots*/
    l[2].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[3],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = true;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      8) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? be(
          t,
          /*$$scope*/
          i[3],
          o,
          null
        ) : ye(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (w(n, i), e = true);
    },
    o(i) {
      k(n, i), e = false;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Wf(l) {
  let e, t, n = (
    /*SLOTS*/
    l[1] && /*SLOTS*/
    l[1].default && Pf(l)
  );
  return {
    c() {
      n && n.c(), e = he();
    },
    m(i, o) {
      n && n.m(i, o), O(i, e, o), t = true;
    },
    p(i, [o]) {
      i[1] && /*SLOTS*/
      i[1].default && n.p(i, o);
    },
    i(i) {
      t || (w(n), t = true);
    },
    o(i) {
      k(n), t = false;
    },
    d(i) {
      i && E(e), n && n.d(i);
    }
  };
}
function Bf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const o = e.$$slots;
  let { fonts: s = true } = e;
  return l.$$set = (r) => {
    t(4, e = Ee(Ee({}, e), Fe(r))), "fonts" in r && t(0, s = r.fonts), "$$scope" in r && t(3, i = r.$$scope);
  }, e = Fe(e), [s, o, n, i];
}
var Vf = class extends te {
  constructor(e) {
    super(), ee(this, e, Bf, Wf, $, { fonts: 0 });
  }
};
var Yf = {
  grid: {}
};
(/* @__PURE__ */ new Date()).valueOf();
var Gf = class {
  constructor(e) {
    this._nextHandler = null, this._dispatch = e, this.exec = this.exec.bind(this);
  }
  exec(e, t) {
    return __async(this, null, function* () {
      return this._dispatch(e, t), this._nextHandler && (yield this._nextHandler.exec(e, t)), t;
    });
  }
  setNext(e) {
    return this._nextHandler = e;
  }
};
(/* @__PURE__ */ new Date()).valueOf();
var Qi = 2;
var Uf = class {
  constructor(e) {
    e && (this._writable = e.writable, this._async = e.async), this._values = {}, this._state = {};
  }
  setState(e, t = 0) {
    const n = {};
    return this._wrapProperties(e, this._state, this._values, "", n, t), n;
  }
  getState() {
    return this._values;
  }
  getReactive() {
    return this._state;
  }
  _wrapProperties(e, t, n, i, o, s) {
    for (const r in e) {
      const a = t[r], f = n[r], u = e[r];
      if (a && (f === u && typeof u != "object" || u instanceof Date && f instanceof Date && f.getTime() === u.getTime()))
        continue;
      const c = i + (i ? "." : "") + r;
      a ? (a.__parse(u, c, o, s) && (n[r] = u), s & Qi ? o[c] = a.__trigger : a.__trigger()) : (u && u.__reactive ? t[r] = this._wrapNested(u, u, c, o) : t[r] = this._wrapWritable(u), n[r] = u), o[c] = o[c] || null;
    }
  }
  _wrapNested(e, t, n, i) {
    const o = this._wrapWritable(e);
    return this._wrapProperties(e, o, t, n, i, 0), o.__parse = (s, r, a, f) => (this._wrapProperties(s, o, t, r, a, f), false), o;
  }
  _wrapWritable(e) {
    const t = [], n = function() {
      for (let i = 0; i < t.length; i++)
        t[i](e);
    };
    return { subscribe: (i) => (t.push(i), this._async ? setTimeout(i, 1, e) : i(e), () => {
      const o = t.indexOf(i);
      o >= 0 && t.splice(o, 1);
    }), __trigger: () => {
      t.length && (this._async ? setTimeout(n, 1) : n());
    }, __parse: function(i) {
      return e = i, true;
    } };
  }
};
var Kf = class {
  constructor(e, t, n, i) {
    typeof e == "function" ? this._setter = e : this._setter = e.setState.bind(e), this._routes = t, this._parsers = n, this._prev = {}, this._triggers = /* @__PURE__ */ new Map(), this._sources = /* @__PURE__ */ new Map(), this._routes.forEach((o) => {
      o.in.forEach((s) => {
        const r = this._triggers.get(s) || [];
        r.push(o), this._triggers.set(s, r);
      }), o.out.forEach((s) => {
        const r = this._sources.get(s) || {};
        o.in.forEach((a) => r[a] = true), this._sources.set(s, r);
      });
    }), this._routes.forEach((o) => {
      o.length = Math.max(...o.in.map((s) => Zi(s, this._sources, 1)));
    }), this._bus = i;
  }
  init(e) {
    const t = {};
    for (const n in e)
      if (this._prev[n] !== e[n]) {
        const i = this._parsers[n];
        t[n] = i ? i(e[n]) : e[n];
      }
    this._prev = this._prev ? __spreadValues(__spreadValues({}, this._prev), e) : __spreadValues({}, e), this.setState(t), this._bus && this._bus.exec("init-state", t);
  }
  setStateAsync(e) {
    const t = this._setter(e, Qi);
    return this._async ? Object.assign(this._async.signals, t) : this._async = { signals: t, timer: setTimeout(this._applyState.bind(this), 1) }, t;
  }
  _applyState() {
    const e = this._async;
    if (e) {
      this._async = null, this._triggerUpdates(e.signals, []);
      for (const t in e.signals) {
        const n = e.signals[t];
        n && n();
      }
    }
  }
  setState(e, t = []) {
    const n = this._setter(e);
    return this._triggerUpdates(n, t), n;
  }
  _triggerUpdates(e, t) {
    const n = Object.keys(e), i = !t.length;
    t = t || [];
    for (let o = 0; o < n.length; o++) {
      const s = n[o], r = this._triggers.get(s);
      r && r.forEach((a) => {
        t.indexOf(a) == -1 && t.push(a);
      });
    }
    i && this._execNext(t);
  }
  _execNext(e) {
    for (; e.length; ) {
      e.sort((n, i) => n.length < i.length ? 1 : -1);
      const t = e[e.length - 1];
      e.splice(e.length - 1), t.exec(e);
    }
  }
};
function Zi(l, e, t) {
  const n = e.get(l);
  if (!n)
    return t;
  const i = Object.keys(n).map((o) => Zi(o, e, t + 1));
  return Math.max(...i);
}
var Xf = class {
  constructor() {
    this._nextHandler = null, this._handlers = {}, this._tag = /* @__PURE__ */ new WeakMap(), this.exec = this.exec.bind(this);
  }
  on(e, t, n) {
    let i = this._handlers[e];
    i ? n && n.intercept ? i.unshift(t) : i.push(t) : i = this._handlers[e] = [t], n && n.tag && this._tag.set(t, n.tag);
  }
  intercept(e, t, n) {
    this.on(e, t, __spreadProps(__spreadValues({}, n), { intercept: true }));
  }
  detach(e) {
    for (const t in this._handlers) {
      const n = this._handlers[t];
      for (let i = n.length - 1; i >= 0; i--)
        this._tag.get(n[i]) === e && n.splice(i, 1);
    }
  }
  exec(e, t) {
    return __async(this, null, function* () {
      const n = this._handlers[e];
      if (n)
        for (let i = 0; i < n.length; i++) {
          const o = n[i](t);
          if (o === false || o && o.then && (yield o) === false)
            return;
        }
      return this._nextHandler && (yield this._nextHandler.exec(e, t)), t;
    });
  }
  setNext(e) {
    return this._nextHandler = e;
  }
};
function Jf(l) {
  return (e) => e[l];
}
function Qf(l) {
  return (e, t) => e[l] = t;
}
function xi(l, e) {
  return (e.getter || Jf(e.id))(l) ?? "";
}
function jl(l, e, t) {
  return (e.setter || Qf(e.id))(l, t);
}
function Wl(l, e) {
  const t = document.createElement("a");
  t.href = URL.createObjectURL(l), t.download = e, document.body.appendChild(t), t.click(), document.body.removeChild(t);
}
function tt(l, e) {
  let t = xi(l, e);
  return e.template && (t = e.template(t, l, e)), e.optionsMap && (Array.isArray(t) ? t = t.map((n) => e.optionsMap.get(n)) : t = e.optionsMap.get(t)), typeof t > "u" ? "" : t + "";
}
function Zf(l, e) {
  const t = /\n|"|;|,/;
  let n = "";
  const i = e.rows || `
`, o = e.cols || "	", s = l._columns, r = l.data;
  e.header !== false && s[0].header && (n = Bl("header", s, n, o, i));
  for (let a = 0; a < r.length; a++) {
    const f = [];
    for (let u = 0; u < s.length; u++) {
      let c = tt(r[a], s[u]);
      t.test(c) && (c = '"' + c.replace(/"/g, '""') + '"'), f.push(c);
    }
    n += (n ? i : "") + f.join(o);
  }
  return e.footer !== false && s[0].footer && (n = Bl("footer", s, n, o, i)), n;
}
function Bl(l, e, t, n, i) {
  const o = /\n|"|;|,/;
  for (let s = 0; s < e[0][l].length; s++) {
    const r = [];
    for (let a = 0; a < e.length; a++) {
      let f = (e[a][l][s].text || "") + "";
      o.test(f) && (f = '"' + f.replace(/"/g, '""') + '"'), r.push(f);
    }
    t += (t ? i : "") + r.join(n);
  }
  return t;
}
function xf(l, e) {
  const t = [], n = [], i = [];
  let o = [];
  const s = l._columns, r = l.data, a = l._sizes;
  for (let u = 0; u < s.length; u++)
    i.push({ width: s[u].width || a.colWidth });
  let f = 0;
  e.header !== false && s[0].header && (Vl("header", s, t, n, f), o = o.concat(a.headerRowHeights.map((u) => ({ height: u }))), f += s[0].header.length);
  for (let u = 0; u < r.length; u++) {
    const c = [];
    for (let d = 0; d < s.length; d++)
      c.push({ v: tt(r[u], s[d]), s: 2 });
    t.push(c), o.push({ height: a.rowHeight });
  }
  return f += r.length, e.footer !== false && s[0].footer && (Vl("footer", s, t, n, f), o = o.concat(a.footerRowHeights.map((u) => ({ height: u })))), { cells: t, merged: n, rowSizes: o, colSizes: i };
}
function Vl(l, e, t, n, i) {
  for (let o = 0; o < e[0][l].length; o++) {
    const s = [];
    for (let r = 0; r < e.length; r++) {
      const a = e[r][l][o], f = a.colspan ? a.colspan - 1 : 0, u = a.rowspan ? a.rowspan - 1 : 0;
      (f || u) && n.push({ from: { row: o + i, column: r }, to: { row: o + i + u, column: r + f } });
      const c = (a.text || "") + "";
      let d;
      l == "header" ? o == e[0][l].length - 1 ? d = 1 : d = 0 : o ? d = 4 : d = 3, s.push({ v: c, s: d });
    }
    t.push(s);
  }
}
function $f() {
  const l = { fontWeight: "bold", color: "#000000b3", background: "#f4f5f9", verticalAlign: "center", align: "left" };
  return { cell: { color: "#000000b3", verticalAlign: "center", align: "left" }, header: __spreadValues({}, l), footer: __spreadValues({}, l), lastHeaderCell: __spreadProps(__spreadValues({}, l), { borderBottom: "0.5px solid #3498ff" }), firstFooterCell: __spreadProps(__spreadValues({}, l), { borderTop: "0.5px solid #3498ff" }) };
}
function $i(l, e) {
  return typeof l > "u" || l === null ? -1 : typeof e > "u" || e === null ? 1 : l === e ? 0 : l > e ? 1 : -1;
}
function eu(l, e) {
  return -$i(l, e);
}
function tu(l, e) {
  const t = e === "asc" ? $i : eu;
  return function(n, i) {
    return t(n[l], i[l]);
  };
}
function nu(l) {
  if (!l || !l.length)
    return;
  const e = l.map((t) => tu(t.key, t.order));
  return l.length === 1 ? e[0] : function(t, n) {
    for (let i = 0; i < e.length; i++) {
      const o = e[i](t, n);
      if (o !== 0)
        return o;
    }
    return 0;
  };
}
var Yl = 28;
var lu = 16;
function iu() {
  const l = document.querySelector('[class^="wx"][class$="theme"]');
  return l ? l.className.substr(3, l.className.length - 9) : "willow";
}
function Zt(l, e, t, n, i) {
  const o = document.createElement("div"), s = document.createElement("div"), r = document.body;
  i = i ? `${i}px` : "auto";
  let a, f;
  s.className = e, o.classList.add(`wx-${t}-theme`), o.style.cssText = `height:auto;position:absolute;top:0px;left:100px;overflow:hidden;width=${i};white-space:nowrap;`, o.appendChild(s), r.appendChild(o), typeof l != "object" && (l = [l]);
  for (let u = 0; u < l.length; u++) {
    s.innerText = l[u] + "";
    const c = o.getBoundingClientRect(), d = Math.ceil(c.width) + (n && n.length ? n[u] : 0), h = Math.ceil(c.height);
    a = Math.max(a || 0, d), f = Math.max(f || 0, h);
  }
  return o.remove(), { width: a, height: f };
}
function Gl(l, e, t, n, i) {
  const o = [];
  for (let s = 0; s < l.length; s++) {
    const r = l[s][e], a = r.length;
    for (let f = 0; f < a; f++) {
      const { text: u, vertical: c, collapsed: d, rowspan: h, css: m } = r[f];
      if (!u) {
        o[f] = Math.max(o[f] || 0, n);
        continue;
      }
      let _ = 0;
      if (c && !d) {
        let g = `wx-measure-cell-${e} wx-measure-vertical`;
        if (g += m ? ` ${m}` : "", _ = Zt(u, g, i).width, (h > 1 || !r[f + 1]) && t > f + 1) {
          const C = h || t - f, S = o.slice(f, f + C).reduce((D, p) => D + p, 0);
          if (S < _) {
            const D = Math.ceil((_ - S) / C);
            for (let p = f; p < f + C; p++)
              o[p] = (o[p] || n) + D;
          }
          continue;
        }
      }
      o[f] = Math.max(o[f] || n, _);
    }
  }
  return o;
}
function ou(l, e, t) {
  const n = [], i = [];
  let o = "wx-measure-cell-body";
  o += l.css ? ` ${l.css}` : "";
  for (let s = 0; s < e.length; s++) {
    const r = e[s], a = tt(r, l);
    a && (n.push(a), l.treetoggle && i.push(e[s].$level * Yl + (e[s].$count ? Yl : 0)));
  }
  return Zt(n, o, t, i).width;
}
function su(l, e) {
  const t = "wx-measure-cell-header", n = l.sort ? lu : 0;
  let i = l.header;
  if (typeof i == "string")
    return Zt(i, t, e).width + n;
  let o;
  Array.isArray(i) || (i = [i]);
  for (let s = 0; s < i.length; s++) {
    const r = i[s], a = typeof r == "string" ? r : r.text, f = t + (typeof r == "string" ? "" : ` ${r.css}`);
    let u = Zt(a, f, e).width;
    s === i.length - 1 && (u += n), o = Math.max(o || 0, u);
  }
  return o;
}
var Dn = false;
if (Dn = true, typeof window < "u") {
  const l = location.hostname, e = ["c3Zhci5kZXY=", "cmVhY3Qtd2lkZ2V0cy5jb20=", "c3ZlbHRlLXdpZGdldHMuY29t", "dnVlLXdpZGdldHMuY29t", "YW5ndWxhci13aWRnZXRzLmNvbQ=="];
  for (let t = 0; t < e.length; t++) {
    const n = window.atob(e[t]);
    if (n === l || l.endsWith("." + n)) {
      Dn = true;
      break;
    }
  }
}
var ru = class extends Uf {
  in;
  _router;
  _branches;
  _xlsxWorker;
  constructor(e) {
    super(e);
    const t = { rowHeight: 37, colWidth: 160, headerHeight: 36, footerHeight: 36 };
    this._router = new Kf(super.setState.bind(this), [{ in: ["columns", "sizes", "_skin"], out: ["_columns", "_sizes"], exec: (i) => {
      const { columns: o, sizes: s, _skin: r } = this.getState(), a = this.copyColumns(o), f = a.reduce((d, h) => Math.max(h.header.length, d), 0), u = a.reduce((d, h) => Math.max(h.footer.length, d), 0);
      a.forEach(this.setCollapsibleColumns);
      const c = this.normalizeSizes(a, s, f, u, r);
      a.forEach((d, h) => {
        this.normalizeColumns(a, h, "header", f, c), this.normalizeColumns(a, h, "footer", u, c);
      }), this.setState({ _columns: a, _sizes: c }, i);
    } }, { in: ["data", "tree"], out: ["flatData"], exec: (i) => {
      const { data: o, tree: s } = this.getState();
      this.setState({ flatData: s ? this.flattenRows(o) : o }, i);
    } }], { data: (i) => this._branches ? this.normalizeTreeRows(i) : this.normalizeRows(i), sizes: (i) => __spreadValues(__spreadValues({}, t), i) });
    const n = this.in = new Xf();
    n.on("close-editor", ({ ignore: i }) => {
      const { editor: o } = this.getState();
      o && (i || n.exec("update-cell", o), this.setState({ editor: null }));
    }), n.on("open-editor", ({ id: i, column: o }) => {
      let s = this.getState().editor;
      s && n.exec("close-editor", {});
      const r = o ? this.getColumn(o) : this.getNextEditor();
      if (r?.editor) {
        const a = this.getRow(i);
        s = { column: r.id, id: i, value: xi(a, r), renderedValue: tt(a, r) }, typeof r.editor != "string" && r.editor.config && (s.config = r.editor.config), r.options && (s.options = r.options), this.setState({ editor: s });
      }
    }), n.on("editor", ({ value: i }) => {
      const o = this.getState().editor;
      o && (o.value = i, this.setState({ editor: o }));
    }), n.on("add-row", (i) => {
      let { data: o } = this.getState();
      const { row: s, before: r, after: a } = i;
      if (i.id = s.id = i.id || s.id || bn(), r || a) {
        const f = r || a, u = o.findIndex((c) => c.id === f);
        o.splice(u + (a ? 1 : 0), 0, i.row), o = [...o];
      } else
        o = [...o, i.row];
      this.setState({ data: o }), n.exec("select-row", { id: s.id });
    }), n.on("delete-row", (i) => {
      const { data: o, selected: s, selectedRows: r } = this.getState(), { id: a } = i, f = { data: o.filter((u) => u.id !== a) };
      this.isSelected(a) && (f.selectedRows = r.filter((u) => u !== a), s == a && (f.selected = f.selectedRows[f.selectedRows.length - 1] || null)), this.setState(f);
    }), n.on("update-cell", (i) => {
      let { data: o } = this.getState();
      o = [...o];
      const { tree: s } = this.getState(), { id: r, column: a, value: f } = i, u = this.getColumn(a);
      if (s) {
        const c = __spreadValues({}, this._branches[r]);
        jl(c, u, f), this._branches[r] = c;
        const d = this._branches[c.$parent], h = d.data.findIndex((m) => m.id == r);
        c.$parent === 0 && (o = d.data), d.data = [...d.data], d.data[h] = c;
      } else {
        const c = o.findIndex((h) => h.id == r), d = __spreadValues({}, o[c]);
        jl(d, u, f), o[c] = d;
      }
      this.setState({ data: o });
    }), n.on("update-row", (i) => {
      let { data: o } = this.getState();
      const { id: s, row: r } = i, a = o.findIndex((f) => f.id == s);
      o = [...o], o[a] = __spreadValues(__spreadValues({}, o[a]), r), this.setState({ data: o });
    }), n.on("select-row", ({ id: i, toggle: o, range: s, mode: r, show: a, column: f }) => {
      let { selected: u, selectedRows: c } = this.getState();
      if (s) {
        const { data: d } = this.getState();
        u || (u = i);
        let h = d.findIndex((_) => _.id == u), m = d.findIndex((_) => _.id == i);
        h > m && ([h, m] = [m, h]), d.slice(h, m + 1).forEach((_) => {
          c.indexOf(_.id) === -1 && c.push(_.id);
        }), u = i;
      } else if (o && this.isSelected(i)) {
        if (r === true)
          return;
        c = c.filter((d) => d !== i), u = c[c.length - 1] || null;
      } else if (u = i, o) {
        if (r === false)
          return;
        c.push(i);
      } else
        c = [i];
      this.setState({ selected: u, selectedRows: c }), a && this.in.exec("scroll", { row: i, column: f });
    }), n.on("resize-column", (i) => {
      const { id: o, auto: s, maxRows: r } = i;
      let a = i.width || 0;
      const f = [...this.getState().columns], u = f.find((c) => c.id == o);
      if (s) {
        if (s == "data" || s === true) {
          const { flatData: c, _skin: d } = this.getState();
          let h = c.length;
          r && (h = Math.min(r, h));
          const m = c.slice(0, h);
          a = ou(u, m, d);
        }
        if (s == "header" || s === true) {
          const { _skin: c } = this.getState();
          a = Math.max(su(u, c), a);
        }
      }
      u.width = Math.max(17, a), delete u.flexgrow, this.setState({ columns: f });
    }), n.on("hide-column", ({ id: i, mode: o }) => {
      const s = [...this.getState().columns], r = s.find((f) => f.id == i), a = s.reduce((f, u) => f + (u.hidden ? 0 : 1), 0);
      (!o || a > 1) && (r.hidden = !r.hidden, this.setState({ columns: s }));
    }), n.on("sort-rows", (i) => {
      const o = { key: i.key, order: i.order || "asc" };
      let s = this.getState().sort;
      const { columns: r, data: a, tree: f } = this.getState();
      let u = s.length;
      s.forEach((d, h) => {
        d.key === o.key && (o.order = d.order === "asc" ? "desc" : "asc", u = h);
      }), r.forEach((d) => {
        d.$sort = null;
      }), i.add ? (s = [...s], s[u] = o) : s = [o], this.setState({ sort: s }), s.forEach((d, h) => {
        d.index = s.length === 1 ? 0 : h + 1, r.find((m) => m.id == d.key).$sort = d;
      }), this.setState({ columns: r });
      const c = nu(s);
      if (c) {
        const d = [...a];
        f ? this.sortTree(d, c) : d.sort(c), this.setState({ data: d });
      }
    }), n.on("filter-rows", (i) => {
      this.setState({ filter: i.handler });
    }), n.on("collapse-column", (i) => {
      const { id: o, row: s, mode: r } = i, a = [...this.getState().columns], f = this.getColumn(o).header, u = Array.isArray(f) ? f[s] : f;
      typeof u == "object" && (u.collapsed = r ?? !u.collapsed, this.setState({ columns: a }));
    }), n.on("open-row", (i) => {
      const { id: o, nested: s } = i, { data: r } = this.getState();
      this.toggleBranch(o, true, s), this.setState({ data: r });
    }), n.on("close-row", (i) => {
      const { id: o, nested: s } = i, { data: r } = this.getState();
      this.toggleBranch(o, false, s), this.setState({ data: r });
    }), n.on("export", (i) => new Promise((o, s) => {
      const r = i.options || {}, a = `${r.fileName || "data"}.${r.format}`;
      if (r.format == "csv") {
        const f = Zf(this.getState(), r);
        r.download !== false ? Wl(new Blob(["\uFEFF" + f], { type: "text/csv" }), a) : i.result = f, o(true);
      } else if (r.format == "xlsx") {
        const { cells: f, merged: u, rowSizes: c, colSizes: d } = xf(this.getState(), r), h = r.cdn || "https://cdn.dhtmlx.com/libs/json2excel/next/worker.js", m = this.getXlsxWorker(h), _ = r.styles || $f();
        m.then((g) => {
          g.onmessage = (C) => {
            if (C.data.type == "ready") {
              const S = C.data.blob;
              r.download !== false ? Wl(S, a) : i.result = S, o(true);
            }
          }, g.postMessage({ type: "convert", data: { data: [{ name: r.sheetName || "data", cells: f, cols: d, rows: c, merged: u }], styles: [__spreadValues({ id: "header" }, _.header), __spreadValues({ id: "lastHeaderCell" }, _.lastHeaderCell || _.header), __spreadValues({ id: "cell" }, _.cell), __spreadValues({ id: "firstFooterCell" }, _.firstFooterCell || _.footer), __spreadValues({ id: "footer" }, _.footer)] } });
        });
      } else
        s();
    })), n.on("hotkey", ({ key: i, event: o }) => {
      switch (i) {
        case "arrowup": {
          const { selected: s, editor: r, flatData: a } = this.getState();
          if (!r) {
            o.preventDefault();
            const f = s ? this.getPrevRow(s)?.id : a[a.length - 1]?.id;
            f && this.in.exec("select-row", { id: f, show: true });
          }
          break;
        }
        case "arrowdown": {
          const { selected: s, editor: r, flatData: a } = this.getState();
          if (!r) {
            o.preventDefault();
            const f = s ? this.getNextRow(s)?.id : a[0]?.id;
            f && this.in.exec("select-row", { id: f, show: true });
          }
          break;
        }
        case "tab": {
          const { editor: s } = this.getState();
          if (s) {
            o.preventDefault();
            const r = s.column;
            let a = s.id, f = this.getNextEditor(r);
            if (f)
              this.in.exec("select-row", { id: a, show: true, column: f.id });
            else {
              const u = this.getNextRow(a);
              u && (a = u.id, f = this.getNextEditor(), this.in.exec("select-row", { id: a, show: true, column: f.id }));
            }
            f && this.in.exec("open-editor", { id: a, column: f.id });
          }
          break;
        }
        case "shift+tab": {
          const { editor: s } = this.getState();
          if (s) {
            o.preventDefault();
            const r = s.column;
            let a = s.id, f = this.getPrevEditor(r);
            if (f)
              this.in.exec("select-row", { id: a, show: true, column: f.id });
            else {
              const u = this.getPrevRow(a);
              u && (a = u.id, f = this.getPrevEditor(), this.in.exec("select-row", { id: a, show: true, column: f.id }));
            }
            f && this.in.exec("open-editor", { id: a, column: f.id });
          }
          break;
        }
        case "escape": {
          const { editor: s } = this.getState();
          s && this.in.exec("close-editor", { ignore: true });
          break;
        }
        case "f2": {
          const { editor: s, selected: r } = this.getState();
          !s && r && this.in.exec("open-editor", { id: r });
          break;
        }
      }
    }), n.on("scroll", (i) => {
      const { _columns: o, split: s, _sizes: r, data: a } = this.getState();
      let f = -1, u = -1, c = 0;
      if (i.column) {
        f = 0;
        const d = o.findIndex((h) => h.id === i.column);
        c = o[d].width;
        for (let h = s.left; h < d; h++) {
          const m = o[h];
          m.hidden || (f += m.width);
        }
      }
      i.row && (u = r.rowHeight * a.findIndex((d) => d.id === i.row)), this.setState({ scroll: { top: u, left: f, width: c, height: r.rowHeight } });
    });
  }
  getXlsxWorker(e) {
    if (!this._xlsxWorker) {
      const t = window.URL.createObjectURL(new Blob([`importScripts('${e}');`], { type: "text/javascript" }));
      this._xlsxWorker = new Promise((n) => {
        const i = new Worker(t);
        i.addEventListener("message", (o) => {
          o.data.type === "init" && n(i);
        });
      });
    }
    return this._xlsxWorker;
  }
  init(e) {
    e.hasOwnProperty("_skin") && !e._skin && (e._skin = iu()), e.columns && e.columns.forEach((t) => {
      t.options && (t.optionsMap = new Map(t.options.map((n) => [n.id, n.name])));
    }), e.tree && (this._branches = { 0: { data: e.data } }), this._router.init(__spreadValues({ sort: [], filter: null, scroll: null }, e));
  }
  setState(e, t) {
    return this._router.setState(e, t);
  }
  getRow(e) {
    const { tree: t } = this.getState();
    return t ? this._branches[e] : this.getState().data.find((n) => n.id == e);
  }
  getNextRow(e) {
    const t = this.getState().flatData, n = t.findIndex((i) => i.id == e);
    return t[n + 1];
  }
  getPrevRow(e) {
    const t = this.getState().flatData, n = t.findIndex((i) => i.id == e);
    return t[n - 1];
  }
  getColumn(e) {
    return this.getState().columns.find((t) => t.id == e);
  }
  getNextEditor(e) {
    let t = this.getState().columns;
    if (e) {
      const n = t.findIndex((i) => i.id == e);
      t = t.slice(n + 1);
    }
    return t.find((n) => n.editor && !n.hidden);
  }
  getPrevEditor(e) {
    let t = this.getState().columns;
    if (e) {
      const n = t.findLastIndex((i) => i.id == e);
      t = t.slice(0, n);
    }
    return t.findLast((n) => n.editor && !n.hidden);
  }
  toggleBranch(e, t, n) {
    const i = this._branches[e];
    e !== 0 && (i.open = t), n && i.data?.length && i.data.forEach((o) => {
      this.toggleKids(o, t, n);
    });
  }
  toggleKids(e, t, n) {
    e.open = t, n && e.data?.length && e.data.forEach((i) => {
      this.toggleKids(i, t, n);
    });
  }
  isSelected(e) {
    return this.getState().selectedRows.indexOf(e) !== -1;
  }
  copyColumns(e) {
    const t = [];
    return e.forEach((n) => {
      const i = __spreadValues({}, n);
      this.copyHeaderFooter(i, "header"), this.copyHeaderFooter(i, "footer"), t.push(i);
    }), t;
  }
  copyHeaderFooter(e, t) {
    let n = e[t];
    n = Array.isArray(n) ? [...n] : [n], n.forEach((i, o) => {
      n[o] = typeof i == "string" ? { text: i } : __spreadValues({}, i);
    }), e[t] = n;
  }
  setCollapsibleColumns(e, t, n) {
    let i = e.header;
    for (let o = 0; o < i.length; o++) {
      const s = i[o];
      if (s.collapsible && s.collapsed) {
        if (s.collapsible !== "first") {
          e.collapsed = true, e.width = 36, s.vertical = true;
          const a = i.length - o;
          i = i.slice(0, o + 1), i[o].rowspan = a;
        }
        const r = s.colspan;
        if (r) {
          const a = i[o + 1];
          let f = 1;
          a && a.colspan && !a.collapsed && (f = a.colspan);
          for (let u = f; u < r; u++) {
            const c = n[t + u];
            c && (c.hidden = true);
          }
        }
      }
    }
  }
  normalizeColumns(e, t, n, i, o) {
    const s = e[t];
    s.width || (s.width = s.flexgrow ? 17 : o.colWidth), s.editor && typeof s.editor == "string" && (s.editor = { type: s.editor });
    const r = s[n], a = o[`${n}RowHeights`];
    for (let f = 0; f < i; f++) {
      const u = r[f];
      u.id = s.id, f === r.length - 1 && (u.rowspan = u.rowspan ? Math.min(u.rowspan, i - f) : i - f);
      for (let c = 1; c < u.rowspan; c++) {
        r.splice(f + c, 0, {});
        for (let d = 1; d < u.colspan; d++)
          e[t + d][n].splice(f + c, 0, {});
      }
      if (u.rowspan) {
        const c = (u.rowspan === i ? a : a.slice(f, u.rowspan + f)).reduce((d, h) => d + h, 0);
        u.height = c, f + u.rowspan != i && u.height--;
      }
      if (u.colspan) {
        let c = s.width, d = s.flexgrow || 0;
        const h = u.colspan;
        for (let m = 1; m < h; m++) {
          const _ = e[t + m];
          _ && (_.hidden ? u.colspan -= 1 : _.flexgrow ? d += _.flexgrow : c += _.width || o.colWidth), d ? u.flexgrow = d : u.width = c;
        }
      } else
        u.width = s.width, u.flexgrow = s.flexgrow;
    }
    r.length > i && (r.length = i), s[n] = r, Dn && Math.random() < 0.1 && r.length && typeof r[0] == "object" && r[0].text && (r[0].text = `[trial] ${r[0].text}`);
  }
  normalizeRows(e) {
    return e.forEach((t) => {
      t.id || (t.id = bn());
    }), e;
  }
  normalizeTreeRows(e, t, n) {
    return e.forEach((i) => {
      i.id || (i.id = bn()), i.$level = t || 0, i.$parent = n || 0, this._branches[i.id] = i, i.data?.length && (i.$count = i.data.length, this.normalizeTreeRows(i.data, i.$level + 1, i.id));
    }), e;
  }
  sortTree(e, t) {
    e.sort(t), e.forEach((n) => {
      n.data && this.sortTree(n.data, t);
    });
  }
  flattenRows(e, t) {
    const n = t || [];
    return e.forEach((i) => {
      n.push(i), i.data?.length && i.open !== false && this.flattenRows(i.data, n);
    }), n;
  }
  normalizeSizes(e, t, n, i, o) {
    const s = Gl(e, "header", n, t.headerHeight, o), r = Gl(e, "footer", i, t.footerHeight, o), a = s.reduce((u, c) => u + c, 0), f = r.reduce((u, c) => u + c, 0);
    return __spreadProps(__spreadValues({}, t), { headerRowHeights: s, footerRowHeights: r, headerHeight: a, footerHeight: f });
  }
};
var au = (/* @__PURE__ */ new Date()).valueOf();
function bn() {
  return "temp://" + au++;
}
function fu(l, { keys: e, exec: t }) {
  for (const i in e) {
    const o = i.toLowerCase().replace(/ /g, "");
    o !== i && (e[o] = e[i]);
  }
  function n(i) {
    let o = i.code.toLowerCase();
    o === " " && (o = "space");
    const s = `${i.ctrlKey || i.metaKey ? "ctrl+" : ""}${i.shiftKey ? "shift+" : ""}${i.altKey ? "alt+" : ""}${o}`, r = e[s];
    if (typeof r < "u") {
      const a = i.target.tagName === "INPUT" || i.target.tagName === "TEXTAREA";
      typeof r == "function" ? r({ key: s, event: i, node: l, isInput: a }) : r && t({ key: s, event: i, node: l, isInput: a });
    }
  }
  return l.addEventListener("keydown", n), { destroy: () => {
    l.removeEventListener("keydown", n);
  } };
}
function uu(l, e) {
  let t = null;
  e.scroll.subscribe((n) => {
    if (!n || n === t)
      return;
    t = n;
    const { left: i, top: o, height: s, width: r } = n, a = e.getHeight(), f = e.getWidth();
    if (o >= 0) {
      const u = l.scrollTop;
      o < u ? l.scrollTop = o : o + s > u + a && (l.scrollTop = o - a + s);
    }
    if (i >= 0) {
      const u = l.scrollLeft;
      i < u ? l.scrollLeft = i : i + r > u + f && (l.scrollLeft = i - f + r);
    }
  });
}
function cu(l, e) {
  const t = new ResizeObserver((n) => e(n[0].contentRect));
  return t.observe(l.parentNode), {
    destroy() {
      t.disconnect();
    }
  };
}
function on(l, e, t, n, i) {
  const o = l ? `width:${l}px;` : "", s = l ? `min-width:${l}px;` : "", r = e ? `flex-grow:${e};` : "", a = i ? `height:${i}px;` : "", f = t ? `position:sticky;left:${n}px;` : "";
  return `${s}${o}${a}${r}${f}`;
}
function eo(l, e, t) {
  let n = "";
  return n += l.fixed ? l.fixed === -1 ? "wx-shadow " : "wx-fixed " : "", n += e.rowspan > 1 ? "wx-rowspan " : "", n += e.colspan > 1 ? "wx-colspan " : "", n += e.vertical ? "wx-vertical " : "", n += t ? t(l) + " " : "", n;
}
function du(l) {
  let e;
  const t = (
    /*#slots*/
    l[7].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[6],
    null
  ), i = n || mu(l);
  return {
    c() {
      i && i.c();
    },
    m(o, s) {
      i && i.m(o, s), e = true;
    },
    p(o, s) {
      n ? n.p && (!e || s & /*$$scope*/
      64) && we(
        n,
        t,
        o,
        /*$$scope*/
        o[6],
        e ? be(
          t,
          /*$$scope*/
          o[6],
          s,
          null
        ) : ye(
          /*$$scope*/
          o[6]
        ),
        null
      ) : i && i.p && (!e || s & /*row, col*/
      3) && i.p(o, e ? s : -1);
    },
    i(o) {
      e || (w(i, o), e = true);
    },
    o(o) {
      k(i, o), e = false;
    },
    d(o) {
      i && i.d(o);
    }
  };
}
function hu(l) {
  let e, t, n, i, o, s = (
    /*row*/
    l[0].$count && Ul(l)
  );
  const r = (
    /*#slots*/
    l[7].default
  ), a = pe(
    r,
    l,
    /*$$scope*/
    l[6],
    null
  ), f = a || _u(l);
  return {
    c() {
      e = F("div"), t = F("span"), n = J(), s && s.c(), i = J(), f && f.c(), ue(
        t,
        "margin-left",
        /*row*/
        l[0].$level * 28 + "px"
      ), b(e, "class", "wx-tree-cell svelte-1wbpy33");
    },
    m(u, c) {
      O(u, e, c), I(e, t), I(e, n), s && s.m(e, null), I(e, i), f && f.m(e, null), o = true;
    },
    p(u, c) {
      (!o || c & /*row*/
      1) && ue(
        t,
        "margin-left",
        /*row*/
        u[0].$level * 28 + "px"
      ), /*row*/
      u[0].$count ? s ? s.p(u, c) : (s = Ul(u), s.c(), s.m(e, i)) : s && (s.d(1), s = null), a ? a.p && (!o || c & /*$$scope*/
      64) && we(
        a,
        r,
        u,
        /*$$scope*/
        u[6],
        o ? be(
          r,
          /*$$scope*/
          u[6],
          c,
          null
        ) : ye(
          /*$$scope*/
          u[6]
        ),
        null
      ) : f && f.p && (!o || c & /*row, col*/
      3) && f.p(u, o ? c : -1);
    },
    i(u) {
      o || (w(f, u), o = true);
    },
    o(u) {
      k(f, u), o = false;
    },
    d(u) {
      u && E(e), s && s.d(), f && f.d(u);
    }
  };
}
function mu(l) {
  let e = tt(
    /*row*/
    l[0],
    /*col*/
    l[1]
  ) + "", t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*row, col*/
      3 && e !== (e = tt(
        /*row*/
        n[0],
        /*col*/
        n[1]
      ) + "") && de(t, e);
    },
    d(n) {
      n && E(t);
    }
  };
}
function Ul(l) {
  let e, t;
  return {
    c() {
      e = F("i"), b(e, "data-action", "toggle-row"), b(e, "class", t = "wx-table-tree-toggle wxi-menu-" + /*row*/
      (l[0].open !== false ? "down" : "right") + " svelte-1wbpy33");
    },
    m(n, i) {
      O(n, e, i);
    },
    p(n, i) {
      i & /*row*/
      1 && t !== (t = "wx-table-tree-toggle wxi-menu-" + /*row*/
      (n[0].open !== false ? "down" : "right") + " svelte-1wbpy33") && b(e, "class", t);
    },
    d(n) {
      n && E(e);
    }
  };
}
function _u(l) {
  let e = tt(
    /*row*/
    l[0],
    /*col*/
    l[1]
  ) + "", t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*row, col*/
      3 && e !== (e = tt(
        /*row*/
        n[0],
        /*col*/
        n[1]
      ) + "") && de(t, e);
    },
    d(n) {
      n && E(t);
    }
  };
}
function gu(l) {
  let e, t, n, i, o, s, r;
  const a = [hu, du], f = [];
  function u(c, d) {
    return (
      /*col*/
      c[1].treetoggle ? 0 : 1
    );
  }
  return t = u(l), n = f[t] = a[t](l), {
    c() {
      e = F("div"), n.c(), b(e, "class", i = Pe(
        /*css*/
        l[3]
      ) + " svelte-1wbpy33"), b(
        e,
        "style",
        /*style*/
        l[2]
      ), b(e, "data-row-id", o = /*row*/
      l[0].id), b(e, "data-col-id", s = /*col*/
      l[1].id), se(
        e,
        "wx-shadow",
        /*col*/
        l[1].fixed === -1
      );
    },
    m(c, d) {
      O(c, e, d), f[t].m(e, null), r = true;
    },
    p(c, [d]) {
      let h = t;
      t = u(c), t === h ? f[t].p(c, d) : (Z(), k(f[h], 1, 1, () => {
        f[h] = null;
      }), x(), n = f[t], n ? n.p(c, d) : (n = f[t] = a[t](c), n.c()), w(n, 1), n.m(e, null)), (!r || d & /*css*/
      8 && i !== (i = Pe(
        /*css*/
        c[3]
      ) + " svelte-1wbpy33")) && b(e, "class", i), (!r || d & /*style*/
      4) && b(
        e,
        "style",
        /*style*/
        c[2]
      ), (!r || d & /*row*/
      1 && o !== (o = /*row*/
      c[0].id)) && b(e, "data-row-id", o), (!r || d & /*col*/
      2 && s !== (s = /*col*/
      c[1].id)) && b(e, "data-col-id", s), (!r || d & /*css, col*/
      10) && se(
        e,
        "wx-shadow",
        /*col*/
        c[1].fixed === -1
      );
    },
    i(c) {
      r || (w(n), r = true);
    },
    o(c) {
      k(n), r = false;
    },
    d(c) {
      c && E(e), f[t].d();
    }
  };
}
function pu(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { row: o } = e, { col: s } = e, { cellStyle: r = null } = e, { columnStyle: a = null } = e, f, u;
  function c(d, h) {
    let m = "wx-cell";
    return m += d ? " " + d(s) : "", m += h ? " " + h(o, s) : "", m;
  }
  return l.$$set = (d) => {
    "row" in d && t(0, o = d.row), "col" in d && t(1, s = d.col), "cellStyle" in d && t(4, r = d.cellStyle), "columnStyle" in d && t(5, a = d.columnStyle), "$$scope" in d && t(6, i = d.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*col*/
    2 && t(2, f = on(s.width, s.flexgrow, s.fixed, s.left)), l.$$.dirty & /*columnStyle, cellStyle*/
    48 && t(3, u = c(a, r));
  }, [o, s, f, u, r, a, i, n];
}
var bu = class extends te {
  constructor(e) {
    super(), ee(this, e, pu, gu, $, {
      row: 0,
      col: 1,
      cellStyle: 4,
      columnStyle: 5
    });
  }
};
function wu(l, e) {
  let t, n;
  function i(r) {
    t = r.clientX, l.style.opacity = 1, document.body.style.cursor = "ew-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", o), window.addEventListener("mouseup", s), e && e.down && e.down(l);
  }
  function o(r) {
    n = r.clientX - t, e && e.move && e.move(n);
  }
  function s() {
    l.style.opacity = "", document.body.style.cursor = "", document.body.style.userSelect = "", e && e.up && e.up(), window.removeEventListener("mousemove", o), window.removeEventListener("mouseup", s);
  }
  return l.addEventListener("mousedown", i), {
    destroy() {
      l.removeEventListener("mousedown", i);
    }
  };
}
function yu(l) {
  let e, t, n, i = (
    /*cell*/
    (l[0].text || "") + ""
  ), o, s, r, a, f = (
    /*cell*/
    l[0].collapsible && Kl(l)
  ), u = (
    /*column*/
    l[1].resize && /*lastRow*/
    l[2] && Xl(l)
  ), c = (
    /*column*/
    l[1].sort && Jl(l)
  );
  return {
    c() {
      e = F("div"), f && f.c(), t = J(), n = F("div"), o = ie(i), s = J(), u && u.c(), r = J(), c && c.c(), b(n, "class", "wx-text svelte-hek2za"), b(e, "class", a = "wx-cell " + /*css*/
      l[4] + " " + /*cell*/
      (l[0].css || "") + " svelte-hek2za"), b(
        e,
        "style",
        /*style*/
        l[3]
      );
    },
    m(d, h) {
      O(d, e, h), f && f.m(e, null), I(e, t), I(e, n), I(n, o), I(e, s), u && u.m(e, null), I(e, r), c && c.m(e, null);
    },
    p(d, h) {
      d[0].collapsible ? f ? f.p(d, h) : (f = Kl(d), f.c(), f.m(e, t)) : f && (f.d(1), f = null), h & /*cell*/
      1 && i !== (i = /*cell*/
      (d[0].text || "") + "") && de(o, i), /*column*/
      d[1].resize && /*lastRow*/
      d[2] ? u ? u.p(d, h) : (u = Xl(d), u.c(), u.m(e, r)) : u && (u.d(1), u = null), /*column*/
      d[1].sort ? c ? c.p(d, h) : (c = Jl(d), c.c(), c.m(e, null)) : c && (c.d(1), c = null), h & /*css, cell*/
      17 && a !== (a = "wx-cell " + /*css*/
      d[4] + " " + /*cell*/
      (d[0].css || "") + " svelte-hek2za") && b(e, "class", a), h & /*style*/
      8 && b(
        e,
        "style",
        /*style*/
        d[3]
      );
    },
    d(d) {
      d && E(e), f && f.d(), u && u.d(), c && c.d();
    }
  };
}
function ku(l) {
  let e, t, n = (
    /*cell*/
    (l[0].text || "") + ""
  ), i, o, s, r;
  return {
    c() {
      e = F("div"), t = F("div"), i = ie(n), b(t, "class", "wx-text svelte-hek2za"), b(e, "class", o = "wx-cell " + /*css*/
      l[4] + " " + /*cell*/
      (l[0].css || "") + " wx-collapsed svelte-hek2za"), b(
        e,
        "style",
        /*style*/
        l[3]
      );
    },
    m(a, f) {
      O(a, e, f), I(e, t), I(t, i), s || (r = Q(e, "click", $t(
        /*collapse*/
        l[8]
      )), s = true);
    },
    p(a, f) {
      f & /*cell*/
      1 && n !== (n = /*cell*/
      (a[0].text || "") + "") && de(i, n), f & /*css, cell*/
      17 && o !== (o = "wx-cell " + /*css*/
      a[4] + " " + /*cell*/
      (a[0].css || "") + " wx-collapsed svelte-hek2za") && b(e, "class", o), f & /*style*/
      8 && b(
        e,
        "style",
        /*style*/
        a[3]
      );
    },
    d(a) {
      a && E(e), s = false, r();
    }
  };
}
function Kl(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = F("div"), t = F("i"), b(t, "class", n = "wxi-angle-" + /*cell*/
      (l[0].collapsed ? "down" : "right")), b(e, "class", "wx-collapse svelte-hek2za");
    },
    m(s, r) {
      O(s, e, r), I(e, t), i || (o = Q(e, "click", $t(
        /*collapse*/
        l[8]
      )), i = true);
    },
    p(s, r) {
      r & /*cell*/
      1 && n !== (n = "wxi-angle-" + /*cell*/
      (s[0].collapsed ? "down" : "right")) && b(t, "class", n);
    },
    d(s) {
      s && E(e), i = false, o();
    }
  };
}
function Xl(l) {
  let e, t, n;
  return {
    c() {
      e = F("div"), b(e, "class", "wx-grip svelte-hek2za");
    },
    m(i, o) {
      O(i, e, o), t || (n = ze(wu.call(null, e, {
        down: (
          /*down*/
          l[5]
        ),
        move: (
          /*move*/
          l[6]
        )
      })), t = true);
    },
    p: K,
    d(i) {
      i && E(e), t = false, n();
    }
  };
}
function Jl(l) {
  let e, t, n, i = (
    /*column*/
    l[1].$sort && /*lastRow*/
    l[2] && Ql(l)
  );
  return {
    c() {
      e = F("div"), i && i.c(), b(e, "class", "wx-sort svelte-hek2za");
    },
    m(o, s) {
      O(o, e, s), i && i.m(e, null), t || (n = Q(
        e,
        "click",
        /*sort*/
        l[7]
      ), t = true);
    },
    p(o, s) {
      o[1].$sort && /*lastRow*/
      o[2] ? i ? i.p(o, s) : (i = Ql(o), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    d(o) {
      o && E(e), i && i.d(), t = false, n();
    }
  };
}
function Ql(l) {
  let e, t, n, i = (
    /*column*/
    l[1].$sort.index > 0 && Zl(l)
  );
  return {
    c() {
      i && i.c(), e = J(), t = F("i"), b(t, "class", n = "wxi-arrow-" + /*column*/
      (l[1].$sort.order === "asc" ? "up" : "down"));
    },
    m(o, s) {
      i && i.m(o, s), O(o, e, s), O(o, t, s);
    },
    p(o, s) {
      o[1].$sort.index > 0 ? i ? i.p(o, s) : (i = Zl(o), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), s & /*column*/
      2 && n !== (n = "wxi-arrow-" + /*column*/
      (o[1].$sort.order === "asc" ? "up" : "down")) && b(t, "class", n);
    },
    d(o) {
      o && (E(e), E(t)), i && i.d(o);
    }
  };
}
function Zl(l) {
  let e, t = (
    /*column*/
    l[1].$sort.index + ""
  ), n;
  return {
    c() {
      e = F("div"), n = ie(t), b(e, "class", "wx-order svelte-hek2za");
    },
    m(i, o) {
      O(i, e, o), I(e, n);
    },
    p(i, o) {
      o & /*column*/
      2 && t !== (t = /*column*/
      i[1].$sort.index + "") && de(n, t);
    },
    d(i) {
      i && E(e);
    }
  };
}
function vu(l) {
  let e;
  function t(o, s) {
    return (
      /*cell*/
      o[0].collapsed && /*column*/
      o[1].collapsed ? ku : yu
    );
  }
  let n = t(l), i = n(l);
  return {
    c() {
      i.c(), e = he();
    },
    m(o, s) {
      i.m(o, s), O(o, e, s);
    },
    p(o, [s]) {
      n === (n = t(o)) && i ? i.p(o, s) : (i.d(1), i = n(o), i && (i.c(), i.m(e.parentNode, e)));
    },
    i: K,
    o: K,
    d(o) {
      o && E(e), i.d(o);
    }
  };
}
function Su(l, e, t) {
  let { cell: n } = e, { column: i } = e, { row: o } = e, { lastRow: s } = e, { columnStyle: r } = e;
  const a = He();
  let f;
  function u(g) {
    f = n.flexgrow ? g.parentNode.clientWidth : n.width;
  }
  function c(g) {
    a("action", {
      action: "resize-column",
      data: {
        id: n.id,
        width: Math.max(1, f + g)
      }
    });
  }
  function d(g) {
    a("action", {
      action: "sort-rows",
      data: { key: n.id, add: g.ctrlKey }
    });
  }
  function h() {
    a("action", {
      action: "collapse-column",
      data: { id: n.id, row: o }
    });
  }
  let m, _ = "";
  return l.$$set = (g) => {
    "cell" in g && t(0, n = g.cell), "column" in g && t(1, i = g.column), "row" in g && t(9, o = g.row), "lastRow" in g && t(2, s = g.lastRow), "columnStyle" in g && t(10, r = g.columnStyle);
  }, l.$$.update = () => {
    l.$$.dirty & /*cell, column*/
    3 && t(3, m = on(n.width, n.flexgrow, i.fixed, i.left, n.height)), l.$$.dirty & /*column, cell, columnStyle*/
    1027 && t(4, _ = eo(i, n, r));
  }, [
    n,
    i,
    s,
    m,
    _,
    u,
    c,
    d,
    h,
    o,
    r
  ];
}
var Cu = class extends te {
  constructor(e) {
    super(), ee(this, e, Su, vu, $, {
      cell: 0,
      column: 1,
      row: 9,
      lastRow: 2,
      columnStyle: 10
    });
  }
};
function xl(l) {
  let e, t = (
    /*cell*/
    (l[0].text || "") + ""
  ), n;
  return {
    c() {
      e = F("div"), n = ie(t), b(e, "class", "wx-text svelte-1pgtgrd");
    },
    m(i, o) {
      O(i, e, o), I(e, n);
    },
    p(i, o) {
      o & /*cell*/
      1 && t !== (t = /*cell*/
      (i[0].text || "") + "") && de(n, t);
    },
    d(i) {
      i && E(e);
    }
  };
}
function Mu(l) {
  let e, t, n = !/*column*/
  l[1].collapsed && !/*cell*/
  l[0].collapsed && xl(l);
  return {
    c() {
      e = F("div"), n && n.c(), b(e, "class", t = "wx-cell " + /*css*/
      l[3] + " " + /*cell*/
      (l[0].css || "") + " svelte-1pgtgrd"), b(
        e,
        "style",
        /*style*/
        l[2]
      );
    },
    m(i, o) {
      O(i, e, o), n && n.m(e, null);
    },
    p(i, [o]) {
      !/*column*/
      i[1].collapsed && !/*cell*/
      i[0].collapsed ? n ? n.p(i, o) : (n = xl(i), n.c(), n.m(e, null)) : n && (n.d(1), n = null), o & /*css, cell*/
      9 && t !== (t = "wx-cell " + /*css*/
      i[3] + " " + /*cell*/
      (i[0].css || "") + " svelte-1pgtgrd") && b(e, "class", t), o & /*style*/
      4 && b(
        e,
        "style",
        /*style*/
        i[2]
      );
    },
    i: K,
    o: K,
    d(i) {
      i && E(e), n && n.d();
    }
  };
}
function Ru(l, e, t) {
  let { cell: n } = e, { column: i } = e, { columnStyle: o } = e, s, r = "";
  return l.$$set = (a) => {
    "cell" in a && t(0, n = a.cell), "column" in a && t(1, i = a.column), "columnStyle" in a && t(4, o = a.columnStyle);
  }, l.$$.update = () => {
    l.$$.dirty & /*cell, column*/
    3 && t(2, s = on(n.width, n.flexgrow, i.fixed, i.left, n.height)), l.$$.dirty & /*column, cell, columnStyle*/
    19 && t(3, r = eo(i, n, o));
  }, [n, i, s, r, o];
}
var Du = class extends te {
  constructor(e) {
    super(), ee(this, e, Ru, Mu, $, { cell: 0, column: 1, columnStyle: 4 });
  }
};
function $l(l, e, t) {
  const n = l.slice();
  return n[10] = e[t], n[12] = t, n;
}
function ei(l, e, t) {
  const n = l.slice();
  return n[13] = e[t], n;
}
function Eu(l) {
  let e, t;
  return e = new Du({
    props: {
      cell: (
        /*cell*/
        l[13]
      ),
      columnStyle: (
        /*columnStyle*/
        l[4]
      ),
      column: (
        /*getColumn*/
        l[6](
          /*cell*/
          l[13].id
        )
      )
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*renderedHeader*/
      32 && (o.cell = /*cell*/
      n[13]), i & /*columnStyle*/
      16 && (o.columnStyle = /*columnStyle*/
      n[4]), i & /*renderedHeader*/
      32 && (o.column = /*getColumn*/
      n[6](
        /*cell*/
        n[13].id
      )), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Ou(l) {
  let e, t;
  return e = new Cu({
    props: {
      cell: (
        /*cell*/
        l[13]
      ),
      columnStyle: (
        /*columnStyle*/
        l[4]
      ),
      column: (
        /*getColumn*/
        l[6](
          /*cell*/
          l[13].id
        )
      ),
      row: (
        /*i*/
        l[12]
      ),
      lastRow: (
        /*isLast*/
        l[7](
          /*cell*/
          l[13],
          /*i*/
          l[12]
        )
      )
    }
  }), e.$on(
    "action",
    /*action_handler*/
    l[9]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*renderedHeader*/
      32 && (o.cell = /*cell*/
      n[13]), i & /*columnStyle*/
      16 && (o.columnStyle = /*columnStyle*/
      n[4]), i & /*renderedHeader*/
      32 && (o.column = /*getColumn*/
      n[6](
        /*cell*/
        n[13].id
      )), i & /*renderedHeader*/
      32 && (o.lastRow = /*isLast*/
      n[7](
        /*cell*/
        n[13],
        /*i*/
        n[12]
      )), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function ti(l, e) {
  let t, n, i, o, s;
  const r = [Ou, Eu], a = [];
  function f(u, c) {
    return (
      /*type*/
      u[3] === "header" ? 0 : 1
    );
  }
  return n = f(e), i = a[n] = r[n](e), {
    key: l,
    first: null,
    c() {
      t = he(), i.c(), o = he(), this.first = t;
    },
    m(u, c) {
      O(u, t, c), a[n].m(u, c), O(u, o, c), s = true;
    },
    p(u, c) {
      e = u;
      let d = n;
      n = f(e), n === d ? a[n].p(e, c) : (Z(), k(a[d], 1, 1, () => {
        a[d] = null;
      }), x(), i = a[n], i ? i.p(e, c) : (i = a[n] = r[n](e), i.c()), w(i, 1), i.m(o.parentNode, o));
    },
    i(u) {
      s || (w(i), s = true);
    },
    o(u) {
      k(i), s = false;
    },
    d(u) {
      u && (E(t), E(o)), a[n].d(u);
    }
  };
}
function ni(l) {
  let e, t = [], n = /* @__PURE__ */ new Map(), i, o, s, r = ke(
    /*row*/
    l[10]
  );
  const a = (f) => (
    /*cell*/
    f[13].id
  );
  for (let f = 0; f < r.length; f += 1) {
    let u = ei(l, r, f), c = a(u);
    n.set(c, t[f] = ti(c, u));
  }
  return {
    c() {
      e = F("div");
      for (let f = 0; f < t.length; f += 1)
        t[f].c();
      i = J(), b(e, "class", o = Pe(
        /*type*/
        l[3] === "header" ? "wx-h-row" : "wx-f-row"
      ) + " svelte-1byhgan"), ue(
        e,
        "height",
        /*rowHeights*/
        l[2][
          /*i*/
          l[12]
        ] + "px"
      ), ue(e, "display", "flex");
    },
    m(f, u) {
      O(f, e, u);
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(e, null);
      I(e, i), s = true;
    },
    p(f, u) {
      u & /*renderedHeader, columnStyle, getColumn, isLast, type*/
      248 && (r = ke(
        /*row*/
        f[10]
      ), Z(), t = it(t, u, a, 1, f, r, n, e, gt, ti, i, ei), x()), (!s || u & /*type*/
      8 && o !== (o = Pe(
        /*type*/
        f[3] === "header" ? "wx-h-row" : "wx-f-row"
      ) + " svelte-1byhgan")) && b(e, "class", o), (!s || u & /*rowHeights*/
      4) && ue(
        e,
        "height",
        /*rowHeights*/
        f[2][
          /*i*/
          f[12]
        ] + "px"
      );
    },
    i(f) {
      if (!s) {
        for (let u = 0; u < r.length; u += 1)
          w(t[u]);
        s = true;
      }
    },
    o(f) {
      for (let u = 0; u < t.length; u += 1)
        k(t[u]);
      s = false;
    },
    d(f) {
      f && E(e);
      for (let u = 0; u < t.length; u += 1)
        t[u].d();
    }
  };
}
function Au(l) {
  let e, t, n, i = ke(
    /*renderedHeader*/
    l[5]
  ), o = [];
  for (let r = 0; r < i.length; r += 1)
    o[r] = ni($l(l, i, r));
  const s = (r) => k(o[r], 1, 1, () => {
    o[r] = null;
  });
  return {
    c() {
      e = F("div");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
      b(e, "class", t = Pe(`wx-${/*type*/
      l[3]}`) + " svelte-1byhgan"), ue(
        e,
        "padding-left",
        /*deltaLeft*/
        l[0] + "px"
      ), ue(
        e,
        "width",
        /*contentWidth*/
        l[1] + "px"
      );
    },
    m(r, a) {
      O(r, e, a);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(e, null);
      n = true;
    },
    p(r, [a]) {
      if (a & /*type, rowHeights, renderedHeader, columnStyle, getColumn, isLast*/
      252) {
        i = ke(
          /*renderedHeader*/
          r[5]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const u = $l(r, i, f);
          o[f] ? (o[f].p(u, a), w(o[f], 1)) : (o[f] = ni(u), o[f].c(), w(o[f], 1), o[f].m(e, null));
        }
        for (Z(), f = i.length; f < o.length; f += 1)
          s(f);
        x();
      }
      (!n || a & /*type*/
      8 && t !== (t = Pe(`wx-${/*type*/
      r[3]}`) + " svelte-1byhgan")) && b(e, "class", t), (!n || a & /*deltaLeft*/
      1) && ue(
        e,
        "padding-left",
        /*deltaLeft*/
        r[0] + "px"
      ), (!n || a & /*contentWidth*/
      2) && ue(
        e,
        "width",
        /*contentWidth*/
        r[1] + "px"
      );
    },
    i(r) {
      if (!n) {
        for (let a = 0; a < i.length; a += 1)
          w(o[a]);
        n = true;
      }
    },
    o(r) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        k(o[a]);
      n = false;
    },
    d(r) {
      r && E(e), Nt(o, r);
    }
  };
}
function Hu(l, e, t) {
  let { deltaLeft: n } = e, { contentWidth: i } = e, { rowHeights: o } = e, { columns: s } = e, { type: r = "header" } = e, { columnStyle: a } = e, f = [];
  function u(h) {
    return s.find((m) => m.id === h);
  }
  function c(h, m) {
    return h.rowspan && (m += h.rowspan - 1), m === f.length - 1;
  }
  function d(h) {
    Ne.call(this, l, h);
  }
  return l.$$set = (h) => {
    "deltaLeft" in h && t(0, n = h.deltaLeft), "contentWidth" in h && t(1, i = h.contentWidth), "rowHeights" in h && t(2, o = h.rowHeights), "columns" in h && t(8, s = h.columns), "type" in h && t(3, r = h.type), "columnStyle" in h && t(4, a = h.columnStyle);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*columns, type, renderedHeader*/
    296 && s.length) {
      const h = s[0][r].length;
      t(5, f = []);
      for (let m = 0; m < h; m++) {
        let _ = 0;
        f.push([]), s.forEach((g) => {
          _ || f[m].push(g[r][m]), g[r][m].colspan > 1 ? _ = g[r][m].colspan - 1 : _ && _--;
        });
      }
    }
  }, [
    n,
    i,
    o,
    r,
    a,
    f,
    u,
    c,
    s,
    d
  ];
}
var to = class extends te {
  constructor(e) {
    super(), ee(this, e, Hu, Au, $, {
      deltaLeft: 0,
      contentWidth: 1,
      rowHeights: 2,
      columns: 8,
      type: 3,
      columnStyle: 4
    });
  }
};
function Nu(l) {
  let e;
  return {
    c() {
      e = ie(
        /*overlay*/
        l[0]
      );
    },
    m(t, n) {
      O(t, e, n);
    },
    p(t, n) {
      n & /*overlay*/
      1 && de(
        e,
        /*overlay*/
        t[0]
      );
    },
    i: K,
    o: K,
    d(t) {
      t && E(e);
    }
  };
}
function Fu(l) {
  let e, t, n;
  var i = (
    /*overlay*/
    l[0]
  );
  function o(s, r) {
    return {};
  }
  return i && (e = Le(i, o()), e.$on(
    "action",
    /*action_handler*/
    l[1]
  )), {
    c() {
      e && V(e.$$.fragment), t = he();
    },
    m(s, r) {
      e && W(e, s, r), O(s, t, r), n = true;
    },
    p(s, r) {
      if (r & /*overlay*/
      1 && i !== (i = /*overlay*/
      s[0])) {
        if (e) {
          Z();
          const a = e;
          k(a.$$.fragment, 1, 0, () => {
            B(a, 1);
          }), x();
        }
        i ? (e = Le(i, o()), e.$on(
          "action",
          /*action_handler*/
          s[1]
        ), V(e.$$.fragment), w(e.$$.fragment, 1), W(e, t.parentNode, t)) : e = null;
      }
    },
    i(s) {
      n || (e && w(e.$$.fragment, s), n = true);
    },
    o(s) {
      e && k(e.$$.fragment, s), n = false;
    },
    d(s) {
      s && E(t), e && B(e, s);
    }
  };
}
function Tu(l) {
  let e, t, n, i, o;
  const s = [Fu, Nu], r = [];
  function a(f, u) {
    return u & /*overlay*/
    1 && (t = null), t == null && (t = !!Lu(
      /*overlay*/
      f[0]
    )), t ? 0 : 1;
  }
  return n = a(l, -1), i = r[n] = s[n](l), {
    c() {
      e = F("div"), i.c(), b(e, "class", "wx-overlay svelte-zjaxrx");
    },
    m(f, u) {
      O(f, e, u), r[n].m(e, null), o = true;
    },
    p(f, [u]) {
      let c = n;
      n = a(f, u), n === c ? r[n].p(f, u) : (Z(), k(r[c], 1, 1, () => {
        r[c] = null;
      }), x(), i = r[n], i ? i.p(f, u) : (i = r[n] = s[n](f), i.c()), w(i, 1), i.m(e, null));
    },
    i(f) {
      o || (w(i), o = true);
    },
    o(f) {
      k(i), o = false;
    },
    d(f) {
      f && E(e), r[n].d();
    }
  };
}
function Lu(l) {
  return typeof l == "function";
}
function zu(l, e, t) {
  let { overlay: n } = e;
  function i(o) {
    Ne.call(this, l, o);
  }
  return l.$$set = (o) => {
    "overlay" in o && t(0, n = o.overlay);
  }, [n, i];
}
var Iu = class extends te {
  constructor(e) {
    super(), ee(this, e, zu, Tu, $, { overlay: 0 });
  }
};
function qu(l) {
  let e, t, n;
  return {
    c() {
      e = F("input"), b(e, "class", "wx-text svelte-1a713m7"), b(e, "type", "text"), e.value = /*value*/
      l[0];
    },
    m(i, o) {
      O(i, e, o), l[6](e), t || (n = [
        Q(
          e,
          "input",
          /*updateValue*/
          l[2]
        ),
        Q(
          e,
          "keydown",
          /*closeAndSave*/
          l[3]
        )
      ], t = true);
    },
    p(i, [o]) {
      o & /*value*/
      1 && e.value !== /*value*/
      i[0] && (e.value = /*value*/
      i[0]);
    },
    i: K,
    o: K,
    d(i) {
      i && E(e), l[6](null), t = false, Ae(n);
    }
  };
}
function Pu(l, e, t) {
  let { actions: n } = e, { editor: i } = e, o = "";
  const s = (c) => t(0, o = c.value);
  let r;
  Je(() => r.focus());
  function a() {
    t(0, o = r.value), n.updateValue(r.value);
  }
  function f({ key: c }) {
    c === "Enter" && n.save();
  }
  function u(c) {
    ge[c ? "unshift" : "push"](() => {
      r = c, t(1, r);
    });
  }
  return l.$$set = (c) => {
    "actions" in c && t(4, n = c.actions), "editor" in c && t(5, i = c.editor);
  }, l.$$.update = () => {
    l.$$.dirty & /*editor*/
    32 && s(i);
  }, [o, r, a, f, n, i, u];
}
var ju = class extends te {
  constructor(e) {
    super(), ee(this, e, Pu, qu, $, { actions: 4, editor: 5 });
  }
};
var Wu = (l) => ({ option: l & /*option*/
131072 });
var li = (l) => ({ option: (
  /*option*/
  l[17]
) });
function Bu(l) {
  let e = (
    /*option*/
    l[17].name + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*option*/
      131072 && e !== (e = /*option*/
      n[17].name + "") && de(t, e);
    },
    d(n) {
      n && E(t);
    }
  };
}
function Vu(l) {
  let e = (
    /*template*/
    l[0](
      /*option*/
      l[17]
    ) + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*template, option*/
      131073 && e !== (e = /*template*/
      n[0](
        /*option*/
        n[17]
      ) + "") && de(t, e);
    },
    d(n) {
      n && E(t);
    }
  };
}
function Yu(l) {
  let e;
  function t(o, s) {
    return (
      /*template*/
      o[0] ? Vu : Bu
    );
  }
  let n = t(l), i = n(l);
  return {
    c() {
      i.c(), e = he();
    },
    m(o, s) {
      i.m(o, s), O(o, e, s);
    },
    p(o, s) {
      n === (n = t(o)) && i ? i.p(o, s) : (i.d(1), i = n(o), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(o) {
      o && E(e), i.d(o);
    }
  };
}
function Gu(l) {
  let e;
  const t = (
    /*#slots*/
    l[11].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[15],
    li
  ), i = n || Yu(l);
  return {
    c() {
      i && i.c();
    },
    m(o, s) {
      i && i.m(o, s), e = true;
    },
    p(o, s) {
      n ? n.p && (!e || s & /*$$scope, option*/
      163840) && we(
        n,
        t,
        o,
        /*$$scope*/
        o[15],
        e ? be(
          t,
          /*$$scope*/
          o[15],
          s,
          Wu
        ) : ye(
          /*$$scope*/
          o[15]
        ),
        li
      ) : i && i.p && (!e || s & /*template, option*/
      131073) && i.p(o, e ? s : -1);
    },
    i(o) {
      e || (w(i, o), e = true);
    },
    o(o) {
      k(i, o), e = false;
    },
    d(o) {
      i && i.d(o);
    }
  };
}
function Uu(l) {
  let e, t, n, i, o, s;
  return n = new nn({
    props: {
      items: (
        /*filterOptions*/
        l[2]
      ),
      $$slots: {
        default: [
          Gu,
          ({ option: r }) => ({ 17: r }),
          ({ option: r }) => r ? 131072 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), n.$on(
    "ready",
    /*ready*/
    l[6]
  ), n.$on(
    "select",
    /*updateValue*/
    l[5]
  ), {
    c() {
      e = F("input"), t = J(), V(n.$$.fragment), b(e, "class", "wx-input svelte-1s4pc76");
    },
    m(r, a) {
      O(r, e, a), l[12](e), Ue(
        e,
        /*text*/
        l[1]
      ), O(r, t, a), W(n, r, a), i = true, o || (s = [
        Q(
          e,
          "input",
          /*input_1_input_handler*/
          l[13]
        ),
        Q(
          e,
          "input",
          /*input*/
          l[7]
        ),
        Q(
          e,
          "keydown",
          /*keydown_handler*/
          l[14]
        )
      ], o = true);
    },
    p(r, [a]) {
      a & /*text*/
      2 && e.value !== /*text*/
      r[1] && Ue(
        e,
        /*text*/
        r[1]
      );
      const f = {};
      a & /*filterOptions*/
      4 && (f.items = /*filterOptions*/
      r[2]), a & /*$$scope, template, option*/
      163841 && (f.$$scope = { dirty: a, ctx: r }), n.$set(f);
    },
    i(r) {
      i || (w(n.$$.fragment, r), i = true);
    },
    o(r) {
      k(n.$$.fragment, r), i = false;
    },
    d(r) {
      r && (E(e), E(t)), l[12](null), B(n, r), o = false, Ae(s);
    }
  };
}
function Ku(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { actions: o } = e, { editor: s } = e, r;
  s.config && s.config.template && (r = s.config.template);
  let a = s.renderedValue, f = s.options;
  function u({ detail: p }) {
    const y = p.id;
    o.updateValue(y), o.save();
  }
  let c, d;
  function h(p) {
    c = p.detail.navigate, t(3, d = p.detail.keydown), c(g());
  }
  function m() {
    t(2, f = a ? s.options.filter((p) => p.name.toLowerCase().includes(a.toLowerCase())) : s.options), f.length ? c(-1 / 0) : c(null);
  }
  let _;
  Je(() => {
    _.focus();
  });
  const g = () => f.findIndex((p) => p.id === s.value);
  function C(p) {
    ge[p ? "unshift" : "push"](() => {
      _ = p, t(4, _);
    });
  }
  function S() {
    a = this.value, t(1, a);
  }
  const D = (p) => d(p, g());
  return l.$$set = (p) => {
    "actions" in p && t(9, o = p.actions), "editor" in p && t(10, s = p.editor), "$$scope" in p && t(15, i = p.$$scope);
  }, [
    r,
    a,
    f,
    d,
    _,
    u,
    h,
    m,
    g,
    o,
    s,
    n,
    C,
    S,
    D,
    i
  ];
}
var Xu = class extends te {
  constructor(e) {
    super(), ee(this, e, Ku, Uu, $, { actions: 9, editor: 10 });
  }
};
function Ju(l) {
  let e, t = (
    /*editor*/
    l[1].renderedValue + ""
  ), n;
  return {
    c() {
      e = F("span"), n = ie(t), b(e, "class", "wx-text svelte-1eq9nh5");
    },
    m(i, o) {
      O(i, e, o), I(e, n);
    },
    p(i, o) {
      o & /*editor*/
      2 && t !== (t = /*editor*/
      i[1].renderedValue + "") && de(n, t);
    },
    i: K,
    o: K,
    d(i) {
      i && E(e);
    }
  };
}
function Qu(l) {
  let e, t, n;
  var i = (
    /*cell*/
    l[4]
  );
  function o(s, r) {
    return { props: { data: (
      /*value*/
      s[2]
    ) } };
  }
  return i && (e = Le(i, o(l)), e.$on(
    "action",
    /*action_handler*/
    l[6]
  )), {
    c() {
      e && V(e.$$.fragment), t = he();
    },
    m(s, r) {
      e && W(e, s, r), O(s, t, r), n = true;
    },
    p(s, r) {
      if (r & /*cell*/
      16 && i !== (i = /*cell*/
      s[4])) {
        if (e) {
          Z();
          const a = e;
          k(a.$$.fragment, 1, 0, () => {
            B(a, 1);
          }), x();
        }
        i ? (e = Le(i, o(s)), e.$on(
          "action",
          /*action_handler*/
          s[6]
        ), V(e.$$.fragment), w(e.$$.fragment, 1), W(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const a = {};
        r & /*value*/
        4 && (a.data = /*value*/
        s[2]), e.$set(a);
      }
    },
    i(s) {
      n || (e && w(e.$$.fragment, s), n = true);
    },
    o(s) {
      e && k(e.$$.fragment, s), n = false;
    },
    d(s) {
      s && E(t), e && B(e, s);
    }
  };
}
function Zu(l) {
  let e = (
    /*template*/
    l[3](
      /*value*/
      l[2]
    ) + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*template, value*/
      12 && e !== (e = /*template*/
      n[3](
        /*value*/
        n[2]
      ) + "") && de(t, e);
    },
    i: K,
    o: K,
    d(n) {
      n && E(t);
    }
  };
}
function xu(l) {
  let e, t, n;
  function i(s) {
    l[7](s);
  }
  let o = {};
  return (
    /*value*/
    l[2] !== void 0 && (o.value = /*value*/
    l[2]), e = new Ui({ props: o }), ge.push(() => et(e, "value", i)), e.$on(
      "change",
      /*updateValue*/
      l[5]
    ), {
      c() {
        V(e.$$.fragment);
      },
      m(s, r) {
        W(e, s, r), n = true;
      },
      p(s, r) {
        const a = {};
        !t && r & /*value*/
        4 && (t = true, a.value = /*value*/
        s[2], $e(() => t = false)), e.$set(a);
      },
      i(s) {
        n || (w(e.$$.fragment, s), n = true);
      },
      o(s) {
        k(e.$$.fragment, s), n = false;
      },
      d(s) {
        B(e, s);
      }
    }
  );
}
function $u(l) {
  let e, t, n, i, o, s, r, a;
  const f = [Zu, Qu, Ju], u = [];
  function c(d, h) {
    return (
      /*template*/
      d[3] ? 0 : (
        /*cell*/
        d[4] ? 1 : 2
      )
    );
  }
  return t = c(l), n = u[t] = f[t](l), o = new tn({
    props: {
      width: "auto",
      $$slots: { default: [xu] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = F("div"), n.c(), i = J(), V(o.$$.fragment), b(e, "class", "wx-value svelte-1eq9nh5");
    },
    m(d, h) {
      O(d, e, h), u[t].m(e, null), O(d, i, h), W(o, d, h), s = true, r || (a = Q(e, "click", function() {
        Ye(
          /*actions*/
          l[0].cancel()
        ) && l[0].cancel().apply(this, arguments);
      }), r = true);
    },
    p(d, [h]) {
      l = d;
      let m = t;
      t = c(l), t === m ? u[t].p(l, h) : (Z(), k(u[m], 1, 1, () => {
        u[m] = null;
      }), x(), n = u[t], n ? n.p(l, h) : (n = u[t] = f[t](l), n.c()), w(n, 1), n.m(e, null));
      const _ = {};
      h & /*$$scope, value*/
      260 && (_.$$scope = { dirty: h, ctx: l }), o.$set(_);
    },
    i(d) {
      s || (w(n), w(o.$$.fragment, d), s = true);
    },
    o(d) {
      k(n), k(o.$$.fragment, d), s = false;
    },
    d(d) {
      d && (E(e), E(i)), u[t].d(), B(o, d), r = false, a();
    }
  };
}
function ec(l, e, t) {
  let { actions: n } = e, { editor: i } = e, o = i.value || /* @__PURE__ */ new Date(), s, r;
  function a({ detail: c }) {
    const d = c.value;
    n.updateValue(d), n.save();
  }
  Je(() => {
    window.getSelection && window.getSelection().removeAllRanges();
  });
  function f(c) {
    Ne.call(this, l, c);
  }
  function u(c) {
    o = c, t(2, o);
  }
  return l.$$set = (c) => {
    "actions" in c && t(0, n = c.actions), "editor" in c && t(1, i = c.editor);
  }, l.$$.update = () => {
    l.$$.dirty & /*editor*/
    2 && i.config && t(3, { template: s, cell: r } = i.config, s, (t(4, r), t(1, i)));
  }, [
    n,
    i,
    o,
    s,
    r,
    a,
    f,
    u
  ];
}
var tc = class extends te {
  constructor(e) {
    super(), ee(this, e, ec, $u, $, { actions: 0, editor: 1 });
  }
};
var nc = (l) => ({ option: l & /*option*/
131072 });
var ii = (l) => ({ option: (
  /*option*/
  l[17]
) });
function lc(l) {
  let e, t = (
    /*editor*/
    l[1].renderedValue + ""
  ), n;
  return {
    c() {
      e = F("span"), n = ie(t), b(e, "class", "wx-text svelte-z4gexz");
    },
    m(i, o) {
      O(i, e, o), I(e, n);
    },
    p(i, o) {
      o & /*editor*/
      2 && t !== (t = /*editor*/
      i[1].renderedValue + "") && de(n, t);
    },
    i: K,
    o: K,
    d(i) {
      i && E(e);
    }
  };
}
function ic(l) {
  let e, t, n;
  var i = (
    /*cell*/
    l[3]
  );
  function o(s, r) {
    return { props: { data: (
      /*data*/
      s[6]
    ) } };
  }
  return i && (e = Le(i, o(l)), e.$on(
    "action",
    /*action_handler*/
    l[11]
  )), {
    c() {
      e && V(e.$$.fragment), t = he();
    },
    m(s, r) {
      e && W(e, s, r), O(s, t, r), n = true;
    },
    p(s, r) {
      if (r & /*cell*/
      8 && i !== (i = /*cell*/
      s[3])) {
        if (e) {
          Z();
          const a = e;
          k(a.$$.fragment, 1, 0, () => {
            B(a, 1);
          }), x();
        }
        i ? (e = Le(i, o(s)), e.$on(
          "action",
          /*action_handler*/
          s[11]
        ), V(e.$$.fragment), w(e.$$.fragment, 1), W(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const a = {};
        r & /*data*/
        64 && (a.data = /*data*/
        s[6]), e.$set(a);
      }
    },
    i(s) {
      n || (e && w(e.$$.fragment, s), n = true);
    },
    o(s) {
      e && k(e.$$.fragment, s), n = false;
    },
    d(s) {
      s && E(t), e && B(e, s);
    }
  };
}
function oc(l) {
  let e = (
    /*template*/
    l[2](
      /*data*/
      l[6]
    ) + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*template, data*/
      68 && e !== (e = /*template*/
      n[2](
        /*data*/
        n[6]
      ) + "") && de(t, e);
    },
    i: K,
    o: K,
    d(n) {
      n && E(t);
    }
  };
}
function sc(l) {
  let e = (
    /*option*/
    l[17].name + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*option*/
      131072 && e !== (e = /*option*/
      n[17].name + "") && de(t, e);
    },
    i: K,
    o: K,
    d(n) {
      n && E(t);
    }
  };
}
function rc(l) {
  let e, t, n;
  var i = (
    /*cell*/
    l[3]
  );
  function o(s, r) {
    return { props: { data: (
      /*option*/
      s[17]
    ) } };
  }
  return i && (e = Le(i, o(l)), e.$on(
    "action",
    /*action_handler_1*/
    l[14]
  )), {
    c() {
      e && V(e.$$.fragment), t = he();
    },
    m(s, r) {
      e && W(e, s, r), O(s, t, r), n = true;
    },
    p(s, r) {
      if (r & /*cell*/
      8 && i !== (i = /*cell*/
      s[3])) {
        if (e) {
          Z();
          const a = e;
          k(a.$$.fragment, 1, 0, () => {
            B(a, 1);
          }), x();
        }
        i ? (e = Le(i, o(s)), e.$on(
          "action",
          /*action_handler_1*/
          s[14]
        ), V(e.$$.fragment), w(e.$$.fragment, 1), W(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const a = {};
        r & /*option*/
        131072 && (a.data = /*option*/
        s[17]), e.$set(a);
      }
    },
    i(s) {
      n || (e && w(e.$$.fragment, s), n = true);
    },
    o(s) {
      e && k(e.$$.fragment, s), n = false;
    },
    d(s) {
      s && E(t), e && B(e, s);
    }
  };
}
function ac(l) {
  let e = (
    /*template*/
    l[2](
      /*option*/
      l[17]
    ) + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p(n, i) {
      i & /*template, option*/
      131076 && e !== (e = /*template*/
      n[2](
        /*option*/
        n[17]
      ) + "") && de(t, e);
    },
    i: K,
    o: K,
    d(n) {
      n && E(t);
    }
  };
}
function fc(l) {
  let e, t, n, i;
  const o = [ac, rc, sc], s = [];
  function r(a, f) {
    return (
      /*template*/
      a[2] ? 0 : (
        /*cell*/
        a[3] ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = he();
    },
    m(a, f) {
      s[e].m(a, f), O(a, n, f), i = true;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Z(), k(s[u], 1, 1, () => {
        s[u] = null;
      }), x(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), w(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (w(t), i = true);
    },
    o(a) {
      k(t), i = false;
    },
    d(a) {
      a && E(n), s[e].d(a);
    }
  };
}
function uc(l) {
  let e;
  const t = (
    /*#slots*/
    l[10].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[15],
    ii
  ), i = n || fc(l);
  return {
    c() {
      i && i.c();
    },
    m(o, s) {
      i && i.m(o, s), e = true;
    },
    p(o, s) {
      n ? n.p && (!e || s & /*$$scope, option*/
      163840) && we(
        n,
        t,
        o,
        /*$$scope*/
        o[15],
        e ? be(
          t,
          /*$$scope*/
          o[15],
          s,
          nc
        ) : ye(
          /*$$scope*/
          o[15]
        ),
        ii
      ) : i && i.p && (!e || s & /*template, option, cell*/
      131084) && i.p(o, e ? s : -1);
    },
    i(o) {
      e || (w(i, o), e = true);
    },
    o(o) {
      k(i, o), e = false;
    },
    d(o) {
      i && i.d(o);
    }
  };
}
function cc(l) {
  let e, t, n, i, o, s, r, a;
  const f = [oc, ic, lc], u = [];
  function c(d, h) {
    return (
      /*template*/
      d[2] ? 0 : (
        /*cell*/
        d[3] ? 1 : 2
      )
    );
  }
  return t = c(l), n = u[t] = f[t](l), o = new nn({
    props: {
      items: (
        /*editor*/
        l[1].options
      ),
      $$slots: {
        default: [
          uc,
          ({ option: d }) => ({ 17: d }),
          ({ option: d }) => d ? 131072 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), o.$on(
    "ready",
    /*ready*/
    l[8]
  ), o.$on(
    "select",
    /*updateValue*/
    l[7]
  ), {
    c() {
      e = F("div"), n.c(), i = J(), V(o.$$.fragment), b(e, "class", "wx-value svelte-z4gexz"), b(e, "tabindex", "0");
    },
    m(d, h) {
      O(d, e, h), u[t].m(e, null), l[12](e), O(d, i, h), W(o, d, h), s = true, r || (a = [
        Q(e, "click", function() {
          Ye(
            /*actions*/
            l[0].cancel()
          ) && l[0].cancel().apply(this, arguments);
        }),
        Q(
          e,
          "keydown",
          /*keydown_handler*/
          l[13]
        )
      ], r = true);
    },
    p(d, [h]) {
      l = d;
      let m = t;
      t = c(l), t === m ? u[t].p(l, h) : (Z(), k(u[m], 1, 1, () => {
        u[m] = null;
      }), x(), n = u[t], n ? n.p(l, h) : (n = u[t] = f[t](l), n.c()), w(n, 1), n.m(e, null));
      const _ = {};
      h & /*editor*/
      2 && (_.items = /*editor*/
      l[1].options), h & /*$$scope, template, option, cell*/
      163852 && (_.$$scope = { dirty: h, ctx: l }), o.$set(_);
    },
    i(d) {
      s || (w(n), w(o.$$.fragment, d), s = true);
    },
    o(d) {
      k(n), k(o.$$.fragment, d), s = false;
    },
    d(d) {
      d && (E(e), E(i)), u[t].d(), l[12](null), B(o, d), r = false, Ae(a);
    }
  };
}
function dc(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { actions: s } = e, { editor: r } = e, a, f;
  function u({ detail: p }) {
    const y = p.id;
    s.updateValue(y), s.save();
  }
  let c, d;
  function h(p) {
    c = p.detail.navigate, t(4, d = p.detail.keydown), c(m());
  }
  const m = () => r.options.findIndex((p) => p.id === r.value);
  let _;
  Je(() => {
    _.focus(), window && window.getSelection && window.getSelection().removeAllRanges();
  });
  function g(p) {
    Ne.call(this, l, p);
  }
  function C(p) {
    ge[p ? "unshift" : "push"](() => {
      _ = p, t(5, _);
    });
  }
  const S = (p) => d(p, m());
  function D(p) {
    Ne.call(this, l, p);
  }
  return l.$$set = (p) => {
    "actions" in p && t(0, s = p.actions), "editor" in p && t(1, r = p.editor), "$$scope" in p && t(15, o = p.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*editor*/
    2 && t(6, n = r.options.find((p) => p.id === r.value)), l.$$.dirty & /*editor*/
    2 && r.config && t(2, { template: a, cell: f } = r.config, a, (t(3, f), t(1, r)));
  }, [
    s,
    r,
    a,
    f,
    d,
    _,
    n,
    u,
    h,
    m,
    i,
    g,
    C,
    S,
    D,
    o
  ];
}
var hc = class extends te {
  constructor(e) {
    super(), ee(this, e, dc, cc, $, { actions: 0, editor: 1 });
  }
};
var oi = {
  text: ju,
  combo: Xu,
  datepicker: tc,
  richselect: hc
};
function mc(l) {
  let e, t, n, i, o;
  var s = oi[
    /*col*/
    l[0].editor.type
  ];
  function r(a, f) {
    return {
      props: {
        editor: (
          /*editor*/
          a[1]
        ),
        actions: {
          save: (
            /*save*/
            a[3]
          ),
          cancel: (
            /*cancel*/
            a[4]
          ),
          updateValue: (
            /*updateValue*/
            a[5]
          )
        }
      }
    };
  }
  return s && (t = Le(s, r(l)), t.$on(
    "action",
    /*action_handler*/
    l[6]
  )), {
    c() {
      e = F("div"), t && V(t.$$.fragment), b(e, "class", "wx-cell svelte-1hzozeb"), b(
        e,
        "style",
        /*style*/
        l[2]
      ), se(
        e,
        "wx-shadow",
        /*col*/
        l[0].fixed === -1
      );
    },
    m(a, f) {
      O(a, e, f), t && W(t, e, null), n = true, i || (o = ze(Ft.call(
        null,
        e,
        /*save*/
        l[3]
      )), i = true);
    },
    p(a, [f]) {
      if (f & /*col*/
      1 && s !== (s = oi[
        /*col*/
        a[0].editor.type
      ])) {
        if (t) {
          Z();
          const u = t;
          k(u.$$.fragment, 1, 0, () => {
            B(u, 1);
          }), x();
        }
        s ? (t = Le(s, r(a)), t.$on(
          "action",
          /*action_handler*/
          a[6]
        ), V(t.$$.fragment), w(t.$$.fragment, 1), W(t, e, null)) : t = null;
      } else if (s) {
        const u = {};
        f & /*editor*/
        2 && (u.editor = /*editor*/
        a[1]), t.$set(u);
      }
      (!n || f & /*style*/
      4) && b(
        e,
        "style",
        /*style*/
        a[2]
      ), (!n || f & /*col*/
      1) && se(
        e,
        "wx-shadow",
        /*col*/
        a[0].fixed === -1
      );
    },
    i(a) {
      n || (t && w(t.$$.fragment, a), n = true);
    },
    o(a) {
      t && k(t.$$.fragment, a), n = false;
    },
    d(a) {
      a && E(e), t && B(t), i = false, o();
    }
  };
}
function _c(l, e, t) {
  let { col: n } = e, { editor: i } = e;
  const o = He();
  function s() {
    o("action", {
      action: "close-editor",
      data: { ignore: false }
    });
  }
  function r() {
    o("action", {
      action: "close-editor",
      data: { ignore: true }
    });
  }
  function a(c) {
    o("action", { action: "editor", data: { value: c } });
  }
  let f;
  function u(c) {
    Ne.call(this, l, c);
  }
  return l.$$set = (c) => {
    "col" in c && t(0, n = c.col), "editor" in c && t(1, i = c.editor);
  }, l.$$.update = () => {
    l.$$.dirty & /*col*/
    1 && t(2, f = on(n.width, n.flexgrow, n.fixed, n.left));
  }, [n, i, f, s, r, a, u];
}
var gc = class extends te {
  constructor(e) {
    super(), ee(this, e, _c, mc, $, { col: 0, editor: 1 });
  }
};
function si(l, e, t) {
  const n = l.slice();
  return n[93] = e[t], n;
}
function ri(l, e, t) {
  const n = l.slice();
  return n[96] = e[t], n;
}
function ai(l) {
  let e, t, n, i, o;
  return t = new to({
    props: {
      contentWidth: (
        /*contentWidth*/
        l[12]
      ),
      deltaLeft: (
        /*deltaLeftH*/
        l[24]
      ),
      rowHeights: (
        /*$_sizes*/
        l[19].headerRowHeights
      ),
      columns: (
        /*renderColumnsH*/
        l[22]
      ),
      columnStyle: (
        /*columnStyle*/
        l[6]
      )
    }
  }), t.$on(
    "action",
    /*action_handler*/
    l[72]
  ), {
    c() {
      e = F("div"), V(t.$$.fragment), b(e, "class", "wx-header-wrapper svelte-1rhm7gj");
    },
    m(s, r) {
      O(s, e, r), W(t, e, null), n = true, i || (o = Q(e, "contextmenu", function() {
        Ye(
          /*onHeaderContext*/
          l[3]
        ) && l[3].apply(this, arguments);
      }), i = true);
    },
    p(s, r) {
      l = s;
      const a = {};
      r[0] & /*contentWidth*/
      4096 && (a.contentWidth = /*contentWidth*/
      l[12]), r[0] & /*deltaLeftH*/
      16777216 && (a.deltaLeft = /*deltaLeftH*/
      l[24]), r[0] & /*$_sizes*/
      524288 && (a.rowHeights = /*$_sizes*/
      l[19].headerRowHeights), r[0] & /*renderColumnsH*/
      4194304 && (a.columns = /*renderColumnsH*/
      l[22]), r[0] & /*columnStyle*/
      64 && (a.columnStyle = /*columnStyle*/
      l[6]), t.$set(a);
    },
    i(s) {
      n || (w(t.$$.fragment, s), n = true);
    },
    o(s) {
      k(t.$$.fragment, s), n = false;
    },
    d(s) {
      s && E(e), B(t), i = false, o();
    }
  };
}
function fi(l) {
  let e, t;
  return e = new Iu({ props: { overlay: (
    /*overlay*/
    l[4]
  ) } }), e.$on(
    "action",
    /*action_handler_1*/
    l[73]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*overlay*/
      16 && (o.overlay = /*overlay*/
      n[4]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function pc(l) {
  let e, t;
  return e = new bu({
    props: {
      row: (
        /*row*/
        l[93]
      ),
      col: (
        /*col*/
        l[96]
      ),
      columnStyle: (
        /*columnStyle*/
        l[6]
      ),
      cellStyle: (
        /*cellStyle*/
        l[7]
      )
    }
  }), e.$on(
    "action",
    /*action_handler_4*/
    l[76]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*renderRows*/
      1048576 && (o.row = /*row*/
      n[93]), i[0] & /*renderColumns*/
      2097152 && (o.col = /*col*/
      n[96]), i[0] & /*columnStyle*/
      64 && (o.columnStyle = /*columnStyle*/
      n[6]), i[0] & /*cellStyle*/
      128 && (o.cellStyle = /*cellStyle*/
      n[7]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function bc(l) {
  let e, t, n;
  var i = (
    /*col*/
    l[96].cell
  );
  function o(s, r) {
    return {
      props: {
        api: (
          /*api*/
          s[0]
        ),
        row: (
          /*row*/
          s[93]
        ),
        col: (
          /*col*/
          s[96]
        ),
        columnStyle: (
          /*columnStyle*/
          s[6]
        ),
        cellStyle: (
          /*cellStyle*/
          s[7]
        )
      }
    };
  }
  return i && (e = Le(i, o(l)), e.$on(
    "action",
    /*action_handler_3*/
    l[75]
  )), {
    c() {
      e && V(e.$$.fragment), t = he();
    },
    m(s, r) {
      e && W(e, s, r), O(s, t, r), n = true;
    },
    p(s, r) {
      if (r[0] & /*renderColumns*/
      2097152 && i !== (i = /*col*/
      s[96].cell)) {
        if (e) {
          Z();
          const a = e;
          k(a.$$.fragment, 1, 0, () => {
            B(a, 1);
          }), x();
        }
        i ? (e = Le(i, o(s)), e.$on(
          "action",
          /*action_handler_3*/
          s[75]
        ), V(e.$$.fragment), w(e.$$.fragment, 1), W(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const a = {};
        r[0] & /*api*/
        1 && (a.api = /*api*/
        s[0]), r[0] & /*renderRows*/
        1048576 && (a.row = /*row*/
        s[93]), r[0] & /*renderColumns*/
        2097152 && (a.col = /*col*/
        s[96]), r[0] & /*columnStyle*/
        64 && (a.columnStyle = /*columnStyle*/
        s[6]), r[0] & /*cellStyle*/
        128 && (a.cellStyle = /*cellStyle*/
        s[7]), e.$set(a);
      }
    },
    i(s) {
      n || (e && w(e.$$.fragment, s), n = true);
    },
    o(s) {
      e && k(e.$$.fragment, s), n = false;
    },
    d(s) {
      s && E(t), e && B(e, s);
    }
  };
}
function wc(l) {
  let e, t;
  return e = new gc({
    props: {
      editor: (
        /*$editor*/
        l[17]
      ),
      col: (
        /*col*/
        l[96]
      )
    }
  }), e.$on(
    "action",
    /*action_handler_2*/
    l[74]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*$editor*/
      131072 && (o.editor = /*$editor*/
      n[17]), i[0] & /*renderColumns*/
      2097152 && (o.col = /*col*/
      n[96]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function yc(l) {
  let e;
  return {
    c() {
      e = F("div"), b(e, "class", "wx-cell wx-collapsed svelte-1rhm7gj");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && E(e);
    }
  };
}
function ui(l, e) {
  let t, n, i, o, s;
  const r = [yc, wc, bc, pc], a = [];
  function f(u, c) {
    return (
      /*col*/
      u[96].collapsed ? 0 : (
        /*$editor*/
        u[17]?.id === /*row*/
        u[93].id && /*$editor*/
        u[17].column == /*col*/
        u[96].id ? 1 : (
          /*col*/
          u[96].cell ? 2 : 3
        )
      )
    );
  }
  return n = f(e), i = a[n] = r[n](e), {
    key: l,
    first: null,
    c() {
      t = he(), i.c(), o = he(), this.first = t;
    },
    m(u, c) {
      O(u, t, c), a[n].m(u, c), O(u, o, c), s = true;
    },
    p(u, c) {
      e = u;
      let d = n;
      n = f(e), n === d ? a[n].p(e, c) : (Z(), k(a[d], 1, 1, () => {
        a[d] = null;
      }), x(), i = a[n], i ? i.p(e, c) : (i = a[n] = r[n](e), i.c()), w(i, 1), i.m(o.parentNode, o));
    },
    i(u) {
      s || (w(i), s = true);
    },
    o(u) {
      k(i), s = false;
    },
    d(u) {
      u && (E(t), E(o)), a[n].d(u);
    }
  };
}
function ci(l, e) {
  let t, n = [], i = /* @__PURE__ */ new Map(), o, s, r, a, f, u, c, d = ke(
    /*renderColumns*/
    e[21]
  );
  const h = (_) => (
    /*col*/
    _[96].id
  );
  for (let _ = 0; _ < d.length; _ += 1) {
    let g = ri(e, d, _), C = h(g);
    i.set(C, n[_] = ui(C, g));
  }
  function m(..._) {
    return (
      /*contextmenu_handler*/
      e[77](
        /*row*/
        e[93],
        ..._
      )
    );
  }
  return {
    key: l,
    first: null,
    c() {
      t = F("div");
      for (let _ = 0; _ < n.length; _ += 1)
        n[_].c();
      o = J(), b(t, "class", s = Pe("wx-row" + /*rowStyle*/
      (e[5] ? " " + /*rowStyle*/
      e[5](
        /*row*/
        e[93]
      ) : "")) + " svelte-1rhm7gj"), b(t, "data-id", r = /*row*/
      e[93].id), b(t, "style", a = `${/*autoRowHeight*/
      e[8] ? "min-height" : "height"}:${/*defaultRowHeight*/
      e[16]}px;`), se(
        t,
        "wx-autoheight",
        /*autoRowHeight*/
        e[8]
      ), se(
        t,
        "wx-selected",
        /*$selectedRows*/
        e[30].indexOf(
          /*row*/
          e[93].id
        ) !== -1
      ), this.first = t;
    },
    m(_, g) {
      O(_, t, g);
      for (let C = 0; C < n.length; C += 1)
        n[C] && n[C].m(t, null);
      I(t, o), f = true, u || (c = Q(t, "contextmenu", m), u = true);
    },
    p(_, g) {
      e = _, g[0] & /*renderColumns, $editor, renderRows, api, columnStyle, cellStyle*/
      3276993 && (d = ke(
        /*renderColumns*/
        e[21]
      ), Z(), n = it(n, g, h, 1, e, d, i, t, gt, ui, o, ri), x()), (!f || g[0] & /*rowStyle, renderRows*/
      1048608 && s !== (s = Pe("wx-row" + /*rowStyle*/
      (e[5] ? " " + /*rowStyle*/
      e[5](
        /*row*/
        e[93]
      ) : "")) + " svelte-1rhm7gj")) && b(t, "class", s), (!f || g[0] & /*renderRows*/
      1048576 && r !== (r = /*row*/
      e[93].id)) && b(t, "data-id", r), (!f || g[0] & /*autoRowHeight, defaultRowHeight*/
      65792 && a !== (a = `${/*autoRowHeight*/
      e[8] ? "min-height" : "height"}:${/*defaultRowHeight*/
      e[16]}px;`)) && b(t, "style", a), (!f || g[0] & /*rowStyle, renderRows, autoRowHeight*/
      1048864) && se(
        t,
        "wx-autoheight",
        /*autoRowHeight*/
        e[8]
      ), (!f || g[0] & /*rowStyle, renderRows, $selectedRows, renderRows*/
      1074790432) && se(
        t,
        "wx-selected",
        /*$selectedRows*/
        e[30].indexOf(
          /*row*/
          e[93].id
        ) !== -1
      );
    },
    i(_) {
      if (!f) {
        for (let g = 0; g < d.length; g += 1)
          w(n[g]);
        f = true;
      }
    },
    o(_) {
      for (let g = 0; g < n.length; g += 1)
        k(n[g]);
      f = false;
    },
    d(_) {
      _ && E(t);
      for (let g = 0; g < n.length; g += 1)
        n[g].d();
      u = false, c();
    }
  };
}
function di(l) {
  let e, t;
  return e = new to({
    props: {
      type: "footer",
      contentWidth: (
        /*contentWidth*/
        l[12]
      ),
      deltaLeft: (
        /*deltaLeftF*/
        l[25]
      ),
      rowHeights: (
        /*$_sizes*/
        l[19].footerRowHeights
      ),
      columns: (
        /*renderColumnsF*/
        l[23]
      ),
      columnStyle: (
        /*columnStyle*/
        l[6]
      )
    }
  }), e.$on(
    "action",
    /*action_handler_5*/
    l[80]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*contentWidth*/
      4096 && (o.contentWidth = /*contentWidth*/
      n[12]), i[0] & /*deltaLeftF*/
      33554432 && (o.deltaLeft = /*deltaLeftF*/
      n[25]), i[0] & /*$_sizes*/
      524288 && (o.rowHeights = /*$_sizes*/
      n[19].footerRowHeights), i[0] & /*renderColumnsF*/
      8388608 && (o.columns = /*renderColumnsF*/
      n[23]), i[0] & /*columnStyle*/
      64 && (o.columnStyle = /*columnStyle*/
      n[6]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function kc(l) {
  let e, t, n, i, o, s, r, a = [], f = /* @__PURE__ */ new Map(), u, c, d, h, m, _, g, C = (
    /*header*/
    l[1] && ai(l)
  ), S = (
    /*overlay*/
    l[4] && fi(l)
  ), D = ke(
    /*renderRows*/
    l[20]
  );
  const p = (R) => (
    /*row*/
    R[93].id
  );
  for (let R = 0; R < D.length; R += 1) {
    let v = si(l, D, R), M = p(v);
    f.set(M, a[R] = ci(M, v));
  }
  let y = (
    /*footer*/
    l[2] && /*$data*/
    l[18].length && di(l)
  );
  return {
    c() {
      e = F("div"), t = F("div"), n = F("div"), C && C.c(), i = J(), o = F("div"), S && S.c(), s = J(), r = F("div");
      for (let R = 0; R < a.length; R += 1)
        a[R].c();
      u = J(), y && y.c(), b(r, "class", "wx-data svelte-1rhm7gj"), ue(
        r,
        "padding-top",
        /*deltaTop*/
        l[14] + "px"
      ), ue(
        r,
        "padding-left",
        /*deltaLeft*/
        l[15] + "px"
      ), b(o, "class", "wx-body svelte-1rhm7gj"), ue(
        o,
        "width",
        /*contentWidth*/
        l[12] + "px"
      ), ue(
        o,
        "height",
        /*fullHeight*/
        l[10] + "px"
      ), b(n, "class", "wx-scroll svelte-1rhm7gj"), b(t, "class", "wx-table-box svelte-1rhm7gj"), b(
        t,
        "style",
        /*style*/
        l[29]
      ), b(t, "tabindex", "0"), se(
        t,
        "wx-active",
        /*activeTable*/
        l[28]
      ), b(e, "class", "wx-grid svelte-1rhm7gj"), ue(
        e,
        "--header-height",
        /*header*/
        (l[1] ? (
          /*$_sizes*/
          l[19].headerHeight
        ) : 0) + "px"
      ), ue(
        e,
        "--footer-height",
        /*footer*/
        (l[2] ? (
          /*$_sizes*/
          l[19].footerHeight
        ) : 0) + "px"
      ), ue(
        e,
        "--split-left-width",
        /*leftWidth*/
        l[11] + "px"
      );
    },
    m(R, v) {
      O(R, e, v), I(e, t), I(t, n), C && C.m(n, null), I(n, i), I(n, o), S && S.m(o, null), I(o, s), I(o, r);
      for (let M = 0; M < a.length; M += 1)
        a[M] && a[M].m(r, null);
      l[78](r), I(n, u), y && y.m(n, null), l[83](t), m = true, _ || (g = [
        Q(
          o,
          "mousedown",
          /*mousedown_handler*/
          l[79]
        ),
        ze(en.call(
          null,
          o,
          /*bodyClickHandlers*/
          l[43]
        )),
        Q(
          n,
          "scroll",
          /*onScroll*/
          l[40]
        ),
        ze(c = uu.call(null, n, {
          scroll: (
            /*scroll*/
            l[39]
          ),
          getWidth: (
            /*scrollTo_function*/
            l[81]
          ),
          getHeight: (
            /*scrollTo_function_1*/
            l[82]
          )
        })),
        ze(d = Ft.call(
          null,
          t,
          /*clickOutside_function*/
          l[84]
        )),
        Q(
          t,
          "click",
          /*click_handler*/
          l[85]
        ),
        ze(cu.call(
          null,
          t,
          /*resize*/
          l[41]
        )),
        ze(h = fu.call(null, t, {
          keys: {
            tab: true,
            "shift+tab": true,
            arrowup: true,
            arrowdown: true,
            escape: true,
            f2: true
          },
          exec: (
            /*hotkeys_function*/
            l[86]
          )
        }))
      ], _ = true);
    },
    p(R, v) {
      R[1] ? C ? (C.p(R, v), v[0] & /*header*/
      2 && w(C, 1)) : (C = ai(R), C.c(), w(C, 1), C.m(n, i)) : C && (Z(), k(C, 1, 1, () => {
        C = null;
      }), x()), /*overlay*/
      R[4] ? S ? (S.p(R, v), v[0] & /*overlay*/
      16 && w(S, 1)) : (S = fi(R), S.c(), w(S, 1), S.m(o, s)) : S && (Z(), k(S, 1, 1, () => {
        S = null;
      }), x()), v[0] & /*rowStyle, renderRows, autoRowHeight, defaultRowHeight, $selectedRows, renderColumns, $editor, api, columnStyle, cellStyle*/
      1077084641 | v[1] & /*bodyContextClick*/
      8192 && (D = ke(
        /*renderRows*/
        R[20]
      ), Z(), a = it(a, v, p, 1, R, D, f, r, gt, ci, null, si), x()), (!m || v[0] & /*deltaTop*/
      16384) && ue(
        r,
        "padding-top",
        /*deltaTop*/
        R[14] + "px"
      ), (!m || v[0] & /*deltaLeft*/
      32768) && ue(
        r,
        "padding-left",
        /*deltaLeft*/
        R[15] + "px"
      ), (!m || v[0] & /*contentWidth*/
      4096) && ue(
        o,
        "width",
        /*contentWidth*/
        R[12] + "px"
      ), (!m || v[0] & /*fullHeight*/
      1024) && ue(
        o,
        "height",
        /*fullHeight*/
        R[10] + "px"
      ), /*footer*/
      R[2] && /*$data*/
      R[18].length ? y ? (y.p(R, v), v[0] & /*footer, $data*/
      262148 && w(y, 1)) : (y = di(R), y.c(), w(y, 1), y.m(n, null)) : y && (Z(), k(y, 1, 1, () => {
        y = null;
      }), x()), c && Ye(c.update) && v[0] & /*clientWidth, visibleRowsHeight*/
      8704 && c.update.call(null, {
        scroll: (
          /*scroll*/
          R[39]
        ),
        getWidth: (
          /*scrollTo_function*/
          R[81]
        ),
        getHeight: (
          /*scrollTo_function_1*/
          R[82]
        )
      }), (!m || v[0] & /*style*/
      536870912) && b(
        t,
        "style",
        /*style*/
        R[29]
      ), d && Ye(d.update) && v[0] & /*activeTable*/
      268435456 && d.update.call(
        null,
        /*clickOutside_function*/
        R[84]
      ), h && Ye(h.update) && v[0] & /*api*/
      1 && h.update.call(null, {
        keys: {
          tab: true,
          "shift+tab": true,
          arrowup: true,
          arrowdown: true,
          escape: true,
          f2: true
        },
        exec: (
          /*hotkeys_function*/
          R[86]
        )
      }), (!m || v[0] & /*activeTable*/
      268435456) && se(
        t,
        "wx-active",
        /*activeTable*/
        R[28]
      ), (!m || v[0] & /*header, $_sizes*/
      524290) && ue(
        e,
        "--header-height",
        /*header*/
        (R[1] ? (
          /*$_sizes*/
          R[19].headerHeight
        ) : 0) + "px"
      ), (!m || v[0] & /*footer, $_sizes*/
      524292) && ue(
        e,
        "--footer-height",
        /*footer*/
        (R[2] ? (
          /*$_sizes*/
          R[19].footerHeight
        ) : 0) + "px"
      ), (!m || v[0] & /*leftWidth*/
      2048) && ue(
        e,
        "--split-left-width",
        /*leftWidth*/
        R[11] + "px"
      );
    },
    i(R) {
      if (!m) {
        w(C), w(S);
        for (let v = 0; v < D.length; v += 1)
          w(a[v]);
        w(y), m = true;
      }
    },
    o(R) {
      k(C), k(S);
      for (let v = 0; v < a.length; v += 1)
        k(a[v]);
      k(y), m = false;
    },
    d(R) {
      R && E(e), C && C.d(), S && S.d();
      for (let v = 0; v < a.length; v += 1)
        a[v].d();
      l[78](null), y && y.d(), l[83](null), _ = false, Ae(g);
    }
  };
}
var Wt = 2;
var vc = 1;
function Sc() {
  const l = document.createElement("div");
  l.style.cssText = "position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;min-height:100px;overflow-y:scroll;", document.body.appendChild(l);
  const e = l.offsetWidth - l.clientWidth;
  return document.body.removeChild(l), e;
}
function Cc(l, e, t) {
  let n, i, o, s, r, a, f, u, c, d;
  const h = He(), m = Sc();
  let { store: _ } = e, { api: g } = e, { header: C } = e, { footer: S } = e, { onHeaderContext: D } = e, { onItemContext: p } = e, { overlay: y } = e, { select: R } = e, { multiselect: v } = e, { rowStyle: M } = e, { columnStyle: z } = e, { cellStyle: H } = e, { autoRowHeight: A } = e;
  const { dynamic: T, flatData: j, _columns: L, split: P, _sizes: G, selectedRows: ae, editor: q, filter: U, scroll: le } = _.getReactive();
  De(l, T, (N) => t(69, a = N)), De(l, j, (N) => t(18, r = N)), De(l, L, (N) => t(70, u = N)), De(l, P, (N) => t(71, c = N)), De(l, G, (N) => t(19, f = N)), De(l, ae, (N) => t(30, d = N)), De(l, q, (N) => t(17, o = N)), De(l, U, (N) => t(68, s = N));
  let re = 0, X = 0, ve, oe = [], ce = [], fe = 0, Se, _e, me, Ie, je = false, Y = false, ne, Ce, Re = { row: { start: 0, end: 0 } }, Ge = 0, sn = [], rn = 0, an = 0, fn = [], un = [], cn = [], bt = 0, Tt = 0, Lt = 0, dn, hn, mn, wt, zt = 0, yt = 0;
  function ro(N) {
    t(65, yt = N.target.scrollTop), t(64, zt = N.target.scrollLeft);
  }
  function ao(N) {
    t(9, re = N.width), t(49, X = N.height);
  }
  function In(N) {
    N.shiftKey && N.preventDefault(), ot.focus();
  }
  const fo = {
    dblclick: (N, Me) => {
      const Te = {
        id: N,
        column: Es(Me, "data-col-id")
      };
      h("action", { action: "open-editor", data: Te });
    },
    click: (N, Me) => {
      if (R === false)
        return;
      const Te = v && Me.ctrlKey, We = v && Me.shiftKey;
      h("action", {
        action: "select-row",
        data: { id: N, toggle: Te, range: We }
      });
    },
    "toggle-row": (N) => {
      const Me = _.getRow(N);
      h("action", {
        action: Me.open ? "close-row" : "open-row",
        data: { id: N }
      });
    },
    "ignore-click": () => false
  };
  function qn(N, Me) {
    p && p(N, Me);
  }
  function Pn(N, Me, Te) {
    let We = Me, Qe = N;
    if (ce.length) {
      let Ke = ce.length;
      for (let Be = N; Be >= 0; Be--)
        ce[Be][Te].forEach((St) => {
          St.colspan > 1 && Be > N - St.colspan && Be < Ke && (Ke = Be);
        });
      if (Ke !== ce.length && Ke < N) {
        for (let Be = Ke; Be < N; Be++)
          We -= ce[Be].width;
        Qe = Ke;
      }
    }
    return { index: Qe, delta: We };
  }
  let It, kt = [], _n = 0;
  function uo() {
    let N = 0, Me = rn;
    It.childNodes.forEach((Te, We) => {
      t(66, kt[rn + We] = Te.offsetHeight, kt), N += Te.offsetHeight, Me++;
    }), t(67, _n = N), t(59, an = Me);
  }
  A && An(() => {
    uo();
  });
  let ot;
  const co = (N) => {
    !N && ot ? (ot.focus(), t(28, vt = true)) : t(28, vt = null);
  };
  let vt = null;
  function ho(N) {
    Ne.call(this, l, N);
  }
  function mo(N) {
    Ne.call(this, l, N);
  }
  function _o(N) {
    Ne.call(this, l, N);
  }
  function go(N) {
    Ne.call(this, l, N);
  }
  function po(N) {
    Ne.call(this, l, N);
  }
  const bo = (N, Me) => qn(Me, N.id);
  function wo(N) {
    ge[N ? "unshift" : "push"](() => {
      It = N, t(26, It);
    });
  }
  const yo = (N) => In(N);
  function ko(N) {
    Ne.call(this, l, N);
  }
  const vo = () => re, So = () => Ce;
  function Co(N) {
    ge[N ? "unshift" : "push"](() => {
      ot = N, t(27, ot);
    });
  }
  const Mo = () => t(28, vt = null), Ro = () => t(28, vt = true), Do = (N) => g.exec("hotkey", N);
  return l.$$set = (N) => {
    "store" in N && t(45, _ = N.store), "api" in N && t(0, g = N.api), "header" in N && t(1, C = N.header), "footer" in N && t(2, S = N.footer), "onHeaderContext" in N && t(3, D = N.onHeaderContext), "onItemContext" in N && t(46, p = N.onItemContext), "overlay" in N && t(4, y = N.overlay), "select" in N && t(47, R = N.select), "multiselect" in N && t(48, v = N.multiselect), "rowStyle" in N && t(5, M = N.rowStyle), "columnStyle" in N && t(6, z = N.columnStyle), "cellStyle" in N && t(7, H = N.cellStyle), "autoRowHeight" in N && t(8, A = N.autoRowHeight);
  }, l.$$.update = () => {
    if (l.$$.dirty[0] & /*$_sizes*/
    524288 && t(16, n = f.rowHeight), l.$$.dirty[1] & /*hasAny, fullWidth*/
    6291456 | l.$$.dirty[2] & /*$_columns*/
    256 && (t(52, Se = false), t(53, _e = 0), u.forEach((N) => {
      N.hidden || (N.flexgrow && t(52, Se = Se || N.flexgrow), t(53, _e += N.width));
    }), t(12, Ie = _e)), l.$$.dirty[0] & /*clientWidth*/
    512 | l.$$.dirty[1] & /*clientHeight, fullWidth*/
    4456448 && t(56, Y = re && X ? _e > re : false), l.$$.dirty[0] & /*header, $_sizes, footer, visibleRowsHeight, defaultRowHeight*/
    598022 | l.$$.dirty[1] & /*clientHeight, hasHScroll*/
    33816576 && (t(13, Ce = X - (C ? f.headerHeight : 0) - (S ? f.footerHeight : 0) - (Y ? m : 0)), t(57, ne = Math.ceil(Ce / n) + 1)), l.$$.dirty[0] & /*autoRowHeight, defaultRowHeight, deltaTop, $data*/
    344320 | l.$$.dirty[1] & /*visibleRows, requestData*/
    201326592 | l.$$.dirty[2] & /*scrollTop, rowHeights, $dynamic*/
    152) {
      let N = 0;
      if (A) {
        let Te = yt;
        for (; Te > 0; )
          Te -= kt[N] || n, N++;
        t(14, Ge = yt - Te);
        for (let We = Math.max(0, N - Wt - 1); We < N; We++)
          t(14, Ge -= kt[N - We] || n);
        N = Math.max(0, N - Wt);
      } else
        N = Math.floor(yt / n), N = Math.max(0, N - Wt), t(14, Ge = N * n);
      const Me = Math.min(a ? a.rowsCount : r.length, N + ne + Wt);
      (N != Re.row.start || Me != Re.row.end) && (t(58, Re = { row: { start: N, end: Me } }), a && h("data-request", { requestData: Re }));
    }
    if (l.$$.dirty[0] & /*$data, defaultRowHeight, autoRowHeight, deltaTop*/
    344320 | l.$$.dirty[1] & /*renderEnd*/
    268435456 | l.$$.dirty[2] & /*$dynamic, renderedHeight*/
    160) {
      const N = a ? a.rowsCount : r.length, Me = N * n;
      A ? t(10, ve = _n + Ge + (N - an) * n) : t(10, ve = Me);
    }
    if (l.$$.dirty[0] & /*leftWidth*/
    2048 | l.$$.dirty[1] & /*leftColumns, centerColumns*/
    1572864 | l.$$.dirty[2] & /*$_columns, $split*/
    768 && (t(50, oe = u.slice(0, c.left).filter((N) => !N.hidden)), t(11, fe = 0), oe.forEach((N) => {
      N.fixed = 1, N.left = fe, t(11, fe += N.width);
    }), oe.length && t(50, oe[oe.length - 1].fixed = -1, oe), t(51, ce = u.slice(c.left).filter((N) => !N.hidden)), ce.forEach((N) => {
      N.fixed = 0;
    })), l.$$.dirty[0] & /*clientWidth, fullHeight*/
    1536 | l.$$.dirty[1] & /*clientHeight*/
    262144 && t(55, je = re && X ? ve > X : false), l.$$.dirty[0] & /*clientWidth, contentWidth*/
    4608 | l.$$.dirty[1] & /*hasAny, fullWidth, hasVScroll*/
    23068672 && (Se && _e <= re ? (t(54, me = t(12, Ie = re)), t(12, Ie -= je ? m : 0)) : Ie < re ? t(54, me = _e + (je ? m : 0)) : t(54, me = -1)), l.$$.dirty[0] & /*$data*/
    262144 | l.$$.dirty[1] & /*requestData*/
    134217728 | l.$$.dirty[2] & /*$dynamic, $filter*/
    192) {
      if (a)
        t(20, sn = r);
      else {
        let N = r;
        s && (N = N.filter(s)), t(20, sn = N.slice(Re.row.start, Re.row.end));
      }
      rn = Re?.row.start;
    }
    if (l.$$.dirty[0] & /*clientWidth, deltaLeft*/
    33280 | l.$$.dirty[1] & /*centerColumns*/
    1048576 | l.$$.dirty[2] & /*scrollLeft*/
    4) {
      const N = zt, Me = zt + re;
      let Te = 0, We = 0, Qe = 0;
      t(15, bt = t(24, Tt = t(25, Lt = 0))), ce.forEach((jn, St) => {
        N > Qe && (Te = St, t(15, bt = t(24, Tt = t(25, Lt = Qe)))), Qe = Qe + jn.width, Me > Qe && (We = St + vc);
      });
      const Ke = Pn(Te, bt, "header"), Be = Pn(Te, bt, "footer");
      t(24, Tt = Ke.delta), t(61, hn = Ke.index), t(25, Lt = Be.delta), t(62, mn = Be.index), t(60, dn = Te), t(63, wt = We);
    }
    l.$$.dirty[0] & /*clientWidth*/
    512 | l.$$.dirty[1] & /*hasAny, fullWidth, leftColumns, centerColumns, cs, csH*/
    1618477056 | l.$$.dirty[2] & /*ce, csF*/
    3 && (Se && _e > re ? t(21, fn = t(22, un = t(23, cn = [...oe, ...ce]))) : (t(21, fn = [...oe, ...ce.slice(dn, wt + 1)]), t(22, un = [...oe, ...ce.slice(hn, wt + 1)]), t(23, cn = [...oe, ...ce.slice(mn, wt + 1)]))), l.$$.dirty[1] & /*globalWidth*/
    8388608 && t(29, i = me ? `width:${me}px;` : ""), l.$$.dirty[0] & /*$editor*/
    131072 && co(o);
  }, [
    g,
    C,
    S,
    D,
    y,
    M,
    z,
    H,
    A,
    re,
    ve,
    fe,
    Ie,
    Ce,
    Ge,
    bt,
    n,
    o,
    r,
    f,
    sn,
    fn,
    un,
    cn,
    Tt,
    Lt,
    It,
    ot,
    vt,
    i,
    d,
    T,
    j,
    L,
    P,
    G,
    ae,
    q,
    U,
    le,
    ro,
    ao,
    In,
    fo,
    qn,
    _,
    p,
    R,
    v,
    X,
    oe,
    ce,
    Se,
    _e,
    me,
    je,
    Y,
    ne,
    Re,
    an,
    dn,
    hn,
    mn,
    wt,
    zt,
    yt,
    kt,
    _n,
    s,
    a,
    u,
    c,
    ho,
    mo,
    _o,
    go,
    po,
    bo,
    wo,
    yo,
    ko,
    vo,
    So,
    Co,
    Mo,
    Ro,
    Do
  ];
}
var Mc = class extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      Cc,
      kc,
      $,
      {
        store: 45,
        api: 0,
        header: 1,
        footer: 2,
        onHeaderContext: 3,
        onItemContext: 46,
        overlay: 4,
        select: 47,
        multiselect: 48,
        rowStyle: 5,
        columnStyle: 6,
        cellStyle: 7,
        autoRowHeight: 8
      },
      null,
      [-1, -1, -1, -1]
    );
  }
};
function Rc(l) {
  let e, t;
  return e = new Mc({
    props: {
      store: (
        /*dataStore*/
        l[12]
      ),
      api: (
        /*api*/
        l[11]
      ),
      header: (
        /*header*/
        l[5]
      ),
      onHeaderContext: (
        /*onHeaderContext*/
        l[9]
      ),
      onItemContext: (
        /*onItemContext*/
        l[10]
      ),
      footer: (
        /*footer*/
        l[6]
      ),
      overlay: (
        /*overlay*/
        l[7]
      ),
      rowStyle: (
        /*rowStyle*/
        l[0]
      ),
      columnStyle: (
        /*columnStyle*/
        l[1]
      ),
      cellStyle: (
        /*cellStyle*/
        l[2]
      ),
      select: (
        /*select*/
        l[3]
      ),
      multiselect: (
        /*multiselect*/
        l[4]
      ),
      autoRowHeight: (
        /*autoRowHeight*/
        l[8]
      )
    }
  }), e.$on(
    "action",
    /*actions*/
    l[13]
  ), e.$on(
    "data-request",
    /*data_request_handler*/
    l[27]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*header*/
      32 && (o.header = /*header*/
      n[5]), i[0] & /*onHeaderContext*/
      512 && (o.onHeaderContext = /*onHeaderContext*/
      n[9]), i[0] & /*onItemContext*/
      1024 && (o.onItemContext = /*onItemContext*/
      n[10]), i[0] & /*footer*/
      64 && (o.footer = /*footer*/
      n[6]), i[0] & /*overlay*/
      128 && (o.overlay = /*overlay*/
      n[7]), i[0] & /*rowStyle*/
      1 && (o.rowStyle = /*rowStyle*/
      n[0]), i[0] & /*columnStyle*/
      2 && (o.columnStyle = /*columnStyle*/
      n[1]), i[0] & /*cellStyle*/
      4 && (o.cellStyle = /*cellStyle*/
      n[2]), i[0] & /*select*/
      8 && (o.select = /*select*/
      n[3]), i[0] & /*multiselect*/
      16 && (o.multiselect = /*multiselect*/
      n[4]), i[0] & /*autoRowHeight*/
      256 && (o.autoRowHeight = /*autoRowHeight*/
      n[8]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Dc(l) {
  let e, t;
  return e = new ef({
    props: {
      words: Yf,
      optional: true,
      $$slots: { default: [Rc] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*header, onHeaderContext, onItemContext, footer, overlay, rowStyle, columnStyle, cellStyle, select, multiselect, autoRowHeight*/
      2047 | i[1] & /*$$scope*/
      1 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Ec(l, e, t) {
  let n;
  const i = He();
  let { data: o = [] } = e, { columns: s = [] } = e, { rowStyle: r = null } = e, { columnStyle: a = null } = e, { cellStyle: f = null } = e, { selected: u = null } = e, { selectedRows: c = [] } = e, { select: d = true } = e, { multiselect: h = false } = e, { header: m = true } = e, { footer: _ = false } = e, { dynamic: g = null } = e, { editor: C = null } = e, { filter: S = null } = e, { overlay: D = null } = e, { autoRowHeight: p = false } = e, { sizes: y = {} } = e, { split: R = { left: 0 } } = e, { onHeaderContext: v = null } = e, { onItemContext: M = null } = e, { tree: z = false } = e, { autoConfig: H = false } = e, { init: A = null } = e;
  const T = new ru(Ni);
  let j = T.in, L = new Gf(i);
  j.setNext(L);
  const P = (q) => {
    j.exec(q.detail.action, q.detail.data);
  }, G = {
    // state
    getState: T.getState.bind(T),
    getReactiveState: T.getReactive.bind(T),
    getStores: () => ({ data: T }),
    // events
    exec: j.exec,
    setNext: (q) => L = L.setNext(q),
    intercept: j.intercept.bind(j),
    on: j.on.bind(j),
    detach: j.detach.bind(j),
    // extra api
    getRow: (q) => T.getRow(q),
    getColumn: (q) => T.getColumn(q)
  };
  function ae(q) {
    Ne.call(this, l, q);
  }
  return l.$$set = (q) => {
    "data" in q && t(16, o = q.data), "columns" in q && t(17, s = q.columns), "rowStyle" in q && t(0, r = q.rowStyle), "columnStyle" in q && t(1, a = q.columnStyle), "cellStyle" in q && t(2, f = q.cellStyle), "selected" in q && t(14, u = q.selected), "selectedRows" in q && t(18, c = q.selectedRows), "select" in q && t(3, d = q.select), "multiselect" in q && t(4, h = q.multiselect), "header" in q && t(5, m = q.header), "footer" in q && t(6, _ = q.footer), "dynamic" in q && t(19, g = q.dynamic), "editor" in q && t(20, C = q.editor), "filter" in q && t(21, S = q.filter), "overlay" in q && t(7, D = q.overlay), "autoRowHeight" in q && t(8, p = q.autoRowHeight), "sizes" in q && t(22, y = q.sizes), "split" in q && t(23, R = q.split), "onHeaderContext" in q && t(9, v = q.onHeaderContext), "onItemContext" in q && t(10, M = q.onItemContext), "tree" in q && t(24, z = q.tree), "autoConfig" in q && t(25, H = q.autoConfig), "init" in q && t(15, A = q.init);
  }, l.$$.update = () => {
    if (l.$$.dirty[0] & /*autoConfig, columns, data*/
    33751040 && H && !s.length && o.length) {
      const q = o[0];
      for (let U in q)
        if (U != "id" && U[0] != "$") {
          let le = {
            id: U,
            header: U[0].toUpperCase() + U.substr(1)
          };
          typeof H == "object" && (le = __spreadValues(__spreadValues({}, le), H)), s.push(le);
        }
    }
    l.$$.dirty[0] & /*selectedRows, selected*/
    278528 && (c.length ? t(14, u = c[0]) : u && c.push(u)), l.$$.dirty[0] & /*data, editor, columns, split, sizes, selected, selectedRows, dynamic, filter, tree, _skin, init*/
    100646912 && (T.init({
      data: o,
      editor: C,
      columns: s,
      split: R,
      sizes: y,
      selected: u,
      selectedRows: c,
      dynamic: g,
      filter: S,
      tree: z,
      _skin: n
    }), A && (A(G), t(15, A = null)));
  }, t(26, n = Oe("wx-theme")), [
    r,
    a,
    f,
    d,
    h,
    m,
    _,
    D,
    p,
    v,
    M,
    G,
    T,
    P,
    u,
    A,
    o,
    s,
    c,
    g,
    C,
    S,
    y,
    R,
    z,
    H,
    n,
    ae
  ];
}
var no = class extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      Ec,
      Dc,
      $,
      {
        data: 16,
        columns: 17,
        rowStyle: 0,
        columnStyle: 1,
        cellStyle: 2,
        selected: 14,
        selectedRows: 18,
        select: 3,
        multiselect: 4,
        header: 5,
        footer: 6,
        dynamic: 19,
        editor: 20,
        filter: 21,
        overlay: 7,
        autoRowHeight: 8,
        sizes: 22,
        split: 23,
        onHeaderContext: 9,
        onItemContext: 10,
        tree: 24,
        autoConfig: 25,
        init: 15,
        api: 11
      },
      null,
      [-1, -1]
    );
  }
  get api() {
    return this.$$.ctx[11];
  }
};
function Oc(l) {
  let e, t;
  return e = new zn({ props: { fonts: (
    /*fonts*/
    l[0]
  ) } }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*fonts*/
      1 && (o.fonts = /*fonts*/
      n[0]), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Ac(l) {
  let e, t;
  return e = new zn({
    props: {
      fonts: (
        /*fonts*/
        l[0]
      ),
      $$slots: { default: [Hc] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*fonts*/
      1 && (o.fonts = /*fonts*/
      n[0]), i & /*$$scope*/
      8 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Hc(l) {
  let e;
  const t = (
    /*#slots*/
    l[2].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[3],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = true;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      8) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? be(
          t,
          /*$$scope*/
          i[3],
          o,
          null
        ) : ye(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (w(n, i), e = true);
    },
    o(i) {
      k(n, i), e = false;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Nc(l) {
  let e, t, n, i;
  const o = [Ac, Oc], s = [];
  function r(a, f) {
    return (
      /*SLOTS*/
      a[1] && /*SLOTS*/
      a[1].default ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = he();
    },
    m(a, f) {
      s[e].m(a, f), O(a, n, f), i = true;
    },
    p(a, [f]) {
      t.p(a, f);
    },
    i(a) {
      i || (w(t), i = true);
    },
    o(a) {
      k(t), i = false;
    },
    d(a) {
      a && E(n), s[e].d(a);
    }
  };
}
function Fc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const o = e.$$slots;
  let { fonts: s = true } = e;
  return l.$$set = (r) => {
    t(4, e = Ee(Ee({}, e), Fe(r))), "fonts" in r && t(0, s = r.fonts), "$$scope" in r && t(3, i = r.$$scope);
  }, e = Fe(e), [s, o, n, i];
}
var lo = class extends te {
  constructor(e) {
    super(), ee(this, e, Fc, Nc, $, { fonts: 0 });
  }
};
function Tc(l, e, t) {
  const n = l.getBoundingClientRect(), i = e.getBoundingClientRect();
  return {
    top: n.top - i.top,
    left: n.left - i.left,
    dt: n.bottom - t.clientY,
    db: t.clientY - n.top,
    dl: n.right - t.clientX,
    dr: t.clientX - n.left,
    width: i.width - n.width,
    height: i.height - n.height
  };
}
function Bt(l, e) {
  return e ? l.nextElementSibling : l.previousElementSibling;
}
var hi = 5;
function Rt(l, e) {
  const t = l.getBoundingClientRect();
  return (n) => t[{
    x: { offset: "left", size: "width" },
    y: { offset: "top", size: "height" }
  }[e ? "x" : "y"][n]];
}
function Lc(l, e) {
  let t, n, i, o, s, r, a, f, u, c;
  const d = document.body, h = e && e.byX;
  let m = null, _ = null, g = null, C = null, S = false, D = false;
  function p(P) {
    S = false, D = false, m = Rt(l, h), C = l.getBoundingClientRect(), o = P.clientX, s = P.clientY, r = Tc(t, l, P), document.body.style.userSelect = "none", h || (f = l.parentNode.scrollTop);
  }
  function y(P) {
    t = Ot(P), !(!t || t.parentNode != l) && (c = setTimeout(() => {
      u = true, e && e.touchStart && e.touchStart(), t.classList.add("wx-reorder"), p(P.touches[0]);
    }, 500), l.addEventListener("touchmove", A), l.addEventListener("touchend", T), l.addEventListener("contextmenu", R));
  }
  function R(P) {
    if (u || c)
      return P.preventDefault(), false;
  }
  function v(P) {
    P.which !== 3 && (t = Ot(P), !(!t || t.parentNode != l) && (d.addEventListener("mousemove", H), d.addEventListener("mouseup", j), p(P)));
  }
  function M(P) {
    d.removeEventListener("mousemove", H), d.removeEventListener("mouseup", j), l.removeEventListener("touchmove", A), l.removeEventListener("touchend", T), document.body.style.userSelect = "", P && (l.removeEventListener("mousedown", v), l.removeEventListener("touchstart", y));
  }
  function z(P) {
    const G = P.clientX - o, ae = P.clientY - s;
    if (!n) {
      if (e && e.start && e.start({ id: t.dataset.id, e: P }) === false || Math.abs(G) < hi && Math.abs(ae) < hi)
        return;
      if (i = t.cloneNode(true), i.style.visibility = "hidden", n = t.cloneNode(true), n.style.pointerEvents = "none", n.classList.add("wx-reorder-card"), n.style.position = "absolute", n.style.left = r.left + "px", n.style.top = r.top + "px", n.style.width = t.offsetWidth + "px", n.style["z-index"] = "1", e.keepValues) {
        const q = t.querySelectorAll("input, select"), U = n.querySelectorAll("input, select");
        q.forEach((le, re) => {
          le.value && (U[re].value = le.value);
        });
      }
      t.style.display = "none", t.parentNode.insertBefore(i, t), t.parentNode.insertBefore(n, t), _ = Rt(i, h), g = i.getBoundingClientRect();
    }
    if (n) {
      let q = r.left, U = r.top, le = 0, re = 0;
      const X = _("offset") - m("offset");
      let ve, oe = Math.min(Math.max(0, r.top + ae), r.height), ce = h ? 0 : l.parentNode.scrollTop - f;
      h ? (q = Math.min(Math.max(0, r.left + G), r.width), S || (n.style.left = q + "px"), ve = q) : (n.style.top = oe + ce + "px", ve = oe), le = ve - X;
      let fe;
      if (Math.abs(le) > 20 && !S || ce && Math.abs(le) > 0) {
        if (D = true, fe = Bt(i, le > 0), fe && (fe == t || fe == n) && (fe = Bt(t, le > 0)), !fe)
          return;
        const Se = fe.getBoundingClientRect();
        if (h && Math.abs(Se.top - g.top) >= g.height)
          return;
      } else
        h && !D && Math.abs(G) < 40 && C.height > g.height * 2 && (n.style.top = oe + "px", re = oe - g.top + C.top, Math.abs(re) > g.height / 2 && (S = true));
      if (S) {
        if (Math.abs(re) < 20)
          return;
        le = re;
        let Se = P.target;
        for (; !fe && Se != document.body; )
          Se.parentNode == l && (fe = Se), Se = Se.parentNode;
        if (!fe) {
          let _e, me = Bt(i, re > 0);
          for (; me && !fe; ) {
            const Ie = me.getBoundingClientRect();
            if (me.dataset.id && me.dataset.id != t.dataset.id) {
              _e = me;
              const je = Ie.x - C.x, Y = Ie.y - C.y;
              (ae > 0 && je + Ie.width >= q && Y > oe || ae < 0 && je <= q && Y <= oe) && (fe = me);
            }
            me = Bt(me, ae > 0);
          }
          !fe && _e && (fe = _e);
        }
      }
      if (fe) {
        const Se = Rt(fe, h && !S), _e = Se("offset") - (S ? C.top : m("offset")) + Se("size") / 2, me = S ? oe : ve, Ie = Rt(
          i,
          h && !S
        )("size");
        if (le > 0 && me + Ie > _e || le < 0 && me < _e) {
          const je = !!(le > 0 && fe), Y = !!(le < 0 && fe);
          if (e && e.move && e.move({
            id: t.dataset.id,
            top: U,
            left: q,
            before: Y,
            after: je
          }) === false)
            return;
          fe && (je ? (fe.parentNode.insertBefore(
            i,
            fe.nextElementSibling
          ), a = {
            id: t.dataset.id,
            after: fe.dataset.id
          }) : Y && (fe.parentNode.insertBefore(
            i,
            fe
          ), a = {
            id: t.dataset.id,
            before: fe.dataset.id
          }), (Y || je) && (_ = Rt(i, h), g = i.getBoundingClientRect()));
        }
        return;
      }
      e && e.move && e.move({ id: t.dataset.id, top: U, left: q });
    }
  }
  function H(P) {
    z(P);
  }
  function A(P) {
    u ? (P.preventDefault(), z(P.touches[0])) : c && (clearTimeout(c), c = null);
  }
  function T() {
    u = null, c && (clearTimeout(c), c = null), L();
  }
  function j() {
    L();
  }
  function L() {
    t && (t.style.display = "", t.classList.remove("wx-reorder")), n && (n.parentNode.removeChild(n), i.parentNode.removeChild(i), e && e.end && e.end(a || { id: t.dataset.id }) === false && t.parentNode.removeChild(t)), t = n = r = a = i = null, M();
  }
  return l.style.position !== "absolute" && (l.style.position = "relative"), l.addEventListener("mousedown", v), l.addEventListener("touchstart", y), {
    destroy() {
      M(true);
    }
  };
}
function wn() {
}
function zc(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
var ct = [];
function Ic(l, e = wn) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (zc(l, r) && (l = r, t)) {
      const a = !ct.length;
      for (const f of n)
        f[1](), ct.push(f, l);
      if (a) {
        for (let f = 0; f < ct.length; f += 2)
          ct[f][0](ct[f + 1]);
        ct.length = 0;
      }
    }
  }
  function o(r) {
    i(r(l));
  }
  function s(r, a = wn) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i) || wn), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
(/* @__PURE__ */ new Date()).valueOf();
function qc(l, e) {
  for (const t in e) {
    const n = l[t], i = e[t];
    if (!xt(n, i))
      return false;
  }
  return true;
}
function xt(l, e) {
  if (typeof l == "number" || typeof l == "string" || typeof l == "boolean" || l === null)
    return l === e;
  if (typeof l != typeof e || (l === null || e === null) && l !== e || l instanceof Date && e instanceof Date && l.getTime() !== e.getTime())
    return false;
  if (typeof l == "object")
    if (Array.isArray(l) && Array.isArray(e)) {
      if (l.length !== e.length)
        return false;
      for (let n = l.length - 1; n >= 0; n--)
        if (!xt(l[n], e[n]))
          return false;
      return true;
    } else
      return qc(l, e);
  return l === e;
}
function Vt(l, e) {
  return __spreadValues({}, l);
}
function Pc(l, e, t) {
  let n = false;
  const i = Ic(l), { set: o } = i;
  let s = Vt(l);
  return i.set = function(r) {
    xt(s, r) || (s = Vt(r), o(r));
  }, i.update = function(r) {
    const a = r(Vt(s));
    xt(s, a) || (s = Vt(a), o(a));
  }, i.reset = function(r) {
    n = false, s = {}, i.set(r);
  }, i.subscribe((r) => {
    n ? r && e(r) : n = true;
  }), i;
}
function mi(l) {
  let e, t, n, i;
  function o(r) {
    l[17](r);
  }
  let s = {
    options: (
      /*fieldOptions*/
      l[2]
    ),
    id: "select_" + Bo(),
    $$slots: {
      default: [
        jc,
        ({ option: r }) => ({ 22: r }),
        ({ option: r }) => r ? 4194304 : 0
      ]
    },
    $$scope: { ctx: l }
  };
  return (
    /*$fieldData*/
    l[3].method !== void 0 && (s.value = /*$fieldData*/
    l[3].method), t = new Ln({ props: s }), ge.push(() => et(t, "value", o)), {
      c() {
        e = F("div"), V(t.$$.fragment), b(e, "class", "wx-select svelte-wu1dsv");
      },
      m(r, a) {
        O(r, e, a), W(t, e, null), i = true;
      },
      p(r, a) {
        const f = {};
        a & /*fieldOptions*/
        4 && (f.options = /*fieldOptions*/
        r[2]), a & /*$$scope, option*/
        12582912 && (f.$$scope = { dirty: a, ctx: r }), !n && a & /*$fieldData*/
        8 && (n = true, f.value = /*$fieldData*/
        r[3].method, $e(() => n = false)), t.$set(f);
      },
      i(r) {
        i || (w(t.$$.fragment, r), i = true);
      },
      o(r) {
        k(t.$$.fragment, r), i = false;
      },
      d(r) {
        r && E(e), B(t);
      }
    }
  );
}
function jc(l) {
  let e, t = (
    /*option*/
    l[22].name + ""
  ), n;
  return {
    c() {
      e = F("div"), n = ie(t), b(e, "class", "wx-option svelte-wu1dsv"), se(
        e,
        "wx-disabled",
        /*option*/
        l[22].disabled
      );
    },
    m(i, o) {
      O(i, e, o), I(e, n);
    },
    p(i, o) {
      o & /*option*/
      4194304 && t !== (t = /*option*/
      i[22].name + "") && de(n, t), o & /*option*/
      4194304 && se(
        e,
        "wx-disabled",
        /*option*/
        i[22].disabled
      );
    },
    d(i) {
      i && E(e);
    }
  };
}
function Wc(l) {
  let e, t, n, i, o = (
    /*field*/
    l[0].label + ""
  ), s, r, a, f, u, c, d = (
    /*fieldOptions*/
    l[2].find(_i) ? (
      /*fieldOptions*/
      l[2].length > 1
    ) : !!/*fieldOptions*/
    l[2].length
  ), h, m, _, g, C, S, D = d && mi(l);
  return {
    c() {
      e = F("div"), t = F("button"), n = F("div"), i = F("div"), s = ie(o), a = J(), f = F("i"), c = J(), D && D.c(), h = J(), m = F("button"), m.innerHTML = '<i class="wx-icon wxi wxi-close svelte-wu1dsv"></i>', b(i, "class", "wx-text svelte-wu1dsv"), b(i, "title", r = /*field*/
      l[0].label), b(n, "class", "wx-label svelte-wu1dsv"), b(f, "class", u = Pe("wx-icon wxi wxi-" + /*hasFilter*/
      (l[1] ? "filter-check" : "filter-outline")) + " svelte-wu1dsv"), b(t, "class", "wx-button wx-button-filter svelte-wu1dsv"), b(t, "data-action", "filter"), b(m, "class", "wx-button wx-button-close svelte-wu1dsv"), b(e, "class", "wx-field svelte-wu1dsv"), b(e, "data-id", _ = /*field*/
      l[0].id);
    },
    m(p, y) {
      O(p, e, y), I(e, t), I(t, n), I(n, i), I(i, s), I(t, a), I(t, f), I(e, c), D && D.m(e, null), I(e, h), I(e, m), g = true, C || (S = [
        Q(
          t,
          "click",
          /*filter*/
          l[9]
        ),
        Q(
          m,
          "click",
          /*remove*/
          l[8]
        )
      ], C = true);
    },
    p(p, [y]) {
      (!g || y & /*field*/
      1) && o !== (o = /*field*/
      p[0].label + "") && de(s, o), (!g || y & /*field*/
      1 && r !== (r = /*field*/
      p[0].label)) && b(i, "title", r), (!g || y & /*hasFilter*/
      2 && u !== (u = Pe("wx-icon wxi wxi-" + /*hasFilter*/
      (p[1] ? "filter-check" : "filter-outline")) + " svelte-wu1dsv")) && b(f, "class", u), y & /*fieldOptions*/
      4 && (d = /*fieldOptions*/
      p[2].find(_i) ? (
        /*fieldOptions*/
        p[2].length > 1
      ) : !!/*fieldOptions*/
      p[2].length), d ? D ? (D.p(p, y), y & /*fieldOptions*/
      4 && w(D, 1)) : (D = mi(p), D.c(), w(D, 1), D.m(e, h)) : D && (Z(), k(D, 1, 1, () => {
        D = null;
      }), x()), (!g || y & /*field*/
      1 && _ !== (_ = /*field*/
      p[0].id)) && b(e, "data-id", _);
    },
    i(p) {
      g || (w(D), g = true);
    },
    o(p) {
      k(D), g = false;
    },
    d(p) {
      p && E(e), D && D.d(), C = false, Ae(S);
    }
  };
}
var _i = (l) => l.id === "$empty";
function Bc(l, e, t) {
  let n, i, o, s = K, r = () => (s(), s = Ri(p, (A) => t(3, o = A)), p), a, f, u;
  l.$$.on_destroy.push(() => s());
  let { area: c = "" } = e, { field: d = {} } = e, { hasFilter: h = false } = e;
  const m = Oe("wx-i18n").getGroup("pivot"), _ = Oe("pivot-store"), { methods: g, predicates: C, config: S } = _.getReactiveState();
  De(l, g, (A) => t(15, f = A)), De(l, C, (A) => t(14, a = A)), De(l, S, (A) => t(16, u = A));
  let D, p, y = [];
  function R(A) {
    r(t(4, p = Pc({ method: A }, (T) => v(T.method))));
  }
  const v = (A) => {
    A && _.exec("update-field", {
      id: d.id,
      method: A === "$empty" ? null : A,
      area: d.area
    });
  }, M = () => {
    _.exec("delete-field", { area: d.area, id: d.id });
  }, z = () => {
    _.exec("open-filter", { id: d.id, area: d.area });
  };
  function H(A) {
    l.$$.not_equal(o.method, A) && (o.method = A, p.set(o));
  }
  return l.$$set = (A) => {
    "area" in A && t(10, c = A.area), "field" in A && t(0, d = A.field), "hasFilter" in A && t(1, h = A.hasFilter);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*$config, area*/
    66560 && t(12, n = u[c]), l.$$.dirty & /*area, $methods, $predicates*/
    50176 && t(13, i = c === "values" ? f : a), l.$$.dirty & /*field, $fieldData, fieldMethod, options, fieldOptions, area, fields*/
    15373) {
      t(2, y = []), t(11, D = d.method || "$empty"), o ? D !== o.method && setTimeout(() => R(D)) : R(D);
      for (const A in i) {
        const T = i[A];
        if ((T.type && (T.type === d.type || T.type.includes(d.type)) || !T.type && d.type == "number") && (!T.field || T.field && T.field(d.base || d.field))) {
          const j = typeof T.label == "function" ? T.label(d.type) : T.label || A;
          y.push({ id: A, name: m(j) });
        }
      }
      if (c !== "values") {
        const A = n.filter((T) => T.type === d.type);
        y.forEach((T) => {
          T.id !== D && A.findIndex((j) => (j.method || "$empty") === T.id) !== -1 && (T.disabled = true);
        });
      }
    }
  }, [
    d,
    h,
    y,
    o,
    p,
    g,
    C,
    S,
    M,
    z,
    c,
    D,
    n,
    i,
    a,
    f,
    u,
    H
  ];
}
var Vc = class extends te {
  constructor(e) {
    super(), ee(this, e, Bc, Wc, $, { area: 10, field: 0, hasFilter: 1 });
  }
};
function Yc(l) {
  let e;
  const t = (
    /*#slots*/
    l[2].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[1],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = true;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      2) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[1],
        e ? be(
          t,
          /*$$scope*/
          i[1],
          o,
          null
        ) : ye(
          /*$$scope*/
          i[1]
        ),
        null
      );
    },
    i(i) {
      e || (w(n, i), e = true);
    },
    o(i) {
      k(n, i), e = false;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Gc(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[2].default
  ), i = pe(
    n,
    l,
    /*$$scope*/
    l[1],
    null
  );
  return {
    c() {
      e = F("div"), i && i.c(), b(e, "class", "wx-wrapper svelte-sf0qvg");
    },
    m(o, s) {
      O(o, e, s), i && i.m(e, null), t = true;
    },
    p(o, s) {
      i && i.p && (!t || s & /*$$scope*/
      2) && we(
        i,
        n,
        o,
        /*$$scope*/
        o[1],
        t ? be(
          n,
          /*$$scope*/
          o[1],
          s,
          null
        ) : ye(
          /*$$scope*/
          o[1]
        ),
        null
      );
    },
    i(o) {
      t || (w(i, o), t = true);
    },
    o(o) {
      k(i, o), t = false;
    },
    d(o) {
      o && E(e), i && i.d(o);
    }
  };
}
function Uc(l) {
  let e, t, n, i;
  const o = [Gc, Yc], s = [];
  function r(a, f) {
    return (
      /*scrollable*/
      a[0] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = he();
    },
    m(a, f) {
      s[e].m(a, f), O(a, n, f), i = true;
    },
    p(a, [f]) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Z(), k(s[u], 1, 1, () => {
        s[u] = null;
      }), x(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), w(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (w(t), i = true);
    },
    o(a) {
      k(t), i = false;
    },
    d(a) {
      a && E(n), s[e].d(a);
    }
  };
}
function Kc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { scrollable: o } = e;
  return l.$$set = (s) => {
    "scrollable" in s && t(0, o = s.scrollable), "$$scope" in s && t(1, i = s.$$scope);
  }, [o, i, n];
}
var Xc = class extends te {
  constructor(e) {
    super(), ee(this, e, Kc, Uc, $, { scrollable: 0 });
  }
};
function gi(l, e, t) {
  const n = l.slice();
  return n[13] = e[t], n;
}
function pi(l, e) {
  let t, n, i;
  return n = new Vc({
    props: {
      area: (
        /*area*/
        e[0]
      ),
      field: (
        /*field*/
        e[13]
      ),
      hasFilter: (
        /*hasFilter*/
        e[3][
          /*field*/
          e[13].id
        ]
      )
    }
  }), {
    key: l,
    first: null,
    c() {
      t = he(), V(n.$$.fragment), this.first = t;
    },
    m(o, s) {
      O(o, t, s), W(n, o, s), i = true;
    },
    p(o, s) {
      e = o;
      const r = {};
      s & /*area*/
      1 && (r.area = /*area*/
      e[0]), s & /*fields*/
      4 && (r.field = /*field*/
      e[13]), s & /*hasFilter, fields*/
      12 && (r.hasFilter = /*hasFilter*/
      e[3][
        /*field*/
        e[13].id
      ]), n.$set(r);
    },
    i(o) {
      i || (w(n.$$.fragment, o), i = true);
    },
    o(o) {
      k(n.$$.fragment, o), i = false;
    },
    d(o) {
      o && E(t), B(n, o);
    }
  };
}
function Jc(l) {
  let e, t = [], n = /* @__PURE__ */ new Map(), i, o, s, r, a = ke(
    /*fields*/
    l[2]
  );
  const f = (u) => (
    /*field*/
    u[13].id
  );
  for (let u = 0; u < a.length; u += 1) {
    let c = gi(l, a, u), d = f(c);
    n.set(d, t[u] = pi(d, c));
  }
  return {
    c() {
      e = F("div");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      b(e, "class", "wx-fields svelte-vbeb61");
    },
    m(u, c) {
      O(u, e, c);
      for (let d = 0; d < t.length; d += 1)
        t[d] && t[d].m(e, null);
      o = true, s || (r = ze(i = Lc.call(null, e, {
        byX: (
          /*direction*/
          l[1] === "row"
        ),
        end: (
          /*onDrop*/
          l[8]
        ),
        keepValues: true
      })), s = true);
    },
    p(u, c) {
      c & /*area, fields, hasFilter*/
      13 && (a = ke(
        /*fields*/
        u[2]
      ), Z(), t = it(t, c, f, 1, u, a, n, e, gt, pi, null, gi), x()), i && Ye(i.update) && c & /*direction*/
      2 && i.update.call(null, {
        byX: (
          /*direction*/
          u[1] === "row"
        ),
        end: (
          /*onDrop*/
          u[8]
        ),
        keepValues: true
      });
    },
    i(u) {
      if (!o) {
        for (let c = 0; c < a.length; c += 1)
          w(t[c]);
        o = true;
      }
    },
    o(u) {
      for (let c = 0; c < t.length; c += 1)
        k(t[c]);
      o = false;
    },
    d(u) {
      u && E(e);
      for (let c = 0; c < t.length; c += 1)
        t[c].d();
      s = false, r();
    }
  };
}
function Qc(l) {
  let e, t, n = (
    /*_*/
    l[5](
      /*areaLabel*/
      l[4]
    ) + ""
  ), i, o, s, r, a, f, u, c, d, h, m;
  return f = new Xc({
    props: {
      scrollable: (
        /*direction*/
        l[1] !== "row"
      ),
      $$slots: { default: [Jc] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = F("div"), t = F("span"), i = ie(n), o = J(), s = F("div"), r = F("button"), r.innerHTML = '<i class="wx-icon wxi wxi-plus svelte-vbeb61"></i>', a = J(), V(f.$$.fragment), b(t, "class", "wx-field-label svelte-vbeb61"), b(r, "class", "wx-button svelte-vbeb61"), b(s, "class", u = "wx-list wx-" + /*direction*/
      l[1] + " svelte-vbeb61"), b(e, "class", c = "wx-field-list wx-" + /*area*/
      l[0] + " svelte-vbeb61");
    },
    m(_, g) {
      O(_, e, g), I(e, t), I(t, i), I(e, o), I(e, s), I(s, r), I(s, a), W(f, s, null), d = true, h || (m = Q(
        r,
        "click",
        /*add*/
        l[7]
      ), h = true);
    },
    p(_, [g]) {
      (!d || g & /*areaLabel*/
      16) && n !== (n = /*_*/
      _[5](
        /*areaLabel*/
        _[4]
      ) + "") && de(i, n);
      const C = {};
      g & /*direction*/
      2 && (C.scrollable = /*direction*/
      _[1] !== "row"), g & /*$$scope, direction, fields, area, hasFilter*/
      65551 && (C.$$scope = { dirty: g, ctx: _ }), f.$set(C), (!d || g & /*direction*/
      2 && u !== (u = "wx-list wx-" + /*direction*/
      _[1] + " svelte-vbeb61")) && b(s, "class", u), (!d || g & /*area*/
      1 && c !== (c = "wx-field-list wx-" + /*area*/
      _[0] + " svelte-vbeb61")) && b(e, "class", c);
    },
    i(_) {
      d || (w(f.$$.fragment, _), d = true);
    },
    o(_) {
      k(f.$$.fragment, _), d = false;
    },
    d(_) {
      _ && E(e), B(f), h = false, m();
    }
  };
}
function Zc(l, e, t) {
  let n, i, o, { area: s = "" } = e, { direction: r = "row" } = e, a = {};
  const f = {}, u = He(), c = Oe("wx-i18n").getGroup("pivot"), d = Oe("pivot-store"), { config: h } = d.getReactiveState();
  De(l, h, (g) => t(10, o = g));
  const m = (g) => {
    u("show-menu", { event: g, context: s }), g.preventDefault();
  };
  function _(g) {
    const { id: C, before: S, after: D } = g;
    (D || S) && d.exec("move-field", { area: s, id: C, before: S, after: D });
  }
  return l.$$set = (g) => {
    "area" in g && t(0, s = g.area), "direction" in g && t(1, r = g.direction);
  }, l.$$.update = () => {
    l.$$.dirty & /*area*/
    1 && t(4, n = s.charAt(0).toUpperCase() + s.slice(1)), l.$$.dirty & /*$config, area*/
    1025 && t(2, i = o._ready ? o[s] : []), l.$$.dirty & /*$config, fields, filters*/
    1540 && (t(9, a = o.filters), i.forEach((g) => {
      const C = g.base ? `${g.method}(${g.base})` : g.field;
      t(3, f[g.id] = !!a[C], f);
    }));
  }, [
    s,
    r,
    i,
    f,
    n,
    c,
    h,
    m,
    _,
    a,
    o
  ];
}
var En = class extends te {
  constructor(e) {
    super(), ee(this, e, Zc, Qc, $, { area: 0, direction: 1 });
  }
};
function xc(l) {
  let e = (
    /*_*/
    l[1]("Show settings") + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      O(n, t, i);
    },
    p: K,
    d(n) {
      n && E(t);
    }
  };
}
function $c(l) {
  let e;
  return {
    c() {
      e = F("span"), e.textContent = `${/*_*/
      l[1]("Hide settings")}`, b(e, "slot", "active");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: K,
    d(t) {
      t && E(e);
    }
  };
}
function ed(l) {
  let e, t, n;
  return t = new Wa({
    props: {
      click: (
        /*toggleConfigPanel*/
        l[3]
      ),
      type: "toggle",
      value: (
        /*$configPanel*/
        l[0]
      ),
      $$slots: {
        active: [$c],
        default: [xc]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = F("div"), V(t.$$.fragment), b(e, "class", "wx-toolbar svelte-9g7sii");
    },
    m(i, o) {
      O(i, e, o), W(t, e, null), n = true;
    },
    p(i, [o]) {
      const s = {};
      o & /*$configPanel*/
      1 && (s.value = /*$configPanel*/
      i[0]), o & /*$$scope*/
      32 && (s.$$scope = { dirty: o, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (w(t.$$.fragment, i), n = true);
    },
    o(i) {
      k(t.$$.fragment, i), n = false;
    },
    d(i) {
      i && E(e), B(t);
    }
  };
}
function td(l, e, t) {
  let n;
  const i = Oe("wx-i18n").getGroup("pivot"), o = Oe("pivot-store"), { configPanel: s } = o.getReactiveState();
  De(l, s, (a) => t(0, n = a));
  function r(a) {
    o.exec("show-config-panel", { mode: !n }), a.preventDefault();
  }
  return [n, i, s, r];
}
var nd = class extends te {
  constructor(e) {
    super(), ee(this, e, td, ed, $, {});
  }
};
function bi(l) {
  let e, t, n, i;
  e = new nd({});
  let o = (
    /*$configPanel*/
    l[1] && wi(l)
  );
  return {
    c() {
      V(e.$$.fragment), t = J(), o && o.c(), n = he();
    },
    m(s, r) {
      W(e, s, r), O(s, t, r), o && o.m(s, r), O(s, n, r), i = true;
    },
    p(s, r) {
      s[1] ? o ? r & /*$configPanel*/
      2 && w(o, 1) : (o = wi(s), o.c(), w(o, 1), o.m(n.parentNode, n)) : o && (Z(), k(o, 1, 1, () => {
        o = null;
      }), x());
    },
    i(s) {
      i || (w(e.$$.fragment, s), w(o), i = true);
    },
    o(s) {
      k(e.$$.fragment, s), k(o), i = false;
    },
    d(s) {
      s && (E(t), E(n)), B(e, s), o && o.d(s);
    }
  };
}
function wi(l) {
  let e, t, n, i;
  return e = new En({ props: { area: "values" } }), e.$on(
    "show-menu",
    /*show_menu_handler*/
    l[5]
  ), n = new En({ props: { area: "columns" } }), n.$on(
    "show-menu",
    /*show_menu_handler_1*/
    l[6]
  ), {
    c() {
      V(e.$$.fragment), t = J(), V(n.$$.fragment);
    },
    m(o, s) {
      W(e, o, s), O(o, t, s), W(n, o, s), i = true;
    },
    i(o) {
      i || (w(e.$$.fragment, o), w(n.$$.fragment, o), i = true);
    },
    o(o) {
      k(e.$$.fragment, o), k(n.$$.fragment, o), i = false;
    },
    d(o) {
      o && E(t), B(e, o), B(n, o);
    }
  };
}
function yi(l) {
  let e, t;
  return e = new En({
    props: { area: "rows", direction: "column" }
  }), e.$on(
    "show-menu",
    /*show_menu_handler_2*/
    l[7]
  ), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function ld(l) {
  let e, t, n, i, o, s = !/*readonly*/
  l[0] && bi(l), r = !/*readonly*/
  l[0] && /*$configPanel*/
  l[1] && yi(l);
  const a = (
    /*#slots*/
    l[4].default
  ), f = pe(
    a,
    l,
    /*$$scope*/
    l[3],
    null
  );
  return {
    c() {
      e = F("div"), s && s.c(), t = J(), n = F("div"), r && r.c(), i = J(), f && f.c(), b(n, "class", "wx-sublayout svelte-yr3euc"), b(e, "class", "wx-wrapper svelte-yr3euc");
    },
    m(u, c) {
      O(u, e, c), s && s.m(e, null), I(e, t), I(e, n), r && r.m(n, null), I(n, i), f && f.m(n, null), o = true;
    },
    p(u, [c]) {
      u[0] ? s && (Z(), k(s, 1, 1, () => {
        s = null;
      }), x()) : s ? (s.p(u, c), c & /*readonly*/
      1 && w(s, 1)) : (s = bi(u), s.c(), w(s, 1), s.m(e, t)), !/*readonly*/
      u[0] && /*$configPanel*/
      u[1] ? r ? c & /*readonly, $configPanel*/
      3 && w(r, 1) : (r = yi(u), r.c(), w(r, 1), r.m(n, i)) : r && (Z(), k(r, 1, 1, () => {
        r = null;
      }), x()), f && f.p && (!o || c & /*$$scope*/
      8) && we(
        f,
        a,
        u,
        /*$$scope*/
        u[3],
        o ? be(
          a,
          /*$$scope*/
          u[3],
          c,
          null
        ) : ye(
          /*$$scope*/
          u[3]
        ),
        null
      );
    },
    i(u) {
      o || (w(s), w(r), w(f, u), o = true);
    },
    o(u) {
      k(s), k(r), k(f, u), o = false;
    },
    d(u) {
      u && E(e), s && s.d(), r && r.d(), f && f.d(u);
    }
  };
}
function id(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { readonly: s } = e;
  const r = Oe("pivot-store"), { configPanel: a } = r.getReactiveState();
  De(l, a, (d) => t(1, n = d));
  function f(d) {
    Ne.call(this, l, d);
  }
  function u(d) {
    Ne.call(this, l, d);
  }
  function c(d) {
    Ne.call(this, l, d);
  }
  return l.$$set = (d) => {
    "readonly" in d && t(0, s = d.readonly), "$$scope" in d && t(3, o = d.$$scope);
  }, [
    s,
    n,
    a,
    o,
    i,
    f,
    u,
    c
  ];
}
var od = class extends te {
  constructor(e) {
    super(), ee(this, e, id, ld, $, { readonly: 0 });
  }
};
var sd = {
  auto: true,
  maxRows: 20,
  firstOnly: true
};
var rd = (l, e, t) => {
  const n = [];
  l.forEach((i) => {
    if (i.autowidth) {
      const o = typeof e.autoWidth.firstOnly > "u" ? true : e.autoWidth.firstOnly, s = n.find((a) => a.field === i.field);
      let r = __spreadValues(__spreadValues({}, sd), e.autoWidth);
      delete r.columns, o && s && (r = { width: s.width }), t.exec("resize-column", __spreadValues({
        id: i.id
      }, r)), s || n.push({
        field: i.field,
        width: i.width
      }), delete i.autowidth;
    }
  });
};
var ad = (l) => {
  for (; l; ) {
    l = l.parentNode;
    const e = getComputedStyle(l).position;
    if (l === document.body || e === "relative" || e === "absolute")
      return l;
  }
  return null;
};
function fd(l) {
  let e, t, n, i;
  const o = [
    /*$tableConfig*/
    l[8]
  ];
  function s(a) {
    l[26](a);
  }
  let r = {};
  for (let a = 0; a < o.length; a += 1)
    r = Ee(r, o[a]);
  return (
    /*tableAPI*/
    l[0] !== void 0 && (r.api = /*tableAPI*/
    l[0]), t = new no({ props: r }), ge.push(() => et(t, "api", s)), {
      c() {
        e = F("div"), V(t.$$.fragment), b(e, "class", "wx-grid-wrapper svelte-r7m0jv");
      },
      m(a, f) {
        O(a, e, f), W(t, e, null), i = true;
      },
      p(a, f) {
        const u = f[0] & /*$tableConfig*/
        256 ? Ai(o, [Hi(
          /*$tableConfig*/
          a[8]
        )]) : {};
        !n && f[0] & /*tableAPI*/
        1 && (n = true, u.api = /*tableAPI*/
        a[0], $e(() => n = false)), t.$set(u);
      },
      i(a) {
        i || (w(t.$$.fragment, a), i = true);
      },
      o(a) {
        k(t.$$.fragment, a), i = false;
      },
      d(a) {
        a && E(e), B(t);
      }
    }
  );
}
function ud(l) {
  let e, t, n;
  return t = new no({
    props: { overlay: (
      /*overlayText*/
      l[7]
    ) }
  }), {
    c() {
      e = F("div"), V(t.$$.fragment), b(e, "class", "wx-grid-wrapper wx-empty svelte-r7m0jv");
    },
    m(i, o) {
      O(i, e, o), W(t, e, null), n = true;
    },
    p(i, o) {
      const s = {};
      o[0] & /*overlayText*/
      128 && (s.overlay = /*overlayText*/
      i[7]), t.$set(s);
    },
    i(i) {
      n || (w(t.$$.fragment, i), n = true);
    },
    o(i) {
      k(t.$$.fragment, i), n = false;
    },
    d(i) {
      i && E(e), B(t);
    }
  };
}
function cd(l) {
  let e, t, n, i;
  const o = [ud, fd], s = [];
  function r(a, f) {
    return (
      /*isEmpty*/
      a[6] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = he();
    },
    m(a, f) {
      s[e].m(a, f), O(a, n, f), i = true;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Z(), k(s[u], 1, 1, () => {
        s[u] = null;
      }), x(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), w(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (w(t), i = true);
    },
    o(a) {
      k(t), i = false;
    },
    d(a) {
      a && E(n), s[e].d(a);
    }
  };
}
function ki(l) {
  let e, t;
  return e = new va({
    props: {
      left: (
        /*filterPos*/
        l[4].left
      ),
      top: (
        /*filterPos*/
        l[4].top
      ),
      cancel: (
        /*cancel*/
        l[20]
      ),
      $$slots: { default: [dd] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i[0] & /*filterPos*/
      16 && (o.left = /*filterPos*/
      n[4].left), i[0] & /*filterPos*/
      16 && (o.top = /*filterPos*/
      n[4].top), i[0] & /*$activeFilter*/
      8 | i[1] & /*$$scope*/
      16 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function dd(l) {
  let e, t, n;
  const i = [
    /*$activeFilter*/
    l[3]
  ];
  let o = {};
  for (let s = 0; s < i.length; s += 1)
    o = Ee(o, i[s]);
  return t = new qf({ props: o }), t.$on(
    "apply",
    /*applyFilter*/
    l[21]
  ), t.$on(
    "cancel",
    /*cancel*/
    l[20]
  ), {
    c() {
      e = F("div"), V(t.$$.fragment), b(e, "class", "wx-filter-popup svelte-r7m0jv");
    },
    m(s, r) {
      O(s, e, r), W(t, e, null), n = true;
    },
    p(s, r) {
      const a = r[0] & /*$activeFilter*/
      8 ? Ai(i, [Hi(
        /*$activeFilter*/
        s[3]
      )]) : {};
      t.$set(a);
    },
    i(s) {
      n || (w(t.$$.fragment, s), n = true);
    },
    o(s) {
      k(t.$$.fragment, s), n = false;
    },
    d(s) {
      s && E(e), B(t);
    }
  };
}
function hd(l) {
  let e, t, n, i, o, s, r, a, f, u;
  t = new od({
    props: {
      readonly: (
        /*readonly*/
        l[1]
      ),
      $$slots: { default: [cd] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "action",
    /*actions*/
    l[17]
  ), t.$on(
    "show-menu",
    /*show_menu_handler*/
    l[27]
  ), t.$on(
    "show-filter",
    /*show_filter_handler*/
    l[28]
  );
  function c(m) {
    l[29](m);
  }
  let d = { options: (
    /*$fields*/
    l[9].map(vi)
  ) };
  l[5] !== void 0 && (d.handler = /*showMenu*/
  l[5]), i = new Cf({ props: d }), ge.push(() => et(i, "handler", c)), i.$on(
    "click",
    /*menuAction*/
    l[18]
  );
  let h = (
    /*$activeFilter*/
    l[3] && ki(l)
  );
  return {
    c() {
      e = F("div"), V(t.$$.fragment), n = J(), V(i.$$.fragment), s = J(), h && h.c(), r = he(), b(e, "class", "wx-pivot svelte-r7m0jv");
    },
    m(m, _) {
      O(m, e, _), W(t, e, null), I(e, n), W(i, e, null), l[30](e), O(m, s, _), h && h.m(m, _), O(m, r, _), a = true, f || (u = ze(tf.call(null, e)), f = true);
    },
    p(m, _) {
      const g = {};
      _[0] & /*readonly*/
      2 && (g.readonly = /*readonly*/
      m[1]), _[0] & /*overlayText, isEmpty, $tableConfig, tableAPI*/
      449 | _[1] & /*$$scope*/
      16 && (g.$$scope = { dirty: _, ctx: m }), t.$set(g);
      const C = {};
      _[0] & /*$fields*/
      512 && (C.options = /*$fields*/
      m[9].map(vi)), !o && _[0] & /*showMenu*/
      32 && (o = true, C.handler = /*showMenu*/
      m[5], $e(() => o = false)), i.$set(C), /*$activeFilter*/
      m[3] ? h ? (h.p(m, _), _[0] & /*$activeFilter*/
      8 && w(h, 1)) : (h = ki(m), h.c(), w(h, 1), h.m(r.parentNode, r)) : h && (Z(), k(h, 1, 1, () => {
        h = null;
      }), x());
    },
    i(m) {
      a || (w(t.$$.fragment, m), w(i.$$.fragment, m), w(h), a = true);
    },
    o(m) {
      k(t.$$.fragment, m), k(i.$$.fragment, m), k(h), a = false;
    },
    d(m) {
      m && (E(e), E(s), E(r)), B(t), B(i), l[30](null), h && h.d(m), f = false, u();
    }
  };
}
var vi = (l) => ({ id: l.id, text: l.label, fType: l.type });
function md(l, e, t) {
  let n, i, o, s, r, a, f, u, c, { readonly: d } = e, { tableAPI: h } = e;
  const m = Oe("pivot-store"), g = Oe("wx-i18n").getGroup("pivot"), { fields: C, activeFilter: S, columnShape: D, tableConfig: p, methods: y, config: R, configPanel: v } = m.getReactiveState();
  De(l, C, (X) => t(9, c = X)), De(l, S, (X) => t(3, a = X)), De(l, D, (X) => t(25, f = X)), De(l, p, (X) => t(8, u = X)), De(l, y, (X) => t(31, o = X)), De(l, R, (X) => t(23, s = X)), De(l, v, (X) => t(24, r = X));
  const M = { left: 0, top: 0 };
  let z;
  const H = (X) => {
    m.exec(X.detail.action, X.detail.data);
  };
  let A;
  const T = (X) => {
    const { context: ve, action: oe } = X.detail;
    if (oe) {
      let ce = null;
      ve === "values" && (ce = Bi(o, { id: oe.id, type: oe.fType })), m.exec("add-field", { area: ve, field: oe.id, method: ce });
    }
  }, j = (X) => {
    m.exec("open-filter", { id: X.detail.id, area: X.detail.area });
  }, L = () => {
    m.exec("open-filter", { id: null });
  }, P = (X) => {
    m.exec("apply-filter", { rule: X.detail.rule }), L();
  };
  let G;
  function ae(X) {
    h = X, t(0, h);
  }
  const q = (X) => A(X.detail.event, X.detail.context), U = (X) => {
    j(X);
  };
  function le(X) {
    A = X, t(5, A);
  }
  function re(X) {
    ge[X ? "unshift" : "push"](() => {
      G = X, t(2, G);
    });
  }
  return l.$$set = (X) => {
    "readonly" in X && t(1, d = X.readonly), "tableAPI" in X && t(0, h = X.tableAPI);
  }, l.$$.update = () => {
    if (l.$$.dirty[0] & /*$columnShape, tableAPI, colSubscribe, $activeFilter, root*/
    37748749 && (f.autoWidth?.columns && h && !z && t(22, z = h.getReactiveState().flatData.subscribe(() => {
      rd(h.getState().columns, f, h);
    })), a)) {
      const ve = G.querySelector(`[data-id="${a.id}"]`).getBoundingClientRect(), oe = ad(G), ce = oe.getBoundingClientRect();
      t(4, M.left = ve.left + oe.scrollLeft - ce.left, M), t(4, M.top = ve.bottom + oe.scrollTop - ce.top, M);
    }
    l.$$.dirty[0] & /*$configPanel*/
    16777216 && t(7, n = g(r ? "Click the + buttons to add data" : 'Click on "Show settings" to see the available configuration options')), l.$$.dirty[0] & /*$config*/
    8388608 && t(6, i = !s?.columns?.length && !s?.rows?.length && !s?.values?.length);
  }, [
    h,
    d,
    G,
    a,
    M,
    A,
    i,
    n,
    u,
    c,
    C,
    S,
    D,
    p,
    y,
    R,
    v,
    H,
    T,
    j,
    L,
    P,
    z,
    s,
    r,
    f,
    ae,
    q,
    U,
    le,
    re
  ];
}
var _d = class extends te {
  constructor(e) {
    super(), ee(this, e, md, hd, $, { readonly: 1, tableAPI: 0 }, null, [-1, -1]);
  }
};
var io = {
  sort: true
};
var gd = {
  collapsible: false,
  vertical: false,
  template: (l, e, t) => l + (t ? ` (${t})` : "")
};
var pd = {
  rowHeight: 34,
  headerHeight: 30,
  footerHeight: 30,
  colWidth: 150
};
function oo(l, e) {
  const { calendar: t, formats: n, pivot: i } = e.getRaw(), o = i.dateFormat || n.dateFormat;
  return l instanceof Date ? At(o, t)(l) : l;
}
var bd = {
  $empty: (l, e) => oo(l, e),
  week: (l, e) => {
    const t = e.getGroup("pivot");
    return l < 10 && (l = "0" + l), t("W") + l;
  },
  month: (l, e) => e.getRaw().calendar.monthFull[l],
  quarter: (l, e) => e.getGroup("pivot")("Q") + l
};
function wd(l) {
  return __spreadValues(__spreadValues({}, io), l);
}
function yd(l, e) {
  const t = e.getGroup("pivot"), n = __spreadValues(__spreadValues({}, gd), l), i = n.template;
  return n.template = (o, s, r) => ((s == "$totalFooter" || s == "$totalColumn") && (o = t(o)), i(o, s, r && t(r))), n;
}
function kd(l, e, t) {
  const n = __spreadValues({}, l);
  n.sizes = __spreadValues(__spreadValues({}, pd), l.sizes), n.totalRow = typeof n.totalRow < "u" ? n.totalRow : false;
  const i = n.templates || {};
  return e.forEach((o) => {
    let s = i[o.id];
    s ? i[o.id] = (r, a) => s(r, a, t) : o.type == "date" && (i[o.id] = (r) => oo(r, t));
  }), Object.keys(i).length && (n.templates = i), n;
}
function vd(l, e) {
  l = __spreadValues({}, l);
  for (const t in l) {
    const n = l[t], i = n.template || bd[t];
    l[t] = __spreadValues({}, n), i && (l[t].template = (o) => i(o, e));
  }
  return l;
}
function Sd() {
  const l = {
    number: {},
    text: {},
    date: {},
    tuple: {}
  };
  return Rn().forEach((t) => {
    t.type.forEach((n) => {
      l[n][t.id] = t.handler;
    });
  }), vs.forEach((t) => {
    t.type.forEach((n) => {
      l[n][t.id] = t.handler;
    });
  }), l;
}
function Cd(l) {
  let e, t, n;
  function i(s) {
    l[15](s);
  }
  let o = { readonly: (
    /*readonly*/
    l[1]
  ) };
  return (
    /*tableAPI*/
    l[0] !== void 0 && (o.tableAPI = /*tableAPI*/
    l[0]), e = new _d({ props: o }), ge.push(() => et(e, "tableAPI", i)), {
      c() {
        V(e.$$.fragment);
      },
      m(s, r) {
        W(e, s, r), n = true;
      },
      p(s, [r]) {
        const a = {};
        r & /*readonly*/
        2 && (a.readonly = /*readonly*/
        s[1]), !t && r & /*tableAPI*/
        1 && (t = true, a.tableAPI = /*tableAPI*/
        s[0], $e(() => t = false)), e.$set(a);
      },
      i(s) {
        n || (w(e.$$.fragment, s), n = true);
      },
      o(s) {
        k(e.$$.fragment, s), n = false;
      },
      d(s) {
        B(e, s);
      }
    }
  );
}
function Md(l, e, t) {
  let { data: n = [] } = e, { config: i = {} } = e, { fields: o = [] } = e, { tableShape: s = {} } = e, { readonly: r = false } = e, { columnShape: a = io } = e, { limits: f = {} } = e, { methods: u = Rs } = e, { predicates: c = Ds } = e, { configPanel: d = true } = e, { headerShape: h = {} } = e, { tableAPI: m } = e, { init: _ = null } = e;
  const g = He(), C = new Ms(Ni), S = __spreadValues(__spreadValues(__spreadValues({}, Tn), Gi), Yi);
  let D = Oe("wx-i18n");
  D ? D = D.extend(S, true) : D = Fn(S), Gt("wx-i18n", D);
  let p = new Vo(g), y = C.in;
  y.setNext(p);
  const R = {
    // state
    getState: C.getState.bind(C),
    getReactiveState: C.getReactive.bind(C),
    getStores: () => ({ data: C }),
    // events
    exec: y.exec,
    setNext: (M) => p = p.setNext(M),
    intercept: y.intercept.bind(y),
    on: y.on.bind(y),
    detach: y.detach.bind(y),
    // additional methods
    getTable: (M) => M ? new Promise((z) => setTimeout(() => z(m), 1)) : m
  };
  Gt("pivot-store", {
    getReactiveState: C.getReactive.bind(C),
    exec: y.exec.bind(y),
    on: y.on.bind(y)
  });
  function v(M) {
    m = M, t(0, m);
  }
  return l.$$set = (M) => {
    "data" in M && t(3, n = M.data), "config" in M && t(4, i = M.config), "fields" in M && t(5, o = M.fields), "tableShape" in M && t(6, s = M.tableShape), "readonly" in M && t(1, r = M.readonly), "columnShape" in M && t(7, a = M.columnShape), "limits" in M && t(8, f = M.limits), "methods" in M && t(9, u = M.methods), "predicates" in M && t(10, c = M.predicates), "configPanel" in M && t(11, d = M.configPanel), "headerShape" in M && t(12, h = M.headerShape), "tableAPI" in M && t(0, m = M.tableAPI), "init" in M && t(2, _ = M.init);
  }, l.$$.update = () => {
    l.$$.dirty & /*data, config, fields, methods, columnShape, limits, tableShape, locale, headerShape, predicates, configPanel, init*/
    24572 && (C.init({
      data: n,
      config: i,
      fields: o,
      methods: u,
      activeFilter: null,
      columnShape: wd(a),
      limits: f,
      tableShape: kd(s, o, D),
      headerShape: yd(h, D),
      predicates: vd(c, D),
      filters: Sd(),
      configPanel: d
    }), _ && (_(R), t(2, _ = null)));
  }, [
    m,
    r,
    _,
    n,
    i,
    o,
    s,
    a,
    f,
    u,
    c,
    d,
    h,
    R,
    D,
    v
  ];
}
var Rd = class extends te {
  constructor(e) {
    super(), ee(this, e, Md, Cd, $, {
      data: 3,
      config: 4,
      fields: 5,
      tableShape: 6,
      readonly: 1,
      columnShape: 7,
      limits: 8,
      methods: 9,
      predicates: 10,
      configPanel: 11,
      headerShape: 12,
      tableAPI: 0,
      init: 2,
      api: 13
    });
  }
  get api() {
    return this.$$.ctx[13];
  }
};
function Dd(l) {
  let e, t, n, i;
  return e = new lo({ props: { fonts: (
    /*fonts*/
    l[0]
  ) } }), n = new Vf({ props: { fonts: (
    /*fonts*/
    l[0]
  ) } }), {
    c() {
      V(e.$$.fragment), t = J(), V(n.$$.fragment);
    },
    m(o, s) {
      W(e, o, s), O(o, t, s), W(n, o, s), i = true;
    },
    p(o, s) {
      const r = {};
      s & /*fonts*/
      1 && (r.fonts = /*fonts*/
      o[0]), e.$set(r);
      const a = {};
      s & /*fonts*/
      1 && (a.fonts = /*fonts*/
      o[0]), n.$set(a);
    },
    i(o) {
      i || (w(e.$$.fragment, o), w(n.$$.fragment, o), i = true);
    },
    o(o) {
      k(e.$$.fragment, o), k(n.$$.fragment, o), i = false;
    },
    d(o) {
      o && E(t), B(e, o), B(n, o);
    }
  };
}
function Ed(l) {
  let e, t;
  return e = new lo({
    props: {
      fonts: (
        /*fonts*/
        l[0]
      ),
      $$slots: { default: [Od] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(n, i) {
      W(e, n, i), t = true;
    },
    p(n, i) {
      const o = {};
      i & /*fonts*/
      1 && (o.fonts = /*fonts*/
      n[0]), i & /*$$scope*/
      8 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (w(e.$$.fragment, n), t = true);
    },
    o(n) {
      k(e.$$.fragment, n), t = false;
    },
    d(n) {
      B(e, n);
    }
  };
}
function Od(l) {
  let e;
  const t = (
    /*#slots*/
    l[2].default
  ), n = pe(
    t,
    l,
    /*$$scope*/
    l[3],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = true;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      8) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? be(
          t,
          /*$$scope*/
          i[3],
          o,
          null
        ) : ye(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (w(n, i), e = true);
    },
    o(i) {
      k(n, i), e = false;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Ad(l) {
  let e, t, n, i;
  const o = [Ed, Dd], s = [];
  function r(a, f) {
    return (
      /*SLOTS*/
      a[1] && /*SLOTS*/
      a[1].default ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = he();
    },
    m(a, f) {
      s[e].m(a, f), O(a, n, f), i = true;
    },
    p(a, [f]) {
      t.p(a, f);
    },
    i(a) {
      i || (w(t), i = true);
    },
    o(a) {
      k(t), i = false;
    },
    d(a) {
      a && E(n), s[e].d(a);
    }
  };
}
function Hd(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const o = e.$$slots;
  let { fonts: s = true } = e;
  return l.$$set = (r) => {
    t(4, e = Ee(Ee({}, e), Fe(r))), "fonts" in r && t(0, s = r.fonts), "$$scope" in r && t(3, i = r.$$scope);
  }, e = Fe(e), [s, o, n, i];
}
var Nd = class extends te {
  constructor(e) {
    super(), ee(this, e, Hd, Ad, $, { fonts: 0 });
  }
};
(/* @__PURE__ */ new Date()).valueOf();
function Si(l) {
  return l && typeof l == "object" && !Array.isArray(l);
}
function On(l, e) {
  for (const t in e) {
    const n = e[t];
    Si(l[t]) && Si(n) ? l[t] = On(
      __spreadValues({}, l[t]),
      e[t]
    ) : l[t] = e[t];
  }
  return l;
}
function so(l) {
  return {
    getGroup(e) {
      const t = l[e];
      return (n) => t && t[n] || n;
    },
    getRaw() {
      return l;
    },
    extend(e, t) {
      if (!e)
        return this;
      let n;
      return t ? n = On(__spreadValues({}, e), l) : n = On(__spreadValues({}, l), e), so(n);
    }
  };
}
function Fd(l, e, t) {
  const n = document.createElement("DIV");
  n.className = "wx-theme", l.appendChild(n);
  let i = window.getComputedStyle(n).getPropertyValue("--wx-theme-name");
  return l.removeChild(n), (e && e !== i || !e && !i && t) && (i && l.classList.remove(`wx-${i}-theme`), i = e || t, l.classList.add(`wx-${i}-theme`)), i;
}
var Ci = {
  material: Nd
};
var Vd = class {
  api;
  config;
  container;
  _pivot;
  constructor(e, t) {
    this.container = typeof e == "string" ? document.querySelector(e) : e, this.config = t, this._init();
  }
  destructor() {
    this._pivot.$destroy(), this._pivot = this.api = null;
  }
  setConfig(e) {
    this.config = __spreadValues(__spreadValues({}, this.config), e), this._init();
  }
  getTable(e) {
    return this.api.getTable(e);
  }
  showConfigPanel(e) {
    this.api.exec("show-config-panel", e);
  }
  setLocale(e) {
    this.setConfig({ locale: e });
  }
  _init() {
    this._pivot && this.destructor();
    const e = Fd(
      this.container,
      this.config.theme?.name,
      "material"
    ), t = /* @__PURE__ */ new Map([
      ["wx-i18n", so(this.config.locale)],
      ["wx-theme", e]
    ]);
    Ci[e] && new Ci[e]({
      target: this.container,
      props: { fonts: this.config.theme?.fonts }
    }), this._pivot = new Rd({
      target: this.container,
      props: this.config,
      context: t
    }), this.api = this._pivot.api;
  }
};
var Yd = {
  en: __spreadValues(__spreadValues(__spreadValues({}, Tn), Gi), Yi),
  cn: __spreadValues(__spreadValues(__spreadValues({}, Ys), Js), zs),
  de: __spreadValues(__spreadValues(__spreadValues({}, Xs), Qs), Is)
};
export {
  Vd as Pivot,
  Rs as defaultMethods,
  Ds as defaultPredicates,
  Yd as locales
};
/*! Bundled license information:

@dhx/trial-pivot/dist/pivot.es.js:
  (**
  @license
  
  DHTMLX Pivot v.2.0.0 
  
  This software is covered by DHTMLX Evaluation License and purposed only for evaluation.
  Contact sales@dhtmlx.com to get Commercial or Enterprise license.
  Usage without proper license is prohibited.
  
  (c) XB Software.
  
  **)
*/
//# sourceMappingURL=@dhx_trial-pivot.js.map
