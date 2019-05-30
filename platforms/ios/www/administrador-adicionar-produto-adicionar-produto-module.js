(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administrador-adicionar-produto-adicionar-produto-module"],{

/***/ "./node_modules/@ionic-native/crop/ngx/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ionic-native/crop/ngx/index.js ***!
  \******************************************************/
/*! exports provided: Crop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crop", function() { return Crop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Crop = /** @class */ (function (_super) {
    __extends(Crop, _super);
    function Crop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crop.prototype.crop = function (pathToImage, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "crop", { "callbackOrder": "reverse" }, arguments); };
    Crop.pluginName = "Crop";
    Crop.plugin = "cordova-plugin-crop";
    Crop.pluginRef = "plugins";
    Crop.repo = "https://github.com/jeduan/cordova-plugin-crop";
    Crop.platforms = ["Android", "iOS"];
    Crop = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Crop);
    return Crop;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nyb3Avbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBb0M5Qyx3QkFBaUI7Ozs7SUFVekMsbUJBQUksYUFBQyxXQUFtQixFQUFFLE9BQXFCOzs7Ozs7SUFWcEMsSUFBSTtRQURoQixVQUFVLEVBQUU7T0FDQSxJQUFJO2VBckNqQjtFQXFDMEIsaUJBQWlCO1NBQTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDcm9wT3B0aW9ucyB7XG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIHRhcmdldEhlaWdodD86IG51bWJlcjtcbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgQ3JvcFxuICogQGRlc2NyaXB0aW9uIENyb3BzIGltYWdlc1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDcm9wIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jcm9wL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjcm9wOiBDcm9wKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmNyb3AuY3JvcCgncGF0aC90by9pbWFnZS5qcGcnLCB7cXVhbGl0eTogNzV9KVxuICogICAudGhlbihcbiAqICAgICBuZXdJbWFnZSA9PiBjb25zb2xlLmxvZygnbmV3IGltYWdlIHBhdGggaXM6ICcgKyBuZXdJbWFnZSksXG4gKiAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgY3JvcHBpbmcgaW1hZ2UnLCBlcnJvcilcbiAqICAgKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENyb3BPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ3JvcCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNyb3AnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWR1YW4vY29yZG92YS1wbHVnaW4tY3JvcCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyb3AgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcm9wcyBhbiBpbWFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFRvSW1hZ2VcbiAgICogQHBhcmFtIHtDcm9wT3B0aW9uc30gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbmV3IGltYWdlIHBhdGgsIG9yIHJlamVjdHMgaWYgZmFpbGVkIHRvIGNyb3AuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGNyb3AocGF0aFRvSW1hZ2U6IHN0cmluZywgb3B0aW9ucz86IENyb3BPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@ionic-native/image-picker/ngx/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/image-picker/ngx/index.js ***!
  \**************************************************************/
/*! exports provided: OutputType, ImagePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputType", function() { return OutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePicker", function() { return ImagePicker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
var ImagePicker = /** @class */ (function (_super) {
    __extends(ImagePicker, _super);
    function ImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePicker.prototype.getPictures = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getPictures", { "callbackOrder": "reverse" }, arguments); };
    ImagePicker.prototype.hasReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.prototype.requestReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.pluginName = "ImagePicker";
    ImagePicker.plugin = "cordova-plugin-telerik-imagepicker";
    ImagePicker.pluginRef = "window.imagePicker";
    ImagePicker.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
    ImagePicker.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
    ImagePicker.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    ImagePicker.platforms = ["Android", "iOS"];
    ImagePicker = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ImagePicker);
    return ImagePicker;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXBpY2tlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQWdDeEUsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixtREFBWSxDQUFBO0lBQ1osbURBQVEsQ0FBQTtBQUNWLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjs7SUF1Q2dDLCtCQUFpQjs7OztJQVVoRCxpQ0FBVyxhQUFDLE9BQTJCO0lBV3ZDLHVDQUFpQjtJQVdqQiwyQ0FBcUI7Ozs7Ozs7O0lBaENWLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkEzRXhCO0VBMkVpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VQaWNrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIG1heCBpbWFnZXMgdG8gYmUgc2VsZWN0ZWQsIGRlZmF1bHRzIHRvIDE1LiBJZiB0aGlzIGlzIHNldCB0byAxLCB1cG9uIHNlbGVjdGlvbiBvZiBhIHNpbmdsZSBpbWFnZSwgdGhlIHBsdWdpbiB3aWxsIHJldHVybiBpdC4gKEFuZHJvaWQgb25seSlcbiAgICovXG4gIG1heGltdW1JbWFnZXNDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4IHdpZHRoIHRvIGFsbG93IGltYWdlcyB0byBiZVxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBNYXggaGVpZ2h0IHRvIGFsbG93IGltYWdlcyB0byBiZVxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBRdWFsaXR5IG9mIGltYWdlcywgZGVmYXVsdHMgdG8gMTAwXG4gICAqL1xuICBxdWFsaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIEltYWdlUGlja2VyLk91dHB1dFR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgRklMRV9VUkkgOiAwLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBEQVRBX1VSTCA6IDEsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZ1xuICAgKi9cbiAgb3V0cHV0VHlwZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gT3V0cHV0VHlwZSB7XG4gIEZJTEVfVVJMID0gMCxcbiAgREFUQV9VUkxcbn1cblxuLyoqXG4gKiBAbmFtZSBJbWFnZSBQaWNrZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBQbHVnaW4gRm9yIE11bHRpcGxlIEltYWdlIFNlbGVjdGlvblxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4taW1hZ2UtcGlja2VyYC5cbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIGh0dHBzOi8vZ2l0aHViLmNvbS93eW1zZWUvY29yZG92YS1pbWFnZVBpY2tlclxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW1hZ2VQaWNrZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ltYWdlLXBpY2tlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlUGlja2VyOiBJbWFnZVBpY2tlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5pbWFnZVBpY2tlci5nZXRQaWN0dXJlcyhvcHRpb25zKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gKiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICogICAgICAgY29uc29sZS5sb2coJ0ltYWdlIFVSSTogJyArIHJlc3VsdHNbaV0pO1xuICogICB9XG4gKiB9LCAoZXJyKSA9PiB7IH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEltYWdlUGlja2VyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ltYWdlUGlja2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdGVsZXJpay1pbWFnZXBpY2tlcicsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5pbWFnZVBpY2tlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGVsZXJpay1WZXJpZmllZC1QbHVnaW5zL0ltYWdlUGlja2VyJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi10ZWxlcmlrLWltYWdlcGlja2VyIC0tdmFyaWFibGUgUEhPVE9fTElCUkFSWV9VU0FHRV9ERVNDUklQVElPTj1cInlvdXIgdXNhZ2UgbWVzc2FnZVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydQSE9UT19MSUJSQVJZX1VTQUdFX0RFU0NSSVBUSU9OJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEltYWdlUGlja2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUGljayBwaWN0dXJlcyBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0ltYWdlUGlja2VyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRoZSBpbWFnZSBmaWxlIFVSSVxuICAgKiBvdGhlcndpc2UgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBnZXRQaWN0dXJlcyhvcHRpb25zOiBJbWFnZVBpY2tlck9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBoYXZlIHBlcm1pc3Npb24gdG8gcmVhZCBpbWFnZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB3ZSBoYXZlIHBlcm1pc3Npb25cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG4gIH0pXG4gIGhhc1JlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb24gdG8gcmVhZCBpbWFnZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG4gIH0pXG4gIHJlcXVlc3RSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=

/***/ }),

/***/ "./src/app/administrador/adicionar-produto/adicionar-produto.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administrador/adicionar-produto/adicionar-produto.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdicionarProdutoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarProdutoPageModule", function() { return AdicionarProdutoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adicionar_produto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adicionar-produto.page */ "./src/app/administrador/adicionar-produto/adicionar-produto.page.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");









var routes = [
    {
        path: '',
        component: _adicionar_produto_page__WEBPACK_IMPORTED_MODULE_6__["AdicionarProdutoPage"]
    }
];
var AdicionarProdutoPageModule = /** @class */ (function () {
    function AdicionarProdutoPageModule() {
    }
    AdicionarProdutoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ], providers: [
                _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__["Crop"]
            ],
            declarations: [_adicionar_produto_page__WEBPACK_IMPORTED_MODULE_6__["AdicionarProdutoPage"]]
        })
    ], AdicionarProdutoPageModule);
    return AdicionarProdutoPageModule;
}());



/***/ }),

/***/ "./src/app/administrador/adicionar-produto/adicionar-produto.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/administrador/adicionar-produto/adicionar-produto.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>adicionarProduto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- nome -->\n    <ion-item>\n      <ion-label position=\"floating\">nome</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"nome\"></ion-input>\n    </ion-item>\n    <!-- preco -->\n    <ion-item>\n      <ion-label position=\"floating\">preco</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"preco\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">quantidade</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"quant\"></ion-input>\n    </ion-item>\n</ion-list>\n<ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"openImagePicker()\"> \n  Abrir biblioteca\n</ion-button>\n<!-- LOGAR -->\n<ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"CriarProduto()\"> \n    Criar produto \n</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/administrador/adicionar-produto/adicionar-produto.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/administrador/adicionar-produto/adicionar-produto.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFkb3IvYWRpY2lvbmFyLXByb2R1dG8vYWRpY2lvbmFyLXByb2R1dG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administrador/adicionar-produto/adicionar-produto.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/administrador/adicionar-produto/adicionar-produto.page.ts ***!
  \***************************************************************************/
/*! exports provided: AdicionarProdutoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarProdutoPage", function() { return AdicionarProdutoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");






var AdicionarProdutoPage = /** @class */ (function () {
    //https://ionicthemes.com/tutorials/about/ionic-firebase-image-upload
    function AdicionarProdutoPage(toastCtrl, imagePicker, cropService) {
        this.toastCtrl = toastCtrl;
        this.imagePicker = imagePicker;
        this.cropService = cropService;
    }
    AdicionarProdutoPage.prototype.ngOnInit = function () {
    };
    //CriarProduto(){
    AdicionarProdutoPage.prototype.onFileChoose = function ($event) {
        console.log(event);
    };
    //}
    AdicionarProdutoPage.prototype.UploadPicture = function () {
    };
    AdicionarProdutoPage.prototype.CriarProduto = function () {
        var _this = this;
        var db = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]();
        var store = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]();
        var id = db.ref('produto').push().key;
        store.ref('image')
            .put('')
            .catch(function (err) {
            _this.toastCtrl.Mensagem(err);
        });
        db.ref('produto')
            .child(id)
            .child('dados')
            .set({
            nome: this.nome,
            descricao: "",
            preco: this.preco,
            quantidade: this.quant
        }).then(function (res) { _this.toastCtrl.Mensagem("Produto criado com sucesso"); })
            .catch(function (err) { return _this.toastCtrl.Mensagem("err"); });
        // Create a root reference
    };
    AdicionarProdutoPage.prototype.uploadImage = function (imageURI) {
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
    AdicionarProdutoPage.prototype.encodeImageUri = function (imageUri, callback) {
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
    ;
    AdicionarProdutoPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission().then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
            _this.toastCtrl.Mensagem(err);
        });
    };
    AdicionarProdutoPage.prototype.uploadImageToFirebase = function (image) {
        //image = normalizeURL(image);
        //uploads img to firebase storage
        this.uploadImage(image);
        /*.then(photoURL => {
          this.toastCtrl.Mensagem('Image was updated successfully');
          let toast = this.toastCtrl.create({
            message: 'Image was updated successfully',
            duration: 3000
          });
          toast.present();
          })*/
    };
    AdicionarProdutoPage.prototype.openImagePickerCrop = function () {
        var _this = this;
        this.imagePicker.hasReadPermission().then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.cropService.crop(results[i], { quality: 75 }).then(function (newImage) {
                            _this.uploadImageToFirebase(newImage);
                        }, function (error) { return console.error("Error cropping image", error); });
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdicionarProdutoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adicionar-produto',
            template: __webpack_require__(/*! ./adicionar-produto.page.html */ "./src/app/administrador/adicionar-produto/adicionar-produto.page.html"),
            styles: [__webpack_require__(/*! ./adicionar-produto.page.scss */ "./src/app/administrador/adicionar-produto/adicionar-produto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"]])
    ], AdicionarProdutoPage);
    return AdicionarProdutoPage;
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
//# sourceMappingURL=administrador-adicionar-produto-adicionar-produto-module.js.map