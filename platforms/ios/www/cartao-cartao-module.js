(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cartao-cartao-module"],{

/***/ "./src/app/pagamento/cartao/cartao.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pagamento/cartao/cartao.module.ts ***!
  \***************************************************/
/*! exports provided: CartaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaoPageModule", function() { return CartaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cartao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartao.page */ "./src/app/pagamento/cartao/cartao.page.ts");







var routes = [
    {
        path: '',
        component: _cartao_page__WEBPACK_IMPORTED_MODULE_6__["CartaoPage"]
    }
];
var CartaoPageModule = /** @class */ (function () {
    function CartaoPageModule() {
    }
    CartaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cartao_page__WEBPACK_IMPORTED_MODULE_6__["CartaoPage"]]
        })
    ], CartaoPageModule);
    return CartaoPageModule;
}());



/***/ }),

/***/ "./src/app/pagamento/cartao/cartao.page.html":
/*!***************************************************!*\
  !*** ./src/app/pagamento/cartao/cartao.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1>Cartao</h1>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pagamento/cartao/cartao.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pagamento/cartao/cartao.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2FtZW50by9jYXJ0YW8vY2FydGFvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pagamento/cartao/cartao.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pagamento/cartao/cartao.page.ts ***!
  \*************************************************/
/*! exports provided: CartaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaoPage", function() { return CartaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartaoPage = /** @class */ (function () {
    function CartaoPage(render) {
        this.render = render;
    }
    CartaoPage.prototype.ngOnInit = function () {
    };
    CartaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cartao',
            template: __webpack_require__(/*! ./cartao.page.html */ "./src/app/pagamento/cartao/cartao.page.html"),
            styles: [__webpack_require__(/*! ./cartao.page.scss */ "./src/app/pagamento/cartao/cartao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], CartaoPage);
    return CartaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=cartao-cartao-module.js.map