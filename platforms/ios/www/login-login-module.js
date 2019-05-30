(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var brmasker_ionic_3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! brmasker-ionic-3 */ "./node_modules/brmasker-ionic-3/dist/index.js");









var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                brmasker_ionic_3__WEBPACK_IMPORTED_MODULE_8__["BrMaskerModule"],
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n         \r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n      <ion-title>\r\n        iKitchen\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n<ion-content padding>\r\n\r\n        <ion-list>\r\n                <ion-item *ngFor=\"let item of list\">\r\n                  <p color=\"white\">{{ item.email }}</p>\r\n                  <p color=\"white\"></p>\r\n              </ion-item>\r\n        </ion-list><!--https://forum.ionicframework.com/t/how-to-read-object-object-using-angular-2/92833/2-->\r\n    <h1 id=\"titulo\">Insira os dados {{ IdLogado  }}</h1>\r\n    <br>\r\n    <!-- FORMULÁRIO -->\r\n    <form [formGroup]=\"formulario\" id=\"Form\">\r\n      \r\n        <!-- CPF https://pt.stackoverflow.com/questions/363703/problema-com-brmask-no-ionic-4\r\n        \r\n          <!-- EMAIL -->\r\n          <ion-item>\r\n          <ion-label position=\"floating\">E-mail</ion-label>\r\n          <ion-input type=\"email\" formControlName=\"email\" ></ion-input>\r\n          </ion-item>\r\n          <!-- SENHA -->\r\n          <ion-item>\r\n          <ion-label position=\"floating\">Senha</ion-label>\r\n          <ion-input type=\"password\" formControlName=\"senha\"></ion-input>\r\n          </ion-item>\r\n      \r\n      <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"clicou()\"> \r\n          Logar \r\n      </ion-button> \r\n    </form>\r\n    <!-- LOGAR -->\r\n      \r\n    <!-- CADASTRAR -->\r\n    \r\n  </ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('WallPaper.jpg') 40% no-repeat;\n  background-size: -15%; }\n\nForm {\n  position: fixed;\n  bottom: 25%;\n  width: 90%; }\n\n#alerta {\n  background-color: white; }\n\n#titulo {\n  color: white;\n  font-size: 200%;\n  position: fixed;\n  bottom: 70%;\n  background-color: rgba(255, 255, 255, 0.3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxQQyBDQVNBXFxEZXNrdG9wXFxJb25pY1xcaUtpdGNoZW4taW9uaWMvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnREFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUl6QjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUVkO0VBQ0ksdUJBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFjO0VBQ2QsV0FBVztFQUNYLDBDQUF1QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL1dhbGxQYXBlci5qcGdcIik7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnc3JjXFxhc3NldHNcXGltZ1xcV2FsbFBhcGVyLmpwZycpIDQwJSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IC0xNSU7XHJcbiAgICBcclxuICAgXHJcbn1cclxuRm9ybXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjUlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4jYWxlcnRhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG4jdGl0dWxve1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBib3R0b206IDcwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _serv_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../serv.service */ "./src/app/serv.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");










var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, router, storage, serv, usuarioService, toastCtrl, menuCtrl) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.storage = storage;
        this.serv = serv;
        this.usuarioService = usuarioService;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().signOut();
                this.formulario = this.formBuilder.group({
                    email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false, "first");
    };
    LoginPage.prototype.clicou = function () {
        var _this = this;
        var mensagem = "";
        firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().signInWithEmailAndPassword(this.formulario.get('email').value, this.formulario.get('senha').value).then(function (user) {
            _this.toastCtrl.Mensagem("Logado com sucesso");
            mensagem = "Logado com sucesso";
            _this.menuCtrl.enable(true, "first");
            _this.router.navigateByUrl('configuracoes/pessoal');
        }).catch(function (error) {
            // Handle Errors here.
            mensagem = error;
            var errorCode = error.code;
            var errorMessage = error.message;
            _this.toastCtrl.Mensagem(errorCode + " : " + errorMessage);
            console.log(errorCode + " : " + errorMessage);
            mensagem = errorCode.toString() + " : " + errorMessage.toString();
            // ...
        });
        //this.toastCtrl.Mensagem(mensagem);
        /*firebase.auth().onAuthStateChanged(function(user) {//https://firebase.google.com/docs/auth/web/manage-users?hl=pt-br
          if (user) {
            this.toastCtrl.Mensagem("Logado com sucesso");
            this.router.navigateByUrl('configuracoes/pessoal');
          }
        });*/
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _serv_service__WEBPACK_IMPORTED_MODULE_7__["ServService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map