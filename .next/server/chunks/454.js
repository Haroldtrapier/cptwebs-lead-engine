exports.id = 454;
exports.ids = [454];
exports.modules = {

/***/ 8589:
/***/ (() => {



/***/ }),

/***/ 6095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
;// CONCATENATED MODULE: ./components/Navbar.tsx

function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "nav",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "nav-inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "brand",
                    children: "CPTWEBS Lead Engine"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "nav-links",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/dashboard",
                            children: "Dashboard"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/leads",
                            children: "Leads"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/search",
                            children: "Search"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/outreach",
                            children: "Outreach"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx



const metadata = {
    title: "CPTWEBS Lead Engine",
    description: "Find, score, and prioritize website opportunities for churches and small businesses."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "shell",
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;