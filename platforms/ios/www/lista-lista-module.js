(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-lista-module"],{

/***/ "./src/app/lista/lista.module.ts":
/*!***************************************!*\
  !*** ./src/app/lista/lista.module.ts ***!
  \***************************************/
/*! exports provided: ListaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPageModule", function() { return ListaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista.page */ "./src/app/lista/lista.page.ts");







var routes = [
    {
        path: '',
        component: _lista_page__WEBPACK_IMPORTED_MODULE_6__["ListaPage"]
    }
];
var ListaPageModule = /** @class */ (function () {
    function ListaPageModule() {
    }
    ListaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lista_page__WEBPACK_IMPORTED_MODULE_6__["ListaPage"]]
        })
    ], ListaPageModule);
    return ListaPageModule;
}());



/***/ }),

/***/ "./src/app/lista/lista.page.html":
/*!***************************************!*\
  !*** ./src/app/lista/lista.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    <ion-title>Destaques</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n<ion-searchbar showcancelbutton=\"\" nmae=\"x\" [(ngModel)]=\"a\" (change)=\"pesquisar(a)\"></ion-searchbar>\r\n<ion-list>\r\n    <ion-item [ngStyle]=\"{'background-image': 'url(../../assets/img/logo.jpg)'}\"></ion-item>\r\n    <ion-item *ngFor=\"let item of Dados\">\r\n        {{ item.dados.nome }}\r\n      <ion-item [ngStyle]=\"{'color':'orange','width':'50%','font-size':'75%'}\">\r\n          {{ item.dados.preco }}(Parcelas 2x:)\r\n      </ion-item>\r\n    </ion-item>\r\n  \r\n</ion-list>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/lista/lista.page.scss":
/*!***************************************!*\
  !*** ./src/app/lista/lista.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhL2xpc3RhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/lista/lista.page.ts":
/*!*************************************!*\
  !*** ./src/app/lista/lista.page.ts ***!
  \*************************************/
/*! exports provided: ListaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPage", function() { return ListaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




var ListaPage = /** @class */ (function () {
    function ListaPage(router) {
        this.router = router;
        this.list = ["Utensilios", "Estruturas completas"];
        this.db = firebase__WEBPACK_IMPORTED_MODULE_3__["database"]();
    }
    ListaPage.prototype.ngOnInit = function () {
    };
    ListaPage.prototype.LinkDeProduto = function (id) {
        this.router.navigate(['produto', id]);
    };
    ListaPage.prototype.filterList = function (x) {
        console.log(this.a);
    };
    ListaPage.prototype.pesquisar = function (nomeProduto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ValorMinimo;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ValorMinimo = 0;
                this.Dados = [];
                // this.Dados=await this.usuario.ProcurarProduto(this.Nome);
                this.db.ref('produto').once('value').then(function (snapshot) {
                    snapshot.forEach(function (produto) {
                        if (produto.val().dados.nome.toLowerCase().includes(nomeProduto.toLowerCase())) {
                            _this.Dados.push(produto.val());
                            console.log(_this.Dados.nome);
                        }
                        //Pega cada pessoa por vez
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ListaPage.prototype.pesquisarAvançada = function (nomeProduto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ValorMinimo;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ValorMinimo = 0;
                this.Dados = [];
                // this.Dados=await this.usuario.ProcurarProduto(this.Nome);
                this.db.ref('produto').once('value').then(function (snapshot) {
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
    ListaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista',
            template: __webpack_require__(/*! ./lista.page.html */ "./src/app/lista/lista.page.html"),
            styles: [__webpack_require__(/*! ./lista.page.scss */ "./src/app/lista/lista.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListaPage);
    return ListaPage;
}());



/***/ })

}]);
//# sourceMappingURL=lista-lista-module.js.map