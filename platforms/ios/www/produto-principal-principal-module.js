(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produto-principal-principal-module"],{

/***/ "./src/app/produto/principal/principal.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/produto/principal/principal.module.ts ***!
  \*******************************************************/
/*! exports provided: PrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function() { return PrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal.page */ "./src/app/produto/principal/principal.page.ts");







var routes = [
    {
        path: '',
        component: _principal_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalPage"]
    }
];
var PrincipalPageModule = /** @class */ (function () {
    function PrincipalPageModule() {
    }
    PrincipalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalPage"]]
        })
    ], PrincipalPageModule);
    return PrincipalPageModule;
}());



/***/ }),

/***/ "./src/app/produto/principal/principal.page.html":
/*!*******************************************************!*\
  !*** ./src/app/produto/principal/principal.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Destaques</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item *ngIf=\"Dados!=null\">\r\n    <ion-item *ngFor=\"item of Dados\">\r\n      \r\n    </ion-item>\r\n    \r\n  </ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/produto/principal/principal.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/produto/principal/principal.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG8vcHJpbmNpcGFsL3ByaW5jaXBhbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/produto/principal/principal.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/produto/principal/principal.page.ts ***!
  \*****************************************************/
/*! exports provided: PrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPage", function() { return PrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(route, activatedRoute, usuario) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.usuario = usuario;
        this.BarraPesquisa = true;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]();
    }
    PrincipalPage.prototype.ngOnInit = function () {
    };
    PrincipalPage.prototype.pesquisar = function (nomeProduto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, ValorMinimo;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]();
                ValorMinimo = 0;
                this.Dados = [];
                // this.Dados=await this.usuario.ProcurarProduto(this.Nome);
                db.ref('produto').once('value').then(function (snapshot) {
                    snapshot.forEach(function (produto) {
                        if (produto.val().nome.includes(nomeProduto)) {
                            _this.Dados = produto.val();
                        }
                        console.log(produto.val()); //Pega cada pessoa por vez
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    PrincipalPage.prototype.pesquisarAvançada = function (nomeProduto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, ValorMinimo;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]();
                ValorMinimo = 0;
                this.Dados = [];
                // this.Dados=await this.usuario.ProcurarProduto(this.Nome);
                db.ref('produto').once('value').then(function (snapshot) {
                    snapshot.forEach(function (produto) {
                        if (produto.val().nome.includes(nomeProduto) &&
                            produto.val().preço > ValorMinimo) {
                            _this.Dados = produto.val();
                        }
                        console.log(produto.val()); //Pega cada pessoa por vez
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    PrincipalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.page.html */ "./src/app/produto/principal/principal.page.html"),
            styles: [__webpack_require__(/*! ./principal.page.scss */ "./src/app/produto/principal/principal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], PrincipalPage);
    return PrincipalPage;
}());



/***/ })

}]);
//# sourceMappingURL=produto-principal-principal-module.js.map