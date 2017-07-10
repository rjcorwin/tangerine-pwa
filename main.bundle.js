webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        children: []
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    height: 1300px;\n}\n.sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.sidenav {\n  padding: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-sidenav-container class=\"container\">\n  <md-sidenav #sidenav class=\"sidenav\">\n    <ul>\n      <li>\n        <a routerLink=\"binder-example\">Binder Example</a>\n      </li>\n      <li>\n        <a routerLink=\"create-nodes\">Create Nodes</a>\n      </li>\n      <li>\n        <a routerLink=\"create-location\">Create Location</a>\n      </li>\n      <li>\n        <a routerLink=\"create-group\">Create Group</a>\n      </li>\n      <li>\n        <a routerLink=\"tangerine-form-card-demo\">Tangerine Form Card Demo</a>\n      </li>\n      <li>\n        <a routerLink=\"tangerine-forms-demo\">Tangerine Forms Demo</a>\n      </li>\n      <li>\n        <a routerLink=\"tangerine-form-resume-demo\">Tangerine Form Session Resumed Demo </a>\n      </li>\n      <li>\n        <a routerLink=\"eftouch-demo\">EFTouch Demo</a>\n      </li>\n    </ul>\n  </md-sidenav>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" md-button (click)=\"sidenav.open()\">\n      Open sidenav\n    </button>\n  </div>\n\n\n\n<md-toolbar>\n  <h1>\n    {{title}}\n  </h1>\n</md-toolbar>\n\n<router-outlet></router-outlet>\n\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_window_ref_service__ = __webpack_require__("../../../../../src/app/core/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pouchdb__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(windowRef) {
        this.title = 'Tangerine Client v3.x.x';
        windowRef.nativeWindow.PouchDB = __WEBPACK_IMPORTED_MODULE_2_pouchdb__;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_window_ref_service__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_window_ref_service__["a" /* WindowRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_window_ref_service__ = __webpack_require__("../../../../../src/app/core/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_binder_ng_binder_module__ = __webpack_require__("../../../../../src/app/ng-binder/ng-binder.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_manager_node_manager_module__ = __webpack_require__("../../../../../src/app/node-manager/node-manager.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tangerine_forms_tangerine_forms_module__ = __webpack_require__("../../../../../src/app/tangerine-forms/tangerine-forms.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* unused harmony reexport AppComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_binder_ng_binder_module__["a" /* NgBinderModule */],
            __WEBPACK_IMPORTED_MODULE_12__tangerine_forms_tangerine_forms_module__["a" /* TangerineFormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__node_manager_node_manager_module__["a" /* NodeManagerModule */],
            __WEBPACK_IMPORTED_MODULE_13__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__core_window_ref_service__["a" /* WindowRef */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pouchdb__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var DataService = (function () {
    function DataService() {
        this.DB = new __WEBPACK_IMPORTED_MODULE_1_pouchdb__('locations');
    }
    DataService.prototype.getParentNodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.DB.allDocs({
                                include_docs: true
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.rows];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DataService.prototype.createNode = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.DB.post(node)];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/window-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], WindowRef);

//# sourceMappingURL=window-ref.service.js.map

/***/ }),

/***/ "../../../../../src/app/ng-binder/binder-example/binder-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ng-binder/binder-example/binder-example.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-binder [config]=\"binderConfig\" (binderDone)=\"onBinderDone($event)\"></app-binder>\n\n<div *ngIf=\"result\">\n  <h2>Result</h2>\n  <textarea rows=10 cols=80>{{result | json}}</textarea>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ng-binder/binder-example/binder-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinderExampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BinderExampleComponent = (function () {
    function BinderExampleComponent() {
        this.name = 'Tangerine Form Demo';
        this.binderConfig = {
            _id: '43a883f3-9277-42ec-b93b-f037b8a3da4a',
            _rev: '1-045b5094-e6c8-4603-8c12-f909eae744de',
            name: 'Binder for School Observations Spreadsheet v3',
            collection: 'Binder',
            status: 'published',
            spreadsheetId: 'ced3aca4-3101-11e7-93ae-92361f002671',
            spreadsheetRevision: 'ced3aca4-3101-11e7-93ae-92361f002671',
            spreadsheetSchemaId: 'dd74f132-3101-11e7-93ae-92361f002671',
            children: [
                {
                    _id: 'one',
                    collection: 'section',
                    name: 'Section 1: Car Surveys',
                    stopwatch: true,
                    time_limit: '5 minutes',
                    code: 'function(event, variables, scope, callback) { ... }',
                    declarations: [],
                    imports: [],
                    repeatable: true,
                    sheetName: 'Student Observations for English P2',
                    columnName: 'Student Observations for English P2',
                    repeatN: 3,
                    forkable: true,
                    children: [
                        {
                            _id: 'oneA',
                            collection: 'section',
                            name: 'Section 1a: Cars',
                            stopwatch: true,
                            time_limit: '5 minutes',
                            code: 'function(event, variables, scope, callback) { ... }',
                            declarations: [],
                            imports: [],
                            repeatable: true,
                            sheetName: 'Student Observations for English P2',
                            columnName: 'Student Observations for English P2',
                            repeatN: 3,
                            forkable: true,
                            children: [
                                {
                                    _id: '1',
                                    name: 'Car Engines',
                                    collection: 'Page',
                                    columnNames: ['Column Name 1', 'Column Name 2'],
                                    config: [
                                        {
                                            questionClass: 'DropdownQuestion',
                                            key: 'car_engine_favorite',
                                            label: 'What is your favorite type of engine?',
                                            options: [
                                                { key: 'electric', value: 'Electric' },
                                                { key: 'diesel', value: 'Diesel' },
                                                { key: 'gasoline', value: 'Gasoline' }
                                            ],
                                            order: 1
                                        },
                                        {
                                            questionClass: 'TextboxQuestion',
                                            key: 'car_engine_name',
                                            label: 'What was the name of your favorite engine?',
                                            value: '',
                                            required: true,
                                            order: 2
                                        }
                                    ]
                                },
                                {
                                    _id: '2',
                                    name: 'Car Colors',
                                    collection: 'Page',
                                    columnNames: ['Column Name 1', 'Column Name 2'],
                                    config: [
                                        {
                                            questionClass: 'DropdownQuestion',
                                            key: 'car_color_favorite',
                                            label: 'What your favorite color of car?',
                                            options: [
                                                { key: 'blue', value: 'Blue' },
                                                { key: 'green', value: 'Green' },
                                                { key: 'yellow', value: 'Yellow' },
                                                { key: 'red', value: 'Red' }
                                            ],
                                            order: 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            _id: 'oneB',
                            collection: 'section',
                            name: 'Section 1b: Boats',
                            stopwatch: true,
                            time_limit: '5 minutes',
                            code: 'function(event, variables, scope, callback) { ... }',
                            declarations: [],
                            imports: [],
                            repeatable: true,
                            sheetName: 'Student Observations for English P2',
                            columnName: 'Student Observations for English P2',
                            repeatN: 3,
                            forkable: true,
                            children: [
                                {
                                    _id: '1',
                                    name: 'Boat Engines',
                                    collection: 'Page',
                                    columnNames: ['Column Name 1', 'Column Name 2'],
                                    config: [
                                        {
                                            questionClass: 'DropdownQuestion',
                                            key: 'boat_engine_favorite',
                                            label: 'What is your favorite type of engine?',
                                            options: [
                                                { key: 'electric', value: 'Electric' },
                                                { key: 'diesel', value: 'Diesel' },
                                                { key: 'gasoline', value: 'Gasoline' }
                                            ],
                                            order: 1
                                        },
                                        {
                                            questionClass: 'TextboxQuestion',
                                            key: 'boat_engine_name',
                                            label: 'What was the name of your favorite engine?',
                                            value: '',
                                            required: true,
                                            order: 2
                                        }
                                    ]
                                },
                                {
                                    _id: '2',
                                    name: 'Car Colors',
                                    collection: 'Page',
                                    columnNames: ['Column Name 1', 'Column Name 2'],
                                    config: [
                                        {
                                            questionClass: 'DropdownQuestion',
                                            key: 'boat_color_favorite',
                                            label: 'What your favorite color of boat?',
                                            options: [
                                                { key: 'blue', value: 'Blue' },
                                                { key: 'green', value: 'Green' },
                                                { key: 'yellow', value: 'Yellow' },
                                                { key: 'red', value: 'Red' }
                                            ],
                                            order: 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    _id: 'b',
                    collection: 'section',
                    name: 'Section 2: Binders and Cats',
                    stopwatch: true,
                    time_limit: '5 minutes',
                    code: 'function(event, variables, scope, callback) { ... }',
                    declarations: [],
                    imports: [],
                    repeatable: true,
                    sheetName: 'Student Observations for English P3',
                    columnName: 'Student Observations for English P3',
                    repeatN: 3,
                    forkable: true,
                    children: [
                        {
                            _id: '3',
                            name: 'Page 1',
                            collection: 'Page',
                            columnNames: ['Column Name 1', 'Column Name 2'],
                            config: [
                                {
                                    questionClass: 'DropdownQuestion',
                                    key: 'binder_opinion',
                                    label: 'What do you think of binders?',
                                    options: [
                                        { key: 'solid', value: 'Solid' },
                                        { key: 'great', value: 'Great' },
                                        { key: 'good', value: 'Good' },
                                        { key: 'unproven', value: 'Unproven' }
                                    ],
                                    order: 1
                                },
                                {
                                    questionClass: 'TextboxQuestion',
                                    key: 'favorite_binder',
                                    label: 'What was the name of your favorite binder?',
                                    value: '',
                                    required: true,
                                    order: 2
                                }
                            ]
                        },
                        {
                            _id: '4',
                            name: 'Page 2',
                            collection: 'Page',
                            columnNames: ['Column Name 1', 'Column Name 2'],
                            config: [
                                {
                                    questionClass: 'DropdownQuestion',
                                    key: 'cat_opinion',
                                    label: 'What do you think of cats?',
                                    options: [
                                        { key: 'solid', value: 'Solid' },
                                        { key: 'great', value: 'Great' },
                                        { key: 'good', value: 'Good' },
                                        { key: 'unproven', value: 'Unproven' }
                                    ],
                                    order: 1
                                },
                                {
                                    questionClass: 'TextboxQuestion',
                                    key: 'favorite_cat',
                                    label: 'What was the name of your favorite cat?',
                                    value: '',
                                    required: true,
                                    order: 2
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
    BinderExampleComponent.prototype.onBinderDone = function (data) {
        this.result = data;
        console.log(data);
    };
    return BinderExampleComponent;
}());
BinderExampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-binder-example',
        template: __webpack_require__("../../../../../src/app/ng-binder/binder-example/binder-example.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ng-binder/binder-example/binder-example.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BinderExampleComponent);

//# sourceMappingURL=binder-example.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng-binder/binder/binder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ng-binder/binder/binder.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Section: {{currentSection.name}}</h2>\n<tree-root [nodes]=\"config.children\"></tree-root>\n<app-ng-json-form [config]=\"currentPage.config\" (jsonFormSubmit)=\"onJsonFormSubmit($event)\"></app-ng-json-form>"

/***/ }),

/***/ "../../../../../src/app/ng-binder/binder/binder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BinderComponent = (function () {
    function BinderComponent() {
        this.binderDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.currentSection = { 'name': '' };
        this.currentPathIndex = 0;
        this.currentPath = '';
        this.result = [];
        this.objectsByPath = {};
        this.pathsByIndex = [];
        this.orderIndexByPath = {};
    }
    BinderComponent.prototype.ngOnInit = function () {
        // this.currentPage = this.config[this.pageNumber];
        // let foo = this.flatten(this.config);
        this.organize();
        this.step(false);
    };
    BinderComponent.prototype.organize = function () {
        var path = '';
        var i = 0;
        var that = this;
        function indexChildren(parent) {
            // step forward path
            path += "/" + parent._id;
            that.pathsByIndex.push(path);
            if (parent.children && parent.children.length > 0) {
                parent.children.forEach(function (element) {
                    that.objectsByPath[path + '/' + element._id] = element;
                    that.orderIndexByPath[path + '/' + element._id] = i;
                    i++;
                    indexChildren(element);
                });
            }
            // step back path
            var frags = path.split('\/');
            frags.pop();
            path = frags.join('/');
        }
        indexChildren(this.config);
        this.pathsByIndex.shift();
    };
    BinderComponent.prototype.step = function (iterate) {
        if (iterate === void 0) { iterate = true; }
        if (iterate !== false) {
            this.currentPathIndex++;
        }
        this.currentPath = this.pathsByIndex[this.currentPathIndex];
        if (this.currentPath == null) {
            return this.binderDone.emit(this.result);
        }
        var nextObject = this.objectsByPath[this.currentPath];
        if (nextObject.collection === 'section') {
            this.currentSection = nextObject;
            return this.step();
        }
        this.currentPage = nextObject;
    };
    BinderComponent.prototype.onJsonFormSubmit = function (data) {
        this.result.push(data);
        this.step();
    };
    return BinderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], BinderComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], BinderComponent.prototype, "binderDone", void 0);
BinderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-binder',
        template: __webpack_require__("../../../../../src/app/ng-binder/binder/binder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ng-binder/binder/binder.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BinderComponent);

var _a;
//# sourceMappingURL=binder.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng-binder/ng-binder-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__binder_example_binder_example_component__ = __webpack_require__("../../../../../src/app/ng-binder/binder-example/binder-example.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgBinderRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'binder-example',
        component: __WEBPACK_IMPORTED_MODULE_2__binder_example_binder_example_component__["a" /* BinderExampleComponent */]
    }];
var NgBinderRoutingModule = (function () {
    function NgBinderRoutingModule() {
    }
    return NgBinderRoutingModule;
}());
NgBinderRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], NgBinderRoutingModule);

//# sourceMappingURL=ng-binder-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/ng-binder/ng-binder.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__binder_binder_component__ = __webpack_require__("../../../../../src/app/ng-binder/binder/binder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_json_form_ng_json_form_module__ = __webpack_require__("../../../../../src/app/ng-json-form/ng-json-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__binder_example_binder_example_component__ = __webpack_require__("../../../../../src/app/ng-binder/binder-example/binder-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_binder_routing_module__ = __webpack_require__("../../../../../src/app/ng-binder/ng-binder-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgBinderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NgBinderModule = (function () {
    function NgBinderModule() {
    }
    return NgBinderModule;
}());
NgBinderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__ng_json_form_ng_json_form_module__["a" /* NgJsonFormModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_binder_routing_module__["a" /* NgBinderRoutingModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__binder_binder_component__["a" /* BinderComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__binder_binder_component__["a" /* BinderComponent */], __WEBPACK_IMPORTED_MODULE_4__binder_example_binder_example_component__["a" /* BinderExampleComponent */]]
    })
], NgBinderModule);

//# sourceMappingURL=ng-binder.module.js.map

/***/ }),

/***/ "../../../../../src/app/ng-json-form/ng-json-form-question/ng-json-form-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ng-json-form/ng-json-form-question/ng-json-form-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\n  <label [attr.for]=\"question.key\">{{question.label}}</label>\n\n  <div [ngSwitch]=\"question.controlType\">\n\n    <input *ngSwitchCase=\"'textbox'\" [formControlName]=\"question.key\"\n            [id]=\"question.key\" [type]=\"question.type\">\n\n    <select [id]=\"question.key\" *ngSwitchCase=\"'dropdown'\" [formControlName]=\"question.key\">\n      <option *ngFor=\"let opt of question.options\" [value]=\"opt.key\">{{opt.value}}</option>\n    </select>\n\n  </div> \n\n  <div class=\"errorMessage\" *ngIf=\"!isValid\">{{question.label}} is required</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ng-json-form/ng-json-form-question/ng-json-form-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_base__ = __webpack_require__("../../../../../src/app/ng-json-form/question-base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgJsonFormQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgJsonFormQuestionComponent = (function () {
    function NgJsonFormQuestionComponent() {
    }
    Object.defineProperty(NgJsonFormQuestionComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    return NgJsonFormQuestionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__question_base__["a" /* QuestionBase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__question_base__["a" /* QuestionBase */]) === "function" && _a || Object)
], NgJsonFormQuestionComponent.prototype, "question", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormGroup */]) === "function" && _b || Object)
], NgJsonFormQuestionComponent.prototype, "form", void 0);
NgJsonFormQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-ng-json-form-question',
        template: __webpack_require__("../../../../../src/app/ng-json-form/ng-json-form-question/ng-json-form-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ng-json-form/ng-json-form-question/ng-json-form-question.component.css")]
    })
], NgJsonFormQuestionComponent);

var _a, _b;
//# sourceMappingURL=ng-json-form-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng-json-form/ng-json-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_json_form_ng_json_form_component__ = __webpack_require__("../../../../../src/app/ng-json-form/ng-json-form/ng-json-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_json_form_question_ng_json_form_question_component__ = __webpack_require__("../../../../../src/app/ng-json-form/ng-json-form-question/ng-json-form-question.component.ts");
/* unused harmony reexport NgJsonFormComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgJsonFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NgJsonFormModule = (function () {
    function NgJsonFormModule() {
    }
    return NgJsonFormModule;
}());
NgJsonFormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["i" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__ng_json_form_ng_json_form_component__["a" /* NgJsonFormComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__ng_json_form_ng_json_form_component__["a" /* NgJsonFormComponent */], __WEBPACK_IMPORTED_MODULE_5__ng_json_form_question_ng_json_form_question_component__["a" /* NgJsonFormQuestionComponent */]]
    })
], NgJsonFormModule);

//# sourceMappingURL=ng-json-form.module.js.map

/***/ }),

/***/ "../../../../../src/app/ng-json-form/ng-json-form/ng-json-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ng-json-form/ng-json-form/ng-json-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n\n    <div *ngFor=\"let question of questions\" class=\"form-row\">\n      <app-ng-json-form-question [question]=\"question\" [form]=\"form\"></app-ng-json-form-question>\n    </div>\n\n    <div class=\"form-row\">\n      <button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ng-json-form/ng-json-form/ng-json-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_textbox__ = __webpack_require__("../../../../../src/app/ng-json-form/question-textbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_dropdown__ = __webpack_require__("../../../../../src/app/ng-json-form/question-dropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_control_service__ = __webpack_require__("../../../../../src/app/ng-json-form/question-control.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgJsonFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NgJsonFormComponent = (function () {
    function NgJsonFormComponent(qcs) {
        this.qcs = qcs;
        this._config = [];
        this.jsonFormSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.questions = [];
    }
    NgJsonFormComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(NgJsonFormComponent.prototype, "config", {
        get: function () { return this._config; },
        set: function (config) {
            var _this = this;
            this._config = config;
            // Populate this.questions from this.config with appropriately casted Question Classes.
            this.questions = [];
            this._config.forEach(function (element) {
                switch (element.questionClass) {
                    case 'DropdownQuestion':
                        _this.questions.push(new __WEBPACK_IMPORTED_MODULE_2__question_dropdown__["a" /* DropdownQuestion */](element));
                        break;
                    case 'TextboxQuestion':
                        _this.questions.push(new __WEBPACK_IMPORTED_MODULE_1__question_textbox__["a" /* TextboxQuestion */](element));
                        break;
                }
            });
            this.form = this.qcs.toFormGroup(this.questions);
        },
        enumerable: true,
        configurable: true
    });
    NgJsonFormComponent.prototype.onSubmit = function () {
        this.jsonFormSubmit.emit(this.form.value);
    };
    return NgJsonFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], NgJsonFormComponent.prototype, "jsonFormSubmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgJsonFormComponent.prototype, "config", null);
NgJsonFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-ng-json-form',
        template: __webpack_require__("../../../../../src/app/ng-json-form/ng-json-form/ng-json-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ng-json-form/ng-json-form/ng-json-form.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__question_control_service__["a" /* QuestionControlService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__question_control_service__["a" /* QuestionControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__question_control_service__["a" /* QuestionControlService */]) === "function" && _b || Object])
], NgJsonFormComponent);

var _a, _b;
//# sourceMappingURL=ng-json-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng-json-form/question-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });
var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.questionClass = options.questionClass;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
    return QuestionBase;
}());

//# sourceMappingURL=question-base.js.map

/***/ }),

/***/ "../../../../../src/app/ng-json-form/question-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionControlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionControlService = (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        questions = questions.sort(function (a, b) { return a.order - b.order; });
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* FormControl */](question.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
                : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* FormControl */](question.value || '');
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormGroup */](group);
    };
    return QuestionControlService;
}());
QuestionControlService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], QuestionControlService);

//# sourceMappingURL=question-control.service.js.map

/***/ }),

/***/ "../../../../../src/app/ng-json-form/question-dropdown.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__("../../../../../src/app/ng-json-form/question-base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownQuestion; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DropdownQuestion = (function (_super) {
    __extends(DropdownQuestion, _super);
    function DropdownQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
    }
    return DropdownQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-dropdown.js.map

/***/ }),

/***/ "../../../../../src/app/ng-json-form/question-textbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__("../../../../../src/app/ng-json-form/question-base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxQuestion; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextboxQuestion = (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));

//# sourceMappingURL=question-textbox.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/group-manager/group-data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pouchdb__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var GroupDataService = (function () {
    function GroupDataService() {
        this.DB = new __WEBPACK_IMPORTED_MODULE_1_pouchdb__('groups');
    }
    GroupDataService.prototype.getParentNodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.DB.allDocs({
                                include_docs: true
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.rows];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GroupDataService.prototype.createNode = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.DB.post(node)];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return GroupDataService;
}());
GroupDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GroupDataService);

//# sourceMappingURL=group-data-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/group-manager/group-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/node-manager/group-manager/group-manager.component.html":
/***/ (function(module, exports) {

module.exports = "\n\nThis form demonstrates resuming a previous session; the group name is already filled out.\n\n<tangerine-form formId=\"tangerine-group-demo\" [session]=\"session\" #foo>\n\n  <tangerine-form-card (submit)=\"onSubmit($event)\" #group>\n    id: 'group'\n    title: 'Create Group'\n    subtitle: 'Enter the new group name.'\n    showSubmitButton: true\n    fields:\n    - type: 'input'\n      key: 'name'\n      templateOptions:\n        required: true\n        label: 'Group Name'\n        type: 'text'\n\n  </tangerine-form-card>\n</tangerine-form>\n\nYou submitted: {{result.variables | json }}\n\n"

/***/ }),

/***/ "../../../../../src/app/node-manager/group-manager/group-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group__ = __webpack_require__("../../../../../src/app/node-manager/group-manager/group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_result__ = __webpack_require__("../../../../../src/app/node-manager/group-manager/group-result.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_data_service_service__ = __webpack_require__("../../../../../src/app/node-manager/group-manager/group-data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tangerine_forms_models_tangerine_form_session__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-form-session.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupManagerComponent = (function () {
    function GroupManagerComponent(dataService) {
        this.dataService = dataService;
        this.session = new __WEBPACK_IMPORTED_MODULE_4__tangerine_forms_models_tangerine_form_session__["a" /* TangerineFormSession */]({
            '_id': 'bc82cf48-b394-3053-6759-c36dec144460',
            'formId': 'tangerine-group-demo',
            'model': {
                'name': 'Rambo'
            }
        });
    }
    GroupManagerComponent.prototype.onSubmit = function (tangerineFormCard) {
        console.log(tangerineFormCard.model);
        Object.assign(this.result.variables, tangerineFormCard.model);
        this.save(this.result.variables);
    };
    GroupManagerComponent.prototype.save = function (datum) {
        console.log("Saving to pouch - datum: " + JSON.stringify(datum));
        this.dataService.createNode(datum);
        // this.jsonFormSubmit.emit(this.form.value);
    };
    GroupManagerComponent.prototype.ngOnInit = function () {
        if (!this.result) {
            this.result = new __WEBPACK_IMPORTED_MODULE_2__group_result__["a" /* GroupResult */]();
        }
    };
    return GroupManagerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__group__["a" /* Group */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__group__["a" /* Group */]) === "function" && _a || Object)
], GroupManagerComponent.prototype, "groupModel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__group_result__["a" /* GroupResult */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__group_result__["a" /* GroupResult */]) === "function" && _b || Object)
], GroupManagerComponent.prototype, "result", void 0);
GroupManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-group-manager',
        template: __webpack_require__("../../../../../src/app/node-manager/group-manager/group-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/node-manager/group-manager/group-manager.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__group_data_service_service__["a" /* GroupDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__group_data_service_service__["a" /* GroupDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__group_data_service_service__["a" /* GroupDataService */]) === "function" && _c || Object])
], GroupManagerComponent);

var _a, _b, _c;
//# sourceMappingURL=group-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/group-manager/group-result.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupResult; });
var GroupResult = (function () {
    function GroupResult(resultObject) {
        if (resultObject === void 0) { resultObject = {}; }
        this._id = '';
        this._rev = '';
        this.name = '';
        this.variables = {};
        if (resultObject.hasOwnProperty('_id')) {
            this._id = 'group1';
        }
        else {
            // TODO: Generate UUID.
        }
        if (resultObject.hasOwnProperty('_rev')) {
            this._rev = resultObject._rev;
        }
        if (resultObject.hasOwnProperty('name')) {
            this.name = resultObject.name;
        }
        if (resultObject.hasOwnProperty('variables')) {
            this.variables = resultObject.variables;
        }
    }
    return GroupResult;
}());

//# sourceMappingURL=group-result.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/group-manager/group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
var Group = (function () {
    function Group() {
        this._id = '';
        this._rev = '';
        this.name = '';
    }
    return Group;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/location-form-control-types.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationFormControlTypesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationFormControlTypesService = (function () {
    function LocationFormControlTypesService() {
    }
    LocationFormControlTypesService.prototype.getControlTypes = function () {
        return [
            'Number',
            'Text',
            'Select'
        ];
    };
    return LocationFormControlTypesService;
}());
LocationFormControlTypesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LocationFormControlTypesService);

//# sourceMappingURL=location-form-control-types.service.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/locations-creator/locations-creator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/node-manager/locations-creator/locations-creator.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul>\n\n  <li *ngFor=\"let node of nodes\"><a (click)=\"clickNode(node)\">{{node.nodeName}}</a></li>\n</ul>\n\n<!--<form class=\"formly\" role=\"form\" novalidate [formGroup]=\"form\" (ngSubmit)=\"submit(user)\">\n  <formly-form [model]=\"user\" [fields]=\"userFields\">\n    <button type=\"submit\" class=\"btn btn-default\" i18n>Button</button>\n  </formly-form>\n</form>-->\n<!--<app-tangerine-page [model]=\"model\" [config]=\"config\" (update)=\"onUpdate($event)\">-->\n<!--</app-tangerine-page>-->\n\n<tangerine-form formId=\"tangerine-location-demo\" #tangerineForm>\n\n  <tangerine-form-card (submit)=\"onSubmit($event)\" #location>\n    id: 'location'\n    subtitle: 'Enter the new location name.'\n    showSubmitButton: true\n    fields:\n    - type: 'input'\n      key: 'nodeName'\n      templateOptions:\n        required: true\n        label: 'Name'\n        type: 'text'\n  </tangerine-form-card>\n\n</tangerine-form>\n\n"

/***/ }),

/***/ "../../../../../src/app/node-manager/locations-creator/locations-creator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_service_service__ = __webpack_require__("../../../../../src/app/core/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_value__ = __webpack_require__("../../../../../src/app/node-manager/node-value.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_result__ = __webpack_require__("../../../../../src/app/node-manager/node-result.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsCreatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {TangerinePageConfig} from "../../tangerine-forms/tangerine-page/tangerine-page-config";


var LocationsCreatorComponent = (function () {
    // form: FormGroup = new FormGroup({});
    // userFields: FormlyFieldConfig;
    function LocationsCreatorComponent(dataService) {
        this.dataService = dataService;
        this.nodes = [];
    }
    LocationsCreatorComponent.prototype.ngOnInit = function () {
        if (!this.result) {
            this.result = new __WEBPACK_IMPORTED_MODULE_3__node_result__["a" /* NodeResult */]();
        }
        this.getNodes();
    };
    LocationsCreatorComponent.prototype.getNodes = function () {
        var _this = this;
        this.dataService.getParentNodes().then(function (data) {
            data.map(function (i) {
                _this.nodes.push({
                    nodeName: i.doc.nodeName,
                    parentID: i.doc.parent,
                });
            });
        });
    };
    LocationsCreatorComponent.prototype.onSubmit = function (tangerineFormCard) {
        console.log(tangerineFormCard.model);
        Object.assign(this.result.variables, tangerineFormCard.model);
        this.save(this.result.variables);
    };
    LocationsCreatorComponent.prototype.save = function (datum) {
        console.log("Saving to pouch - datum: " + JSON.stringify(datum));
        this.dataService.createNode(datum);
        this.nodes = [];
        this.getNodes();
    };
    return LocationsCreatorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__node_value__["a" /* NodeValue */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__node_value__["a" /* NodeValue */]) === "function" && _a || Object)
], LocationsCreatorComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__node_result__["a" /* NodeResult */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__node_result__["a" /* NodeResult */]) === "function" && _b || Object)
], LocationsCreatorComponent.prototype, "result", void 0);
LocationsCreatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-locations-creator',
        template: __webpack_require__("../../../../../src/app/node-manager/locations-creator/locations-creator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/node-manager/locations-creator/locations-creator.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__core_data_service_service__["a" /* DataService */]],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__core_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_data_service_service__["a" /* DataService */]) === "function" && _c || Object])
], LocationsCreatorComponent);

var _a, _b, _c;
//# sourceMappingURL=locations-creator.component.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/node-creator/node-creator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tangy-form {\n  width: 500px;\n}\n\n.tangy-full-width {\n  width: 100%;\n}\n\n.tangy-content{\n  margin-left: 3rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/node-manager/node-creator/node-creator.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"4\" *ngIf=\"isViewOnFirstPage\" rowHeight=\"5rem\">\n  <md-grid-tile colspan=\"4\" rowspan=\"1\">\n    <md-input-container>\n      <input mdInput placeholder=\"Node Name\" [(ngModel)]=\"form.nodeName\">\n    </md-input-container>\n  </md-grid-tile>\n  <md-grid-tile colspan=\"4\" rowspan=\"1\">\n    <md-select placeholder=\"Parent Node\" [(ngModel)]=\"form.selectedParentNode\" name=\"food\" required>\n      <md-option *ngFor=\"let parent of parentNodes\" [value]=\"parent.uuid\">\n        {{parent.label}}\n      </md-option>\n    </md-select>\n  </md-grid-tile>\n  <md-grid-tile colspan=\"4\" rowspan=\"1\">\n    <button md-raised-button color=\"primary\" (click)=switchPages() [disabled]=\"!form.nodeName\">Next Page</button>\n  </md-grid-tile>\n</md-grid-list>\n\n<md-grid-list cols=\"4\" *ngIf=\"!isViewOnFirstPage\" rowHeight=\"5rem\">\n  <md-grid-tile rowspan=\"1\" colspan=\"2\">\n    <md-input-container>\n      <input mdInput placeholder=\"Metadata Label\" [(ngModel)]=\"form.metadata.metadata\">\n    </md-input-container>\n    <md-select placeholder=\"Metadata Type\" [(ngModel)]=\"form.metadata.metadataType\" name=\"food\" required>\n      <md-option *ngFor=\"let type of controlTypes\" [value]=\"type\">\n        {{type}}\n      </md-option>\n    </md-select>\n    <md-slide-toggle [(ngModel)]=\"form.metadata.metadataRequired\">Metadata Required in Form?</md-slide-toggle>\n  </md-grid-tile>\n  <md-grid-tile rowspan=\"2\" colspan=\"2\">\n    <table>\n      <th> Metadata</th>\n      <th> Type</th>\n      <th> Required</th>\n      <th> Action</th>\n      <tr *ngFor=\"let data of nodeElements.metadata; let i=index\">\n        <td>{{data.label}}</td>\n        <td>{{data.metadataType}}</td>\n        <td>{{data.metadataRequired}}</td>\n        <td>\n          <button (click)=\"editMetaData(data,i)\">Edit</button>\n          <button (click)=\"deleteMetaData(i)\">Delete</button>\n        </td>\n      </tr>\n    </table>\n  </md-grid-tile>\n\n  <md-grid-tile rowspan=\"1\" colspan=\"2\">\n    <button *ngIf=\"!isEditingMetaData\" md-raised-button color=\"primary\" (click)=\"createMetadata()\" class=\"text-upper\">Create Metadata</button>\n    <button *ngIf=\"isEditingMetaData\" md-raised-button color=\"primary\" (click)=\"saveEditedMetaData()\" class=\"text-upper\">Save Metadata</button>\n  </md-grid-tile>\n\n  <md-grid-tile rowspan=\"1\" colspan=\"2\">\n    <button md-raised-button color=\"primary\" (click)=switchPages()>Previous Page</button>\n    <button md-raised-button color=\"primary\" style=\"margin-left:3rem\" (click)=\"createNode()\" class=\"text-upper\">Submit Form</button>\n  </md-grid-tile>\n  <md-grid-tile colspan=\"2\"></md-grid-tile>\n</md-grid-list>"

/***/ }),

/***/ "../../../../../src/app/node-manager/node-creator/node-creator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_form_control_types_service__ = __webpack_require__("../../../../../src/app/node-manager/location-form-control-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_service_service__ = __webpack_require__("../../../../../src/app/core/data-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeCreatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NodeCreatorComponent = (function () {
    function NodeCreatorComponent(locationFormControlTypesService, dataService) {
        this.locationFormControlTypesService = locationFormControlTypesService;
        this.dataService = dataService;
        this.formElements = [];
        this.nodeElements = { metadata: [] };
        this.formValue = {};
        this.form = { metadata: {} };
        this.parentNodes = [];
        this.controlTypes = [];
        this.isViewOnFirstPage = true;
        this.isEditingMetaData = false;
    }
    NodeCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getParentNodes().then(function (data) {
            data.map(function (items) {
                _this.parentNodes.push({
                    uuid: items.doc._id,
                    label: items.doc.nodeName
                });
            });
        });
        this.controlTypes = this.locationFormControlTypesService.getControlTypes();
    };
    NodeCreatorComponent.prototype.switchPages = function () {
        this.isViewOnFirstPage = !this.isViewOnFirstPage;
    };
    NodeCreatorComponent.prototype.createMetadata = function () {
        this.nodeElements.metadata.push({
            label: this.form.metadata.metadata,
            metadataType: this.form.metadata.metadataType,
            metadataRequired: this.form.metadata.metadataRequired || false
        });
        this.clearMetaDataForm();
    };
    NodeCreatorComponent.prototype.createNode = function () {
        this.nodeElements.nodeName = this.form.nodeName;
        this.nodeElements.parent = this.form.selectedParentNode;
        this.dataService.createNode(this.nodeElements);
    };
    NodeCreatorComponent.prototype.editMetaData = function (data, index) {
        this.editedMetadataIndex = index;
        this.isEditingMetaData = true;
        this.form.metadata.metadata = data.label;
        this.form.metadata.metadataType = data.metadataType;
        this.form.metadata.metadataRequired = data.metadataRequired;
    };
    NodeCreatorComponent.prototype.deleteMetaData = function (index) {
        this.nodeElements.metadata.splice(index, 1);
    };
    NodeCreatorComponent.prototype.saveEditedMetaData = function () {
        this.isEditingMetaData = false;
        this.nodeElements.metadata[this.editedMetadataIndex] = {
            label: this.form.metadata.metadata,
            metadataType: this.form.metadata.metadataType,
            metadataRequired: this.form.metadata.metadataRequired || false
        };
        this.clearMetaDataForm();
    };
    NodeCreatorComponent.prototype.clearMetaDataForm = function () {
        this.form.metadata = {};
    };
    return NodeCreatorComponent;
}());
NodeCreatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-node-creator',
        template: __webpack_require__("../../../../../src/app/node-manager/node-creator/node-creator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/node-manager/node-creator/node-creator.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__location_form_control_types_service__["a" /* LocationFormControlTypesService */], __WEBPACK_IMPORTED_MODULE_2__core_data_service_service__["a" /* DataService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__location_form_control_types_service__["a" /* LocationFormControlTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__location_form_control_types_service__["a" /* LocationFormControlTypesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_service_service__["a" /* DataService */]) === "function" && _b || Object])
], NodeCreatorComponent);

var _a, _b;
//# sourceMappingURL=node-creator.component.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/node-manager-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_creator_node_creator_component__ = __webpack_require__("../../../../../src/app/node-manager/node-creator/node-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locations_creator_locations_creator_component__ = __webpack_require__("../../../../../src/app/node-manager/locations-creator/locations-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group_manager_group_manager_component__ = __webpack_require__("../../../../../src/app/node-manager/group-manager/group-manager.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeManagerRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: 'create-nodes',
        component: __WEBPACK_IMPORTED_MODULE_2__node_creator_node_creator_component__["a" /* NodeCreatorComponent */]
    }, {
        path: 'create-location',
        component: __WEBPACK_IMPORTED_MODULE_3__locations_creator_locations_creator_component__["a" /* LocationsCreatorComponent */]
    }, {
        path: 'create-group',
        component: __WEBPACK_IMPORTED_MODULE_4__group_manager_group_manager_component__["a" /* GroupManagerComponent */]
    }];
var NodeManagerRoutingModule = (function () {
    function NodeManagerRoutingModule() {
    }
    return NodeManagerRoutingModule;
}());
NodeManagerRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], NodeManagerRoutingModule);

//# sourceMappingURL=node-manager-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/node-manager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_creator_node_creator_component__ = __webpack_require__("../../../../../src/app/node-manager/node-creator/node-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_manager_routing_module__ = __webpack_require__("../../../../../src/app/node-manager/node-manager-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__locations_creator_locations_creator_component__ = __webpack_require__("../../../../../src/app/node-manager/locations-creator/locations-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__group_manager_group_manager_component__ = __webpack_require__("../../../../../src/app/node-manager/group-manager/group-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tangerine_forms_tangerine_forms_module__ = __webpack_require__("../../../../../src/app/tangerine-forms/tangerine-forms.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeManagerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var NodeManagerModule = (function () {
    function NodeManagerModule() {
    }
    return NodeManagerModule;
}());
NodeManagerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_7__node_manager_routing_module__["a" /* NodeManagerRoutingModule */], __WEBPACK_IMPORTED_MODULE_10__tangerine_forms_tangerine_forms_module__["a" /* TangerineFormsModule */]
            // , GroupManagerModule
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__node_creator_node_creator_component__["a" /* NodeCreatorComponent */], __WEBPACK_IMPORTED_MODULE_8__locations_creator_locations_creator_component__["a" /* LocationsCreatorComponent */], __WEBPACK_IMPORTED_MODULE_9__group_manager_group_manager_component__["a" /* GroupManagerComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__node_creator_node_creator_component__["a" /* NodeCreatorComponent */]]
    })
], NodeManagerModule);

//# sourceMappingURL=node-manager.module.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/node-result.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeResult; });
var NodeResult = (function () {
    function NodeResult(resultObject) {
        if (resultObject === void 0) { resultObject = {}; }
        this._id = '';
        this._rev = '';
        this.name = '';
        this.variables = {};
        if (resultObject.hasOwnProperty('_id')) {
            this._id = 'node1';
        }
        else {
            // TODO: Generate UUID.
        }
        if (resultObject.hasOwnProperty('_rev')) {
            this._rev = resultObject._rev;
        }
        if (resultObject.hasOwnProperty('name')) {
            this.name = resultObject.name;
        }
        if (resultObject.hasOwnProperty('variables')) {
            this.variables = resultObject.variables;
        }
    }
    return NodeResult;
}());

//# sourceMappingURL=node-result.js.map

/***/ }),

/***/ "../../../../../src/app/node-manager/node-value.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeValue; });
var NodeValue = (function () {
    function NodeValue() {
        this._id = '';
        this._rev = '';
        this.name = '';
    }
    return NodeValue;
}());

//# sourceMappingURL=node-value.js.map

/***/ }),

/***/ "../../../../../src/app/pages/demo/demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Tangerine Form Demo </h2>\n\n\n<h3> A basic Tangerine Form Card. </h3>\n\n<tangerine-form formId=\"demoForm\">\n\n  <tangerine-form-card>\n    title: \"First Card\"\n    fields:\n      - type: 'input'\n        key: 'variable1'\n        templateOptions: \n          required: true\n          label: 'Variable 1'\n      - type: 'input'\n        key: 'variable2'\n        templateOptions: \n          placeholder: \"I'm am placeholder text\"\n          required: true\n          label: 'Variable 2'\n  </tangerine-form-card>\n\n  <h3> A Tangerine Form Card with select and radio boxes. </h3>\n\n  <tangerine-form-card>\n    fields:\n      - type: 'select'\n        key: 'favorite_fruit'\n        templateOptions: \n          required: true\n          label: 'What is your favorite fruit?'\n          options:\n            - key: orange\n              label: Orange\n            - key: strawberry\n              label: Strawberry\n            - key: Tangerine\n              label: Tangerine\n            - key: coconut\n              label: Coconut\n      - type: 'radio'\n        key: 'favorite_color'\n        templateOptions: \n          required: true\n          label: 'What is your favorite color?'\n          options:\n            - key: red \n              value: Red \n            - key: blue \n              value: Blue \n            - key: green \n              value: Green\n            - key: yellow \n              value: Yellow \n  </tangerine-form-card>\n\n  <h3> A Tangerine Form Card with data prepopulated. </h3>\n\n  <tangerine-form-card>\n    fields:\n      - type: 'input'\n        key: 'prepopulated_variable_1'\n        templateOptions: \n          required: true\n          label: 'Prepopulated Variable 1'\n      - type: 'input'\n        key: 'prepopulated_variable_2'\n        templateOptions: \n          required: true\n          label: 'Prepopulated Variable 2'\n    model:\n      prepopulated_variable_1: 'foo'\n      prepopulated_variable_2: 'bar'\n  </tangerine-form-card>\n\n\n  <h3> A Tangerine Form Card with everything: a title, a subtitle, image, an avatar, and a submit button. </h3>\n  <tangerine-form-card>\n    title: 'Doge Wow!'\n    subtitle: 'So many squirrels, so little time.'\n    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'\n    avatarImage: 'assets/noun_727773_cc.png'\n    showSubmitButton: true\n    fields:\n      - type: 'input'\n        key: 'doge_name'\n        templateOptions: \n          required: true\n          label: 'Your dogs name?'\n          type: 'text'\n      - type: 'input'\n        key: 'doge_color'\n        templateOptions: \n          required: true\n          label: 'Your dogs favorite color?'\n          type: 'text'\n  </tangerine-form-card>\n\n  <tangerine-form-card>\n    fields:\n      - type: 'radio'\n        key: 'want_to_eat_fruit_now'\n        templateOptions:\n          required: true\n          label: 'Would you like to eat fruit right now?'\n          options:\n            - key: yes\n              value: Yes\n            - key: no\n              value: No\n  </tangerine-form-card>\n\n  <tangerine-form-card>\n    fields:\n      - type: 'input'\n        key: 'fruit_i_want_to_eat_now'\n        hideExpression: 'model.want_to_eat_fruit_now !== \"yes\"'\n        templateOptions:\n          required: true\n          label: 'What fruit would you eat right now?'\n  </tangerine-form-card>\n\n  <tangerine-form-card>\n    fields:\n      - type: 'radio'\n        key: 'want_to_eat_candy_now'\n        templateOptions:\n          required: true\n          label: 'Would you like to eat candy right now?'\n          options:\n            - key: yes\n              value: Yes\n            - key: no\n              value: No\n  </tangerine-form-card>\n\n  <tangerine-form-card>\n    fields:\n      - type: 'input'\n        key: 'candy_i_want_to_eat_now'\n        expressionProperties:\n          'templateOptions.disabled': 'model.want_to_eat_candy_now !== \"yes\"'\n        templateOptions:\n          required: true\n          label: 'What candy would you eat right now?'\n  </tangerine-form-card>\n\n</tangerine-form>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoComponent = (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-demo',
        template: __webpack_require__("../../../../../src/app/pages/demo/demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/demo/demo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DemoComponent);

//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Hello World</h1>\n\n<ul>\n<li><tangerine-form-links link=\"forms/demo\" formId=\"demoForm\">Demo Form</tangerine-form-links></li>\n<li><tangerine-form-links link=\"forms/my-tangy-form\" formId=\"tangy-form\">Tangy Form</tangerine-form-links></li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/pages/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/my-tangy-form/my-tangy-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/my-tangy-form/my-tangy-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> My Tangy Form </h1>\n<tangerine-form formId=\"tangy-form\">\n  <tangerine-form-card>\n    id: 'card5'\n    title: 'Fruit'\n    subtitle: 'A very important topic.'\n    avatarImage: 'https://tangerinekenya.github.io/DesignSprintPrototype-Team1/images/tangerineLogo.png'\n    showSubmitButton: true\n    fields:\n        - type: 'input'\n          key: 'name'\n          templateOptions:\n            required: true\n            placeholder: 'What is your name?'\n        - type: 'select'\n          key: 'fruit_name'\n          templateOptions: \n            required: true\n            label: 'What is your favorite fruit?'\n            options:\n              - value: no_selection\n                label: \"----\"\n              - value: orange\n                label: Orange\n              - value: strawberry\n                label: Strawberry\n              - value: Tangerine\n                label: Tangerine\n              - value: coconut\n                label: Coconut\n  </tangerine-form-card>\n</tangerine-form>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/my-tangy-form/my-tangy-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTangyFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyTangyFormComponent = (function () {
    function MyTangyFormComponent() {
    }
    MyTangyFormComponent.prototype.ngOnInit = function () {
    };
    return MyTangyFormComponent;
}());
MyTangyFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-my-tangy-form',
        template: __webpack_require__("../../../../../src/app/pages/my-tangy-form/my-tangy-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/my-tangy-form/my-tangy-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyTangyFormComponent);

//# sourceMappingURL=my-tangy-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_index_component__ = __webpack_require__("../../../../../src/app/pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_tangy_form_my_tangy_form_component__ = __webpack_require__("../../../../../src/app/pages/my-tangy-form/my-tangy-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_demo_component__ = __webpack_require__("../../../../../src/app/pages/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{ path: "forms/demo", component: __WEBPACK_IMPORTED_MODULE_2__demo_demo_component__["a" /* DemoComponent */] }, { path: "forms/my-tangy-form", component: __WEBPACK_IMPORTED_MODULE_1__my_tangy_form_my_tangy_form_component__["a" /* MyTangyFormComponent */] }, { path: "", component: __WEBPACK_IMPORTED_MODULE_0__index_index_component__["a" /* IndexComponent */] }, { path: "index", component: __WEBPACK_IMPORTED_MODULE_0__index_index_component__["a" /* IndexComponent */] },]; //: Routes = [];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]]
    })
], PagesRoutingModule);

//# sourceMappingURL=pages-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_binder_ng_binder_module__ = __webpack_require__("../../../../../src/app/ng-binder/ng-binder.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_manager_node_manager_module__ = __webpack_require__("../../../../../src/app/node-manager/node-manager.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tangerine_forms_tangerine_forms_module__ = __webpack_require__("../../../../../src/app/tangerine-forms/tangerine-forms.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_demo_component__ = __webpack_require__("../../../../../src/app/pages/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_tangy_form_my_tangy_form_component__ = __webpack_require__("../../../../../src/app/pages/my-tangy-form/my-tangy-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__index_index_component__ = __webpack_require__("../../../../../src/app/pages/index/index.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_6__ng_binder_ng_binder_module__["a" /* NgBinderModule */], __WEBPACK_IMPORTED_MODULE_7__node_manager_node_manager_module__["a" /* NodeManagerModule */], __WEBPACK_IMPORTED_MODULE_8__tangerine_forms_tangerine_forms_module__["a" /* TangerineFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__pages_routing_module__["a" /* PagesRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_10__demo_demo_component__["a" /* DemoComponent */], __WEBPACK_IMPORTED_MODULE_11__my_tangy_form_my_tangy_form_component__["a" /* MyTangyFormComponent */], __WEBPACK_IMPORTED_MODULE_12__index_index_component__["a" /* IndexComponent */]]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/eftouch-form-card/eftouch-form-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-card [@cardStatus]='_tangerineFormCard.status'>\n  <md-card-header *ngIf='showHeader'>\n    <div *ngIf='tangerineFormCard.avatarImage'\n         md-card-avatar class=\"avatar-image\"\n         [style.background-image]=\"'url(' + tangerineFormCard.avatarImage + ')'\"\n    >\n    </div>\n    <md-card-title *ngIf='tangerineFormCard.title'>{{tangerineFormCard.title}}</md-card-title>\n    <md-card-subtitle *ngIf='tangerineFormCard.subtitle'>{{tangerineFormCard.subtitle}}</md-card-subtitle>\n  </md-card-header>\n  <img *ngIf='tangerineFormCard.image' md-card-image src=\"{{tangerineFormCard.image}}\">\n  <div *ngIf='tangerineFormCard.images'>\n    <div *ngFor=\"let image of tangerineFormCard.images\" class=\"av-cell\" style=\"display:inline-block;\">\n      <button class=\"av-button av-button-highlight\" data-value=\"1\" style=\"width: auto; height: 100%;\">\n        <img class=\"av-image\" src=\"{{image.image}}\"></button></div>\n  </div>\n  <md-card-content>\n    <form class=\"formly\" role=\"form\" novalidate [formGroup]=\"form\">\n      <formly-form\n        [fields]=\"tangerineFormCard.fields\"\n        [model]=\"tangerineFormCard.model\"\n        [form]=\"form\"\n      >\n      </formly-form>\n    </form>\n  </md-card-content>\n  <md-card-actions *ngIf=\"tangerineFormCard.showSubmitButton\">\n    <button (click)='onSubmit()' md-button>SUBMIT</button>\n  </md-card-actions>\n</md-card>\n\n<div style=\"display: none;\">\n  START-CONFIG\n  <ng-content></ng-content>\n  END-CONFIG\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/eftouch-form-card/eftouch-form-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tangerine_base_card__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-base-card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EftouchFormCardComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EftouchFormCardComponent = EftouchFormCardComponent_1 = (function (_super) {
    __extends(EftouchFormCardComponent, _super);
    function EftouchFormCardComponent(fb, el) {
        return _super.call(this, fb, el) || this;
    }
    return EftouchFormCardComponent;
}(__WEBPACK_IMPORTED_MODULE_2__models_tangerine_base_card__["a" /* TangerineBaseCardComponent */]));
EftouchFormCardComponent = EftouchFormCardComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'eftouch-form-card',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/components/eftouch-form-card/eftouch-form-card.component.html"),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["a" /* trigger */])('cardStatus', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["b" /* state */])('INVALID', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({
                    backgroundColor: '#FFF',
                    transform: 'scale(1.0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["b" /* state */])('VALID', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({
                    backgroundColor: '#afd29a',
                    transform: 'scale(1.03)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])('INVALID => VALID', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])('VALID => INVALID', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-out'))
            ])
        ],
        // We use providers to link this class' superclass, TangerineBaseCardComponent, to its child EftouchFormCardComponent
        // This enables the ContentChildren query in TangerineFormComponent to find its children.
        // See https://github.com/Tangerine-Community/Tangerine/issues/369 for more information
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__models_tangerine_base_card__["a" /* TangerineBaseCardComponent */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* forwardRef */])(function () { return EftouchFormCardComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object])
], EftouchFormCardComponent);

var EftouchFormCardComponent_1, _a, _b;
//# sourceMappingURL=eftouch-form-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-card/tangerine-form-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n    width: 400px;\n    margin: 10px;\n}\n.avatar-image {\n  background-size: cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-card/tangerine-form-card.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card [@cardStatus]='_tangerineFormCard.status'>\n    <md-card-header *ngIf='showHeader'>\n        <div *ngIf='tangerineFormCard.avatarImage'\n            md-card-avatar class=\"avatar-image\"\n            [style.background-image]=\"'url(' + tangerineFormCard.avatarImage + ')'\"\n            >\n        </div>\n        <md-card-title *ngIf='tangerineFormCard.title'>{{tangerineFormCard.title}}</md-card-title>\n        <md-card-subtitle *ngIf='tangerineFormCard.subtitle'>{{tangerineFormCard.subtitle}}</md-card-subtitle>\n    </md-card-header>\n    <img *ngIf='tangerineFormCard.image' md-card-image src=\"{{tangerineFormCard.image}}\">\n    <md-card-content>\n        <form class=\"formly\" role=\"form\" novalidate [formGroup]=\"form\">\n            <formly-form\n            [fields]=\"tangerineFormCard.fields\"\n            [model]=\"tangerineFormCard.model\"\n            [form]=\"form\"\n            >\n            </formly-form>\n        </form>\n    </md-card-content>\n    <md-card-actions *ngIf=\"tangerineFormCard.showSubmitButton\">\n        <button (click)='onSubmit()' md-button>SUBMIT</button>\n    </md-card-actions>\n</md-card>\n\n<div style=\"display: none;\">\n    START-CONFIG\n        <ng-content></ng-content>\n    END-CONFIG\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-card/tangerine-form-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tangerine_base_card__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-base-card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormCardComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TangerineFormCardComponent = TangerineFormCardComponent_1 = (function (_super) {
    __extends(TangerineFormCardComponent, _super);
    function TangerineFormCardComponent(fb, el) {
        return _super.call(this, fb, el) || this;
    }
    return TangerineFormCardComponent;
}(__WEBPACK_IMPORTED_MODULE_2__models_tangerine_base_card__["a" /* TangerineBaseCardComponent */]));
TangerineFormCardComponent = TangerineFormCardComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'tangerine-form-card',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-card/tangerine-form-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-card/tangerine-form-card.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["a" /* trigger */])('cardStatus', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["b" /* state */])('INVALID', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({
                    backgroundColor: '#FFF',
                    transform: 'scale(1.0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["b" /* state */])('VALID', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({
                    backgroundColor: '#afd29a',
                    transform: 'scale(1.03)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])('INVALID => VALID', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])('VALID => INVALID', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-out'))
            ])
        ],
        // We use providers to link this class' superclass, TangerineBaseCardComponent, to its child EftouchFormCardComponent
        // This enables the ContentChildren query in TangerineFormComponent to find its children.
        // See https://github.com/Tangerine-Community/Tangerine/issues/369 for more information
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__models_tangerine_base_card__["a" /* TangerineBaseCardComponent */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* forwardRef */])(function () { return TangerineFormCardComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object])
], TangerineFormCardComponent);

var TangerineFormCardComponent_1, _a, _b;
//# sourceMappingURL=tangerine-form-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-links/tangerine-form-links.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-links/tangerine-form-links.component.html":
/***/ (function(module, exports) {

module.exports = "<span><ng-content></ng-content></span>\n<span (click)=\"newSession()\"> [ new session ] </span> \n<span (click)=\"toggleSessions()\"> [ {{toggleSessionText}} ] </span>\n<tangerine-form-sessions *ngIf=\"showSessions\" [formId]=\"formId\" [link]=\"link\"></tangerine-form-sessions>"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-links/tangerine-form-links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tangerine_form_sessions_service__ = __webpack_require__("../../../../../src/app/tangerine-forms/services/tangerine-form-sessions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormLinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TangerineFormLinksComponent = (function () {
    function TangerineFormLinksComponent(store, service, router) {
        this.store = store;
        this.service = service;
        this.router = router;
        this.showSessions = false;
        this.toggleSessionText = 'show sessions';
    }
    TangerineFormLinksComponent.prototype.toggleSessions = function () {
        if (this.showSessions) {
            this.showSessions = false;
            this.toggleSessionText = 'show sessions';
        }
        else {
            this.showSessions = true;
            this.toggleSessionText = 'hide sessions';
        }
    };
    TangerineFormLinksComponent.prototype.ngOnInit = function () {
    };
    TangerineFormLinksComponent.prototype.newSession = function () {
        this.store.dispatch({ type: 'TANGERINE_FORM_SESSION_START', payload: { formId: this.formId } });
        this.router.navigate([this.link]);
    };
    return TangerineFormLinksComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], TangerineFormLinksComponent.prototype, "formId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], TangerineFormLinksComponent.prototype, "link", void 0);
TangerineFormLinksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'tangerine-form-links',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-links/tangerine-form-links.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-links/tangerine-form-links.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_tangerine_form_sessions_service__["a" /* TangerineFormSessionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tangerine_form_sessions_service__["a" /* TangerineFormSessionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], TangerineFormLinksComponent);

var _a, _b, _c;
//# sourceMappingURL=tangerine-form-links.component.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-session-item/tangerine-form-session-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-session-item/tangerine-form-session-item.component.html":
/***/ (function(module, exports) {

module.exports = "{{session.date | date:'medium'}} <span (click)=\"resumeSession()\">[ resume ]</span>"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-session-item/tangerine-form-session-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_tangerine_form_session__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-form-session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tangerine_form_sessions_service__ = __webpack_require__("../../../../../src/app/tangerine-forms/services/tangerine-form-sessions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormSessionItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TangerineFormSessionItemComponent = (function () {
    function TangerineFormSessionItemComponent(store, service, router) {
        this.store = store;
        this.service = service;
        this.router = router;
    }
    TangerineFormSessionItemComponent.prototype.ngOnInit = function () {
    };
    TangerineFormSessionItemComponent.prototype.resumeSession = function () {
        this.store.dispatch({ type: 'TANGERINE_FORM_SESSION_RESUME', payload: this.session });
        this.router.navigate([this.link]);
    };
    return TangerineFormSessionItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_tangerine_form_session__["a" /* TangerineFormSession */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_tangerine_form_session__["a" /* TangerineFormSession */]) === "function" && _a || Object)
], TangerineFormSessionItemComponent.prototype, "session", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], TangerineFormSessionItemComponent.prototype, "link", void 0);
TangerineFormSessionItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'tangerine-form-session-item',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-session-item/tangerine-form-session-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-session-item/tangerine-form-session-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_tangerine_form_sessions_service__["a" /* TangerineFormSessionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_tangerine_form_sessions_service__["a" /* TangerineFormSessionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], TangerineFormSessionItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tangerine-form-session-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-session/tangerine-form-session.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n    width: 410px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-session/tangerine-form-session.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <h2> Session </h2>\n  \n  <h3> Info </h3>\n  <pre>\n  {{ session | json}}\n  </pre>\n  <button (click)=\"onDoneBtnClick()\">Click to mark as done</button>\n</md-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-session/tangerine-form-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tangerine_form_session__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-form-session.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormSessionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TangerineFormSessionComponent = (function () {
    function TangerineFormSessionComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    TangerineFormSessionComponent.prototype.ngOnInit = function () {
    };
    TangerineFormSessionComponent.prototype.onDoneBtnClick = function () {
        this.session.status = 'DONE';
    };
    return TangerineFormSessionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_tangerine_form_session__["a" /* TangerineFormSession */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_tangerine_form_session__["a" /* TangerineFormSession */]) === "function" && _a || Object)
], TangerineFormSessionComponent.prototype, "session", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], TangerineFormSessionComponent.prototype, "change", void 0);
TangerineFormSessionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'tangerine-form-session',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-session/tangerine-form-session.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-session/tangerine-form-session.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TangerineFormSessionComponent);

var _a;
//# sourceMappingURL=tangerine-form-session.component.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-sessions/tangerine-form-sessions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-sessions/tangerine-form-sessions.component.html":
/***/ (function(module, exports) {

module.exports = "<span (click)=\"downloadCsv()\">Download as CSV</span>\n<ul>\n  <li *ngFor=\"let session of sessions\">\n    <tangerine-form-session-item [link]=\"link\" [session]=\"session\"></tangerine-form-session-item>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/components/tangerine-form-sessions/tangerine-form-sessions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tangerine_form_sessions_service__ = __webpack_require__("../../../../../src/app/tangerine-forms/services/tangerine-form-sessions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_csv_file_creator__ = __webpack_require__("../../../../csv-file-creator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_csv_file_creator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_csv_file_creator__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormSessionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var TangerineFormSessionsComponent = (function () {
    function TangerineFormSessionsComponent(service) {
        this.sessions = [];
        this.service = service;
    }
    TangerineFormSessionsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.service.getAll(this.formId)];
                    case 1:
                        _a.sessions = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TangerineFormSessionsComponent.prototype.downloadCsv = function () {
        var _this = this;
        // TODO: Flatten all sessions.
        var flatSessions = [];
        this.sessions.forEach(function (session) {
            flatSessions.push(_this.flatten(session));
        });
        // Get unique keys.
        var keys = [];
        flatSessions.forEach(function (session) {
            keys = keys.concat(Object.keys(session).filter(function (item) {
                return keys.indexOf(item) < 0;
            }));
        });
        var rows = [keys];
        flatSessions.forEach(function (session) {
            var row = [];
            keys.forEach(function (key) {
                row.push(session[key]);
            });
            rows.push(row);
        });
        __WEBPACK_IMPORTED_MODULE_2_csv_file_creator__(this.formId + '.csv', rows);
    };
    // Flatten a deep object.
    // From https://gist.github.com/penguinboy/762197#gistcomment-2130571
    TangerineFormSessionsComponent.prototype.flatten = function (object, separator) {
        if (separator === void 0) { separator = '.'; }
        var isValidObject = function (value) {
            if (!value) {
                return false;
            }
            var isArray = Array.isArray(value);
            var isBuffer = Buffer.isBuffer(value);
            var isΟbject = Object.prototype.toString.call(value) === '[object Object]';
            var hasKeys = !!Object.keys(value).length;
            return !isArray && !isBuffer && isΟbject && hasKeys;
        };
        var walker = function (child, path) {
            if (path === void 0) { path = []; }
            return Object.assign.apply(Object, [{}].concat(Object.keys(child).map(function (key) {
                return isValidObject(child[key])
                    ? walker(child[key], path.concat([key]))
                    : (_a = {}, _a[path.concat([key]).join(separator)] = child[key], _a);
                var _a;
            })));
        };
        return Object.assign({}, walker(object));
    };
    return TangerineFormSessionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], TangerineFormSessionsComponent.prototype, "formId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], TangerineFormSessionsComponent.prototype, "link", void 0);
TangerineFormSessionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'tangerine-form-sessions',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-sessions/tangerine-form-sessions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-sessions/tangerine-form-sessions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tangerine_form_sessions_service__["a" /* TangerineFormSessionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tangerine_form_sessions_service__["a" /* TangerineFormSessionsService */]) === "function" && _a || Object])
], TangerineFormSessionsComponent);

var _a;
//# sourceMappingURL=tangerine-form-sessions.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../buffer/index.js").Buffer))

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/containers/tangerine-form/tangerine-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/containers/tangerine-form/tangerine-form.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/containers/tangerine-form/tangerine-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tangerine_form_sessions_service__ = __webpack_require__("../../../../../src/app/tangerine-forms/services/tangerine-form-sessions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__effects_tangerine_form_sessions_effects__ = __webpack_require__("../../../../../src/app/tangerine-forms/effects/tangerine-form-sessions-effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_tangerine_form_session__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-form-session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_tangerine_form__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_tangerine_base_card__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-base-card.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormComponent; });
/*
 * Component: <tangerine-form>
 * Projects a series of <tangerine-form-card> components, subcribes to their change events, aggregates their models and sends that
 * aggregated model back down to the card components.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TangerineFormComponent = (function () {
    // Set the store to a local store property.
    function TangerineFormComponent(store, service) {
        this.store = store;
        this.service = service;
        // Send a Tangerine Form in.
        this.form = new __WEBPACK_IMPORTED_MODULE_8__models_tangerine_form__["a" /* TangerineForm */]();
        this.formId = '';
        // TODO: In the future, it would be nice if Components did not have to be in charge of activating Effects.
        //       Perhaps we could make effects reducers that misbehave.
        this._effects = new __WEBPACK_IMPORTED_MODULE_3__effects_tangerine_form_sessions_effects__["a" /* TangerineFormSessionsEffects */](store, service);
    }
    TangerineFormComponent.prototype.ngOnDestroy = function () {
        this._effects.subscription.unsubscribe();
        this.subscription.unsubscribe();
    };
    TangerineFormComponent.prototype.ngOnInit = function () {
    };
    TangerineFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Subscribe Tangerine Form Session.
        this.subscription = this.store.select('tangerineFormSession')
            .subscribe(function (tangerineFormSession) {
            // No Session or the session doesn't match this form? Call home for one and this will come back around.
            if (!tangerineFormSession || tangerineFormSession.formId !== _this.formId) {
                _this.store.dispatch({ type: 'TANGERINE_FORM_SESSION_START', payload: { formId: _this.formId } });
            }
            else if (!_this.session) {
                // Spread the Session around.
                _this.session = tangerineFormSession;
                _this.tangerineFormCardChildren.forEach(function (tangerineFormCardComponent, index, cards) {
                    tangerineFormCardComponent.tangerineFormCard.model = Object.assign({}, _this.session.model);
                });
                // Subscribe to all of the cards change events.
                _this.tangerineFormCardChildren.forEach(function (tangerineFormCardComponent, index, cards) {
                    tangerineFormCardComponent.change.subscribe(function (tangerineFormCard) {
                        // Protect from an infinite loop because of how Formly works.
                        var potentialModel = Object.assign({}, _this.session.model, tangerineFormCard.model);
                        if (JSON.stringify(potentialModel) !== JSON.stringify(_this.session.model)) {
                            _this.store.dispatch({
                                type: 'TANGERINE_FORM_SESSION_MODEL_UPDATE',
                                payload: tangerineFormCard.model
                            });
                        }
                        ;
                    });
                });
            }
            else {
                _this.session = tangerineFormSession;
                _this.tangerineFormCardChildren.forEach(function (tangerineFormCardComponent, index, cards) {
                    tangerineFormCardComponent.tangerineFormCard.model = Object.assign({}, _this.session.model);
                });
            }
            ;
        });
    };
    return TangerineFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__models_tangerine_form__["a" /* TangerineForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__models_tangerine_form__["a" /* TangerineForm */]) === "function" && _a || Object)
], TangerineFormComponent.prototype, "form", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__models_tangerine_form_session__["a" /* TangerineFormSession */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__models_tangerine_form_session__["a" /* TangerineFormSession */]) === "function" && _b || Object)
], TangerineFormComponent.prototype, "session", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TangerineFormComponent.prototype, "formId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_9__models_tangerine_base_card__["a" /* TangerineBaseCardComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* QueryList */]) === "function" && _c || Object)
], TangerineFormComponent.prototype, "tangerineFormCardChildren", void 0);
TangerineFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'tangerine-form',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/containers/tangerine-form/tangerine-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tangerine-forms/containers/tangerine-form/tangerine-form.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_tangerine_form_sessions_service__["a" /* TangerineFormSessionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tangerine_form_sessions_service__["a" /* TangerineFormSessionsService */]) === "function" && _e || Object])
], TangerineFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tangerine-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/effects/tangerine-form-sessions-effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormSessionsEffects; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var TangerineFormSessionsEffects = (function () {
    function TangerineFormSessionsEffects(store, service) {
        var _this = this;
        this.store = store;
        this.service = service;
        // Wether or not saving is currently taking place.
        this.saving = false;
        // Wether or not there is an item queued to save.
        this.queued = false;
        this.subscription = this.store.select('tangerineFormSession')
            .subscribe(function (tangerineFormSession) {
            if (tangerineFormSession && tangerineFormSession.hasOwnProperty('_id')) {
                _this.save(tangerineFormSession);
            }
        });
    }
    TangerineFormSessionsEffects.prototype.save = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.saving === false)) return [3 /*break*/, 4];
                        this.saving = true;
                        return [4 /*yield*/, this.service.forceSave(session)];
                    case 1:
                        session = _a.sent();
                        if (!(this.queued === true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.forceSave(this.queue)];
                    case 2:
                        session = _a.sent();
                        this.queued = false;
                        _a.label = 3;
                    case 3:
                        this.saving = false;
                        return [3 /*break*/, 5];
                    case 4:
                        this.queue = session;
                        this.queued = true;
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return TangerineFormSessionsEffects;
}());

//# sourceMappingURL=tangerine-form-sessions-effects.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/models/tangerine-base-card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tangerine_form_card__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-form-card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml__ = __webpack_require__("../../../../js-yaml/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_yaml__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineBaseCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TangerineBaseCardComponent = (function () {
    function TangerineBaseCardComponent(fb, el) {
        //
        // Input.
        //
        this._tangerineFormCard = new __WEBPACK_IMPORTED_MODULE_1__tangerine_form_card__["a" /* TangerineFormCard */]();
        this.tangerineFormCard = new __WEBPACK_IMPORTED_MODULE_1__tangerine_form_card__["a" /* TangerineFormCard */]();
        //
        // Output.
        //
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.showHeader = false;
        // Capture the internal element for getting any inline configuration set.
        this.internalEl = el;
        // Instantiate a Reactive Angular Form.
        this.form = fb.group({});
    }
    Object.defineProperty(TangerineBaseCardComponent.prototype, "tangerineFormModel", {
        get: function () {
            return this._tangerineFormModel;
        },
        set: function (model) {
            this._tangerineFormCard.model = model;
            this._tangerineFormModel = model;
        },
        enumerable: true,
        configurable: true
    });
    TangerineBaseCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Look for inline YAML configuration.
        var inlineConfig = this.internalEl.nativeElement.innerHTML;
        inlineConfig = inlineConfig.substring(inlineConfig.lastIndexOf('START-CONFIG'), inlineConfig.lastIndexOf('END-CONFIG'));
        if (inlineConfig) {
            inlineConfig = inlineConfig.split('\n');
            inlineConfig.splice(0, 1);
            inlineConfig.splice(inlineConfig.length - 2, inlineConfig.length);
            inlineConfig = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_js_yaml__["safeLoad"])(inlineConfig.join('\n'));
            Object.assign(this.tangerineFormCard, inlineConfig);
        }
        // Save away initial configuration for updating and emitting. Avoid infinite loops.
        this._tangerineFormCard = Object.assign({}, this.tangerineFormCard);
        // If there are any header properties, turn on header.
        if (this._tangerineFormCard.avatarImage || this._tangerineFormCard.title || this._tangerineFormCard.subtitle) {
            this.showHeader = true;
        }
        // Bubble up form changes to the change output.
        this.form.valueChanges.subscribe(function (model) {
            Object.assign(_this._tangerineFormCard, {
                status: _this.form.status,
                model: model
            });
            _this.change.emit(_this._tangerineFormCard);
        });
    };
    TangerineBaseCardComponent.prototype.onSubmit = function () {
        this.submit.emit(this._tangerineFormCard);
    };
    return TangerineBaseCardComponent;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tangerine_form_card__["a" /* TangerineFormCard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tangerine_form_card__["a" /* TangerineFormCard */]) === "function" && _a || Object)
], TangerineBaseCardComponent.prototype, "tangerineFormCard", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TangerineBaseCardComponent.prototype, "tangerineFormModel", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], TangerineBaseCardComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], TangerineBaseCardComponent.prototype, "submit", void 0);
var _a;
//# sourceMappingURL=tangerine-base-card.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/models/tangerine-form-card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormCard; });
var TangerineFormCard = (function () {
    function TangerineFormCard() {
        this.id = '';
        this.title = undefined;
        this.subtitle = undefined;
        this.image = undefined;
        this.avatarImage = undefined;
        this.showSubmitButton = false;
        this.model = {};
        this.status = 'INVALID';
        this.skip = false;
        this.logic = '';
    }
    return TangerineFormCard;
}());

//# sourceMappingURL=tangerine-form-card.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/models/tangerine-form-session.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_uuid__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormSession; });

var TangerineFormSession = (function () {
    function TangerineFormSession(session) {
        this._id = __WEBPACK_IMPORTED_MODULE_0_angular2_uuid__["UUID"].UUID();
        this.formId = '';
        this.model = {};
        this.date = Date.now();
        this.status = 'IN_PROGRESS';
        if (session) {
            Object.assign(this, session);
        }
    }
    return TangerineFormSession;
}());

//# sourceMappingURL=tangerine-form-session.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/models/tangerine-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineForm; });
var TangerineForm = (function () {
    function TangerineForm() {
        this.id = '';
    }
    return TangerineForm;
}());

//# sourceMappingURL=tangerine-form.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/reducers/tangerine-form-session-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_tangerine_form_session__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-form-session.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = tangerineFormSessionReducer;

function tangerineFormSessionReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case 'TANGERINE_FORM_SESSION_START':
            var newSession = new __WEBPACK_IMPORTED_MODULE_0__models_tangerine_form_session__["a" /* TangerineFormSession */]();
            newSession.formId = action.payload.formId;
            return Object.assign({}, newSession);
        case 'TANGERINE_FORM_SESSION_RESUME':
            return Object.assign({}, state, action.payload);
        case 'TANGERINE_FORM_SESSION_UPDATE':
            return Object.assign({}, state, action.payload);
        case 'TANGERINE_FORM_SESSION_MODEL_UPDATE':
            return Object.assign({}, state, { model: Object.assign({}, state.model, action.payload) });
        default:
            return state;
    }
}
;
//# sourceMappingURL=tangerine-form-session-reducer.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/eftouch-demo/eftouch-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/eftouch-demo/eftouch-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<eftouch-form-card (submit)=\"onSubmit($event)\">\n  id: 'card7'\n  title: '7/52'\n  subtitle: 'Here are some new pictures.. Please touch one of them..'\n  images:\n  - image: 'https://ictatrti.github.io/eftouch-test1/assets/airplane.png'\n  - image: 'https://ictatrti.github.io/eftouch-test1/assets/apple.png'\n  - image: 'https://ictatrti.github.io/eftouch-test1/assets/banana.png'\n</eftouch-form-card>\n"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/eftouch-demo/eftouch-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EftouchDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EftouchDemoComponent = (function () {
    function EftouchDemoComponent() {
    }
    EftouchDemoComponent.prototype.ngOnInit = function () {
    };
    return EftouchDemoComponent;
}());
EftouchDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-eftouch-demo',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/routes/eftouch-demo/eftouch-demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tangerine-forms/routes/eftouch-demo/eftouch-demo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EftouchDemoComponent);

//# sourceMappingURL=eftouch-demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/tangerine-form-card-demo/tangerine-form-card-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/tangerine-form-card-demo/tangerine-form-card-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Tangerine Form Card Demo </h2>\n\n\n<h3> \n  A basic Tangerine Form Card.\n</h3>\n\n<tangerine-form-card #card1>\n    id: 'card1'\n    fields:\n        - type: 'input'\n          key: 'variable1'\n          templateOptions: \n            required: true\n            label: 'Variable 1'\n            type: 'text'\n        - type: 'input'\n          key: 'variable2'\n          templateOptions: \n            required: true\n            label: 'Variable 2'\n            type: 'text'\n</tangerine-form-card>\n\n<pre>\n  {{card1.tangerineFormCard.model | json }}\n</pre>\n\n<h3> \n  A Tangerine Form Card with data prepopulated.\n</h3>\n\n<tangerine-form-card #card2>\n    id: 'card2'\n    fields:\n        - type: 'input'\n          key: 'variable1'\n          templateOptions: \n            required: true\n            label: 'Variable 1'\n            type: 'text'\n        - type: 'input'\n          key: 'variable2'\n          templateOptions: \n            required: true\n            label: 'Variable 2'\n            type: 'text'\n    model:\n      variable1: 'foo'\n      variable2: 'bar'\n</tangerine-form-card>\nOutput:\n<pre> {{card2.tangerineFormCard.model | json}}</pre>\n\n\n<h3> \n  Listening for changes on the card and sending them to console log.\n</h3>\n<tangerine-form-card (change)=\"onChange($event)\">\n    id: 'card3'\n    fields:\n        - type: 'input'\n          key: 'variable1'\n          templateOptions: \n            required: true\n            label: 'Variable 1'\n            type: 'text'\n        - type: 'input'\n          key: 'variable2'\n          templateOptions: \n            required: true\n            label: 'Variable 2'\n            type: 'text'\n</tangerine-form-card>\n\n\n<h3> \n  A Tangerine Form Card based on attribute input. \n</h3>\n<tangerine-form-card [tangerineFormCard]=\"tangerineFormCardExample\">\n</tangerine-form-card>\n\n\n<h3> \n  A Tangerine Form Card with a title, a subtitle, an avatar, and a submit button.\n</h3>\n<tangerine-form-card (submit)=\"onSubmit($event)\">\n    id: 'card5'\n    title: 'Fruit'\n    subtitle: 'A very important topic.'\n    avatarImage: 'https://tangerinekenya.github.io/DesignSprintPrototype-Team1/images/tangerineLogo.png'\n    showSubmitButton: true\n    fields:\n        - type: 'select'\n          key: 'doge_name'\n          templateOptions: \n            required: true\n            label: 'What is your favorite fruit?'\n            options:\n              - key: orange\n                label: Orange\n              - key: strawberry\n                label: Strawberry\n              - key: Tangerine\n                label: Tangerine\n              - key: coconut\n                label: Coconut\n</tangerine-form-card>\n\n\n<h3> \n  A Tangerine Form Card with everything: a title, a subtitle, image, an avatar, and a submit button.\n</h3>\n<tangerine-form-card (submit)=\"onSubmit($event)\">\n    id: 'card6'\n    title: 'Doge Wow!'\n    subtitle: 'So many squirrels, so little time.'\n    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'\n    avatarImage: 'assets/noun_727773_cc.png'\n    showSubmitButton: true\n    fields:\n        - type: 'input'\n          key: 'doge_name'\n          templateOptions: \n            required: true\n            label: 'Your dogs name?'\n            type: 'text'\n        - type: 'input'\n          key: 'doge_color'\n          templateOptions: \n            required: true\n            label: 'Your dogs favorite color?'\n            type: 'text'\n</tangerine-form-card>\n\n\n<h3> \n  A Tangerine Form Card with an expression for disabling a field.\n</h3>\n<tangerine-form-card #card7>\n    id: 'card7'\n    fields:\n      - type: 'select'\n        key: 'want_to_answer'\n        templateOptions:\n          required: true\n          options:\n            - value: 'no_answer'\n              label: '...'\n            - value: 'yes'\n              label: 'Yes'\n            - value: 'no'\n              label: 'No'\n          label: 'Would you like to tell us your name?'\n          type: 'text'\n      - type: 'input'\n        key: 'name'\n        expressionProperties: \n          'templateOptions.disabled': 'model.want_to_answer !== \"yes\"'\n          'templateOptions.label': 'model.name'\n        templateOptions:\n          required: true\n          label: 'What is your name?'\n          type: 'text'\n</tangerine-form-card>\nOutput:\n<pre> {{card7.tangerineFormCard.model | json}}</pre>\n\n\n<h3> \n  A Tangerine Form Card with a hide expression.\n</h3>\n<tangerine-form-card #card8>\n    id: 'card8'\n    fields:\n      - type: 'select'\n        key: 'want_to_answer'\n        templateOptions:\n          required: true\n          options:\n            - value: 'no_answer'\n              label: '...'\n            - value: 'yes'\n              label: 'Yes'\n            - value: 'no'\n              label: 'No'\n          label: 'Would you like to tell us your name?'\n          type: 'text'\n      - type: 'input'\n        key: 'name'\n        hideExpression: 'model.want_to_answer !== \"yes\"'\n        templateOptions:\n          required: true\n          label: 'What is your name?'\n          type: 'text'\n</tangerine-form-card>\nOutput:\n<pre> {{card8.tangerineFormCard.model | json}}</pre>\n"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/tangerine-form-card-demo/tangerine-form-card-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml__ = __webpack_require__("../../../../js-yaml/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_yaml__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormCardDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TangerineFormCardDemoComponent = (function () {
    function TangerineFormCardDemoComponent() {
        this.tangerineFormCardExample = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_js_yaml__["safeLoad"])("\n    id: 'card4'\n    fields:\n        - type: 'input'\n          key: 'variable1'\n          templateOptions: \n            required: true\n            label: 'Variable 1'\n            type: 'text'\n        - type: 'input'\n          key: 'variable2'\n          templateOptions: \n            required: true\n            label: 'Variable 2'\n            type: 'text'\n  ");
    }
    TangerineFormCardDemoComponent.prototype.ngOnInit = function () {
    };
    TangerineFormCardDemoComponent.prototype.onChange = function (tangerineFormCard) {
        console.log(tangerineFormCard);
    };
    TangerineFormCardDemoComponent.prototype.onSubmit = function (tangerineFormCard) {
        console.log(tangerineFormCard);
    };
    return TangerineFormCardDemoComponent;
}());
TangerineFormCardDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-tangerine-form-card-demo',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-form-card-demo/tangerine-form-card-demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-form-card-demo/tangerine-form-card-demo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TangerineFormCardDemoComponent);

//# sourceMappingURL=tangerine-form-card-demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/tangerine-form-resume-demo/tangerine-form-resume-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/tangerine-form-resume-demo/tangerine-form-resume-demo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<tangerine-form [session]=\"session\" formId=\"tangerine-form-demo\" #tangerineForm>\n\n  <h2> A basic Tangerine Form Card. </h2>\n  <tangerine-form-card>\n    id: 'card1'\n    fields:\n        - type: 'input'\n          key: 'variable1'\n          templateOptions: \n            required: true\n            label: 'Variable 1'\n            type: 'text'\n        - type: 'input'\n          key: 'variable2'\n          templateOptions: \n            required: true\n            label: 'Variable 2'\n            type: 'text'\n  </tangerine-form-card>\n\n  <h2> A Tangerine Form Card with bells and whistles. </h2>\n  <tangerine-form-card>\n    id: 'card3'\n    title: 'Fruit'\n    subtitle: 'A very important topic.'\n    avatarImage: 'https://tangerinekenya.github.io/DesignSprintPrototype-Team1/images/tangerineLogo.png'\n    fields:\n        - type: 'select'\n          key: 'favorite_fruit'\n          templateOptions: \n            required: true\n            label: 'What is your favorite fruit?'\n            options:\n              - value: not_selected\n                label: ''\n              - value: orange\n                label: Orange\n              - value: strawberry\n                label: Strawberry\n              - value: Tangerine\n                label: Tangerine\n              - value: coconut\n                label: Coconut\n  </tangerine-form-card>\n  \n  <h2> A Tangerine Form Card with a hide expression. </h2>\n  <tangerine-form-card #card8>\n      id: 'card8'\n      fields:\n        - type: 'select'\n          key: 'want_to_answer'\n          required: true\n          templateOptions:\n            required: true\n            options:\n              - value: 'no_answer'\n                label: '...'\n              - value: 'yes'\n                label: 'Yes'\n              - value: 'no'\n                label: 'No'\n            label: 'Would you like to tell us your name?'\n            type: 'text'\n        - type: 'input'\n          key: 'name'\n          hideExpression: 'model.want_to_answer !== \"yes\"'\n          templateOptions:\n            required: true\n            label: 'What is your name?'\n            type: 'text'\n  </tangerine-form-card>\n   \n  <h2> Two Tangerine Form Cards with a hide expression between them. </h2>\n  <tangerine-form-card>\n      id: 'card9'\n      fields:\n        - type: 'select'\n          key: 'want_to_answer_2'\n          required: true\n          templateOptions:\n            required: true\n            options:\n              - value: 'no_answer'\n                label: '...'\n              - value: 'yes'\n                label: 'Yes'\n              - value: 'no'\n                label: 'No'\n            label: 'Would you like to tell us your name?'\n            type: 'text'\n  </tangerine-form-card>\n\n  <tangerine-form-card>\n      id: 'card10'\n      fields:\n        - type: 'input'\n          key: 'name_2'\n          hideExpression: 'model.want_to_answer_2 !== \"yes\"'\n          templateOptions:\n            required: true\n            label: 'What is your name?'\n            type: 'text'\n  </tangerine-form-card>\n\n  <tangerine-form-session [session]=\"session\"></tangerine-form-session>\n\n</tangerine-form>"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/tangerine-form-resume-demo/tangerine-form-resume-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tangerine_form_session__ = __webpack_require__("../../../../../src/app/tangerine-forms/models/tangerine-form-session.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormResumeDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TangerineFormResumeDemoComponent = (function () {
    function TangerineFormResumeDemoComponent() {
        this.session = new __WEBPACK_IMPORTED_MODULE_1__models_tangerine_form_session__["a" /* TangerineFormSession */]({
            '_id': 'bc82cf48-b394-3053-6759-c36dec144460',
            'formId': 'tangerine-form-demo',
            'model': {
                'variable1': 'i am resumed',
                'variable2': '',
                'favorite_fruit': 'Tangerine',
                'want_to_answer': 'yes',
            }
        });
    }
    TangerineFormResumeDemoComponent.prototype.ngOnInit = function () {
    };
    return TangerineFormResumeDemoComponent;
}());
TangerineFormResumeDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-tangerine-form-resume-demo',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-form-resume-demo/tangerine-form-resume-demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-form-resume-demo/tangerine-form-resume-demo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TangerineFormResumeDemoComponent);

//# sourceMappingURL=tangerine-form-resume-demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/tangerine-forms-demo/tangerine-forms-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/tangerine-forms-demo/tangerine-forms-demo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<tangerine-form formId=\"tangerine-form-demo\" #tangerineForm>\n\n  <h2> A basic Tangerine Form Card. </h2>\n  <tangerine-form-card>\n    id: 'card1'\n    fields:\n        - type: 'input'\n          key: 'variable1'\n          templateOptions: \n            required: true\n            label: 'Variable 1'\n            type: 'text'\n        - type: 'input'\n          key: 'variable2'\n          templateOptions: \n            required: true\n            label: 'Variable 2'\n            type: 'text'\n  </tangerine-form-card>\n\n  <h2> A Tangerine Form Card with bells and whistles. </h2>\n  <tangerine-form-card>\n    id: 'card3'\n    title: 'Fruit'\n    subtitle: 'A very important topic.'\n    avatarImage: 'https://tangerinekenya.github.io/DesignSprintPrototype-Team1/images/tangerineLogo.png'\n    fields:\n        - type: 'select'\n          key: 'favorite_fruit'\n          templateOptions: \n            required: true\n            label: 'What is your favorite fruit?'\n            options:\n              - value: not_selected\n                label: ''\n              - value: orange\n                label: Orange\n              - value: strawberry\n                label: Strawberry\n              - value: Tangerine\n                label: Tangerine\n              - value: coconut\n                label: Coconut\n  </tangerine-form-card>\n  \n  <h2> A Tangerine Form Card with a hide expression. </h2>\n  <tangerine-form-card #card8>\n      id: 'card8'\n      fields:\n        - type: 'select'\n          key: 'want_to_answer'\n          required: true\n          templateOptions:\n            required: true\n            options:\n              - value: 'no_answer'\n                label: '...'\n              - value: 'yes'\n                label: 'Yes'\n              - value: 'no'\n                label: 'No'\n            label: 'Would you like to tell us your name?'\n            type: 'text'\n        - type: 'input'\n          key: 'name'\n          hideExpression: 'model.want_to_answer !== \"yes\"'\n          templateOptions:\n            required: true\n            label: 'What is your name?'\n            type: 'text'\n  </tangerine-form-card>\n   \n  <h2> Two Tangerine Form Cards with a hide expression between them. </h2>\n  <tangerine-form-card>\n      id: 'card9'\n      fields:\n        - type: 'select'\n          key: 'want_to_answer_2'\n          required: true\n          templateOptions:\n            required: true\n            options:\n              - value: 'no_answer'\n                label: '...'\n              - value: 'yes'\n                label: 'Yes'\n              - value: 'no'\n                label: 'No'\n            label: 'Would you like to tell us your name?'\n            type: 'text'\n  </tangerine-form-card>\n\n  <tangerine-form-card>\n      id: 'card10'\n      fields:\n        - type: 'input'\n          key: 'name_2'\n          hideExpression: 'model.want_to_answer_2 !== \"yes\"'\n          templateOptions:\n            required: true\n            label: 'What is your name?'\n            type: 'text'\n  </tangerine-form-card>\n\n  <tangerine-form-session [session]=\"tangerineForm.session\"></tangerine-form-session>\n\n</tangerine-form>"

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/routes/tangerine-forms-demo/tangerine-forms-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml__ = __webpack_require__("../../../../js-yaml/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_yaml__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormsDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TangerineFormsDemoComponent = (function () {
    function TangerineFormsDemoComponent() {
        this._basicForm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_js_yaml__["safeLoad"])("\n\n    id: 'tangerineFormSessionId1'\n    formId: 'form1'\n    sectionIndex: 0\n    pageIndex: 0\n    markedDone: false\n    isOnLastPage: false\n    model: \n      variable1: ''\n      variable2: ''\n    sections: \n      - status: 'UNSEEN'\n        path: '/a'\n        pages: \n          - status: 'UNSEEN'\n            fields: \n                - type: 'input'\n                  key: 'variable1'\n                  templateOptions: \n                    label: 'Variable 1'\n                    type: 'text'\n                - type: 'input'\n                  key: 'variable2'\n                  templateOptions: \n                    label: 'Variable 2'\n                    type: 'text'\n          - status: 'UNSEEN'\n            fields: \n                - type: 'input'\n                  key: 'variable3'\n                  templateOptions: \n                    label: 'Variable 3'\n                    type: 'text'\n                - type: 'input'\n                  key: 'variable4'\n                  templateOptions: \n                    label: 'Variable 4'\n                    type: 'text'\n\n  ");
        this._advancedForm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_js_yaml__["safeLoad"])("\n\n    id: 'tangerineFormSessionId1'\n    formId: 'form1'\n    pageIndex: 0\n    markedDone: false\n    model: \n    pages:\n      - status: 'UNSEEN'\n        section: '/Cat Survey/'\n        skip: ''\n        fields: \n          - type: 'radio'\n            key: 'cat_survey_confirmation'\n            templateOptions: \n              disabled: true\n              label: 'Would you like to answer a survey about cats?'\n              options: \n                - key: 'yes'\n                  value: 'yes'\n                - key: 'no'\n                  value: 'no'\n      - status: 'UNSEEN'\n        logic: 'if(model.hasOwnProperty(\"cat_survey_confirmation\") && model.cat_survey_confirmation === \"no\") skip = true'\n        skip: false,\n        section: '/Cat Survey/'\n        fields: \n          - type: 'radio'\n            key: 'cat_hair_preference'\n            templateOptions: \n              label: 'Do you prefer short haired or fluffy cats?'\n              options: \n                - key: 'fluffy'\n                  value: 'fluffy'\n                - key: 'short'\n                  value: 'short'\n      - status: 'UNSEEN'\n        skip: ''\n        section: '/Conclusion/'\n        fields: \n          - type: 'radio'\n            key: 'thank_you'\n            templateOptions: \n              label: 'Thank you for taking our survey.'\n              options: \n  ");
    }
    TangerineFormsDemoComponent.prototype.ngOnInit = function () {
        this.tangerineFormSession = this._advancedForm;
    };
    return TangerineFormsDemoComponent;
}());
TangerineFormsDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-tangerine-forms-demo',
        template: __webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-forms-demo/tangerine-forms-demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-forms-demo/tangerine-forms-demo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TangerineFormsDemoComponent);

//# sourceMappingURL=tangerine-forms-demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/services/tangerine-form-sessions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pouchdb__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormSessionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var TangerineFormSessionsService = (function () {
    function TangerineFormSessionsService() {
        this.DB = new __WEBPACK_IMPORTED_MODULE_1_pouchdb__('tangerine-form-sessions');
    }
    TangerineFormSessionsService.prototype.getAll = function (formId) {
        return __awaiter(this, void 0, void 0, function () {
            var result, docs, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.DB.allDocs({
                                include_docs: true
                            })];
                    case 1:
                        result = _a.sent();
                        docs = result.rows.map(function (row) { return row.doc; });
                        docs.sort(function (a, b) { return b.date - a.date; });
                        if (formId) {
                            return [2 /*return*/, docs.filter(function (doc) { return doc.formId === formId; })];
                        }
                        return [2 /*return*/, docs];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TangerineFormSessionsService.prototype.add = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.DB.post(session)];
                    case 1:
                        response = _a.sent();
                        session._rev = response.rev;
                        console.log("TANGERINE_FORM_SESSIONS_ADD, TangerineFormSession._id: " + session._id);
                        return [2 /*return*/, session];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TangerineFormSessionsService.prototype.update = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.DB.put(session)];
                    case 1:
                        response = _a.sent();
                        session._rev = response.rev;
                        console.log("TANGERINE_FORM_SESSIONS_UPDATE, TangerineFormSession._id: " + session._id + ", TangerineFormSession._rev: " + session._rev);
                        return [2 /*return*/, session];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TangerineFormSessionsService.prototype.forceSave = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, error_4, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        doc = { rev: '', _rev: '' };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 9]);
                        return [4 /*yield*/, this.DB.get(session._id)];
                    case 2:
                        // Get the most recent rev and then save the session.
                        doc = _a.sent();
                        console.log('Updating form session');
                        session._rev = doc._rev;
                        return [4 /*yield*/, this.DB.put(session)];
                    case 3:
                        doc = _a.sent();
                        return [3 /*break*/, 9];
                    case 4:
                        error_4 = _a.sent();
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        console.log('Inserting new form session');
                        return [4 /*yield*/, this.DB.post(session)];
                    case 6:
                        doc = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        error_5 = _a.sent();
                        console.log('Unable to post a new doc or update the doc.');
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 9];
                    case 9:
                        session._rev = doc.rev;
                        console.log("TANGERINE_FORM_SESSIONS_UPDATE, TangerineFormSession._id: " + session._id + ", TangerineFormSession._rev: " + session._rev);
                        return [2 /*return*/, session];
                }
            });
        });
    };
    TangerineFormSessionsService.prototype.delete = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.DB.delete(session)];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return TangerineFormSessionsService;
}());
TangerineFormSessionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TangerineFormSessionsService);

//# sourceMappingURL=tangerine-form-sessions.service.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/tangerine-forms-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_tangerine_forms_demo_tangerine_forms_demo_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-forms-demo/tangerine-forms-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_tangerine_form_card_demo_tangerine_form_card_demo_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-form-card-demo/tangerine-form-card-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_tangerine_form_resume_demo_tangerine_form_resume_demo_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-form-resume-demo/tangerine-form-resume-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_eftouch_demo_eftouch_demo_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/routes/eftouch-demo/eftouch-demo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: 'tangerine-forms-demo',
        component: __WEBPACK_IMPORTED_MODULE_2__routes_tangerine_forms_demo_tangerine_forms_demo_component__["a" /* TangerineFormsDemoComponent */],
    },
    {
        path: 'tangerine-form-resume-demo',
        component: __WEBPACK_IMPORTED_MODULE_4__routes_tangerine_form_resume_demo_tangerine_form_resume_demo_component__["a" /* TangerineFormResumeDemoComponent */]
    },
    {
        path: 'tangerine-form-card-demo',
        component: __WEBPACK_IMPORTED_MODULE_3__routes_tangerine_form_card_demo_tangerine_form_card_demo_component__["a" /* TangerineFormCardDemoComponent */]
    },
    {
        path: 'eftouch-demo',
        component: __WEBPACK_IMPORTED_MODULE_5__routes_eftouch_demo_eftouch_demo_component__["a" /* EftouchDemoComponent */]
    }];
var TangerineFormsRoutingModule = (function () {
    function TangerineFormsRoutingModule() {
    }
    return TangerineFormsRoutingModule;
}());
TangerineFormsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        declarations: []
    })
], TangerineFormsRoutingModule);

//# sourceMappingURL=tangerine-forms-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/tangerine-forms/tangerine-forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_formly__ = __webpack_require__("../../../../ng-formly/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_tangerine_form_sessions_service__ = __webpack_require__("../../../../../src/app/tangerine-forms/services/tangerine-form-sessions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers_tangerine_form_session_reducer__ = __webpack_require__("../../../../../src/app/tangerine-forms/reducers/tangerine-form-session-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_tangerine_form_tangerine_form_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/containers/tangerine-form/tangerine-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tangerine_forms_routing_module__ = __webpack_require__("../../../../../src/app/tangerine-forms/tangerine-forms-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_tangerine_forms_demo_tangerine_forms_demo_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-forms-demo/tangerine-forms-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tangerine_form_card_tangerine_form_card_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-card/tangerine-form-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_tangerine_form_card_demo_tangerine_form_card_demo_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-form-card-demo/tangerine-form-card-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tangerine_form_session_tangerine_form_session_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-session/tangerine-form-session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routes_tangerine_form_resume_demo_tangerine_form_resume_demo_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/routes/tangerine-form-resume-demo/tangerine-form-resume-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__routes_eftouch_demo_eftouch_demo_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/routes/eftouch-demo/eftouch-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_eftouch_form_card_eftouch_form_card_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/components/eftouch-form-card/eftouch-form-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_tangerine_form_links_tangerine_form_links_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-links/tangerine-form-links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_tangerine_form_sessions_tangerine_form_sessions_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-sessions/tangerine-form-sessions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tangerine_form_session_item_tangerine_form_session_item_component__ = __webpack_require__("../../../../../src/app/tangerine-forms/components/tangerine-form-session-item/tangerine-form-session-item.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TangerineFormsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var TangerineFormsModule = (function () {
    function TangerineFormsModule() {
    }
    return TangerineFormsModule;
}());
TangerineFormsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_10__tangerine_forms_routing_module__["a" /* TangerineFormsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng_formly__["a" /* FormlyModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ng_formly__["b" /* FormlyBootstrapModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* StoreModule */].provideStore({ tangerineFormSession: __WEBPACK_IMPORTED_MODULE_8__reducers_tangerine_form_session_reducer__["a" /* tangerineFormSessionReducer */] }),
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({
                maxAge: 100
            })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__containers_tangerine_form_tangerine_form_component__["a" /* TangerineFormComponent */],
            __WEBPACK_IMPORTED_MODULE_11__routes_tangerine_forms_demo_tangerine_forms_demo_component__["a" /* TangerineFormsDemoComponent */],
            //   TangerineFormPagerComponent,
            //   TangerineFormBreadcrumbComponent,
            __WEBPACK_IMPORTED_MODULE_12__components_tangerine_form_card_tangerine_form_card_component__["a" /* TangerineFormCardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__routes_tangerine_form_card_demo_tangerine_form_card_demo_component__["a" /* TangerineFormCardDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_tangerine_form_session_tangerine_form_session_component__["a" /* TangerineFormSessionComponent */],
            __WEBPACK_IMPORTED_MODULE_15__routes_tangerine_form_resume_demo_tangerine_form_resume_demo_component__["a" /* TangerineFormResumeDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__routes_eftouch_demo_eftouch_demo_component__["a" /* EftouchDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_eftouch_form_card_eftouch_form_card_component__["a" /* EftouchFormCardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_tangerine_form_links_tangerine_form_links_component__["a" /* TangerineFormLinksComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_tangerine_form_sessions_tangerine_form_sessions_component__["a" /* TangerineFormSessionsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_tangerine_form_session_item_tangerine_form_session_item_component__["a" /* TangerineFormSessionItemComponent */]
            //   TangerineFormCarouselComponent
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_12__components_tangerine_form_card_tangerine_form_card_component__["a" /* TangerineFormCardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_tangerine_form_links_tangerine_form_links_component__["a" /* TangerineFormLinksComponent */],
            __WEBPACK_IMPORTED_MODULE_9__containers_tangerine_form_tangerine_form_component__["a" /* TangerineFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_tangerine_form_sessions_service__["a" /* TangerineFormSessionsService */]]
    })
], TangerineFormsModule);

//# sourceMappingURL=tangerine-forms.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map