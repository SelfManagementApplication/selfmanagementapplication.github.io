(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*     --blue: #007bff;\r\n--indigo: #6610f2;\r\n--purple: #6f42c1;\r\n--pink: #e83e8c;\r\n--red: #dc3545;\r\n--orange: #fd7e14;\r\n--yellow: #ffc107;\r\n--green: #28a745;\r\n--teal: #20c997;\r\n--cyan: #17a2b8;\r\n--white: #fff;\r\n--gray: #6c757d;\r\n--gray-dark: #343a40;\r\n--primary: #007bff;\r\n--secondary: #6c757d;\r\n--success: #28a745;\r\n--info: #17a2b8;\r\n--warning: #ffc107;\r\n--danger: #dc3545;\r\n--light: #f8f9fa;\r\n--dark: #343a40;\r\n--breakpoint-xs: 0;\r\n--breakpoint-sm: 576px;\r\n--breakpoint-md: 768px;\r\n--breakpoint-lg: 992px;\r\n--breakpoint-xl: 1200px;\r\n--font-family-sans-serif: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\r\n--font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;\r\n */\r\n#wrapper {\r\n\twidth: 100%;\r\n\tmin-height: 100vh;\r\n\tpadding-top: 80px;\r\n}\r\nnav {\r\n\twidth: 100%;\r\n\theight: 80px;\r\n\tline-height: 80px;\r\n\tbackground-color: #6610f2;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 999;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n}\r\nnav h1 {\r\n\tline-height: 80px;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tdisplay: inline-block;\r\n}\r\nnav .menuBtnWrap {\r\n\ttext-align: right;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"mat-app-background\">\r\n\t<nav>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-10\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<img src=\"../assets/images/logo.png\" alt=\"SelfManagementApplication\" width=\"60\" height=\"60\">\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-10 d-none d-lg-block\"><h1>Self Management Application</h1></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\t\r\n\t\t\t\t<div class=\"col-1\">\r\n\t\t\t\t\t<div class=\"menuBtnWrap\">\r\n\t\t\t\t\t\t<button mat-button [matMenuTriggerFor]=\"menu\" class=\"menuBtn fa fa-bars fa-2x\"></button>\r\n\t\t\t\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t\t\t\t<button mat-menu-item routerLink=\"main\">Задачі</button>\r\n\t\t\t\t\t\t\t<button mat-menu-item routerLink=\"info\">Інфо</button>\r\n\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> \r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div id=\"content\">\r\n\t\t<router-outlet></router-outlet>\t\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Self Management Application';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-storage.service */ "./src/app/data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_8__["InfoComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"] },
                    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_8__["InfoComponent"] },
                    { path: '', redirectTo: 'main', pathMatch: 'full' }
                ])
            ],
            providers: [_data_storage_service__WEBPACK_IMPORTED_MODULE_9__["DataStorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-storage.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-storage.service.ts ***!
  \*****************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataStorageService = /** @class */ (function () {
    function DataStorageService() {
    }
    DataStorageService.prototype.storeData = function (key, data) {
        this.localStorage.setItem(key, JSON.stringify(data));
    };
    DataStorageService.prototype.getData = function (key) {
        return JSON.parse(this.localStorage.getItem(key));
    };
    Object.defineProperty(DataStorageService.prototype, "localStorage", {
        get: function () {
            return window.localStorage;
        },
        enumerable: true,
        configurable: true
    });
    DataStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabContent {\r\n\tpadding-top: 20px;\r\n}\r\n.tabContent p {\r\n\ttext-indent: 15px;\r\n}\r\n.imgWrap {\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tmargin: 20px auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"info\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<mat-tab-group>\n\t\t\t\t<mat-tab label=\"Принцип Парето\">\n\t\t\t\t<div class=\"tabContent\">\n\t\t\t\t\t<h2>Принцип Парето</h2>\n\t\t\t\t\t<p>Принцип Парето в загальному виді говорить, що всередині даної групи окремі малі частини виявляють набагато більшу значимість, чим це відповідає їх відносній питомій вазі в цій групі. Принцип сформульовано італійським економістом Вільфредо Парето ще в минулому столітті. Принцип Парето неодноразово підтверджено на практиці у всіляких сферах. Так, американські інженери, застосувавши принцип Парето при інвентаризації, знайшли, що 20% запасів зазвичай складають 80% вартості інвентарю, що підлягає обліку. Зосередження контролю саме на цих 20% інвентарю привело до значної економії витрат у порівнянні з іншими методами інвентаризації. Приклади з підприємницької практики підтверджують, що:</p>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>а)\t20% клієнтів (товарів) дають 80% обороту чи прибутку;</li>\n\t\t\t\t\t\t<li>б)\t80% клієнтів (товарів) приносять 20% обороту чи прибутку;</li>\n\t\t\t\t\t\t<li>в)\t20% помилок обумовлюють 80% втрат;</li>\n\t\t\t\t\t\t<li>г)\t80% помилок обумовлюють 20% втрат;</li>\n\t\t\t\t\t\t<li>д)\t20% вихідних продуктів визначають 80% вартості готового виробу;</li>\n\t\t\t\t\t\t<li>е)\t80% вихідних продуктів визначають 20% вартості готового виробу.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t\t<p>Таким чином, коли говорять про принцип Парето, мають на увазі співвідношення 80:20.\n\t\t\t\t\tПеренесення цієї закономірності на робочу ситуацію керівника означає, що в процесі роботи за перші 20% часу, що витрачається, досягається 80%результатів.</p>\n\t\t\t\t\t<p>Таким чином, принцип Парето (співвідношення 80:20) стосовно до\n\t\t\t\t\t\tраціонального використання часу говорить: «80% кінцевих результатів досягається тільки за 20% витраченого часу, тоді як інші 20% менш важливих завдань «поглинають» 80% робочого часу».\n\t\t\t\t\tСтосовно до повсякденної роботи це означає, що треба завжди виконувати в першу чергу «життєво важливі» завдання, а вже потім – числені другорядні.</p>\n\t\t\t\t</div>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"Аналіз АБВ\">\n\t\t\t\t<div class=\"tabContent\">\n\t\t\t\t\t<h2>Аналіз АБВ</h2>\n\t\t\t\t\t<p>За допомогою аналізу А Б В ви забезпечуєте упорядкування задач за їх значимістю й орієнтацію результатів роботи на досягнення найбільшого ефекту.\n\t\t\t\t\t\tБукви А, Б, В означають три класи задач відповідно до їхньої значимості з погляду досягнення професійних і особистих цілей.\n\t\t\t\t\t\tАналіз А Б В ґрунтується на наступних 3-х закономірностях,\n\t\t\t\t\tпідтверджених досвідом</p>\n\t\t\t\t\t<div class=\"imgWrap\">\n\t\t\t\t\t\t<img src=\"../../assets/images/ABCtable.png\" alt=\"Таблиця АБВ\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>а)\tНайважливіші задачі (категорії А) складають приблизно 15%\n\t\t\t\t\t\tкількості всіх задач і справ, якими зайнятий керівник. Значимість цих задач (щодо їх внеску в досягнення мети) складає при цьому – 65%.</li>\n\t\t\t\t\t\t<li>б)\tНа важливі задачі (категорії Б) припадає в середньому 20% загальної\n\t\t\t\t\t\tкількості, а також 20% значимості задач і справ керівника.</li>\n\t\t\t\t\t\t<li>в)\tМенш важливі і несуттєві задачі (категорія В) складають 65%\n\t\t\t\t\t\tзагального числа задач, але мають незначну частку (приблизно 15%) у загальній «вартості» усіх справ, що повинний виконати менеджер.</li>\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p>За найважливіші справи, що приносять найбільший результат (справи А) треба братися в першу чергу, щоб за допомогою деяких дій забезпечити велику частину загального ефекту. – на наступні по значимості задачі Б приходиться також істотна частина сукупного результату, тоді як виконання щодо більшого числа, але менш важливих задач у цілому дає невеликий підсумок. Головні труднощі полягають у тому, щоб точно визначити ті самі 20%, що визначають успіх справи!\n\t\t\t\t\t\tЗастосування аналізу А Б В\n\t\t\t\t\t\tАналіз задач по методу А Б В ви можете здійснювати в такий спосіб:\n\t\t\t\t\t</p>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>а)\tСкласти список усіх майбутніх у відповідному періоді часу (місяць,\n\t\t\t\t\t\tдень і т.д.) справ (чи задач).</li>\n\t\t\t\t\t\t<li>б)\t Систематизувати задачі за їх важливістю, встановити черговість\n\t\t\t\t\t\tсправ відповідно до їх значення для необхідної діяльності.</li>\n\t\t\t\t\t\t<li>в)\t Пронумерувати задачі.</li>\n\t\t\t\t\t\t<li>г)\tРозподілити задачі відповідно до категорій А, Б, В:\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>1)\tА – перші 15% усіх задач (дуже важливі, що мають найбільшу значимість) – не підлягають передорученню;</li>\n\t\t\t\t\t\t\t\t<li>2)\tБ – наступні 20% задач – категорії Б (дуже важливі, але їх можна виконати в другу чергу) – можуть бути передоручені для виконання іншим особам;</li>\n\t\t\t\t\t\t\t\t<li>3)\tВ – інші 65% усіх задач (категорії В) – менш важливі, незначні. Вони в будь-якому випадку повинні бути передоручені.</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>д)\t Перевірити ще раз, виходячи з першочерговості задач, часовий</li>\n\t\t\t\t\t\t<li>е)\tплан, щоб бюджет часу відповідав значимості задач:\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>1)\t65% запланованого часу – задачі А;</li>\n\t\t\t\t\t\t\t\t<li>2)\t20% запланованого часу – задачі Б;</li>\n\t\t\t\t\t\t\t\t<li>3)\t15% запланованого часу – задачі В.</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>ж)\tЗробити відповідне корегування.\n\t\t\t\t\t\tОрієнтуючи свій часовий план на задачі А, ви таким чином автоматично забезпечуєте на менш важливі, але поглинаючі багато часу задачі В стільки часу, скільки вони того варті.</li>\n\t\t\t\t\t\t<li>з)\tОцінити задачі Б и В щодо можливості їх делегування.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p>Задачі категорії В не є в принципі непотрібними. Мовиться про те, що поряд із задачами А и Б існує безліч менш важливих робіт, рутинних справ, що також повинні бути виконані.\n\t\t\t\t\t\tПрийняття рішень про пріоритети, так само як і процес установлення цілей, - справа індивідуальна, тому що оцінка ситуації в значній мірі є суб’єктивною. Менеджер самостійно визначає пріоритети задач, що підлягають рішенню, і час, необхідний для їх вирішення.\n\t\t\t\t\tДля забезпечення прийняття рішень при плануванні і знаходженні задач категорії А треба поставити собі такі питання:</p>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>а)\tЗавдяки виконанню яких задач, я найбільшою мірою наближаюся до\n\t\t\t\t\t\tвтілення моїх головних цілей (цілей дня, тижня, місяця, року)?</li>\n\t\t\t\t\t\t<li>б)\tЧи можу я за рахунок виконання однієї єдиної задачі вирішити</li>\n\t\t\t\t\t\t<li>в)\tвідразу декілька інших?</li>\n\t\t\t\t\t\t<li>г)\tЗавдяки виконанню яких задач я можу внести максимальний вклад у\n\t\t\t\t\t\tдосягнення загальних цілей мого підприємства, відділу, групи?</li>\n\t\t\t\t\t\t<li>д)\tВиконання яких задач принесе мені найбільшу користь (у короткостроковому і довгостроковому плані)?</li>\n\t\t\t\t\t\t<li>е)\tНевиконання яких задач може мати найнегативніші наслідки?</li>\n\t\t\t\t\t\t<li>ж)\tУстановлення пріоритетів – основне правило ефективної техніки\n\t\t\t\t\t\tроботи.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"Принцип Ейзенхауера\">\n\t\t\t\t<div class=\"tabContent\">\n\t\t\t\t\t<h2>Принцип Ейзенхауера</h2>\n\t\t\t\t\t<p>Існує метод прискореного аналізу пріоритетності задач, розроблений\n\t\t\t\t\t\tамериканським генералом Дуайтом Ейзенхауером. Він застосовується в тих випадках, коли треба швидко прийняти рішення щодо того, яким задачам віддати перевагу.\n\t\t\t\t\tВідповідно до цього принципу, пріоритети встановлюються за такими критеріями як терміновість і важливість справи.</p>\n\t\t\t\t\t<div class=\"imgWrap\">\n\t\t\t\t\t\t<img src=\"../../assets/images/Eizenhauer.png\" alt=\"Принцип Ейзенхауера\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>Можливості їхньої оцінки і виконання:</p>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>а)\tТермінові і важливі справи (правий верхній квадрант). – За них\n\t\t\t\t\t\tварто прийматися негайно і самому їх виконувати. Вони відповідають задачам категорії А.</li>\n\t\t\t\t\t\t<li>б)\tВажливі, але менш термінові задачі (лівий верхній квадрант) –\n\t\t\t\t\t\tзадачі категорії Б. – Їх не треба виконувати терміново. Вони, як правило, можуть почекати. Однак тут є небезпека, що рано чи пізно ці задачі перетворяться в термінові, і вам особисто прийдеться вирішувати їх у найкоротший термін. Тому треба намагатися такі задачі, по можливості цілком або частково, доручати своїм співробітникам. Таким чином, ви розвантажуєте себе і сприяєте мотивації і підвищенню кваліфікації своїх підлеглих, довіряючи їм відповідальні справи.</li>\n\t\t\t\t\t\t<li>в)\tТермінові, менш важливі справи (правий нижній квадрант) – задачі\n\t\t\t\t\t\tкатегорії В. Тут існує небезпека потрапити під «тиранію» нагальності і, як наслідок, цілком віддатися рішенню конкретної задачі, тому що вона термінова. Якщо ж вона не є настільки терміновою, то вона повинна бути в будь-якому випадку делегована, оскільки для її виконання не потрібно яких-небудь особливих якостей.</li>\n\t\t\t\t\t\t<li>г)\tМенш термінові і менш важливі справи. Дуже часто справи цієї\n\t\t\t\t\t\tкатегорії осідають на письмовому столі. Якщо ви починаєте займатися цими справами, то задачі І категорії не виконуються, чи у вас відбувається перевантаження і, як наслідок, - стрес.  Не бійтеся відправляти їх до архіву, або у корзину. Якщо ви будете послідовно розподіляти свої справи по категоріях відповідно до принципу Ейзенхауера, ви значно підвищите свою продуктивність.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t</mat-tab>\n\t\t\t\t</mat-tab-group>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () { };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host * {\r\n\tfont-size: 18px;\r\n}\r\n#main {\r\n\toverflow-x: hidden;\r\n}\r\ntd {\r\n\twidth: 20% !important;\r\n\theight: 95px !important;\r\n}\r\n.newTaskNameInput {\r\n\twidth: 80%;\r\n\tmargin: 20px auto;\r\n}\r\n.newTaskAddButton {\r\n\tdisplay: inline-block;\r\n}\r\n@media (max-width: 576px) {\r\n\t#main {\r\n\t\toverflow-x: scroll;\r\n\t}\r\n\t.newTaskNameInput {\r\n\t\twidth: 60%;\r\n\t\tmargin: 20px auto;\r\n\t}\r\n\ttd {\r\n\t\twidth: 20% !important;\r\n\t\theight: auto !important;\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<mat-form-field class=\"newTaskNameInput\">\n\t\t\t\t\t<input matInput placeholder=\"Нова задача\" [(ngModel)]=\"newTaskName\" />\n\t\t\t\t</mat-form-field>\n\t\t\t\t<button mat-button (click)=\"addNew(newTaskName)\"><i class=\"newTaskAddButton fa fa-plus fa-2x\"></i></button>\n\t\t\t</div>\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Виконано</th>\n\t\t\t\t\t\t\t<th>Назва задачі</th>\n\t\t\t\t\t\t\t<th>Пріорітет</th>\n\t\t\t\t\t\t\t<th>Елементи управління</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let task of taskList\">\n\t\t\t\t\t\t\t<td><mat-checkbox [(ngModel)]=\"task.isDone\"></mat-checkbox></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<span [style.display]=\"task.editorMode ? 'none': 'block'\">{{task.name}}</span>\n\t\t\t\t\t\t\t\t<span [style.display]=\"task.editorMode ?'block' : 'none'\">\n\t\t\t\t\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" [(ngModel)]=\"task.name\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td><span [style.display]=\"task.editorMode ? 'none': 'block'\">{{task.priority}}</span>\n\t\t\t\t\t\t\t\t<span [style.display]=\"task.editorMode ?'block' : 'none'\">\n\t\t\t\t\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t\t\t\t\t<input matInput type=\"text\" [(ngModel)]=\"task.priority\">\n\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button mat-button [style.display]=\"task.editorMode ? 'none': 'inline-block'\" (click)=\"edit(task)\"><i class='fa fa-edit fa-2x'></i></button>\n\t\t\t\t\t\t\t\t<button mat-button mat-raised-button [style.display]=\"task.editorMode ?'inline-block' : 'none'\" (click)=\"save(task)\"><i class='fa fa-save fa-2x'></i></button>\n\t\t\t\t\t\t\t\t<button mat-button><i class='fa fa-trash fa-2x' (click)=\"delete(task)\"></i></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\t\n\t\t</div>\n\t\t\n\t\t\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-storage.service */ "./src/app/data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(dataStorage) {
        this.dataStorage = dataStorage;
        this.testDataKey = 'SMAdata';
        this.taskList = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        if (this.dataStorage.getData(this.testDataKey)) {
            this.taskList = this.dataStorage.getData(this.testDataKey);
        }
        else {
            this.taskList = this.storeTestData();
        }
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.dataStorage.storeData(this.testDataKey, this.taskList);
    };
    MainComponent.prototype.edit = function (task) {
        task.editorMode = true;
    };
    MainComponent.prototype.save = function (task) {
        task.editorMode = false;
    };
    MainComponent.prototype.delete = function (task) {
        this.taskList.splice(this.taskList.indexOf(task), 1);
    };
    MainComponent.prototype.addNew = function (name) {
        this.taskList.push({ name: name, priority: 0, isDone: false, editorMode: false, usedMethod: 'none' });
        this.newTaskName = '';
    };
    MainComponent.prototype.storeTestData = function () {
        var testData = [
            {
                name: 'Отримати допуск до захисту диплому',
                priority: 1,
                isDone: true,
                editorMode: false,
                usedMethod: 'none'
            },
            { name: 'Захистити диплом', priority: 1, isDone: false, editorMode: false, usedMethod: 'none' },
            {
                name: 'Отримати ступінь бакалвр з менеджменту',
                priority: 1,
                isDone: false,
                editorMode: false,
                usedMethod: 'none'
            }
        ];
        return testData;
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SMA\sma\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map