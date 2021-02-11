function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-forms-forms-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesFormsComponentsNgBootstrapTableNgBootstrapTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div  *ngIf='(metadata.length >0) || (1==1)'>\r\n<form (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\" >\r\n\r\n    <div class=\"container text-right p-2\">\r\n        <button type=\"button\" *ngIf=\"btnStatus.mode=='view'\" class=\"btn btn-primary custom r-5\" (click)=\"onEdit()\" [disabled]=\"false\" [hidden]=\"false\">Edit</button>&nbsp;\r\n        <button type=\"button\" *ngIf=\"btnStatus.mode=='view'\" class=\"btn btn-success custom r-5\" (click)=\"onDelete()\" [disabled]=\"false\" [hidden]=\"false\">Delete</button>&nbsp;\r\n        <button type=\"submit\" *ngIf=\"btnStatus.isEditing\" (click)=\"onSubmit(form)\" class=\"btn btn-success custom r-5\" [disabled]=\"false\">&nbsp;\r\n            <span *ngIf=\"this.loadbtnShow\" id=\"spinbutton\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>  \r\n            Save\r\n        </button>&nbsp; \r\n        <button type=\"button\" id=\"cancel\" *ngIf=\"btnStatus.isEditing\" [disabled]=\"false\" (click)=\"onCancel()\" class=\"btn btn-mdprimary custom r-5\">Cancel</button>&nbsp;\r\n        <button type=\"button\" *ngIf=\"btnStatus.mode=='view'\" class=\"btn btn-primary custom r-5\" (click)=\"onBack()\" [disabled]=\"false\" [hidden]=\"false\">Back</button>&nbsp;\r\n    </div>\r\n    <div class=\"p-2\"> \r\n        <div formArrayName=\"SubStageFormArray\">\r\n          <div class=\"basic-stage\">\r\n            <div *ngFor = 'let item of metadata; let idx = index'>\r\n              <div *ngIf='item.visibleRow'>\r\n                <div class=\"form-group\" *ngIf='item.name==\"id\"; else not_id' >\r\n                    <label>{{item.label}}</label>\r\n                    <input class=\"form-control\" name=\"{{item.name}}\" id=\"ctrl{{idx}}\" type=\"text\" [formControlName]=\"idx\" placeholder=\"{{item.name}}\" readonly>\r\n                </div>\r\n                <ng-template #not_id>\r\n                <div class=\"form-group\" *ngIf='item.ctype==\"text\"'>\r\n                    <label>{{item.label}}</label>\r\n                    <input class=\"form-control\" name=\"{{item.name}}\" id=\"ctrl{{idx}}\" type=\"text\" [formControlName]=\"idx\" placeholder=\"{{item.name}}\">\r\n                </div>\r\n                <div class=\"form-group\" *ngIf='item.ctype==\"area\"'>\r\n                    <label>{{item.label}}</label>\r\n                    <textarea class=\"form-control\" name=\"{{item.name}}\" id=\"ctrl{{idx}}\" cols=\"30\" rows=\"3\" placeholder=\"{{item.name}}\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\" *ngIf='item.ctype==\"nohp\"'>\r\n                    <label>No HP</label>\r\n                    <div class=\"form-group form-inline\">            \r\n                        <input type=\"text\" id=\"np\" class=\"form-control col-3\" value=\"+62\" readonly>\r\n                        <input type=\"Number\" class=\"form-control col-9\" placeholder=\"{{item.name}}\">\r\n                    </div>\r\n                </div>\r\n                </ng-template>\r\n                <span *ngIf=\"!IsValidItem(idx)\" class=\"inputError\">{{lastError}}</span>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between p-2\">\r\n    </div>\r\n</form>    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/sort-icon/sort-icon.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/sort-icon/sort-icon.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesFormsComponentsSortIconSortIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf='direction === \"asc\"'><fa-icon class=\"sort-icon\" [icon]='[\"fas\", \"chevron-up\"]'></fa-icon></ng-container><ng-container *ngIf='direction === \"desc\"'><fa-icon class=\"sort-icon\" [icon]='[\"fas\", \"chevron-down\"]'></fa-icon></ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/containers/tables/tables.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/containers/tables/tables.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesFormsContainersTablesTablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\r\n    <sb-dashboard-head title=\"{{Title}}\" [hideBreadcrumbs]=\"false\">\r\n    </sb-dashboard-head>\r\n    <sb-card>\r\n        <div class=\"card-body\">{{Description}}</div>\r\n    </sb-card>\r\n    <sb-card>\r\n        <div class=\"card-header\">\r\n            <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>\r\n            {{Title}}\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <sb-ng-bootstrap-table [pageSize]=\"6\">                \r\n            </sb-ng-bootstrap-table>\r\n        </div>\r\n    </sb-card>\r\n</sb-layout-dashboard>\r\n";
    /***/
  },

  /***/
  "./src/modules/forms/components/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/forms/components/index.ts ***!
    \***********************************************/

  /*! exports provided: components, NgBootstrapTableComponent, SortIconComponent */

  /***/
  function srcModulesFormsComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ng-bootstrap-table/ng-bootstrap-table.component */
    "./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.ts");
    /* harmony import */


    var _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sort-icon/sort-icon.component */
    "./src/modules/forms/components/sort-icon/sort-icon.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function () {
      return _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortIconComponent", function () {
      return _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"];
    });

    var components = [_ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"], _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"]];
    /***/
  },

  /***/
  "./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesFormsComponentsNgBootstrapTableNgBootstrapTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "thead > tr > th {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Zvcm1zL2NvbXBvbmVudHMvbmctYm9vdHN0cmFwLXRhYmxlL0Q6XFxBQkdcXGFiZ25nL3NyY1xcbW9kdWxlc1xcZm9ybXNcXGNvbXBvbmVudHNcXG5nLWJvb3RzdHJhcC10YWJsZVxcbmctYm9vdHN0cmFwLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvZm9ybXMvY29tcG9uZW50cy9uZy1ib290c3RyYXAtdGFibGUvbmctYm9vdHN0cmFwLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9tb2R1bGVzL2Zvcm1zL2NvbXBvbmVudHMvbmctYm9vdHN0cmFwLXRhYmxlL25nLWJvb3RzdHJhcC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG50aGVhZCA+IHRyID4gdGgge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwidGhlYWQgPiB0ciA+IHRoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: NgBootstrapTableComponent */

  /***/
  function srcModulesFormsComponentsNgBootstrapTableNgBootstrapTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function () {
      return NgBootstrapTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modules_details_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/details/directives */
    "./src/modules/details/directives/index.ts");
    /* harmony import */


    var _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/services/base.service */
    "./src/modules/services/base.service.ts");
    /* harmony import */


    var _modules_details_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/details/services */
    "./src/modules/details/services/index.ts");
    /* harmony import */


    var _app_app_parameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/app.parameter */
    "./src/app/app.parameter.ts");

    var NgBootstrapTableComponent = /*#__PURE__*/function () {
      function NgBootstrapTableComponent(router, activatedRoute, param, coreService, dataService, changeDetectorRef) {
        _classCallCheck(this, NgBootstrapTableComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.param = param;
        this.coreService = coreService;
        this.dataService = dataService;
        this.changeDetectorRef = changeDetectorRef;
        this.pageSize = 4;
        this.titles = ['Kode', 'Uraian'];
        this.columns = ['name', 'area'];
        this.metadata = [];
        this.baseURL = '';
        this.ngOnInit();
      }

      _createClass(NgBootstrapTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var _a; // Intialization


          this.idmenu = this.coreService.GetIdmenu();
          var url = this.router.url; // console.log(url);

          var splitted = url.split("/");

          if (splitted.length === 4) {
            this.id = splitted[splitted.length - 1];
            sessionStorage.setItem("id", this.id);
          } else {
            this.id = (_a = sessionStorage.getItem("id")) !== null && _a !== void 0 ? _a : "";
          }

          var json = sessionStorage.getItem(this.idmenu.toString());

          if (json != null) {
            var md = JSON.parse(json);
            this.metadata = md.metadata; // console.log(md);

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              SubStageFormArray: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
            });
            var fa = this.form.get('SubStageFormArray');
            var arrValids = [];
            var vals = md.values.find(function (o) {
              return o.id === parseInt(_this.id, 0);
            }); // tslint:disable-next-line: prefer-for-of

            for (var i = 0; i < this.metadata.length; i++) {
              var item = this.metadata[i];

              if (!!vals) {
                fa.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](vals[item.name], arrValids));
              } else {
                fa.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", arrValids));
              }
            }
          } // On URL Changed Event


          this.param.receiveFunctionEvent().subscribe(function (p) {
            var _a;

            splitted = p.url.split("/");

            if (splitted.length === 4) {
              _this.id = splitted[splitted.length - 1];
              sessionStorage.setItem("id", _this.id);
            } else {
              _this.id = (_a = sessionStorage.getItem("id")) !== null && _a !== void 0 ? _a : "";
            }

            _this.op = p.op;
            _this.btnStatus = {
              mode: p.op ? p.op : 'view',
              isEditing: p.op === 'add' || p.op === 'edit',
              isNew: p.op === 'add'
            };

            if (!!_this.id) {
              // TODO optimize to only get a row data, without metadata
              _this.coreService.GetMetaData().then(function (md) {
                _this.data = md;
                _this.metadata = md.metadata;
                _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  SubStageFormArray: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
                }, {
                  updateOn: 'change'
                });

                var fa = _this.form.get('SubStageFormArray'); // console.log(fa);


                var arrValids = [];
                var vals = md.values.find(function (o) {
                  return o.id === parseInt(_this.id, 0);
                }); // tslint:disable-next-line: prefer-for-of

                for (var _i = 0; _i < _this.metadata.length; _i++) {
                  var _item = _this.metadata[_i];

                  if (!!vals) {
                    fa.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](vals[_item.name], arrValids));
                  } else {
                    fa.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", arrValids));
                  } // console.log(item.name+'='+vals[item.name]);

                }

                _this.dataService.pageSize = _this.pageSize;
                _this.data$ = _this.dataService.data$;
                _this.total$ = _this.dataService.total$;
                _this.baseURL = _this.coreService.getBaseURL();
              });
            }
          });
        }
      }, {
        key: "onSort",
        value: function onSort(_ref) {
          var column = _ref.column,
              direction = _ref.direction;
          this.sortedColumn = column;
          this.sortedDirection = direction;
          this.dataService.sortColumn = column;
          this.dataService.sortDirection = direction;
          this.changeDetectorRef.detectChanges();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          var array = this.form.get('SubStageFormArray');
          var form = {};
          var vals = this.data.values.find(function (o) {
            return o.id === parseInt(_this2.id, 0);
          });
          var values = this.form.value.SubStageFormArray; // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < this.metadata.length; i++) {
            form[this.metadata[i].name] = values[i];
            vals[this.metadata[i].name] = values[i];
          }

          var json = JSON.stringify(form); // console.log(form);

          this.coreService.GetMetaData().then(function (metadata) {
            // console.log(metadata);
            _this2.data = metadata;
            sessionStorage.setItem(_this2.idmenu.toString(), JSON.stringify(metadata)); // const fa = this.form.get('SubStageFormArray') as FormArray;
            // // console.log(fa);
            // const arrValids : any[] = [];
            // // tslint:disable-next-line: no-shadowed-variable
            // const vals = this.data.values.find(o=>o.id === parseInt(this.id, 0));
            // // tslint:disable-next-line: prefer-for-of
            // for (let i=0; i<this.metadata.length ; i++){
            //     const item = this.metadata[i];
            //     fa.push(new FormControl(vals[item.name], arrValids));
            //     console.log(item.name+'='+vals[item.name]);
            // }
          });
          this.onSave(form);
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          var route = "".concat(this.baseURL, "/forms/").concat(this.idmenu, "/").concat(this.id, "/add/");
          this.router.navigate([route]);
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          var route = "".concat(this.baseURL, "/forms/").concat(this.idmenu, "/").concat(this.id, "/edit/");
          this.router.navigate([route]);
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var route = "".concat(this.baseURL, "/details/").concat(this.idmenu);
          this.router.navigate([route]);
        }
      }, {
        key: "onSave",
        value: function onSave(param) {
          this.coreService.Save(param);
          var route = "".concat(this.baseURL, "/forms/").concat(this.idmenu, "/").concat(this.id, "/");

          if (this.btnStatus.isNew) {
            this.id = '-1'; // newid

            if (false) {}
          } else {} // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          // this.router.onSameUrlNavigation = 'reload';


          this.router.navigate([route]); // this.router.navigate([route]).then(() => {
          //     window.location.reload();
          // });;
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          console.log(this.idmenu);
          var route = "".concat(this.baseURL, "/forms/").concat(this.idmenu, "/").concat(this.id, "/");

          if (this.btnStatus.isNew) {
            route = "".concat(this.baseURL, "/details/").concat(this.idmenu);
          }

          this.router.navigate([route]);
        }
      }, {
        key: "onBack",
        value: function onBack() {
          var route = "".concat(this.baseURL, "/details/").concat(this.idmenu);
          this.router.navigate([route]);
        }
      }, {
        key: "IsValidItem",
        value: function IsValidItem(indexNo) {// console.log(this.form);
          // const fc : FormControl = <FormControl>this.SubStageValues.at(indexNo);
          // if(fc!=null && fc.errors !=null && fc.touched && fc.dirty)
          // {
          //   this.lastError = "no error";
          //   return true;
          //   // return !(fc.errors.required || fc.errors.min || fc.errors.max || fc.errors.minlength || fc.errors.maxlength);
          // }
          // else
          // {
          //   this.lastError = "no error";
          //   return true;
          // }
        }
      }, {
        key: "SubStageValues",
        get: function get() {
          return this.form.get('SubStageFormArray');
        }
      }]);

      return NgBootstrapTableComponent;
    }();

    NgBootstrapTableComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _app_app_parameter__WEBPACK_IMPORTED_MODULE_7__["AppParameter"]
      }, {
        type: _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"]
      }, {
        type: _modules_details_services__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NgBootstrapTableComponent.prototype, "pageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_modules_details_directives__WEBPACK_IMPORTED_MODULE_4__["SBSortableHeaderDirective"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], NgBootstrapTableComponent.prototype, "headers", void 0);
    NgBootstrapTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-ng-bootstrap-table',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ng-bootstrap-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ng-bootstrap-table.component.scss */
      "./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _app_app_parameter__WEBPACK_IMPORTED_MODULE_7__["AppParameter"], _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"], _modules_details_services__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], NgBootstrapTableComponent);
    /***/
  },

  /***/
  "./src/modules/forms/components/sort-icon/sort-icon.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/modules/forms/components/sort-icon/sort-icon.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesFormsComponentsSortIconSortIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sort-icon {\n  height: 0.9rem;\n  width: 0.9rem;\n  margin-left: 0.25rem;\n  margin-top: -0.125rem;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Zvcm1zL2NvbXBvbmVudHMvc29ydC1pY29uL0Q6XFxBQkdcXGFiZ25nL3NyY1xcbW9kdWxlc1xcZm9ybXNcXGNvbXBvbmVudHNcXHNvcnQtaWNvblxcc29ydC1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvZm9ybXMvY29tcG9uZW50cy9zb3J0LWljb24vc29ydC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNESiIsImZpbGUiOiJzcmMvbW9kdWxlcy9mb3Jtcy9jb21wb25lbnRzL3NvcnQtaWNvbi9zb3J0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLnNvcnQtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDAuOXJlbTtcclxuICAgIHdpZHRoOiAwLjlyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0wLjEyNXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIiwiLnNvcnQtaWNvbiB7XG4gIGhlaWdodDogMC45cmVtO1xuICB3aWR0aDogMC45cmVtO1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgbWFyZ2luLXRvcDogLTAuMTI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/forms/components/sort-icon/sort-icon.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/modules/forms/components/sort-icon/sort-icon.component.ts ***!
    \***********************************************************************/

  /*! exports provided: SortIconComponent */

  /***/
  function srcModulesFormsComponentsSortIconSortIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortIconComponent", function () {
      return SortIconComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SortIconComponent = /*#__PURE__*/function () {
      function SortIconComponent() {
        _classCallCheck(this, SortIconComponent);
      }

      _createClass(SortIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SortIconComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SortIconComponent.prototype, "direction", void 0);
    SortIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-sort-icon',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sort-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/sort-icon/sort-icon.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sort-icon.component.scss */
      "./src/modules/forms/components/sort-icon/sort-icon.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SortIconComponent);
    /***/
  },

  /***/
  "./src/modules/forms/containers/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/forms/containers/index.ts ***!
    \***********************************************/

  /*! exports provided: containers, TablesComponent */

  /***/
  function srcModulesFormsContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tables/tables.component */
    "./src/modules/forms/containers/tables/tables.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return _tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"];
    });

    var containers = [_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]];
    /***/
  },

  /***/
  "./src/modules/forms/containers/tables/tables.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/modules/forms/containers/tables/tables.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesFormsContainersTablesTablesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9mb3Jtcy9jb250YWluZXJzL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/forms/containers/tables/tables.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/modules/forms/containers/tables/tables.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TablesComponent */

  /***/
  function srcModulesFormsContainersTablesTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return TablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_app_parameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/app.parameter */
    "./src/app/app.parameter.ts");
    /* harmony import */


    var _modules_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/services/base.service */
    "./src/modules/services/base.service.ts");
    /* harmony import */


    var _modules_details_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/details/services */
    "./src/modules/details/services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TablesComponent = /*#__PURE__*/function () {
      function TablesComponent(router, activatedRoute, param, coreService, dataService) {
        var _this3 = this;

        _classCallCheck(this, TablesComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.param = param;
        this.coreService = coreService;
        this.dataService = dataService;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
        })).subscribe(function (event) {
          var e = event;
          var navId = new _app_app_parameter__WEBPACK_IMPORTED_MODULE_3__["NavIdentification"]();
          navId.url = e.url.toString();
          var pars = navId.url.split("/");
          var temp = pars[pars.length - 1].toString(); // console.log(['add', 'edit', 'view'].includes(temp));

          if (['add', 'edit', 'view'].includes(temp)) {
            navId.op = pars[pars.length - 1];
          } else {
            navId.op = 'view';
          } // console.log(navId);


          _this3.param.sendFunctionEvent(navId);

          if (_this3.coreService.CanGetData()) {
            _this3.coreService.GetMetaData().then(function (metadata) {
              _this3.Title = metadata.title;
              _this3.Description = metadata.description;
            });
          }
        });
      }

      _createClass(TablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TablesComponent;
    }();

    TablesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _app_app_parameter__WEBPACK_IMPORTED_MODULE_3__["AppParameter"]
      }, {
        type: _modules_services_base_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"]
      }, {
        type: _modules_details_services__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }];
    };

    TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'sb-details',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/containers/tables/tables.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tables.component.scss */
      "./src/modules/forms/containers/tables/tables.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_app_parameter__WEBPACK_IMPORTED_MODULE_3__["AppParameter"], _modules_services_base_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"], _modules_details_services__WEBPACK_IMPORTED_MODULE_5__["DataService"]])], TablesComponent);
    /***/
  },

  /***/
  "./src/modules/forms/directives/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/forms/directives/index.ts ***!
    \***********************************************/

  /*! exports provided: directives, SBSortableHeaderDirective */

  /***/
  function srcModulesFormsDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "directives", function () {
      return directives;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sortable.directive */
    "./src/modules/forms/directives/sortable.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function () {
      return _sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"];
    });

    var directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]];
    /***/
  },

  /***/
  "./src/modules/forms/directives/sortable.directive.ts":
  /*!************************************************************!*\
    !*** ./src/modules/forms/directives/sortable.directive.ts ***!
    \************************************************************/

  /*! exports provided: SBSortableHeaderDirective */

  /***/
  function srcModulesFormsDirectivesSortableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function () {
      return SBSortableHeaderDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var _rotate = {
      asc: 'desc',
      desc: '',
      '': 'asc'
    };

    var SBSortableHeaderDirective = /*#__PURE__*/function () {
      function SBSortableHeaderDirective() {
        _classCallCheck(this, SBSortableHeaderDirective);

        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SBSortableHeaderDirective, [{
        key: "rotate",
        value: function rotate() {
          this.direction = _rotate[this.direction];
          this.sort.emit({
            column: this.sbSortable,
            direction: this.direction
          });
        }
      }, {
        key: "isAscending",
        get: function get() {
          return this.direction === 'asc';
        }
      }, {
        key: "isDescending",
        get: function get() {
          return this.direction === 'desc';
        }
      }]);

      return SBSortableHeaderDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SBSortableHeaderDirective.prototype, "sbSortable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SBSortableHeaderDirective.prototype, "direction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SBSortableHeaderDirective.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.asc'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SBSortableHeaderDirective.prototype, "isAscending", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.desc'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SBSortableHeaderDirective.prototype, "isDescending", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SBSortableHeaderDirective.prototype, "rotate", null);
    SBSortableHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'th[sbSortable]'
    })], SBSortableHeaderDirective);
    /***/
  },

  /***/
  "./src/modules/forms/forms-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/modules/forms/forms-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ROUTES1, FormsRoutingModule */

  /***/
  function srcModulesFormsFormsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES1", function () {
      return ROUTES1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function () {
      return FormsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _forms_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forms.module */
    "./src/modules/forms/forms.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/forms/containers/index.ts");

    var FormsRoutingModule_1;
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Routes */

    var ROUTES1 = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
      data: {
        title: 'Form',
        breadcrumbs: [{
          text: 'Dashboard',
          link: '/dashboard'
        }, {
          text: 'Forms',
          active: true
        }]
      }
    }];

    var FormsRoutingModule = FormsRoutingModule_1 = function FormsRoutingModule() {
      _classCallCheck(this, FormsRoutingModule);
    };

    FormsRoutingModule.Data = {
      title: localStorage.getItem('title'),
      breadcrumbs: [{
        text: 'Dashboard',
        link: '/dashboard'
      }, {
        text: 'Form',
        active: true
      }]
    };
    FormsRoutingModule.Route = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
      data: FormsRoutingModule_1.Data,
      children: [{
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
        data: FormsRoutingModule_1.Data
      }, {
        path: ':idmenu',
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
        data: FormsRoutingModule_1.Data,
        children: [{
          path: '',
          component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
          data: FormsRoutingModule_1.Data
        }, {
          path: ':id',
          component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
          data: FormsRoutingModule_1.Data,
          children: [{
            path: '',
            component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
            data: FormsRoutingModule_1.Data
          }, {
            path: ':op',
            component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
            data: FormsRoutingModule_1.Data
          }]
        }]
      }]
    }];
    FormsRoutingModule = FormsRoutingModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_forms_module__WEBPACK_IMPORTED_MODULE_3__["FormModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(FormsRoutingModule_1.Route)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FormsRoutingModule);
    /***/
  },

  /***/
  "./src/modules/forms/forms.module.ts":
  /*!*******************************************!*\
    !*** ./src/modules/forms/forms.module.ts ***!
    \*******************************************/

  /*! exports provided: FormModule */

  /***/
  function srcModulesFormsFormsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormModule", function () {
      return FormModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @common/app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/navigation/navigation.module */
    "./src/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components */
    "./src/modules/forms/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/forms/containers/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./directives */
    "./src/modules/forms/directives/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/forms/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services */
    "./src/modules/forms/services/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Directives */

    /* Guards */

    /* Services */


    var FormModule = function FormModule() {
      _classCallCheck(this, FormModule);
    };

    FormModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_11__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_10__["guards"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_9__["directives"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_9__["directives"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]))
    })], FormModule);
    /***/
  },

  /***/
  "./src/modules/forms/guards/index.ts":
  /*!*******************************************!*\
    !*** ./src/modules/forms/guards/index.ts ***!
    \*******************************************/

  /*! exports provided: guards, TablesGuard */

  /***/
  function srcModulesFormsGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tables_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tables.guard */
    "./src/modules/forms/guards/tables.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TablesGuard", function () {
      return _tables_guard__WEBPACK_IMPORTED_MODULE_1__["TablesGuard"];
    });

    var guards = [_tables_guard__WEBPACK_IMPORTED_MODULE_1__["TablesGuard"]];
    /***/
  },

  /***/
  "./src/modules/forms/guards/tables.guard.ts":
  /*!**************************************************!*\
    !*** ./src/modules/forms/guards/tables.guard.ts ***!
    \**************************************************/

  /*! exports provided: TablesGuard */

  /***/
  function srcModulesFormsGuardsTablesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesGuard", function () {
      return TablesGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TablesGuard = /*#__PURE__*/function () {
      function TablesGuard() {
        _classCallCheck(this, TablesGuard);
      }

      _createClass(TablesGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return TablesGuard;
    }();

    TablesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TablesGuard);
    /***/
  },

  /***/
  "./src/modules/forms/services/data.service.ts":
  /*!****************************************************!*\
    !*** ./src/modules/forms/services/data.service.ts ***!
    \****************************************************/

  /*! exports provided: DataService */

  /***/
  function srcModulesFormsServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/services/base.service */
    "./src/modules/services/base.service.ts");
    /* harmony import */


    var _app_app_parameter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/app.parameter */
    "./src/app/app.parameter.ts");

    function compare(v1, v2) {
      return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
    }

    function sort(data, column, direction) {
      if (direction === '') {
        return data;
      } else {
        return _toConsumableArray(data).sort(function (a, b) {
          var res = compare(a[column], b[column]);
          return direction === 'asc' ? res : -res;
        });
      }
    }

    function matches(country, term, pipe) {
      return country.name.toLowerCase().includes(term.toLowerCase()) || pipe.transform(country.area).includes(term) || pipe.transform(country.population).includes(term);
    }

    var DataService = /*#__PURE__*/function () {
      function DataService(param, coreService, pipe) {
        var _this4 = this;

        _classCallCheck(this, DataService);

        this.param = param;
        this.coreService = coreService;
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this._state = {
          page: 1,
          pageSize: 4,
          searchTerm: '',
          sortColumn: '',
          sortDirection: ''
        };
        var id = '';
        var url = '';
        this.param.receiveFunctionEvent().subscribe(function (p) {
          if (p.idmenu !== '') {
            _this4.idmenu = p.idmenu;

            if (_this4.coreService.CanGetData()) {
              _this4.coreService.GetMetaData().then(function (metadata) {
                _this4._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                  return _this4._loading$.next(true);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
                  return _this4._search(metadata);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                  return _this4._loading$.next(false);
                })).subscribe(function (result) {
                  _this4._data$.next(result.data);

                  _this4._total$.next(result.total);
                });

                _this4._search$.next();
              });
            }
          }
        });
      }

      _createClass(DataService, [{
        key: "_set",
        value: function _set(patch) {
          Object.assign(this._state, patch);

          this._search$.next();
        }
      }, {
        key: "_search",
        value: function _search(metadata) {
          var _this5 = this;

          var _this$_state = this._state,
              sortColumn = _this$_state.sortColumn,
              sortDirection = _this$_state.sortDirection,
              pageSize = _this$_state.pageSize,
              page = _this$_state.page,
              searchTerm = _this$_state.searchTerm; // 1. sort

          var data = sort(metadata.values, sortColumn, sortDirection); // // 2. filter

          data = data.filter(function (d) {
            return matches(d, searchTerm, _this5.pipe);
          });
          var total = data.length; // 3. paginate

          data = data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
            data: data,
            total: total
          });
        }
      }, {
        key: "data$",
        get: function get() {
          return this._data$.asObservable();
        }
      }, {
        key: "total$",
        get: function get() {
          return this._total$.asObservable();
        }
      }, {
        key: "loading$",
        get: function get() {
          return this._loading$.asObservable();
        }
      }, {
        key: "page",
        get: function get() {
          return this._state.page;
        },
        set: function set(page) {
          this._set({
            page: page
          });
        }
      }, {
        key: "pageSize",
        get: function get() {
          return this._state.pageSize;
        },
        set: function set(pageSize) {
          this._set({
            pageSize: pageSize
          });
        }
      }, {
        key: "searchTerm",
        get: function get() {
          return this._state.searchTerm;
        },
        set: function set(searchTerm) {
          this._set({
            searchTerm: searchTerm
          });
        }
      }, {
        key: "sortColumn",
        set: function set(sortColumn) {
          this._set({
            sortColumn: sortColumn
          });
        }
      }, {
        key: "sortDirection",
        set: function set(sortDirection) {
          this._set({
            sortDirection: sortDirection
          });
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _app_app_parameter__WEBPACK_IMPORTED_MODULE_6__["AppParameter"]
      }, {
        type: _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]
      }];
    };

    DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_app_parameter__WEBPACK_IMPORTED_MODULE_6__["AppParameter"], _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]])], DataService);
    /***/
  },

  /***/
  "./src/modules/forms/services/index.ts":
  /*!*********************************************!*\
    !*** ./src/modules/forms/services/index.ts ***!
    \*********************************************/

  /*! exports provided: services, DetailsService, DataService */

  /***/
  function srcModulesFormsServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./data.service */
    "./src/modules/forms/services/data.service.ts");
    /* harmony import */


    var _tables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tables.service */
    "./src/modules/forms/services/tables.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DetailsService", function () {
      return _tables_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"];
    });

    var services = [_tables_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]];
    /***/
  },

  /***/
  "./src/modules/forms/services/tables.service.ts":
  /*!******************************************************!*\
    !*** ./src/modules/forms/services/tables.service.ts ***!
    \******************************************************/

  /*! exports provided: DetailsService */

  /***/
  function srcModulesFormsServicesTablesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsService", function () {
      return DetailsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DetailsService = /*#__PURE__*/function () {
      function DetailsService() {
        _classCallCheck(this, DetailsService);
      }

      _createClass(DetailsService, [{
        key: "getTables$",
        value: function getTables$() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }
      }]);

      return DetailsService;
    }();

    DetailsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DetailsService);
    /***/
  }
}]);
//# sourceMappingURL=modules-forms-forms-routing-module-es5.js.map