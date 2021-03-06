webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historical_weather_historical_weather_component__ = __webpack_require__("../../../../../src/app/historical-weather/historical-weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hdd_cdd_hdd_cdd_component__ = __webpack_require__("../../../../../src/app/hdd-cdd/hdd-cdd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__predictions_predictions_component__ = __webpack_require__("../../../../../src/app/predictions/predictions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //Added



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'historical-weather',
        component: __WEBPACK_IMPORTED_MODULE_4__historical_weather_historical_weather_component__["a" /* HistoricalWeatherComponent */]
    },
    {
        path: 'hdd-cdd',
        component: __WEBPACK_IMPORTED_MODULE_5__hdd_cdd_hdd_cdd_component__["a" /* HddCddComponent */]
    },
    {
        path: 'predictions',
        component: __WEBPACK_IMPORTED_MODULE_6__predictions_predictions_component__["a" /* PredictionsComponent */]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes), __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    margin:0;\n    padding:0;\n    height:100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import the DataService

var AppComponent = /** @class */ (function () {
    // Create an instance of the DataService through dependency injection
    function AppComponent(_dataService) {
        this._dataService = _dataService;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__container_container_component__ = __webpack_require__("../../../../../src/app/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__historical_weather_historical_weather_component__ = __webpack_require__("../../../../../src/app/historical-weather/historical-weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hdd_cdd_hdd_cdd_component__ = __webpack_require__("../../../../../src/app/hdd-cdd/hdd-cdd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__predictions_predictions_component__ = __webpack_require__("../../../../../src/app/predictions/predictions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import the Http Module and our Data Service













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__container_container_component__["a" /* ContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__historical_weather_historical_weather_component__["a" /* HistoricalWeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_15__hdd_cdd_hdd_cdd_component__["a" /* HddCddComponent */],
                __WEBPACK_IMPORTED_MODULE_16__predictions_predictions_component__["a" /* PredictionsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_17__angular_common__["d" /* DatePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/container/container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#body {\n    text-align: center;\n    padding:10px;\n    padding-bottom:60px;   /* Height of the footer */\n}\n\n.img-gif {\n    position: relative;\n    padding-bottom: 15px;\n    width: 350px !important;\n    height: 250px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "    <div id=\"body\">\n        <div>\n                <h1>Large Data Processing and Visualization</h1><br>\n                <h5>Analyzing long-term trends and fluctuation of all financial tools indices, \n                    including weather derivatives (weather futures), which is one of the most popular trade we are analyzing in \n                    this project.\n                    <ul>\n                        The main idea, first of all,  is to explain what weather futures are and how they related to the weather, particularly to the temperature.\n                        The second step for the project is to implement one of the existing algorithms for weather prediction and, based on that, to implement calculations for the prices for the chosen month.\n                    </ul>\n                </h5>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-sm\">\n              <a href=\"#\" routerLink=\"historical-weather\">\n              <img class=\"img-gif\" title=\"Historical Weather\" src=\"https://cdn.dribbble.com/users/340460/screenshots/2046488/weather-icons.gif\" alt=\"Historical Weather\"/> \n              <h5>Historical Weather</h5>\n            </a>\n          </div>\n          <div class=\"col-sm\">\n              <a href=\"#\" routerLink=\"hdd-cdd\">\n              <img class=\"img-gif\" title=\"HDD and CDD\" src=\"https://mir-s3-cdn-cf.behance.net/project_modules/disp/c48be530971807.563b2b13efcae.gif\"/>\n              <h5>HDD and CDD</h5>\n            </a>\n          </div>\n          <div class=\"col-sm\">\n              <a href=\"#\" routerLink=\"predictions\">\n              <img class=\"img-gif\" title=\"Weather and Price Predictions\" src=\"https://i.pinimg.com/originals/5f/0c/8b/5f0c8bc65470f8b8b011802a14c2a099.gif\"/>\n              <h5>Weather and Price Predictions</h5>\n              </a>\n          </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-container',
            template: __webpack_require__("../../../../../src/app/container/container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(_http, _httpClient, datePipe) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.datePipe = datePipe;
    }
    DataService.prototype.hdd_cdd_DataFilter = function (startDate, endDate, cityCode, future) {
        var uri = "/api/hdd_cdd";
        return this._httpClient.get(uri)
            .map(function (result) { return result; });
    };
    DataService.prototype.dateRangeFilter = function (startDate, endDate, cityCode) {
        var uri = "/api/historicalWeatherData";
        return this._httpClient.get(uri)
            .map(function (result) { return result; });
    };
    DataService.prototype.dateRangeForPrediction = function (startDate, endDate, cityCode) {
        var uri = "/api/weatherPrediction/" + this.datePipe.transform(startDate, "yyyy-MM-dd")
            + "/" + this.datePipe.transform(endDate, "yyyy-MM-dd")
            + "/" + cityCode;
        return this._httpClient.get(uri)
            .map(function (result) { return result; });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer {\n    position: fixed;\n    bottom:0;\n    width:100%;\n    height:60px;   /* Height of the footer */\n    background: #00C38B;\n    text-align: center;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <p>Copyright &copy; by Priyanka & Inga.\n        All Rights Reserved from 2018 - 2028</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hdd-cdd/hdd-cdd.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"form\" onload=\"onload();\">\n    <br><br>\n    <form class=\"form-inline justify-content-center\">\n            <div class=\"form-group mb-2\">\n                <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Select Date Range : </label>\n                <div class=\"col-xs-12 col-12 col-sm-6 col-md-4 form-group\">\n                    <input #newDate\n                        (keyup.enter)=\"hdd_cdd_filter(newDate.value)\"\n                        (blur)=\"hdd_cdd_filter(newDate.value); newDate.value='' \"\n                        class=\"form-control\" \n                        placeholder=\"Daterangepicker\" \n                        name = \"daterange\"\n                        bsDaterangepicker #dpr=\"bsDaterangepicker\">\n                </div>\n            </div>\n            <div class=\"form-group mx-sm-3 mb-2\">\n                <div class=\"dropdown\" ngbDropdown>\n                    <button class=\"btn btn-primary\" id=\"sortFuture\" ngbDropdownToggle>{{selectedFuture}}</button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"sortFuture\" ngbDropdownMenu>\n                        <button class=\"dropdown-item\" *ngFor=\"let future of futures\" (click)=\"ChangeFuture(future)\" >{{future}}</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group mx-sm-3 mb-2\">\n                    <div class=\"dropdown\" ngbDropdown>\n                        <button class=\"btn btn-primary\" id=\"sortMenu\" ngbDropdownToggle>{{selectedCity}}</button>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"sortMenu\" ngbDropdownMenu>\n                            <button class=\"dropdown-item\" *ngFor=\"let city of cities\" (click)=\"ChangeCity(city)\" >{{city}}</button>\n                        </div>\n                    </div>\n            </div>\n            <div class=\"form-group mb-2\">\n                <button (click)=\"hdd_cdd_filter(newDate.value)\" class=\"btn btn-primary\">Submit</button>\n            </div>\n    </form>\n</div>\n<br>\n\n<div class=\"container-fluid\">\n  <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Business Date</th>\n          <th scope=\"col\">Price</th>\n          <th scope=\"col\">Currency</th>\n          <th scope=\"col\">Security Description</th>\n          <th scope=\"col\">City Code</th>\n          <th scope=\"col\">Index Code</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let res of filteredResponse ; let i = index\">\n            <td>{{ i + 1 }}</td>\n            <td>{{res.BusinessDate}}</td>\n            <td>{{res.Price}}</td>\n            <td>{{res.Currency}}</td>\n            <td>{{res.SecurityDescription}}</td>\n            <td>{{res.city_code}}</td>\n            <td>{{res.index_code}}</td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hdd-cdd/hdd-cdd.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table th {\n  text-align: center; }\n\n.table {\n  border-radius: 5px;\n  width: 70%;\n  margin: 0px auto;\n  float: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hdd-cdd/hdd-cdd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HddCddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HddCddComponent = /** @class */ (function () {
    function HddCddComponent(route, router, _dataService) {
        this.route = route;
        this.router = router;
        this._dataService = _dataService;
        this.futures = ["HDD", "CDD"];
        this.selectedFuture = "Select";
        this.hdd_cdd_Response = [];
        this.filteredResponse = [];
        this.cityCodemap = new Map();
        this.cities = ["Atlanta", "Cincinnati", "Las Vegas", "Minneapolis", "NewYork", "Sacramento"];
        this.selectedCity = "Select City";
        // Getting Date range from ui to get filtered data from database
        this.value = '';
        this.cityCodemap.set("Atlanta", "KFTY");
        this.cityCodemap.set("Cincinnati", "KLUX");
        this.cityCodemap.set("Las Vegas", "KVGT");
        this.cityCodemap.set("Minneapolis", "KMIC");
        this.cityCodemap.set("NewYork", "KNYC");
        this.cityCodemap.set("Sacramento", "KSAC");
    }
    HddCddComponent.prototype.ChangeFuture = function (newFuture) {
        this.selectedFuture = newFuture;
    };
    HddCddComponent.prototype.ChangeCity = function (newCity) {
        this.selectedCity = newCity;
    };
    HddCddComponent.prototype.hdd_cdd_filter = function (newDate) {
        var _this = this;
        if (newDate) {
            this.value = newDate;
            //StartDate
            this.startDate = new Date(this.value.split(" - ")[0]);
            //EndDate
            this.endDate = new Date(this.value.split(" - ")[1]);
            // Selected Citycode
            this.cityCode = this.cityCodemap.get(this.selectedCity);
            // Data Service which gets the data from database with startdate, enddate and city filter
            this._dataService.hdd_cdd_DataFilter(this.startDate, this.endDate, this.cityCode, this.selectedFuture)
                .subscribe(function (res) {
                var hdd_cdd_Response = res['data'].map(function (res) { return res; });
                var filteredResponse = [];
                hdd_cdd_Response.forEach(function (res) {
                    if (res.city_code == _this.cityCode && new Date(res.BusinessDate) >= new Date(_this.startDate) && new Date(res.BusinessDate) <= new Date(_this.endDate)) {
                        filteredResponse.push(res);
                    }
                });
                _this.filteredResponse = filteredResponse;
            });
        }
    };
    HddCddComponent.prototype.ngOnInit = function () {
    };
    HddCddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hdd-cdd',
            template: __webpack_require__("../../../../../src/app/hdd-cdd/hdd-cdd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hdd-cdd/hdd-cdd.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], HddCddComponent);
    return HddCddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown:hover .dropdown-menu {\n  display: block;\n}\n\n#header {\n  padding:10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand nav-link active\" href=\"#\" routerLink=\"\">Volunteer <span class=\"sr-only\">(current)</span></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n      <ul class=\"navbar-nav mr-auto\">\n        <a class=\"nav-link\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"weatherstations\" routerLink=\"historical-weather\"> Historical Weather </a>\n        <a class=\"nav-link\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"weatherstations\" routerLink=\"hdd-cdd\"> HDD & CDD </a>\n        <a class=\"nav-link\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"weatherstations\" routerLink=\"predictions\"> Predictions </a>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/historical-weather/historical-weather.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n    <h3>{{selectedCity}} , Historical Weather Data</h3>\n    <br>\n    <div id=\"form\" onload=\"onload();\">\n        <form class=\"form-inline justify-content-center\">\n                <div class=\"form-group mb-2\">\n                    <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Select Date Range : </label>\n                    <div class=\"col-xs-12 col-12 col-sm-6 col-md-4 form-group\">\n                        <input #newDate\n                            (keyup.enter)=\"addDate(newDate.value)\"\n                            (blur)=\"addDate(newDate.value); newDate.value='' \"\n                            class=\"form-control\" \n                            placeholder=\"Daterangepicker\" \n                            name = \"daterange\"\n                            bsDaterangepicker #dpr=\"bsDaterangepicker\"\n                            required>\n                    </div>\n                </div>\n                <div class=\"form-group mx-sm-3 mb-2\">\n                    <div class=\"dropdown\" ngbDropdown>\n                        <button class=\"btn btn-primary\" id=\"sortMenu\" ngbDropdownToggle>{{selectedCity}}</button>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"sortMenu\" ngbDropdownMenu>\n                            <button class=\"dropdown-item\" *ngFor=\"let city of cities\" (click)=\"ChangeCity(city)\" >{{city}}</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group mb-2\">\n                    <button (click)=\"addDate(newDate.value)\" class=\"btn btn-primary\">Submit</button>\n                </div>\n        </form>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div *ngIf=\"chart\" class=\"graph-center\">\n          <canvas id=\"canvas\">{{ chart }}</canvas>\n      </div>\n    </div>\n    <br>\n    <h6>\n        The above graph displays the historical weather (min,max and mean temperatures) of 8 different cities. \n        User is flexible to select the date range from 01/01/1977-05/05/2018 only. The graph has\n        responsive interface according to number of days selected like, days, weeks, months, years.\n        User can add and remove dataset by clicking on the graph labels for comparison.\n    </h6>\n</div>"

/***/ }),

/***/ "../../../../../src/app/historical-weather/historical-weather.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  text-align: center; }\n\n#form {\n  text-align: center; }\n\n.graph-center {\n  margin: auto;\n  width: 70%;\n  height: 10%;\n  border: 3px solid #73AD21;\n  padding: 10px; }\n\n#body {\n  text-align: center;\n  padding: 10px;\n  padding-bottom: 60px;\n  /* Height of the footer */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/historical-weather/historical-weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalWeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoricalWeatherComponent = /** @class */ (function () {
    // Create an instance of the DataService through dependency injection
    function HistoricalWeatherComponent(route, router, _dataService) {
        this.route = route;
        this.router = router;
        this._dataService = _dataService;
        this.cityResponse = [];
        this.chart = [];
        this.cityCodemap = new Map();
        this.cities = ["Atlanta", "Cincinnati", "Dallas", "Las Vegas", "Minneapolis", "NewYork", "Sacramento"];
        this.selectedCity = "Select City";
        // Getting Date range from ui to get filtered data from database
        this.value = '';
        var startDate;
        var endDate;
        this.cityCodemap.set("Atlanta", "KFTY");
        this.cityCodemap.set("Cincinnati", "KLUK");
        this.cityCodemap.set("Dallas", "KDAL");
        this.cityCodemap.set("Las Vegas", "KVGT");
        this.cityCodemap.set("Minneapolis", "KMIC");
        this.cityCodemap.set("NewYork", "KNYC");
        this.cityCodemap.set("Sacramento", "KSAC");
    }
    HistoricalWeatherComponent.prototype.ChangeCity = function (newCity) {
        this.selectedCity = newCity;
    };
    HistoricalWeatherComponent.prototype.addDate = function (newDate) {
        var _this = this;
        if (newDate) {
            this.value = newDate;
            //StartDate
            this.startDate = new Date(this.value.split(" - ")[0]);
            //EndDate
            this.endDate = new Date(this.value.split(" - ")[1]);
            //Calculate difference between two dates
            var diff = Math.abs(this.startDate.getTime() - this.endDate.getTime());
            this.diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            // Selected Citycode
            this.cityCode = this.cityCodemap.get(this.selectedCity);
            // Data Service which gets the data from database with startdate, enddate and city filter
            this._dataService.dateRangeFilter(this.startDate, this.endDate, this.cityCode)
                .subscribe(function (res) {
                var cityResponse = res['data'].map(function (res) { return res; });
                var alldates = [];
                var temp_max = [];
                var temp_min = [];
                var temp_mean = [];
                cityResponse.forEach(function (res) {
                    if (res.city_code == _this.cityCode && new Date(res.date) >= new Date(_this.startDate) && new Date(res.date) <= new Date(_this.endDate)) {
                        alldates.push(res.date);
                        temp_max.push(res.temp_max);
                        temp_min.push(res.temp_min);
                        temp_mean.push(res.temp_mean);
                    }
                });
                // Chart for data less than or equal to 30 days
                if (_this.diffDays <= 30) {
                    console.log("data less than or equal to 30 days");
                    _this.chart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"]('canvas', {
                        type: 'line',
                        data: {
                            labels: alldates,
                            datasets: [
                                {
                                    data: temp_max,
                                    label: "Temp_max",
                                    backgroundColor: "#3cba9f",
                                    borderColor: "#3cba9f",
                                    fill: false,
                                },
                                {
                                    data: temp_min,
                                    label: "Temp_min",
                                    backgroundColor: "#ffcc00",
                                    borderColor: "#ffcc00",
                                    fill: false,
                                },
                                {
                                    data: temp_mean,
                                    label: "Temp_mean",
                                    backgroundColor: "#ff0059",
                                    borderColor: "#ff0059",
                                    fill: false,
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            title: {
                                display: true,
                                text: _this.selectedCity + ' , Historical Weather Data'
                            },
                            scales: {
                                xAxes: [{
                                        type: 'time',
                                        time: {
                                            unit: 'day',
                                            displayFormats: {
                                                day: 'MMM D',
                                            },
                                        },
                                        ticks: {
                                            autoSkip: false
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Date Range'
                                        }
                                    }],
                                yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Temperature Range'
                                        }
                                    }]
                            }
                        }
                    });
                }
                else if (_this.diffDays > 30 && _this.diffDays <= 90) {
                    console.log("data between 1-3 months displayed weekly");
                    _this.chart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"]('canvas', {
                        type: 'line',
                        data: {
                            labels: alldates,
                            datasets: [
                                {
                                    data: temp_max,
                                    label: "Temp_max",
                                    backgroundColor: "#3cba9f",
                                    borderColor: "#3cba9f",
                                    fill: false,
                                },
                                {
                                    data: temp_min,
                                    label: "Temp_min",
                                    backgroundColor: "#ffcc00",
                                    borderColor: "#ffcc00",
                                    fill: false,
                                },
                                {
                                    data: temp_mean,
                                    label: "Temp_mean",
                                    backgroundColor: "#ff0059",
                                    borderColor: "#ff0059",
                                    fill: false,
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            title: {
                                display: true,
                                text: _this.selectedCity + ' , Historical Weather Data'
                            },
                            scales: {
                                xAxes: [{
                                        type: 'time',
                                        time: {
                                            unit: 'week',
                                            displayFormats: {
                                                week: 'll',
                                            },
                                        },
                                        ticks: {
                                            autoSkip: false
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Date Range'
                                        }
                                    }],
                                yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Temperature Range'
                                        }
                                    }]
                            }
                        }
                    });
                }
                else if (_this.diffDays > 90 && _this.diffDays <= 180) {
                    console.log("data between 3-6 months displayed monthly");
                    _this.chart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"]('canvas', {
                        type: 'line',
                        data: {
                            labels: alldates,
                            datasets: [
                                {
                                    data: temp_max,
                                    label: "Temp_max",
                                    backgroundColor: "#3cba9f",
                                    borderColor: "#3cba9f",
                                    fill: false,
                                },
                                {
                                    data: temp_min,
                                    label: "Temp_min",
                                    backgroundColor: "#ffcc00",
                                    borderColor: "#ffcc00",
                                    fill: false,
                                },
                                {
                                    data: temp_mean,
                                    label: "Temp_mean",
                                    backgroundColor: "#ff0059",
                                    borderColor: "#ff0059",
                                    fill: false,
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            title: {
                                display: true,
                                text: _this.selectedCity + ' , Historical Weather Data'
                            },
                            scales: {
                                xAxes: [{
                                        type: 'time',
                                        time: {
                                            unit: 'month',
                                            displayFormats: {
                                                month: 'MMM YYYY',
                                            },
                                        },
                                        ticks: {
                                            autoSkip: false
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Date Range'
                                        }
                                    }],
                                yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Temperature Range'
                                        }
                                    }]
                            }
                        }
                    });
                }
                else if (_this.diffDays > 180 && _this.diffDays <= 365) {
                    console.log("data between 6-12 months displayed quaterly");
                    _this.chart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"]('canvas', {
                        type: 'line',
                        data: {
                            labels: alldates,
                            datasets: [
                                {
                                    data: temp_max,
                                    label: "Temp_max",
                                    backgroundColor: "#3cba9f",
                                    borderColor: "#3cba9f",
                                    fill: false,
                                },
                                {
                                    data: temp_min,
                                    label: "Temp_min",
                                    backgroundColor: "#ffcc00",
                                    borderColor: "#ffcc00",
                                    fill: false,
                                },
                                {
                                    data: temp_mean,
                                    label: "Temp_mean",
                                    backgroundColor: "#ff0059",
                                    borderColor: "#ff0059",
                                    fill: false,
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            title: {
                                display: true,
                                text: _this.selectedCity + ' , Historical Weather Data'
                            },
                            scales: {
                                xAxes: [{
                                        type: 'time',
                                        time: {
                                            unit: 'quarter',
                                            displayFormats: {
                                                quarter: '[Q]Q - YYYY',
                                            },
                                        },
                                        ticks: {
                                            autoSkip: false
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Date Range'
                                        }
                                    }],
                                yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Temperature Range'
                                        }
                                    }]
                            }
                        }
                    });
                }
                else if (_this.diffDays > 365) {
                    console.log("data more than 12 months displayed yearly");
                    _this.chart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"]('canvas', {
                        type: 'line',
                        data: {
                            labels: alldates,
                            datasets: [
                                {
                                    data: temp_max,
                                    label: "Temp_max",
                                    backgroundColor: "#3cba9f",
                                    borderColor: "#3cba9f",
                                    fill: false,
                                },
                                {
                                    data: temp_min,
                                    label: "Temp_min",
                                    backgroundColor: "#ffcc00",
                                    borderColor: "#ffcc00",
                                    fill: false,
                                },
                                {
                                    data: temp_mean,
                                    label: "Temp_mean",
                                    backgroundColor: "#ff0059",
                                    borderColor: "#ff0059",
                                    fill: false,
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            title: {
                                display: true,
                                text: _this.selectedCity + ' , Historical Weather Data'
                            },
                            scales: {
                                xAxes: [{
                                        type: 'time',
                                        time: {
                                            unit: 'year',
                                            displayFormats: {
                                                year: 'YYYY',
                                            },
                                        },
                                        ticks: {
                                            autoSkip: false
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Date Range'
                                        }
                                    }],
                                yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Temperature Range'
                                        }
                                    }]
                            }
                        }
                    });
                }
            });
        }
    };
    HistoricalWeatherComponent.prototype.ngOnInit = function () {
    };
    HistoricalWeatherComponent.prototype.sendMeHome = function () {
        this.router.navigate(['']);
    };
    HistoricalWeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-historical-weather',
            template: __webpack_require__("../../../../../src/app/historical-weather/historical-weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/historical-weather/historical-weather.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], HistoricalWeatherComponent);
    return HistoricalWeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\n    min-height:100%;\n    position:relative;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <app-header></app-header>\n    <app-container></app-container>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/predictions/predictions.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n  <h3>{{selectedCity}} , Predicted Weather and Price Data</h3>\n  <br><br>\n  <div id=\"form\" onload=\"onload();\">\n      <form class=\"form-inline justify-content-center\">\n              <div class=\"form-group mb-2\">\n                  <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Select Date Range : </label>\n                  <div class=\"col-xs-12 col-12 col-sm-6 col-md-4 form-group\">\n                      <input #newDate\n                          (keyup.enter)=\"addDate(newDate.value)\"\n                          (blur)=\"addDate(newDate.value); newDate.value='' \"\n                          class=\"form-control\" \n                          placeholder=\"Daterangepicker\" \n                          name = \"daterange\"\n                          bsDaterangepicker #dpr=\"bsDaterangepicker\">\n                  </div>\n              </div>\n              <div class=\"form-group mx-sm-3 mb-2\">\n                  <div class=\"dropdown\" ngbDropdown>\n                      <button class=\"btn btn-primary\" id=\"sortMenu\" ngbDropdownToggle>{{selectedCity}}</button>\n                      <div class=\"dropdown-menu\" aria-labelledby=\"sortMenu\" ngbDropdownMenu>\n                          <button class=\"dropdown-item\" *ngFor=\"let city of cities\" (click)=\"ChangeCity(city)\" >{{city}}</button>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"form-group mb-2\">\n                  <button (click)=\"addDate(newDate.value)\" class=\"btn btn-primary\">Submit</button>\n              </div>\n      </form>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div *ngIf=\"chart\" class=\"graph-center\">\n        <canvas id=\"canvas\">{{ chart }}</canvas>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/predictions/predictions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  text-align: center; }\n\n#form {\n  text-align: center; }\n\n.graph-center {\n  margin: auto;\n  width: 80%;\n  height: 70%;\n  border: 3px solid #73AD21;\n  padding: 10px; }\n\n#body {\n  text-align: center;\n  padding: 10px;\n  padding-bottom: 60px;\n  /* Height of the footer */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/predictions/predictions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PredictionsComponent = /** @class */ (function () {
    // Create an instance of the DataService through dependency injection
    function PredictionsComponent(route, router, _dataService, datePipe) {
        this.route = route;
        this.router = router;
        this._dataService = _dataService;
        this.datePipe = datePipe;
        this.replace = "-";
        this.reg = "/\//g";
        this.cityResponse = [];
        this.chart = [];
        this.args = [];
        this.hello = "hi";
        this.cityCodemap = new Map();
        this.cities = ["Atlanta", "Cincinnati", "Dallas", "Las Vegas", "Minneapolis", "NewYork", "Sacramento"];
        this.selectedCity = "Select City";
        // Getting Date range from ui to get filtered data from database
        this.value = '';
        var startDate;
        var endDate;
        this.cityCodemap.set("Atlanta", "KFTY");
        this.cityCodemap.set("Cincinnati", "KLUK");
        this.cityCodemap.set("Dallas", "KDAL");
        this.cityCodemap.set("Las Vegas", "KVGT");
        this.cityCodemap.set("Minneapolis", "KMIC");
        this.cityCodemap.set("NewYork", "KNYC");
        this.cityCodemap.set("Sacramento", "KSAC");
    }
    PredictionsComponent.prototype.ChangeCity = function (newCity) {
        this.selectedCity = newCity;
    };
    PredictionsComponent.prototype.addDate = function (newDate) {
        var _this = this;
        if (newDate) {
            this.value = newDate;
            //StartDate
            this.startDate = new Date(this.value.split(" - ")[0]);
            this.s = this.value.split(" - ")[0];
            this.startDateForPred = this.s.replace(/\//g, this.replace);
            //EndDate
            this.endDate = new Date(this.value.split(" - ")[1]);
            this.e = this.value.split(" - ")[1];
            this.endDateForPred = this.e.replace(/\//g, this.replace);
            //Calculate difference between two dates
            var diff = Math.abs(this.startDate.getTime() - this.endDate.getTime());
            this.diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            // Selected Citycode
            this.cityCode = this.cityCodemap.get(this.selectedCity);
            // Data Service which gets the data from database with startdate, enddate and city filter
            this._dataService.dateRangeForPrediction(this.startDateForPred, this.endDateForPred, this.cityCode)
                .subscribe(function (res) {
                var cityResponse = res['data'];
                console.log("Response 1 : ", cityResponse.actual_prices);
                var alldates = cityResponse.dates_for_label;
                var predicted_hdd = cityResponse.sum_to_date_pred_arr;
                var actual_hdd = cityResponse.sum_to_date_arr;
                var prices = cityResponse.flat_line;
                var actual_prices = cityResponse.actual_prices;
                var predicted_prices = cityResponse.predicted_prices;
                // Chart for data less than or equal to 30 days
                if (_this.diffDays <= 31) {
                    console.log("data less than or equal to 30 days");
                    _this.chart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"]('canvas', {
                        type: 'line',
                        data: {
                            labels: alldates,
                            datasets: [
                                {
                                    data: actual_hdd,
                                    label: "Actual HDD",
                                    backgroundColor: "#ff1000",
                                    borderColor: "#ff1000",
                                    fill: false,
                                },
                                {
                                    data: predicted_hdd,
                                    label: "Predicted HDD",
                                    backgroundColor: "#FF8C00",
                                    borderColor: "#FF8C00",
                                    fill: false,
                                },
                                {
                                    data: prices,
                                    label: "Prices",
                                    backgroundColor: "#ab70d3",
                                    borderColor: "#ab70d3",
                                    fill: false,
                                },
                                {
                                    data: actual_prices,
                                    label: "Actual Prices",
                                    backgroundColor: "#7aafff",
                                    borderColor: "#7aafff",
                                    fill: false,
                                },
                                {
                                    data: predicted_prices,
                                    label: "Predicted Prices",
                                    backgroundColor: "#4da552",
                                    borderColor: "#4da552",
                                    fill: false,
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            title: {
                                display: true,
                                text: _this.selectedCity + ' , Predicted Weather Derivatives prices'
                            },
                            scales: {
                                xAxes: [{
                                        type: 'time',
                                        time: {
                                            unit: 'day',
                                            displayFormats: {
                                                day: 'MMM D',
                                            },
                                        },
                                        ticks: {
                                            autoSkip: false
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Date Range'
                                        }
                                    }],
                                yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Price Range'
                                        }
                                    }]
                            }
                        }
                    });
                }
            });
        }
    };
    PredictionsComponent.prototype.ngOnInit = function () { };
    PredictionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-predictions',
            template: __webpack_require__("../../../../../src/app/predictions/predictions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/predictions/predictions.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]])
    ], PredictionsComponent);
    return PredictionsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map