(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_6__["ServicesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]],
            providers: [
                _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <ion-title>\r\n        iKitchen\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen=\"true\">\r\n    \r\n \r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n  <section>\r\n    <div id=\"Logo2\">\r\n      <img src=\"logo.jpg\">\r\n    </div>\r\n    <img src=\"{{ v }}\">\r\n    <br>\r\n    <div id=\"Opcoes\">\r\n      <h4>Ja tem conta?</h4>\r\n      <button ion-button (click)=\"IrParaLogin()\" >Loge-se aqui</button>\r\n    </div>\r\n    <br>\r\n    <div id=\"Opcoes\">\r\n      <h4>Nao tem conta?</h4>\r\n      <button ion-button (click)=\"IrParaCadastro()\" >Crie uma conta aqui</button>\r\n    </div> \r\n    <br>  \r\n    <div id=\"Opcoes\">\r\n      <h4>Login com a conta do google</h4>\r\n      <button ion-button (click)=\"doGoogleLogin()\">\r\n        Login\r\n        <ion-icon name=\"logo-googleplus\"></ion-icon>\r\n      </button>\r\n    </div> \r\n    \r\n  <button ion-button (click)=\"Clicou()\" >Clique</button>\r\n      <p style=\"color:white;\">Conectado:{{ X }}</p>\r\n      <button ion-button (click)=\"LoginDeAdministrador()\" >Clique</button>\r\n</section>\r\n </ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Span2 {\n  margin: auto;\n  font-size: 250%;\n  color: orange;\n  font-family: 'Courier New', Courier, monospace; }\n\n#Span1 {\n  color: yellow;\n  font-size: 230%;\n  text-align: center;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; }\n\n#Logo {\n  margin: auto;\n  position: relative;\n  border-radius: 10%;\n  width: 50%;\n  text-align: center;\n  background: rgba(136, 125, 125, 0.7); }\n\n#Logo2 {\n  background-image: url('logo.jpg');\n  margin: auto;\n  height: 75%;\n  width: 75%;\n  position: relative; }\n\n#Opcoes {\n  margin: auto;\n  background: rgba(0, 0, 0, 0.3);\n  position: relative;\n  font-size: 100%;\n  color: white;\n  text-align: center;\n  width: 75%;\n  height: 25%;\n  background-size: 25% 75%;\n  border-radius: 5%; }\n\nion-content {\n  --background: url('WallPaper.jpg') 40% no-repeat;\n  background-size: -15%; }\n\nbutton {\n  background: rgba(255, 255, 255, 0);\n  border-color: rgba(255, 255, 255, 0);\n  border-radius: 10%;\n  color: white;\n  font-size: 100%; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFBDIENBU0FcXERlc2t0b3BcXElvbmljXFxpS2l0Y2hlbi1pb25pYy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQVk7RUFDWiw4Q0FBOEMsRUFBQTs7QUFFbEQ7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzRUFBc0UsRUFBQTs7QUFFMUU7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG9DQUFtQyxFQUFBOztBQUV2QztFQUNJLGlDQUFnRDtFQUNoRCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixpQkFBaUIsRUFBQTs7QUFLckI7RUFFSSxnREFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUl6QjtFQUVJLGtDQUFvQztFQUNwQyxvQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLFlBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjU3BhbjJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICBjb2xvcjpvcmFuZ2U7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcbiNTcGFuMXtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICBmb250LXNpemU6IDIzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiNMb2dve1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgxMzYsIDEyNSwgMTI1LCAwLjcpO1xyXG59XHJcbiNMb2dvMntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2xvZ28uanBnKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbiNPcGNvZXN7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNSUgNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9XYWxsUGFwZXIuanBnXCIpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJ3NyY1xcYXNzZXRzXFxpbWdcXFdhbGxQYXBlci5qcGcnKSA0MCUgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAtMTUlO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcbmJ1dHRvbntcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "./node_modules/@ionic-native/admob-free/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _services_imagem_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/imagem.service */ "./src/app/services/imagem.service.ts");
/* harmony import */ var _services_ad_mob_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/ad-mob.service */ "./src/app/services/ad-mob.service.ts");











var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, router, 
    //private networkInterface: NetworkInterface
    usuarioService, admobFree, toastCtrl, googlePlus, loadingController, platform, alertController, FirebaseStore, AdMob) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.usuarioService = usuarioService;
        this.admobFree = admobFree;
        this.toastCtrl = toastCtrl;
        this.googlePlus = googlePlus;
        this.loadingController = loadingController;
        this.platform = platform;
        this.alertController = alertController;
        this.FirebaseStore = FirebaseStore;
        this.AdMob = AdMob;
    }
    HomePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toastCtrl.Mensagem("OI");
                db = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]();
                //this.Carregar();
                this.AdMob.AtivarBanner();
                data = [];
                db.ref('test').set({ nome: "AA", validade: "" });
                firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().signInWithEmailAndPassword("email@gmail.com", "password").then(function (user) {
                    console.log(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.email);
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    // ...
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.Carregar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var storage, Reference;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                storage = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]();
                Reference = storage.refFromURL('gs://project-f72e3.appspot.com');
                //console.log(await this.FirebaseStore.LoadImage());
                Reference.child('image/photo.jpg')
                    .getDownloadURL().then(function (url) {
                    // Or inserted into an <img> element:
                    _this.v = document.getElementById('myimg');
                    _this.v = url;
                    console.log(url);
                }).catch(function (error) {
                    // Handle any errors
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.doGoogleLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.Clicou = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logou;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.usuarioService.CadastrarDadosBasicosDeUsuario("aaa", "123", "1234567890");
                        this.X = false;
                        return [4 /*yield*/, this.usuarioService.logar("aaa", "123")];
                    case 1:
                        logou = _a.sent();
                        this.X = logou;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.IrParaLogin = function () {
        this.router.navigate(['/login']);
    };
    HomePage.prototype.IrParaCadastro = function () {
        this.router.navigate(['/criarconta']);
        //this.navCtrl.back();
    };
    HomePage.prototype.LoginDeAdministrador = function () {
        console.log("AAA");
        this.router.navigate(['/loginAdmintrador']);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
        //https://ionicframework.com/docs/native/network-interface
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_6__["AdMobFree"],
            _toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_imagem_service__WEBPACK_IMPORTED_MODULE_9__["ImagemService"],
            _services_ad_mob_service__WEBPACK_IMPORTED_MODULE_10__["AdMobService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/ad-mob.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/ad-mob.service.ts ***!
  \********************************************/
/*! exports provided: AdMobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdMobService", function() { return AdMobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "./node_modules/@ionic-native/admob-free/ngx/index.js");



var AdMobService = /** @class */ (function () {
    function AdMobService(admobFree) {
        this.admobFree = admobFree;
    }
    AdMobService.prototype.AtivarBanner = function () {
        this.admobFree.banner.config({
            id: 'ca-app-pub-8487437273346534/1477069444',
            isTesting: true,
            autoShow: true
        });
        this.admobFree.banner.prepare(); //Executa o banner
    };
    AdMobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_2__["AdMobFree"]])
    ], AdMobService);
    return AdMobService;
}());



/***/ }),

/***/ "./src/app/services/imagem.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/imagem.service.ts ***!
  \********************************************/
/*! exports provided: ImagemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagemService", function() { return ImagemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var ImagemService = /** @class */ (function () {
    //https://ionicthemes.com/tutorials/about/ionic-firebase-image-upload
    function ImagemService() {
    }
    ImagemService.prototype.LoadImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, storage, Reference;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]();
                storage = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]();
                Reference = storage.refFromURL('gs://project-f72e3.appspot.com');
                Reference.child('image/photo.jpg')
                    .getDownloadURL().then(function (url) {
                    // `url` is the download URL for 'images/stars.jpg'
                    // This can be downloaded directly:
                    var xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = function (event) {
                        var blob = xhr.response;
                    };
                    xhr.open('GET', url);
                    xhr.send();
                    // Or inserted into an <img> element:
                    _this.image = document.getElementById('myimg');
                    _this.image = url;
                    return url;
                }).catch(function (error) {
                    // Handle any errors
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    ImagemService.prototype.uploadImage = function (imageURI) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
            var imageRef = storageRef.child('image').child('imageName');
            _this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(function (snapshot) {
                    resolve(snapshot.downloadURL);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    ImagemService.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    ImagemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImagemService);
    return ImagemService;
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
//# sourceMappingURL=home-home-module.js.map