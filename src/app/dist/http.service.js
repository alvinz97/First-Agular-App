"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpService = void 0;
var core_1 = require("@angular/core");
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    // tslint:disable-next-line: typedef
    // tslint:disable-next-line: adjacent-overload-signatures
    // tslint:disable-next-line: typedef
    HttpService.prototype.getBeer = function () {
        return this.http.get('https://api.openbrewerydb.org/breweries');
    };
    HttpService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
