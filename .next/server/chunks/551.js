exports.id = 551;
exports.ids = [551];
exports.modules = {

/***/ 9725:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./lib/mockLeads.ts
const mockLeads = Array.from({
    length: 30
}, (_, i)=>{
    const c = i % 2 === 0;
    const s = c ? 94 - i % 5 * 6 : 88 - i % 6 * 5;
    const p = s >= 90 ? "Hot" : s >= 70 ? "Strong" : s >= 50 ? "Possible" : "Low";
    const issues = c ? [
        "outdated design",
        "missing online giving",
        "missing sermon page",
        "missing events page"
    ] : [
        "outdated design",
        "not mobile friendly",
        "missing booking CTA",
        "missing reviews section"
    ];
    return {
        id: String(i + 1),
        name: c ? `Grace Community Church ${i + 1}` : `Queen City Service Co ${i + 1}`,
        type: c ? "church" : "small_business",
        category: c ? "Church" : "Local Service Business",
        address: `${100 + i} Main Street`,
        city: i % 3 === 0 ? "Charlotte" : i % 3 === 1 ? "Huntersville" : "Concord",
        state: "NC",
        phone: `704-555-${1000 + i}`,
        website: i % 7 === 0 ? "" : `https://example${i + 1}.com`,
        contactUrl: `https://example${i + 1}.com/contact`,
        email: `contact${i + 1}@example.com`,
        googleRating: 4 + i % 10 / 10,
        websiteIssues: issues.slice(0, 2 + i % 3),
        score: s,
        priority: p,
        recommendedOffer: c ? "Church website: $99 setup + $99/month with giving, sermons, events, ministries, and 5-7 day launch." : "Business website: $150 setup + $99/month with service pages, booking or quote CTA, maps, reviews, and 5-7 day launch.",
        outreachAngle: c ? "Improve visitor trust, giving, sermons, and events." : "Turn more local traffic into calls, quotes, and bookings.",
        status: i % 9 === 0 ? "Booked" : i % 5 === 0 ? "Replied" : i % 4 === 0 ? "Contacted" : "New"
    };
});

;// CONCATENATED MODULE: ./app/dashboard/page.tsx


function m(label, value, note = "") {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "metric-label",
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "metric-value",
                children: value
            }),
            note ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "muted small",
                children: note
            }) : null
        ]
    });
}
function Dashboard() {
    const leads = mockLeads;
    const hot = leads.filter((l)=>l.priority === "Hot").length;
    const strong = leads.filter((l)=>l.priority === "Strong").length;
    const contacted = leads.filter((l)=>[
            "Contacted",
            "Replied",
            "Booked",
            "Closed"
        ].includes(l.status)).length;
    const replied = leads.filter((l)=>[
            "Replied",
            "Booked",
            "Closed"
        ].includes(l.status)).length;
    const booked = leads.filter((l)=>l.status === "Booked").length;
    const closed = leads.filter((l)=>l.status === "Closed").length;
    const mrr = (booked + closed) * 99;
    const setup = leads.filter((l)=>l.priority === "Hot").reduce((a, l)=>a + (l.type === "church" ? 99 : 150), 0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "title",
                        children: "CPTWEBS Lead Engine"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "subtitle",
                        children: "Find, score, and prioritize churches and small businesses that need modern websites, then generate outreach around a free homepage mockup."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "btn",
                                href: "/search",
                                children: "Start lead search"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "btn secondary",
                                href: "/leads",
                                children: "View leads"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "grid metrics",
                children: [
                    m("Total leads", leads.length),
                    m("Hot leads", hot),
                    m("Strong leads", strong),
                    m("Contacted", contacted),
                    m("Replies", replied),
                    m("Booked calls", booked),
                    m("Estimated MRR", `$${mrr}`),
                    m("Hot setup revenue", `$${setup}`)
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "panel-title",
                                children: "Best sales angle"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "muted",
                                children: "Lead with a short website audit, then offer a free homepage mockup. Focus on visitor trust, clear calls to action, online giving for churches, and booking or quote requests for businesses."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "panel-title",
                                children: "Next build phase"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "muted",
                                children: "Connect Google Places, PageSpeed Insights, Supabase, and AI-generated outreach once the MVP is deployed and reviewed."
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;