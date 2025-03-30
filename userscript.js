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
const DLFEATURES=["css","jsxLiterals","usestring","stores"],DLVERSION="0.0.25";!function(e){class t extends Error{constructor(e){super("[dreamland-js/dev] "+e),this.name="DreamlandDevError"}}function n(e,n){e||function(e){throw new t("fatal: "+e)}(n)}const[r,s,o,i,l,a,c]=Array.from(Array(7),Symbol),f="dlcomponent";var u=Object.freeze({__proto__:null,IF:a,LISTENERS:l,PROXY:o,STATEHOOK:c,STEPS:i,TARGET:s,USE_COMPUTED:r,cssBoundary:f});const d={},p=50;function m(){return`${Array(4).fill(0).map((()=>Math.floor(36*Math.random()).toString(36))).join("")}`}const h=e=>function(t,...n){let r="";for(let e of t)r+=e+(n.shift()||"");return y("dl"+m(),r,e)},b=h(!1),g=h(!0);function y(e,t,n){let r=d[t];if(r)return r;d[t]=e;const s=document.createElement("style");document.head.appendChild(s);let o="",i="";for(t+="\n";;){let[e,...n]=t.split("\n");if(e.trim().endsWith("{"))break;if(i+=e+"\n",!(t=n.join("\n")))break}s.textContent=t;let l=!0;if(l=!!window.CSSScopeRule,n&&l){let t="";for(const n of s.sheet.cssRules)n.selectorText||n.media?n.selectorText?.startsWith(":")?(n.selectorText=`.${e}${n.selectorText}`,t+=n.cssText):o+=n.cssText:t+=n.cssText;s.textContent=`.${e} {${i}} @scope (.${e}) to (:not(.${e}).${f} *) { ${o} } ${t}`}else{let t="";n&&!l&&(t=function(e){let t=`:not(${e}).${f}`,n=(r,s)=>`${r} *${s>p?"":`:not(${n(r+" "+(s%2==0?e:t),s+1)})`}`;return`:not(${n(t,0)})`}(`.${e}`));const r=n=>{n.selectorText&&(n.selectorText=n.selectorText.split(",").map((n=>"&"===(n=n.trim())[0]?`.${e}${n.slice(1)}${t}`:":"===n[0]?`.${e}${n}${t}`:`.${e} ${n}${t}`)).join(", ")),o+=n.cssText};for(const e of s.sheet.cssRules)e.media&&e.media.mediaText?(o+=`@media(${e.media.mediaText}){`,Array.from(e.cssRules).map(r),o+="}"):r(e);s.textContent=`.${e} {${i}}${o}`}return e}let $=document;const v=Symbol();let E=!1;Object.defineProperty(window,"use",{get:()=>(E=!0,(e,t,...l)=>{if(n(j(e)||A(e)||e instanceof Array&&"raw"in e,"a value was passed into use() that was not part of a stateful context"),e instanceof Array&&"raw"in e)return S(e,t,...l);E=!1;let a={get value(){return function(e){let t=e[o],n=t[i],l=e[r],a=t[s];for(let e of n)if(a=a[e],!T(a))break;for(let e of l)a=e(a);return a}(a)}};if(A(e)){let n=[...e[r]];t&&n.push(t),a[o]=e[o],a[r]=n}else a[o]=e,a[r]=t?[t]:[];return a})}),Object.defineProperty(window,"useChange",{get:()=>(E=!0,(e,t)=>{E=!1,e=e instanceof Array?e:[e];for(let r of e)n(j(r)||A(r),"a value was passed into useChange() that was not part of a stateful context"),N(use(r),t)})});const S=(e,...t)=>{E=!1;let n=x({});const r=[];for(const s in e)if(r.push(e[s]),t[s]){let e=t[s];if(j(e)&&(e=use(e)),A(e)){const t=r.length;let s;N(use(e),(e=>{r[t]=String(e);let o=r.join("");o!=s&&(n.string=o),s=o}))}else r.push(String(e))}return n.string=r.join(""),use(n.string)};let w=new Map;function x(e){n(T(e),"$state() requires an object"),e[l]=[],e[s]=e;let t=Symbol.toPrimitive,a=new Proxy(e,{get(e,n,l){if(E){let a=Symbol(),c=new Proxy({[s]:e,[o]:l,[i]:[n],[t]:()=>a},{get:(e,n)=>[s,o,i,r,t].includes(n)?e[n]:(n=w.get(n)||n,e[i].push(n),c)});return w.set(a,c),c}return Reflect.get(e,n,l)},set(e,t,n){let r=Reflect.set(e,t,n);for(let r of e[l])r(e,t,n);return e[c]&&e[c](e,t,e[t]),r}});return a}let T=e=>e instanceof Object,L=e=>"function"==typeof e;function O(e){return T(e)&&l in e}function j(e){return T(e)&&i in e}function A(e){return T(e)&&r in e}function k(e){return 0!=e[r].length}function N(e,t){n(A(e),"handle() requires a stateful object"),n(L(t),"handle() requires a callback function");let a,c=e[o],f=e[r],u=[];function d(){let e=c[s];for(a of u)if(e=e[a],!T(e))break;for(let t of f)e=t(e);t(e)}let p=(e,t)=>function n(r,o,i){if(o===u[t]&&e===r&&(d(),T(i))){let e=i[l];e&&!e.includes(n)&&e.push(p(i[s],t+1))}};for(let e in c[i]){let t=c[i][e];T(t)&&t[s]?N(t,(t=>{u[e]=t,d()})):u[e]=t}let m=p(c[s],0);c[s][l].push(m),m(c[s],u[0],c[s][u[0]])}function _(e,t,n){let r,s,o,i;N(e,(e=>{o=s?.[0],o&&(r=o.previousSibling||(i=o.parentNode)),s&&s.forEach((e=>e.remove())),s=P(n?e?n.then:n.otherwise:e,(e=>{r?(i?(r.prepend(e),i=null):r.after(e),r=e):t(e)}))}))}let R=e=>t=>{let n=e[o],r=e[i],s=0;for(;s<r.length-1;s++)if(n=n[r[s]],!T(n))return;n[r[s]]=t};function D(e,t,...r){if(e==v)return r;if("function"==typeof e){let s=x(Object.create(e.prototype));for(let e in t){let r=t[e];if(e.startsWith("bind:")){n(A(r),"bind: requires a reference pointer from use"),n(!k(r),"bind: requires a reference pointer without mappings");let i=R(r[o]),l=e.substring(5);if("this"==l)i(s);else{let e=!1;N(r,(t=>{e?e=!1:(e=!0,s[l]=t)})),N(use(s[l]),(t=>{e?e=!1:(e=!0,i(t))}))}delete t[e]}else A(r)&&(N(r,(t=>s[e]=t)),delete t[e])}Object.assign(s,t),s.children=[];for(let e of r)P(e,s.children.push.bind(s.children));let i=e.apply(s);n(!(i instanceof Array),"Functional component cannot return a Fragment"),n(i instanceof Node,"Functional component must return a Node"),n(!("$"in i),"Functional component cannot have another functional component at root level"),i.$=s,s.root=i;let l=i.classList,a=s.css,c=e.name.replace(/\$/g,"-");return a&&l.add(y(`${c}-${m()}`,a,!0)),s._leak||l.add(f),i.setAttribute("data-component",e.name),"function"==typeof s.mount&&s.mount(),i}let s=t?.xmlns,i=s?$.createElementNS(s,e):$.createElement(e);for(let e of r){P(e,i.append.bind(i))}if(!t)return i;((e,n)=>{if(!(e in t))return;n(t[e]),delete t[e]})("class",(e=>{if(n("string"==typeof e||e instanceof Array||A(e),"class must be a string or ar ray (r pointer)"),"string"!=typeof e)if(A(e)){let t="";N(e,(e=>{for(let e of t.split(" "))e&&i.classList.remove(e);if("string"==typeof e){for(let t of e.split(" "))t&&i.classList.add(t);t=e}}))}else for(let t of e)if(A(t)){let e=null;N(t,(t=>{"string"==typeof e&&i.classList.remove(e),i.classList.add(t),e=t}))}else i.classList.add(t);else i.setAttribute("class",e)}));for(let e in t){let r=t[e];if(e.startsWith("bind:")){n(A(r),"bind: requires a reference pointer from use"),n(!k(r),"bind: requires a reference pointer without mappings");let s=e.substring(5),l=R(r[o]);"this"==s?l(i):"value"==s?(N(r,(e=>i.value=e)),i.addEventListener("change",(()=>l(i.value)))):"checked"==s&&(N(r,(e=>i.checked=e)),i.addEventListener("click",(()=>l(i.checked)))),delete t[e]}if(e.startsWith("class:")){let n=e.substring(6);A(r)?N(r,(e=>{e?i.classList.add(n):i.classList.remove(n)})):r&&i.classList.add(n),delete t[e]}if("style"==e&&T(r)&&!A(r)){for(let e in r){let t=O(r)?use(r[e]):r[e];A(t)?N(t,(t=>i.style[e]=t)):i.style[e]=t}delete t[e]}}for(let e in t){let n=t[e];A(n)?N(n,(t=>{C(i,e,t)})):C(i,e,n)}return s&&(i.innerHTML=i.innerHTML),i}function P(e,t){let n,r,s;if(A(e))_(e,t);else{if(!T(e)||!(a in e)){if(e instanceof Node)return t(e),[e];if(e instanceof Array){for(n of(r=[],e))r=r.concat(P(n,t));return r[0]||(r=P("",t)),r}return null==e&&(e=""),s=$.createTextNode(e),t(s),[s]}_(e[a],t,e)}}function C(e,t,r){if(!r&&e.hasAttribute(t)&&e.removeAttribute(t),r)if(t.startsWith("on:")){n("function"==typeof r,"on: requires a function");let s=t.substring(3);for(let t of s.split("$"))e.addEventListener(t,((...t)=>{self.$el=e,r(...t)}))}else e.setAttribute(t,r)}var F;window.DREAMLAND_SECRET_DEV_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={...u,isDLPtrInternal:j,handle:N},F="Version: 0.0.25",console.log("[dreamland-js/dev] "+F),console.warn("This is a DEVELOPER build of dreamland.js. It is not suitable for production use."),console.info("Enabled features:",DLFEATURES.join(", ")),e.$if=function(e,t,n){return n??=$.createTextNode(""),A(e)?{[a]:e,then:t,otherwise:n}:e?t:n},e.$state=x,e.$store=function(e,{ident:t,backing:r,autosave:o}){let i,l;if("string"==typeof r)if("localstorage"===r)i=()=>localStorage.getItem(t),l=(e,t)=>{localStorage.setItem(e,t)};else n("Unknown store type: "+r);else({read:i,write:l}=r);let a=()=>{console.info("[dreamland.js]: saving "+t);let r={},s=0,o=e=>{let t={stateful:O(e),values:{}},i=s++;r[i]=t;for(let r in e){let s=e[r];if(!A(s))switch(typeof s){case"string":case"number":case"boolean":case"undefined":t.values[r]=JSON.stringify(s);break;case"object":if(s instanceof Array){t.values[r]=s.map((e=>"object"==typeof e?o(e):JSON.stringify(e)));break}null===s?t.values[r]="null":(n(s.__proto__===Object.prototype,"Only plain objects can be serialized in stores"),t.values[r]=o(s));break;case"symbol":case"function":case"bigint":n("Unsupported type: "+typeof s)}}return i};o(e);let i=JSON.stringify(r);l(t,i)},f=(e,t,n)=>{O(n)&&(n[s][c]=f),a()},u=JSON.parse(i(t));if(u){let t={},n=e=>{if(t[e])return t[e];let r=u[e],s={};for(let e in r.values){let t=r.values[e];s[e]="string"==typeof t?JSON.parse(t):t instanceof Array?t.map((e=>"string"==typeof e?JSON.parse(e):n(e))):n(t)}r.stateful&&"auto"==o&&(s[c]=f);let i=r.stateful?x(s):s;return t[e]=i,i};e=n(0)}switch(o){case"beforeunload":addEventListener("beforeunload",a);break;case"manual":break;case"auto":e[c]=f;break;default:n("Unknown autosave type: "+o)}return x(e)},e.Fragment=v,e.css=b,e.h=D,e.html=function(e,...t){e=[...e];let r="",s={};for(let n=0;n<e.length;n++){let o=e[n],i=t[n],l=t[n]instanceof Function&&/^ *\/>/.exec(e[n+1]);if(/< *$/.test(o)&&l&&(e[n+1]=e[n+1].substr(l.index+l[0].length)),r+=o,n<t.length){let e,t=Object.values(s).findIndex((e=>e===i));-1!==t?e=Object.keys(s)[t]:(e="h"+m(),s[e]=i),r+=e,l&&(r+=`></${e}>`)}}let o=(new DOMParser).parseFromString(r,"text/html");return n(1==o.body.children.length,"html builder needs exactly one child"),function e(t){let n=t.nodeName.toLowerCase();if("#text"===n)return t.textContent;n in s&&(n=s[n]);let r=[...t.childNodes].map(e);for(let e=0;e<r.length;e++){let t=r[e];if("string"==typeof t)for(const[n,o]of Object.entries(s)){if(!t)break;if(!t.includes(n))continue;let s;[s,t]=t.split(n),r=[...r.slice(0,e),s,o,t,...r.slice(e+1)],e+=2}}let o={};if(!t.attributes)return t;for(const e of[...t.attributes]){let t=e.nodeValue;t in s&&(t=s[t]),o[e.name]=t}return D(n,o,r)}(o.body.children[0])},e.isDLPtr=A,e.isStateful=O,e.scope=g}(window);
;(() => {
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
        950: "oklch(0.147 0.004 49.25)"
      }
    }
    let currentVideoProgress = {
      val:0,
      timesModified: 0
    };
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.js";
    document.head.appendChild(s);
    const k = document.createElement("link");
    k.rel = "stylesheet";
    k.href = "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css";
    document.head.appendChild(k);

    const originalJsonParse = JSON.parse;
    const minimizeIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1pbmltaXplLWljb24gbHVjaWRlLW1pbmltaXplIj48cGF0aCBkPSJNOCAzdjNhMiAyIDAgMCAxLTIgMkgzIi8+PHBhdGggZD0iTTIxIDhoLTNhMiAyIDAgMCAxLTItMlYzIi8+PHBhdGggZD0iTTMgMTZoM2EyIDIgMCAwIDEgMiAydjMiLz48cGF0aCBkPSJNMTYgMjF2LTNhMiAyIDAgMCAxIDItMmgzIi8+PC9zdmc+"
    const settignsIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNldHRpbmdzLWljb24gbHVjaWRlLXNldHRpbmdzIj48cGF0aCBkPSJNMTIuMjIgMmgtLjQ0YTIgMiAwIDAgMC0yIDJ2LjE4YTIgMiAwIDAgMS0xIDEuNzNsLS40My4yNWEyIDIgMCAwIDEtMiAwbC0uMTUtLjA4YTIgMiAwIDAgMC0yLjczLjczbC0uMjIuMzhhMiAyIDAgMCAwIC43MyAyLjczbC4xNS4xYTIgMiAwIDAgMSAxIDEuNzJ2LjUxYTIgMiAwIDAgMS0xIDEuNzRsLS4xNS4wOWEyIDIgMCAwIDAtLjczIDIuNzNsLjIyLjM4YTIgMiAwIDAgMCAyLjczLjczbC4xNS0uMDhhMiAyIDAgMCAxIDIgMGwuNDMuMjVhMiAyIDAgMCAxIDEgMS43M1YyMGEyIDIgMCAwIDAgMiAyaC40NGEyIDIgMCAwIDAgMi0ydi0uMThhMiAyIDAgMCAxIDEtMS43M2wuNDMtLjI1YTIgMiAwIDAgMSAyIDBsLjE1LjA4YTIgMiAwIDAgMCAyLjczLS43M2wuMjItLjM5YTIgMiAwIDAgMC0uNzMtMi43M2wtLjE1LS4wOGEyIDIgMCAwIDEtMS0xLjc0di0uNWEyIDIgMCAwIDEgMS0xLjc0bC4xNS0uMDlhMiAyIDAgMCAwIC43My0yLjczbC0uMjItLjM4YTIgMiAwIDAgMC0yLjczLS43M2wtLjE1LjA4YTIgMiAwIDAgMS0yIDBsLS40My0uMjVhMiAyIDAgMCAxLTEtMS43M1Y0YTIgMiAwIDAgMC0yLTJ6Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg=="
    const crossIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4="
    let store = $store(
      {
        page: "home" // home | settings | hidden
      },
      { ident: "my-store", backing: "localstorage", autosave: "auto" }
    );

    store.page = "home"

    let answerState = $state({
      list: [],
    })

    const modeState = $state({
      mode: "general" // general | video
    })

    // set the current state, we get this from the url
    if (window.location.href.split("/").indexOf("v") != -1) {
        modeState.mode = "video";
    } else {
      modeState.mode = "general"
    }



    useChange(answerState.list, () => {
      console.log(`New answers: ${JSON.stringify(answerState.list)}`)
    })

    useChange(modeState.mode, () => {
          console.log(`New mode: ${modeState.mode}`)

    })
    proxyFetch()
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
        `

        const appContainer = css`
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 0.25rem;
              width: 100%;
              height: 100%;
        `

        const answerContainer = css `
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 1rem;
              width: 100%;
              height: 100%;
        `


      const crossStyle = css`
          position: absolute;
          top: 5px;
          left: 5px;
          color: ${TAILWIND_COLORS.stone[50]};
      `

        return html`
          <div class=${appContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" on:click=${() => closeMenu()} class=${crossStyle} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              <h1 class="h">Dream cheat</h1>
             ${use(modeState.mode, (mode) =>
                mode === "general"
                  ? html`<div class=${answerContainer} id="answerContainer">${use(answerState.list, (list) => list.map((e) => {
                      console.log("NEW RERENDER")
                      return e[1]
                  }))}</div>`
                  : html`<button>Skip Video</button>`
              )}
          </div>
        `
    }

    const container = css`
        position:fixed;
        display: flex;
        z-index: 99999;
        width:45rem;
        border-top-right-radius: 16px;
        min-height:50rem;
        background-color: ${TAILWIND_COLORS.stone[950]};
        bottom: 0.00001px;
        left: 0;
    `
    const hiddenContainer = css`
        position:fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        width:10rem;
        border-top-right-radius: 16px;
        min-height:10rem;
        background-color: ${TAILWIND_COLORS.stone[950]};
        bottom: 0.00001px;
        left: 0;
    `

    let root = html`
	    <div class=${use(store.page, (p) => (p === "home" || p==="settings") ? container : hiddenContainer)}>
		    ${use(store.page, (p =>
          $if(p === "home",
            html`<${App} />`,
            $if(p === "hidden",
              html`<svg on:click=${() => store.page = "home"} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="${TAILWIND_COLORS.stone[50]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>>`,
              html`<span>settings page</span>`
            ),
          )))
        }
	    <div/>
    `;

// ```


    document.body.appendChild(root);

    function proxyFetch() {

      globalThis.fetch = new Proxy(fetch, {
        async apply(target, thisArg, argumentsList) {
          const r = argumentsList[0] instanceof Request ? argumentsList[0] : undefined;
          const rc = r.clone()
          try {


            const response = await Reflect.apply(target, thisArg, argumentsList);
            if (r instanceof Request && r.url.includes("getAssessmentItem")) {
              console.log("GOT ASSESSMENT")
              const res = response.clone()
              const data = (await res.json()).data
              const itemData = JSON.parse(data.assessmentItem.item.itemData)
              for (let key in itemData.question.widgets) {
                const item = itemData.question.widgets[key]
                if (!item.graded) continue;
                if (item.type === "radio") {
                    const correct = item.options.choices.find(i => i.correct)
                    addAnswer(correct, "radio")
                    // answerState.list = [...answerState.list, correct]

                } else if (item.type === "expression") {
                  const correct = item.options.answerForms[0]
                  addAnswer(correct, "expression")
                  //answerState.list = [...answerState.list, correct]
                } else {
                  console.log(`[DREAMCHEAT] - UNKNOWN ITEM`, item)
                }
              }
            } else if (argumentsList[0] instanceof Request && argumentsList[0].url.includes("attemptProblem")) {
              const payload = await rc.json();
              const inputData = payload.variables.input
              const attemptState = JSON.parse(inputData.attemptState);
              console.log(inputData)
              console.log(attemptState)
              for (const key in attemptState) {
                  if (`${key}`.includes("expression")) {
                      const attempt = attemptState[key];
                      const correctExpression = attempt.value.replaceAll("{", "").replaceAll("}", "");
                      console.log(`CORRECT EXPRESSION: ${correctExpression}`)
                      answerState.list = answerState.list.filter(item => item[0] !== correctExpression);



                      console.log("ATTEMPT EXPRESSION: ",attemptState[key])
                  } else {
                    const attempt = attemptState[key];
                    const correctSelect = attempt.choiceStates.findIndex(c => c.selected)
                    const correctChoice = attempt.choices.findIndex(c => c.correct)
                    if (correctChoice && correctSelect) {
                        const correct = attempt.choices[correctChoice]
                        console.log("GOT CORRECT", correct)
                        answerState.list = answerState.list.filter(a => a[0].content !== correct.content)
                        //console.log(answerState.list)
                    }
                  }

              }


            }
            return response;
          } catch (error) {
            console.error('Fetch error:', error);

          }
        }
      });
    }

      navigation.addEventListener("navigate", (event) => {
        answerState.list = []
        const isVideo = event.destination.url.split("/").indexOf("v") != -1;
        if (isVideo) {
          modeState.mode = "video"
        } else {
          modeState.mode = "general"
        }

        currentVideoProgress = {
          val:0,
          timesModified: 0
        };
      })


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

       `
      if (type === "radio") {
        answerState.list = [...answerState.list, [data, html`<span class=${answerContentStyle} on:click=${() => writeToClipboard(data.content, "Copied to clipboard")}>${data.content}</span>`]]
      } else if (type === "expression") {
        const randID = crypto.randomUUID()
        answerState.list = [...answerState.list, [data.value, html`<span class=${answerContentStyle} id=${randID} on:click=${() => writeToClipboard(data.value, "Copied to clipboard")}></span>`]]
        katex.render(data.value, document.getElementById(randID))
      }
    }

   function writeToClipboard(content, message) {
     navigator.clipboard.writeText(content)
     toast(message, 2000);
   }
   function closeMenu() {
        store.page = "hidden"

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

    window.toast = function(message, duration = 3000) {
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

})()

