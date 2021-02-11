function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-details-details-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/details/components/ng-bootstrap-table/ng-bootstrap-table.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/details/components/ng-bootstrap-table/ng-bootstrap-table.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDetailsComponentsNgBootstrapTableNgBootstrapTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form>\r\n    <div class=\"container text-right p-2\">\r\n        <button type=\"button\" *ngIf=\"btnStatus.mode=='view'\" class=\"btn btn-primary custom r-5\" (click)=\"onAdd()\" [disabled]=\"false\" [hidden]=\"false\">Add</button>&nbsp;\r\n    </div>\r\n    <div class=\"form-group form-inline\">\r\n        Full text search: \r\n        <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" \r\n            [(ngModel)]=\"dataService.searchTerm\" /> &nbsp;\r\n        <span class=\"ml-3\" *ngIf=\"dataService.loading$ | async\">Loading...</span>\r\n    </div>\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th style=\"width: 5%;\" scope=\"col\">#</th>\r\n                <th style=\"width: 30%;\" scope=\"col\" sbSortable=\"{{columns[0]}}\" (sort)=\"onSort($event)\"><span>{{titles[0]}}</span><sb-sort-icon *ngIf='sortedColumn === columns[0]' [direction]=\"sortedDirection\"></sb-sort-icon></th>\r\n                <th style=\"width: max-content;\" scope=\"col\" sbSortable=\"{{columns[1]}}\" (sort)=\"onSort($event)\"><span>{{titles[1]}}</span><sb-sort-icon *ngIf='sortedColumn === columns[1]' [direction]=\"sortedDirection\"></sb-sort-icon></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of data$ | async\">\r\n                <th scope=\"row\"><a href=\"{{item.url}}\">{{ item.id }}</a></th>\r\n                <td><ngb-highlight [result]=\"item.name\" [term]=\"dataService.searchTerm\"></ngb-highlight></td>\r\n                <td><ngb-highlight [result]=\"item.area | number\" [term]=\"dataService.searchTerm\"></ngb-highlight></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class=\"d-flex justify-content-between p-2\">\r\n        <ngb-pagination [collectionSize]=\"total$ | async\" [(page)]=\"dataService.page\" [pageSize]=\"dataService.pageSize\">\r\n        </ngb-pagination>\r\n        <select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\" [(ngModel)]=\"dataService.pageSize\">\r\n            <option [ngValue]=\"2\">2 rows</option>\r\n            <option [ngValue]=\"4\">4 rows</option>\r\n            <option [ngValue]=\"6\">6 rows</option>\r\n        </select>\r\n    </div>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/details/components/sort-icon/sort-icon.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/details/components/sort-icon/sort-icon.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDetailsComponentsSortIconSortIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf='direction === \"asc\"'><fa-icon class=\"sort-icon\" [icon]='[\"fas\", \"chevron-up\"]'></fa-icon></ng-container><ng-container *ngIf='direction === \"desc\"'><fa-icon class=\"sort-icon\" [icon]='[\"fas\", \"chevron-down\"]'></fa-icon></ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/details/containers/tables/tables.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/details/containers/tables/tables.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDetailsContainersTablesTablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\r\n    <sb-dashboard-head title=\"{{Title}}\" [hideBreadcrumbs]=\"false\">\r\n    </sb-dashboard-head>\r\n    <sb-card>\r\n        <div class=\"card-body\">{{Description}}</div>\r\n    </sb-card>\r\n    <sb-card>\r\n        <div class=\"card-header\">\r\n            <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>\r\n            {{Title}}\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <sb-ng-bootstrap-table [pageSize]=\"6\">                \r\n            </sb-ng-bootstrap-table>\r\n        </div>\r\n    </sb-card>\r\n</sb-layout-dashboard>\r\n";
    /***/
  },

  /***/
  "./src/modules/details/components/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/details/components/index.ts ***!
    \*************************************************/

  /*! exports provided: components, NgBootstrapTableComponent, SortIconComponent */

  /***/
  function srcModulesDetailsComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/modules/details/components/ng-bootstrap-table/ng-bootstrap-table.component.ts");
    /* harmony import */


    var _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sort-icon/sort-icon.component */
    "./src/modules/details/components/sort-icon/sort-icon.component.ts");
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
  "./src/modules/details/components/ng-bootstrap-table/ng-bootstrap-table.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/details/components/ng-bootstrap-table/ng-bootstrap-table.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDetailsComponentsNgBootstrapTableNgBootstrapTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "thead > tr > th {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2RldGFpbHMvY29tcG9uZW50cy9uZy1ib290c3RyYXAtdGFibGUvRDpcXEFCR1xcYWJnbmcvc3JjXFxtb2R1bGVzXFxkZXRhaWxzXFxjb21wb25lbnRzXFxuZy1ib290c3RyYXAtdGFibGVcXG5nLWJvb3RzdHJhcC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9tb2R1bGVzL2RldGFpbHMvY29tcG9uZW50cy9uZy1ib290c3RyYXAtdGFibGUvbmctYm9vdHN0cmFwLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9tb2R1bGVzL2RldGFpbHMvY29tcG9uZW50cy9uZy1ib290c3RyYXAtdGFibGUvbmctYm9vdHN0cmFwLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbnRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCJ0aGVhZCA+IHRyID4gdGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/modules/details/components/ng-bootstrap-table/ng-bootstrap-table.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/details/components/ng-bootstrap-table/ng-bootstrap-table.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: NgBootstrapTableComponent */

  /***/
  function srcModulesDetailsComponentsNgBootstrapTableNgBootstrapTableComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modules_details_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/details/directives */
    "./src/modules/details/directives/index.ts");
    /* harmony import */


    var _modules_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/services/base.service */
    "./src/modules/services/base.service.ts");
    /* harmony import */


    var _modules_details_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/details/services */
    "./src/modules/details/services/index.ts");
    /* harmony import */


    var _app_app_parameter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/app.parameter */
    "./src/app/app.parameter.ts");

    var NgBootstrapTableComponent = /*#__PURE__*/function () {
      function NgBootstrapTableComponent(router, param, coreService, dataService, changeDetectorRef) {
        _classCallCheck(this, NgBootstrapTableComponent);

        this.router = router;
        this.param = param;
        this.coreService = coreService;
        this.dataService = dataService;
        this.changeDetectorRef = changeDetectorRef;
        this.pageSize = 4;
        this.titles = ['title1', 'title2'];
        this.columns = ['col1', 'col2'];
        this.baseURL = '';
        this.ngOnInit();
      }

      _createClass(NgBootstrapTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // console.log(this.id);
          this.idmenu = this.coreService.GetIdmenu();
          this.param.receiveFunctionEvent().subscribe(function (p) {
            _this.op = p.op;
            _this.btnStatus = {
              mode: p.op ? p.op : 'view',
              isEditing: p.op === 'add' || p.op === 'edit',
              isNew: p.op === 'add'
            };

            if (_this.coreService.CanGetData()) {
              _this.coreService.GetMetaData().then(function (metadata) {
                sessionStorage.setItem(_this.idmenu.toString(), JSON.stringify(metadata));
                var cols = metadata.columns;
                _this.metadata = metadata.metadata;
                var j = 0; // tslint:disable-next-line: prefer-for-of

                for (var i = 0; i < cols.length; i++) {
                  _this.titles[j] = _this.metadata[cols[i]].label;
                  _this.columns[j] = _this.metadata[cols[i]].name;
                  j++;
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
        key: "onAdd",
        value: function onAdd() {
          var route = "".concat(this.baseURL, "/forms/").concat(this.idmenu, "/add/");
          this.router.navigate([route]);
        }
      }]);

      return NgBootstrapTableComponent;
    }();

    NgBootstrapTableComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _app_app_parameter__WEBPACK_IMPORTED_MODULE_6__["AppParameter"]
      }, {
        type: _modules_services_base_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"]
      }, {
        type: _modules_details_services__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NgBootstrapTableComponent.prototype, "pageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_modules_details_directives__WEBPACK_IMPORTED_MODULE_3__["SBSortableHeaderDirective"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], NgBootstrapTableComponent.prototype, "headers", void 0);
    NgBootstrapTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-ng-bootstrap-table',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ng-bootstrap-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/details/components/ng-bootstrap-table/ng-bootstrap-table.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ng-bootstrap-table.component.scss */
      "./src/modules/details/components/ng-bootstrap-table/ng-bootstrap-table.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_app_parameter__WEBPACK_IMPORTED_MODULE_6__["AppParameter"], _modules_services_base_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"], _modules_details_services__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], NgBootstrapTableComponent);
    /***/
  },

  /***/
  "./src/modules/details/components/sort-icon/sort-icon.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/modules/details/components/sort-icon/sort-icon.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDetailsComponentsSortIconSortIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sort-icon {\n  height: 0.9rem;\n  width: 0.9rem;\n  margin-left: 0.25rem;\n  margin-top: -0.125rem;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2RldGFpbHMvY29tcG9uZW50cy9zb3J0LWljb24vRDpcXEFCR1xcYWJnbmcvc3JjXFxtb2R1bGVzXFxkZXRhaWxzXFxjb21wb25lbnRzXFxzb3J0LWljb25cXHNvcnQtaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9tb2R1bGVzL2RldGFpbHMvY29tcG9uZW50cy9zb3J0LWljb24vc29ydC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNESiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kZXRhaWxzL2NvbXBvbmVudHMvc29ydC1pY29uL3NvcnQtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uc29ydC1pY29uIHtcclxuICAgIGhlaWdodDogMC45cmVtO1xyXG4gICAgd2lkdGg6IDAuOXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTAuMTI1cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4iLCIuc29ydC1pY29uIHtcbiAgaGVpZ2h0OiAwLjlyZW07XG4gIHdpZHRoOiAwLjlyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBtYXJnaW4tdG9wOiAtMC4xMjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/modules/details/components/sort-icon/sort-icon.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/modules/details/components/sort-icon/sort-icon.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SortIconComponent */

  /***/
  function srcModulesDetailsComponentsSortIconSortIconComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/details/components/sort-icon/sort-icon.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sort-icon.component.scss */
      "./src/modules/details/components/sort-icon/sort-icon.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SortIconComponent);
    /***/
  },

  /***/
  "./src/modules/details/containers/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/details/containers/index.ts ***!
    \*************************************************/

  /*! exports provided: containers, TablesComponent */

  /***/
  function srcModulesDetailsContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/modules/details/containers/tables/tables.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return _tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"];
    });

    var containers = [_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]];
    /***/
  },

  /***/
  "./src/modules/details/containers/tables/tables.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/modules/details/containers/tables/tables.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDetailsContainersTablesTablesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kZXRhaWxzL2NvbnRhaW5lcnMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/details/containers/tables/tables.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/details/containers/tables/tables.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TablesComponent */

  /***/
  function srcModulesDetailsContainersTablesTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _modules_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/services/base.service */
    "./src/modules/services/base.service.ts");
    /* harmony import */


    var _app_app_parameter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/app.parameter */
    "./src/app/app.parameter.ts");
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
        var _this2 = this;

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
          var navId = new _app_app_parameter__WEBPACK_IMPORTED_MODULE_4__["NavIdentification"]();
          navId.url = e.url.toString();

          _this2.param.sendFunctionEvent(navId);

          if (_this2.coreService.CanGetData()) {
            _this2.coreService.GetMetaData().then(function (metadata) {
              _this2.Title = metadata.title;
              _this2.Description = metadata.description;
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
        type: _app_app_parameter__WEBPACK_IMPORTED_MODULE_4__["AppParameter"]
      }, {
        type: _modules_services_base_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"]
      }, {
        type: _modules_details_services__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }];
    };

    TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'sb-details',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/details/containers/tables/tables.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tables.component.scss */
      "./src/modules/details/containers/tables/tables.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_app_parameter__WEBPACK_IMPORTED_MODULE_4__["AppParameter"], _modules_services_base_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"], _modules_details_services__WEBPACK_IMPORTED_MODULE_5__["DataService"]])], TablesComponent);
    /***/
  },

  /***/
  "./src/modules/details/details-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/modules/details/details-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DetailsRoutingModule */

  /***/
  function srcModulesDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsRoutingModule", function () {
      return DetailsRoutingModule;
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


    var _details_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details.module */
    "./src/modules/details/details.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/details/containers/index.ts");
    /* harmony import */


    var _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/services/base.service */
    "./src/modules/services/base.service.ts");

    var DetailsRoutingModule_1;
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    var DetailsRoutingModule = DetailsRoutingModule_1 = function DetailsRoutingModule(coreService) {
      _classCallCheck(this, DetailsRoutingModule);
    };

    DetailsRoutingModule.ctorParameters = function () {
      return [{
        type: _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"]
      }];
    };

    DetailsRoutingModule.Data = {
      title: localStorage.getItem('title'),
      breadcrumbs: [{
        text: 'Dashboard',
        link: '/dashboard'
      }, {
        text: 'Details',
        active: true
      }]
    };
    DetailsRoutingModule.Route = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
      data: DetailsRoutingModule_1.Data,
      children: [{
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
        data: DetailsRoutingModule_1.Data
      }, {
        path: ':id',
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
        data: DetailsRoutingModule_1.Data,
        children: [{
          path: '',
          component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
          data: DetailsRoutingModule_1.Data
        }, {
          path: ':op',
          component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
          data: DetailsRoutingModule_1.Data
        }]
      }]
    }];
    DetailsRoutingModule = DetailsRoutingModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_details_module__WEBPACK_IMPORTED_MODULE_3__["DetailsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(DetailsRoutingModule_1.Route)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"]])], DetailsRoutingModule);
    /***/
  },

  /***/
  "./src/modules/details/details.module.ts":
  /*!***********************************************!*\
    !*** ./src/modules/details/details.module.ts ***!
    \***********************************************/

  /*! exports provided: DetailsModule */

  /***/
  function srcModulesDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsModule", function () {
      return DetailsModule;
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
    "./src/modules/details/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/details/containers/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./directives */
    "./src/modules/details/directives/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/details/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services */
    "./src/modules/details/services/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Directives */

    /* Guards */

    /* Services */


    var DetailsModule = function DetailsModule() {
      _classCallCheck(this, DetailsModule);
    };

    DetailsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_11__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_10__["guards"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_9__["directives"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_9__["directives"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]))
    })], DetailsModule);
    /***/
  },

  /***/
  "./src/modules/details/guards/index.ts":
  /*!*********************************************!*\
    !*** ./src/modules/details/guards/index.ts ***!
    \*********************************************/

  /*! exports provided: guards, TablesGuard */

  /***/
  function srcModulesDetailsGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/modules/details/guards/tables.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TablesGuard", function () {
      return _tables_guard__WEBPACK_IMPORTED_MODULE_1__["TablesGuard"];
    });

    var guards = [_tables_guard__WEBPACK_IMPORTED_MODULE_1__["TablesGuard"]];
    /***/
  },

  /***/
  "./src/modules/details/guards/tables.guard.ts":
  /*!****************************************************!*\
    !*** ./src/modules/details/guards/tables.guard.ts ***!
    \****************************************************/

  /*! exports provided: TablesGuard */

  /***/
  function srcModulesDetailsGuardsTablesGuardTs(module, __webpack_exports__, __webpack_require__) {
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
  }
}]);
//# sourceMappingURL=modules-details-details-routing-module-es5.js.map