(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entrega-entrega-module"],{

/***/ "./src/app/configuracoes/entrega/entrega.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/configuracoes/entrega/entrega.module.ts ***!
  \*********************************************************/
/*! exports provided: EntregaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaPageModule", function() { return EntregaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entrega_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entrega.page */ "./src/app/configuracoes/entrega/entrega.page.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var brmasker_ionic_3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! brmasker-ionic-3 */ "./node_modules/brmasker-ionic-3/dist/index.js");









var routes = [
    {
        path: '',
        component: _entrega_page__WEBPACK_IMPORTED_MODULE_6__["EntregaPage"]
    }
];
var EntregaPageModule = /** @class */ (function () {
    function EntregaPageModule() {
    }
    EntregaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
                brmasker_ionic_3__WEBPACK_IMPORTED_MODULE_8__["BrMaskerModule"]
            ],
            declarations: [_entrega_page__WEBPACK_IMPORTED_MODULE_6__["EntregaPage"]]
        })
    ], EntregaPageModule);
    return EntregaPageModule;
}());



/***/ }),

/***/ "./src/app/configuracoes/entrega/entrega.page.html":
/*!*********************************************************!*\
  !*** ./src/app/configuracoes/entrega/entrega.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>entrega(incompleto)</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-list  >\r\n    <!-- AREA DE INSERT -->\r\n      \r\n          <ion-list >\r\n                \r\n            <ion-item  color=\"red\" [ngStyle]=\"{'background-color':cepNovoColor}\" >\r\n            <ion-label position=\"floating\" color=\"{{ cepNovoColor }}\" id=\"CEP\">CEP</ion-label>\r\n            <ion-input [(ngModel)]=\"cepNovo\" color=\"{{ cepNovoColor }}\"\r\n              (change)=\"cepNovo = mask(cepNovo)\"\r\n              name=\"cepNovo\" maxlength=\"8\"></ion-input>\r\n            </ion-item>\r\n            \r\n            <ion-item>\r\n            <ion-label position=\"floating\">Numero da residencia</ion-label>\r\n            <ion-input value=\"\" type=\"text\" formControlName=\"numeroResidencialNovo\"></ion-input>\r\n            </ion-item>\r\n              <ion-button \r\n              expand=\"full\" (click)=\"InserirDadosDeEntregaNovos()\"> \r\n                  Adicionar \r\n              </ion-button> \r\n          </ion-list>\r\n          \r\n          \r\n        \r\n        \r\n    <ion-list-header>Selecione um CEP para editar</ion-list-header>\r\n    <!-- AREA DE UPDATE OU DELETE -->\r\n    <ion-item>\r\n      <ion-label>CEPs registrados</ion-label>\r\n      <ion-select value=\"brown\" [ngModel]=\"LocalizacaoSelecionado\" okText=\"Okay\" cancelText=\"Dismiss\" (change)=CepSelecionado()>\r\n        <ion-item *ngFor=\"let item of ListaCep\">\r\n          <ion-select-option \r\n            value=\"{{ item.cep }}\">\r\n            CEP:{{ item.cep }} / Residencias:{{ item.residencia }}\r\n          </ion-select-option>\r\n        </ion-item>\r\n      </ion-select>\r\n    </ion-item>\r\n    <!-- FORMULÁRIO -->\r\n    <form [formGroup]=\"formulario2\" id=\"Form\" *ngIf=\"Edicao\">\r\n        <ion-list>\r\n            <ion-item *ngFor=\"let item of DadosCEP\">\r\n              \r\n              <ion-item>\r\n              <ion-label position=\"floating\">CEP</ion-label>\r\n              <ion-input value=\"{{ item.cep }}\" type=\"text\" formControlName=\"cepAtualizado\"></ion-input>\r\n              </ion-item>\r\n              \r\n              <ion-item>\r\n              <ion-label position=\"floating\">Numero da residencia</ion-label>\r\n              <ion-input value=\"{{ item.residencia }}\" type=\"text\" formControlName=\"numeroResidencialAtualizado\"></ion-input>\r\n              </ion-item>\r\n            </ion-item>\r\n        </ion-list>\r\n        \r\n        <!-- LOGAR -->\r\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"InserirDadosDeEntrega()\")> \r\n            Alterar \r\n        </ion-button> \r\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" > \r\n            Remover \r\n        </ion-button> \r\n      \r\n      </form>\r\n  \r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/configuracoes/entrega/entrega.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/configuracoes/entrega/entrega.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#CEP {\n  background-color: red;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhY29lcy9lbnRyZWdhL0M6XFxVc2Vyc1xcUEMgQ0FTQVxcRGVza3RvcFxcSW9uaWNcXGlLaXRjaGVuLWlvbmljL3NyY1xcYXBwXFxjb25maWd1cmFjb2VzXFxlbnRyZWdhXFxlbnRyZWdhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFvQjtFQUNwQixVQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb25maWd1cmFjb2VzL2VudHJlZ2EvZW50cmVnYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjQ0VQe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/configuracoes/entrega/entrega.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuracoes/entrega/entrega.page.ts ***!
  \*******************************************************/
/*! exports provided: EntregaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaPage", function() { return EntregaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mascara_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mascara.service */ "./src/app/services/mascara.service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







var EntregaPage = /** @class */ (function () {
    function EntregaPage(mascara, usuario, formBuilder, toastCtrl) {
        this.mascara = mascara;
        this.usuario = usuario;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.cepNovo = '';
        this.cepNovoColor = "";
        this.db = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]();
    }
    EntregaPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //this.toastEntrega("AAAA");
                /*var id;
                  /*await this.storage.get('id').then((value) => {
                    id=Number(value);
                    console.log(value);
                  });
                this.userId=1;
                this.usuario.AddCepOfUser(1,
                  "55555555",
                  "11");
                
                //this.ListaCep=[];
                //this.ListaCep=[{cep:"AAA",residencia:"AAA"}];
                this.ListaCep=[await this.usuario.getCEPByUserId(1)];*/
                //this.toastEntrega(this.ListaCep[0].cep);
                this.formulario = this.formBuilder.group({
                    cepNovo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    numeroResidencialNovo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
                });
                return [2 /*return*/];
            });
        });
    };
    EntregaPage.prototype.mask = function (v) {
        //this.toastEntrega("V "+v);
        return this.mascara.format(v, 'cep');
    };
    EntregaPage.prototype.InserirDadosDeEntregaNovos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cep, numeroResidencial;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                cep = [];
                numeroResidencial = [];
                this.db.ref('usuario')
                    .child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid)
                    .child('dados')
                    .child('LocalDeEntregua')
                    .child('cep').once('value').then(function (snapshot) {
                    snapshot.forEach(function (userResult) {
                        if (userResult.val()) {
                            cep.push(userResult.val());
                            console.log(userResult.val());
                        }
                        //numeroResidencial.push(userResult.val().NumeroResidencia);
                        //Pega cada pessoa por vez
                    });
                    cep.push(_this.cepNovo);
                    _this.db.ref('usuario')
                        .child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid)
                        .child('LocalDeEntregua').child('cep').set(cep);
                    _this.toastCtrl.Mensagem("CEP adicionado");
                });
                numeroResidencial.push(this.numeroResidencialNovo);
                this.db.ref('usuario')
                    .child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid)
                    .child('LocalDeEntregua').set(numeroResidencial);
                this.Edicao = false;
                this.toastCtrl.Mensagem("Adicionado com sucesso");
                return [2 /*return*/];
            });
        });
    };
    EntregaPage.prototype.FormatoCepConsitente = function () {
        var cep = this.cepNovo.split("");
        if (cep.length < 8) {
            this.CepInvalido = true;
        }
        else {
            this.CepInvalido = false;
        }
    };
    EntregaPage.prototype.CepSelecionado = function () {
        this.DadosCEP = [];
        this.Edicao = true;
        //this.DadosCEP=this.usuario.DadosDeEntrega(this.LocalizacaoSelecionado);
        this.LocalId = this.DadosCEP[0].id;
    };
    EntregaPage.prototype.UpdateCEP = function () {
        /*this.usuario.UpdateCEP(this.LocalId,
          this.userId,
          this.formulario.get('cepAtualizado').value,
          this.formulario.get('numeroResidencialAtualizado').value)*/
    };
    EntregaPage.prototype.DeleteCEP = function () {
    };
    EntregaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entrega',
            template: __webpack_require__(/*! ./entrega.page.html */ "./src/app/configuracoes/entrega/entrega.page.html"),
            styles: [__webpack_require__(/*! ./entrega.page.scss */ "./src/app/configuracoes/entrega/entrega.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mascara_service__WEBPACK_IMPORTED_MODULE_2__["MascaraService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], EntregaPage);
    return EntregaPage;
}());



/***/ })

}]);
//# sourceMappingURL=entrega-entrega-module.js.map