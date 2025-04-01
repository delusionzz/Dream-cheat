// ==UserScript==
// @name         Dream cheat
// @namespace
// @version      0.0.1
// @description  Fly through your assignments
// @author       Illusions
// @match        https://*.khanacademy.org/*
// @icon
// @grant        none
// ==/UserScript==

// dreamland.js, MIT license
const DLFEATURES = ["css", "jsxLiterals", "usestring", "stores"];
const DLVERSION = "0.0.25";
!(function (e) {
  const [t, n, r, s, i, l, o] = Array.from(Array(7), Symbol),
    f = "dlcomponent",
    a = {};
  function c() {
    return `${Array(4)
      .fill(0)
      .map(() => Math.floor(36 * Math.random()).toString(36))
      .join("")}`;
  }
  const u = (e) =>
      function (t, ...n) {
        let r = "";
        for (let e of t) r += e + (n.shift() || "");
        return h("dl" + c(), r, e);
      },
    d = u(!1),
    p = u(!0);
  function h(e, t, n) {
    let r = a[t];
    if (r) return r;
    a[t] = e;
    const s = document.createElement("style");
    document.head.appendChild(s);
    let i = "",
      l = "";
    for (t += "\n"; ; ) {
      let [e, ...n] = t.split("\n");
      if (e.trim().endsWith("{")) break;
      if (((l += e + "\n"), !(t = n.join("\n")))) break;
    }
    s.textContent = t;
    let o = !0;
    if (((o = !!window.CSSScopeRule), n && o)) {
      let t = "";
      for (const n of s.sheet.cssRules)
        n.selectorText || n.media
          ? n.selectorText?.startsWith(":")
            ? ((n.selectorText = `.${e}${n.selectorText}`), (t += n.cssText))
            : (i += n.cssText)
          : (t += n.cssText);
      s.textContent = `.${e} {${l}} @scope (.${e}) to (:not(.${e}).${f} *) { ${i} } ${t}`;
    } else {
      let t = "";
      n &&
        !o &&
        (t = (function (e) {
          let t = `:not(${e}).${f}`,
            n = (r, s) =>
              `${r} *${
                s > 50
                  ? ""
                  : `:not(${n(r + " " + (s % 2 == 0 ? e : t), s + 1)})`
              }`;
          return `:not(${n(t, 0)})`;
        })(`.${e}`));
      const r = (n) => {
        n.selectorText &&
          (n.selectorText = n.selectorText
            .split(",")
            .map((n) =>
              "&" === (n = n.trim())[0]
                ? `.${e}${n.slice(1)}${t}`
                : ":" === n[0]
                ? `.${e}${n}${t}`
                : `.${e} ${n}${t}`
            )
            .join(", ")),
          (i += n.cssText);
      };
      for (const e of s.sheet.cssRules)
        e.media && e.media.mediaText
          ? ((i += `@media(${e.media.mediaText}){`),
            Array.from(e.cssRules).map(r),
            (i += "}"))
          : r(e);
      s.textContent = `.${e} {${l}}${i}`;
    }
    return e;
  }
  let m = document;
  const g = Symbol();
  let b = !1;
  Object.defineProperty(window, "use", {
    get: () => (
      (b = !0),
      (e, i, ...l) => {
        if ((w(e) || j(e), e instanceof Array && "raw" in e))
          return y(e, i, ...l);
        b = !1;
        let o = {
          get value() {
            return (function (e) {
              let i = e[r],
                l = i[s],
                o = e[t],
                f = i[n];
              for (let e of l) if (((f = f[e]), !v(f))) break;
              for (let e of o) f = e(f);
              return f;
            })(o);
          },
        };
        if (j(e)) {
          let n = [...e[t]];
          i && n.push(i), (o[r] = e[r]), (o[t] = n);
        } else (o[r] = e), (o[t] = i ? [i] : []);
        return o;
      }
    ),
  }),
    Object.defineProperty(window, "useChange", {
      get: () => (
        (b = !0),
        (e, t) => {
          (b = !1), (e = e instanceof Array ? e : [e]);
          for (let n of e) w(n) || j(n), T(use(n), t);
        }
      ),
    });
  const y = (e, ...t) => {
    b = !1;
    let n = x({});
    const r = [];
    for (const s in e)
      if ((r.push(e[s]), t[s])) {
        let e = t[s];
        if ((w(e) && (e = use(e)), j(e))) {
          const t = r.length;
          let s;
          T(use(e), (e) => {
            r[t] = String(e);
            let i = r.join("");
            i != s && (n.string = i), (s = i);
          });
        } else r.push(String(e));
      }
    return (n.string = r.join("")), use(n.string);
  };
  let $ = new Map();
  function x(e) {
    v(e), (e[i] = []), (e[n] = e);
    let l = Symbol.toPrimitive,
      f = new Proxy(e, {
        get(e, i, o) {
          if (b) {
            let f = Symbol(),
              a = new Proxy(
                { [n]: e, [r]: o, [s]: [i], [l]: () => f },
                {
                  get: (e, i) =>
                    [n, r, s, t, l].includes(i)
                      ? e[i]
                      : ((i = $.get(i) || i), e[s].push(i), a),
                }
              );
            return $.set(f, a), a;
          }
          return Reflect.get(e, i, o);
        },
        set(e, t, n) {
          let r = Reflect.set(e, t, n);
          for (let r of e[i]) r(e, t, n);
          return e[o] && e[o](e, t, e[t]), r;
        },
      });
    return f;
  }
  let v = (e) => e instanceof Object;
  function S(e) {
    return v(e) && i in e;
  }
  function w(e) {
    return v(e) && s in e;
  }
  function j(e) {
    return v(e) && t in e;
  }
  function L(e) {
    return 0 != e[t].length;
  }
  function T(e, l) {
    j(e);
    let o,
      f = e[r],
      a = e[t],
      c = [];
    function u() {
      let e = f[n];
      for (o of c) if (((e = e[o]), !v(e))) break;
      for (let t of a) e = t(e);
      l(e);
    }
    let d = (e, t) =>
      function r(s, l, o) {
        if (l === c[t] && e === s && (u(), v(o))) {
          let e = o[i];
          e && !e.includes(r) && e.push(d(o[n], t + 1));
        }
      };
    for (let e in f[s]) {
      let t = f[s][e];
      v(t) && t[n]
        ? T(t, (t) => {
            (c[e] = t), u();
          })
        : (c[e] = t);
    }
    let p = d(f[n], 0);
    f[n][i].push(p), p(f[n], c[0], f[n][c[0]]);
  }
  function k(e, t, n) {
    let r, s, i, l;
    T(e, (e) => {
      (i = s?.[0]),
        i && (r = i.previousSibling || (l = i.parentNode)),
        s && s.forEach((e) => e.remove()),
        (s = N(n ? (e ? n.then : n.otherwise) : e, (e) => {
          r ? (l ? (r.prepend(e), (l = null)) : r.after(e), (r = e)) : t(e);
        }));
    });
  }
  let O = (e) => (t) => {
    let n = e[r],
      i = e[s],
      l = 0;
    for (; l < i.length - 1; l++) if (((n = n[i[l]]), !v(n))) return;
    n[i[l]] = t;
  };
  function A(e, t, ...n) {
    if (e == g) return n;
    if ("function" == typeof e) {
      let s = x(Object.create(e.prototype));
      for (let e in t) {
        let n = t[e];
        if (e.startsWith("bind:")) {
          j(n), L(n);
          let i = O(n[r]),
            l = e.substring(5);
          if ("this" == l) i(s);
          else {
            let e = !1;
            T(n, (t) => {
              e ? (e = !1) : ((e = !0), (s[l] = t));
            }),
              T(use(s[l]), (t) => {
                e ? (e = !1) : ((e = !0), i(t));
              });
          }
          delete t[e];
        } else j(n) && (T(n, (t) => (s[e] = t)), delete t[e]);
      }
      Object.assign(s, t), (s.children = []);
      for (let e of n) N(e, s.children.push.bind(s.children));
      let i = e.apply(s);
      (i.$ = s), (s.root = i);
      let l = i.classList,
        o = s.css,
        a = e.name.replace(/\$/g, "-");
      return (
        o && l.add(h(`${a}-${c()}`, o, !0)),
        s._leak || l.add(f),
        i.setAttribute("data-component", e.name),
        "function" == typeof s.mount && s.mount(),
        i
      );
    }
    let s = t?.xmlns,
      i = s ? m.createElementNS(s, e) : m.createElement(e);
    for (let e of n) {
      N(e, i.append.bind(i));
    }
    if (!t) return i;
    ((e, n) => {
      if (!(e in t)) return;
      n(t[e]), delete t[e];
    })("class", (e) => {
      if (
        ("string" == typeof e || e instanceof Array || j(e),
        "string" != typeof e)
      )
        if (j(e)) {
          let t = "";
          T(e, (e) => {
            for (let e of t.split(" ")) e && i.classList.remove(e);
            if ("string" == typeof e) {
              for (let t of e.split(" ")) t && i.classList.add(t);
              t = e;
            }
          });
        } else
          for (let t of e)
            if (j(t)) {
              let e = null;
              T(t, (t) => {
                "string" == typeof e && i.classList.remove(e),
                  i.classList.add(t),
                  (e = t);
              });
            } else i.classList.add(t);
      else i.setAttribute("class", e);
    });
    for (let e in t) {
      let n = t[e];
      if (e.startsWith("bind:")) {
        j(n), L(n);
        let s = e.substring(5),
          l = O(n[r]);
        "this" == s
          ? l(i)
          : "value" == s
          ? (T(n, (e) => (i.value = e)),
            i.addEventListener("change", () => l(i.value)))
          : "checked" == s &&
            (T(n, (e) => (i.checked = e)),
            i.addEventListener("click", () => l(i.checked))),
          delete t[e];
      }
      if (e.startsWith("class:")) {
        let r = e.substring(6);
        j(n)
          ? T(n, (e) => {
              e ? i.classList.add(r) : i.classList.remove(r);
            })
          : n && i.classList.add(r),
          delete t[e];
      }
      if ("style" == e && v(n) && !j(n)) {
        for (let e in n) {
          let t = S(n) ? use(n[e]) : n[e];
          j(t) ? T(t, (t) => (i.style[e] = t)) : (i.style[e] = t);
        }
        delete t[e];
      }
    }
    for (let e in t) {
      let n = t[e];
      j(n)
        ? T(n, (t) => {
            C(i, e, t);
          })
        : C(i, e, n);
    }
    return s && (i.innerHTML = i.innerHTML), i;
  }
  function N(e, t) {
    let n, r, s;
    if (j(e)) k(e, t);
    else {
      if (!v(e) || !(l in e)) {
        if (e instanceof Node) return t(e), [e];
        if (e instanceof Array) {
          for (n of ((r = []), e)) r = r.concat(N(n, t));
          return r[0] || (r = N("", t)), r;
        }
        return null == e && (e = ""), (s = m.createTextNode(e)), t(s), [s];
      }
      k(e[l], t, e);
    }
  }
  function C(e, t, n) {
    if ((!n && e.hasAttribute(t) && e.removeAttribute(t), n))
      if (t.startsWith("on:")) {
        let r = t.substring(3);
        for (let t of r.split("$"))
          e.addEventListener(t, (...t) => {
            (self.$el = e), n(...t);
          });
      } else e.setAttribute(t, n);
  }
  (e.$if = function (e, t, n) {
    return (
      (n ??= m.createTextNode("")),
      j(e) ? { [l]: e, then: t, otherwise: n } : e ? t : n
    );
  }),
    (e.$state = x),
    (e.$store = function (e, { ident: t, backing: r, autosave: s }) {
      let i, l;
      if ("string" == typeof r) {
        if ("localstorage" === r)
          (i = () => localStorage.getItem(t)),
            (l = (e, t) => {
              localStorage.setItem(e, t);
            });
      } else ({ read: i, write: l } = r);
      let f = () => {
          console.info("[dreamland.js]: saving " + t);
          let n = {},
            r = 0,
            s = (e) => {
              let t = { stateful: S(e), values: {} },
                i = r++;
              n[i] = t;
              for (let n in e) {
                let r = e[n];
                if (!j(r))
                  switch (typeof r) {
                    case "string":
                    case "number":
                    case "boolean":
                    case "undefined":
                      t.values[n] = JSON.stringify(r);
                      break;
                    case "object":
                      if (r instanceof Array) {
                        t.values[n] = r.map((e) =>
                          "object" == typeof e ? s(e) : JSON.stringify(e)
                        );
                        break;
                      }
                      null === r
                        ? (t.values[n] = "null")
                        : (r.__proto__, Object.prototype, (t.values[n] = s(r)));
                  }
              }
              return i;
            };
          s(e);
          let i = JSON.stringify(n);
          l(t, i);
        },
        a = (e, t, r) => {
          S(r) && (r[n][o] = a), f();
        },
        c = JSON.parse(i(t));
      if (c) {
        let t = {},
          n = (e) => {
            if (t[e]) return t[e];
            let r = c[e],
              i = {};
            for (let e in r.values) {
              let t = r.values[e];
              i[e] =
                "string" == typeof t
                  ? JSON.parse(t)
                  : t instanceof Array
                  ? t.map((e) => ("string" == typeof e ? JSON.parse(e) : n(e)))
                  : n(t);
            }
            r.stateful && "auto" == s && (i[o] = a);
            let l = r.stateful ? x(i) : i;
            return (t[e] = l), l;
          };
        e = n(0);
      }
      switch (s) {
        case "beforeunload":
          addEventListener("beforeunload", f);
          break;
        case "manual":
          break;
        case "auto":
          e[o] = a;
      }
      return x(e);
    }),
    (e.Fragment = g),
    (e.css = d),
    (e.h = A),
    (e.html = function (e, ...t) {
      e = [...e];
      let n = "",
        r = {};
      for (let s = 0; s < e.length; s++) {
        let i = e[s],
          l = t[s],
          o = t[s] instanceof Function && /^ *\/>/.exec(e[s + 1]);
        if (
          (/< *$/.test(i) &&
            o &&
            (e[s + 1] = e[s + 1].substr(o.index + o[0].length)),
          (n += i),
          s < t.length)
        ) {
          let e,
            t = Object.values(r).findIndex((e) => e === l);
          -1 !== t ? (e = Object.keys(r)[t]) : ((e = "h" + c()), (r[e] = l)),
            (n += e),
            o && (n += `></${e}>`);
        }
      }
      let s = new DOMParser().parseFromString(n, "text/html");
      return (
        s.body.children.length,
        (function e(t) {
          let n = t.nodeName.toLowerCase();
          if ("#text" === n) return t.textContent;
          n in r && (n = r[n]);
          let s = [...t.childNodes].map(e);
          for (let e = 0; e < s.length; e++) {
            let t = s[e];
            if ("string" == typeof t)
              for (const [n, i] of Object.entries(r)) {
                if (!t) break;
                if (!t.includes(n)) continue;
                let r;
                ([r, t] = t.split(n)),
                  (s = [...s.slice(0, e), r, i, t, ...s.slice(e + 1)]),
                  (e += 2);
              }
          }
          let i = {};
          if (!t.attributes) return t;
          for (const e of [...t.attributes]) {
            let t = e.nodeValue;
            t in r && (t = r[t]), (i[e.name] = t);
          }
          return A(n, i, s);
        })(s.body.children[0])
      );
    }),
    (e.isDLPtr = j),
    (e.isStateful = S),
    (e.scope = p);
})(window)(() => {
  const TAILWIND_COLORS = {
    stone: {
      50: "oklch(0.985 0.001 106.423)",
      100: "oklch(0.97 0.001 106.424)",
      200: "oklch(0.923 0.003 48.717)",
      300: "oklch(0.869 0.005 56.366)",
      400: "oklch(0.709 0.01 56.259)",
      500: "oklch(0.553 0.013 58.071)",
      600: "oklch(0.444 0.011 73.639)",
      700: "oklch(0.374 0.01 67.558)",
      800: "oklch(0.268 0.007 34.298)",
      900: "oklch(0.216 0.006 56.043)",
      950: "oklch(0.147 0.004 49.25)",
    },
  };
  let currentVideoProgress = {
    val: 0,
    timesModified: 0,
  };
  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.js";
  document.head.appendChild(s);
  const k = document.createElement("link");
  k.rel = "stylesheet";
  k.href = "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css";
  document.head.appendChild(k);

  const originalJsonParse = JSON.parse;
  const minimizeIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1pbmltaXplLWljb24gbHVjaWRlLW1pbmltaXplIj48cGF0aCBkPSJNOCAzdjNhMiAyIDAgMCAxLTIgMkgzIi8+PHBhdGggZD0iTTIxIDhoLTNhMiAyIDAgMCAxLTItMlYzIi8+PHBhdGggZD0iTTMgMTZoM2EyIDIgMCAwIDEgMiAydjMiLz48cGF0aCBkPSJNMTYgMjF2LTNhMiAyIDAgMCAxIDItMmgzIi8+PC9zdmc+";
  const settignsIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNldHRpbmdzLWljb24gbHVjaWRlLXNldHRpbmdzIj48cGF0aCBkPSJNMTIuMjIgMmgtLjQ0YTIgMiAwIDAgMC0yIDJ2LjE4YTIgMiAwIDAgMS0xIDEuNzNsLS40My4yNWEyIDIgMCAwIDEtMiAwbC0uMTUtLjA4YTIgMiAwIDAgMC0yLjczLjczbC0uMjIuMzhhMiAyIDAgMCAwIC43MyAyLjczbC4xNS4xYTIgMiAwIDAgMSAxIDEuNzJ2LjUxYTIgMiAwIDAgMS0xIDEuNzRsLS4xNS4wOWEyIDIgMCAwIDAtLjczIDIuNzNsLjIyLjM4YTIgMiAwIDAgMCAyLjczLjczbC4xNS0uMDhhMiAyIDAgMCAxIDIgMGwuNDMuMjVhMiAyIDAgMCAxIDEgMS43M1YyMGEyIDIgMCAwIDAgMiAyaC40NGEyIDIgMCAwIDAgMi0ydi0uMThhMiAyIDAgMCAxIDEtMS43M2wuNDMtLjI1YTIgMiAwIDAgMSAyIDBsLjE1LjA4YTIgMiAwIDAgMCAyLjczLS43M2wuMjItLjM5YTIgMiAwIDAgMC0uNzMtMi43M2wtLjE1LS4wOGEyIDIgMCAwIDEtMS0xLjc0di0uNWEyIDIgMCAwIDEgMS0xLjc0bC4xNS0uMDlhMiAyIDAgMCAwIC43My0yLjczbC0uMjItLjM4YTIgMiAwIDAgMC0yLjczLS43M2wtLjE1LjA4YTIgMiAwIDAgMS0yIDBsLS40My0uMjVhMiAyIDAgMCAxLTEtMS43M1Y0YTIgMiAwIDAgMC0yLTJ6Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg==";
  const crossIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=";

  let answerState = $state({
    list: [],
  });
  const currentPage = $state({
    page: "home", // home | settings | hidden
  });
  const modeState = $state({
    mode: "general", // general | video
  });

  // set the current state, we get this from the url
  if (window.location.href.split("/").indexOf("v") != -1) {
    modeState.mode = "video";
  } else {
    modeState.mode = "general";
  }

  useChange(answerState.list, () => {
    console.log(`New answers: ${JSON.stringify(answerState.list)}`);
  });

  useChange(modeState.mode, () => {
    console.log(`New mode: ${modeState.mode}`);
  });
  proxyFetch();
  function App() {
    this.css = `
            .h {
                color: white;
            }

            .answer {
                color: red;
            }

            span:hover {
                background-color: ${TAILWIND_COLORS.stone[700]};
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 150ms;
            }
        `;

    const appContainer = css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.25rem;
      width: 100%;
      height: 100%;
    `;

    const answerContainer = css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      height: 100%;
    `;

    const crossStyle = css`
      position: absolute;
      top: 5px;
      left: 5px;
      color: ${TAILWIND_COLORS.stone[50]};
    `;

    return html`
      <div class=${appContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          on:click=${() => closeMenu()}
          class=${crossStyle}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x-icon lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <h1 class="h">Dream cheat</h1>
        ${use(modeState.mode, (mode) =>
          mode === "general"
            ? html`<div class=${answerContainer} id="answerContainer">
                ${use(answerState.list, (list) =>
                  list.map((e) => {
                    console.log("NEW RERENDER");
                    return e[1];
                  })
                )}
              </div>`
            : html`<button>Skip Video</button>`
        )}
      </div>
    `;
  }

  const container = css`
    position: fixed;
    display: flex;
    z-index: 99999;
    width: 45rem;
    max-width: 45rem;
    border-top-right-radius: 16px;
    min-height: 50rem;
    max-height: 50rem;
    background-color: ${TAILWIND_COLORS.stone[950]};
    bottom: 0.00001px;
    left: 0;
    overflow-y: scroll;
  `;
  const hiddenContainer = css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    width: 10rem;
    border-top-right-radius: 16px;
    min-height: 10rem;
    background-color: ${TAILWIND_COLORS.stone[950]};
    bottom: 0.00001px;
    left: 0;
  `;

  let root = html`
    <div
      class=${use(currentPage.page, (p) =>
        p === "home" || p === "settings" ? container : hiddenContainer
      )}
    >
      ${use(currentPage.page, (p) =>
        $if(
          p === "home",
          html`<${App} />`,
          $if(
            p === "hidden",
            html`<svg
                on:click=${() => (currentPage.page = "home")}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="${TAILWIND_COLORS.stone[50]}"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" /></svg
              >>`,
            html`<span>settings page</span>`
          )
        )
      )}
      <div />
    </div>
  `;

  // ```

  document.body.appendChild(root);

  function proxyFetch() {
    globalThis.fetch = new Proxy(fetch, {
      async apply(target, thisArg, argumentsList) {
        const r =
          argumentsList[0] instanceof Request ? argumentsList[0] : undefined;
        const rc = r instanceof Request ? r.clone() : undefined;
        try {
          const response = await Reflect.apply(target, thisArg, argumentsList);
          if (r instanceof Request && r.url.includes("getAssessmentItem")) {
            console.log("GOT ASSESSMENT");
            const res = response.clone();
            const data = (await res.json()).data;
            const itemData = JSON.parse(data.assessmentItem.item.itemData);
            for (let key in itemData.question.widgets) {
              const item = itemData.question.widgets[key];
              if (!item.graded) continue;
              if (item.type === "radio") {
                const correct = item.options.choices.find((i) => i.correct);
                addAnswer(correct, "radio");
                // answerState.list = [...answerState.list, correct]
              } else if (item.type === "expression") {
                const correct = item.options.answerForms[0];
                addAnswer(correct, "expression");
                //answerState.list = [...answerState.list, correct]
              } else if (item.type === "categorizer") {
                const vals = item.options.values;
                const categories = item.options.categories;
                const formattedData = vals.map((value) => categories[value]);
                addAnswer(formattedData, "categorizer");
              } else {
                console.log(`[DREAMCHEAT] - UNKNOWN ITEM`, item);
              }
            }
          } else if (
            argumentsList[0] instanceof Request &&
            argumentsList[0].url.includes("attemptProblem")
          ) {
            const payload = await rc.json();
            const inputData = payload.variables.input;
            const attemptState = JSON.parse(inputData.attemptState);
            console.log(inputData);
            console.log(attemptState);
            for (const key in attemptState) {
              const keyStr = `${key}`;
              if (keyStr.includes("expression")) {
                const attempt = attemptState[key];
                const correctExpression = attempt.value
                  .replaceAll("{", "")
                  .replaceAll("}", "");
                console.log(`CORRECT EXPRESSION: ${correctExpression}`);
                answerState.list = answerState.list.filter(
                  (item) => item[0] !== correctExpression
                );

                console.log("ATTEMPT EXPRESSION: ", attemptState[key]);
              } else if (keyStr.includes("radio")) {
                console.log("GOT REMOVE RADIO");
                const attempt = attemptState[key];
                const correctSelect = attempt.choiceStates.findIndex(
                  (c) => c.selected
                );
                const correctChoice = attempt.choices.findIndex(
                  (c) => c.correct
                );
                if (correctChoice && correctSelect) {
                  const correct = attempt.choices[correctChoice];
                  console.log("GOT CORRECT", correct);
                  answerState.list = answerState.list.filter(
                    (a) => a[0].content !== correct.content
                  );
                  //console.log(answerState.list)
                }
              } else if (keyStr.includes("categorizer")) {
                const resClone = response.clone();
                const resData = await resClone.json();
                const attempt = attemptState[key];

                const vals = attempt.values;
                const categories = attempt.categories;
                const formattedData = vals.map((value) => categories[value]);
                if (
                  resData.data.attemptProblem.result.actionResults
                    .attemptCorrect
                ) {
                  answerState.list = answerState.list.filter(
                    (a) => a[0] !== formattedData.join()
                  );
                }
              }
            }
          }
          return response;
        } catch (error) {
          console.error("Fetch error:", error);
        }
      },
    });
  }

  navigation.addEventListener("navigate", (event) => {
    answerState.list = [];
    const isVideo = event.destination.url.split("/").indexOf("v") != -1;
    if (isVideo) {
      modeState.mode = "video";
    } else {
      modeState.mode = "general";
    }

    currentVideoProgress = {
      val: 0,
      timesModified: 0,
    };
  });

  function addAnswer(data, type) {
    const answerContentStyle = css`
             display: flex;
             color: ${TAILWIND_COLORS.stone[200]};
             padding:1.5rem;
             background-color: ${TAILWIND_COLORS.stone[800]};
             border-radius: 4px;
             text-align: center;
             text-wrap: wrap;
             padding 0 1rem;
             user-select: none;
             cursor: pointer;

       `;

    const categorizerContainerStyle = css`
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 0.25rem;
      color: ${TAILWIND_COLORS.stone[200]};
      background-color: ${TAILWIND_COLORS.stone[800]};
      padding: 1.5rem;
    `;
    if (type === "radio") {
      answerState.list = [
        ...answerState.list,
        [
          data,
          html`<span
            class=${answerContentStyle}
            on:click=${() =>
              writeToClipboard(data.content, "Copied to clipboard")}
            >${data.content}</span
          >`,
        ],
      ];
    } else if (type === "expression") {
      const randID = crypto.randomUUID();
      answerState.list = [
        ...answerState.list,
        [
          data.value,
          html`<span
            class=${answerContentStyle}
            id=${randID}
            on:click=${() =>
              writeToClipboard(data.value, "Copied to clipboard")}
          ></span>`,
        ],
      ];
      katex.render(data.value, document.getElementById(randID));
    } else if (type === "categorizer") {
      answerState.list = [
        ...answerState.list,
        [
          data.join(),
          html`<div class=${categorizerContainerStyle}>
            ${data.map((d, i) => {
              return html`<span>Row ${i + 1}: ${d.replaceAll("$", "")}</span>`;
            })}
          </div>`,
        ],
      ];
    }
  }

  function writeToClipboard(content, message) {
    navigator.clipboard.writeText(content);
    toast(message, 2000);
  }
  function closeMenu() {
    currentPage.page = "hidden";
  }

  const toastContainer = document.createElement("div");
  toastContainer.id = "toast-container";
  Object.assign(toastContainer.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 99999,
  });
  document.body.appendChild(toastContainer);

  window.toast = function (message, duration = 3000) {
    const toastElem = document.createElement("div");
    toastElem.textContent = message;
    Object.assign(toastElem.style, {
      background: "rgba(0, 0, 0, 0.7)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "4px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
      opacity: "1",
      transition: "opacity 0.5s ease",
    });
    toastContainer.appendChild(toastElem);

    setTimeout(() => {
      toastElem.style.opacity = "0";
      setTimeout(() => {
        toastContainer.removeChild(toastElem);
      }, 500);
    }, duration);
  };
})();
