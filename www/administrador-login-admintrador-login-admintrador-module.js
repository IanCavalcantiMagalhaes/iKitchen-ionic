(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administrador-login-admintrador-login-admintrador-module"],{

/***/ "./src/app/administrador/login-admintrador/login-admintrador.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administrador/login-admintrador/login-admintrador.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LoginAdmintradorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdmintradorPageModule", function() { return LoginAdmintradorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_admintrador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-admintrador.page */ "./src/app/administrador/login-admintrador/login-admintrador.page.ts");







var routes = [
    {
        path: '',
        component: _login_admintrador_page__WEBPACK_IMPORTED_MODULE_6__["LoginAdmintradorPage"]
    }
];
var LoginAdmintradorPageModule = /** @class */ (function () {
    function LoginAdmintradorPageModule() {
    }
    LoginAdmintradorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_admintrador_page__WEBPACK_IMPORTED_MODULE_6__["LoginAdmintradorPage"]]
        })
    ], LoginAdmintradorPageModule);
    return LoginAdmintradorPageModule;
}());



/***/ }),

/***/ "./src/app/administrador/login-admintrador/login-admintrador.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/administrador/login-admintrador/login-admintrador.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>loginAdmintrador</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">E-mail</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n    <!-- SENHA -->\n    <ion-item>\n    <ion-label position=\"floating\">Senha</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"senha\"></ion-input>\n    </ion-item>\n    <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"login()\"> \n        Logar \n    </ion-button> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/administrador/login-admintrador/login-admintrador.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/administrador/login-admintrador/login-admintrador.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFkb3IvbG9naW4tYWRtaW50cmFkb3IvbG9naW4tYWRtaW50cmFkb3IucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administrador/login-admintrador/login-admintrador.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/administrador/login-admintrador/login-admintrador.page.ts ***!
  \***************************************************************************/
/*! exports provided: LoginAdmintradorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdmintradorPage", function() { return LoginAdmintradorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv.service */ "./src/app/serv.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







var LoginAdmintradorPage = /** @class */ (function () {
    function LoginAdmintradorPage(router, serv, toastCtrl, menuCtrl) {
        this.router = router;
        this.serv = serv;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.email = "";
        this.senha = "";
    }
    LoginAdmintradorPage.prototype.ngOnInit = function () {
    };
    LoginAdmintradorPage.prototype.login = function () {
        var _this = this;
        console.log(this.senha);
        firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().signInWithEmailAndPassword(this.email, this.senha).then(function (user) {
            _this.toastCtrl.Mensagem("Logado com sucesso");
            _this.menuCtrl.enable(true, "first");
            _this.router.navigateByUrl('adicionarProduto');
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            _this.toastCtrl.Mensagem(errorCode + " : " + errorMessage);
            console.log(errorCode + " : " + errorMessage);
            // ...
        });
    };
    LoginAdmintradorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-admintrador',
            template: __webpack_require__(/*! ./login-admintrador.page.html */ "./src/app/administrador/login-admintrador/login-admintrador.page.html"),
            styles: [__webpack_require__(/*! ./login-admintrador.page.scss */ "./src/app/administrador/login-admintrador/login-admintrador.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _serv_service__WEBPACK_IMPORTED_MODULE_2__["ServService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], LoginAdmintradorPage);
    return LoginAdmintradorPage;
}());



/***/ }),

/***/ "./src/app/toast.service.ts":
/*!**********************************!*\
  !*** ./src/app/toast.service.ts ***!
  \**********************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.Mensagem = function (Text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: Text,
                            duration: 5000,
                            showCloseButton: true,
                            closeButtonText: "Fechar",
                            position: "bottom",
                            cssClass: "toastAfterHeader"
                        })];
                    case 1:
                        toast = _a.sent();
                        _a.label = 2;
                    case 2:
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ToastService);
    return ToastService;
}());



/***/ })

}]);
//# sourceMappingURL=administrador-login-admintrador-login-admintrador-module.js.map