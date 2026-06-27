(() => {
var exports = {};
exports.id = 429;
exports.ids = [429];
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

/***/ 6357:
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
        'leads',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5001)), "/Users/haroldtrapier/cptwebs-lead-engine/app/leads/page.tsx"],
          
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
    const pages = ["/Users/haroldtrapier/cptwebs-lead-engine/app/leads/page.tsx"];

    

    const originalPathname = "/leads/page"
    const __next_app__ = {
      require: __webpack_require__,
      // all modules are in the entry chunk, so we never actually need to load chunks in webpack
      loadChunk: () => Promise.resolve()
    }

    

    // Create and export the route module that will be consumed.
    const options = {"definition":{"kind":"APP_PAGE","page":"/leads/page","pathname":"/leads","bundlePath":"app/leads/page","filename":"","appPaths":[]}}
    const routeModule = new (next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default())({
      ...options,
      userland: {
        loaderTree: tree,
      },
    })
  

/***/ }),

/***/ 3047:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1501))

/***/ }),

/***/ 1501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LeadsPage)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./lib/mockLeads.ts
var mockLeads = __webpack_require__(6936);
;// CONCATENATED MODULE: ./lib/csv.ts
function exportLeadsCsv(leads) {
    const headers = [
        "name",
        "type",
        "category",
        "city",
        "state",
        "phone",
        "website",
        "score",
        "priority",
        "status",
        "issues"
    ];
    const rows = leads.map((l)=>headers.map((h)=>`"${String(h === "issues" ? (l.websiteIssues || []).join("; ") : l[h] ?? "").replaceAll('"', '""')}"`).join(","));
    const csv = [
        headers.join(","),
        ...rows
    ].join("\n");
    const blob = new Blob([
        csv
    ], {
        type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cptwebs-leads.csv";
    a.click();
    URL.revokeObjectURL(url);
}

;// CONCATENATED MODULE: ./app/leads/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function cls(p) {
    return p === "Hot" ? "hot" : p === "Strong" ? "strong" : p === "Possible" ? "possible" : "low";
}
function LeadsPage() {
    const [q, setQ] = (0,react_.useState)("");
    const [priority, setPriority] = (0,react_.useState)("All");
    const [type, setType] = (0,react_.useState)("All");
    const leads = (0,react_.useMemo)(()=>mockLeads/* mockLeads */.H.filter((l)=>(priority === "All" || l.priority === priority) && (type === "All" || l.type === type) && `${l.name} ${l.city} ${l.category}`.toLowerCase().includes(q.toLowerCase())), [
        q,
        priority,
        type
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "stack",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "title",
                                children: "Lead Results"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "subtitle",
                                children: "Filter qualified prospects, review website issues, and export visible leads."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn",
                        onClick: ()=>exportLeadsCsv(leads),
                        children: "Export CSV"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card form-grid",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "label",
                        children: [
                            "Search",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "input",
                                value: q,
                                onChange: (e)=>setQ(e.target.value),
                                placeholder: "Name, city, category"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "label",
                        children: [
                            "Priority",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "input",
                                value: priority,
                                onChange: (e)=>setPriority(e.target.value),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        children: "All"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        children: "Hot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        children: "Strong"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        children: "Possible"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        children: "Low"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "label",
                        children: [
                            "Type",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "input",
                                value: type,
                                onChange: (e)=>setType(e.target.value),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        children: "All"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "church",
                                        children: "Church"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "small_business",
                                        children: "Small Business"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "table-wrap",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Type"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "City"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Score"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Priority"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Status"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Issues"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Offer"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                            children: leads.map((l)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: l.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "muted small",
                                                    children: l.phone
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: l.type === "church" ? "Church" : "Small Business"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                            children: [
                                                l.city,
                                                ", ",
                                                l.state
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: l.score
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `badge ${cls(l.priority)}`,
                                                children: l.priority
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "badge status",
                                                children: l.status
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: l.websiteIssues.join(", ")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: l.recommendedOffer
                                        })
                                    ]
                                }, l.id))
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 5001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/haroldtrapier/cptwebs-lead-engine/app/leads/page.tsx`)

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
var __webpack_exports__ = __webpack_require__.X(0, [218,454,177], () => (__webpack_exec__(6357)));
module.exports = __webpack_exports__;

})();