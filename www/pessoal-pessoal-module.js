(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pessoal-pessoal-module"],{

/***/ "./src/app/configuracoes/pessoal/pessoal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/configuracoes/pessoal/pessoal.module.ts ***!
  \*********************************************************/
/*! exports provided: PessoalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoalPageModule", function() { return PessoalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");
/* harmony import */ var _pessoal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pessoal.page */ "./src/app/configuracoes/pessoal/pessoal.page.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/services.module */ "./src/app/services/services.module.ts");









var routes = [
    {
        path: '',
        component: _pessoal_page__WEBPACK_IMPORTED_MODULE_7__["PessoalPage"]
    }
];
var PessoalPageModule = /** @class */ (function () {
    function PessoalPageModule() {
    }
    PessoalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicesModule"],
                br_mask__WEBPACK_IMPORTED_MODULE_6__["BrMaskerModule"]
            ],
            declarations: [_pessoal_page__WEBPACK_IMPORTED_MODULE_7__["PessoalPage"]]
        })
    ], PessoalPageModule);
    return PessoalPageModule;
}());



/***/ }),

/***/ "./src/app/configuracoes/pessoal/pessoal.page.html":
/*!*********************************************************!*\
  !*** ./src/app/configuracoes/pessoal/pessoal.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>pessoal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n    <ion-button shape=\"round\" expand=\"full\" (click)=\"BotaoEdicao()\" style=\"position:relative;\"> \r\n        {{ TextoEdicao }}\r\n    </ion-button> \r\n   <!-- FORMULÁRIO -->\r\n   <form [formGroup]=\"formulario\" id=\"Form\" #loginForm=\"ngForm\">\r\n     <ion-item *ngFor=\"let item of userData\">\r\n        <ion-list>\r\n        \r\n          <!-- EMAIL -->\r\n          <ion-item>\r\n              <ion-label position=\"floating\">E-mail:{{ item.email }} </ion-label>\r\n              <ion-input [(ngModel)]=\"email\" name=\"email\" type=\"email\" value=\"{{ item.email }}\"\r\n               formControlName=\"email\" readonly=\"{{ SomenteLer }}\"></ion-input>\r\n          </ion-item>\r\n          <!--  CPF https://pt.stackoverflow.com/questions/363703/problema-com-brmask-no-ionic-4\r\n          https://www.npmjs.com/package/brmasker-ionic-3 -->\r\n          <ion-item>\r\n              \r\n              <ion-label position=\"floating\">CPF(Atual):{{ item.cpf }}</ion-label>\r\n              <ion-input [(ngModel)]=\"cpf_cnpj\" maxlength=\"11\" value=\"{{ item.cpf_cnpj }}\" formControlName=\"cpf_cnpj\"\r\n               (change)=\"cpf_cnpj = mask(cpf_cnpj,'cpf')\" name=\"cpf_cnpj\" readonly=\"{{ SomenteLer }}\"></ion-input>\r\n          </ion-item>\r\n          <!-- SENHA -->\r\n          <ion-item>\r\n              <ion-label position=\"floating\">Senha(Atual):{{ item.senha }}</ion-label>\r\n              <ion-input type=\"password\" value=\"{{ item.senha }}\" formControlName=\"senha\" readonly=\"{{ SomenteLer }}\"></ion-input>\r\n          </ion-item>\r\n\r\n          \r\n        </ion-list>\r\n      </ion-item>\r\n      <!-- ALTERAR  -->\r\n      <ion-button  *ngIf=\"mostrarBotao==true\" expand=\"full\" (click)=\"botaoAlterar()\" id=\"botaoAlterar\" color=\"green\"> \r\n          Alterar \r\n      </ion-button>\r\n      \r\n    </form>\r\n      <ion-button *ngIf=\"mostrarBotao==true\" (click)=\"botaoApagar()\" id=\"botaoApagar\" color=\"red\"> \r\n          Apagar \r\n      </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/configuracoes/pessoal/pessoal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/configuracoes/pessoal/pessoal.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#botaoAlterar {\n  background-color: green;\n  border-radius: 10%;\n  position: relative;\n  margin: 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhY29lcy9wZXNzb2FsL0M6XFxVc2Vyc1xcUEMgQ0FTQVxcRGVza3RvcFxcSW9uaWNcXGlLaXRjaGVuLWlvbmljL3NyY1xcYXBwXFxjb25maWd1cmFjb2VzXFxwZXNzb2FsXFxwZXNzb2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNvZXMvcGVzc29hbC9wZXNzb2FsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3Rhb0FsdGVyYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/configuracoes/pessoal/pessoal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuracoes/pessoal/pessoal.page.ts ***!
  \*******************************************************/
/*! exports provided: PessoalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoalPage", function() { return PessoalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _serv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv.service */ "./src/app/serv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_mascara_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/mascara.service */ "./src/app/services/mascara.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/toast.service */ "./src/app/toast.service.ts");










var PessoalPage = /** @class */ (function () {
    function PessoalPage(formBuilder, Serv, router, storage, serv, usuarioService, mascara, toastCtrl) {
        this.formBuilder = formBuilder;
        this.Serv = Serv;
        this.router = router;
        this.storage = storage;
        this.serv = serv;
        this.usuarioService = usuarioService;
        this.mascara = mascara;
        this.toastCtrl = toastCtrl;
        this.email = "";
    }
    PessoalPage.prototype.ListarValores = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase__WEBPACK_IMPORTED_MODULE_8__["database"]();
                this.userData = [];
                firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().onAuthStateChanged(function (user) {
                    _this.TextoEdicao = "Editar";
                    db.ref('usuario').child(user.uid).once('value').then(function (snapshot) {
                        snapshot.forEach(function (userResult) {
                            _this.userData.push(userResult.val());
                            console.log(userResult.val().email);
                            //Pega cada pessoa por vez
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    PessoalPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.formulario = this.formBuilder.group({
                    email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    cpf_cnpj: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                });
                this.SomenteLer = true;
                this.ListarValores();
                this.mostrarBotao = false;
                return [2 /*return*/];
            });
        });
    };
    PessoalPage.prototype.mask = function (v) {
        //this.toastPessoal(v);
        return this.mascara.format(v, 'cpf');
    };
    PessoalPage.prototype.ngOnChange = function () {
        this.SomenteLer = this.Serv.getSomenteLer();
    };
    PessoalPage.prototype.botaoAlterar = function () {
        var _this = this;
        var db = firebase__WEBPACK_IMPORTED_MODULE_8__["database"]();
        //this.CPFVelhoOuNovo();
        var erros;
        var user = firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser;
        console.log(this.email);
        //Email
        user.updateEmail(this.email).then(function (user) {
            db.ref('usuario')
                .child(firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid)
                .child('dados')
                .child('email').set(_this.email);
        }).catch(function (error) {
            erros += " Email";
        });
        //SENHA
        user.updatePassword(this.formulario.get('senha').value).then(function (user) {
        }).catch(function (error) {
            erros += " senha";
        });
        //CPF
        if (this.cpf_cnpj.length == 14) {
            db.ref('usuario').child(user.uid).child('dados').child('cpf_cnpj').set(this.formulario.get('cpf_cnpj').value);
        }
        else {
            erros += " cpf";
        }
        if (erros) {
            this.toastCtrl.Mensagem("Erros nos seguintes campos: " + erros);
            console.log(erros);
        }
        else {
            this.toastCtrl.Mensagem("Alterado com sucesso");
        }
        /*this.usuarioService.updateUser(
          this.userId,
          this.formulario.get('email').value,
          this.formulario.get('cpf_cnpj').value,"123");*/
        this.DesabilitarEdicao();
    };
    PessoalPage.prototype.botaoApagar = function () {
    };
    PessoalPage.prototype.BotaoEdicao = function () {
        if (this.SomenteLer) {
            this.HabilitarEdicao();
        }
        else {
            this.DesabilitarEdicao();
        }
    };
    PessoalPage.prototype.HabilitarEdicao = function () {
        this.TextoEdicao = "Cancelar";
        this.SomenteLer = false;
        this.Serv.setSomenteLer(false);
        this.SomenteLer = false;
        this.mostrarBotao = true;
    };
    PessoalPage.prototype.DesabilitarEdicao = function () {
        this.TextoEdicao = "Editar";
        this.SomenteLer = true;
        this.mostrarBotao = false;
        //location.reload;
        this.router.navigateByUrl('configuracoes/pessoal');
    };
    PessoalPage.prototype.CPFVelhoOuNovo = function () {
        if (this.formulario.get('cpfNovo').value == '' ||
            this.formulario.get('cpfNovo').value.length < 14) {
            return this.formulario.get('cpfVelho').value;
        }
        else {
            return this.formulario.get('cpfNovo').value;
        }
    };
    PessoalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pessoal',
            template: __webpack_require__(/*! ./pessoal.page.html */ "./src/app/configuracoes/pessoal/pessoal.page.html"),
            styles: [__webpack_require__(/*! ./pessoal.page.scss */ "./src/app/configuracoes/pessoal/pessoal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _serv_service__WEBPACK_IMPORTED_MODULE_3__["ServService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _serv_service__WEBPACK_IMPORTED_MODULE_3__["ServService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"],
            _services_mascara_service__WEBPACK_IMPORTED_MODULE_7__["MascaraService"],
            src_app_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]])
    ], PessoalPage);
    return PessoalPage;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _tarefa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tarefa.service */ "./src/app/services/tarefa.service.ts");






var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"], _tarefa_service__WEBPACK_IMPORTED_MODULE_5__["TarefaService"]]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/services/tarefa.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/tarefa.service.ts ***!
  \********************************************/
/*! exports provided: TarefaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefaService", function() { return TarefaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TarefaService = /** @class */ (function () {
    function TarefaService() {
    }
    TarefaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TarefaService);
    return TarefaService;
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
//# sourceMappingURL=pessoal-pessoal-module.js.map