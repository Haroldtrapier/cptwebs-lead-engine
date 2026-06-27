(() => {
var exports = {};
exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport safe */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__.GlobalError),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

    

    const tree = {
        children: [
        '',
        {
        children: [
        'outreach',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2068)), "/Users/haroldtrapier/cptwebs-lead-engine/app/outreach/page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6095)), "/Users/haroldtrapier/cptwebs-lead-engine/app/layout.tsx"],
          
        }
      ]
      }.children;
    const pages = ["/Users/haroldtrapier/cptwebs-lead-engine/app/outreach/page.tsx"];

    

    const originalPathname = "/outreach/page"
    const __next_app__ = {
      require: __webpack_require__,
      // all modules are in the entry chunk, so we never actually need to load chunks in webpack
      loadChunk: () => Promise.resolve()
    }

    

    // Create and export the route module that will be consumed.
    const options = {"definition":{"kind":"APP_PAGE","page":"/outreach/page","pathname":"/outreach","bundlePath":"app/outreach/page","filename":"","appPaths":[]}}
    const routeModule = new (next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default())({
      ...options,
      userland: {
        loaderTree: tree,
      },
    })
  

/***/ }),

/***/ 6864:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7578))

/***/ }),

/***/ 7578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OutreachPage)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./lib/mockLeads.ts
var mockLeads = __webpack_require__(6936);
;// CONCATENATED MODULE: ./lib/outreach.ts
function buildOutreach(lead) {
    const kind = lead.type === "church" ? "church" : "business";
    const issues = (lead.websiteIssues || []).join(", ");
    return {
        email: `Subject: Quick website idea for ${lead.name}\n\nHi ${lead.name},\n\nI noticed your current website could be doing more to help visitors take action. A few things stood out: ${issues}.\n\nCPTWEBS helps ${kind === "church" ? "churches" : "small businesses"} launch modern mobile-ready websites in 5-7 days. ${lead.recommendedOffer}\n\nWe can also create a free homepage mockup so you can see the upgrade before deciding.\n\nWould you be open to taking a look?`,
        sms: `Hi ${lead.name}, this is CPTWEBS. I noticed a few website opportunities: ${issues}. We build modern sites in 5-7 days and can show a free homepage mockup.`,
        phone: `Opening: I am calling from CPTWEBS because I noticed your website may be missing key conversion features. Mention: ${issues}. Offer a free homepage mockup and ask who handles website updates.`,
        followup: `Hi ${lead.name}, following up on the website idea. CPTWEBS can help modernize the site in 5-7 days and include the features visitors expect. Want me to send the free homepage mockup?`,
        audit: `Audit summary for ${lead.name}: score ${lead.score}/100. Priority: ${lead.priority}. Main opportunities: ${issues}. Recommended offer: ${lead.recommendedOffer}`
    };
}

;// CONCATENATED MODULE: ./app/outreach/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function OutreachPage() {
    const [id, setId] = (0,react_.useState)("1");
    const lead = mockLeads/* mockLeads */.H.find((l)=>l.id === id) || mockLeads/* mockLeads */.H[0];
    const o = (0,react_.useMemo)(()=>buildOutreach(lead), [
        lead
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "stack",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "title",
                        children: "Outreach Generator"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "subtitle",
                        children: "Generate CPTWEBS sales copy based on the lead score, website issues, offer, and free mockup pitch."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "label",
                        children: [
                            "Select lead",
                            /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                className: "input",
                                value: id,
                                onChange: (e)=>setId(e.target.value),
                                children: mockLeads/* mockLeads */.H.map((l)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: l.id,
                                        children: l.name
                                    }, l.id))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "muted",
                        children: [
                            "Score ",
                            lead.score,
                            "/100 • ",
                            lead.priority,
                            " • ",
                            lead.websiteIssues.join(", ")
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "panel-title",
                                children: "Cold email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "copybox",
                                children: o.email
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "panel-title",
                                children: "SMS"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "copybox",
                                children: o.sms
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "panel-title",
                                children: "Phone script"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "copybox",
                                children: o.phone
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "panel-title",
                                children: "Follow-up"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "copybox",
                                children: o.followup
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "panel-title",
                        children: "Website audit summary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "copybox",
                        children: o.audit
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/haroldtrapier/cptwebs-lead-engine/app/outreach/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [218,454,177], () => (__webpack_exec__(545)));
module.exports = __webpack_exports__;

})();