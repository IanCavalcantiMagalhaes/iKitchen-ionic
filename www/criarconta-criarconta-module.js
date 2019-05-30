(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["criarconta-criarconta-module"],{

/***/ "./src/app/criarconta/criarconta.module.ts":
/*!*************************************************!*\
  !*** ./src/app/criarconta/criarconta.module.ts ***!
  \*************************************************/
/*! exports provided: CriarcontaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarcontaPageModule", function() { return CriarcontaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _criarconta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./criarconta.page */ "./src/app/criarconta/criarconta.page.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/services.module */ "./src/app/services/services.module.ts");








var routes = [
    {
        path: '',
        component: _criarconta_page__WEBPACK_IMPORTED_MODULE_6__["CriarcontaPage"]
    }
];
var CriarcontaPageModule = /** @class */ (function () {
    function CriarcontaPageModule() {
    }
    CriarcontaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                Storage,
                _services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_criarconta_page__WEBPACK_IMPORTED_MODULE_6__["CriarcontaPage"]]
        })
    ], CriarcontaPageModule);
    return CriarcontaPageModule;
}());



/***/ }),

/***/ "./src/app/criarconta/criarconta.page.html":
/*!*************************************************!*\
  !*** ./src/app/criarconta/criarconta.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n          </ion-buttons>\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n      <ion-title>\r\n        iKitchen\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n<ion-content padding>\r\n    <!--https://forum.ionicframework.com/t/how-to-read-object-object-using-angular-2/92833/2-->>\r\n    <h1 id=\"titulo\">Registre esses dados({{ id }})</h1>\r\n    <br>\r\n    <!-- FORMULÁRIO -->\r\n    <form [formGroup]=\"formulario\" id=\"Form\">\r\n      <ion-list>\r\n          <!-- EMAIL -->\r\n          <ion-item>\r\n          <ion-label position=\"floating\">E-mail</ion-label>\r\n          <ion-input type=\"email\" formControlName=\"email\" ></ion-input>\r\n          </ion-item>\r\n          <!-- SENHA -->\r\n          <ion-item>\r\n          <ion-label position=\"floating\">Senha</ion-label>\r\n          <ion-input type=\"password\" formControlName=\"senha\"></ion-input>\r\n          </ion-item>\r\n      </ion-list>\r\n      \r\n      <!-- LOGAR -->\r\n      <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"Cadastrar()\"> \r\n          Logar \r\n      </ion-button> \r\n    \r\n    </form>\r\n    <p id=\"alerta\"></p>\r\n\r\n    <!-- CADASTRAR -->\r\n    \r\n  </ion-content>"

/***/ }),

/***/ "./src/app/criarconta/criarconta.page.scss":
/*!*************************************************!*\
  !*** ./src/app/criarconta/criarconta.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Span2 {\n  margin: auto;\n  font-size: 250%;\n  color: orange;\n  font-family: 'Courier New', Courier, monospace; }\n\n#Span1 {\n  color: yellow;\n  font-size: 230%;\n  text-align: center;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; }\n\n#Logo {\n  margin: auto;\n  position: relative;\n  border-radius: 10%;\n  width: 50%;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.7); }\n\n#Logo2 {\n  background-image: url('logo.jpg');\n  margin: auto;\n  height: 75%;\n  width: 75%;\n  position: relative; }\n\n.red {\n  background-color: red;\n  color: red; }\n\n.green {\n  background-color: green;\n  color: green; }\n\n#titulo {\n  color: white; }\n\n#Opcoes {\n  margin: auto;\n  background: rgba(0, 0, 0, 0.3);\n  position: relative;\n  font-size: 100%;\n  color: white;\n  text-align: center;\n  width: 75%;\n  height: 25%;\n  background-size: 25% 75%;\n  border-radius: 5%; }\n\nion-content {\n  --background: url('WallPaper.jpg') 40% no-repeat;\n  background-size: -15%; }\n\nbutton {\n  background: rgba(255, 255, 255, 0);\n  border-color: rgba(255, 255, 255, 0);\n  border-radius: 10%;\n  color: white;\n  font-size: 100%; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JpYXJjb250YS9DOlxcVXNlcnNcXFBDIENBU0FcXERlc2t0b3BcXElvbmljXFxpS2l0Y2hlbi1pb25pYy9zcmNcXGFwcFxcY3JpYXJjb250YVxcY3JpYXJjb250YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQVk7RUFDWiw4Q0FBOEMsRUFBQTs7QUFFbEQ7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzRUFBc0UsRUFBQTs7QUFFMUU7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDhCQUE2QixFQUFBOztBQUVqQztFQUNJLGlDQUFnRDtFQUNoRCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxxQkFBb0I7RUFDcEIsVUFBUyxFQUFBOztBQUNaO0VBQ0csdUJBQXNCO0VBQ3RCLFlBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVc7RUFDWCw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGlCQUFpQixFQUFBOztBQUtyQjtFQUVJLGdEQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBSXpCO0VBRUksa0NBQW9DO0VBQ3BDLG9DQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsWUFBVztFQUNYLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3JpYXJjb250YS9jcmlhcmNvbnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNTcGFuMntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMjUwJTtcclxuICAgIGNvbG9yOm9yYW5nZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuI1NwYW4xe1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICAgIGZvbnQtc2l6ZTogMjMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuI0xvZ297XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuI0xvZ28ye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvbG9nby5qcGcpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLnJlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gICAgY29sb3I6cmVkO1xyXG59LmdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG59XHJcbiN0aXR1bG97XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4jT3Bjb2Vze1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjUlIDc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWcvV2FsbFBhcGVyLmpwZ1wiKTtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCdzcmNcXGFzc2V0c1xcaW1nXFxXYWxsUGFwZXIuanBnJykgNDAlIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogLTE1JTtcclxuICAgIFxyXG4gICBcclxufVxyXG5idXR0b257XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/criarconta/criarconta.page.ts":
/*!***********************************************!*\
  !*** ./src/app/criarconta/criarconta.page.ts ***!
  \***********************************************/
/*! exports provided: CriarcontaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarcontaPage", function() { return CriarcontaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");









var CriarcontaPage = /** @class */ (function () {
    function CriarcontaPage(formBuilder, usuarioService, storage, navCtrl, router, toastCtrl, menuCtrl) {
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_7__["database"]();
    }
    CriarcontaPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.formulario = this.formBuilder.group({
                    email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
                });
                return [2 /*return*/];
            });
        });
    };
    CriarcontaPage.prototype.Cadastrar = function () {
        var _this = this;
        var uid = this.db.ref('usuario').push().key;
        firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().createUserWithEmailAndPassword(this.formulario.get('email').value, this.formulario.get('senha').value).then(function (user) {
            _this.db.ref('usuario').set(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid);
            _this.db.ref('usuario').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid)
                .child('dados').set({ email: _this.formulario.get('email').value,
                cpf_cnpj: "",
                id: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid
            });
            _this.toastCtrl.Mensagem("Cadastrado com suceeso");
            _this.menuCtrl.enable(true, "first");
            _this.router.navigateByUrl('configuracoes/pessoal');
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            _this.toastCtrl.Mensagem(errorCode + " : " + errorMessage);
            // ...
        });
    };
    CriarcontaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-criarconta',
            template: __webpack_require__(/*! ./criarconta.page.html */ "./src/app/criarconta/criarconta.page.html"),
            styles: [__webpack_require__(/*! ./criarconta.page.scss */ "./src/app/criarconta/criarconta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], CriarcontaPage);
    return CriarcontaPage;
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
//# sourceMappingURL=criarconta-criarconta-module.js.map