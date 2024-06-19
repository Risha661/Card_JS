// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1jRsq":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c0e5739648fa6cdc";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fl9kG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _redom = require("redom");
var _imask = require("imask");
var _imaskDefault = parcelHelpers.interopDefault(_imask);
const wrapper = (0, _redom.el)("div", {
    className: "wrapper"
});
const card = (0, _redom.el)("div", {
    className: "card"
});
const cardHeader = (0, _redom.el)("p", "Secure Checkout", {
    className: "secure"
});
const cardInfo = (0, _redom.el)("div", {
    className: "credit-card"
});
const cardNumber = (0, _redom.el)("span", "xxxx xxxx xxxx xxxx", {
    className: "card__number"
});
const cardPersonal = (0, _redom.el)("div", {
    className: "card__personal"
});
const cardName = (0, _redom.el)("span", {
    className: "card__name"
}, "John Doe");
const cardDate = (0, _redom.el)("span", {
    className: "card__date"
}, "12/34");
const form = (0, _redom.el)("form", {
    className: "form",
    id: "form",
    action: "#"
});
const holderWrapDiv = (0, _redom.el)("div", {
    className: "form__input-wrap form__input-wrap_holder"
}, [
    (0, _redom.el)("label", {
        className: "form__label form__holder-label"
    }, "Card Holder")
]);
const holderInput = (0, _redom.el)("input", {
    id: "card_holder",
    type: "text",
    class: "input input__holder"
});
const numberWrap = (0, _redom.el)("div", {
    className: "form__input-wrap form__input-wrap_number"
}, [
    (0, _redom.el)("label", {
        className: "form__label form__number-label",
        textContent: "Card Number"
    })
]);
const numberInput = (0, _redom.el)("input", {
    id: "card_number",
    type: "text",
    class: "input input__number"
});
const dateWrapDiv = (0, _redom.el)("div", {
    className: "form__input-wrap form__input-wrap_date"
}, [
    (0, _redom.el)("label", {
        className: "form__label form__date-label"
    }, "Card Expiry")
]);
const expiryCardInput = (0, _redom.el)("input", {
    id: "card_expiry",
    type: "text",
    className: "input input__date"
});
const cvvWrap = (0, _redom.el)("div", {
    className: "form__input-wrap form__input-wrap_cvv"
}, [
    (0, _redom.el)("label", {
        className: "form__label form__cvv-label"
    }, "CVV")
]);
const cvvInput = (0, _redom.el)("input", {
    id: "card_cvv",
    type: "text",
    className: "input input__cvv"
});
const submitBtn = (0, _redom.el)("button", {
    className: "form__button"
}, "CHECK OUT");
(0, _redom.mount)(wrapper, card);
(0, _redom.mount)(holderWrapDiv, holderInput);
(0, _redom.mount)(numberWrap, numberInput);
(0, _redom.mount)(dateWrapDiv, expiryCardInput);
(0, _redom.mount)(cvvWrap, cvvInput);
(0, _redom.setChildren)(cardPersonal, [
    cardName,
    cardDate
]);
(0, _redom.setChildren)(cardInfo, [
    cardNumber,
    cardPersonal
]);
(0, _redom.setChildren)(form, [
    holderWrapDiv,
    numberWrap,
    dateWrapDiv,
    cvvWrap,
    submitBtn
]);
(0, _redom.setChildren)(card, [
    cardHeader,
    cardInfo,
    form
]);
numberInput.addEventListener("input", ()=>{
    cardNumber.textContent = cardNumberMask.value;
});
cvvWrap.addEventListener("input", ()=>{});
document.body.appendChild(wrapper);

},{"redom":"cWIuY","imask":"aLznl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cWIuY":[function(require,module,exports) {
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    function createElement(query, ns) {
        var ref = parse(query);
        var tag = ref.tag;
        var id = ref.id;
        var className = ref.className;
        var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
        if (id) element.id = id;
        if (className) {
            if (ns) element.setAttribute("class", className);
            else element.className = className;
        }
        return element;
    }
    function parse(query) {
        var chunks = query.split(/([.#])/);
        var className = "";
        var id = "";
        for(var i = 1; i < chunks.length; i += 2)switch(chunks[i]){
            case ".":
                className += " " + chunks[i + 1];
                break;
            case "#":
                id = chunks[i + 1];
        }
        return {
            className: className.trim(),
            tag: chunks[0] || "div",
            id: id
        };
    }
    function html(query) {
        var args = [], len = arguments.length - 1;
        while(len-- > 0)args[len] = arguments[len + 1];
        var element;
        var type = typeof query;
        if (type === "string") element = createElement(query);
        else if (type === "function") {
            var Query = query;
            element = new (Function.prototype.bind.apply(Query, [
                null
            ].concat(args)));
        } else throw new Error("At least one argument required");
        parseArgumentsInternal(getEl(element), args, true);
        return element;
    }
    var el = html;
    var h = html;
    html.extend = function extendHtml() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return html.bind.apply(html, [
            this
        ].concat(args));
    };
    function unmount(parent, child) {
        var parentEl = getEl(parent);
        var childEl = getEl(child);
        if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
        child = childEl.__redom_view;
        if (childEl.parentNode) {
            doUnmount(child, childEl, parentEl);
            parentEl.removeChild(childEl);
        }
        return child;
    }
    function doUnmount(child, childEl, parentEl) {
        var hooks = childEl.__redom_lifecycle;
        if (hooksAreEmpty(hooks)) {
            childEl.__redom_lifecycle = {};
            return;
        }
        var traverse = parentEl;
        if (childEl.__redom_mounted) trigger(childEl, "onunmount");
        while(traverse){
            var parentHooks = traverse.__redom_lifecycle || {};
            for(var hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
            if (hooksAreEmpty(parentHooks)) traverse.__redom_lifecycle = null;
            traverse = traverse.parentNode;
        }
    }
    function hooksAreEmpty(hooks) {
        if (hooks == null) return true;
        for(var key in hooks){
            if (hooks[key]) return false;
        }
        return true;
    }
    /* global Node, ShadowRoot */ var hookNames = [
        "onmount",
        "onremount",
        "onunmount"
    ];
    var shadowRootAvailable = typeof window !== "undefined" && "ShadowRoot" in window;
    function mount(parent, child, before, replace) {
        var parentEl = getEl(parent);
        var childEl = getEl(child);
        if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
        child = childEl.__redom_view;
        if (child !== childEl) childEl.__redom_view = child;
        var wasMounted = childEl.__redom_mounted;
        var oldParent = childEl.parentNode;
        if (wasMounted && oldParent !== parentEl) doUnmount(child, childEl, oldParent);
        if (before != null) {
            if (replace) {
                var beforeEl = getEl(before);
                if (beforeEl.__redom_mounted) trigger(beforeEl, "onunmount");
                parentEl.replaceChild(childEl, beforeEl);
            } else parentEl.insertBefore(childEl, getEl(before));
        } else parentEl.appendChild(childEl);
        doMount(child, childEl, parentEl, oldParent);
        return child;
    }
    function trigger(el, eventName) {
        if (eventName === "onmount" || eventName === "onremount") el.__redom_mounted = true;
        else if (eventName === "onunmount") el.__redom_mounted = false;
        var hooks = el.__redom_lifecycle;
        if (!hooks) return;
        var view = el.__redom_view;
        var hookCount = 0;
        view && view[eventName] && view[eventName]();
        for(var hook in hooks)if (hook) hookCount++;
        if (hookCount) {
            var traverse = el.firstChild;
            while(traverse){
                var next = traverse.nextSibling;
                trigger(traverse, eventName);
                traverse = next;
            }
        }
    }
    function doMount(child, childEl, parentEl, oldParent) {
        var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
        var remount = parentEl === oldParent;
        var hooksFound = false;
        for(var i = 0, list = hookNames; i < list.length; i += 1){
            var hookName = list[i];
            if (!remount) {
                // if already mounted, skip this phase
                if (child !== childEl) // only Views can have lifecycle events
                {
                    if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
                }
            }
            if (hooks[hookName]) hooksFound = true;
        }
        if (!hooksFound) {
            childEl.__redom_lifecycle = {};
            return;
        }
        var traverse = parentEl;
        var triggered = false;
        if (remount || traverse && traverse.__redom_mounted) {
            trigger(childEl, remount ? "onremount" : "onmount");
            triggered = true;
        }
        while(traverse){
            var parent = traverse.parentNode;
            var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});
            for(var hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
            if (triggered) break;
            else {
                if (traverse.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse instanceof ShadowRoot || parent && parent.__redom_mounted) {
                    trigger(traverse, remount ? "onremount" : "onmount");
                    triggered = true;
                }
                traverse = parent;
            }
        }
    }
    function setStyle(view, arg1, arg2) {
        var el = getEl(view);
        if (typeof arg1 === "object") for(var key in arg1)setStyleValue(el, key, arg1[key]);
        else setStyleValue(el, arg1, arg2);
    }
    function setStyleValue(el, key, value) {
        el.style[key] = value == null ? "" : value;
    }
    /* global SVGElement */ var xlinkns = "http://www.w3.org/1999/xlink";
    function setAttr(view, arg1, arg2) {
        setAttrInternal(view, arg1, arg2);
    }
    function setAttrInternal(view, arg1, arg2, initial) {
        var el = getEl(view);
        var isObj = typeof arg1 === "object";
        if (isObj) for(var key in arg1)setAttrInternal(el, key, arg1[key], initial);
        else {
            var isSVG = el instanceof SVGElement;
            var isFunc = typeof arg2 === "function";
            if (arg1 === "style" && typeof arg2 === "object") setStyle(el, arg2);
            else if (isSVG && isFunc) el[arg1] = arg2;
            else if (arg1 === "dataset") setData(el, arg2);
            else if (!isSVG && (arg1 in el || isFunc) && arg1 !== "list") el[arg1] = arg2;
            else {
                if (isSVG && arg1 === "xlink") {
                    setXlink(el, arg2);
                    return;
                }
                if (initial && arg1 === "class") arg2 = el.className + " " + arg2;
                if (arg2 == null) el.removeAttribute(arg1);
                else el.setAttribute(arg1, arg2);
            }
        }
    }
    function setXlink(el, arg1, arg2) {
        if (typeof arg1 === "object") for(var key in arg1)setXlink(el, key, arg1[key]);
        else if (arg2 != null) el.setAttributeNS(xlinkns, arg1, arg2);
        else el.removeAttributeNS(xlinkns, arg1, arg2);
    }
    function setData(el, arg1, arg2) {
        if (typeof arg1 === "object") for(var key in arg1)setData(el, key, arg1[key]);
        else if (arg2 != null) el.dataset[arg1] = arg2;
        else delete el.dataset[arg1];
    }
    function text(str) {
        return document.createTextNode(str != null ? str : "");
    }
    function parseArgumentsInternal(element, args, initial) {
        for(var i = 0, list = args; i < list.length; i += 1){
            var arg = list[i];
            if (arg !== 0 && !arg) continue;
            var type = typeof arg;
            if (type === "function") arg(element);
            else if (type === "string" || type === "number") element.appendChild(text(arg));
            else if (isNode(getEl(arg))) mount(element, arg);
            else if (arg.length) parseArgumentsInternal(element, arg, initial);
            else if (type === "object") setAttrInternal(element, arg, null, initial);
        }
    }
    function ensureEl(parent) {
        return typeof parent === "string" ? html(parent) : getEl(parent);
    }
    function getEl(parent) {
        return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
    }
    function isNode(arg) {
        return arg && arg.nodeType;
    }
    function dispatch(child, data, eventName) {
        if (eventName === void 0) eventName = "redom";
        var childEl = getEl(child);
        var event = new CustomEvent(eventName, {
            bubbles: true,
            detail: data
        });
        childEl.dispatchEvent(event);
    }
    function setChildren(parent) {
        var children = [], len = arguments.length - 1;
        while(len-- > 0)children[len] = arguments[len + 1];
        var parentEl = getEl(parent);
        var current = traverse(parent, children, parentEl.firstChild);
        while(current){
            var next = current.nextSibling;
            unmount(parent, current);
            current = next;
        }
    }
    function traverse(parent, children, _current) {
        var current = _current;
        var childEls = Array(children.length);
        for(var i = 0; i < children.length; i++)childEls[i] = children[i] && getEl(children[i]);
        for(var i$1 = 0; i$1 < children.length; i$1++){
            var child = children[i$1];
            if (!child) continue;
            var childEl = childEls[i$1];
            if (childEl === current) {
                current = current.nextSibling;
                continue;
            }
            if (isNode(childEl)) {
                var next = current && current.nextSibling;
                var exists = child.__redom_index != null;
                var replace = exists && next === childEls[i$1 + 1];
                mount(parent, child, current, replace);
                if (replace) current = next;
                continue;
            }
            if (child.length != null) current = traverse(parent, child, current);
        }
        return current;
    }
    function listPool(View, key, initData) {
        return new ListPool(View, key, initData);
    }
    var ListPool = function ListPool(View, key, initData) {
        this.View = View;
        this.initData = initData;
        this.oldLookup = {};
        this.lookup = {};
        this.oldViews = [];
        this.views = [];
        if (key != null) this.key = typeof key === "function" ? key : propKey(key);
    };
    ListPool.prototype.update = function update(data, context) {
        var ref = this;
        var View = ref.View;
        var key = ref.key;
        var initData = ref.initData;
        var keySet = key != null;
        var oldLookup = this.lookup;
        var newLookup = {};
        var newViews = Array(data.length);
        var oldViews = this.views;
        for(var i = 0; i < data.length; i++){
            var item = data[i];
            var view = void 0;
            if (keySet) {
                var id = key(item);
                view = oldLookup[id] || new View(initData, item, i, data);
                newLookup[id] = view;
                view.__redom_id = id;
            } else view = oldViews[i] || new View(initData, item, i, data);
            view.update && view.update(item, i, data, context);
            var el = getEl(view.el);
            el.__redom_view = view;
            newViews[i] = view;
        }
        this.oldViews = oldViews;
        this.views = newViews;
        this.oldLookup = oldLookup;
        this.lookup = newLookup;
    };
    function propKey(key) {
        return function(item) {
            return item[key];
        };
    }
    function list(parent, View, key, initData) {
        return new List(parent, View, key, initData);
    }
    var List = function List(parent, View, key, initData) {
        this.View = View;
        this.initData = initData;
        this.views = [];
        this.pool = new ListPool(View, key, initData);
        this.el = ensureEl(parent);
        this.keySet = key != null;
    };
    List.prototype.update = function update(data, context) {
        if (data === void 0) data = [];
        var ref = this;
        var keySet = ref.keySet;
        var oldViews = this.views;
        this.pool.update(data, context);
        var ref$1 = this.pool;
        var views = ref$1.views;
        var lookup = ref$1.lookup;
        if (keySet) for(var i = 0; i < oldViews.length; i++){
            var oldView = oldViews[i];
            var id = oldView.__redom_id;
            if (lookup[id] == null) {
                oldView.__redom_index = null;
                unmount(this, oldView);
            }
        }
        for(var i$1 = 0; i$1 < views.length; i$1++){
            var view = views[i$1];
            view.__redom_index = i$1;
        }
        setChildren(this, views);
        if (keySet) this.lookup = lookup;
        this.views = views;
    };
    List.extend = function extendList(parent, View, key, initData) {
        return List.bind(List, parent, View, key, initData);
    };
    list.extend = List.extend;
    /* global Node */ function place(View, initData) {
        return new Place(View, initData);
    }
    var Place = function Place(View, initData) {
        this.el = text("");
        this.visible = false;
        this.view = null;
        this._placeholder = this.el;
        if (View instanceof Node) this._el = View;
        else if (View.el instanceof Node) {
            this._el = View;
            this.view = View;
        } else this._View = View;
        this._initData = initData;
    };
    Place.prototype.update = function update(visible, data) {
        var placeholder = this._placeholder;
        var parentNode = this.el.parentNode;
        if (visible) {
            if (!this.visible) {
                if (this._el) {
                    mount(parentNode, this._el, placeholder);
                    unmount(parentNode, placeholder);
                    this.el = getEl(this._el);
                    this.visible = visible;
                } else {
                    var View = this._View;
                    var view = new View(this._initData);
                    this.el = getEl(view);
                    this.view = view;
                    mount(parentNode, view, placeholder);
                    unmount(parentNode, placeholder);
                }
            }
            this.view && this.view.update && this.view.update(data);
        } else if (this.visible) {
            if (this._el) {
                mount(parentNode, placeholder, this._el);
                unmount(parentNode, this._el);
                this.el = placeholder;
                this.visible = visible;
                return;
            }
            mount(parentNode, placeholder, this.view);
            unmount(parentNode, this.view);
            this.el = placeholder;
            this.view = null;
        }
        this.visible = visible;
    };
    /* global Node */ function router(parent, views, initData) {
        return new Router(parent, views, initData);
    }
    var Router = function Router(parent, views, initData) {
        this.el = ensureEl(parent);
        this.views = views;
        this.Views = views; // backwards compatibility
        this.initData = initData;
    };
    Router.prototype.update = function update(route, data) {
        if (route !== this.route) {
            var views = this.views;
            var View = views[route];
            this.route = route;
            if (View && (View instanceof Node || View.el instanceof Node)) this.view = View;
            else this.view = View && new View(this.initData, data);
            setChildren(this.el, [
                this.view
            ]);
        }
        this.view && this.view.update && this.view.update(data, route);
    };
    var ns = "http://www.w3.org/2000/svg";
    function svg(query) {
        var args = [], len = arguments.length - 1;
        while(len-- > 0)args[len] = arguments[len + 1];
        var element;
        var type = typeof query;
        if (type === "string") element = createElement(query, ns);
        else if (type === "function") {
            var Query = query;
            element = new (Function.prototype.bind.apply(Query, [
                null
            ].concat(args)));
        } else throw new Error("At least one argument required");
        parseArgumentsInternal(getEl(element), args, true);
        return element;
    }
    var s = svg;
    svg.extend = function extendSvg() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return svg.bind.apply(svg, [
            this
        ].concat(args));
    };
    svg.ns = ns;
    function viewFactory(views, key) {
        if (!views || typeof views !== "object") throw new Error("views must be an object");
        if (!key || typeof key !== "string") throw new Error("key must be a string");
        return function(initData, item, i, data) {
            var viewKey = item[key];
            var View = views[viewKey];
            if (View) return new View(initData, item, i, data);
            else throw new Error("view " + viewKey + " not found");
        };
    }
    exports1.List = List;
    exports1.ListPool = ListPool;
    exports1.Place = Place;
    exports1.Router = Router;
    exports1.dispatch = dispatch;
    exports1.el = el;
    exports1.h = h;
    exports1.html = html;
    exports1.list = list;
    exports1.listPool = listPool;
    exports1.mount = mount;
    exports1.place = place;
    exports1.router = router;
    exports1.s = s;
    exports1.setAttr = setAttr;
    exports1.setChildren = setChildren;
    exports1.setData = setData;
    exports1.setStyle = setStyle;
    exports1.setXlink = setXlink;
    exports1.svg = svg;
    exports1.text = text;
    exports1.unmount = unmount;
    exports1.viewFactory = viewFactory;
});

},{}],"aLznl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputMask", ()=>(0, _inputJsDefault.default));
parcelHelpers.export(exports, "HTMLContenteditableMaskElement", ()=>(0, _htmlContenteditableMaskElementJsDefault.default));
parcelHelpers.export(exports, "HTMLInputMaskElement", ()=>(0, _htmlInputMaskElementJsDefault.default));
parcelHelpers.export(exports, "HTMLMaskElement", ()=>(0, _htmlMaskElementJsDefault.default));
parcelHelpers.export(exports, "MaskElement", ()=>(0, _maskElementJsDefault.default));
parcelHelpers.export(exports, "ChangeDetails", ()=>(0, _changeDetailsJsDefault.default));
parcelHelpers.export(exports, "DIRECTION", ()=>(0, _utilsJs.DIRECTION));
parcelHelpers.export(exports, "forceDirection", ()=>(0, _utilsJs.forceDirection));
parcelHelpers.export(exports, "Masked", ()=>(0, _baseJsDefault.default));
parcelHelpers.export(exports, "MaskedDate", ()=>(0, _dateJsDefault.default));
parcelHelpers.export(exports, "MaskedDynamic", ()=>(0, _dynamicJsDefault.default));
parcelHelpers.export(exports, "MaskedEnum", ()=>(0, _enumJsDefault.default));
parcelHelpers.export(exports, "createMask", ()=>(0, _factoryJsDefault.default));
parcelHelpers.export(exports, "normalizeOpts", ()=>(0, _factoryJs.normalizeOpts));
parcelHelpers.export(exports, "MaskedFunction", ()=>(0, _functionJsDefault.default));
parcelHelpers.export(exports, "MaskedNumber", ()=>(0, _numberJsDefault.default));
parcelHelpers.export(exports, "MaskedPattern", ()=>(0, _patternJsDefault.default));
parcelHelpers.export(exports, "ChunksTailDetails", ()=>(0, _chunkTailDetailsJsDefault.default));
parcelHelpers.export(exports, "PatternFixedDefinition", ()=>(0, _fixedDefinitionJsDefault.default));
parcelHelpers.export(exports, "PatternInputDefinition", ()=>(0, _inputDefinitionJsDefault.default));
parcelHelpers.export(exports, "PIPE_TYPE", ()=>(0, _pipeJs.PIPE_TYPE));
parcelHelpers.export(exports, "createPipe", ()=>(0, _pipeJs.createPipe));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeJs.pipe));
parcelHelpers.export(exports, "MaskedRange", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "MaskedRegExp", ()=>(0, _regexpJsDefault.default));
parcelHelpers.export(exports, "RepeatBlock", ()=>(0, _repeatJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _holderJsDefault.default));
var _inputJs = require("./controls/input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _holderJs = require("./core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _htmlContenteditableMaskElementJs = require("./controls/html-contenteditable-mask-element.js");
var _htmlContenteditableMaskElementJsDefault = parcelHelpers.interopDefault(_htmlContenteditableMaskElementJs);
var _htmlInputMaskElementJs = require("./controls/html-input-mask-element.js");
var _htmlInputMaskElementJsDefault = parcelHelpers.interopDefault(_htmlInputMaskElementJs);
var _htmlMaskElementJs = require("./controls/html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _maskElementJs = require("./controls/mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _changeDetailsJs = require("./core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("./core/utils.js");
var _baseJs = require("./masked/base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _dateJs = require("./masked/date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _dynamicJs = require("./masked/dynamic.js");
var _dynamicJsDefault = parcelHelpers.interopDefault(_dynamicJs);
var _enumJs = require("./masked/enum.js");
var _enumJsDefault = parcelHelpers.interopDefault(_enumJs);
var _factoryJs = require("./masked/factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _functionJs = require("./masked/function.js");
var _functionJsDefault = parcelHelpers.interopDefault(_functionJs);
var _numberJs = require("./masked/number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _patternJs = require("./masked/pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _chunkTailDetailsJs = require("./masked/pattern/chunk-tail-details.js");
var _chunkTailDetailsJsDefault = parcelHelpers.interopDefault(_chunkTailDetailsJs);
var _fixedDefinitionJs = require("./masked/pattern/fixed-definition.js");
var _fixedDefinitionJsDefault = parcelHelpers.interopDefault(_fixedDefinitionJs);
var _inputDefinitionJs = require("./masked/pattern/input-definition.js");
var _inputDefinitionJsDefault = parcelHelpers.interopDefault(_inputDefinitionJs);
var _pipeJs = require("./masked/pipe.js");
var _rangeJs = require("./masked/range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _regexpJs = require("./masked/regexp.js");
var _regexpJsDefault = parcelHelpers.interopDefault(_regexpJs);
var _repeatJs = require("./masked/repeat.js");
var _repeatJsDefault = parcelHelpers.interopDefault(_repeatJs);
var _actionDetailsJs = require("./core/action-details.js");
var _inputHistoryJs = require("./controls/input-history.js");
var _continuousTailDetailsJs = require("./core/continuous-tail-details.js");
var _cursorJs = require("./masked/pattern/cursor.js");
try {
    globalThis.IMask = (0, _holderJsDefault.default);
} catch  {}

},{"./controls/input.js":"bZfiB","./core/holder.js":"fNs7n","./controls/html-contenteditable-mask-element.js":"l1S15","./controls/html-input-mask-element.js":"2feR7","./controls/html-mask-element.js":"exheL","./controls/mask-element.js":"6dhyp","./core/change-details.js":"cDdFe","./core/utils.js":"hh2Rx","./masked/base.js":"i9dza","./masked/date.js":"1V3CB","./masked/dynamic.js":"kPiRi","./masked/enum.js":"dmeoh","./masked/factory.js":"4c29b","./masked/function.js":"64ffz","./masked/number.js":"gHi3R","./masked/pattern.js":"edg1G","./masked/pattern/chunk-tail-details.js":"a8Q24","./masked/pattern/fixed-definition.js":"fnLC7","./masked/pattern/input-definition.js":"lGvsS","./masked/pipe.js":"knGz0","./masked/range.js":"iHvQL","./masked/regexp.js":"7B25G","./masked/repeat.js":"ccFx2","./core/action-details.js":"cJg34","./controls/input-history.js":"fZNGO","./core/continuous-tail-details.js":"5MbDY","./masked/pattern/cursor.js":"1K9Ff","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZfiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>InputMask);
var _utilsJs = require("../core/utils.js");
var _actionDetailsJs = require("../core/action-details.js");
var _actionDetailsJsDefault = parcelHelpers.interopDefault(_actionDetailsJs);
var _factoryJs = require("../masked/factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _maskElementJs = require("./mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _htmlInputMaskElementJs = require("./html-input-mask-element.js");
var _htmlInputMaskElementJsDefault = parcelHelpers.interopDefault(_htmlInputMaskElementJs);
var _htmlContenteditableMaskElementJs = require("./html-contenteditable-mask-element.js");
var _htmlContenteditableMaskElementJsDefault = parcelHelpers.interopDefault(_htmlContenteditableMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _inputHistoryJs = require("./input-history.js");
var _inputHistoryJsDefault = parcelHelpers.interopDefault(_inputHistoryJs);
var _htmlMaskElementJs = require("./html-mask-element.js");
/** Listens to element events and controls changes between element and {@link Masked} */ class InputMask {
    /**
    View element
  */ /** Internal {@link Masked} model */ constructor(el, opts){
        this.el = el instanceof (0, _maskElementJsDefault.default) ? el : el.isContentEditable && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA" ? new (0, _htmlContenteditableMaskElementJsDefault.default)(el) : new (0, _htmlInputMaskElementJsDefault.default)(el);
        this.masked = (0, _factoryJsDefault.default)(opts);
        this._listeners = {};
        this._value = "";
        this._unmaskedValue = "";
        this._rawInputValue = "";
        this.history = new (0, _inputHistoryJsDefault.default)();
        this._saveSelection = this._saveSelection.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onDrop = this._onDrop.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onUndo = this._onUndo.bind(this);
        this._onRedo = this._onRedo.bind(this);
        this.alignCursor = this.alignCursor.bind(this);
        this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
        this._bindEvents();
        // refresh
        this.updateValue();
        this._onChange();
    }
    maskEquals(mask) {
        var _this$masked;
        return mask == null || ((_this$masked = this.masked) == null ? void 0 : _this$masked.maskEquals(mask));
    }
    /** Masked */ get mask() {
        return this.masked.mask;
    }
    set mask(mask) {
        if (this.maskEquals(mask)) return;
        if (!(mask instanceof (0, _holderJsDefault.default).Masked) && this.masked.constructor === (0, _factoryJs.maskedClass)(mask)) {
            // TODO "any" no idea
            this.masked.updateOptions({
                mask
            });
            return;
        }
        const masked = mask instanceof (0, _holderJsDefault.default).Masked ? mask : (0, _factoryJsDefault.default)({
            mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
    }
    /** Raw value */ get value() {
        return this._value;
    }
    set value(str) {
        if (this.value === str) return;
        this.masked.value = str;
        this.updateControl("auto");
    }
    /** Unmasked value */ get unmaskedValue() {
        return this._unmaskedValue;
    }
    set unmaskedValue(str) {
        if (this.unmaskedValue === str) return;
        this.masked.unmaskedValue = str;
        this.updateControl("auto");
    }
    /** Raw input value */ get rawInputValue() {
        return this._rawInputValue;
    }
    set rawInputValue(str) {
        if (this.rawInputValue === str) return;
        this.masked.rawInputValue = str;
        this.updateControl();
        this.alignCursor();
    }
    /** Typed unmasked value */ get typedValue() {
        return this.masked.typedValue;
    }
    set typedValue(val) {
        if (this.masked.typedValueEquals(val)) return;
        this.masked.typedValue = val;
        this.updateControl("auto");
    }
    /** Display value */ get displayValue() {
        return this.masked.displayValue;
    }
    /** Starts listening to element events */ _bindEvents() {
        this.el.bindEvents({
            selectionChange: this._saveSelection,
            input: this._onInput,
            drop: this._onDrop,
            click: this._onClick,
            focus: this._onFocus,
            commit: this._onChange,
            undo: this._onUndo,
            redo: this._onRedo
        });
    }
    /** Stops listening to element events */ _unbindEvents() {
        if (this.el) this.el.unbindEvents();
    }
    /** Fires custom event */ _fireEvent(ev, e) {
        const listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach((l)=>l(e));
    }
    /** Current selection start */ get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */ get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    }
    set cursorPos(pos) {
        if (!this.el || !this.el.isActive) return;
        this.el.select(pos, pos);
        this._saveSelection();
    }
    /** Stores current selection */ _saveSelection() {
        if (this.displayValue !== this.el.value) console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."); // eslint-disable-line no-console
        this._selection = {
            start: this.selectionStart,
            end: this.cursorPos
        };
    }
    /** Syncronizes model value from view */ updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
        this._unmaskedValue = this.masked.unmaskedValue;
        this._rawInputValue = this.masked.rawInputValue;
    }
    /** Syncronizes view from model value, fires change events */ updateControl(cursorPos) {
        const newUnmaskedValue = this.masked.unmaskedValue;
        const newValue = this.masked.value;
        const newRawInputValue = this.masked.rawInputValue;
        const newDisplayValue = this.displayValue;
        const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue || this._rawInputValue !== newRawInputValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        this._rawInputValue = newRawInputValue;
        if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
        if (cursorPos === "auto") this.alignCursor();
        else if (cursorPos != null) this.cursorPos = cursorPos;
        if (isChanged) this._fireChangeEvents();
        if (!this._historyChanging && (isChanged || this.history.isEmpty)) this.history.push({
            unmaskedValue: newUnmaskedValue,
            selection: {
                start: this.selectionStart,
                end: this.cursorPos
            }
        });
    }
    /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */ updateOptions(opts) {
        const { mask, ...restOpts } = opts; // TODO types, yes, mask is optional
        const updateMask = !this.maskEquals(mask);
        const updateOpts = this.masked.optionsIsChanged(restOpts);
        if (updateMask) this.mask = mask;
        if (updateOpts) this.masked.updateOptions(restOpts); // TODO
        if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */ updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos;
        // also queue change cursor for mobile browsers
        this._delayUpdateCursor(cursorPos);
    }
    /** Delays cursor update to support mobile browsers */ _delayUpdateCursor(cursorPos) {
        this._abortUpdateCursor();
        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(()=>{
            if (!this.el) return; // if was destroyed
            this.cursorPos = this._changingCursorPos;
            this._abortUpdateCursor();
        }, 10);
    }
    /** Fires custom events */ _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent);
        if (this.masked.isComplete) this._fireEvent("complete", this._inputEvent);
    }
    /** Aborts delayed cursor update */ _abortUpdateCursor() {
        if (this._cursorChanging) {
            clearTimeout(this._cursorChanging);
            delete this._cursorChanging;
        }
    }
    /** Aligns cursor to nearest available position */ alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, (0, _utilsJs.DIRECTION).LEFT));
    }
    /** Aligns cursor only if selection is empty */ alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
        this.alignCursor();
    }
    /** Adds listener on custom event */ on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];
        this._listeners[ev].push(handler);
        return this;
    }
    /** Removes custom event listener */ off(ev, handler) {
        if (!this._listeners[ev]) return this;
        if (!handler) {
            delete this._listeners[ev];
            return this;
        }
        const hIndex = this._listeners[ev].indexOf(handler);
        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
    }
    /** Handles view input event */ _onInput(e) {
        this._inputEvent = e;
        this._abortUpdateCursor();
        const details = new (0, _actionDetailsJsDefault.default)({
            // new state
            value: this.el.value,
            cursorPos: this.cursorPos,
            // old state
            oldValue: this.displayValue,
            oldSelection: this._selection
        });
        const oldRawValue = this.masked.rawInputValue;
        const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
            input: true,
            raw: true
        }).offset;
        // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
        const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : (0, _utilsJs.DIRECTION).NONE;
        let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        if (removeDirection !== (0, _utilsJs.DIRECTION).NONE) cursorPos = this.masked.nearestInputPos(cursorPos, (0, _utilsJs.DIRECTION).NONE);
        this.updateControl(cursorPos);
        delete this._inputEvent;
    }
    /** Handles view change event and commits model value */ _onChange() {
        if (this.displayValue !== this.el.value) this.updateValue();
        this.masked.doCommit();
        this.updateControl();
        this._saveSelection();
    }
    /** Handles view drop event, prevents by default */ _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    /** Restore last selection on focus */ _onFocus(ev) {
        this.alignCursorFriendly();
    }
    /** Restore last selection on focus */ _onClick(ev) {
        this.alignCursorFriendly();
    }
    _onUndo() {
        this._applyHistoryState(this.history.undo());
    }
    _onRedo() {
        this._applyHistoryState(this.history.redo());
    }
    _applyHistoryState(state) {
        if (!state) return;
        this._historyChanging = true;
        this.unmaskedValue = state.unmaskedValue;
        this.el.select(state.selection.start, state.selection.end);
        this._saveSelection();
        this._historyChanging = false;
    }
    /** Unbind view events and removes element reference */ destroy() {
        this._unbindEvents();
        this._listeners.length = 0;
        delete this.el;
    }
}
(0, _holderJsDefault.default).InputMask = InputMask;

},{"../core/utils.js":"hh2Rx","../core/action-details.js":"cJg34","../masked/factory.js":"4c29b","./mask-element.js":"6dhyp","./html-input-mask-element.js":"2feR7","./html-contenteditable-mask-element.js":"l1S15","../core/holder.js":"fNs7n","./input-history.js":"fZNGO","./html-mask-element.js":"exheL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hh2Rx":[function(require,module,exports) {
/** Checks if value is string */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Selection range */ parcelHelpers.export(exports, "DIRECTION", ()=>DIRECTION);
parcelHelpers.export(exports, "escapeRegExp", ()=>escapeRegExp);
parcelHelpers.export(exports, "forceDirection", ()=>forceDirection);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "objectIncludes", ()=>objectIncludes);
parcelHelpers.export(exports, "pick", ()=>pick);
function isString(str) {
    return typeof str === "string" || str instanceof String;
}
/** Checks if value is object */ function isObject(obj) {
    var _obj$constructor;
    return typeof obj === "object" && obj != null && (obj == null || (_obj$constructor = obj.constructor) == null ? void 0 : _obj$constructor.name) === "Object";
}
function pick(obj, keys) {
    if (Array.isArray(keys)) return pick(obj, (_, k)=>keys.includes(k));
    return Object.entries(obj).reduce((acc, _ref)=>{
        let [k, v] = _ref;
        if (keys(v, k)) acc[k] = v;
        return acc;
    }, {});
}
/** Direction */ const DIRECTION = {
    NONE: "NONE",
    LEFT: "LEFT",
    FORCE_LEFT: "FORCE_LEFT",
    RIGHT: "RIGHT",
    FORCE_RIGHT: "FORCE_RIGHT"
};
/** Direction */ function forceDirection(direction) {
    switch(direction){
        case DIRECTION.LEFT:
            return DIRECTION.FORCE_LEFT;
        case DIRECTION.RIGHT:
            return DIRECTION.FORCE_RIGHT;
        default:
            return direction;
    }
}
/** Escapes regular expression control chars */ function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
function objectIncludes(b, a) {
    if (a === b) return true;
    const arrA = Array.isArray(a), arrB = Array.isArray(b);
    let i;
    if (arrA && arrB) {
        if (a.length != b.length) return false;
        for(i = 0; i < a.length; i++)if (!objectIncludes(a[i], b[i])) return false;
        return true;
    }
    if (arrA != arrB) return false;
    if (a && b && typeof a === "object" && typeof b === "object") {
        const dateA = a instanceof Date, dateB = b instanceof Date;
        if (dateA && dateB) return a.getTime() == b.getTime();
        if (dateA != dateB) return false;
        const regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
        if (regexpA && regexpB) return a.toString() == b.toString();
        if (regexpA != regexpB) return false;
        const keys = Object.keys(a);
        // if (keys.length !== Object.keys(b).length) return false;
        for(i = 0; i < keys.length; i++)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = 0; i < keys.length; i++)if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
        return true;
    } else if (a && b && typeof a === "function" && typeof b === "function") return a.toString() === b.toString();
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cJg34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ActionDetails);
var _utilsJs = require("./utils.js");
/** Provides details of changing input */ class ActionDetails {
    /** Current input value */ /** Current cursor position */ /** Old input value */ /** Old selection */ constructor(opts){
        Object.assign(this, opts);
        // double check if left part was changed (autofilling, other non-standard input triggers)
        while(this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos))--this.oldSelection.start;
        if (this.insertedCount) {
            // double check right part
            while(this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end))if (this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end) ++this.oldSelection.end;
            else ++this.cursorPos;
        }
    }
    /** Start changing position */ get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /** Inserted symbols count */ get insertedCount() {
        return this.cursorPos - this.startChangePos;
    }
    /** Inserted symbols */ get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /** Removed symbols count */ get removedCount() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
        this.oldValue.length - this.value.length, 0);
    }
    /** Removed symbols */ get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /** Unchanged head symbols */ get head() {
        return this.value.substring(0, this.startChangePos);
    }
    /** Unchanged tail symbols */ get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /** Remove direction */ get removeDirection() {
        if (!this.removedCount || this.insertedCount) return (0, _utilsJs.DIRECTION).NONE;
        // align right if delete at right
        return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
        this.oldSelection.end === this.oldSelection.start ? (0, _utilsJs.DIRECTION).RIGHT : (0, _utilsJs.DIRECTION).LEFT;
    }
}

},{"./utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4c29b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createMask);
parcelHelpers.export(exports, "maskedClass", ()=>maskedClass);
parcelHelpers.export(exports, "normalizeOpts", ()=>normalizeOpts);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
// export function maskedClass(mask: string): typeof MaskedPattern;
// export function maskedClass(mask: DateConstructor): typeof MaskedDate;
// export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
// export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
// export function maskedClass(mask: MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass(mask: Masked): typeof Masked;
// export function maskedClass(mask: typeof Masked): typeof Masked;
// export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
// export function maskedClass(mask: RegExp): typeof MaskedRegExp;
// export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;
/** Get Masked class by mask type */ function maskedClass(mask) /* TODO */ {
    if (mask == null) throw new Error("mask property should be defined");
    if (mask instanceof RegExp) return (0, _holderJsDefault.default).MaskedRegExp;
    if ((0, _utilsJs.isString)(mask)) return (0, _holderJsDefault.default).MaskedPattern;
    if (mask === Date) return (0, _holderJsDefault.default).MaskedDate;
    if (mask === Number) return (0, _holderJsDefault.default).MaskedNumber;
    if (Array.isArray(mask) || mask === Array) return (0, _holderJsDefault.default).MaskedDynamic;
    if ((0, _holderJsDefault.default).Masked && mask.prototype instanceof (0, _holderJsDefault.default).Masked) return mask;
    if ((0, _holderJsDefault.default).Masked && mask instanceof (0, _holderJsDefault.default).Masked) return mask.constructor;
    if (mask instanceof Function) return (0, _holderJsDefault.default).MaskedFunction;
    console.warn("Mask not found for mask", mask); // eslint-disable-line no-console
    return (0, _holderJsDefault.default).Masked;
}
function normalizeOpts(opts) {
    if (!opts) throw new Error("Options in not defined");
    if ((0, _holderJsDefault.default).Masked) {
        if (opts.prototype instanceof (0, _holderJsDefault.default).Masked) return {
            mask: opts
        };
        /*
      handle cases like:
      1) opts = Masked
      2) opts = { mask: Masked, ...instanceOpts }
    */ const { mask, ...instanceOpts } = opts instanceof (0, _holderJsDefault.default).Masked ? {
            mask: opts
        } : (0, _utilsJs.isObject)(opts) && opts.mask instanceof (0, _holderJsDefault.default).Masked ? opts : {};
        if (mask) {
            const _mask = mask.mask;
            return {
                ...(0, _utilsJs.pick)(mask, (_, k)=>!k.startsWith("_")),
                mask: mask.constructor,
                _mask,
                ...instanceOpts
            };
        }
    }
    if (!(0, _utilsJs.isObject)(opts)) return {
        mask: opts
    };
    return {
        ...opts
    };
}
// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
// From masked
// export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
// // From masked class
// export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// // From mask opts
// export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
/** Creates new {@link Masked} depending on mask type */ function createMask(opts) {
    if ((0, _holderJsDefault.default).Masked && opts instanceof (0, _holderJsDefault.default).Masked) return opts;
    const nOpts = normalizeOpts(opts);
    const MaskedClass = maskedClass(nOpts.mask);
    if (!MaskedClass) throw new Error("Masked class is not found for provided mask " + nOpts.mask + ", appropriate module needs to be imported manually before creating mask.");
    if (nOpts.mask === MaskedClass) delete nOpts.mask;
    if (nOpts._mask) {
        nOpts.mask = nOpts._mask;
        delete nOpts._mask;
    }
    return new MaskedClass(nOpts);
}
(0, _holderJsDefault.default).createMask = createMask;

},{"../core/utils.js":"hh2Rx","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNs7n":[function(require,module,exports) {
/** Applies mask on element */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>IMask);
function IMask(el, opts) {
    // currently available only for input-like elements
    return new IMask.InputMask(el, opts);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dhyp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskElement);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/**  Generic element API to use with mask */ class MaskElement {
    /** */ /** */ /** */ /** Safely returns selection start */ get selectionStart() {
        let start;
        try {
            start = this._unsafeSelectionStart;
        } catch  {}
        return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */ get selectionEnd() {
        let end;
        try {
            end = this._unsafeSelectionEnd;
        } catch  {}
        return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */ select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
        try {
            this._unsafeSelect(start, end);
        } catch  {}
    }
    /** */ get isActive() {
        return false;
    }
}
(0, _holderJsDefault.default).MaskElement = MaskElement;

},{"../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2feR7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLInputMaskElement);
var _htmlMaskElementJs = require("./html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _maskElementJs = require("./mask-element.js");
/** Bridge between InputElement and {@link Masked} */ class HTMLInputMaskElement extends (0, _htmlMaskElementJsDefault.default) {
    /** InputElement to use mask on */ constructor(input){
        super(input);
        this.input = input;
    }
    /** Returns InputElement selection start */ get _unsafeSelectionStart() {
        return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
    }
    /** Returns InputElement selection end */ get _unsafeSelectionEnd() {
        return this.input.selectionEnd;
    }
    /** Sets InputElement selection */ _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
}
(0, _holderJsDefault.default).HTMLMaskElement = (0, _htmlMaskElementJsDefault.default);

},{"./html-mask-element.js":"exheL","../core/holder.js":"fNs7n","./mask-element.js":"6dhyp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exheL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLMaskElement);
var _maskElementJs = require("./mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
const KEY_Z = 90;
const KEY_Y = 89;
/** Bridge between HTMLElement and {@link Masked} */ class HTMLMaskElement extends (0, _maskElementJsDefault.default) {
    /** HTMLElement to use mask on */ constructor(input){
        super();
        this.input = input;
        this._onKeydown = this._onKeydown.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onBeforeinput = this._onBeforeinput.bind(this);
        this._onCompositionEnd = this._onCompositionEnd.bind(this);
    }
    get rootElement() {
        var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
        return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
    }
    /** Is element in focus */ get isActive() {
        return this.input === this.rootElement.activeElement;
    }
    /** Binds HTMLElement events to mask internal events */ bindEvents(handlers) {
        this.input.addEventListener("keydown", this._onKeydown);
        this.input.addEventListener("input", this._onInput);
        this.input.addEventListener("beforeinput", this._onBeforeinput);
        this.input.addEventListener("compositionend", this._onCompositionEnd);
        this.input.addEventListener("drop", handlers.drop);
        this.input.addEventListener("click", handlers.click);
        this.input.addEventListener("focus", handlers.focus);
        this.input.addEventListener("blur", handlers.commit);
        this._handlers = handlers;
    }
    _onKeydown(e) {
        if (this._handlers.redo && (e.keyCode === KEY_Z && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === KEY_Y && e.ctrlKey)) {
            e.preventDefault();
            return this._handlers.redo(e);
        }
        if (this._handlers.undo && e.keyCode === KEY_Z && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            return this._handlers.undo(e);
        }
        if (!e.isComposing) this._handlers.selectionChange(e);
    }
    _onBeforeinput(e) {
        if (e.inputType === "historyUndo" && this._handlers.undo) {
            e.preventDefault();
            return this._handlers.undo(e);
        }
        if (e.inputType === "historyRedo" && this._handlers.redo) {
            e.preventDefault();
            return this._handlers.redo(e);
        }
    }
    _onCompositionEnd(e) {
        this._handlers.input(e);
    }
    _onInput(e) {
        if (!e.isComposing) this._handlers.input(e);
    }
    /** Unbinds HTMLElement events to mask internal events */ unbindEvents() {
        this.input.removeEventListener("keydown", this._onKeydown);
        this.input.removeEventListener("input", this._onInput);
        this.input.removeEventListener("beforeinput", this._onBeforeinput);
        this.input.removeEventListener("compositionend", this._onCompositionEnd);
        this.input.removeEventListener("drop", this._handlers.drop);
        this.input.removeEventListener("click", this._handlers.click);
        this.input.removeEventListener("focus", this._handlers.focus);
        this.input.removeEventListener("blur", this._handlers.commit);
        this._handlers = {};
    }
}
(0, _holderJsDefault.default).HTMLMaskElement = HTMLMaskElement;

},{"./mask-element.js":"6dhyp","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1S15":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLContenteditableMaskElement);
var _htmlMaskElementJs = require("./html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _maskElementJs = require("./mask-element.js");
class HTMLContenteditableMaskElement extends (0, _htmlMaskElementJsDefault.default) {
    /** Returns HTMLElement selection start */ get _unsafeSelectionStart() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) return anchorOffset;
        return focusOffset;
    }
    /** Returns HTMLElement selection end */ get _unsafeSelectionEnd() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) return anchorOffset;
        return focusOffset;
    }
    /** Sets HTMLElement selection */ _unsafeSelect(start, end) {
        if (!this.rootElement.createRange) return;
        const range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    /** HTMLElement value */ get value() {
        return this.input.textContent || "";
    }
    set value(value) {
        this.input.textContent = value;
    }
}
(0, _holderJsDefault.default).HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

},{"./html-mask-element.js":"exheL","../core/holder.js":"fNs7n","./mask-element.js":"6dhyp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZNGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>InputHistory);
class InputHistory {
    constructor(){
        this.states = [];
        this.currentIndex = 0;
    }
    get currentState() {
        return this.states[this.currentIndex];
    }
    get isEmpty() {
        return this.states.length === 0;
    }
    push(state) {
        // if current index points before the last element then remove the future
        if (this.currentIndex < this.states.length - 1) this.states.length = this.currentIndex + 1;
        this.states.push(state);
        if (this.states.length > InputHistory.MAX_LENGTH) this.states.shift();
        this.currentIndex = this.states.length - 1;
    }
    go(steps) {
        this.currentIndex = Math.min(Math.max(this.currentIndex + steps, 0), this.states.length - 1);
        return this.currentState;
    }
    undo() {
        return this.go(-1);
    }
    redo() {
        return this.go(1);
    }
    clear() {
        this.states.length = 0;
        this.currentIndex = 0;
    }
}
InputHistory.MAX_LENGTH = 100;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDdFe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChangeDetails);
var _holderJs = require("./holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Provides details of changing model value */ class ChangeDetails {
    /** Inserted symbols */ /** Additional offset if any changes occurred before tail */ /** Raw inserted is used by dynamic mask */ /** Can skip chars */ static normalize(prep) {
        return Array.isArray(prep) ? prep : [
            prep,
            new ChangeDetails()
        ];
    }
    constructor(details){
        Object.assign(this, {
            inserted: "",
            rawInserted: "",
            tailShift: 0,
            skip: false
        }, details);
    }
    /** Aggregate changes */ aggregate(details) {
        this.inserted += details.inserted;
        this.rawInserted += details.rawInserted;
        this.tailShift += details.tailShift;
        this.skip = this.skip || details.skip;
        return this;
    }
    /** Total offset considering all changes */ get offset() {
        return this.tailShift + this.inserted.length;
    }
    get consumed() {
        return Boolean(this.rawInserted) || this.skip;
    }
    equals(details) {
        return this.inserted === details.inserted && this.tailShift === details.tailShift && this.rawInserted === details.rawInserted && this.skip === details.skip;
    }
}
(0, _holderJsDefault.default).ChangeDetails = ChangeDetails;

},{"./holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9dza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Masked);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Append flags */ /** Extract flags */ // see https://github.com/microsoft/TypeScript/issues/6223
/** Provides common masking stuff */ class Masked {
    /** */ /** */ /** Transforms value before mask processing */ /** Transforms each char before mask processing */ /** Validates if value is acceptable */ /** Does additional processing at the end of editing */ /** Format typed value to string */ /** Parse string to get typed value */ /** Enable characters overwriting */ /** */ /** */ /** */ /** */ constructor(opts){
        this._value = "";
        this._update({
            ...Masked.DEFAULTS,
            ...opts
        });
        this._initialized = true;
    }
    /** Sets and applies new options */ updateOptions(opts) {
        if (!this.optionsIsChanged(opts)) return;
        this.withValueRefresh(this._update.bind(this, opts));
    }
    /** Sets new options */ _update(opts) {
        Object.assign(this, opts);
    }
    /** Mask state */ get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue
        };
    }
    set state(state) {
        this._value = state._value;
    }
    /** Resets value */ reset() {
        this._value = "";
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this.resolve(value, {
            input: true
        });
    }
    /** Resolve new value */ resolve(value, flags) {
        if (flags === void 0) flags = {
            input: true
        };
        this.reset();
        this.append(value, flags, "");
        this.doCommit();
    }
    get unmaskedValue() {
        return this.value;
    }
    set unmaskedValue(value) {
        this.resolve(value, {});
    }
    get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
    }
    set typedValue(value) {
        if (this.format) this.value = this.format(value, this);
        else this.unmaskedValue = String(value);
    }
    /** Value that includes raw user input */ get rawInputValue() {
        return this.extractInput(0, this.displayValue.length, {
            raw: true
        });
    }
    set rawInputValue(value) {
        this.resolve(value, {
            raw: true
        });
    }
    get displayValue() {
        return this.value;
    }
    get isComplete() {
        return true;
    }
    get isFilled() {
        return this.isComplete;
    }
    /** Finds nearest input position in direction */ nearestInputPos(cursorPos, direction) {
        return cursorPos;
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        return Math.min(this.displayValue.length, toPos - fromPos);
    }
    /** Extracts value in range considering flags */ extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        return this.displayValue.slice(fromPos, toPos);
    }
    /** Extracts tail in range */ extractTail(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        return new (0, _continuousTailDetailsJsDefault.default)(this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */ appendTail(tail) {
        if ((0, _utilsJs.isString)(tail)) tail = new (0, _continuousTailDetailsJsDefault.default)(String(tail));
        return tail.appendTo(this);
    }
    /** Appends char */ _appendCharRaw(ch, flags) {
        if (!ch) return new (0, _changeDetailsJsDefault.default)();
        this._value += ch;
        return new (0, _changeDetailsJsDefault.default)({
            inserted: ch,
            rawInserted: ch
        });
    }
    /** Appends char */ _appendChar(ch, flags, checkTail) {
        if (flags === void 0) flags = {};
        const consistentState = this.state;
        let details;
        [ch, details] = this.doPrepareChar(ch, flags);
        if (ch) {
            details = details.aggregate(this._appendCharRaw(ch, flags));
            // TODO handle `skip`?
            // try `autofix` lookahead
            if (!details.rawInserted && this.autofix === "pad") {
                const noFixState = this.state;
                this.state = consistentState;
                let fixDetails = this.pad(flags);
                const chDetails = this._appendCharRaw(ch, flags);
                fixDetails = fixDetails.aggregate(chDetails);
                // if fix was applied or
                // if details are equal use skip restoring state optimization
                if (chDetails.rawInserted || fixDetails.equals(details)) details = fixDetails;
                else this.state = noFixState;
            }
        }
        if (details.inserted) {
            let consistentTail;
            let appended = this.doValidate(flags) !== false;
            if (appended && checkTail != null) {
                // validation ok, check tail
                const beforeTailState = this.state;
                if (this.overwrite === true) {
                    consistentTail = checkTail.state;
                    for(let i = 0; i < details.rawInserted.length; ++i)checkTail.unshift(this.displayValue.length - details.tailShift);
                }
                let tailDetails = this.appendTail(checkTail);
                appended = tailDetails.rawInserted.length === checkTail.toString().length;
                // not ok, try shift
                if (!(appended && tailDetails.inserted) && this.overwrite === "shift") {
                    this.state = beforeTailState;
                    consistentTail = checkTail.state;
                    for(let i = 0; i < details.rawInserted.length; ++i)checkTail.shift();
                    tailDetails = this.appendTail(checkTail);
                    appended = tailDetails.rawInserted.length === checkTail.toString().length;
                }
                // if ok, rollback state after tail
                if (appended && tailDetails.inserted) this.state = beforeTailState;
            }
            // revert all if something went wrong
            if (!appended) {
                details = new (0, _changeDetailsJsDefault.default)();
                this.state = consistentState;
                if (checkTail && consistentTail) checkTail.state = consistentTail;
            }
        }
        return details;
    }
    /** Appends optional placeholder at the end */ _appendPlaceholder() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Appends optional eager placeholder at the end */ _appendEager() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Appends symbols considering flags */ append(str, flags, tail) {
        if (!(0, _utilsJs.isString)(str)) throw new Error("value should be string");
        const checkTail = (0, _utilsJs.isString)(tail) ? new (0, _continuousTailDetailsJsDefault.default)(String(tail)) : tail;
        if (flags != null && flags.tail) flags._beforeTailState = this.state;
        let details;
        [str, details] = this.doPrepare(str, flags);
        for(let ci = 0; ci < str.length; ++ci){
            const d = this._appendChar(str[ci], flags, checkTail);
            if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
            details.aggregate(d);
        }
        if ((this.eager === true || this.eager === "append") && flags != null && flags.input && str) details.aggregate(this._appendEager());
        // append tail but aggregate only tailShift
        if (checkTail != null) details.tailShift += this.appendTail(checkTail).tailShift;
        return details;
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Calls function and reapplies current value */ withValueRefresh(fn) {
        if (this._refreshing || !this._initialized) return fn();
        this._refreshing = true;
        const rawInput = this.rawInputValue;
        const value = this.value;
        const ret = fn();
        this.rawInputValue = rawInput;
        // append lost trailing chars at the end
        if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
            this.append(value.slice(this.displayValue.length), {}, "");
            this.doCommit();
        }
        delete this._refreshing;
        return ret;
    }
    runIsolated(fn) {
        if (this._isolated || !this._initialized) return fn(this);
        this._isolated = true;
        const state = this.state;
        const ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
    }
    doSkipInvalid(ch, flags, checkTail) {
        return Boolean(this.skipInvalid);
    }
    /** Prepares string before mask processing */ doPrepare(str, flags) {
        if (flags === void 0) flags = {};
        return (0, _changeDetailsJsDefault.default).normalize(this.prepare ? this.prepare(str, this, flags) : str);
    }
    /** Prepares each char before mask processing */ doPrepareChar(str, flags) {
        if (flags === void 0) flags = {};
        return (0, _changeDetailsJsDefault.default).normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
    }
    /** Validates if value is acceptable */ doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /** Does additional processing at the end of editing */ doCommit() {
        if (this.commit) this.commit(this.value, this);
    }
    splice(start, deleteCount, inserted, removeDirection, flags) {
        if (inserted === void 0) inserted = "";
        if (removeDirection === void 0) removeDirection = (0, _utilsJs.DIRECTION).NONE;
        if (flags === void 0) flags = {
            input: true
        };
        const tailPos = start + deleteCount;
        const tail = this.extractTail(tailPos);
        const eagerRemove = this.eager === true || this.eager === "remove";
        let oldRawValue;
        if (eagerRemove) {
            removeDirection = (0, _utilsJs.forceDirection)(removeDirection);
            oldRawValue = this.extractInput(0, tailPos, {
                raw: true
            });
        }
        let startChangePos = start;
        const details = new (0, _changeDetailsJsDefault.default)();
        // if it is just deletion without insertion
        if (removeDirection !== (0, _utilsJs.DIRECTION).NONE) {
            startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? (0, _utilsJs.DIRECTION).NONE : removeDirection);
            // adjust tailShift if start was aligned
            details.tailShift = startChangePos - start;
        }
        details.aggregate(this.remove(startChangePos));
        if (eagerRemove && removeDirection !== (0, _utilsJs.DIRECTION).NONE && oldRawValue === this.rawInputValue) {
            if (removeDirection === (0, _utilsJs.DIRECTION).FORCE_LEFT) {
                let valLength;
                while(oldRawValue === this.rawInputValue && (valLength = this.displayValue.length))details.aggregate(new (0, _changeDetailsJsDefault.default)({
                    tailShift: -1
                })).aggregate(this.remove(valLength - 1));
            } else if (removeDirection === (0, _utilsJs.DIRECTION).FORCE_RIGHT) tail.unshift();
        }
        return details.aggregate(this.append(inserted, flags, tail));
    }
    maskEquals(mask) {
        return this.mask === mask;
    }
    optionsIsChanged(opts) {
        return !(0, _utilsJs.objectIncludes)(this, opts);
    }
    typedValueEquals(value) {
        const tval = this.typedValue;
        return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
    }
    pad(flags) {
        return new (0, _changeDetailsJsDefault.default)();
    }
}
Masked.DEFAULTS = {
    skipInvalid: true
};
Masked.EMPTY_VALUES = [
    undefined,
    null,
    ""
];
(0, _holderJsDefault.default).Masked = Masked;

},{"../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5MbDY":[function(require,module,exports) {
/** Provides details of continuous extracted tail */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ContinuousTailDetails);
class ContinuousTailDetails {
    /** Tail value as string */ /** Tail start position */ /** Start position */ constructor(value, from, stop){
        if (value === void 0) value = "";
        if (from === void 0) from = 0;
        this.value = value;
        this.from = from;
        this.stop = stop;
    }
    toString() {
        return this.value;
    }
    extend(tail) {
        this.value += String(tail);
    }
    appendTo(masked) {
        return masked.append(this.toString(), {
            tail: true
        }).aggregate(masked._appendPlaceholder());
    }
    get state() {
        return {
            value: this.value,
            from: this.from,
            stop: this.stop
        };
    }
    set state(state) {
        Object.assign(this, state);
    }
    unshift(beforePos) {
        if (!this.value.length || beforePos != null && this.from >= beforePos) return "";
        const shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
    }
    shift() {
        if (!this.value.length) return "";
        const shiftChar = this.value[this.value.length - 1];
        this.value = this.value.slice(0, -1);
        return shiftChar;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1V3CB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedDate);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _factoryJs = require("./factory.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
const DefaultPattern = "d{.}`m{.}`Y";
// Make format and parse required when pattern is provided
/** Date mask */ class MaskedDate extends (0, _patternJsDefault.default) {
    static extractPatternOptions(opts) {
        const { mask, pattern, ...patternOpts } = opts;
        return {
            ...patternOpts,
            mask: (0, _utilsJs.isString)(mask) ? mask : pattern
        };
    }
    /** Pattern mask for date according to {@link MaskedDate#format} */ /** Start date */ /** End date */ /** Format typed value to string */ /** Parse string to get typed value */ constructor(opts){
        super(MaskedDate.extractPatternOptions({
            ...MaskedDate.DEFAULTS,
            ...opts
        }));
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const { mask, pattern, blocks, ...patternOpts } = {
            ...MaskedDate.DEFAULTS,
            ...opts
        };
        const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
        // adjust year block
        if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
        if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
        if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
            patternBlocks.m.from = opts.min.getMonth() + 1;
            patternBlocks.m.to = opts.max.getMonth() + 1;
            if (patternBlocks.m.from === patternBlocks.m.to) {
                patternBlocks.d.from = opts.min.getDate();
                patternBlocks.d.to = opts.max.getDate();
            }
        }
        Object.assign(patternBlocks, this.blocks, blocks);
        super._update({
            ...patternOpts,
            mask: (0, _utilsJs.isString)(mask) ? mask : pattern,
            blocks: patternBlocks
        });
    }
    doValidate(flags) {
        const date = this.date;
        return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */ isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */ get date() {
        return this.typedValue;
    }
    set date(date) {
        this.typedValue = date;
    }
    get typedValue() {
        return this.isComplete ? super.typedValue : null;
    }
    set typedValue(value) {
        super.typedValue = value;
    }
    maskEquals(mask) {
        return mask === Date || super.maskEquals(mask);
    }
    optionsIsChanged(opts) {
        return super.optionsIsChanged(MaskedDate.extractPatternOptions(opts));
    }
}
MaskedDate.GET_DEFAULT_BLOCKS = ()=>({
        d: {
            mask: (0, _rangeJsDefault.default),
            from: 1,
            to: 31,
            maxLength: 2
        },
        m: {
            mask: (0, _rangeJsDefault.default),
            from: 1,
            to: 12,
            maxLength: 2
        },
        Y: {
            mask: (0, _rangeJsDefault.default),
            from: 1900,
            to: 9999
        }
    });
MaskedDate.DEFAULTS = {
    ...(0, _patternJsDefault.default).DEFAULTS,
    mask: Date,
    pattern: DefaultPattern,
    format: (date, masked)=>{
        if (!date) return "";
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return [
            day,
            month,
            year
        ].join(".");
    },
    parse: (str, masked)=>{
        const [day, month, year] = str.split(".").map(Number);
        return new Date(year, month - 1, day);
    }
};
(0, _holderJsDefault.default).MaskedDate = MaskedDate;

},{"./pattern.js":"edg1G","./range.js":"iHvQL","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edg1G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedPattern);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _chunkTailDetailsJsDefault = parcelHelpers.interopDefault(_chunkTailDetailsJs);
var _cursorJs = require("./pattern/cursor.js");
var _cursorJsDefault = parcelHelpers.interopDefault(_cursorJs);
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _fixedDefinitionJsDefault = parcelHelpers.interopDefault(_fixedDefinitionJs);
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _inputDefinitionJsDefault = parcelHelpers.interopDefault(_inputDefinitionJs);
var _regexpJs = require("./regexp.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
/** Pattern mask */ class MaskedPattern extends (0, _baseJsDefault.default) {
    /** */ /** */ /** Single char for empty input */ /** Single char for filled input */ /** Show placeholder only when needed */ /** Enable characters overwriting */ /** */ /** */ /** */ constructor(opts){
        super({
            ...MaskedPattern.DEFAULTS,
            ...opts,
            definitions: Object.assign({}, (0, _inputDefinitionJsDefault.default).DEFAULT_DEFINITIONS, opts == null ? void 0 : opts.definitions)
        });
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);
        super._update(opts);
        this._rebuildMask();
    }
    _rebuildMask() {
        const defs = this.definitions;
        this._blocks = [];
        this.exposeBlock = undefined;
        this._stops = [];
        this._maskedBlocks = {};
        const pattern = this.mask;
        if (!pattern || !defs) return;
        let unmaskingBlock = false;
        let optionalBlock = false;
        for(let i = 0; i < pattern.length; ++i){
            if (this.blocks) {
                const p = pattern.slice(i);
                const bNames = Object.keys(this.blocks).filter((bName)=>p.indexOf(bName) === 0);
                // order by key length
                bNames.sort((a, b)=>b.length - a.length);
                // use block name with max length
                const bName = bNames[0];
                if (bName) {
                    const { expose, repeat, ...bOpts } = (0, _factoryJs.normalizeOpts)(this.blocks[bName]); // TODO type Opts<Arg & Extra>
                    const blockOpts = {
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        displayChar: this.displayChar,
                        overwrite: this.overwrite,
                        autofix: this.autofix,
                        ...bOpts,
                        repeat,
                        parent: this
                    };
                    const maskedBlock = repeat != null ? new (0, _holderJsDefault.default).RepeatBlock(blockOpts /* TODO */ ) : (0, _factoryJsDefault.default)(blockOpts);
                    if (maskedBlock) {
                        this._blocks.push(maskedBlock);
                        if (expose) this.exposeBlock = maskedBlock;
                        // store block index
                        if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
                        this._maskedBlocks[bName].push(this._blocks.length - 1);
                    }
                    i += bName.length - 1;
                    continue;
                }
            }
            let char = pattern[i];
            let isInput = char in defs;
            if (char === MaskedPattern.STOP_CHAR) {
                this._stops.push(this._blocks.length);
                continue;
            }
            if (char === "{" || char === "}") {
                unmaskingBlock = !unmaskingBlock;
                continue;
            }
            if (char === "[" || char === "]") {
                optionalBlock = !optionalBlock;
                continue;
            }
            if (char === MaskedPattern.ESCAPE_CHAR) {
                ++i;
                char = pattern[i];
                if (!char) break;
                isInput = false;
            }
            const def = isInput ? new (0, _inputDefinitionJsDefault.default)({
                isOptional: optionalBlock,
                lazy: this.lazy,
                eager: this.eager,
                placeholderChar: this.placeholderChar,
                displayChar: this.displayChar,
                ...(0, _factoryJs.normalizeOpts)(defs[char]),
                parent: this
            }) : new (0, _fixedDefinitionJsDefault.default)({
                char,
                eager: this.eager,
                isUnmasking: unmaskingBlock
            });
            this._blocks.push(def);
        }
    }
    get state() {
        return {
            ...super.state,
            _blocks: this._blocks.map((b)=>b.state)
        };
    }
    set state(state) {
        if (!state) {
            this.reset();
            return;
        }
        const { _blocks, ...maskedState } = state;
        this._blocks.forEach((b, bi)=>b.state = _blocks[bi]);
        super.state = maskedState;
    }
    reset() {
        super.reset();
        this._blocks.forEach((b)=>b.reset());
    }
    get isComplete() {
        return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((b)=>b.isComplete);
    }
    get isFilled() {
        return this._blocks.every((b)=>b.isFilled);
    }
    get isFixed() {
        return this._blocks.every((b)=>b.isFixed);
    }
    get isOptional() {
        return this._blocks.every((b)=>b.isOptional);
    }
    doCommit() {
        this._blocks.forEach((b)=>b.doCommit());
        super.doCommit();
    }
    get unmaskedValue() {
        return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b)=>str += b.unmaskedValue, "");
    }
    set unmaskedValue(unmaskedValue) {
        if (this.exposeBlock) {
            const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.unmaskedValue = unmaskedValue;
            this.appendTail(tail);
            this.doCommit();
        } else super.unmaskedValue = unmaskedValue;
    }
    get value() {
        return this.exposeBlock ? this.exposeBlock.value : // TODO return _value when not in change?
        this._blocks.reduce((str, b)=>str += b.value, "");
    }
    set value(value) {
        if (this.exposeBlock) {
            const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.value = value;
            this.appendTail(tail);
            this.doCommit();
        } else super.value = value;
    }
    get typedValue() {
        return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
    }
    set typedValue(value) {
        if (this.exposeBlock) {
            const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.typedValue = value;
            this.appendTail(tail);
            this.doCommit();
        } else super.typedValue = value;
    }
    get displayValue() {
        return this._blocks.reduce((str, b)=>str += b.displayValue, "");
    }
    appendTail(tail) {
        return super.appendTail(tail).aggregate(this._appendPlaceholder());
    }
    _appendEager() {
        var _this$_mapPosToBlock;
        const details = new (0, _changeDetailsJsDefault.default)();
        let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index;
        if (startBlockIndex == null) return details;
        // TODO test if it works for nested pattern masks
        if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
        for(let bi = startBlockIndex; bi < this._blocks.length; ++bi){
            const d = this._blocks[bi]._appendEager();
            if (!d.inserted) break;
            details.aggregate(d);
        }
        return details;
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const blockIter = this._mapPosToBlock(this.displayValue.length);
        const details = new (0, _changeDetailsJsDefault.default)();
        if (!blockIter) return details;
        for(let bi = blockIter.index, block; block = this._blocks[bi]; ++bi){
            var _flags$_beforeTailSta;
            const blockDetails = block._appendChar(ch, {
                ...flags,
                _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
            });
            details.aggregate(blockDetails);
            if (blockDetails.consumed) break; // go next char
        }
        return details;
    }
    extractTail(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        const chunkTail = new (0, _chunkTailDetailsJsDefault.default)();
        if (fromPos === toPos) return chunkTail;
        this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos)=>{
            const blockChunk = b.extractTail(bFromPos, bToPos);
            blockChunk.stop = this._findStopBefore(bi);
            blockChunk.from = this._blockStartPos(bi);
            if (blockChunk instanceof (0, _chunkTailDetailsJsDefault.default)) blockChunk.blockIndex = bi;
            chunkTail.extend(blockChunk);
        });
        return chunkTail;
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        if (flags === void 0) flags = {};
        if (fromPos === toPos) return "";
        let input = "";
        this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos)=>{
            input += b.extractInput(fromPos, toPos, flags);
        });
        return input;
    }
    _findStopBefore(blockIndex) {
        let stopBefore;
        for(let si = 0; si < this._stops.length; ++si){
            const stop = this._stops[si];
            if (stop <= blockIndex) stopBefore = stop;
            else break;
        }
        return stopBefore;
    }
    /** Appends placeholder depending on laziness */ _appendPlaceholder(toBlockIndex) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.lazy && toBlockIndex == null) return details;
        const startBlockIter = this._mapPosToBlock(this.displayValue.length);
        if (!startBlockIter) return details;
        const startBlockIndex = startBlockIter.index;
        const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
        this._blocks.slice(startBlockIndex, endBlockIndex).forEach((b)=>{
            if (!b.lazy || toBlockIndex != null) {
                var _blocks2;
                details.aggregate(b._appendPlaceholder((_blocks2 = b._blocks) == null ? void 0 : _blocks2.length));
            }
        });
        return details;
    }
    /** Finds block in pos */ _mapPosToBlock(pos) {
        let accVal = "";
        for(let bi = 0; bi < this._blocks.length; ++bi){
            const block = this._blocks[bi];
            const blockStartPos = accVal.length;
            accVal += block.displayValue;
            if (pos <= accVal.length) return {
                index: bi,
                offset: pos - blockStartPos
            };
        }
    }
    _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce((pos, b)=>pos += b.displayValue.length, 0);
    }
    _forEachBlocksInRange(fromPos, toPos, fn) {
        if (toPos === void 0) toPos = this.displayValue.length;
        const fromBlockIter = this._mapPosToBlock(fromPos);
        if (fromBlockIter) {
            const toBlockIter = this._mapPosToBlock(toPos);
            // process first block
            const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
            const fromBlockStartPos = fromBlockIter.offset;
            const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
            fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
            if (toBlockIter && !isSameBlock) {
                // process intermediate blocks
                for(let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi)fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
                // process last block
                fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
            }
        }
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        const removeDetails = super.remove(fromPos, toPos);
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos)=>{
            removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });
        return removeDetails;
    }
    nearestInputPos(cursorPos, direction) {
        if (direction === void 0) direction = (0, _utilsJs.DIRECTION).NONE;
        if (!this._blocks.length) return 0;
        const cursor = new (0, _cursorJsDefault.default)(this, cursorPos);
        if (direction === (0, _utilsJs.DIRECTION).NONE) {
            // -------------------------------------------------
            // NONE should only go out from fixed to the right!
            // -------------------------------------------------
            if (cursor.pushRightBeforeInput()) return cursor.pos;
            cursor.popState();
            if (cursor.pushLeftBeforeInput()) return cursor.pos;
            return this.displayValue.length;
        }
        // FORCE is only about a|* otherwise is 0
        if (direction === (0, _utilsJs.DIRECTION).LEFT || direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) {
            // try to break fast when *|a
            if (direction === (0, _utilsJs.DIRECTION).LEFT) {
                cursor.pushRightBeforeFilled();
                if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
                cursor.popState();
            }
            // forward flow
            cursor.pushLeftBeforeInput();
            cursor.pushLeftBeforeRequired();
            cursor.pushLeftBeforeFilled();
            // backward flow
            if (direction === (0, _utilsJs.DIRECTION).LEFT) {
                cursor.pushRightBeforeInput();
                cursor.pushRightBeforeRequired();
                if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                cursor.popState();
                if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                cursor.popState();
            }
            if (cursor.ok) return cursor.pos;
            if (direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) return 0;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            return 0;
        }
        if (direction === (0, _utilsJs.DIRECTION).RIGHT || direction === (0, _utilsJs.DIRECTION).FORCE_RIGHT) {
            // forward flow
            cursor.pushRightBeforeInput();
            cursor.pushRightBeforeRequired();
            if (cursor.pushRightBeforeFilled()) return cursor.pos;
            if (direction === (0, _utilsJs.DIRECTION).FORCE_RIGHT) return this.displayValue.length;
            // backward flow
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            return this.nearestInputPos(cursorPos, (0, _utilsJs.DIRECTION).LEFT);
        }
        return cursorPos;
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        let total = 0;
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos)=>{
            total += b.totalInputPositions(bFromPos, bToPos);
        });
        return total;
    }
    /** Get block by name */ maskedBlock(name) {
        return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */ maskedBlocks(name) {
        const indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map((gi)=>this._blocks[gi]);
    }
    pad(flags) {
        const details = new (0, _changeDetailsJsDefault.default)();
        this._forEachBlocksInRange(0, this.displayValue.length, (b)=>details.aggregate(b.pad(flags)));
        return details;
    }
}
MaskedPattern.DEFAULTS = {
    ...(0, _baseJsDefault.default).DEFAULTS,
    lazy: true,
    placeholderChar: "_"
};
MaskedPattern.STOP_CHAR = "`";
MaskedPattern.ESCAPE_CHAR = "\\";
MaskedPattern.InputDefinition = (0, _inputDefinitionJsDefault.default);
MaskedPattern.FixedDefinition = (0, _fixedDefinitionJsDefault.default);
(0, _holderJsDefault.default).MaskedPattern = MaskedPattern;

},{"../core/change-details.js":"cDdFe","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","./base.js":"i9dza","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8Q24":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChunksTailDetails);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _continuousTailDetailsJs = require("../../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _holderJs = require("../../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
class ChunksTailDetails {
    /** */ constructor(chunks, from){
        if (chunks === void 0) chunks = [];
        if (from === void 0) from = 0;
        this.chunks = chunks;
        this.from = from;
    }
    toString() {
        return this.chunks.map(String).join("");
    }
    extend(tailChunk) {
        if (!String(tailChunk)) return;
        tailChunk = (0, _utilsJs.isString)(tailChunk) ? new (0, _continuousTailDetailsJsDefault.default)(String(tailChunk)) : tailChunk;
        const lastChunk = this.chunks[this.chunks.length - 1];
        const extendLast = lastChunk && // if stops are same or tail has no stop
        (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;
        if (tailChunk instanceof (0, _continuousTailDetailsJsDefault.default)) {
            // check the ability to extend previous chunk
            if (extendLast) // extend previous chunk
            lastChunk.extend(tailChunk.toString());
            else // append new chunk
            this.chunks.push(tailChunk);
        } else if (tailChunk instanceof ChunksTailDetails) {
            if (tailChunk.stop == null) {
                // unwrap floating chunks to parent, keeping `from` pos
                let firstTailChunk;
                while(tailChunk.chunks.length && tailChunk.chunks[0].stop == null){
                    firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
                    firstTailChunk.from += tailChunk.from;
                    this.extend(firstTailChunk);
                }
            }
            // if tail chunk still has value
            if (tailChunk.toString()) {
                // if chunks contains stops, then popup stop to container
                tailChunk.stop = tailChunk.blockIndex;
                this.chunks.push(tailChunk);
            }
        }
    }
    appendTo(masked) {
        if (!(masked instanceof (0, _holderJsDefault.default).MaskedPattern)) {
            const tail = new (0, _continuousTailDetailsJsDefault.default)(this.toString());
            return tail.appendTo(masked);
        }
        const details = new (0, _changeDetailsJsDefault.default)();
        for(let ci = 0; ci < this.chunks.length; ++ci){
            const chunk = this.chunks[ci];
            const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
            const stop = chunk.stop;
            let chunkBlock;
            if (stop != null && // if block not found or stop is behind lastBlock
            (!lastBlockIter || lastBlockIter.index <= stop)) {
                if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
                masked._stops.indexOf(stop) >= 0) details.aggregate(masked._appendPlaceholder(stop));
                chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
            }
            if (chunkBlock) {
                const tailDetails = chunkBlock.appendTail(chunk);
                details.aggregate(tailDetails);
                // get not inserted chars
                const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                if (remainChars) details.aggregate(masked.append(remainChars, {
                    tail: true
                }));
            } else details.aggregate(masked.append(chunk.toString(), {
                tail: true
            }));
        }
        return details;
    }
    get state() {
        return {
            chunks: this.chunks.map((c)=>c.state),
            from: this.from,
            stop: this.stop,
            blockIndex: this.blockIndex
        };
    }
    set state(state) {
        const { chunks, ...props } = state;
        Object.assign(this, props);
        this.chunks = chunks.map((cstate)=>{
            const chunk = "chunks" in cstate ? new ChunksTailDetails() : new (0, _continuousTailDetailsJsDefault.default)();
            chunk.state = cstate;
            return chunk;
        });
    }
    unshift(beforePos) {
        if (!this.chunks.length || beforePos != null && this.from >= beforePos) return "";
        const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
        let ci = 0;
        while(ci < this.chunks.length){
            const chunk = this.chunks[ci];
            const shiftChar = chunk.unshift(chunkShiftPos);
            if (chunk.toString()) {
                // chunk still contains value
                // but not shifted - means no more available chars to shift
                if (!shiftChar) break;
                ++ci;
            } else // clean if chunk has no value
            this.chunks.splice(ci, 1);
            if (shiftChar) return shiftChar;
        }
        return "";
    }
    shift() {
        if (!this.chunks.length) return "";
        let ci = this.chunks.length - 1;
        while(0 <= ci){
            const chunk = this.chunks[ci];
            const shiftChar = chunk.shift();
            if (chunk.toString()) {
                // chunk still contains value
                // but not shifted - means no more available chars to shift
                if (!shiftChar) break;
                --ci;
            } else // clean if chunk has no value
            this.chunks.splice(ci, 1);
            if (shiftChar) return shiftChar;
        }
        return "";
    }
}

},{"../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/continuous-tail-details.js":"5MbDY","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1K9Ff":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternCursor);
var _utilsJs = require("../../core/utils.js");
class PatternCursor {
    constructor(masked, pos){
        this.masked = masked;
        this._log = [];
        const { offset, index } = masked._mapPosToBlock(pos) || (pos < 0 ? // first
        {
            index: 0,
            offset: 0
        } : // last
        {
            index: this.masked._blocks.length,
            offset: 0
        });
        this.offset = offset;
        this.index = index;
        this.ok = false;
    }
    get block() {
        return this.masked._blocks[this.index];
    }
    get pos() {
        return this.masked._blockStartPos(this.index) + this.offset;
    }
    get state() {
        return {
            index: this.index,
            offset: this.offset,
            ok: this.ok
        };
    }
    set state(s) {
        Object.assign(this, s);
    }
    pushState() {
        this._log.push(this.state);
    }
    popState() {
        const s = this._log.pop();
        if (s) this.state = s;
        return s;
    }
    bindBlock() {
        if (this.block) return;
        if (this.index < 0) {
            this.index = 0;
            this.offset = 0;
        }
        if (this.index >= this.masked._blocks.length) {
            this.index = this.masked._blocks.length - 1;
            this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
        }
    }
    _pushLeft(fn) {
        this.pushState();
        for(this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) == null ? void 0 : _this$block.displayValue.length) || 0){
            var _this$block;
            if (fn()) return this.ok = true;
        }
        return this.ok = false;
    }
    _pushRight(fn) {
        this.pushState();
        for(this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0){
            if (fn()) return this.ok = true;
        }
        return this.ok = false;
    }
    pushLeftBeforeFilled() {
        return this._pushLeft(()=>{
            if (this.block.isFixed || !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).FORCE_LEFT);
            if (this.offset !== 0) return true;
        });
    }
    pushLeftBeforeInput() {
        // cases:
        // filled input: 00|
        // optional empty input: 00[]|
        // nested block: XX<[]>|
        return this._pushLeft(()=>{
            if (this.block.isFixed) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).LEFT);
            return true;
        });
    }
    pushLeftBeforeRequired() {
        return this._pushLeft(()=>{
            if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).LEFT);
            return true;
        });
    }
    pushRightBeforeFilled() {
        return this._pushRight(()=>{
            if (this.block.isFixed || !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).FORCE_RIGHT);
            if (this.offset !== this.block.value.length) return true;
        });
    }
    pushRightBeforeInput() {
        return this._pushRight(()=>{
            if (this.block.isFixed) return;
            // const o = this.offset;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).NONE);
            // HACK cases like (STILL DOES NOT WORK FOR NESTED)
            // aa|X
            // aa<X|[]>X_    - this will not work
            // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
            return true;
        });
    }
    pushRightBeforeRequired() {
        return this._pushRight(()=>{
            if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
            // TODO check |[*]XX_
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).NONE);
            return true;
        });
    }
}

},{"../../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnLC7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternFixedDefinition);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _continuousTailDetailsJs = require("../../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _holderJs = require("../../core/holder.js");
class PatternFixedDefinition {
    /** */ /** */ /** */ /** */ /** */ /** */ constructor(opts){
        Object.assign(this, opts);
        this._value = "";
        this.isFixed = true;
    }
    get value() {
        return this._value;
    }
    get unmaskedValue() {
        return this.isUnmasking ? this.value : "";
    }
    get rawInputValue() {
        return this._isRawInput ? this.value : "";
    }
    get displayValue() {
        return this.value;
    }
    reset() {
        this._isRawInput = false;
        this._value = "";
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new (0, _changeDetailsJsDefault.default)();
    }
    nearestInputPos(cursorPos, direction) {
        if (direction === void 0) direction = (0, _utilsJs.DIRECTION).NONE;
        const minPos = 0;
        const maxPos = this._value.length;
        switch(direction){
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                return minPos;
            case (0, _utilsJs.DIRECTION).NONE:
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
            default:
                return maxPos;
        }
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this._value.length;
        return this._isRawInput ? toPos - fromPos : 0;
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this._value.length;
        if (flags === void 0) flags = {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
    }
    get isComplete() {
        return true;
    }
    get isFilled() {
        return Boolean(this._value);
    }
    _appendChar(ch, flags) {
        if (flags === void 0) flags = {};
        if (this.isFilled) return new (0, _changeDetailsJsDefault.default)();
        const appendEager = this.eager === true || this.eager === "append";
        const appended = this.char === ch;
        const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
        const details = new (0, _changeDetailsJsDefault.default)({
            inserted: this.char,
            rawInserted: isResolved ? this.char : ""
        });
        this._value = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
    }
    _appendEager() {
        return this._appendChar(this.char, {
            tail: true
        });
    }
    _appendPlaceholder() {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.isFilled) return details;
        this._value = details.inserted = this.char;
        return details;
    }
    extractTail() {
        return new (0, _continuousTailDetailsJsDefault.default)("");
    }
    appendTail(tail) {
        if ((0, _utilsJs.isString)(tail)) tail = new (0, _continuousTailDetailsJsDefault.default)(String(tail));
        return tail.appendTo(this);
    }
    append(str, flags, tail) {
        const details = this._appendChar(str[0], flags);
        if (tail != null) details.tailShift += this.appendTail(tail).tailShift;
        return details;
    }
    doCommit() {}
    get state() {
        return {
            _value: this._value,
            _rawInputValue: this.rawInputValue
        };
    }
    set state(state) {
        this._value = state._value;
        this._isRawInput = Boolean(state._rawInputValue);
    }
    pad(flags) {
        return this._appendPlaceholder();
    }
}

},{"../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/continuous-tail-details.js":"5MbDY","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGvsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternInputDefinition);
var _factoryJs = require("../factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _holderJs = require("../../core/holder.js");
class PatternInputDefinition {
    /** */ /** */ /** */ /** */ /** */ /** */ /** */ /** */ constructor(opts){
        const { parent, isOptional, placeholderChar, displayChar, lazy, eager, ...maskOpts } = opts;
        this.masked = (0, _factoryJsDefault.default)(maskOpts);
        Object.assign(this, {
            parent,
            isOptional,
            placeholderChar,
            displayChar,
            lazy,
            eager
        });
    }
    reset() {
        this.isFilled = false;
        this.masked.reset();
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        if (fromPos === 0 && toPos >= 1) {
            this.isFilled = false;
            return this.masked.remove(fromPos, toPos);
        }
        return new (0, _changeDetailsJsDefault.default)();
    }
    get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
    }
    get unmaskedValue() {
        return this.masked.unmaskedValue;
    }
    get rawInputValue() {
        return this.masked.rawInputValue;
    }
    get displayValue() {
        return this.masked.value && this.displayChar || this.value;
    }
    get isComplete() {
        return Boolean(this.masked.value) || this.isOptional;
    }
    _appendChar(ch, flags) {
        if (flags === void 0) flags = {};
        if (this.isFilled) return new (0, _changeDetailsJsDefault.default)();
        const state = this.masked.state;
        // simulate input
        let details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
        if (details.inserted && this.doValidate(flags) === false) {
            details = new (0, _changeDetailsJsDefault.default)();
            this.masked.state = state;
        }
        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) details.inserted = this.placeholderChar;
        details.skip = !details.inserted && !this.isOptional;
        this.isFilled = Boolean(details.inserted);
        return details;
    }
    append(str, flags, tail) {
        // TODO probably should be done via _appendChar
        return this.masked.append(str, this.currentMaskFlags(flags), tail);
    }
    _appendPlaceholder() {
        if (this.isFilled || this.isOptional) return new (0, _changeDetailsJsDefault.default)();
        this.isFilled = true;
        return new (0, _changeDetailsJsDefault.default)({
            inserted: this.placeholderChar
        });
    }
    _appendEager() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    extractTail(fromPos, toPos) {
        return this.masked.extractTail(fromPos, toPos);
    }
    appendTail(tail) {
        return this.masked.appendTail(tail);
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        return this.masked.extractInput(fromPos, toPos, flags);
    }
    nearestInputPos(cursorPos, direction) {
        if (direction === void 0) direction = (0, _utilsJs.DIRECTION).NONE;
        const minPos = 0;
        const maxPos = this.value.length;
        const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
        switch(direction){
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                return this.isComplete ? boundPos : minPos;
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
                return this.isComplete ? boundPos : maxPos;
            case (0, _utilsJs.DIRECTION).NONE:
            default:
                return boundPos;
        }
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        return this.value.slice(fromPos, toPos).length;
    }
    doValidate(flags) {
        return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
    }
    doCommit() {
        this.masked.doCommit();
    }
    get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue,
            masked: this.masked.state,
            isFilled: this.isFilled
        };
    }
    set state(state) {
        this.masked.state = state.masked;
        this.isFilled = state.isFilled;
    }
    currentMaskFlags(flags) {
        var _flags$_beforeTailSta;
        return {
            ...flags,
            _beforeTailState: (flags == null || (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.masked) || (flags == null ? void 0 : flags._beforeTailState)
        };
    }
    pad(flags) {
        return new (0, _changeDetailsJsDefault.default)();
    }
}
PatternInputDefinition.DEFAULT_DEFINITIONS = {
    "0": /\d/,
    "a": /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    "*": /./
};

},{"../factory.js":"4c29b","../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7B25G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedRegExp);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _utilsJs = require("../core/utils.js");
/** Masking by RegExp */ class MaskedRegExp extends (0, _baseJsDefault.default) {
    /** */ /** Enable characters overwriting */ /** */ /** */ /** */ updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const mask = opts.mask;
        if (mask) opts.validate = (value)=>value.search(mask) >= 0;
        super._update(opts);
    }
}
(0, _holderJsDefault.default).MaskedRegExp = MaskedRegExp;

},{"./base.js":"i9dza","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHvQL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedRange);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _utilsJs = require("../core/utils.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _factoryJs = require("./factory.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
/** Pattern which accepts ranges */ class MaskedRange extends (0, _patternJsDefault.default) {
    /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */ /** Min bound */ /** Max bound */ get _matchFrom() {
        return this.maxLength - String(this.from).length;
    }
    constructor(opts){
        super(opts); // mask will be created in _update
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const { to = this.to || 0, from = this.from || 0, maxLength = this.maxLength || 0, autofix = this.autofix, ...patternOpts } = opts;
        this.to = to;
        this.from = from;
        this.maxLength = Math.max(String(to).length, maxLength);
        this.autofix = autofix;
        const fromStr = String(this.from).padStart(this.maxLength, "0");
        const toStr = String(this.to).padStart(this.maxLength, "0");
        let sameCharsCount = 0;
        while(sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount])++sameCharsCount;
        patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(this.maxLength - sameCharsCount);
        super._update(patternOpts);
    }
    get isComplete() {
        return super.isComplete && Boolean(this.value);
    }
    boundaries(str) {
        let minstr = "";
        let maxstr = "";
        const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
        if (num) {
            minstr = "0".repeat(placeholder.length) + num;
            maxstr = "9".repeat(placeholder.length) + num;
        }
        minstr = minstr.padEnd(this.maxLength, "0");
        maxstr = maxstr.padEnd(this.maxLength, "9");
        return [
            minstr,
            maxstr
        ];
    }
    doPrepareChar(ch, flags) {
        if (flags === void 0) flags = {};
        let details;
        [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ""), flags);
        if (!ch) details.skip = !this.isComplete;
        return [
            ch,
            details
        ];
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        if (!this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(ch, flags);
        const fromStr = String(this.from).padStart(this.maxLength, "0");
        const toStr = String(this.to).padStart(this.maxLength, "0");
        const [minstr, maxstr] = this.boundaries(this.value + ch);
        if (Number(maxstr) < this.from) return super._appendCharRaw(fromStr[this.value.length], flags);
        if (Number(minstr) > this.to) {
            if (!flags.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength) return super._appendCharRaw(fromStr[this.value.length], flags).aggregate(this._appendCharRaw(ch, flags));
            return super._appendCharRaw(toStr[this.value.length], flags);
        }
        return super._appendCharRaw(ch, flags);
    }
    doValidate(flags) {
        const str = this.value;
        const firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
        const [minstr, maxstr] = this.boundaries(str);
        return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
    }
    pad(flags) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.value.length === this.maxLength) return details;
        const value = this.value;
        const padLength = this.maxLength - this.value.length;
        if (padLength) {
            this.reset();
            for(let i = 0; i < padLength; ++i)details.aggregate(super._appendCharRaw("0", flags));
            // append tail
            value.split("").forEach((ch)=>this._appendCharRaw(ch));
        }
        return details;
    }
}
(0, _holderJsDefault.default).MaskedRange = MaskedRange;

},{"../core/change-details.js":"cDdFe","../core/holder.js":"fNs7n","./pattern.js":"edg1G","../core/utils.js":"hh2Rx","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPiRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedDynamic);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
/** Dynamic mask for choosing appropriate mask in run-time */ class MaskedDynamic extends (0, _baseJsDefault.default) {
    constructor(opts){
        super({
            ...MaskedDynamic.DEFAULTS,
            ...opts
        });
        this.currentMask = undefined;
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        super._update(opts);
        if ("mask" in opts) {
            this.exposeMask = undefined;
            // mask could be totally dynamic with only `dispatch` option
            this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map((m)=>{
                const { expose, ...maskOpts } = (0, _factoryJs.normalizeOpts)(m);
                const masked = (0, _factoryJsDefault.default)({
                    overwrite: this._overwrite,
                    eager: this._eager,
                    skipInvalid: this._skipInvalid,
                    ...maskOpts
                });
                if (expose) this.exposeMask = masked;
                return masked;
            }) : [];
        // this.currentMask = this.doDispatch(''); // probably not needed but lets see
        }
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const details = this._applyDispatch(ch, flags);
        if (this.currentMask) details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
        return details;
    }
    _applyDispatch(appended, flags, tail) {
        if (appended === void 0) appended = "";
        if (flags === void 0) flags = {};
        if (tail === void 0) tail = "";
        const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        const inputValue = this.rawInputValue;
        const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
        const tailValue = inputValue.slice(insertValue.length);
        const prevMask = this.currentMask;
        const details = new (0, _changeDetailsJsDefault.default)();
        const prevMaskState = prevMask == null ? void 0 : prevMask.state;
        // clone flags to prevent overwriting `_beforeTailState`
        this.currentMask = this.doDispatch(appended, {
            ...flags
        }, tail);
        // restore state after dispatch
        if (this.currentMask) {
            if (this.currentMask !== prevMask) {
                // if mask changed reapply input
                this.currentMask.reset();
                if (insertValue) {
                    this.currentMask.append(insertValue, {
                        raw: true
                    });
                    details.tailShift = this.currentMask.value.length - prevValueBeforeTail.length;
                }
                if (tailValue) details.tailShift += this.currentMask.append(tailValue, {
                    raw: true,
                    tail: true
                }).tailShift;
            } else if (prevMaskState) // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
        }
        return details;
    }
    _appendPlaceholder() {
        const details = this._applyDispatch();
        if (this.currentMask) details.aggregate(this.currentMask._appendPlaceholder());
        return details;
    }
    _appendEager() {
        const details = this._applyDispatch();
        if (this.currentMask) details.aggregate(this.currentMask._appendEager());
        return details;
    }
    appendTail(tail) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (tail) details.aggregate(this._applyDispatch("", {}, tail));
        return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
    }
    currentMaskFlags(flags) {
        var _flags$_beforeTailSta, _flags$_beforeTailSta2;
        return {
            ...flags,
            _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
        };
    }
    doDispatch(appended, flags, tail) {
        if (flags === void 0) flags = {};
        if (tail === void 0) tail = "";
        return this.dispatch(appended, this, flags, tail);
    }
    doValidate(flags) {
        return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
    }
    doPrepare(str, flags) {
        if (flags === void 0) flags = {};
        let [s, details] = super.doPrepare(str, flags);
        if (this.currentMask) {
            let currentDetails;
            [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
            details = details.aggregate(currentDetails);
        }
        return [
            s,
            details
        ];
    }
    doPrepareChar(str, flags) {
        if (flags === void 0) flags = {};
        let [s, details] = super.doPrepareChar(str, flags);
        if (this.currentMask) {
            let currentDetails;
            [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
            details = details.aggregate(currentDetails);
        }
        return [
            s,
            details
        ];
    }
    reset() {
        var _this$currentMask;
        (_this$currentMask = this.currentMask) == null || _this$currentMask.reset();
        this.compiledMasks.forEach((m)=>m.reset());
    }
    get value() {
        return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : "";
    }
    set value(value) {
        if (this.exposeMask) {
            this.exposeMask.value = value;
            this.currentMask = this.exposeMask;
            this._applyDispatch();
        } else super.value = value;
    }
    get unmaskedValue() {
        return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : "";
    }
    set unmaskedValue(unmaskedValue) {
        if (this.exposeMask) {
            this.exposeMask.unmaskedValue = unmaskedValue;
            this.currentMask = this.exposeMask;
            this._applyDispatch();
        } else super.unmaskedValue = unmaskedValue;
    }
    get typedValue() {
        return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : "";
    }
    set typedValue(typedValue) {
        if (this.exposeMask) {
            this.exposeMask.typedValue = typedValue;
            this.currentMask = this.exposeMask;
            this._applyDispatch();
            return;
        }
        let unmaskedValue = String(typedValue);
        // double check it
        if (this.currentMask) {
            this.currentMask.typedValue = typedValue;
            unmaskedValue = this.currentMask.unmaskedValue;
        }
        this.unmaskedValue = unmaskedValue;
    }
    get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : "";
    }
    get isComplete() {
        var _this$currentMask2;
        return Boolean((_this$currentMask2 = this.currentMask) == null ? void 0 : _this$currentMask2.isComplete);
    }
    get isFilled() {
        var _this$currentMask3;
        return Boolean((_this$currentMask3 = this.currentMask) == null ? void 0 : _this$currentMask3.isFilled);
    }
    remove(fromPos, toPos) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.currentMask) details.aggregate(this.currentMask.remove(fromPos, toPos))// update with dispatch
        .aggregate(this._applyDispatch());
        return details;
    }
    get state() {
        var _this$currentMask4;
        return {
            ...super.state,
            _rawInputValue: this.rawInputValue,
            compiledMasks: this.compiledMasks.map((m)=>m.state),
            currentMaskRef: this.currentMask,
            currentMask: (_this$currentMask4 = this.currentMask) == null ? void 0 : _this$currentMask4.state
        };
    }
    set state(state) {
        const { compiledMasks, currentMaskRef, currentMask, ...maskedState } = state;
        if (compiledMasks) this.compiledMasks.forEach((m, mi)=>m.state = compiledMasks[mi]);
        if (currentMaskRef != null) {
            this.currentMask = currentMaskRef;
            this.currentMask.state = currentMask;
        }
        super.state = maskedState;
    }
    extractInput(fromPos, toPos, flags) {
        return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : "";
    }
    extractTail(fromPos, toPos) {
        return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
    }
    doCommit() {
        if (this.currentMask) this.currentMask.doCommit();
        super.doCommit();
    }
    nearestInputPos(cursorPos, direction) {
        return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
    }
    get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite;
    }
    set overwrite(overwrite) {
        this._overwrite = overwrite;
    }
    get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager;
    }
    set eager(eager) {
        this._eager = eager;
    }
    get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
    }
    set skipInvalid(skipInvalid) {
        this._skipInvalid = skipInvalid;
    }
    get autofix() {
        return this.currentMask ? this.currentMask.autofix : this._autofix;
    }
    set autofix(autofix) {
        this._autofix = autofix;
    }
    maskEquals(mask) {
        return Array.isArray(mask) ? this.compiledMasks.every((m, mi)=>{
            if (!mask[mi]) return;
            const { mask: oldMask, ...restOpts } = mask[mi];
            return (0, _utilsJs.objectIncludes)(m, restOpts) && m.maskEquals(oldMask);
        }) : super.maskEquals(mask);
    }
    typedValueEquals(value) {
        var _this$currentMask5;
        return Boolean((_this$currentMask5 = this.currentMask) == null ? void 0 : _this$currentMask5.typedValueEquals(value));
    }
}
/** Currently chosen mask */ /** Currently chosen mask */ /** Compliled {@link Masked} options */ /** Chooses {@link Masked} depending on input value */ MaskedDynamic.DEFAULTS = {
    ...(0, _baseJsDefault.default).DEFAULTS,
    dispatch: (appended, masked, flags, tail)=>{
        if (!masked.compiledMasks.length) return;
        const inputValue = masked.rawInputValue;
        // simulate input
        const inputs = masked.compiledMasks.map((m, index)=>{
            const isCurrent = masked.currentMask === m;
            const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, (0, _utilsJs.DIRECTION).FORCE_LEFT);
            if (m.rawInputValue !== inputValue) {
                m.reset();
                m.append(inputValue, {
                    raw: true
                });
            } else if (!isCurrent) m.remove(startInputPos);
            m.append(appended, masked.currentMaskFlags(flags));
            m.appendTail(tail);
            return {
                index,
                weight: m.rawInputValue.length,
                totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, (0, _utilsJs.DIRECTION).FORCE_LEFT)))
            };
        });
        // pop masks with longer values first
        inputs.sort((i1, i2)=>i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
        return masked.compiledMasks[inputs[0].index];
    }
};
(0, _holderJsDefault.default).MaskedDynamic = MaskedDynamic;

},{"../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./factory.js":"4c29b","./base.js":"i9dza","../core/holder.js":"fNs7n","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmeoh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedEnum);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../core/utils.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _baseJs = require("./base.js");
var _factoryJs = require("./factory.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
/** Pattern which validates enum values */ class MaskedEnum extends (0, _patternJsDefault.default) {
    constructor(opts){
        super({
            ...MaskedEnum.DEFAULTS,
            ...opts
        }); // mask will be created in _update
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const { enum: enum_, ...eopts } = opts;
        if (enum_) {
            const lengths = enum_.map((e)=>e.length);
            const requiredLength = Math.min(...lengths);
            const optionalLength = Math.max(...lengths) - requiredLength;
            eopts.mask = "*".repeat(requiredLength);
            if (optionalLength) eopts.mask += "[" + "*".repeat(optionalLength) + "]";
            this.enum = enum_;
        }
        super._update(eopts);
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const matchFrom = Math.min(this.nearestInputPos(0, (0, _utilsJs.DIRECTION).FORCE_RIGHT), this.value.length);
        const matches = this.enum.filter((e)=>this.matchValue(e, this.unmaskedValue + ch, matchFrom));
        if (matches.length) {
            if (matches.length === 1) this._forEachBlocksInRange(0, this.value.length, (b, bi)=>{
                const mch = matches[0][bi];
                if (bi >= this.value.length || mch === b.value) return;
                b.reset();
                b._appendChar(mch, flags);
            });
            const d = super._appendCharRaw(matches[0][this.value.length], flags);
            if (matches.length === 1) matches[0].slice(this.unmaskedValue.length).split("").forEach((mch)=>d.aggregate(super._appendCharRaw(mch)));
            return d;
        }
        return new (0, _changeDetailsJsDefault.default)({
            skip: !this.isComplete
        });
    }
    extractTail(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        // just drop tail
        return new (0, _continuousTailDetailsJsDefault.default)("", fromPos);
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        if (fromPos === toPos) return new (0, _changeDetailsJsDefault.default)();
        const matchFrom = Math.min(super.nearestInputPos(0, (0, _utilsJs.DIRECTION).FORCE_RIGHT), this.value.length);
        let pos;
        for(pos = fromPos; pos >= 0; --pos){
            const matches = this.enum.filter((e)=>this.matchValue(e, this.value.slice(matchFrom, pos), matchFrom));
            if (matches.length > 1) break;
        }
        const details = super.remove(pos, toPos);
        details.tailShift += pos - fromPos;
        return details;
    }
    get isComplete() {
        return this.enum.indexOf(this.value) >= 0;
    }
}
/** Match enum value */ MaskedEnum.DEFAULTS = {
    ...(0, _patternJsDefault.default).DEFAULTS,
    matchValue: (estr, istr, matchFrom)=>estr.indexOf(istr, matchFrom) === matchFrom
};
(0, _holderJsDefault.default).MaskedEnum = MaskedEnum;

},{"./pattern.js":"edg1G","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/utils.js":"hh2Rx","../core/continuous-tail-details.js":"5MbDY","./base.js":"i9dza","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64ffz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedFunction);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _utilsJs = require("../core/utils.js");
/** Masking by custom Function */ class MaskedFunction extends (0, _baseJsDefault.default) {
    /** */ /** Enable characters overwriting */ /** */ /** */ /** */ updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        super._update({
            ...opts,
            validate: opts.mask
        });
    }
}
(0, _holderJsDefault.default).MaskedFunction = MaskedFunction;

},{"./base.js":"i9dza","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHi3R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedNumber);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _MaskedNumber;
/** Number mask */ class MaskedNumber extends (0, _baseJsDefault.default) {
    /** Single char */ /** Single char */ /** Array of single chars */ /** */ /** */ /** Digits after point */ /** Flag to remove leading and trailing zeros in the end of editing */ /** Flag to pad trailing zeros after point in the end of editing */ /** Enable characters overwriting */ /** */ /** */ /** */ /** Format typed value to string */ /** Parse string to get typed value */ constructor(opts){
        super({
            ...MaskedNumber.DEFAULTS,
            ...opts
        });
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        super._update(opts);
        this._updateRegExps();
    }
    _updateRegExps() {
        const start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
        const mid = "\\d*";
        const end = (this.scale ? "(" + (0, _utilsJs.escapeRegExp)(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map((0, _utilsJs.escapeRegExp)).join("") + "]", "g");
        this._thousandsSeparatorRegExp = new RegExp((0, _utilsJs.escapeRegExp)(this.thousandsSeparator), "g");
    }
    _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, "");
    }
    _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        const parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
    }
    doPrepareChar(ch, flags) {
        if (flags === void 0) flags = {};
        const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */ (flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
        if (ch && !prepCh) details.skip = true;
        if (prepCh && !this.allowPositive && !this.value && prepCh !== "-") details.aggregate(this._appendChar("-"));
        return [
            prepCh,
            details
        ];
    }
    _separatorsCount(to, extendOnSeparators) {
        if (extendOnSeparators === void 0) extendOnSeparators = false;
        let count = 0;
        for(let pos = 0; pos < to; ++pos)if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
        return count;
    }
    _separatorsCountFromSlice(slice) {
        if (slice === void 0) slice = this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
        this._value = this._removeThousandsSeparators(this.value);
        const oldValue = this._value;
        this._value += ch;
        const num = this.number;
        let accepted = !isNaN(num);
        let skip = false;
        if (accepted) {
            let fixedNum;
            if (this.min != null && this.min < 0 && this.number < this.min) fixedNum = this.min;
            if (this.max != null && this.max > 0 && this.number > this.max) fixedNum = this.max;
            if (fixedNum != null) {
                if (this.autofix) {
                    this._value = this.format(fixedNum, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
                    skip || (skip = oldValue === this._value && !flags.tail); // if not changed on tail it's still ok to proceed
                } else accepted = false;
            }
            accepted && (accepted = Boolean(this._value.match(this._numberRegExp)));
        }
        let appendDetails;
        if (!accepted) {
            this._value = oldValue;
            appendDetails = new (0, _changeDetailsJsDefault.default)();
        } else appendDetails = new (0, _changeDetailsJsDefault.default)({
            inserted: this._value.slice(oldValue.length),
            rawInserted: skip ? "" : ch,
            skip
        });
        this._value = this._insertThousandsSeparators(this._value);
        const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        return appendDetails;
    }
    _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
            const searchFrom = pos - this.thousandsSeparator.length + 1;
            const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
            if (separatorPos <= pos) return separatorPos;
        }
        return -1;
    }
    _adjustRangeWithSeparators(from, to) {
        const separatorAroundFromPos = this._findSeparatorAround(from);
        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
        const separatorAroundToPos = this._findSeparatorAround(to);
        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [
            from,
            to
        ];
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        const valueBeforePos = this.value.slice(0, fromPos);
        const valueAfterPos = this.value.slice(toPos);
        const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
        return new (0, _changeDetailsJsDefault.default)({
            tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
    }
    nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;
        switch(direction){
            case (0, _utilsJs.DIRECTION).NONE:
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                {
                    const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
                    if (separatorAtLeftPos >= 0) {
                        const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                        if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) return separatorAtLeftPos;
                    }
                    break;
                }
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
                {
                    const separatorAtRightPos = this._findSeparatorAround(cursorPos);
                    if (separatorAtRightPos >= 0) return separatorAtRightPos + this.thousandsSeparator.length;
                }
        }
        return cursorPos;
    }
    doCommit() {
        if (this.value) {
            const number = this.number;
            let validnum = number;
            // check bounds
            if (this.min != null) validnum = Math.max(validnum, this.min);
            if (this.max != null) validnum = Math.min(validnum, this.max);
            if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
            let formatted = this.value;
            if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
            if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
            this._value = formatted;
        }
        super.doCommit();
    }
    _normalizeZeros(value) {
        const parts = this._removeThousandsSeparators(value).split(this.radix);
        // remove leading zeros
        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num)=>sign + num);
        // add leading zero
        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + "0";
        if (parts.length > 1) {
            parts[1] = parts[1].replace(/0*$/, ""); // remove trailing zeros
            if (!parts[1].length) parts.length = 1; // remove fractional
        }
        return this._insertThousandsSeparators(parts.join(this.radix));
    }
    _padFractionalZeros(value) {
        if (!value) return value;
        const parts = value.split(this.radix);
        if (parts.length < 2) parts.push("");
        parts[1] = parts[1].padEnd(this.scale, "0");
        return parts.join(this.radix);
    }
    doSkipInvalid(ch, flags, checkTail) {
        if (flags === void 0) flags = {};
        const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
        return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
    }
    get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
    }
    set unmaskedValue(unmaskedValue) {
        super.unmaskedValue = unmaskedValue;
    }
    get typedValue() {
        return this.parse(this.unmaskedValue, this);
    }
    set typedValue(n) {
        this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
    }
    /** Parsed Number */ get number() {
        return this.typedValue;
    }
    set number(number) {
        this.typedValue = number;
    }
    get allowNegative() {
        return this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
    get allowPositive() {
        return this.min != null && this.min > 0 || this.max != null && this.max > 0;
    }
    typedValueEquals(value) {
        // handle  0 -> '' case (typed = 0 even if value = '')
        // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
        return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === "");
    }
}
_MaskedNumber = MaskedNumber;
MaskedNumber.UNMASKED_RADIX = ".";
MaskedNumber.EMPTY_VALUES = [
    ...(0, _baseJsDefault.default).EMPTY_VALUES,
    0
];
MaskedNumber.DEFAULTS = {
    ...(0, _baseJsDefault.default).DEFAULTS,
    mask: Number,
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: [
        _MaskedNumber.UNMASKED_RADIX
    ],
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    scale: 2,
    normalizeZeros: true,
    padFractionalZeros: false,
    parse: Number,
    format: (n)=>n.toLocaleString("en-US", {
            useGrouping: false,
            maximumFractionDigits: 20
        })
};
(0, _holderJsDefault.default).MaskedNumber = MaskedNumber;

},{"../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./base.js":"i9dza","../core/holder.js":"fNs7n","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knGz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PIPE_TYPE", ()=>PIPE_TYPE);
parcelHelpers.export(exports, "createPipe", ()=>createPipe);
parcelHelpers.export(exports, "pipe", ()=>pipe);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
/** Mask pipe source and destination types */ const PIPE_TYPE = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
};
/** Creates new pipe function depending on mask type, source and destination options */ function createPipe(arg, from, to) {
    if (from === void 0) from = PIPE_TYPE.MASKED;
    if (to === void 0) to = PIPE_TYPE.MASKED;
    const masked = (0, _factoryJsDefault.default)(arg);
    return (value)=>masked.runIsolated((m)=>{
            m[from] = value;
            return m[to];
        });
}
/** Pipes value through mask depending on mask type, source and destination options */ function pipe(value, mask, from, to) {
    return createPipe(mask, from, to)(value);
}
(0, _holderJsDefault.default).PIPE_TYPE = PIPE_TYPE;
(0, _holderJsDefault.default).createPipe = createPipe;
(0, _holderJsDefault.default).pipe = pipe;

},{"./factory.js":"4c29b","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccFx2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RepeatBlock);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _utilsJs = require("../core/utils.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
/** Pattern mask */ class RepeatBlock extends (0, _patternJsDefault.default) {
    get repeatFrom() {
        var _ref;
        return (_ref = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) != null ? _ref : 0;
    }
    get repeatTo() {
        var _ref2;
        return (_ref2 = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? _ref2 : Infinity;
    }
    constructor(opts){
        super(opts);
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        var _ref3, _ref4, _this$_blocks;
        const { repeat, ...blockOpts } = (0, _factoryJs.normalizeOpts)(opts); // TODO type
        this._blockOpts = Object.assign({}, this._blockOpts, blockOpts);
        const block = (0, _factoryJsDefault.default)(this._blockOpts);
        this.repeat = (_ref3 = (_ref4 = repeat != null ? repeat : block.repeat) != null ? _ref4 : this.repeat) != null ? _ref3 : Infinity; // TODO type
        super._update({
            mask: "m".repeat(Math.max(this.repeatTo === Infinity && ((_this$_blocks = this._blocks) == null ? void 0 : _this$_blocks.length) || 0, this.repeatFrom)),
            blocks: {
                m: block
            },
            eager: block.eager,
            overwrite: block.overwrite,
            skipInvalid: block.skipInvalid,
            lazy: block.lazy,
            placeholderChar: block.placeholderChar,
            displayChar: block.displayChar
        });
    }
    _allocateBlock(bi) {
        if (bi < this._blocks.length) return this._blocks[bi];
        if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) {
            this._blocks.push((0, _factoryJsDefault.default)(this._blockOpts));
            this.mask += "m";
            return this._blocks[this._blocks.length - 1];
        }
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const details = new (0, _changeDetailsJsDefault.default)();
        for(let bi = (_this$_mapPosToBlock$ = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index) != null ? _this$_mapPosToBlock$ : Math.max(this._blocks.length - 1, 0), block, allocated; // try to get a block or
        // try to allocate a new block if not allocated already
        block = (_this$_blocks$bi = this._blocks[bi]) != null ? _this$_blocks$bi : allocated = !allocated && this._allocateBlock(bi); ++bi){
            var _this$_mapPosToBlock$, _this$_mapPosToBlock, _this$_blocks$bi, _flags$_beforeTailSta;
            const blockDetails = block._appendChar(ch, {
                ...flags,
                _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
            });
            if (blockDetails.skip && allocated) {
                // remove the last allocated block and break
                this._blocks.pop();
                this.mask = this.mask.slice(1);
                break;
            }
            details.aggregate(blockDetails);
            if (blockDetails.consumed) break; // go next char
        }
        return details;
    }
    _trimEmptyTail(fromPos, toPos) {
        var _this$_mapPosToBlock2, _this$_mapPosToBlock3;
        if (fromPos === void 0) fromPos = 0;
        const firstBlockIndex = Math.max(((_this$_mapPosToBlock2 = this._mapPosToBlock(fromPos)) == null ? void 0 : _this$_mapPosToBlock2.index) || 0, this.repeatFrom, 0);
        let lastBlockIndex;
        if (toPos != null) lastBlockIndex = (_this$_mapPosToBlock3 = this._mapPosToBlock(toPos)) == null ? void 0 : _this$_mapPosToBlock3.index;
        if (lastBlockIndex == null) lastBlockIndex = this._blocks.length - 1;
        let removeCount = 0;
        for(let blockIndex = lastBlockIndex; firstBlockIndex <= blockIndex; --blockIndex, ++removeCount){
            if (this._blocks[blockIndex].unmaskedValue) break;
        }
        if (removeCount) {
            this._blocks.splice(lastBlockIndex - removeCount + 1, removeCount);
            this.mask = this.mask.slice(removeCount);
        }
    }
    reset() {
        super.reset();
        this._trimEmptyTail();
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.displayValue.length;
        const removeDetails = super.remove(fromPos, toPos);
        this._trimEmptyTail(fromPos, toPos);
        return removeDetails;
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos == null && this.repeatTo === Infinity) return Infinity;
        return super.totalInputPositions(fromPos, toPos);
    }
    get state() {
        return super.state;
    }
    set state(state) {
        this._blocks.length = state._blocks.length;
        this.mask = this.mask.slice(0, this._blocks.length);
        super.state = state;
    }
}
(0, _holderJsDefault.default).RepeatBlock = RepeatBlock;

},{"../core/change-details.js":"cDdFe","../core/holder.js":"fNs7n","./factory.js":"4c29b","./pattern.js":"edg1G","../core/utils.js":"hh2Rx","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1jRsq","fl9kG"], "fl9kG", "parcelRequire8092")

//# sourceMappingURL=index.48fa6cdc.js.map
