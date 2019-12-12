var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$": 
        /*!**************************************************!*\
          !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./af": "./node_modules/moment/locale/af.js",
                "./af.js": "./node_modules/moment/locale/af.js",
                "./ar": "./node_modules/moment/locale/ar.js",
                "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
                "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
                "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
                "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
                "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
                "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
                "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
                "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
                "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
                "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
                "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
                "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
                "./ar.js": "./node_modules/moment/locale/ar.js",
                "./az": "./node_modules/moment/locale/az.js",
                "./az.js": "./node_modules/moment/locale/az.js",
                "./be": "./node_modules/moment/locale/be.js",
                "./be.js": "./node_modules/moment/locale/be.js",
                "./bg": "./node_modules/moment/locale/bg.js",
                "./bg.js": "./node_modules/moment/locale/bg.js",
                "./bm": "./node_modules/moment/locale/bm.js",
                "./bm.js": "./node_modules/moment/locale/bm.js",
                "./bn": "./node_modules/moment/locale/bn.js",
                "./bn.js": "./node_modules/moment/locale/bn.js",
                "./bo": "./node_modules/moment/locale/bo.js",
                "./bo.js": "./node_modules/moment/locale/bo.js",
                "./br": "./node_modules/moment/locale/br.js",
                "./br.js": "./node_modules/moment/locale/br.js",
                "./bs": "./node_modules/moment/locale/bs.js",
                "./bs.js": "./node_modules/moment/locale/bs.js",
                "./ca": "./node_modules/moment/locale/ca.js",
                "./ca.js": "./node_modules/moment/locale/ca.js",
                "./cs": "./node_modules/moment/locale/cs.js",
                "./cs.js": "./node_modules/moment/locale/cs.js",
                "./cv": "./node_modules/moment/locale/cv.js",
                "./cv.js": "./node_modules/moment/locale/cv.js",
                "./cy": "./node_modules/moment/locale/cy.js",
                "./cy.js": "./node_modules/moment/locale/cy.js",
                "./da": "./node_modules/moment/locale/da.js",
                "./da.js": "./node_modules/moment/locale/da.js",
                "./de": "./node_modules/moment/locale/de.js",
                "./de-at": "./node_modules/moment/locale/de-at.js",
                "./de-at.js": "./node_modules/moment/locale/de-at.js",
                "./de-ch": "./node_modules/moment/locale/de-ch.js",
                "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
                "./de.js": "./node_modules/moment/locale/de.js",
                "./dv": "./node_modules/moment/locale/dv.js",
                "./dv.js": "./node_modules/moment/locale/dv.js",
                "./el": "./node_modules/moment/locale/el.js",
                "./el.js": "./node_modules/moment/locale/el.js",
                "./en-SG": "./node_modules/moment/locale/en-SG.js",
                "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
                "./en-au": "./node_modules/moment/locale/en-au.js",
                "./en-au.js": "./node_modules/moment/locale/en-au.js",
                "./en-ca": "./node_modules/moment/locale/en-ca.js",
                "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
                "./en-gb": "./node_modules/moment/locale/en-gb.js",
                "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
                "./en-ie": "./node_modules/moment/locale/en-ie.js",
                "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
                "./en-il": "./node_modules/moment/locale/en-il.js",
                "./en-il.js": "./node_modules/moment/locale/en-il.js",
                "./en-nz": "./node_modules/moment/locale/en-nz.js",
                "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
                "./eo": "./node_modules/moment/locale/eo.js",
                "./eo.js": "./node_modules/moment/locale/eo.js",
                "./es": "./node_modules/moment/locale/es.js",
                "./es-do": "./node_modules/moment/locale/es-do.js",
                "./es-do.js": "./node_modules/moment/locale/es-do.js",
                "./es-us": "./node_modules/moment/locale/es-us.js",
                "./es-us.js": "./node_modules/moment/locale/es-us.js",
                "./es.js": "./node_modules/moment/locale/es.js",
                "./et": "./node_modules/moment/locale/et.js",
                "./et.js": "./node_modules/moment/locale/et.js",
                "./eu": "./node_modules/moment/locale/eu.js",
                "./eu.js": "./node_modules/moment/locale/eu.js",
                "./fa": "./node_modules/moment/locale/fa.js",
                "./fa.js": "./node_modules/moment/locale/fa.js",
                "./fi": "./node_modules/moment/locale/fi.js",
                "./fi.js": "./node_modules/moment/locale/fi.js",
                "./fo": "./node_modules/moment/locale/fo.js",
                "./fo.js": "./node_modules/moment/locale/fo.js",
                "./fr": "./node_modules/moment/locale/fr.js",
                "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
                "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
                "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
                "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
                "./fr.js": "./node_modules/moment/locale/fr.js",
                "./fy": "./node_modules/moment/locale/fy.js",
                "./fy.js": "./node_modules/moment/locale/fy.js",
                "./ga": "./node_modules/moment/locale/ga.js",
                "./ga.js": "./node_modules/moment/locale/ga.js",
                "./gd": "./node_modules/moment/locale/gd.js",
                "./gd.js": "./node_modules/moment/locale/gd.js",
                "./gl": "./node_modules/moment/locale/gl.js",
                "./gl.js": "./node_modules/moment/locale/gl.js",
                "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
                "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
                "./gu": "./node_modules/moment/locale/gu.js",
                "./gu.js": "./node_modules/moment/locale/gu.js",
                "./he": "./node_modules/moment/locale/he.js",
                "./he.js": "./node_modules/moment/locale/he.js",
                "./hi": "./node_modules/moment/locale/hi.js",
                "./hi.js": "./node_modules/moment/locale/hi.js",
                "./hr": "./node_modules/moment/locale/hr.js",
                "./hr.js": "./node_modules/moment/locale/hr.js",
                "./hu": "./node_modules/moment/locale/hu.js",
                "./hu.js": "./node_modules/moment/locale/hu.js",
                "./hy-am": "./node_modules/moment/locale/hy-am.js",
                "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
                "./id": "./node_modules/moment/locale/id.js",
                "./id.js": "./node_modules/moment/locale/id.js",
                "./is": "./node_modules/moment/locale/is.js",
                "./is.js": "./node_modules/moment/locale/is.js",
                "./it": "./node_modules/moment/locale/it.js",
                "./it-ch": "./node_modules/moment/locale/it-ch.js",
                "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
                "./it.js": "./node_modules/moment/locale/it.js",
                "./ja": "./node_modules/moment/locale/ja.js",
                "./ja.js": "./node_modules/moment/locale/ja.js",
                "./jv": "./node_modules/moment/locale/jv.js",
                "./jv.js": "./node_modules/moment/locale/jv.js",
                "./ka": "./node_modules/moment/locale/ka.js",
                "./ka.js": "./node_modules/moment/locale/ka.js",
                "./kk": "./node_modules/moment/locale/kk.js",
                "./kk.js": "./node_modules/moment/locale/kk.js",
                "./km": "./node_modules/moment/locale/km.js",
                "./km.js": "./node_modules/moment/locale/km.js",
                "./kn": "./node_modules/moment/locale/kn.js",
                "./kn.js": "./node_modules/moment/locale/kn.js",
                "./ko": "./node_modules/moment/locale/ko.js",
                "./ko.js": "./node_modules/moment/locale/ko.js",
                "./ku": "./node_modules/moment/locale/ku.js",
                "./ku.js": "./node_modules/moment/locale/ku.js",
                "./ky": "./node_modules/moment/locale/ky.js",
                "./ky.js": "./node_modules/moment/locale/ky.js",
                "./lb": "./node_modules/moment/locale/lb.js",
                "./lb.js": "./node_modules/moment/locale/lb.js",
                "./lo": "./node_modules/moment/locale/lo.js",
                "./lo.js": "./node_modules/moment/locale/lo.js",
                "./lt": "./node_modules/moment/locale/lt.js",
                "./lt.js": "./node_modules/moment/locale/lt.js",
                "./lv": "./node_modules/moment/locale/lv.js",
                "./lv.js": "./node_modules/moment/locale/lv.js",
                "./me": "./node_modules/moment/locale/me.js",
                "./me.js": "./node_modules/moment/locale/me.js",
                "./mi": "./node_modules/moment/locale/mi.js",
                "./mi.js": "./node_modules/moment/locale/mi.js",
                "./mk": "./node_modules/moment/locale/mk.js",
                "./mk.js": "./node_modules/moment/locale/mk.js",
                "./ml": "./node_modules/moment/locale/ml.js",
                "./ml.js": "./node_modules/moment/locale/ml.js",
                "./mn": "./node_modules/moment/locale/mn.js",
                "./mn.js": "./node_modules/moment/locale/mn.js",
                "./mr": "./node_modules/moment/locale/mr.js",
                "./mr.js": "./node_modules/moment/locale/mr.js",
                "./ms": "./node_modules/moment/locale/ms.js",
                "./ms-my": "./node_modules/moment/locale/ms-my.js",
                "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
                "./ms.js": "./node_modules/moment/locale/ms.js",
                "./mt": "./node_modules/moment/locale/mt.js",
                "./mt.js": "./node_modules/moment/locale/mt.js",
                "./my": "./node_modules/moment/locale/my.js",
                "./my.js": "./node_modules/moment/locale/my.js",
                "./nb": "./node_modules/moment/locale/nb.js",
                "./nb.js": "./node_modules/moment/locale/nb.js",
                "./ne": "./node_modules/moment/locale/ne.js",
                "./ne.js": "./node_modules/moment/locale/ne.js",
                "./nl": "./node_modules/moment/locale/nl.js",
                "./nl-be": "./node_modules/moment/locale/nl-be.js",
                "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
                "./nl.js": "./node_modules/moment/locale/nl.js",
                "./nn": "./node_modules/moment/locale/nn.js",
                "./nn.js": "./node_modules/moment/locale/nn.js",
                "./pa-in": "./node_modules/moment/locale/pa-in.js",
                "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
                "./pl": "./node_modules/moment/locale/pl.js",
                "./pl.js": "./node_modules/moment/locale/pl.js",
                "./pt": "./node_modules/moment/locale/pt.js",
                "./pt-br": "./node_modules/moment/locale/pt-br.js",
                "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
                "./pt.js": "./node_modules/moment/locale/pt.js",
                "./ro": "./node_modules/moment/locale/ro.js",
                "./ro.js": "./node_modules/moment/locale/ro.js",
                "./ru": "./node_modules/moment/locale/ru.js",
                "./ru.js": "./node_modules/moment/locale/ru.js",
                "./sd": "./node_modules/moment/locale/sd.js",
                "./sd.js": "./node_modules/moment/locale/sd.js",
                "./se": "./node_modules/moment/locale/se.js",
                "./se.js": "./node_modules/moment/locale/se.js",
                "./si": "./node_modules/moment/locale/si.js",
                "./si.js": "./node_modules/moment/locale/si.js",
                "./sk": "./node_modules/moment/locale/sk.js",
                "./sk.js": "./node_modules/moment/locale/sk.js",
                "./sl": "./node_modules/moment/locale/sl.js",
                "./sl.js": "./node_modules/moment/locale/sl.js",
                "./sq": "./node_modules/moment/locale/sq.js",
                "./sq.js": "./node_modules/moment/locale/sq.js",
                "./sr": "./node_modules/moment/locale/sr.js",
                "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
                "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
                "./sr.js": "./node_modules/moment/locale/sr.js",
                "./ss": "./node_modules/moment/locale/ss.js",
                "./ss.js": "./node_modules/moment/locale/ss.js",
                "./sv": "./node_modules/moment/locale/sv.js",
                "./sv.js": "./node_modules/moment/locale/sv.js",
                "./sw": "./node_modules/moment/locale/sw.js",
                "./sw.js": "./node_modules/moment/locale/sw.js",
                "./ta": "./node_modules/moment/locale/ta.js",
                "./ta.js": "./node_modules/moment/locale/ta.js",
                "./te": "./node_modules/moment/locale/te.js",
                "./te.js": "./node_modules/moment/locale/te.js",
                "./tet": "./node_modules/moment/locale/tet.js",
                "./tet.js": "./node_modules/moment/locale/tet.js",
                "./tg": "./node_modules/moment/locale/tg.js",
                "./tg.js": "./node_modules/moment/locale/tg.js",
                "./th": "./node_modules/moment/locale/th.js",
                "./th.js": "./node_modules/moment/locale/th.js",
                "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
                "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
                "./tlh": "./node_modules/moment/locale/tlh.js",
                "./tlh.js": "./node_modules/moment/locale/tlh.js",
                "./tr": "./node_modules/moment/locale/tr.js",
                "./tr.js": "./node_modules/moment/locale/tr.js",
                "./tzl": "./node_modules/moment/locale/tzl.js",
                "./tzl.js": "./node_modules/moment/locale/tzl.js",
                "./tzm": "./node_modules/moment/locale/tzm.js",
                "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
                "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
                "./tzm.js": "./node_modules/moment/locale/tzm.js",
                "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
                "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
                "./uk": "./node_modules/moment/locale/uk.js",
                "./uk.js": "./node_modules/moment/locale/uk.js",
                "./ur": "./node_modules/moment/locale/ur.js",
                "./ur.js": "./node_modules/moment/locale/ur.js",
                "./uz": "./node_modules/moment/locale/uz.js",
                "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
                "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
                "./uz.js": "./node_modules/moment/locale/uz.js",
                "./vi": "./node_modules/moment/locale/vi.js",
                "./vi.js": "./node_modules/moment/locale/vi.js",
                "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
                "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
                "./yo": "./node_modules/moment/locale/yo.js",
                "./yo.js": "./node_modules/moment/locale/yo.js",
                "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
                "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
                "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
                "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
                "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
                "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
            };
            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }
                return map[req];
            }
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <mat-toolbar-row>\n    <h1 class=\"header-logo\"> Cinephile </h1>\n    <span class=\"menu-spacer\"></span>\n    <div>\n      <a mat-button [routerLink]=\"'/top-list'\"> Top 20 </a>\n      <a mat-button [routerLink]=\"'/chart'\"> Chart </a>\n      <a mat-button [routerLink]=\"'/my-choice'\"> My choice </a>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chart/chart.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chart/chart.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-loading [show]=\"loading\"></app-loading>\n<div *ngIf=\"!loading\" class=\"chart\">\n  <canvas baseChart\n          [data]=\"pieChartData\"\n          [labels]=\"pieChartLabels\"\n          [chartType]=\"pieChartType\"\n          [options]=\"pieChartOptions\"\n          [plugins]=\"pieChartPlugins\"\n          [colors]=\"pieChartColors\"\n          [legend]=\"pieChartLegend\">\n  </canvas>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/liked/liked.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/liked/liked.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"liked-list-component\">\n  <h3>My choice</h3>\n  <app-movie-card *ngFor=\"let movie of movies\"\n                  [movie] = 'movie'\n                  (setLikeMovie)=\"removeFromLiked($event)\"></app-movie-card>\n  <div *ngIf=\"!movies.length\"><strong>You have not chosen any movie yet</strong></div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>404</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/top-list/top-list.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/top-list/top-list.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-loading [show]=\"loading\"></app-loading>\n<section *ngIf=\"!loading\" class=\"top-list-component\">\n  <h3>Top 20</h3>\n  <app-movie-card *ngFor=\"let movie of movies\"\n                  [movie] = 'movie'\n                  (setLikeMovie)=\"setLike($event)\"></app-movie-card>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-spinner *ngIf=\"show\" class=\"loader\" mode=\"indeterminate\"></mat-progress-spinner>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/movie-card/movie-card.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/movie-card/movie-card.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"movie-card\">\n  <div class=\"img-holder\">\n    <img [src]=\"movie.urlPoster\" height=\"268\" width=\"182\" alt=\"\">\n  </div>\n  <div class=\"description-holder\">\n    <h3> {{ movie.title }}</h3>\n    <p> year  <strong>{{ movie.year }}</strong></p>\n    <p> IMDB rating <strong>{{ movie.rating }}</strong></p>\n    <p> genre <strong>\n      <span *ngFor=\"let genre of movie.genres; let last = last\"> {{ genre }}\n      <span *ngIf=\"!last\">,</span></span></strong></p>\n    <p> country\n      <strong>\n        <span *ngFor=\"let country of movie.countries; let last = last\"> {{ country }}\n        <span *ngIf=\"!last\">,</span></span></strong> </p>\n    <p> director\n      <strong>\n        <span *ngFor=\"let director of movie.directors; let last = last\">\n        <a routerLink=\".\" (click)=\"openDirectorPage(director.id)\">{{ director.name }} </a>\n        <span *ngIf=\"!last\">,</span>\n      </span></strong></p>\n    <button mat-raised-button\n            color=\"primary\"\n            (click)=\"getTrailer(movie.title)\">Trailer</button>\n  </div>\n  <div class=\"like-button-holder\">\n    <button mat-icon-button\n            [color]=\"likedColor\"\n            (click)=\"setLike(likedStatus, movie)\"\n            aria-label=\"Example icon-button with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _pages_liked_liked_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/liked/liked.component */ "./src/app/pages/liked/liked.component.ts");
            /* harmony import */ var _pages_top_list_top_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/top-list/top-list.component */ "./src/app/pages/top-list/top-list.component.ts");
            /* harmony import */ var _pages_chart_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/chart/chart.component */ "./src/app/pages/chart/chart.component.ts");
            var routes = [
                { path: 'top-list', component: _pages_top_list_top_list_component__WEBPACK_IMPORTED_MODULE_5__["TopListComponent"] },
                { path: 'chart', component: _pages_chart_chart_component__WEBPACK_IMPORTED_MODULE_6__["ChartComponent"] },
                { path: 'my-choice', component: _pages_liked_liked_component__WEBPACK_IMPORTED_MODULE_4__["LikedComponent"] },
                { path: '', redirectTo: 'top-list', pathMatch: 'full' },
                { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'cinephile-app';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
            /* harmony import */ var _shared_components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/movie-card/movie-card.component */ "./src/app/shared/components/movie-card/movie-card.component.ts");
            /* harmony import */ var _pages_chart_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/chart/chart.component */ "./src/app/pages/chart/chart.component.ts");
            /* harmony import */ var _pages_top_list_top_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/top-list/top-list.component */ "./src/app/pages/top-list/top-list.component.ts");
            /* harmony import */ var _pages_liked_liked_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/liked/liked.component */ "./src/app/pages/liked/liked.component.ts");
            /* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
            /* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _core_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                        _shared_components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_6__["MovieCardComponent"],
                        _pages_chart_chart_component__WEBPACK_IMPORTED_MODULE_7__["ChartComponent"],
                        _pages_top_list_top_list_component__WEBPACK_IMPORTED_MODULE_8__["TopListComponent"],
                        _pages_liked_liked_component__WEBPACK_IMPORTED_MODULE_9__["LikedComponent"],
                        _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                        _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                        ng2_charts__WEBPACK_IMPORTED_MODULE_14__["ChartsModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot()
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/core/header/header.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/core/header/header.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h1.header-logo {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL2cvY2luZXBoaWxlLWFwcC9zcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEuaGVhZGVyLWxvZ28ge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4iLCJoMS5oZWFkZXItbG9nbyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/core/header/header.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/core/header/header.component.ts ***!
          \*************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/core/http/api.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/core/http/api.service.ts ***!
          \******************************************/
        /*! exports provided: ApiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function () { return ApiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _models_movie_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/movie.model */ "./src/app/core/models/movie.model.ts");
            var endpoint = 'https://www.myapifilms.com/';
            var token = '1a829fc2-bb62-4e96-b6cb-ddf49ebc6039';
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }),
            };
            var ApiService = /** @class */ (function () {
                function ApiService(http) {
                    this.http = http;
                }
                ApiService.prototype.extractData = function (response) {
                    return response || {};
                };
                ApiService.prototype.extractMovies = function (data) {
                    return lodash__WEBPACK_IMPORTED_MODULE_4__["get"](data, 'data.movies', []);
                };
                ApiService.prototype.getTopMovies = function (full) {
                    if (full === void 0) { full = false; }
                    var isFull = full ? '1' : '0';
                    var httpParams = {
                        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                            .set('end', '20')
                            .set('format', 'json')
                            .set('data', isFull)
                            .set('token', token)
                    };
                    return this.http.get(endpoint + "imdb/top", Object.assign({}, httpOptions, httpParams)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractMovies), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.map(function (movie) { return new _models_movie_model__WEBPACK_IMPORTED_MODULE_5__["Movie"]().deserialize(movie); }); }));
                };
                ApiService.prototype.getTrailer = function (filmTitle) {
                    var httpParams = {
                        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                            .set('count', '8')
                            .set('credit', '')
                            .set('format', 'json')
                            .set('token', token)
                            .set('film', filmTitle)
                    };
                    return this.http.get(endpoint + "/trailerAddict/taapi", Object.assign({}, httpOptions, httpParams)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
                };
                return ApiService;
            }());
            ApiService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ApiService);
            /***/ 
        }),
        /***/ "./src/app/core/models/movie.model.ts": 
        /*!********************************************!*\
          !*** ./src/app/core/models/movie.model.ts ***!
          \********************************************/
        /*! exports provided: Movie */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function () { return Movie; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Movie = /** @class */ (function () {
                function Movie() {
                }
                Movie.prototype.deserialize = function (input) {
                    // noinspection TypeScriptValidateTypes
                    Object.assign(this, input);
                    return this;
                };
                return Movie;
            }());
            /***/ 
        }),
        /***/ "./src/app/core/services/liked-movie-store.service.ts": 
        /*!************************************************************!*\
          !*** ./src/app/core/services/liked-movie-store.service.ts ***!
          \************************************************************/
        /*! exports provided: LikedMovieStoreService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedMovieStoreService", function () { return LikedMovieStoreService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
            var LikedMovieStoreService = /** @class */ (function () {
                function LikedMovieStoreService() {
                    this.moviesSubj = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
                    this.$movies = this.moviesSubj.asObservable();
                    this.storageKey = 'my-liked-movies-from-imdb';
                    this.movies = lodash__WEBPACK_IMPORTED_MODULE_3__["compact"](this.getLikedMoviesFromLocalStorage());
                }
                LikedMovieStoreService.prototype.getLikedMoviesFromLocalStorage = function () {
                    return JSON.parse(localStorage.getItem(this.storageKey)) || [];
                };
                LikedMovieStoreService.prototype.setLikedMoviesToLocalStorage = function (movies) {
                    localStorage.setItem(this.storageKey, JSON.stringify(movies));
                };
                Object.defineProperty(LikedMovieStoreService.prototype, "movies", {
                    get: function () {
                        return this.moviesSubj.getValue();
                    },
                    set: function (val) {
                        this.moviesSubj.next(val);
                    },
                    enumerable: true,
                    configurable: true
                });
                LikedMovieStoreService.prototype.addMovieToLiked = function (movie) {
                    this.movies = __spread(this.movies, [
                        movie
                    ]);
                    this.setLikedMoviesToLocalStorage(this.movies);
                };
                LikedMovieStoreService.prototype.removeMovieFromLiked = function (removedMovie) {
                    this.movies = this.movies.filter(function (movie) { return movie.idIMDB !== removedMovie.idIMDB; });
                    this.setLikedMoviesToLocalStorage(this.movies);
                };
                return LikedMovieStoreService;
            }());
            LikedMovieStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LikedMovieStoreService);
            /***/ 
        }),
        /***/ "./src/app/pages/chart/chart.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/pages/chart/chart.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/chart/chart.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/pages/chart/chart.component.ts ***!
          \************************************************/
        /*! exports provided: ChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function () { return ChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
            /* harmony import */ var _core_http_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/http/api.service */ "./src/app/core/http/api.service.ts");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
            var ChartComponent = /** @class */ (function () {
                function ChartComponent(api) {
                    this.api = api;
                    // Pie chart
                    this.pieChartLabels = [];
                    this.pieChartData = [];
                    this.pieChartType = 'pie';
                    this.pieChartLegend = true;
                    this.pieChartPlugins = [];
                    this.pieChartOptions = {
                        responsive: true,
                    };
                    Object(ng2_charts__WEBPACK_IMPORTED_MODULE_2__["monkeyPatchChartJsTooltip"])();
                    Object(ng2_charts__WEBPACK_IMPORTED_MODULE_2__["monkeyPatchChartJsLegend"])();
                }
                ChartComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loading = true;
                    this.api.getTopMovies()
                        .subscribe(function (movies) {
                        var years = lodash__WEBPACK_IMPORTED_MODULE_4__["map"](movies, function (movie) { return movie.year; });
                        var gropedYears = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](years, function (year) { return year.slice(0, -1); });
                        _this.pieChartLabels = lodash__WEBPACK_IMPORTED_MODULE_4__["map"](lodash__WEBPACK_IMPORTED_MODULE_4__["keys"](gropedYears), function (year) { return year + 'Ox'; });
                        _this.pieChartData = lodash__WEBPACK_IMPORTED_MODULE_4__["map"](lodash__WEBPACK_IMPORTED_MODULE_4__["values"](gropedYears), function (yearsArr) { return yearsArr.length; });
                        _this.loading = false;
                    });
                };
                return ChartComponent;
            }());
            ChartComponent.ctorParameters = function () { return [
                { type: _core_http_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chart/chart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chart.component.scss */ "./src/app/pages/chart/chart.component.scss")).default]
                })
            ], ChartComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/liked/liked.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/pages/liked/liked.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".liked-list-component {\n  margin: 0 auto;\n  padding: 0 20px;\n  max-width: 1000px;\n}\n.liked-list-component .movie-card-holder {\n  display: block;\n  margin: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL2cvY2luZXBoaWxlLWFwcC9zcmMvYXBwL3BhZ2VzL2xpa2VkL2xpa2VkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9saWtlZC9saWtlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpa2VkL2xpa2VkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpa2VkLWxpc3QtY29tcG9uZW50IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG5cbiAgLm1vdmllLWNhcmQtaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxufVxuIiwiLmxpa2VkLWxpc3QtY29tcG9uZW50IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG59XG4ubGlrZWQtbGlzdC1jb21wb25lbnQgLm1vdmllLWNhcmQtaG9sZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTVweCAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/liked/liked.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/pages/liked/liked.component.ts ***!
          \************************************************/
        /*! exports provided: LikedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedComponent", function () { return LikedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_services_liked_movie_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/liked-movie-store.service */ "./src/app/core/services/liked-movie-store.service.ts");
            var LikedComponent = /** @class */ (function () {
                function LikedComponent(movieStore) {
                    this.movieStore = movieStore;
                }
                LikedComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.movieStore.$movies
                        .subscribe(function (data) {
                        _this.movies = data;
                    });
                };
                LikedComponent.prototype.removeFromLiked = function (_a) {
                    var _b = __read(_a, 2), status = _b[0], movie = _b[1];
                    if (!status) {
                        this.movieStore.removeMovieFromLiked(movie);
                    }
                };
                return LikedComponent;
            }());
            LikedComponent.ctorParameters = function () { return [
                { type: _core_services_liked_movie_store_service__WEBPACK_IMPORTED_MODULE_2__["LikedMovieStoreService"] }
            ]; };
            LikedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-liked',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./liked.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/liked/liked.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./liked.component.scss */ "./src/app/pages/liked/liked.component.scss")).default]
                })
            ], LikedComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/page-not-found/page-not-found.component.scss": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/page-not-found/page-not-found.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
          \******************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/top-list/top-list.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/pages/top-list/top-list.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".top-list-component {\n  margin: 0 auto;\n  padding: 0 20px;\n  max-width: 1000px;\n}\n.top-list-component .movie-card-holder {\n  display: block;\n  margin: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL2cvY2luZXBoaWxlLWFwcC9zcmMvYXBwL3BhZ2VzL3RvcC1saXN0L3RvcC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90b3AtbGlzdC90b3AtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvcC1saXN0L3RvcC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1saXN0LWNvbXBvbmVudCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuXG4gIC5tb3ZpZS1jYXJkLWhvbGRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gIH1cbn1cbiIsIi50b3AtbGlzdC1jb21wb25lbnQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cbi50b3AtbGlzdC1jb21wb25lbnQgLm1vdmllLWNhcmQtaG9sZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTVweCAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/top-list/top-list.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/pages/top-list/top-list.component.ts ***!
          \******************************************************/
        /*! exports provided: TopListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopListComponent", function () { return TopListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_http_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/api.service */ "./src/app/core/http/api.service.ts");
            /* harmony import */ var _core_services_liked_movie_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/liked-movie-store.service */ "./src/app/core/services/liked-movie-store.service.ts");
            var TopListComponent = /** @class */ (function () {
                function TopListComponent(api, movieStore) {
                    this.api = api;
                    this.movieStore = movieStore;
                }
                TopListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var isFull = true;
                    this.loading = true;
                    this.api.getTopMovies(isFull)
                        .subscribe(function (movies) {
                        _this.movies = movies || [];
                    }, function (error) { }, function () {
                        _this.loading = false;
                    });
                };
                TopListComponent.prototype.setLike = function (_a) {
                    var _b = __read(_a, 2), status = _b[0], movie = _b[1];
                    if (status) {
                        this.movieStore.addMovieToLiked(movie);
                    }
                    else {
                        this.movieStore.removeMovieFromLiked(movie);
                    }
                };
                return TopListComponent;
            }());
            TopListComponent.ctorParameters = function () { return [
                { type: _core_http_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _core_services_liked_movie_store_service__WEBPACK_IMPORTED_MODULE_3__["LikedMovieStoreService"] }
            ]; };
            TopListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-top-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/top-list/top-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-list.component.scss */ "./src/app/pages/top-list/top-list.component.scss")).default]
                })
            ], TopListComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/loading/loading.component.scss": 
        /*!******************************************************************!*\
          !*** ./src/app/shared/components/loading/loading.component.scss ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".loader {\n  position: absolute;\n  top: calc(50% - 50px);\n  left: calc(50% - 50px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL2cvY2luZXBoaWxlLWFwcC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XG59XG4iLCIubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/loading/loading.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/components/loading/loading.component.ts ***!
          \****************************************************************/
        /*! exports provided: LoadingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () { return LoadingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoadingComponent = /** @class */ (function () {
                function LoadingComponent() {
                }
                LoadingComponent.prototype.ngOnInit = function () {
                };
                return LoadingComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LoadingComponent.prototype, "show", void 0);
            LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loading',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/components/loading/loading.component.scss")).default]
                })
            ], LoadingComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/movie-card/movie-card.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/shared/components/movie-card/movie-card.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".movie-card {\n  display: flex;\n  position: relative;\n  border: 1px solid black;\n}\n.movie-card .img-holder {\n  padding: 5px;\n}\n.movie-card .description-holder {\n  padding: 5px 10px;\n}\n.movie-card .description-holder p {\n  margin: 0.5em 0;\n}\n.movie-card .like-button-holder {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL2cvY2luZXBoaWxlLWFwcC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vdmllLWNhcmQvbW92aWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW92aWUtY2FyZC9tb3ZpZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREdFO0VBQ0UsWUFBQTtBQ0RKO0FESUU7RUFDRSxpQkFBQTtBQ0ZKO0FESUk7RUFDRSxlQUFBO0FDRk47QURNRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vdmllLWNhcmQvbW92aWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgLy9tYXgtd2lkdGg6IDEwMDBweDtcbiAgLy9tYXJnaW46IDEwcHggYXV0bztcblxuICAuaW1nLWhvbGRlciB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uLWhvbGRlciB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMC41ZW0gMDtcbiAgICB9XG4gIH1cblxuICAubGlrZS1idXR0b24taG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4iLCIubW92aWUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4ubW92aWUtY2FyZCAuaW1nLWhvbGRlciB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tb3ZpZS1jYXJkIC5kZXNjcmlwdGlvbi1ob2xkZXIge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5tb3ZpZS1jYXJkIC5kZXNjcmlwdGlvbi1ob2xkZXIgcCB7XG4gIG1hcmdpbjogMC41ZW0gMDtcbn1cbi5tb3ZpZS1jYXJkIC5saWtlLWJ1dHRvbi1ob2xkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/movie-card/movie-card.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/components/movie-card/movie-card.component.ts ***!
          \**********************************************************************/
        /*! exports provided: MovieCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function () { return MovieCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_http_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/api.service */ "./src/app/core/http/api.service.ts");
            /* harmony import */ var _core_services_liked_movie_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/liked-movie-store.service */ "./src/app/core/services/liked-movie-store.service.ts");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var MovieCardComponent = /** @class */ (function () {
                function MovieCardComponent(api, movieStore, toastr) {
                    this.api = api;
                    this.movieStore = movieStore;
                    this.toastr = toastr;
                    this.movieCardHolder = true;
                    this.setLikeMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.IMDBPath = 'https://www.imdb.com/name/';
                }
                MovieCardComponent.prototype.ngOnInit = function () {
                    var idIMDB = this.movie.idIMDB;
                    var likedMovies = this.movieStore.movies;
                    var status = !!lodash__WEBPACK_IMPORTED_MODULE_4__["find"](likedMovies, { idIMDB: idIMDB });
                    this.showLike(status);
                };
                MovieCardComponent.prototype.openDirectorPage = function (directorId) {
                    window.open("" + this.IMDBPath + directorId + "/");
                };
                MovieCardComponent.prototype.setLike = function (oldStatus, item) {
                    var status = !oldStatus;
                    this.showLike(status);
                    this.setLikeMovie.emit([status, item]);
                };
                MovieCardComponent.prototype.showLike = function (status) {
                    this.likedStatus = status;
                    this.likedColor = status ? 'warn' : '';
                };
                MovieCardComponent.prototype.getTrailer = function (title) {
                    var _this = this;
                    this.api.getTrailer(title)
                        .subscribe(function (data) {
                        _this.showTrailer(data);
                    });
                };
                MovieCardComponent.prototype.showTrailer = function (message) {
                    console.log(message);
                    if (message.error) {
                        this.toastr.info("Code: " + message.error.code, "Message: " + message.error.message);
                        return;
                    }
                };
                return MovieCardComponent;
            }());
            MovieCardComponent.ctorParameters = function () { return [
                { type: _core_http_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _core_services_liked_movie_store_service__WEBPACK_IMPORTED_MODULE_3__["LikedMovieStoreService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.movie-card-holder')
            ], MovieCardComponent.prototype, "movieCardHolder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MovieCardComponent.prototype, "movie", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], MovieCardComponent.prototype, "setLikeMovie", void 0);
            MovieCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-movie-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/movie-card/movie-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-card.component.scss */ "./src/app/shared/components/movie-card/movie-card.component.scss")).default]
                })
            ], MovieCardComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/user/g/cinephile-app/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map