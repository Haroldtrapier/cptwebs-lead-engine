exports.id = 177;
exports.ids = [177];
exports.modules = {

/***/ 3046:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 6936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ mockLeads)
/* harmony export */ });
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


/***/ })

};
;