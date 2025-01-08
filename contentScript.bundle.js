(() => {
  var e = {
      9134: (e) => {
        e.exports = function () {
          return (
            ("undefined" != typeof window &&
              "object" == typeof window.process &&
              "renderer" === window.process.type) ||
            !(
              "undefined" == typeof process ||
              "object" != typeof process.versions ||
              !process.versions.electron
            ) ||
            ("object" == typeof navigator &&
              "string" == typeof navigator.userAgent &&
              navigator.userAgent.indexOf("Electron") >= 0)
          );
        };
      },
      5666: (e) => {
        var t = (function (e) {
          "use strict";
          var t,
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (e, t, r) {
                e[t] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            s = i.asyncIterator || "@@asyncIterator",
            l = i.toStringTag || "@@toStringTag";
          function c(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            c({}, "");
          } catch (e) {
            c = function (e, t, r) {
              return (e[t] = r);
            };
          }
          function u(e, t, r, n) {
            var i = t && t.prototype instanceof g ? t : g,
              a = Object.create(i.prototype),
              s = new R(n || []);
            return o(a, "_invoke", { value: A(e, r, s) }), a;
          }
          function d(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = u;
          var p = "suspendedStart",
            m = "executing",
            h = "completed",
            f = {};
          function g() {}
          function y() {}
          function w() {}
          var v = {};
          c(v, a, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            E = b && b(b(C([])));
          E && E !== r && n.call(E, a) && (v = E);
          var L = (w.prototype = g.prototype = Object.create(v));
          function x(e) {
            ["next", "throw", "return"].forEach(function (t) {
              c(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function S(e, t) {
            function r(o, i, a, s) {
              var l = d(e[o], e, i);
              if ("throw" !== l.type) {
                var c = l.arg,
                  u = c.value;
                return u && "object" == typeof u && n.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        r("next", e, a, s);
                      },
                      function (e) {
                        r("throw", e, a, s);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (c.value = e), a(c);
                      },
                      function (e) {
                        return r("throw", e, a, s);
                      }
                    );
              }
              s(l.arg);
            }
            var i;
            o(this, "_invoke", {
              value: function (e, n) {
                function o() {
                  return new t(function (t, o) {
                    r(e, n, t, o);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function A(e, t, r) {
            var n = p;
            return function (o, i) {
              if (n === m) throw new Error("Generator is already running");
              if (n === h) {
                if ("throw" === o) throw i;
                return q();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var s = T(a, r);
                  if (s) {
                    if (s === f) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (n === p) throw ((n = h), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = m;
                var l = d(e, t, r);
                if ("normal" === l.type) {
                  if (((n = r.done ? h : "suspendedYield"), l.arg === f))
                    continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((n = h), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function T(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  T(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                f
              );
            var i = d(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), f
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  f)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                f);
          }
          function k(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function _(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function R(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(k, this),
              this.reset(!0);
          }
          function C(e) {
            if (e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function r() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (r.value = e[o]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (i.next = i);
              }
            }
            return { next: q };
          }
          function q() {
            return { value: t, done: !0 };
          }
          return (
            (y.prototype = w),
            o(L, "constructor", { value: w, configurable: !0 }),
            o(w, "constructor", { value: y, configurable: !0 }),
            (y.displayName = c(w, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === y || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, w)
                  : ((e.__proto__ = w), c(e, l, "GeneratorFunction")),
                (e.prototype = Object.create(L)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            x(S.prototype),
            c(S.prototype, s, function () {
              return this;
            }),
            (e.AsyncIterator = S),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new S(u(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            x(L),
            c(L, l, "Generator"),
            c(L, a, function () {
              return this;
            }),
            c(L, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = Object(e),
                r = [];
              for (var n in t) r.push(n);
              return (
                r.reverse(),
                function e() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in t) return (e.value = n), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (e.values = C),
            (R.prototype = {
              constructor: R,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(_),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function o(n, o) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    s = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var l = n.call(a, "catchLoc"),
                      c = n.call(a, "finallyLoc");
                    if (l && c) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (l) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  f
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), _(r), f;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      _(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: C(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  f
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
      181: (e, t, r) => {
        const n = r(1158);
        e.exports = {
          recognize: async (e, t, r) => {
            const o = await n(r);
            return (
              await o.loadLanguage(t),
              await o.initialize(t),
              o.recognize(e).finally(async () => {
                await o.terminate();
              })
            );
          },
          detect: async (e, t) => {
            const r = await n(t);
            return (
              await r.loadLanguage("osd"),
              await r.initialize("osd"),
              r.detect(e).finally(async () => {
                await r.terminate();
              })
            );
          },
        };
      },
      6308: (e) => {
        e.exports = {
          TESSERACT_ONLY: 0,
          LSTM_ONLY: 1,
          TESSERACT_LSTM_COMBINED: 2,
          DEFAULT: 3,
        };
      },
      7895: (e) => {
        e.exports = {
          OSD_ONLY: "0",
          AUTO_OSD: "1",
          AUTO_ONLY: "2",
          AUTO: "3",
          SINGLE_COLUMN: "4",
          SINGLE_BLOCK_VERT_TEXT: "5",
          SINGLE_BLOCK: "6",
          SINGLE_LINE: "7",
          SINGLE_WORD: "8",
          CIRCLE_WORD: "9",
          SINGLE_CHAR: "10",
          SPARSE_TEXT: "11",
          SPARSE_TEXT_OSD: "12",
          RAW_LINE: "13",
        };
      },
      9154: (e, t, r) => {
        const n = r(6308);
        e.exports = { defaultOEM: n.DEFAULT };
      },
      8720: (e) => {
        e.exports = {
          langPath: "https://tessdata.projectnaptha.com/4.0.0",
          workerBlobURL: !0,
          logger: () => {},
        };
      },
      9520: (e) => {
        e.exports = {
          AFR: "afr",
          AMH: "amh",
          ARA: "ara",
          ASM: "asm",
          AZE: "aze",
          AZE_CYRL: "aze_cyrl",
          BEL: "bel",
          BEN: "ben",
          BOD: "bod",
          BOS: "bos",
          BUL: "bul",
          CAT: "cat",
          CEB: "ceb",
          CES: "ces",
          CHI_SIM: "chi_sim",
          CHI_TRA: "chi_tra",
          CHR: "chr",
          CYM: "cym",
          DAN: "dan",
          DEU: "deu",
          DZO: "dzo",
          ELL: "ell",
          ENG: "eng",
          ENM: "enm",
          EPO: "epo",
          EST: "est",
          EUS: "eus",
          FAS: "fas",
          FIN: "fin",
          FRA: "fra",
          FRK: "frk",
          FRM: "frm",
          GLE: "gle",
          GLG: "glg",
          GRC: "grc",
          GUJ: "guj",
          HAT: "hat",
          HEB: "heb",
          HIN: "hin",
          HRV: "hrv",
          HUN: "hun",
          IKU: "iku",
          IND: "ind",
          ISL: "isl",
          ITA: "ita",
          ITA_OLD: "ita_old",
          JAV: "jav",
          JPN: "jpn",
          KAN: "kan",
          KAT: "kat",
          KAT_OLD: "kat_old",
          KAZ: "kaz",
          KHM: "khm",
          KIR: "kir",
          KOR: "kor",
          KUR: "kur",
          LAO: "lao",
          LAT: "lat",
          LAV: "lav",
          LIT: "lit",
          MAL: "mal",
          MAR: "mar",
          MKD: "mkd",
          MLT: "mlt",
          MSA: "msa",
          MYA: "mya",
          NEP: "nep",
          NLD: "nld",
          NOR: "nor",
          ORI: "ori",
          PAN: "pan",
          POL: "pol",
          POR: "por",
          PUS: "pus",
          RON: "ron",
          RUS: "rus",
          SAN: "san",
          SIN: "sin",
          SLK: "slk",
          SLV: "slv",
          SPA: "spa",
          SPA_OLD: "spa_old",
          SQI: "sqi",
          SRP: "srp",
          SRP_LATN: "srp_latn",
          SWA: "swa",
          SWE: "swe",
          SYR: "syr",
          TAM: "tam",
          TEL: "tel",
          TGK: "tgk",
          TGL: "tgl",
          THA: "tha",
          TIR: "tir",
          TUR: "tur",
          UIG: "uig",
          UKR: "ukr",
          URD: "urd",
          UZB: "uzb",
          UZB_CYRL: "uzb_cyrl",
          VIE: "vie",
          YID: "yid",
        };
      },
      1949: (e, t, r) => {
        const n = r(5504);
        let o = 0;
        e.exports = ({ id: e, action: t, payload: r = {} }) => {
          let i = e;
          return (
            void 0 === i && ((i = n("Job", o)), (o += 1)),
            { id: i, action: t, payload: r }
          );
        };
      },
      7877: function (e, t, r) {
        const n = r(1949),
          { log: o } = r(3486),
          i = r(5504);
        let a = 0;
        e.exports = () => {
          const e = i("Scheduler", a),
            t = {},
            r = {};
          let s = [];
          a += 1;
          const l = () => Object.keys(t).length,
            c = () => {
              if (0 !== s.length) {
                const e = Object.keys(t);
                for (let n = 0; n < e.length; n += 1)
                  if (void 0 === r[e[n]]) {
                    s[0](t[e[n]]);
                    break;
                  }
              }
            },
            u = (t, i) =>
              new Promise((a, l) => {
                const u = n({ action: t, payload: i });
                s.push(async (e) => {
                  s.shift(), (r[e.id] = u);
                  try {
                    a(await e[t].apply(this, [...i, u.id]));
                  } catch (e) {
                    l(e);
                  } finally {
                    delete r[e.id], c();
                  }
                }),
                  o(`[${e}]: Add ${u.id} to JobQueue`),
                  o(`[${e}]: JobQueue length=${s.length}`),
                  c();
              });
          return {
            addWorker: (r) => (
              (t[r.id] = r),
              o(`[${e}]: Add ${r.id}`),
              o(`[${e}]: Number of workers=${l()}`),
              c(),
              r.id
            ),
            addJob: async (t, ...r) => {
              if (0 === l())
                throw Error(
                  `[${e}]: You need to have at least one worker before adding jobs`
                );
              return u(t, r);
            },
            terminate: async () => {
              Object.keys(t).forEach(async (e) => {
                await t[e].terminate();
              }),
                (s = []);
            },
            getQueueLen: () => s.length,
            getNumWorkers: l,
          };
        };
      },
      1158: (e, t, r) => {
        const n = r(1937),
          o = r(3634),
          i = r(1949),
          { log: a } = r(3486),
          s = r(5504),
          { defaultOEM: l } = r(9154),
          {
            defaultOptions: c,
            spawnWorker: u,
            terminateWorker: d,
            onMessage: p,
            loadImage: m,
            send: h,
          } = r(3791);
        let f = 0;
        e.exports = async (e = {}) => {
          const t = s("Worker", f),
            { logger: r, errorHandler: g, ...y } = n({ ...c, ...e }),
            w = {},
            v = {};
          let b, E;
          const L = new Promise((e, t) => {
            (E = e), (b = t);
          });
          let x = u(y);
          (x.onerror = (e) => {
            b(e.message);
          }),
            (f += 1);
          const S = (e, t) => {
              w[e] = t;
            },
            A = (e, t) => {
              v[e] = t;
            },
            T = ({ id: e, action: r, payload: n }) =>
              new Promise((o, i) => {
                a(`[${t}]: Start ${e}, action=${r}`),
                  S(r, o),
                  A(r, i),
                  h(x, { workerId: t, jobId: e, action: r, payload: n });
              });
          p(x, ({ workerId: e, jobId: t, status: n, action: i, data: s }) => {
            if ("resolve" === n) {
              a(`[${e}]: Complete ${t}`);
              let r = s;
              "recognize" === i
                ? (r = o(s))
                : "getPDF" === i &&
                  (r = Array.from({ ...s, length: Object.keys(s).length })),
                w[i]({ jobId: t, data: r });
            } else if ("reject" === n) {
              if ((v[i](s), "load" === i && b(s), !g)) throw Error(s);
              g(s);
            } else "progress" === n && r({ ...s, userJobId: t });
          });
          const k = {
            id: t,
            worker: x,
            setResolve: S,
            setReject: A,
            load: () =>
              console.warn(
                "`load` is depreciated and should be removed from code (workers now come pre-loaded)"
              ),
            writeText: (e, t, r) =>
              T(
                i({
                  id: r,
                  action: "FS",
                  payload: { method: "writeFile", args: [e, t] },
                })
              ),
            readText: (e, t) =>
              T(
                i({
                  id: t,
                  action: "FS",
                  payload: {
                    method: "readFile",
                    args: [e, { encoding: "utf8" }],
                  },
                })
              ),
            removeFile: (e, t) =>
              T(
                i({
                  id: t,
                  action: "FS",
                  payload: { method: "unlink", args: [e] },
                })
              ),
            FS: (e, t, r) =>
              T(i({ id: r, action: "FS", payload: { method: e, args: t } })),
            loadLanguage: (e = "eng", t) =>
              T(
                i({
                  id: t,
                  action: "loadLanguage",
                  payload: { langs: e, options: y },
                })
              ),
            initialize: (e = "eng", t = l, r, n) =>
              T(
                i({
                  id: n,
                  action: "initialize",
                  payload: { langs: e, oem: t, config: r },
                })
              ),
            setParameters: (e = {}, t) =>
              T(i({ id: t, action: "setParameters", payload: { params: e } })),
            recognize: async (
              e,
              t = {},
              r = { blocks: !0, text: !0, hocr: !0, tsv: !0 },
              n
            ) =>
              T(
                i({
                  id: n,
                  action: "recognize",
                  payload: { image: await m(e), options: t, output: r },
                })
              ),
            getPDF: (e = "Tesseract OCR Result", t = !1, r) => (
              console.log(
                "`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."
              ),
              T(
                i({
                  id: r,
                  action: "getPDF",
                  payload: { title: e, textonly: t },
                })
              )
            ),
            detect: async (e, t) =>
              T(i({ id: t, action: "detect", payload: { image: await m(e) } })),
            terminate: async () => (
              null !== x && (d(x), (x = null)), Promise.resolve()
            ),
          };
          var _;
          return (
            T(i({ id: _, action: "load", payload: { options: y } }))
              .then(() => E(k))
              .catch(() => {}),
            L
          );
        };
      },
      7320: (e, t, r) => {
        r(5666);
        const n = r(7877),
          o = r(1158),
          i = r(181),
          a = r(9520),
          s = r(6308),
          l = r(7895),
          { setLogging: c } = r(3486);
        e.exports = {
          languages: a,
          OEM: s,
          PSM: l,
          createScheduler: n,
          createWorker: o,
          setLogging: c,
          ...i,
        };
      },
      3634: (e) => {
        e.exports = (e) => {
          const t = [],
            r = [],
            n = [],
            o = [],
            i = [];
          return (
            e.blocks &&
              e.blocks.forEach((a) => {
                a.paragraphs.forEach((t) => {
                  t.lines.forEach((r) => {
                    r.words.forEach((n) => {
                      n.symbols.forEach((o) => {
                        i.push({
                          ...o,
                          page: e,
                          block: a,
                          paragraph: t,
                          line: r,
                          word: n,
                        });
                      }),
                        o.push({
                          ...n,
                          page: e,
                          block: a,
                          paragraph: t,
                          line: r,
                        });
                    }),
                      n.push({ ...r, page: e, block: a, paragraph: t });
                  }),
                    r.push({ ...t, page: e, block: a });
                }),
                  t.push({ ...a, page: e });
              }),
            { ...e, blocks: t, paragraphs: r, lines: n, words: o, symbols: i }
          );
        };
      },
      6376: (e, t, r) => {
        const n = r(9134);
        e.exports = (e) => {
          const t = {};
          return (
            "undefined" != typeof WorkerGlobalScope
              ? (t.type = "webworker")
              : n()
              ? (t.type = "electron")
              : "object" == typeof window
              ? (t.type = "browser")
              : "object" == typeof process && (t.type = "node"),
            void 0 === e ? t : t[e]
          );
        };
      },
      5504: (e) => {
        e.exports = (e, t) =>
          `${e}-${t}-${Math.random().toString(16).slice(3, 8)}`;
      },
      3486: function (e, t) {
        let r = !1;
        (t.logging = r),
          (t.setLogging = (e) => {
            r = e;
          }),
          (t.log = (...e) => (r ? console.log.apply(this, e) : null));
      },
      1937: (e, t, r) => {
        const n =
          "browser" === r(6376)("type")
            ? (e) => new URL(e, window.location.href).href
            : (e) => e;
        e.exports = (e) => {
          const t = { ...e };
          return (
            ["corePath", "workerPath", "langPath"].forEach((r) => {
              e[r] && (t[r] = n(t[r]));
            }),
            t
          );
        };
      },
      4040: (e, t, r) => {
        const { version: n } = r(4547),
          o = r(8720);
        var i;
        e.exports = {
          ...o,
          workerPath:
            "undefined" != typeof process &&
            "development" === "MISSING_ENV_VAR".TESS_ENV
              ? ((i = `/dist/worker.dev.js?nocache=${Math.random()
                  .toString(36)
                  .slice(3)}`),
                new URL(i, window.location.href).href)
              : `https://cdn.jsdelivr.net/npm/tesseract.js@v${n}/dist/worker.min.js`,
          corePath: null,
        };
      },
      3791: (e, t, r) => {
        const n = r(4040),
          o = r(1005),
          i = r(25),
          a = r(9804),
          s = r(7247),
          l = r(1196);
        e.exports = {
          defaultOptions: n,
          spawnWorker: o,
          terminateWorker: i,
          onMessage: a,
          send: s,
          loadImage: l,
        };
      },
      1196: (e) => {
        const t = (e) =>
            new Promise((t, r) => {
              const n = new FileReader();
              (n.onload = () => {
                t(n.result);
              }),
                (n.onerror = ({
                  target: {
                    error: { code: e },
                  },
                }) => {
                  r(Error(`File could not be read! Code=${e}`));
                }),
                n.readAsArrayBuffer(e);
            }),
          r = async (e) => {
            let n = e;
            if (void 0 === e) return "undefined";
            if ("string" == typeof e)
              if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e))
                n = atob(e.split(",")[1])
                  .split("")
                  .map((e) => e.charCodeAt(0));
              else {
                const t = await fetch(e);
                n = await t.arrayBuffer();
              }
            else if (
              "undefined" != typeof HTMLElement &&
              e instanceof HTMLElement
            )
              "IMG" === e.tagName && (n = await r(e.src)),
                "VIDEO" === e.tagName && (n = await r(e.poster)),
                "CANVAS" === e.tagName &&
                  (await new Promise((r) => {
                    e.toBlob(async (e) => {
                      (n = await t(e)), r();
                    });
                  }));
            else if (
              "undefined" != typeof OffscreenCanvas &&
              e instanceof OffscreenCanvas
            ) {
              const r = await e.convertToBlob();
              n = await t(r);
            } else (e instanceof File || e instanceof Blob) && (n = await t(e));
            return new Uint8Array(n);
          };
        e.exports = r;
      },
      9804: (e) => {
        e.exports = (e, t) => {
          e.onmessage = ({ data: e }) => {
            t(e);
          };
        };
      },
      7247: (e) => {
        e.exports = async (e, t) => {
          e.postMessage(t);
        };
      },
      1005: (e) => {
        e.exports = ({ workerPath: e, workerBlobURL: t }) => {
          let r;
          if (Blob && URL && t) {
            const t = new Blob([`importScripts("${e}");`], {
              type: "application/javascript",
            });
            r = new Worker(URL.createObjectURL(t));
          } else r = new Worker(e);
          return r;
        };
      },
      25: (e) => {
        e.exports = (e) => {
          e.terminate();
        };
      },
      4547: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"name":"tesseract.js","version":"4.1.2","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","lint:fix":"eslint --fix src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0","acorn":"^8.8.2","babel-loader":"^9.1.2","buffer":"^6.0.3","cors":"^2.8.5","eslint":"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1","express":"^4.18.2","mocha":"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5","nyc":"^15.1.0","rimraf":"^5.0.0","rollup":"^3.20.7","wait-on":"^7.0.1","webpack":"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},"dependencies":{"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^4.0.4","wasm-feature-detect":"^1.2.11","zlibjs":"^0.3.1"},"overrides":{"@rollup/pluginutils":"^5.0.2"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}'
        );
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { exports: {} });
    return e[n].call(i.exports, i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = r(7320),
        t = r.n(e);
      let n,
        o = "Loading...",
        i = null,
        a = !1,
        s = "none",
        l = null,
        c = "",
        u = "",
        d = "";
      function p(e) {
        return e.map((e, t) => `${t + 1}) ${e}`).join("\n");
      }
      chrome.storage.local.get("userIsSubscribed", function (e) {
        n = e.userIsSubscribed;
      }),
        chrome.storage.local.get("SCRIPT_ENABLED", ({ SCRIPT_ENABLED: e }) => {
          !1 !== e && (s = "revert");
        }),
        chrome.storage.local.get("CURRENT_USER", ({ CURRENT_USER: e }) => {
          e && (c = e);
        }),
        chrome.storage.local.get("AUTO_SELECT", ({ AUTO_SELECT: e }) => {
          !1 !== e && (a = "true");
        }),
        window.addEventListener("load", (e) => {
          const t = window.location.href;
          if (t.includes("canvas") || t.includes("instructure")) {
            document.querySelectorAll(".display_question").forEach((e, t) => {
              let r = f(function (t) {
                t.preventDefault(),
                  (function (e) {
                    let t = (function (e) {
                        return e.querySelector(".question_type");
                      })(e),
                      r = t ? t.innerText : null,
                      n = (function (e) {
                        return e.querySelector(".question_text");
                      })(e),
                      i = n ? n.innerText : "";
                    g(o);
                    let s = "",
                      l = (function (e, t) {
                        return "multiple_choice_question" === t
                          ? e.querySelectorAll(".answer .answer_label")
                          : "matching_question" === t
                          ? e.querySelectorAll(".answer")
                          : "true_false_question" === t ||
                            "multiple_answers_question" === t
                          ? e.querySelectorAll(".answer .answer_label")
                          : [];
                      })(e, r);
                    l.forEach((e, t) => {
                      if ("multiple_choice_question" === r)
                        s += "\n" + (t + 1) + ") " + e.innerText;
                      else if ("matching_question" === r) {
                        let r = e.querySelector("label").innerText,
                          n = Array.from(e.querySelectorAll("select option"))
                            .map((e) => e.innerText)
                            .join(", ");
                        s += "\n" + (t + 1) + ") " + r + " [ " + n + " ]";
                      } else s += "\n" + (t + 1) + ") " + e.innerText;
                    });
                    let p = i;
                    u = p;
                    let m = s;
                    chrome.runtime.sendMessage(
                      {
                        action: "getQuestionAndAnswerCanvas",
                        question: p,
                        answers: m,
                        user: c,
                      },
                      function (t) {
                        if (t)
                          if (t.error)
                            console.log("Error occurred"),
                              y("An error occurred. Please try again.");
                          else {
                            let r = t.answer;
                            (d = r), y(r);
                            let n = Array.from(r.matchAll(/(\d+)\)/g)).map(
                                (e) => parseInt(e[1]) - 1
                              ),
                              o = e.querySelectorAll(
                                ".answer .answer_input .question_input"
                              );
                            n.forEach((e, t) => {
                              let r = o[e];
                              r &&
                                a &&
                                setTimeout(() => {
                                  r.click();
                                }, 100 * t);
                            });
                          }
                        else console.log("Response was undefined");
                        return !0;
                      }
                    );
                  })(e);
              });
              !(function (e, t) {
                let r = (function (e) {
                  return e.querySelector(".question_name");
                })(t);
                r && r.parentNode.insertBefore(e, r.nextSibling);
              })(r, e);
            });
          }
        });
      const m = () => {
          console.log("Checking for questions..."),
            document
              .querySelectorAll(".multiple-choice-component")
              .forEach((e) => {
                if (e.querySelector(".custom-question-button")) return;
                let t = f(function (t) {
                  t.preventDefault(),
                    (function (e) {
                      let t = e.querySelector(".prompt").innerText.trim(),
                        r = Array.from(e.querySelectorAll(".choiceText")).map(
                          (e) => e.innerText.trim()
                        );
                      g(o), r.join("\n");
                      let n = p(r);
                      (u = t),
                        chrome.runtime.sendMessage(
                          {
                            action: "getQuestionAndAnswerCanvas",
                            question: t,
                            answers: n,
                            user: c,
                          },
                          function (t) {
                            if (t)
                              if (t.error)
                                console.log("Error occurred"),
                                  y("An error occurred. Please try again.");
                              else {
                                let r = t.answer;
                                (d = r), y(r);
                                let n = parseInt(r.split(") ")[0]) - 1,
                                  o = e.querySelectorAll(
                                    '.choice-row .ahe-ui-radio input[type="radio"]'
                                  )[n];
                                o && a && o.click();
                              }
                            else console.log("Response was undefined");
                            return !0;
                          }
                        );
                    })(e);
                });
                l && l.disconnect(), e.appendChild(t), l && h();
              }),
            document.querySelectorAll(".matching-component").forEach((e) => {
              if (e.querySelector(".custom-question-button")) return;
              let t = f(function (t) {
                t.preventDefault(),
                  (function (e) {
                    let t = e.querySelector(".prompt").innerText.trim(),
                      r = "";
                    const n = e.querySelectorAll(".match-prompt-label p"),
                      i = Array.from(n).map((e) => e.textContent.trim()),
                      s = e.querySelectorAll(".choice-item p"),
                      l = Array.from(s).map((e) => e.textContent.trim());
                    i.forEach((e, t) => {
                      r += t + 1 + ") " + e + " [ " + l.join(", ") + " ]\n";
                    }),
                      g(o),
                      chrome.runtime.sendMessage(
                        {
                          action: "getQuestionAndAnswerCanvas",
                          question: t,
                          answers: r,
                          user: c,
                        },
                        function (t) {
                          if (t)
                            if (t.error)
                              console.log("Error occurred"),
                                y("An error occurred. Please try again.");
                            else {
                              let r = t.answer;
                              y(r);
                              let n = e.querySelector('input[type="text"]');
                              n && a && (n.value = r);
                            }
                          else console.log("Response was undefined");
                          return !0;
                        }
                      );
                  })(e);
              });
              l && l.disconnect(), e.appendChild(t), l && h();
            }),
            document
              .querySelectorAll(".multiple-select-component")
              .forEach((e) => {
                if (e.querySelector(".custom-question-button")) return;
                let t = f(function (t) {
                  t.preventDefault(),
                    (function (e) {
                      let t = e.querySelector(".prompt").innerText.trim(),
                        r = Array.from(e.querySelectorAll(".choice-row")).map(
                          (e) => e.innerText.trim()
                        );
                      g(o), r.join("\n");
                      let n = p(r);
                      chrome.runtime.sendMessage(
                        {
                          action: "getQuestionAndAnswerCanvas",
                          question: t,
                          answers: n,
                          user: c,
                        },
                        function (t) {
                          if (t)
                            if (t.error)
                              console.log("Error occurred"),
                                y("An error occurred. Please try again.");
                            else {
                              let r = t.answer;
                              y(r);
                              let n = Array.from(r.matchAll(/(\d+)\)/g)).map(
                                  (e) => parseInt(e[1]) - 1
                                ),
                                o = e.querySelectorAll(
                                  '.choice-row .ahe-ui-checkbox input[type="checkbox"]'
                                );
                              n.forEach((e) => {
                                let t = o[e];
                                t && a && t.click();
                              });
                            }
                          else console.log("Response was undefined");
                          return !0;
                        }
                      );
                    })(e);
                });
                l && l.disconnect(), e.appendChild(t), l && h();
              });
        },
        h = () => {
          (l = new MutationObserver((e) => {
            for (let t of e) "childList" === t.type && m();
          })),
            l.observe(document.body, { childList: !0, subtree: !0 });
        };
      function f(e) {
        let t = document.createElement("button");
        (t.type = "button"),
          t.classList.add("custom-question-button"),
          (t.style.border = "none"),
          (t.style.background = "black"),
          (t.style.borderRadius = "8px");
        let r = document.createElement("img");
        return (
          (r.src = chrome.runtime.getURL("quizLogo.png")),
          (r.alt = "Submit"),
          (r.style.width = "100px"),
          (r.style.height = "auto"),
          (r.style.padding = "6px"),
          t.appendChild(r),
          (t.style.display = s),
          chrome.runtime.onMessage.addListener((e, r, n) => {
            void 0 !== e.SCRIPT_ENABLED &&
              (t.style.display = e.SCRIPT_ENABLED ? "revert" : "none"),
              void 0 !== e.AUTO_SELECT &&
                (a = e.AUTO_SELECT ? "true" : "false");
          }),
          t.addEventListener("click", (t) => {
            try {
              chrome.runtime.sendMessage({ action: "closePopup" });
            } catch (e) {
              console.log("already closed");
            }
            e(t);
          }),
          t
        );
      }
      function g(e) {
        if (((i = document.querySelector(".myquizmate-popup")), i)) {
          let t = i.querySelector(".myquizmate-popup-answer-text");
          "Loading..." === e
            ? (t.innerHTML = '<div class="loading-dot"></div>')
            : (t.innerText = e);
        } else {
          (i = document.createElement("div")),
            i.classList.add("myquizmate-popup");
          let t = document.createElement("div");
          t.classList.add("myquizmate-popup-header");
          let r = document.createElement("img");
          r.classList.add("myquizmate-popup-logo"),
            (r.src = chrome.runtime.getURL("quizLogo.png")),
            t.appendChild(r);
          let n = document.createElement("div");
          n.classList.add("myquizmate-popup-content");
          let o = document.createElement("div");
          n.classList.add("myquizmate-popup-content-child");
          let a = document.createElement("span");
          a.classList.add("myquizmate-popup-close"),
            (a.onclick = function () {
              i.remove();
            });
          let s = document.createElement("h1");
          s.classList.add("myquizmate-popup-header-text"),
            (s.innerText = "Answer");
          let l = document.createElement("h3");
          l.classList.add("myquizmate-popup-answer-text"),
            "Loading..." === e
              ? (l.innerHTML = '<div class="loading-dot"></div>')
              : (l.innerText = e);
          let p = document.createElement("button");
          (p.innerText = "Quick Learn"),
            p.classList.add("myquizmate-popup-explain-btn"),
            (p.onclick = function () {
              (l.innerHTML = '<div class="loading-dot"></div>'),
                chrome.runtime.sendMessage(
                  {
                    action: "getExplaination",
                    question: u,
                    answer: d,
                    user: c,
                  },
                  function (e) {
                    if (e)
                      if (e.error)
                        console.log("Error occurred"),
                          y("An error occurred. Please try again.");
                      else {
                        y(e.answer);
                      }
                    else console.log("Response was undefined");
                    return !0;
                  }
                );
            }),
            t.appendChild(a),
            n.appendChild(t),
            o.appendChild(a),
            o.appendChild(s),
            o.appendChild(l),
            o.appendChild(p),
            n.appendChild(o),
            i.appendChild(n),
            document.body.appendChild(i);
          let m = !1,
            h = { x: 0, y: 0 };
          t.addEventListener("mousedown", function (e) {
            (m = !0),
              (h = {
                x: e.clientX - i.getBoundingClientRect().left,
                y: e.clientY - i.getBoundingClientRect().top,
              }),
              e.preventDefault();
          }),
            document.addEventListener("mouseup", function () {
              m = !1;
            }),
            document.addEventListener("mousemove", function (e) {
              m &&
                ((i.style.left = e.clientX - h.x + "px"),
                (i.style.top = e.clientY - h.y + "px"));
            });
        }
      }
      function y(e) {
        i.querySelector(".myquizmate-popup-answer-text").innerText = e;
      }
      window.addEventListener("load", (e) => {
        window.location.href.includes("learning.mheducation.com") &&
          setTimeout(() => {
            m(), h();
          }, 3500);
      }),
        chrome.runtime.onMessage.addListener((e, t, r) => {
          e.OPEN_ANSWER_MODAL &&
            (function (e) {
              let t = document.querySelector(".open-popup");
              if (t) {
                t.querySelector(".open-popup-answer-text").innerText = e;
              } else {
                let t = document.createElement("div");
                t.classList.add("open-popup");
                let r = document.createElement("div");
                r.classList.add("myquizmate-popup-header");
                let n = document.createElement("img");
                n.classList.add("myquizmate-popup-logo"),
                  (n.src = chrome.runtime.getURL("quizLogo.png")),
                  r.appendChild(n);
                let o = document.createElement("div");
                o.classList.add("open-popup-content");
                let i = document.createElement("div");
                i.classList.add("open-popup-content-child");
                let a = document.createElement("span");
                a.classList.add("open-popup-close"),
                  (a.onclick = function () {
                    t.remove();
                  });
                let s = document.createElement("h1");
                s.classList.add("open-popup-header-text"),
                  (s.innerText = "Enter Your Question");
                let l = document.createElement("p");
                l.classList.add("open-popup-subtext"),
                  (l.innerText =
                    "Paste your question and answer choices into the text box to get the correct answer.");
                let u = document.createElement("textarea");
                (u.id = "questionInputBox"),
                  (u.placeholder = "Paste your question here..."),
                  u.classList.add("open-popup-input");
                let d = document.createElement("button");
                (d.innerText = "Get Answer"),
                  d.classList.add("open-popup-button");
                let p = document.createElement("div");
                p.classList.add("open-popup-answer-text"),
                  (p.id = "answerDisplay"),
                  r.appendChild(a),
                  i.appendChild(r),
                  i.appendChild(s),
                  i.appendChild(l),
                  i.appendChild(u),
                  i.appendChild(d),
                  i.appendChild(p),
                  o.appendChild(i),
                  t.appendChild(o),
                  document.body.appendChild(t),
                  (d.onclick = function () {
                    let t = document.querySelector("#questionInputBox").value;
                    (document.querySelector("#answerDisplay").innerText = e),
                      chrome.runtime.sendMessage(
                        { action: "getAnswerFromPopup", question: t, user: c },
                        function (e) {
                          if (e)
                            if (e.error)
                              console.log("Error occurred"),
                                y("An error occurred. Please try again.");
                            else {
                              let t = e.answer;
                              document.querySelector(
                                "#answerDisplay"
                              ).innerText = t;
                            }
                          else console.log("Response was undefined");
                          return !0;
                        }
                      );
                  });
                let m = !1,
                  h = { x: 0, y: 0 };
                r.addEventListener("mousedown", function (e) {
                  (m = !0),
                    (h = {
                      x: e.clientX - t.getBoundingClientRect().left,
                      y: e.clientY - t.getBoundingClientRect().top,
                    }),
                    e.preventDefault();
                }),
                  document.addEventListener("mouseup", function () {
                    m = !1;
                  }),
                  document.addEventListener("mousemove", function (e) {
                    m &&
                      ((t.style.left = e.clientX - h.x + "px"),
                      (t.style.top = e.clientY - h.y + "px"));
                  });
              }
            })("Loading");
        }),
        chrome.runtime.onMessage.addListener((e, t, r) => {
          switch (e.action) {
            case "SET_USER_SUBSCRIPTION_STATUS":
              (n = e.isSubscribed),
                r({ message: "Received user subscription status" });
              break;
            case "RIGHT_CLICK_ANS":
              y(e.answer), r({ message: "received right click" });
              break;
            case "RIGHT_CLICK_LOAD":
              g(o);
          }
        }),
        chrome.runtime.onMessage.addListener((e, t, r) => {
          void 0 !== e.SNAPSHOT_MODE && e.SNAPSHOT_MODE && w();
        });
      const w = () => {
        let e,
          r,
          n,
          i,
          a,
          s = !1;
        const l = document.createElement("div");
        (l.style.position = "fixed"),
          (l.style.top = "0"),
          (l.style.left = "0"),
          (l.style.width = "100%"),
          (l.style.height = "100%"),
          (l.style.zIndex = "99999999"),
          (l.style.boxSizing = "border-box"),
          (l.style.margin = "0"),
          (l.style.padding = "0"),
          (l.style.cursor = "crosshair"),
          document.body.appendChild(l),
          document.addEventListener("keydown", function e(t) {
            ("Escape" !== t.key && 27 !== t.keyCode) ||
              ((s = !0),
              l.remove(),
              a && a.remove(),
              document.removeEventListener("keydown", e));
          }),
          l.addEventListener("mousedown", (t) => {
            t.stopPropagation(),
              t.preventDefault(),
              (e = t.clientX),
              (r = t.clientY),
              (a = document.createElement("div")),
              (a.style.position = "fixed"),
              (a.style.border = "2px dashed #1478F2"),
              (a.style.backgroundColor = "rgba(20, 120, 242, 0.5)"),
              (a.style.boxSizing = "border-box"),
              (a.style.margin = "0"),
              (a.style.padding = "0"),
              (a.style.top = r + "px"),
              (a.style.left = e + "px"),
              (a.style.width = "0"),
              (a.style.height = "0"),
              (a.style.zIndex = "100000000"),
              document.body.appendChild(a),
              document.addEventListener("mousemove", u),
              document.addEventListener("mouseup", d);
          });
        const u = (t) => {
            (a.style.width = Math.abs(t.clientX - e) + "px"),
              (a.style.height = Math.abs(t.clientY - r) + "px"),
              (a.style.left = t.clientX < e ? t.clientX + "px" : e + "px"),
              (a.style.top = t.clientY < r ? t.clientY + "px" : r + "px");
          },
          d = (t) => {
            if (s) return;
            (n = t.clientX), (i = t.clientY);
            const o = document.createElement("div");
            (o.style.position = "fixed"),
              (o.style.left = Math.min(e, n) + "px"),
              (o.style.top = Math.min(r, i) + "px"),
              (o.style.width = Math.abs(n - e) + "px"),
              (o.style.height = Math.abs(i - r) + "px"),
              document.body.appendChild(o);
            const c = o.getBoundingClientRect();
            document.body.removeChild(o),
              l.remove(),
              a && a.remove(),
              document.removeEventListener("mousemove", u),
              document.removeEventListener("mouseup", d);
            const m = window.devicePixelRatio;
            p(c.left * m, c.top * m, c.width * m, c.height * m);
          },
          p = (e, r, n, i) => {
            g(o),
              chrome.runtime.sendMessage(
                {
                  action: "CAPTURE_VISIBLE_TAB",
                  params: { x: e, y: r, width: n, height: i },
                },
                (e) => {
                  const r = e.dataUrl;
                  t()
                    .recognize(r, "eng", { oem: 1, psm: 3 })
                    .then(({ data: { text: e } }) => {
                      let t = (function (e) {
                        const t = e.replace("Group of answer choices", ""),
                          r = t
                            .replace(/(i |O |© )/g, "")
                            .replace(/ {2,}/g, "\n");
                        return r.trim();
                      })(e);
                      chrome.runtime.sendMessage(
                        {
                          action: "getAnswerCanvas",
                          question: t,
                          currentUser: c,
                        },
                        function (e) {
                          if (e)
                            if (e.error)
                              console.log("Error occurred"),
                                y("An error occurred. Please try again.");
                            else {
                              y(e.answer);
                            }
                          else console.log("Response was undefined");
                          return !0;
                        }
                      ),
                        e || console.error("Result is empty");
                    })
                    .catch((e) => {
                      console.error("Error:", e);
                    });
                }
              );
          };
        l.addEventListener("mouseup", (e) => {
          l.removeEventListener("mousemove", u),
            l.removeEventListener("mouseup", d),
            d(e);
        });
      };
    })();
})();
