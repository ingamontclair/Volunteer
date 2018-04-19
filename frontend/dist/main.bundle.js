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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weather_stations_weather_stations_component__ = __webpack_require__("../../../../../src/app/weather-stations/weather-stations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__climate_climate_component__ = __webpack_require__("../../../../../src/app/climate/climate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tools_tools_component__ = __webpack_require__("../../../../../src/app/tools/tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__atlanta_atlanta_component__ = __webpack_require__("../../../../../src/app/atlanta/atlanta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__weathervsderivatives_weathervsderivatives_component__ = __webpack_require__("../../../../../src/app/weathervsderivatives/weathervsderivatives.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //Added
 //Added
 //Added
 //Added
 //Added


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'weather-stations',
        component: __WEBPACK_IMPORTED_MODULE_4__weather_stations_weather_stations_component__["a" /* WeatherStationsComponent */]
    },
    {
        path: 'weather',
        component: __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__["a" /* WeatherComponent */]
    },
    {
        path: 'climate',
        component: __WEBPACK_IMPORTED_MODULE_6__climate_climate_component__["a" /* ClimateComponent */]
    },
    {
        path: 'tools',
        component: __WEBPACK_IMPORTED_MODULE_7__tools_tools_component__["a" /* ToolsComponent */]
    },
    {
        path: 'weather-stations/atlanta',
        component: __WEBPACK_IMPORTED_MODULE_8__atlanta_atlanta_component__["a" /* AtlantaComponent */]
    },
    {
        path: 'tools/weathervsderivatives',
        component: __WEBPACK_IMPORTED_MODULE_9__weathervsderivatives_weathervsderivatives_component__["a" /* WeathervsderivativesComponent */]
    }
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
exports.push([module.i, "", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__weather_stations_weather_stations_component__ = __webpack_require__("../../../../../src/app/weather-stations/weather-stations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__climate_climate_component__ = __webpack_require__("../../../../../src/app/climate/climate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tools_tools_component__ = __webpack_require__("../../../../../src/app/tools/tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__atlanta_atlanta_component__ = __webpack_require__("../../../../../src/app/atlanta/atlanta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__weathervsderivatives_weathervsderivatives_component__ = __webpack_require__("../../../../../src/app/weathervsderivatives/weathervsderivatives.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import the Http Module and our Data Service














// import { GraphComponent } from './atlanta/graph.component';

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
                __WEBPACK_IMPORTED_MODULE_13__weather_stations_weather_stations_component__["a" /* WeatherStationsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_15__climate_climate_component__["a" /* ClimateComponent */],
                __WEBPACK_IMPORTED_MODULE_16__tools_tools_component__["a" /* ToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__atlanta_atlanta_component__["a" /* AtlantaComponent */],
                __WEBPACK_IMPORTED_MODULE_19__weathervsderivatives_weathervsderivatives_component__["a" /* WeathervsderivativesComponent */]
                // GraphComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/atlanta/atlanta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n    text-align: center;\n}\n#form {\n    text-align: center;\n}\n.graph-center {\n    margin: auto;\n    width: 70%;\n    height: 70%;\n    border: 3px solid #73AD21;\n    padding: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/atlanta/atlanta.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-app=\"myApp\">\n<h3>{{selectedCity}} , Historical Weather Data</h3>\n<br><br>\n<div id=\"form\" onload=\"onload();\">\n    <form class=\"form-inline justify-content-center\">\n            <div class=\"form-group mb-2\">\n                <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Select Date Range : </label>\n                <div class=\"col-xs-12 col-12 col-sm-6 col-md-4 form-group\">\n                    <input #newDate\n                        (keyup.enter)=\"addDate(newDate.value)\"\n                        (blur)=\"addDate(newDate.value); newDate.value='' \"\n                        class=\"form-control\" \n                        placeholder=\"Daterangepicker\" \n                        name = \"daterange\"\n                        bsDaterangepicker #dpr=\"bsDaterangepicker\">\n                </div>\n            </div>\n            <div class=\"form-group mx-sm-3 mb-2\">\n                <div class=\"dropdown\" ngbDropdown>\n                    <button class=\"btn btn-primary\" id=\"sortMenu\" ngbDropdownToggle>{{selectedCity}}</button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"sortMenu\" ngbDropdownMenu>\n                        <button class=\"dropdown-item\" *ngFor=\"let city of cities\" (click)=\"ChangeCity(city)\" >{{city}}</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group mb-2\">\n                <button (click)=\"addDate(newDate.value)\" class=\"btn btn-primary\">Submit</button>\n            </div>\n    </form>\n</div>\n<br>\n<div class=\"row\">\n  <div *ngIf=\"chart\" class=\"graph-center\">\n      <canvas id=\"canvas\">{{ chart }}</canvas>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/atlanta/atlanta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtlantaComponent; });
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





var AtlantaComponent = /** @class */ (function () {
    // Create an instance of the DataService through dependency injection
    function AtlantaComponent(route, router, _dataService) {
        this.route = route;
        this.router = router;
        this._dataService = _dataService;
        this.cityCodemap = new Map();
        // this.cityCode = this.cityCodemap.get(this.selectedCity);
        this.cities = ["Atlanta", "Boston", "Chicago", "Cincinnati", "Dallas", "Des Moines", "Houston", "Kansas City", "Las Vegas", "Mimmeapolis", "NewYork", "Philadelphia", "Portland", "Sacramento", "Tuscon"];
        this.selectedCity = "Select City";
        this.atlantaResponse = [];
        this.chart = [];
        this.temp_max_ny = [];
        // Getting Date range from ui to get filtered data from database
        this.value = '';
        var startDate;
        var endDate;
        this.cityCodemap.set("Atlanta", "KFTY");
        this.cityCodemap.set("Boston", "KBOS");
        this.cityCodemap.set("Chicago", "KORD");
        this.cityCodemap.set("Cincinnati", "KLUX");
        this.cityCodemap.set("Dallas", "KDAL");
        this.cityCodemap.set("Des Moines", "KDSM");
        this.cityCodemap.set("Houston", "KHOU");
        this.cityCodemap.set("Kansas City", "KMKC");
        this.cityCodemap.set("Las Vegas", "KVGT");
        this.cityCodemap.set("Minneapolis", "KMIC");
        this.cityCodemap.set("NewYork", "KNYC");
        this.cityCodemap.set("Philadelphia", "KPHL");
        this.cityCodemap.set("Portland", "KPDX");
        this.cityCodemap.set("Sacramento", "KSAC");
        this.cityCodemap.set("Tuscon", "KDMA");
        console.log(this.cityCodemap);
    }
    AtlantaComponent.prototype.ChangeCity = function (newCity) {
        this.selectedCity = newCity;
    };
    AtlantaComponent.prototype.addDate = function (newDate) {
        var _this = this;
        if (newDate) {
            this.value = newDate;
            //StartDate
            this.startDate = new Date(this.value.split(" - ")[0]);
            //EndDate
            this.endDate = new Date(this.value.split(" - ")[1]);
            // Selected Citycode
            this.cityCode = this.cityCodemap.get(this.selectedCity);
            console.log(this.cityCode);
            // Data Service which gets the data from database with startdate, enddate and city filter
            this._dataService.dateRangeFilter(this.startDate, this.endDate, this.cityCode)
                .subscribe(function (res) {
                var atlantaResponse = res['data'].map(function (res) { return res; });
                var alldates = [];
                var temp_max = [];
                var temp_min = [];
                var temp_mean = [];
                atlantaResponse.forEach(function (res) {
                    if (res.city_code == _this.cityCode && new Date(res.date) >= new Date(_this.startDate) && new Date(res.date) <= new Date(_this.endDate)) {
                        alldates.push(res.date);
                        temp_max.push(res.temp_max);
                        temp_min.push(res.temp_min);
                        temp_mean.push(res.temp_mean);
                    }
                });
                // Draw chart using the retrived data
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
            });
        }
    };
    AtlantaComponent.prototype.ngOnInit = function () {
    };
    AtlantaComponent.prototype.sendMeHome = function () {
        this.router.navigate(['']);
    };
    AtlantaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-atlanta',
            template: __webpack_require__("../../../../../src/app/atlanta/atlanta.component.html"),
            styles: [__webpack_require__("../../../../../src/app/atlanta/atlanta.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], AtlantaComponent);
    return AtlantaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/climate/climate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/climate/climate.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  climate works!\n  <a href=\"\" (click)=\"sendMeHome()\"><strong>Take me back</strong></a>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/climate/climate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClimateComponent; });
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




var ClimateComponent = /** @class */ (function () {
    function ClimateComponent(route, router, _data) {
        this.route = route;
        this.router = router;
        this._data = _data;
    }
    ClimateComponent.prototype.ngOnInit = function () {
    };
    ClimateComponent.prototype.sendMeHome = function () {
        this.router.navigate(['']);
    };
    ClimateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-climate',
            template: __webpack_require__("../../../../../src/app/climate/climate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/climate/climate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], ClimateComponent);
    return ClimateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/container/container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-3\">Hello, world!</h1>\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr class=\"my-4\">\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  </p>\n</div>\n"

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
    function DataService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
    }
    DataService.prototype.dailyForecast = function () {
        return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22").map(function (result) { return result; });
    };
    DataService.prototype.historicalWeather = function () {
        var uri = "/api/cityHistoricalData_Atlanta";
        return this._httpClient.get(uri)
            .map(function (result) { return result; });
    };
    DataService.prototype.dateRangeFilter = function (startDate, endDate, cityCode) {
        var uri = "/api/cityHistoricalData_Atlanta";
        return this._httpClient.get(uri)
            .map(function (result) { return result; });
    };
    DataService.prototype.historicalWeather_Newyork = function () {
        var uri = "/api/cityHistoricalData_NewYork";
        return this._httpClient.get(uri)
            .map(function (result) { return result; });
    };
    DataService.prototype.historicalHDD_janz18 = function () {
        var uri = "/api/hdd_janz18";
        return this._httpClient.get(uri)
            .map(function (result) { return result; });
    };
    DataService.prototype.getHDD_janz18 = function () {
        var _this = this;
        var uri = "/api/hdd_janz18";
        return this._http.get(uri)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.tempNYjan18 = function () {
        var uri = "/api/new_york_temp_0118";
        return this._httpClient.get(uri)
            .map(function (result) { return result; });
    };
    DataService.prototype.gettempNYjan18 = function () {
        var _this = this;
        var uri = "/api/new_york_temp_0118";
        return this._http.get(uri)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.hddNY_avg = function () {
        var uri = "/api/hdd_cdd_avg";
        return this._httpClient.get(uri)
            .map(function (result) { return result; });
    };
    DataService.prototype.gethddNY_avg = function () {
        var _this = this;
        var uri = "/api/hdd_cdd_avg";
        return this._http.get(uri)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.naive_est = function () {
        var uri = "/api/naive_est_jan18";
        return this._httpClient.get(uri)
            .map(function (result) { return result; });
    };
    DataService.prototype.get_naive_est = function () {
        var _this = this;
        var uri = "/api/naive_est_jan18";
        return this._http.get(uri)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" text-align=\"center\">\n     <div class=\"container\">\n       <p class=\"text-muted\">Copyright &copy; by Priyanka & Inga.\n       All Rights Reserved from 2018 - 2028</p>\n     </div>\n</footer>\n"

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

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown:hover .dropdown-menu {\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand nav-link active\" href=\"#\" routerLink=\"\">Volunteer <span class=\"sr-only\">(current)</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\" ngbDropdown>\n          <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"weatherstations\" routerLink=\"weather-stations\" ngbDropdownToggle> Weather Stations </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"weatherstations\" ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\" routerLink=\"weather-stations/atlanta\">Atlanta, GA</a>\n            <a class=\"dropdown-item\" href=\"#\">Boston, MA</a>\n            <a class=\"dropdown-item\" href=\"#\">Chicago, IL</a>\n            <a class=\"dropdown-item\" href=\"#\">Cincinnati, OH</a>\n            <a class=\"dropdown-item\" href=\"#\">Dallas, TX</a>\n            <a class=\"dropdown-item\" href=\"#\">Des Moines, IA</a>\n            <a class=\"dropdown-item\" href=\"#\">Houston, TX</a>\n            <a class=\"dropdown-item\" href=\"#\">Kansas City, MO</a>\n            <a class=\"dropdown-item\" href=\"#\">Las Vegas, NV</a>\n            <a class=\"dropdown-item\" href=\"#\">Mimmeapolis, MN</a>\n            <a class=\"dropdown-item\" href=\"#\">NewYork, NY</a>\n            <a class=\"dropdown-item\" href=\"#\">Philadelphia, PA</a>\n            <a class=\"dropdown-item\" href=\"#\">Portland, OR</a>\n            <a class=\"dropdown-item\" href=\"#\">Sacramento, CA</a>\n            <a class=\"dropdown-item\" href=\"#\">Tuscon, AZ</a>\n          </div>\n      </li>\n      <li class=\"nav-item dropdown\" ngbDropdown>\n          <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"weather\" routerLink=\"weather\" ngbDropdownToggle> Weather </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"weather\" ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\">Forecast</a>\n            <a class=\"dropdown-item\" href=\"#\">Current Conditions</a>\n          </div>\n      </li>\n      <li class=\"nav-item dropdown\" ngbDropdown>\n          <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"climate\" routerLink=\"climate\" ngbDropdownToggle> Climate </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"climate\" ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\">Climate Map</a>\n            <a class=\"dropdown-item\" href=\"#\">Station Climate</a>\n            <a class=\"dropdown-item\" href=\"#\">Weather Records</a>\n          </div>\n      </li>\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"tools\" routerLink=\"tools\" ngbDropdownToggle> Tools </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"climate\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"#\" routerLink=\"tools/weathervsderivatives\">Weather vs. derivatives</a>\n          <a class=\"dropdown-item\" href=\"#\">Unit Conversion</a>\n          <a class=\"dropdown-item\" href=\"#\">Dew Point</a>\n          <a class=\"dropdown-item\" href=\"#\">Wind Power</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n"

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

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-container></app-container>\n<app-footer></app-footer>\n"

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

/***/ "../../../../../src/app/tools/tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/tools.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tools works!\n  <a href=\"\" (click)=\"sendMeHome()\"><strong>Take me back</strong></a>\n</p>"

/***/ }),

/***/ "../../../../../src/app/tools/tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
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




var ToolsComponent = /** @class */ (function () {
    function ToolsComponent(route, router, _dataService) {
        this.route = route;
        this.router = router;
        this._dataService = _dataService;
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    ToolsComponent.prototype.sendMeHome = function () {
        this.router.navigate(['']);
    };
    ToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tools',
            template: __webpack_require__("../../../../../src/app/tools/tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools/tools.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weather-stations/weather-stations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather-stations/weather-stations.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  weather-stations works!\n  <a href=\"\" (click)=\"sendMeHome()\"><strong>Take me back</strong></a>\n</p>\n<div *ngIf=\"chart\">\n  <canvas id=\"canvas\">{{ chart }}</canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/weather-stations/weather-stations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherStationsComponent; });
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





var WeatherStationsComponent = /** @class */ (function () {
    function WeatherStationsComponent(route, router, _dataService) {
        this.route = route;
        this.router = router;
        this._dataService = _dataService;
        this.chart = [];
    }
    WeatherStationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.dailyForecast()
            .subscribe(function (res) {
            var temp_max = res['list'].map(function (res) { return res.main.temp_max; });
            var temp_min = res['list'].map(function (res) { return res.main.temp_min; });
            var alldates = res['list'].map(function (res) { return res.dt; });
            var weatherDates = [];
            alldates.forEach(function (res) {
                var jsdate = new Date(res * 1000);
                weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
            });
            _this.chart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"]('canvas', {
                type: 'line',
                data: {
                    labels: weatherDates,
                    datasets: [
                        {
                            data: temp_max,
                            borderColor: "#3cba9f",
                            fill: false
                        },
                        {
                            data: temp_min,
                            borderColor: "#ffcc00",
                            fill: false
                        },
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                                display: true
                            }],
                        yAxes: [{
                                display: true
                            }],
                    }
                }
            });
        });
    };
    WeatherStationsComponent.prototype.sendMeHome = function () {
        this.router.navigate(['']);
    };
    WeatherStationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weather-stations',
            template: __webpack_require__("../../../../../src/app/weather-stations/weather-stations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weather-stations/weather-stations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], WeatherStationsComponent);
    return WeatherStationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  weather works!\n  <a href=\"\" (click)=\"sendMeHome()\"><strong>Take me back</strong></a>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
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




var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(route, router, _dataService) {
        this.route = route;
        this.router = router;
        this._dataService = _dataService;
        this.minDate = new Date(1976, 12, 31);
        this.maxDate = new Date(2017, 11, 31);
        this.bsValue = new Date();
        this.bsRangeValue = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    WeatherComponent.prototype.sendMeHome = function () {
        this.router.navigate(['']);
    };
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weathervsderivatives/weathervsderivatives.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New York, Historical HDD Prices - Jan, 2018 for Dec, 2018 trade </h3>\n<div id=\"form\">\n  <form class=\"form-inline justify-content-center\">\n    <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Select Date Range : </label>\n    <div class=\"col-xs-12 col-12 col-sm-6 col-md-4 form-group\">\n      <input class=\"form-control\" placeholder=\"Daterangepicker\" bsDaterangepicker #dpr=\"bsDaterangepicker\">\n    </div>\n    <input type=\"submit\" value=\"Submit\" name=\"submit_dates\" class=\"btn btn-primary\">\n  </form>\n</div>\n<br>\n<div class=\"row\">\n  <div *ngIf=\"chart\" class=\"graph-center\">\n    <canvas id=\"canvas\">{{ chart }}</canvas>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/weathervsderivatives/weathervsderivatives.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  text-align: center; }\n\n#form {\n  text-align: center; }\n\n.graph-center {\n  margin: auto;\n  width: 70%;\n  height: 70%;\n  border: 3px solid #73AD21;\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weathervsderivatives/weathervsderivatives.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeathervsderivativesComponent; });
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





var WeathervsderivativesComponent = /** @class */ (function () {
    // Create an instance of the DataService through dependency injection
    function WeathervsderivativesComponent(route, router, _dataService) {
        this.route = route;
        this.router = router;
        this._dataService = _dataService;
        this.new_york_temp_0118 = [];
        this.hdd_cdd_avg = [];
        this.naive_est = [];
        this.perfect_est = [];
        this.chart = [];
        //this._dataService.getHDD_janz18().subscribe(res => this.hdd_janz18 = res);
        var new_york_temp_0118;
        var hdd_cdd_avg;
        var naive_est;
        var perfect_est;
    }
    WeathervsderivativesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Printing using array object.....");
        this._dataService.tempNYjan18()
            .subscribe(function (res) {
            _this.new_york_temp_0118 = res['data'].map(function (res) { return res.hdd; });
            console.log(_this.new_york_temp_0118);
            _this.perfect_est = _this.new_york_temp_0118.slice(); //ger the data
            _this.perfect_est.fill(_this.new_york_temp_0118[_this.new_york_temp_0118.length - 1]); //fill the temp array defined above with  the last day data
            console.log(_this.perfect_est);
        });
        this._dataService.hddNY_avg()
            .subscribe(function (res) { _this.hdd_cdd_avg = res['data'].map(function (res) { return res.hdd; }); console.log(_this.hdd_cdd_avg); });
        this._dataService.naive_est()
            .subscribe(function (res) { _this.naive_est = res['data'].map(function (res) { return res.hdd; }); console.log(_this.naive_est); });
        this._dataService.historicalHDD_janz18()
            .subscribe(function (res) {
            console.log(res);
            var hdd_price = res['data'].map(function (res) { return res.price; });
            var alldates = res['data'].map(function (res) { return res.date; });
            console.log(hdd_price);
            console.log(alldates);
            _this.chart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"]('canvas', {
                type: 'line',
                data: {
                    labels: alldates,
                    datasets: [
                        {
                            data: hdd_price,
                            borderColor: '#3cba9f',
                            fill: false
                        },
                        {
                            data: _this.new_york_temp_0118,
                            borderColor: '#00ffe9',
                            fill: false
                        },
                        {
                            data: _this.hdd_cdd_avg,
                            borderColor: '#ff0000',
                            fill: false
                        },
                        {
                            data: _this.naive_est,
                            borderColor: '#00ff00',
                            fill: false
                        },
                        {
                            data: _this.perfect_est,
                            borderColor: '#ffff00',
                            fill: false
                        },
                    ]
                },
                options: {
                    responsive: true,
                    // title: {
                    //     display: true,
                    //     text: 'Custom Chart Title'
                    // },
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                                display: true,
                                scaleLable: {
                                    display: true
                                }
                            }],
                        yAxes: [{
                                ticks: {
                                    reverse: false,
                                    min: 0,
                                    max: 1200
                                },
                                display: true,
                                scaleLable: {
                                    display: true
                                }
                            }]
                    }
                }
            });
        });
    };
    WeathervsderivativesComponent.prototype.sendMeHome = function () {
        this.router.navigate(['']);
    };
    WeathervsderivativesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weathervsderivatives',
            template: __webpack_require__("../../../../../src/app/weathervsderivatives/weathervsderivatives.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weathervsderivatives/weathervsderivatives.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], WeathervsderivativesComponent);
    return WeathervsderivativesComponent;
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