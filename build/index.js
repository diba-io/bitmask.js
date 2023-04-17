!(function (n, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["bitmask-js"] = t())
    : (n["bitmask-js"] = t());
})(self, () =>
  (() => {
    "use strict";
    var n,
      t,
      e,
      r,
      o = {
        91: (n, t, e) => {
          e.a(n, async (n, r) => {
            try {
              e.r(t),
                e.d(t, {
                  Network: () => A,
                  acceptTransfer: () => h,
                  createAsset: () => p,
                  fundVault: () => b,
                  getAssetsVault: () => d,
                  getBlindedUtxo: () => s,
                  getEncryptedWallet: () => i,
                  getEndpoint: () => m,
                  getMnemonicSeed: () => a,
                  getNetwork: () => y,
                  getWalletData: () => _,
                  importAsset: () => f,
                  lnAuth: () => O,
                  lnCheckPayment: () => L,
                  lnCreateInvoice: () => k,
                  lnCreateWallet: () => S,
                  lnGetBalance: () => E,
                  lnGetTxs: () => N,
                  lnPayInvoice: () => j,
                  saveMnemonicSeed: () => u,
                  sendSats: () => l,
                  signPsbt: () => w,
                  switchHost: () => x,
                  switchNetwork: () => v,
                  transferAssets: () => g,
                });
              var o = e(633),
                c = n([o]);
              function J(n) {
                return (
                  (J =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (n) {
                          return typeof n;
                        }
                      : function (n) {
                          return n &&
                            "function" == typeof Symbol &&
                            n.constructor === Symbol &&
                            n !== Symbol.prototype
                            ? "symbol"
                            : typeof n;
                        }),
                  J(n)
                );
              }
              function P() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ P =
                  function () {
                    return n;
                  };
                var n = {},
                  t = Object.prototype,
                  e = t.hasOwnProperty,
                  r =
                    Object.defineProperty ||
                    function (n, t, e) {
                      n[t] = e.value;
                    },
                  o = "function" == typeof Symbol ? Symbol : {},
                  c = o.iterator || "@@iterator",
                  i = o.asyncIterator || "@@asyncIterator",
                  a = o.toStringTag || "@@toStringTag";
                function u(n, t, e) {
                  return (
                    Object.defineProperty(n, t, {
                      value: e,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    }),
                    n[t]
                  );
                }
                try {
                  u({}, "");
                } catch (n) {
                  u = function (n, t, e) {
                    return (n[t] = e);
                  };
                }
                function _(n, t, e, o) {
                  var c = t && t.prototype instanceof l ? t : l,
                    i = Object.create(c.prototype),
                    a = new k(o || []);
                  return r(i, "_invoke", { value: v(n, e, a) }), i;
                }
                function f(n, t, e) {
                  try {
                    return { type: "normal", arg: n.call(t, e) };
                  } catch (n) {
                    return { type: "throw", arg: n };
                  }
                }
                n.wrap = _;
                var s = {};
                function l() {}
                function b() {}
                function d() {}
                var p = {};
                u(p, c, function () {
                  return this;
                });
                var g = Object.getPrototypeOf,
                  w = g && g(g(E([])));
                w && w !== t && e.call(w, c) && (p = w);
                var h = (d.prototype = l.prototype = Object.create(p));
                function y(n) {
                  ["next", "throw", "return"].forEach(function (t) {
                    u(n, t, function (n) {
                      return this._invoke(t, n);
                    });
                  });
                }
                function m(n, t) {
                  function o(r, c, i, a) {
                    var u = f(n[r], n, c);
                    if ("throw" !== u.type) {
                      var _ = u.arg,
                        s = _.value;
                      return s && "object" == J(s) && e.call(s, "__await")
                        ? t.resolve(s.__await).then(
                            function (n) {
                              o("next", n, i, a);
                            },
                            function (n) {
                              o("throw", n, i, a);
                            }
                          )
                        : t.resolve(s).then(
                            function (n) {
                              (_.value = n), i(_);
                            },
                            function (n) {
                              return o("throw", n, i, a);
                            }
                          );
                    }
                    a(u.arg);
                  }
                  var c;
                  r(this, "_invoke", {
                    value: function (n, e) {
                      function r() {
                        return new t(function (t, r) {
                          o(n, e, t, r);
                        });
                      }
                      return (c = c ? c.then(r, r) : r());
                    },
                  });
                }
                function v(n, t, e) {
                  var r = "suspendedStart";
                  return function (o, c) {
                    if ("executing" === r)
                      throw new Error("Generator is already running");
                    if ("completed" === r) {
                      if ("throw" === o) throw c;
                      return N();
                    }
                    for (e.method = o, e.arg = c; ; ) {
                      var i = e.delegate;
                      if (i) {
                        var a = x(i, e);
                        if (a) {
                          if (a === s) continue;
                          return a;
                        }
                      }
                      if ("next" === e.method) e.sent = e._sent = e.arg;
                      else if ("throw" === e.method) {
                        if ("suspendedStart" === r)
                          throw ((r = "completed"), e.arg);
                        e.dispatchException(e.arg);
                      } else "return" === e.method && e.abrupt("return", e.arg);
                      r = "executing";
                      var u = f(n, t, e);
                      if ("normal" === u.type) {
                        if (
                          ((r = e.done ? "completed" : "suspendedYield"),
                          u.arg === s)
                        )
                          continue;
                        return { value: u.arg, done: e.done };
                      }
                      "throw" === u.type &&
                        ((r = "completed"),
                        (e.method = "throw"),
                        (e.arg = u.arg));
                    }
                  };
                }
                function x(n, t) {
                  var e = t.method,
                    r = n.iterator[e];
                  if (void 0 === r)
                    return (
                      (t.delegate = null),
                      ("throw" === e &&
                        n.iterator.return &&
                        ((t.method = "return"),
                        (t.arg = void 0),
                        x(n, t),
                        "throw" === t.method)) ||
                        ("return" !== e &&
                          ((t.method = "throw"),
                          (t.arg = new TypeError(
                            "The iterator does not provide a '" + e + "' method"
                          )))),
                      s
                    );
                  var o = f(r, n.iterator, t.arg);
                  if ("throw" === o.type)
                    return (
                      (t.method = "throw"),
                      (t.arg = o.arg),
                      (t.delegate = null),
                      s
                    );
                  var c = o.arg;
                  return c
                    ? c.done
                      ? ((t[n.resultName] = c.value),
                        (t.next = n.nextLoc),
                        "return" !== t.method &&
                          ((t.method = "next"), (t.arg = void 0)),
                        (t.delegate = null),
                        s)
                      : c
                    : ((t.method = "throw"),
                      (t.arg = new TypeError(
                        "iterator result is not an object"
                      )),
                      (t.delegate = null),
                      s);
                }
                function S(n) {
                  var t = { tryLoc: n[0] };
                  1 in n && (t.catchLoc = n[1]),
                    2 in n && ((t.finallyLoc = n[2]), (t.afterLoc = n[3])),
                    this.tryEntries.push(t);
                }
                function O(n) {
                  var t = n.completion || {};
                  (t.type = "normal"), delete t.arg, (n.completion = t);
                }
                function k(n) {
                  (this.tryEntries = [{ tryLoc: "root" }]),
                    n.forEach(S, this),
                    this.reset(!0);
                }
                function E(n) {
                  if (n) {
                    var t = n[c];
                    if (t) return t.call(n);
                    if ("function" == typeof n.next) return n;
                    if (!isNaN(n.length)) {
                      var r = -1,
                        o = function t() {
                          for (; ++r < n.length; )
                            if (e.call(n, r))
                              return (t.value = n[r]), (t.done = !1), t;
                          return (t.value = void 0), (t.done = !0), t;
                        };
                      return (o.next = o);
                    }
                  }
                  return { next: N };
                }
                function N() {
                  return { value: void 0, done: !0 };
                }
                return (
                  (b.prototype = d),
                  r(h, "constructor", { value: d, configurable: !0 }),
                  r(d, "constructor", { value: b, configurable: !0 }),
                  (b.displayName = u(d, a, "GeneratorFunction")),
                  (n.isGeneratorFunction = function (n) {
                    var t = "function" == typeof n && n.constructor;
                    return (
                      !!t &&
                      (t === b ||
                        "GeneratorFunction" === (t.displayName || t.name))
                    );
                  }),
                  (n.mark = function (n) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(n, d)
                        : ((n.__proto__ = d), u(n, a, "GeneratorFunction")),
                      (n.prototype = Object.create(h)),
                      n
                    );
                  }),
                  (n.awrap = function (n) {
                    return { __await: n };
                  }),
                  y(m.prototype),
                  u(m.prototype, i, function () {
                    return this;
                  }),
                  (n.AsyncIterator = m),
                  (n.async = function (t, e, r, o, c) {
                    void 0 === c && (c = Promise);
                    var i = new m(_(t, e, r, o), c);
                    return n.isGeneratorFunction(e)
                      ? i
                      : i.next().then(function (n) {
                          return n.done ? n.value : i.next();
                        });
                  }),
                  y(h),
                  u(h, a, "Generator"),
                  u(h, c, function () {
                    return this;
                  }),
                  u(h, "toString", function () {
                    return "[object Generator]";
                  }),
                  (n.keys = function (n) {
                    var t = Object(n),
                      e = [];
                    for (var r in t) e.push(r);
                    return (
                      e.reverse(),
                      function n() {
                        for (; e.length; ) {
                          var r = e.pop();
                          if (r in t) return (n.value = r), (n.done = !1), n;
                        }
                        return (n.done = !0), n;
                      }
                    );
                  }),
                  (n.values = E),
                  (k.prototype = {
                    constructor: k,
                    reset: function (n) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = void 0),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = void 0),
                        this.tryEntries.forEach(O),
                        !n)
                      )
                        for (var t in this)
                          "t" === t.charAt(0) &&
                            e.call(this, t) &&
                            !isNaN(+t.slice(1)) &&
                            (this[t] = void 0);
                    },
                    stop: function () {
                      this.done = !0;
                      var n = this.tryEntries[0].completion;
                      if ("throw" === n.type) throw n.arg;
                      return this.rval;
                    },
                    dispatchException: function (n) {
                      if (this.done) throw n;
                      var t = this;
                      function r(e, r) {
                        return (
                          (i.type = "throw"),
                          (i.arg = n),
                          (t.next = e),
                          r && ((t.method = "next"), (t.arg = void 0)),
                          !!r
                        );
                      }
                      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var c = this.tryEntries[o],
                          i = c.completion;
                        if ("root" === c.tryLoc) return r("end");
                        if (c.tryLoc <= this.prev) {
                          var a = e.call(c, "catchLoc"),
                            u = e.call(c, "finallyLoc");
                          if (a && u) {
                            if (this.prev < c.catchLoc)
                              return r(c.catchLoc, !0);
                            if (this.prev < c.finallyLoc)
                              return r(c.finallyLoc);
                          } else if (a) {
                            if (this.prev < c.catchLoc)
                              return r(c.catchLoc, !0);
                          } else {
                            if (!u)
                              throw new Error(
                                "try statement without catch or finally"
                              );
                            if (this.prev < c.finallyLoc)
                              return r(c.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function (n, t) {
                      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (
                          o.tryLoc <= this.prev &&
                          e.call(o, "finallyLoc") &&
                          this.prev < o.finallyLoc
                        ) {
                          var c = o;
                          break;
                        }
                      }
                      c &&
                        ("break" === n || "continue" === n) &&
                        c.tryLoc <= t &&
                        t <= c.finallyLoc &&
                        (c = null);
                      var i = c ? c.completion : {};
                      return (
                        (i.type = n),
                        (i.arg = t),
                        c
                          ? ((this.method = "next"),
                            (this.next = c.finallyLoc),
                            s)
                          : this.complete(i)
                      );
                    },
                    complete: function (n, t) {
                      if ("throw" === n.type) throw n.arg;
                      return (
                        "break" === n.type || "continue" === n.type
                          ? (this.next = n.arg)
                          : "return" === n.type
                          ? ((this.rval = this.arg = n.arg),
                            (this.method = "return"),
                            (this.next = "end"))
                          : "normal" === n.type && t && (this.next = t),
                        s
                      );
                    },
                    finish: function (n) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var e = this.tryEntries[t];
                        if (e.finallyLoc === n)
                          return (
                            this.complete(e.completion, e.afterLoc), O(e), s
                          );
                      }
                    },
                    catch: function (n) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var e = this.tryEntries[t];
                        if (e.tryLoc === n) {
                          var r = e.completion;
                          if ("throw" === r.type) {
                            var o = r.arg;
                            O(e);
                          }
                          return o;
                        }
                      }
                      throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (n, t, e) {
                      return (
                        (this.delegate = {
                          iterator: E(n),
                          resultName: t,
                          nextLoc: e,
                        }),
                        "next" === this.method && (this.arg = void 0),
                        s
                      );
                    },
                  }),
                  n
                );
              }
              function q(n, t, e, r, o, c, i) {
                try {
                  var a = n[c](i),
                    u = a.value;
                } catch (n) {
                  return void e(n);
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o);
              }
              function M(n) {
                return function () {
                  var t = this,
                    e = arguments;
                  return new Promise(function (r, o) {
                    var c = n.apply(t, e);
                    function i(n) {
                      q(c, r, o, i, a, "next", n);
                    }
                    function a(n) {
                      q(c, r, o, i, a, "throw", n);
                    }
                    i(void 0);
                  });
                };
              }
              o = (c.then ? (await c)() : c)[0];
              var i = (function () {
                  var n = M(
                    P().mark(function n(t, e) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.am(t, e);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e) {
                    return n.apply(this, arguments);
                  };
                })(),
                a = (function () {
                  var n = M(
                    P().mark(function n(t, e) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.S5(t, e);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e) {
                    return n.apply(this, arguments);
                  };
                })(),
                u = (function () {
                  var n = M(
                    P().mark(function n(t, e, r) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.LX(t, e, r);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e, r) {
                    return n.apply(this, arguments);
                  };
                })(),
                _ = (function () {
                  var n = M(
                    P().mark(function n(t, e) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.td(t, e);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e) {
                    return n.apply(this, arguments);
                  };
                })(),
                f = (function () {
                  var n = M(
                    P().mark(function n(t, e) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.UR(t, e);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e) {
                    return n.apply(this, arguments);
                  };
                })(),
                s = (function () {
                  var n = M(
                    P().mark(function n(t) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.Y8(t);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })(),
                l = (function () {
                  var n = M(
                    P().mark(function n(t, e, r, c, i) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.t0 = JSON), (n.next = 3), o.GM(t, e, r, c, i)
                              );
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e, r, o, c) {
                    return n.apply(this, arguments);
                  };
                })(),
                b = (function () {
                  var n = M(
                    P().mark(function n(t, e, r, c, i, a, u) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.t0 = JSON),
                                (n.next = 3),
                                o.br(t, e, r, c, i, a, u)
                              );
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e, r, o, c, i, a) {
                    return n.apply(this, arguments);
                  };
                })(),
                d = (function () {
                  var n = M(
                    P().mark(function n(t, e) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.ES(t, e);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e) {
                    return n.apply(this, arguments);
                  };
                })(),
                p = (function () {
                  var n = M(
                    P().mark(function n(t, e, r, c, i) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.t0 = JSON), (n.next = 3), o.S0(t, e, r, c, i)
                              );
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e, r, o, c) {
                    return n.apply(this, arguments);
                  };
                })(),
                g = (function () {
                  var n = M(
                    P().mark(function n(t, e) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.t0 = JSON),
                                (n.next = 3),
                                o.h5({ descriptor_xpub: t, transfers: e })
                              );
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e) {
                    return n.apply(this, arguments);
                  };
                })(),
                w = (function () {
                  var n = M(
                    P().mark(function n(t, e) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.aD(t, e);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e) {
                    return n.apply(this, arguments);
                  };
                })(),
                h = (function () {
                  var n = M(
                    P().mark(function n(t, e, r, c) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.t0 = JSON), (n.next = 3), o.Oq(t, e, r, c)
                              );
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e, r, o) {
                    return n.apply(this, arguments);
                  };
                })(),
                y = (function () {
                  var n = M(
                    P().mark(function n() {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.ZM();
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function () {
                    return n.apply(this, arguments);
                  };
                })(),
                m = (function () {
                  var n = M(
                    P().mark(function n(t) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.dp(t);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })(),
                v = (function () {
                  var n = M(
                    P().mark(function n(t) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return n.abrupt("return", o.Co(t.toString()));
                            case 1:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })(),
                x = (function () {
                  var n = M(
                    P().mark(function n(t) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return n.abrupt("return", o.G9(t));
                            case 1:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })(),
                S = (function () {
                  var n = M(
                    P().mark(function n(t, e) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.Rk(t, e);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e) {
                    return n.apply(this, arguments);
                  };
                })(),
                O = (function () {
                  var n = M(
                    P().mark(function n(t, e) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.fs(t, e);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e) {
                    return n.apply(this, arguments);
                  };
                })(),
                k = (function () {
                  var n = M(
                    P().mark(function n(t, e, r) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.EY(t, e, r);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e, r) {
                    return n.apply(this, arguments);
                  };
                })(),
                E = (function () {
                  var n = M(
                    P().mark(function n(t) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.EJ(t);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })(),
                N = (function () {
                  var n = M(
                    P().mark(function n(t) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.J9(t);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })(),
                j = (function () {
                  var n = M(
                    P().mark(function n(t, e) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.HZ(t, e);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t, e) {
                    return n.apply(this, arguments);
                  };
                })(),
                L = (function () {
                  var n = M(
                    P().mark(function n(t) {
                      return P().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.t0 = JSON), (n.next = 3), o.sF(t);
                            case 3:
                              return (
                                (n.t1 = n.sent),
                                n.abrupt("return", n.t0.parse.call(n.t0, n.t1))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })(),
                A = (function (n) {
                  return (
                    (n.bitcoin = "bitcoin"),
                    (n.testnet = "testnet"),
                    (n.signet = "signet"),
                    (n.regtest = "regtest"),
                    n
                  );
                })({});
              x(process.env.BITMASK_NODE_HOST || "");
              var T = A[process.env.BITCOIN_NETWORK || ""];
              v(T), r();
            } catch (R) {
              r(R);
            }
          });
        },
        633: (n, t, e) => {
          e.a(n, async (n, r) => {
            try {
              e.d(t, {
                Co: () => c.Co,
                EJ: () => c.EJ,
                ES: () => c.ES,
                EY: () => c.EY,
                G9: () => c.G9,
                GM: () => c.GM,
                HZ: () => c.HZ,
                J9: () => c.J9,
                LX: () => c.LX,
                Oq: () => c.Oq,
                Rk: () => c.Rk,
                S0: () => c.S0,
                S5: () => c.S5,
                UR: () => c.UR,
                Y8: () => c.Y8,
                ZM: () => c.ZM,
                aD: () => c.aD,
                am: () => c.am,
                br: () => c.br,
                dp: () => c.dp,
                fs: () => c.fs,
                h5: () => c.h5,
                sF: () => c.sF,
                td: () => c.td,
              });
              var o = e(696),
                c = e(398),
                i = n([o]);
              (o = (i.then ? (await i)() : i)[0]), (0, c.oT)(o), r();
            } catch (n) {
              r(n);
            }
          });
        },
        398: (n, t, e) => {
          let r;
          function o(n) {
            r = n;
          }
          e.d(t, {
            B1: () => ht,
            BA: () => On,
            CB: () => ut,
            CS: () => Vn,
            CT: () => At,
            Co: () => I,
            DI: () => Bn,
            EJ: () => D,
            ES: () => P,
            EY: () => $,
            Eb: () => Hn,
            FE: () => at,
            G6: () => _n,
            G9: () => F,
            GM: () => T,
            Gq: () => ct,
            HT: () => sn,
            HZ: () => W,
            I0: () => ot,
            J9: () => K,
            KM: () => gn,
            Kd: () => Zn,
            Kf: () => _t,
            Ks: () => nt,
            Kx: () => an,
            LX: () => N,
            M1: () => ln,
            MU: () => Qn,
            Nk: () => Gn,
            ON: () => rt,
            O_: () => qn,
            Oq: () => G,
            Or: () => jt,
            PQ: () => kn,
            Q$: () => et,
            QT: () => In,
            Qk: () => zn,
            Qr: () => fn,
            RA: () => Nt,
            Rk: () => Y,
            Rl: () => yn,
            Ru: () => Wn,
            S0: () => q,
            S5: () => E,
            Se: () => Dn,
            TO: () => bt,
            Tq: () => pt,
            UR: () => L,
            Vb: () => st,
            Vy: () => Pn,
            Wh: () => wt,
            Wl: () => en,
            XP: () => rn,
            Xu: () => St,
            Y8: () => A,
            YP: () => kt,
            Yq: () => un,
            ZJ: () => Ot,
            ZM: () => B,
            Zd: () => dt,
            a$: () => Nn,
            a2: () => pn,
            aD: () => R,
            am: () => k,
            br: () => J,
            cM: () => xt,
            cQ: () => An,
            cr: () => Yn,
            dK: () => mn,
            do: () => gt,
            dp: () => C,
            e: () => Rn,
            e7: () => it,
            eY: () => Fn,
            ex: () => Mn,
            f5: () => Cn,
            fD: () => vt,
            fW: () => cn,
            fY: () => Sn,
            fs: () => U,
            ge: () => yt,
            gi: () => Jn,
            go: () => Un,
            h4: () => z,
            h5: () => M,
            hd: () => tn,
            hm: () => xn,
            iX: () => wn,
            id: () => tt,
            iy: () => vn,
            jm: () => dn,
            lS: () => ft,
            m_: () => bn,
            nH: () => Kn,
            o$: () => $n,
            o0: () => En,
            oH: () => Lt,
            oJ: () => mt,
            oT: () => o,
            oq: () => Xn,
            ou: () => Tn,
            qt: () => nn,
            qv: () => hn,
            sF: () => H,
            td: () => j,
            ug: () => V,
            vr: () => lt,
            xz: () => Ln,
            yb: () => on,
            zL: () => jn,
            zn: () => Et,
          }),
            (n = e.hmd(n));
          const c = new Array(128).fill(void 0);
          function i(n) {
            return c[n];
          }
          c.push(void 0, null, !0, !1);
          let a = c.length;
          function u(n) {
            const t = i(n);
            return (
              (function (n) {
                n < 132 || ((c[n] = a), (a = n));
              })(n),
              t
            );
          }
          let _ = new (
            "undefined" == typeof TextDecoder
              ? (0, n.require)("util").TextDecoder
              : TextDecoder
          )("utf-8", { ignoreBOM: !0, fatal: !0 });
          _.decode();
          let f = null;
          function s() {
            return (
              (null !== f && 0 !== f.byteLength) ||
                (f = new Uint8Array(r.memory.buffer)),
              f
            );
          }
          function l(n, t) {
            return _.decode(s().subarray(n, n + t));
          }
          function b(n) {
            a === c.length && c.push(c.length + 1);
            const t = a;
            return (a = c[t]), (c[t] = n), t;
          }
          let d = 0;
          let p = new (
            "undefined" == typeof TextEncoder
              ? (0, n.require)("util").TextEncoder
              : TextEncoder
          )("utf-8");
          const g =
            "function" == typeof p.encodeInto
              ? function (n, t) {
                  return p.encodeInto(n, t);
                }
              : function (n, t) {
                  const e = p.encode(n);
                  return t.set(e), { read: n.length, written: e.length };
                };
          function w(n, t, e) {
            if (void 0 === e) {
              const e = p.encode(n),
                r = t(e.length);
              return (
                s()
                  .subarray(r, r + e.length)
                  .set(e),
                (d = e.length),
                r
              );
            }
            let r = n.length,
              o = t(r);
            const c = s();
            let i = 0;
            for (; i < r; i++) {
              const t = n.charCodeAt(i);
              if (t > 127) break;
              c[o + i] = t;
            }
            if (i !== r) {
              0 !== i && (n = n.slice(i)),
                (o = e(o, r, (r = i + 3 * n.length)));
              const t = s().subarray(o + i, o + r);
              i += g(n, t).written;
            }
            return (d = i), o;
          }
          function h(n) {
            return null == n;
          }
          let y = null;
          function m() {
            return (
              (null !== y && 0 !== y.byteLength) ||
                (y = new Int32Array(r.memory.buffer)),
              y
            );
          }
          let v = null;
          let x = null;
          function S(n) {
            const t = typeof n;
            if ("number" == t || "boolean" == t || null == n) return `${n}`;
            if ("string" == t) return `"${n}"`;
            if ("symbol" == t) {
              const t = n.description;
              return null == t ? "Symbol" : `Symbol(${t})`;
            }
            if ("function" == t) {
              const t = n.name;
              return "string" == typeof t && t.length > 0
                ? `Function(${t})`
                : "Function";
            }
            if (Array.isArray(n)) {
              const t = n.length;
              let e = "[";
              t > 0 && (e += S(n[0]));
              for (let r = 1; r < t; r++) e += ", " + S(n[r]);
              return (e += "]"), e;
            }
            const e = /\[object ([^\]]+)\]/.exec(toString.call(n));
            let r;
            if (!(e.length > 1)) return toString.call(n);
            if (((r = e[1]), "Object" == r))
              try {
                return "Object(" + JSON.stringify(n) + ")";
              } catch (n) {
                return "Object";
              }
            return n instanceof Error
              ? `${n.name}: ${n.message}\n${n.stack}`
              : r;
          }
          function O(n, t, e) {
            r._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3fdc624b1171a008(
              n,
              t,
              b(e)
            );
          }
          function k(n, t) {
            const e = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d,
              c = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              i = d;
            return u(r.get_encrypted_wallet(e, o, c, i));
          }
          function E(n, t) {
            const e = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d,
              c = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              i = d;
            return u(r.get_mnemonic_seed(e, o, c, i));
          }
          function N(n, t, e) {
            const o = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              c = d,
              i = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              a = d,
              _ = w(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
              f = d;
            return u(r.save_mnemonic_seed(o, c, i, a, _, f));
          }
          function j(n, t) {
            const e = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d;
            var c = h(t) ? 0 : w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              i = d;
            return u(r.get_wallet_data(e, o, c, i));
          }
          function L(n, t) {
            const e = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d,
              c = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              i = d;
            return u(r.import_asset(e, o, c, i));
          }
          function A(n) {
            const t = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              e = d;
            return u(r.get_blinded_utxo(t, e));
          }
          function T(n, t, e, o, c) {
            const i = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              a = d,
              _ = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              f = d,
              s = w(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
              l = d;
            return u(r.send_sats(i, a, _, f, s, l, o, !h(c), h(c) ? 0 : c));
          }
          function J(n, t, e, o, c, i, a) {
            const _ = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              f = d,
              s = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              l = d,
              b = w(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
              p = d,
              g = w(o, r.__wbindgen_malloc, r.__wbindgen_realloc),
              y = d;
            return u(
              r.fund_vault(_, f, s, l, b, p, g, y, c, i, !h(a), h(a) ? 0 : a)
            );
          }
          function P(n, t) {
            const e = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d,
              c = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              i = d;
            return u(r.get_assets_vault(e, o, c, i));
          }
          function q(n, t, e, o, c) {
            const i = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              a = d,
              _ = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              f = d,
              s = w(c, r.__wbindgen_malloc, r.__wbindgen_realloc),
              l = d;
            return u(r.create_asset(i, a, _, f, e, o, s, l));
          }
          function M(n) {
            return u(r.transfer_assets(b(n)));
          }
          function R(n, t) {
            const e = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d,
              c = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              i = d;
            return u(r.sign_psbt(e, o, c, i));
          }
          function G(n, t, e, o) {
            const c = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              i = d,
              a = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              _ = d,
              f = w(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
              s = d,
              l = w(o, r.__wbindgen_malloc, r.__wbindgen_realloc),
              b = d;
            return u(r.accept_transfer(c, i, a, _, f, s, l, b));
          }
          function B() {
            return u(r.get_network());
          }
          function I(n) {
            const t = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              e = d;
            return u(r.switch_network(t, e));
          }
          function C(n) {
            const t = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              e = d;
            return u(r.get_endpoint(t, e));
          }
          function F(n) {
            const t = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              e = d;
            return u(r.switch_host(t, e));
          }
          function Y(n, t) {
            const e = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d,
              c = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              i = d;
            return u(r.ln_create_wallet(e, o, c, i));
          }
          function U(n, t) {
            const e = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d,
              c = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              i = d;
            return u(r.ln_auth(e, o, c, i));
          }
          function $(n, t, e) {
            const o = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              c = d,
              i = w(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
              a = d;
            return u(r.ln_create_invoice(o, c, t, i, a));
          }
          function D(n) {
            const t = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              e = d;
            return u(r.ln_get_balance(t, e));
          }
          function K(n) {
            const t = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              e = d;
            return u(r.ln_get_txs(t, e));
          }
          function W(n, t) {
            const e = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d,
              c = w(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
              i = d;
            return u(r.ln_pay_invoice(e, o, c, i));
          }
          function H(n) {
            const t = w(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
              e = d;
            return u(r.ln_check_payment(t, e));
          }
          let Q = null;
          function Z(n, t) {
            const e = ((null !== Q && 0 !== Q.byteLength) ||
                (Q = new Uint32Array(r.memory.buffer)),
              Q).subarray(n / 4, n / 4 + t),
              o = [];
            for (let n = 0; n < e.length; n++) o.push(u(e[n]));
            return o;
          }
          function X(n, t) {
            try {
              return n.apply(this, t);
            } catch (n) {
              r.__wbindgen_exn_store(b(n));
            }
          }
          function V(n) {
            u(n);
          }
          function z(n, t) {
            return b(l(n, t));
          }
          function nn(n, t) {
            const e = i(t),
              o = "string" == typeof e ? e : void 0;
            var c = h(o) ? 0 : w(o, r.__wbindgen_malloc, r.__wbindgen_realloc),
              a = d;
            (m()[n / 4 + 1] = a), (m()[n / 4 + 0] = c);
          }
          function tn(n, t) {
            return b(new Error(l(n, t)));
          }
          function en(n) {
            const t = i(n);
            return "object" == typeof t && null !== t;
          }
          function rn(n) {
            return void 0 === i(n);
          }
          function on(n, t) {
            return i(n) in i(t);
          }
          function cn(n) {
            return "bigint" == typeof i(n);
          }
          function an(n) {
            return b(BigInt.asUintN(64, n));
          }
          function un(n, t) {
            return i(n) === i(t);
          }
          function _n(n) {
            const t = u(n).original;
            if (1 == t.cnt--) return (t.a = 0), !0;
            return !1;
          }
          function fn(n, t) {
            return i(n) == i(t);
          }
          function sn(n) {
            const t = i(n);
            return "boolean" == typeof t ? (t ? 1 : 0) : 2;
          }
          function ln(n, t) {
            const e = i(t),
              o = "number" == typeof e ? e : void 0;
            (((null !== v && 0 !== v.byteLength) ||
              (v = new Float64Array(r.memory.buffer)),
            v)[n / 8 + 1] = h(o) ? 0 : o),
              (m()[n / 4 + 0] = !h(o));
          }
          function bn(n) {
            return b(i(n));
          }
          function dn(n, t) {
            return b(i(n)[i(t)]);
          }
          function pn() {
            return b(new Error());
          }
          function gn(n, t) {
            const e = w(i(t).stack, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d;
            (m()[n / 4 + 1] = o), (m()[n / 4 + 0] = e);
          }
          function wn(n, t) {
            try {
              console.error(l(n, t));
            } finally {
              r.__wbindgen_free(n, t);
            }
          }
          function hn(n, t) {
            var e = Z(n, t).slice();
            r.__wbindgen_free(n, 4 * t), console.debug(...e);
          }
          function yn(n, t) {
            var e = Z(n, t).slice();
            r.__wbindgen_free(n, 4 * t), console.info(...e);
          }
          function mn(n, t) {
            var e = Z(n, t).slice();
            r.__wbindgen_free(n, 4 * t), console.trace(...e);
          }
          function vn(n) {
            return b(fetch(i(n)));
          }
          function xn(n) {
            return b(i(n).signal);
          }
          function Sn() {
            return X(function () {
              return b(new AbortController());
            }, arguments);
          }
          function On(n) {
            i(n).abort();
          }
          function kn(n, t) {
            return b(i(n).fetch(i(t)));
          }
          function En(n) {
            let t;
            try {
              t = i(n) instanceof Response;
            } catch {
              t = !1;
            }
            return t;
          }
          function Nn(n, t) {
            const e = w(i(t).url, r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d;
            (m()[n / 4 + 1] = o), (m()[n / 4 + 0] = e);
          }
          function jn(n) {
            return i(n).status;
          }
          function Ln(n) {
            return b(i(n).headers);
          }
          function An() {
            return X(function (n) {
              return b(i(n).arrayBuffer());
            }, arguments);
          }
          function Tn() {
            return X(function (n) {
              return b(i(n).text());
            }, arguments);
          }
          function Jn() {
            return X(function () {
              return b(new Headers());
            }, arguments);
          }
          function Pn() {
            return X(function (n, t, e, r, o) {
              i(n).append(l(t, e), l(r, o));
            }, arguments);
          }
          function qn() {
            return X(function (n, t, e) {
              return b(new Request(l(n, t), i(e)));
            }, arguments);
          }
          function Mn() {
            return X(function (n, t, e) {
              var r, o;
              i(n).randomFillSync(
                ((r = t), (o = e), s().subarray(r / 1, r / 1 + o))
              );
            }, arguments);
          }
          function Rn() {
            return X(function (n, t) {
              i(n).getRandomValues(i(t));
            }, arguments);
          }
          function Gn(n) {
            return b(i(n).crypto);
          }
          function Bn(n) {
            return b(i(n).process);
          }
          function In(n) {
            return b(i(n).versions);
          }
          function Cn(n) {
            return b(i(n).node);
          }
          function Fn(n) {
            return "string" == typeof i(n);
          }
          function Yn(n) {
            return b(i(n).msCrypto);
          }
          function Un() {
            return X(function () {
              return b(n.require);
            }, arguments);
          }
          function $n(n) {
            return "function" == typeof i(n);
          }
          function Dn(n, t) {
            return b(i(n)[t >>> 0]);
          }
          function Kn(n) {
            return i(n).length;
          }
          function Wn(n, t) {
            return b(new Function(l(n, t)));
          }
          function Hn(n) {
            return b(i(n).next);
          }
          function Qn() {
            return X(function (n) {
              return b(i(n).next());
            }, arguments);
          }
          function Zn(n) {
            return i(n).done;
          }
          function Xn(n) {
            return b(i(n).value);
          }
          function Vn() {
            return b(Symbol.iterator);
          }
          function zn() {
            return X(function (n, t) {
              return b(Reflect.get(i(n), i(t)));
            }, arguments);
          }
          function nt() {
            return X(function (n, t) {
              return b(i(n).call(i(t)));
            }, arguments);
          }
          function tt() {
            return b(new Object());
          }
          function et() {
            return X(function () {
              return b(self.self);
            }, arguments);
          }
          function rt() {
            return X(function () {
              return b(window.window);
            }, arguments);
          }
          function ot() {
            return X(function () {
              return b(globalThis.globalThis);
            }, arguments);
          }
          function ct() {
            return X(function () {
              return b(e.g.global);
            }, arguments);
          }
          function it(n) {
            return Array.isArray(i(n));
          }
          function at(n) {
            let t;
            try {
              t = i(n) instanceof ArrayBuffer;
            } catch {
              t = !1;
            }
            return t;
          }
          function ut() {
            return X(function (n, t, e) {
              return b(i(n).call(i(t), i(e)));
            }, arguments);
          }
          function _t(n) {
            return Number.isSafeInteger(i(n));
          }
          function ft() {
            return Date.now();
          }
          function st(n, t) {
            try {
              var e = { a: n, b: t };
              const o = new Promise((n, t) => {
                const o = e.a;
                e.a = 0;
                try {
                  return (function (n, t, e, o) {
                    r.wasm_bindgen__convert__closures__invoke2_mut__h3e61d16b57f4f2a2(
                      n,
                      t,
                      b(e),
                      b(o)
                    );
                  })(o, e.b, n, t);
                } finally {
                  e.a = o;
                }
              });
              return b(o);
            } finally {
              e.a = e.b = 0;
            }
          }
          function lt(n) {
            return b(Promise.resolve(i(n)));
          }
          function bt(n, t) {
            return b(i(n).then(i(t)));
          }
          function dt(n, t, e) {
            return b(i(n).then(i(t), i(e)));
          }
          function pt(n) {
            return b(i(n).buffer);
          }
          function gt(n, t, e) {
            return b(new Uint8Array(i(n), t >>> 0, e >>> 0));
          }
          function wt(n) {
            return b(new Uint8Array(i(n)));
          }
          function ht(n, t, e) {
            i(n).set(i(t), e >>> 0);
          }
          function yt(n) {
            return i(n).length;
          }
          function mt(n) {
            let t;
            try {
              t = i(n) instanceof Uint8Array;
            } catch {
              t = !1;
            }
            return t;
          }
          function vt(n) {
            return b(new Uint8Array(n >>> 0));
          }
          function xt(n, t, e) {
            return b(i(n).subarray(t >>> 0, e >>> 0));
          }
          function St() {
            return X(function (n, t) {
              return Reflect.has(i(n), i(t));
            }, arguments);
          }
          function Ot() {
            return X(function (n, t, e) {
              return Reflect.set(i(n), i(t), i(e));
            }, arguments);
          }
          function kt() {
            return X(function (n) {
              return b(JSON.stringify(i(n)));
            }, arguments);
          }
          function Et(n, t) {
            const e = i(t),
              o = "bigint" == typeof e ? e : void 0;
            (((null !== x && 0 !== x.byteLength) ||
              (x = new BigInt64Array(r.memory.buffer)),
            x)[n / 8 + 1] = h(o) ? BigInt(0) : o),
              (m()[n / 4 + 0] = !h(o));
          }
          function Nt(n, t) {
            const e = w(S(i(t)), r.__wbindgen_malloc, r.__wbindgen_realloc),
              o = d;
            (m()[n / 4 + 1] = o), (m()[n / 4 + 0] = e);
          }
          function jt(n, t) {
            throw new Error(l(n, t));
          }
          function Lt() {
            return b(r.memory);
          }
          function At(n, t, e) {
            const o = (function (n, t, e, o) {
              const c = { a: n, b: t, cnt: 1, dtor: e },
                i = (...n) => {
                  c.cnt++;
                  const t = c.a;
                  c.a = 0;
                  try {
                    return o(t, c.b, ...n);
                  } finally {
                    0 == --c.cnt
                      ? r.__wbindgen_export_2.get(c.dtor)(t, c.b)
                      : (c.a = t);
                  }
                };
              return (i.original = c), i;
            })(n, t, 1105, O);
            return b(o);
          }
        },
        696: (n, t, e) => {
          var r = e(398);
          n.exports = e.v(t, n.id, "26519518b93e24de2de8", {
            "./bitmask_core_bg.js": {
              __wbindgen_object_drop_ref: r.ug,
              __wbindgen_string_new: r.h4,
              __wbindgen_string_get: r.qt,
              __wbindgen_error_new: r.hd,
              __wbindgen_is_object: r.Wl,
              __wbindgen_is_undefined: r.XP,
              __wbindgen_in: r.yb,
              __wbindgen_is_bigint: r.fW,
              __wbindgen_bigint_from_u64: r.Kx,
              __wbindgen_jsval_eq: r.Yq,
              __wbindgen_cb_drop: r.G6,
              __wbindgen_jsval_loose_eq: r.Qr,
              __wbindgen_boolean_get: r.HT,
              __wbindgen_number_get: r.M1,
              __wbindgen_object_clone_ref: r.m_,
              __wbg_getwithrefkey_15c62c2b8546208d: r.jm,
              __wbg_new_abda76e883ba8a5f: r.a2,
              __wbg_stack_658279fe44541cf6: r.KM,
              __wbg_error_f851667af71bcfc6: r.iX,
              __wbg_debug_783a3d4910bc24c7: r.qv,
              __wbg_info_0d469cecacab90cb: r.Rl,
              __wbg_trace_fe50dc146726736b: r.dK,
              __wbg_fetch_243cc97689681079: r.iy,
              __wbg_signal_686bf5a4acff74a1: r.hm,
              __wbg_new_a16bcd3b8d000a4f: r.fY,
              __wbg_abort_5f06bf3b2954cf33: r.BA,
              __wbg_fetch_661ffba2a4f2519c: r.PQ,
              __wbg_instanceof_Response_fb3a4df648c1859b: r.o0,
              __wbg_url_8ec2534cdfacb103: r.a$,
              __wbg_status_d483a4ac847f380a: r.zL,
              __wbg_headers_6093927dc359903e: r.xz,
              __wbg_arrayBuffer_cb886e06a9e36e4d: r.cQ,
              __wbg_text_f61464d781b099f0: r.ou,
              __wbg_new_f1c3a9c2533a55b8: r.gi,
              __wbg_append_1be1d651f9ecf2eb: r.Vy,
              __wbg_newwithstrandinit_c45f0dc6da26fd03: r.O_,
              __wbg_randomFillSync_6894564c2c334c42: r.ex,
              __wbg_getRandomValues_805f1c3d65988a5a: r.e,
              __wbg_crypto_e1d53a1d73fb10b8: r.Nk,
              __wbg_process_038c26bf42b093f8: r.DI,
              __wbg_versions_ab37218d2f0b24a8: r.QT,
              __wbg_node_080f4b19d15bc1fe: r.f5,
              __wbindgen_is_string: r.eY,
              __wbg_msCrypto_6e7d3e1f92610cbb: r.cr,
              __wbg_require_78a3dcfbdba9cbce: r.go,
              __wbindgen_is_function: r.o$,
              __wbg_get_27fe3dac1c4d0224: r.Se,
              __wbg_length_e498fbc24f9c1d4f: r.nH,
              __wbg_newnoargs_2b8b6bd7753c76ba: r.Ru,
              __wbg_next_b7d530c04fd8b217: r.Eb,
              __wbg_next_88560ec06a094dea: r.MU,
              __wbg_done_1ebec03bbd919843: r.Kd,
              __wbg_value_6ac8da5cc5b3efda: r.oq,
              __wbg_iterator_55f114446221aa5a: r.CS,
              __wbg_get_baf4855f9a986186: r.Qk,
              __wbg_call_95d1ea488d03e4e8: r.Ks,
              __wbg_new_f9876326328f45ed: r.id,
              __wbg_self_e7c1f827057f6584: r.Q$,
              __wbg_window_a09ec664e14b1b81: r.ON,
              __wbg_globalThis_87cbb8506fecf3a9: r.I0,
              __wbg_global_c85a9259e621f3db: r.Gq,
              __wbg_isArray_39d28997bf6b96b4: r.e7,
              __wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065: r.FE,
              __wbg_call_9495de66fdbe016b: r.CB,
              __wbg_isSafeInteger_8c4789029e885159: r.Kf,
              __wbg_now_931686b195a14f9d: r.lS,
              __wbg_new_9d3a9ce4282a18a8: r.Vb,
              __wbg_resolve_fd40f858d9db1a04: r.vr,
              __wbg_then_ec5db6d509eb475f: r.TO,
              __wbg_then_f753623316e2873a: r.Zd,
              __wbg_buffer_cf65c07de34b9a08: r.Tq,
              __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5: r.do,
              __wbg_new_537b7341ce90bb31: r.Wh,
              __wbg_set_17499e8aa4003ebd: r.B1,
              __wbg_length_27a2afe8ab42b09f: r.ge,
              __wbg_instanceof_Uint8Array_01cebe79ca606cca: r.oJ,
              __wbg_newwithlength_b56c882b57805732: r.fD,
              __wbg_subarray_7526649b91a252a6: r.cM,
              __wbg_has_3feea89d34bd7ad5: r.Xu,
              __wbg_set_6aa458a4ebdb65cb: r.ZJ,
              __wbg_stringify_029a979dfb73aa17: r.YP,
              __wbindgen_bigint_get_as_i64: r.zn,
              __wbindgen_debug_string: r.RA,
              __wbindgen_throw: r.Or,
              __wbindgen_memory: r.oH,
              __wbindgen_closure_wrapper3211: r.CT,
            },
          });
        },
      },
      c = {};
    function i(n) {
      var t = c[n];
      if (void 0 !== t) return t.exports;
      var e = (c[n] = { id: n, loaded: !1, exports: {} });
      return o[n](e, e.exports, i), (e.loaded = !0), e.exports;
    }
    return (
      (n =
        "function" == typeof Symbol
          ? Symbol("webpack queues")
          : "__webpack_queues__"),
      (t =
        "function" == typeof Symbol
          ? Symbol("webpack exports")
          : "__webpack_exports__"),
      (e =
        "function" == typeof Symbol
          ? Symbol("webpack error")
          : "__webpack_error__"),
      (r = (n) => {
        n &&
          !n.d &&
          ((n.d = 1),
          n.forEach((n) => n.r--),
          n.forEach((n) => (n.r-- ? n.r++ : n())));
      }),
      (i.a = (o, c, i) => {
        var a;
        i && ((a = []).d = 1);
        var u,
          _,
          f,
          s = new Set(),
          l = o.exports,
          b = new Promise((n, t) => {
            (f = t), (_ = n);
          });
        (b[t] = l),
          (b[n] = (n) => (a && n(a), s.forEach(n), b.catch((n) => {}))),
          (o.exports = b),
          c(
            (o) => {
              var c;
              u = ((o) =>
                o.map((o) => {
                  if (null !== o && "object" == typeof o) {
                    if (o[n]) return o;
                    if (o.then) {
                      var c = [];
                      (c.d = 0),
                        o.then(
                          (n) => {
                            (i[t] = n), r(c);
                          },
                          (n) => {
                            (i[e] = n), r(c);
                          }
                        );
                      var i = {};
                      return (i[n] = (n) => n(c)), i;
                    }
                  }
                  var a = {};
                  return (a[n] = (n) => {}), (a[t] = o), a;
                }))(o);
              var i = () =>
                  u.map((n) => {
                    if (n[e]) throw n[e];
                    return n[t];
                  }),
                _ = new Promise((t) => {
                  (c = () => t(i)).r = 0;
                  var e = (n) =>
                    n !== a &&
                    !s.has(n) &&
                    (s.add(n), n && !n.d && (c.r++, n.push(c)));
                  u.map((t) => t[n](e));
                });
              return c.r ? _ : i();
            },
            (n) => (n ? f((b[e] = n)) : _(l), r(a))
          ),
          a && (a.d = 0);
      }),
      (i.d = (n, t) => {
        for (var e in t)
          i.o(t, e) &&
            !i.o(n, e) &&
            Object.defineProperty(n, e, { enumerable: !0, get: t[e] });
      }),
      (i.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (n) {
          if ("object" == typeof window) return window;
        }
      })()),
      (i.hmd = (n) => (
        (n = Object.create(n)).children || (n.children = []),
        Object.defineProperty(n, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                n.id
            );
          },
        }),
        n
      )),
      (i.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
      (i.r = (n) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      }),
      (i.v = (n, t, e, r) => {
        var o = fetch(i.p + "" + e + ".module.wasm");
        return "function" == typeof WebAssembly.instantiateStreaming
          ? WebAssembly.instantiateStreaming(o, r).then((t) =>
              Object.assign(n, t.instance.exports)
            )
          : o
              .then((n) => n.arrayBuffer())
              .then((n) => WebAssembly.instantiate(n, r))
              .then((t) => Object.assign(n, t.instance.exports));
      }),
      (() => {
        var n;
        i.g.importScripts && (n = i.g.location + "");
        var t = i.g.document;
        if (!n && t && (t.currentScript && (n = t.currentScript.src), !n)) {
          var e = t.getElementsByTagName("script");
          e.length && (n = e[e.length - 1].src);
        }
        if (!n)
          throw new Error(
            "Automatic publicPath is not supported in this browser"
          );
        (n = n
          .replace(/#.*$/, "")
          .replace(/\?.*$/, "")
          .replace(/\/[^\/]+$/, "/")),
          (i.p = n);
      })(),
      i(91)
    );
  })()
);
//# sourceMappingURL=index.js.map
