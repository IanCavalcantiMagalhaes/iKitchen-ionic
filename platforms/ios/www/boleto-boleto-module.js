(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boleto-boleto-module"],{

/***/ "./src/app/pagamento/boleto/boleto.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pagamento/boleto/boleto.module.ts ***!
  \***************************************************/
/*! exports provided: BoletoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoPageModule", function() { return BoletoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _boleto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boleto.page */ "./src/app/pagamento/boleto/boleto.page.ts");







var routes = [
    {
        path: '',
        component: _boleto_page__WEBPACK_IMPORTED_MODULE_6__["BoletoPage"]
    }
];
var BoletoPageModule = /** @class */ (function () {
    function BoletoPageModule() {
    }
    BoletoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_boleto_page__WEBPACK_IMPORTED_MODULE_6__["BoletoPage"]]
        })
    ], BoletoPageModule);
    return BoletoPageModule;
}());



/***/ }),

/***/ "./src/app/pagamento/boleto/boleto.page.html":
/*!***************************************************!*\
  !*** ./src/app/pagamento/boleto/boleto.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pagamento/boleto/boleto.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pagamento/boleto/boleto.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2FtZW50by9ib2xldG8vYm9sZXRvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pagamento/boleto/boleto.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pagamento/boleto/boleto.page.ts ***!
  \*************************************************/
/*! exports provided: BoletoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoPage", function() { return BoletoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv.service */ "./src/app/serv.service.ts");



var BoletoPage = /** @class */ (function () {
    function BoletoPage(render, element, serv) {
        this.render = render;
        this.element = element;
        this.serv = serv;
    }
    BoletoPage.prototype.ngOnInit = function () {
    };
    BoletoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boleto',
            template: __webpack_require__(/*! ./boleto.page.html */ "./src/app/pagamento/boleto/boleto.page.html"),
            styles: [__webpack_require__(/*! ./boleto.page.scss */ "./src/app/pagamento/boleto/boleto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _serv_service__WEBPACK_IMPORTED_MODULE_2__["ServService"]])
    ], BoletoPage);
    return BoletoPage;
}());



/***/ })

}]);
//# sourceMappingURL=boleto-boleto-module.js.map