import { _ as e } from "./index-W3gv0SB_.js";
const t = Symbol(),
  s = Object.getPrototypeOf,
  o = new WeakMap(),
  n = (e) => (((e) => e && (o.has(e) ? o.get(e) : s(e) === Object.prototype || s(e) === Array.prototype))(e) && e[t]) || null,
  a = (e, t = !0) => {
    o.set(e, t);
  };
var r = { VITE_APP_API_URL: "https://sapi.thenextgem.ai/api/v1", VITE_CHAT_API_URL: "http://34.165.22.141:4200", VITE_STAKING_ADDRESS: "0xa5a09121E6223470c9F255FE22f75D8bE9001c15", VITE_TOKEN_ADDRESS: "0xFBE44caE91d7Df8382208fCdc1fE80E40FBc7e9a", VITE_INFURA_ADDRESS: "https://mainnet.infura.io/v3/5982800e8b2940c689c2b7335f104c61", VITE_PREMIUM_ADDRESS: "0x4236DB3F5F431257267DcA207500e76775181FFa", VITE_VERCEL_GIT_REPO_ID: "739933865", VITE_VERCEL_ENV: "production", VITE_VERCEL_GIT_PULL_REQUEST_ID: "", VITE_VERCEL_BRANCH_URL: "next-gem-app-git-staging-graph-linq.vercel.app", VITE_VERCEL_GIT_COMMIT_SHA: "25c16071f595bd443e4837a80b11059afe6b15b9", VITE_VERCEL_URL: "next-gem-9vkogvy58-graph-linq.vercel.app", VITE_VERCEL_GIT_COMMIT_AUTHOR_NAME: "Harsh Raj", VITE_VERCEL_GIT_PREVIOUS_SHA: "", VITE_VERCEL_PROJECT_PRODUCTION_URL: "thenextgem.ai", VITE_VERCEL_GIT_REPO_OWNER: "TheNext100xGEM", VITE_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "Harsh48", VITE_VERCEL_GIT_PROVIDER: "github", VITE_VERCEL_GIT_COMMIT_REF: "staging", VITE_VERCEL_GIT_REPO_SLUG: "NextGem.App", VITE_VERCEL_GIT_COMMIT_MESSAGE: "Merge pull request #53 from TheNext100xGEM/v2-harsh\n\nV2 harsh", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const i = (e) => "object" == typeof e && null !== e,
  l = new WeakMap(),
  c = new WeakSet(),
  [d] = ((
    e = Object.is,
    t = (e, t) => new Proxy(e, t),
    s = (e) => i(e) && !c.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer),
    o = (e) => {
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
        default:
          throw e;
      }
    },
    d = new WeakMap(),
    p = (e, t, s = o) => {
      const n = d.get(e);
      if ((null == n ? void 0 : n[0]) === t) return n[1];
      const r = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
      return (
        a(r, !0),
        d.set(e, [t, r]),
        Reflect.ownKeys(e).forEach((t) => {
          if (Object.getOwnPropertyDescriptor(r, t)) return;
          const o = Reflect.get(e, t),
            n = { value: o, enumerable: !0, configurable: !0 };
          if (c.has(o)) a(o, !1);
          else if (o instanceof Promise) delete n.value, (n.get = () => s(o));
          else if (l.has(o)) {
            const [e, t] = l.get(o);
            n.value = p(e, t(), s);
          }
          Object.defineProperty(r, t, n);
        }),
        Object.preventExtensions(r)
      );
    },
    u = new WeakMap(),
    E = [1, 1],
    g = (o) => {
      if (!i(o)) throw new Error("object required");
      const a = u.get(o);
      if (a) return a;
      let d = E[0];
      const h = new Set(),
        m = (e, t = ++E[0]) => {
          d !== t && ((d = t), h.forEach((s) => s(e, t)));
        };
      let I = E[1];
      const f = (e) => (t, s) => {
          const o = [...t];
          (o[1] = [e, ...o[1]]), m(o, s);
        },
        b = new Map(),
        v = (e) => {
          var t;
          const s = b.get(e);
          s && (b.delete(e), null == (t = s[1]) || t.call(s));
        },
        y = Array.isArray(o) ? [] : Object.create(Object.getPrototypeOf(o)),
        _ = t(y, {
          deleteProperty(e, t) {
            const s = Reflect.get(e, t);
            v(t);
            const o = Reflect.deleteProperty(e, t);
            return o && m(["delete", [t], s]), o;
          },
          set(t, o, a, d) {
            const p = Reflect.has(t, o),
              E = Reflect.get(t, o, d);
            if (p && (e(E, a) || (u.has(a) && e(E, u.get(a))))) return !0;
            v(o), i(a) && (a = n(a) || a);
            let I = a;
            if (a instanceof Promise)
              a.then((e) => {
                (a.status = "fulfilled"), (a.value = e), m(["resolve", [o], e]);
              }).catch((e) => {
                (a.status = "rejected"), (a.reason = e), m(["reject", [o], e]);
              });
            else {
              !l.has(a) && s(a) && (I = g(a));
              const e = !c.has(I) && l.get(I);
              e &&
                ((e, t) => {
                  if ("production" !== (r ? "production" : void 0) && b.has(e)) throw new Error("prop listener already exists");
                  if (h.size) {
                    const s = t[3](f(e));
                    b.set(e, [t, s]);
                  } else b.set(e, [t]);
                })(o, e);
            }
            return Reflect.set(t, o, I, d), m(["set", [o], a, E]), !0;
          },
        });
      u.set(o, _);
      const C = [
        y,
        (e = ++E[1]) => (
          I === e ||
            h.size ||
            ((I = e),
            b.forEach(([t]) => {
              const s = t[1](e);
              s > d && (d = s);
            })),
          d
        ),
        p,
        (e) => {
          h.add(e),
            1 === h.size &&
              b.forEach(([e, t], s) => {
                if ("production" !== (r ? "production" : void 0) && t) throw new Error("remove already exists");
                const o = e[3](f(s));
                b.set(s, [e, o]);
              });
          return () => {
            h.delete(e),
              0 === h.size &&
                b.forEach(([e, t], s) => {
                  t && (t(), b.set(s, [e]));
                });
          };
        },
      ];
      return (
        l.set(_, C),
        Reflect.ownKeys(o).forEach((e) => {
          const t = Object.getOwnPropertyDescriptor(o, e);
          "value" in t && ((_[e] = o[e]), delete t.value, delete t.writable), Object.defineProperty(y, e, t);
        }),
        _
      );
    }
  ) => [g, l, c, e, t, s, o, d, p, u, E])();
function p(e = {}) {
  return d(e);
}
function u(e, t, s) {
  const o = l.get(e);
  let n;
  "production" === (r ? "production" : void 0) || o || console.warn("Please use proxy object");
  const a = [],
    i = o[3];
  let c = !1;
  const d = i((e) => {
    a.push(e),
      s
        ? t(a.splice(0))
        : n ||
          (n = Promise.resolve().then(() => {
            (n = void 0), c && t(a.splice(0));
          }));
  });
  return (
    (c = !0),
    () => {
      (c = !1), d();
    }
  );
}
const E = p({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }),
  g = {
    state: E,
    subscribe: (e) => u(E, () => e(E)),
    push(e, t) {
      e !== E.view && ((E.view = e), t && (E.data = t), E.history.push(e));
    },
    reset(e) {
      (E.view = e), (E.history = [e]);
    },
    replace(e) {
      E.history.length > 1 && ((E.history[E.history.length - 1] = e), (E.view = e));
    },
    goBack() {
      if (E.history.length > 1) {
        E.history.pop();
        const [e] = E.history.slice(-1);
        E.view = e;
      }
    },
    setData(e) {
      E.data = e;
    },
  },
  h = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    WCM_VERSION: "WCM_VERSION",
    RECOMMENDED_WALLET_AMOUNT: 9,
    isMobile: () => typeof window < "u" && Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
    isAndroid: () => h.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
    isIos() {
      const e = navigator.userAgent.toLowerCase();
      return h.isMobile() && (e.includes("iphone") || e.includes("ipad"));
    },
    isHttpUrl: (e) => e.startsWith("http://") || e.startsWith("https://"),
    isArray: (e) => Array.isArray(e) && e.length > 0,
    formatNativeUrl(e, t, s) {
      if (h.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
      let o = e;
      o.includes("://") || ((o = e.replaceAll("/", "").replaceAll(":", "")), (o = `${o}://`)), o.endsWith("/") || (o = `${o}/`), this.setWalletConnectDeepLink(o, s);
      return `${o}wc?uri=${encodeURIComponent(t)}`;
    },
    formatUniversalUrl(e, t, s) {
      if (!h.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
      let o = e;
      o.endsWith("/") || (o = `${o}/`), this.setWalletConnectDeepLink(o, s);
      return `${o}wc?uri=${encodeURIComponent(t)}`;
    },
    wait: async (e) =>
      new Promise((t) => {
        setTimeout(t, e);
      }),
    openHref(e, t) {
      window.open(e, t, "noreferrer noopener");
    },
    setWalletConnectDeepLink(e, t) {
      try {
        localStorage.setItem(h.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    setWalletConnectAndroidDeepLink(e) {
      try {
        const [t] = e.split("?");
        localStorage.setItem(h.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: "Android" }));
      } catch {
        console.info("Unable to set WalletConnect android deep link");
      }
    },
    removeWalletConnectDeepLink() {
      try {
        localStorage.removeItem(h.WALLETCONNECT_DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to remove WalletConnect deep link");
      }
    },
    setModalVersionInStorage() {
      try {
        typeof localStorage < "u" && localStorage.setItem(h.WCM_VERSION, "2.6.2");
      } catch {
        console.info("Unable to set Web3Modal version in storage");
      }
    },
    getWalletRouterData() {
      var e;
      const t = null == (e = g.state.data) ? void 0 : e.Wallet;
      if (!t) throw new Error('Missing "Wallet" view data');
      return t;
    },
  },
  m = p({ enabled: typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), userSessionId: "", events: [], connectedWalletId: void 0 }),
  I = {
    state: m,
    subscribe: (e) =>
      u(m.events, () =>
        e(
          (function (e, t) {
            const s = l.get(e);
            "production" === (r ? "production" : void 0) || s || console.warn("Please use proxy object");
            const [o, n, a] = s;
            return a(o, n(), t);
          })(m.events[m.events.length - 1])
        )
      ),
    initialize() {
      m.enabled && typeof (null == crypto ? void 0 : crypto.randomUUID) < "u" && (m.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId(e) {
      m.connectedWalletId = e;
    },
    click(e) {
      if (m.enabled) {
        const t = { type: "CLICK", name: e.name, userSessionId: m.userSessionId, timestamp: Date.now(), data: e };
        m.events.push(t);
      }
    },
    track(e) {
      if (m.enabled) {
        const t = { type: "TRACK", name: e.name, userSessionId: m.userSessionId, timestamp: Date.now(), data: e };
        m.events.push(t);
      }
    },
    view(e) {
      if (m.enabled) {
        const t = { type: "VIEW", name: e.name, userSessionId: m.userSessionId, timestamp: Date.now(), data: e };
        m.events.push(t);
      }
    },
  },
  f = p({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }),
  b = {
    state: f,
    subscribe: (e) => u(f, () => e(f)),
    setChains(e) {
      f.chains = e;
    },
    setWalletConnectUri(e) {
      f.walletConnectUri = e;
    },
    setIsCustomDesktop(e) {
      f.isCustomDesktop = e;
    },
    setIsCustomMobile(e) {
      f.isCustomMobile = e;
    },
    setIsDataLoaded(e) {
      f.isDataLoaded = e;
    },
    setIsUiLoaded(e) {
      f.isUiLoaded = e;
    },
    setIsAuth(e) {
      f.isAuth = e;
    },
  },
  v = p({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }),
  y = {
    state: v,
    subscribe: (e) => u(v, () => e(v)),
    setConfig(e) {
      var t, s;
      I.initialize(), b.setChains(e.chains), b.setIsAuth(Boolean(e.enableAuthMode)), b.setIsCustomMobile(Boolean(null == (t = e.mobileWallets) ? void 0 : t.length)), b.setIsCustomDesktop(Boolean(null == (s = e.desktopWallets) ? void 0 : s.length)), h.setModalVersionInStorage(), Object.assign(v, e);
    },
  };
var _ = Object.defineProperty,
  C = Object.getOwnPropertySymbols,
  O = Object.prototype.hasOwnProperty,
  w = Object.prototype.propertyIsEnumerable,
  L = (e, t, s) => (t in e ? _(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s));
const T = "https://explorer-api.walletconnect.com",
  A = "wcm",
  R = "js-2.6.2";
async function W(e, t) {
  const s = ((e, t) => {
      for (var s in t || (t = {})) O.call(t, s) && L(e, s, t[s]);
      if (C) for (var s of C(t)) w.call(t, s) && L(e, s, t[s]);
      return e;
    })({ sdkType: A, sdkVersion: R }, t),
    o = new URL(e, T);
  return (
    o.searchParams.append("projectId", y.state.projectId),
    Object.entries(s).forEach(([e, t]) => {
      t && o.searchParams.append(e, String(t));
    }),
    (await fetch(o)).json()
  );
}
const M = { getDesktopListings: async (e) => W("/w3m/v1/getDesktopListings", e), getMobileListings: async (e) => W("/w3m/v1/getMobileListings", e), getInjectedListings: async (e) => W("/w3m/v1/getInjectedListings", e), getAllListings: async (e) => W("/w3m/v1/getAllListings", e), getWalletImageUrl: (e) => `${T}/w3m/v1/getWalletImage/${e}?projectId=${y.state.projectId}&sdkType=${A}&sdkVersion=${R}`, getAssetImageUrl: (e) => `${T}/w3m/v1/getAssetImage/${e}?projectId=${y.state.projectId}&sdkType=${A}&sdkVersion=${R}` };
var j = Object.defineProperty,
  D = Object.getOwnPropertySymbols,
  U = Object.prototype.hasOwnProperty,
  S = Object.prototype.propertyIsEnumerable,
  P = (e, t, s) => (t in e ? j(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s));
const V = h.isMobile(),
  k = p({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }),
  N = {
    state: k,
    async getRecomendedWallets() {
      const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = y.state;
      if ("NONE" === e || ("ALL" === t && !e)) return k.recomendedWallets;
      if (h.isArray(e)) {
        const t = { recommendedIds: e.join(",") },
          { listings: s } = await M.getAllListings(t),
          o = Object.values(s);
        o.sort((t, s) => e.indexOf(t.id) - e.indexOf(s.id)), (k.recomendedWallets = o);
      } else {
        const { chains: e, isAuth: s } = b.state,
          o = null == e ? void 0 : e.join(","),
          n = h.isArray(t),
          a = { page: 1, sdks: s ? "auth_v1" : void 0, entries: h.RECOMMENDED_WALLET_AMOUNT, chains: o, version: 2, excludedIds: n ? t.join(",") : void 0 },
          { listings: r } = V ? await M.getMobileListings(a) : await M.getDesktopListings(a);
        k.recomendedWallets = Object.values(r);
      }
      return k.recomendedWallets;
    },
    async getWallets(e) {
      const t = ((e, t) => {
          for (var s in t || (t = {})) U.call(t, s) && P(e, s, t[s]);
          if (D) for (var s of D(t)) S.call(t, s) && P(e, s, t[s]);
          return e;
        })({}, e),
        { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: o } = y.state,
        { recomendedWallets: n } = k;
      if ("ALL" === o) return k.wallets;
      n.length ? (t.excludedIds = n.map((e) => e.id).join(",")) : h.isArray(s) && (t.excludedIds = s.join(",")), h.isArray(o) && (t.excludedIds = [t.excludedIds, o].filter(Boolean).join(",")), b.state.isAuth && (t.sdks = "auth_v1");
      const { page: a, search: r } = e,
        { listings: i, total: l } = V ? await M.getMobileListings(t) : await M.getDesktopListings(t),
        c = Object.values(i),
        d = r ? "search" : "wallets";
      return (k[d] = { listings: [...k[d].listings, ...c], total: l, page: a ?? 1 }), { listings: c, total: l };
    },
    getWalletImageUrl: (e) => M.getWalletImageUrl(e),
    getAssetImageUrl: (e) => M.getAssetImageUrl(e),
    resetSearch() {
      k.search = { listings: [], total: 0, page: 1 };
    },
  },
  x = p({ open: !1 }),
  G = {
    state: x,
    subscribe: (e) => u(x, () => e(x)),
    open: async (e) =>
      new Promise((t) => {
        const { isUiLoaded: s, isDataLoaded: o } = b.state;
        if ((h.removeWalletConnectDeepLink(), b.setWalletConnectUri(null == e ? void 0 : e.uri), b.setChains(null == e ? void 0 : e.chains), g.reset("ConnectWallet"), s && o)) (x.open = !0), t();
        else {
          const e = setInterval(() => {
            const s = b.state;
            s.isUiLoaded && s.isDataLoaded && (clearInterval(e), (x.open = !0), t());
          }, 200);
        }
      }),
    close() {
      x.open = !1;
    },
  };
var H = Object.defineProperty,
  $ = Object.getOwnPropertySymbols,
  B = Object.prototype.hasOwnProperty,
  K = Object.prototype.propertyIsEnumerable,
  F = (e, t, s) => (t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s));
const z = p({ themeMode: typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" }),
  q = {
    state: z,
    subscribe: (e) => u(z, () => e(z)),
    setThemeConfig(e) {
      const { themeMode: t, themeVariables: s } = e;
      t && (z.themeMode = t),
        s &&
          (z.themeVariables = ((e, t) => {
            for (var s in t || (t = {})) B.call(t, s) && F(e, s, t[s]);
            if ($) for (var s of $(t)) K.call(t, s) && F(e, s, t[s]);
            return e;
          })({}, s));
    },
  },
  J = p({ open: !1, message: "", variant: "success" }),
  Q = {
    state: J,
    subscribe: (e) => u(J, () => e(J)),
    openToast(e, t) {
      (J.open = !0), (J.message = e), (J.variant = t);
    },
    closeToast() {
      J.open = !1;
    },
  };
const X = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      WalletConnectModal: class {
        constructor(e) {
          (this.openModal = G.open), (this.closeModal = G.close), (this.subscribeModal = G.subscribe), (this.setTheme = q.setThemeConfig), q.setThemeConfig(e), y.setConfig(e), this.initUi();
        }
        async initUi() {
          if (typeof window < "u") {
            await e(() => import("./index-ZRmW9pVY.js"), __vite__mapDeps([0, 1, 2]));
            const t = document.createElement("wcm-modal");
            document.body.insertAdjacentElement("beforeend", t), b.setIsUiLoaded(!0);
          }
        }
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { I as R, g as T, h as a, X as i, q as n, Q as o, b as p, G as s, N as t, y };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-ZRmW9pVY.js", "assets/index-W3gv0SB_.js", "assets/index-BM7ObVTU.css"];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
