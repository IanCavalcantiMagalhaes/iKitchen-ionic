(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracoes-configuracoes-module"],{

/***/ "./src/app/configuracoes/configuracoes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfiguracoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracoes.page */ "./src/app/configuracoes/configuracoes.page.ts");
/* harmony import */ var _dirConfiguracoes_dir_pessoal_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dirConfiguracoes/dir-pessoal.directive */ "./src/app/configuracoes/dirConfiguracoes/dir-pessoal.directive.ts");
/* harmony import */ var _dirConfiguracoes_dir_pagamento_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dirConfiguracoes/dir-pagamento.directive */ "./src/app/configuracoes/dirConfiguracoes/dir-pagamento.directive.ts");
/* harmony import */ var _dirConfiguracoes_dir_entrega_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dirConfiguracoes/dir-entrega.directive */ "./src/app/configuracoes/dirConfiguracoes/dir-entrega.directive.ts");










var routes = [
    {
        path: '',
        component: _configuracoes_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracoesPage"],
        children: [
            { path: '', redirectTo: './pessoal/pessoal.module#PessoalPageModule', pathMatch: 'full' },
            //{ path: 'editar-Pagamento', loadChildren: './editar-Pagamento/editar-pagamento.module#editar-PagamentoPageModule' },
            { path: 'pessoal', loadChildren: './pessoal/pessoal.module#PessoalPageModule' },
            { path: 'entrega', loadChildren: './entrega/entrega.module#EntregaPageModule' }
        ]
    }
];
var ConfiguracoesPageModule = /** @class */ (function () {
    function ConfiguracoesPageModule() {
    }
    ConfiguracoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_configuracoes_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracoesPage"], _dirConfiguracoes_dir_pessoal_directive__WEBPACK_IMPORTED_MODULE_7__["DirPessoalDirective"], _dirConfiguracoes_dir_pagamento_directive__WEBPACK_IMPORTED_MODULE_8__["DirPagamentoDirective"], _dirConfiguracoes_dir_entrega_directive__WEBPACK_IMPORTED_MODULE_9__["DirEntregaDirective"]]
        })
    ], ConfiguracoesPageModule);
    return ConfiguracoesPageModule;
}());



/***/ }),

/***/ "./src/app/configuracoes/configuracoes.page.html":
/*!*******************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Configuraçoes de conta</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    \r\n  <ion-tabs selectedIndex=\"1\" style=\"position:relative;bottom:-25%;\">\r\n  \r\n    <ion-tab-bar slot=\"top\">\r\n  \r\n      <ion-tab-button tab=\"pessoal\" (click)=\"PessoalSelecionado()\" [appDirPessoal]=\"pessoalSelecionado\">\r\n        <ion-label>Pessoal</ion-label>\r\n        <ion-icon name=\"home\"></ion-icon>\r\n        <ion-badge style=\"background-color:orangered\">6</ion-badge>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"pagamento\" (click)=\"PagamentoSelecionado()\" [appDirPagamento]=\"pagamentoSelecionado\">\r\n        <ion-label>Pagamento</ion-label>\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"entrega\" (click)=\"EntregaSelecionado()\" [appDirEntrega]=\"entregaSelecionado\">\r\n        <ion-label>Entrega</ion-label>\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n      </ion-tab-button>\r\n  \r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/configuracoes/configuracoes.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNvZXMvY29uZmlndXJhY29lcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuracoes/configuracoes.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.page.ts ***!
  \*****************************************************/
/*! exports provided: ConfiguracoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPage", function() { return ConfiguracoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../serv.service */ "./src/app/serv.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(element, render, Serv, menuCtrl) {
        this.element = element;
        this.render = render;
        this.Serv = Serv;
        this.menuCtrl = menuCtrl;
        this.BarraPesquisa = false;
    }
    ConfiguracoesPage.prototype.ngOnInit = function () {
        this.pessoalSelecionado = true;
        this.SomenteLer = true;
        this.TextoEdicao = "Editar";
    };
    ConfiguracoesPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true, "first");
    };
    ConfiguracoesPage.prototype.BotaoEdicao = function () {
        if (this.SomenteLer) {
            this.HabilitarEdicao();
        }
        else {
            this.DesabilitarEdicao();
        }
    };
    ConfiguracoesPage.prototype.HabilitarEdicao = function () {
        this.TextoEdicao = "Cancelar";
        this.SomenteLer = false;
        this.Serv.setSomenteLer(false);
        //this.pessoal.SomenteLer=false;
    };
    ConfiguracoesPage.prototype.DesabilitarEdicao = function () {
        this.TextoEdicao = "Editar";
        this.Serv.setSomenteLer(true);
        //this.pessoal.SomenteLer=false;
    };
    ConfiguracoesPage.prototype.PessoalSelecionado = function () {
        this.pessoalSelecionado = true;
        this.pagamentoSelecionado = false;
        this.entregaSelecionado = false;
    };
    ConfiguracoesPage.prototype.PagamentoSelecionado = function () {
        this.pessoalSelecionado = false;
        this.pagamentoSelecionado = true;
        this.entregaSelecionado = false;
    };
    ConfiguracoesPage.prototype.EntregaSelecionado = function () {
        this.pessoalSelecionado = false;
        this.pagamentoSelecionado = false;
        this.entregaSelecionado = true;
    };
    ConfiguracoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracoes',
            template: __webpack_require__(/*! ./configuracoes.page.html */ "./src/app/configuracoes/configuracoes.page.html"),
            styles: [__webpack_require__(/*! ./configuracoes.page.scss */ "./src/app/configuracoes/configuracoes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"],
            _serv_service__WEBPACK_IMPORTED_MODULE_2__["ServService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());



/***/ }),

/***/ "./src/app/configuracoes/dirConfiguracoes/dir-entrega.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/configuracoes/dirConfiguracoes/dir-entrega.directive.ts ***!
  \*************************************************************************/
/*! exports provided: DirEntregaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirEntregaDirective", function() { return DirEntregaDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DirEntregaDirective = /** @class */ (function () {
    function DirEntregaDirective(element, render) {
        this.element = element;
        this.render = render;
    }
    DirEntregaDirective.prototype.ngOnChanges = function () {
        console.log("AA");
        if (this.Selecionado) {
            this.render.setElementStyle(this.element.nativeElement, 'background-color', 'orange');
            this.render.setElementStyle(this.element.nativeElement, 'color', 'white');
        }
        else {
            this.render.setElementStyle(this.element.nativeElement, 'background-color', 'white');
            this.render.setElementStyle(this.element.nativeElement, 'color', 'gray');
        }
        this.CEP();
    };
    DirEntregaDirective.prototype.CEP = function () {
        if (this.CepInvalido) {
            this.render.setElementStyle(this.element.nativeElement, '--border-color', 'red');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appDirEntrega'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DirEntregaDirective.prototype, "Selecionado", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appDirCep'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DirEntregaDirective.prototype, "CepInvalido", void 0);
    DirEntregaDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDirEntrega],[appDirCep]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], DirEntregaDirective);
    return DirEntregaDirective;
}());



/***/ }),

/***/ "./src/app/configuracoes/dirConfiguracoes/dir-pagamento.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/configuracoes/dirConfiguracoes/dir-pagamento.directive.ts ***!
  \***************************************************************************/
/*! exports provided: DirPagamentoDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirPagamentoDirective", function() { return DirPagamentoDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DirPagamentoDirective = /** @class */ (function () {
    function DirPagamentoDirective(element, render) {
        this.element = element;
        this.render = render;
    }
    DirPagamentoDirective.prototype.ngOnchanges = function () {
        if (this.Selecionado) {
            this.render.setElementStyle(this.element.nativeElement, 'background-color', 'orange');
            this.render.setElementStyle(this.element.nativeElement, 'color', 'white');
        }
        else {
            this.render.setElementStyle(this.element.nativeElement, 'background-color', 'white');
            this.render.setElementStyle(this.element.nativeElement, 'color', 'gray');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appDirPagamento'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DirPagamentoDirective.prototype, "Selecionado", void 0);
    DirPagamentoDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDirPagamento]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], DirPagamentoDirective);
    return DirPagamentoDirective;
}());



/***/ }),

/***/ "./src/app/configuracoes/dirConfiguracoes/dir-pessoal.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/configuracoes/dirConfiguracoes/dir-pessoal.directive.ts ***!
  \*************************************************************************/
/*! exports provided: DirPessoalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirPessoalDirective", function() { return DirPessoalDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DirPessoalDirective = /** @class */ (function () {
    function DirPessoalDirective(element, render) {
        this.element = element;
        this.render = render;
    }
    DirPessoalDirective.prototype.ngOnChanges = function () {
        if (this.Selecionado) {
            this.render.setElementStyle(this.element.nativeElement, 'background-color', 'orange');
            this.render.setElementStyle(this.element.nativeElement, 'color', 'white');
        }
        else {
            this.render.setElementStyle(this.element.nativeElement, 'background-color', 'white');
            this.render.setElementStyle(this.element.nativeElement, 'color', 'gray');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appDirPessoal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DirPessoalDirective.prototype, "Selecionado", void 0);
    DirPessoalDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDirPessoal]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], DirPessoalDirective);
    return DirPessoalDirective;
}());



/***/ })

}]);
//# sourceMappingURL=configuracoes-configuracoes-module.js.map