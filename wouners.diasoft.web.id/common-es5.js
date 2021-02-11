function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/modules/details/directives/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/details/directives/index.ts ***!
    \*************************************************/

  /*! exports provided: directives, SBSortableHeaderDirective */

  /***/
  function srcModulesDetailsDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/modules/details/directives/sortable.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function () {
      return _sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"];
    });

    var directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]];
    /***/
  },

  /***/
  "./src/modules/details/directives/sortable.directive.ts":
  /*!**************************************************************!*\
    !*** ./src/modules/details/directives/sortable.directive.ts ***!
    \**************************************************************/

  /*! exports provided: SBSortableHeaderDirective */

  /***/
  function srcModulesDetailsDirectivesSortableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/modules/details/services/data.service.ts":
  /*!******************************************************!*\
    !*** ./src/modules/details/services/data.service.ts ***!
    \******************************************************/

  /*! exports provided: DataService */

  /***/
  function srcModulesDetailsServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/app.parameter.ts"); // import { Country } from '@modules/details/models';


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
        var _this = this;

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
          if (p.kdmenu !== '') {
            _this.kdmenu = p.kdmenu;

            if (_this.coreService.CanGetData()) {
              _this.coreService.GetMetaData().then(function (metadata) {
                _this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                  return _this._loading$.next(true);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
                  return _this._search(metadata);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                  return _this._loading$.next(false);
                })).subscribe(function (result) {
                  _this._data$.next(result.data);

                  _this._total$.next(result.total);
                });

                _this._search$.next();
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
          var _this2 = this;

          var _this$_state = this._state,
              sortColumn = _this$_state.sortColumn,
              sortDirection = _this$_state.sortDirection,
              pageSize = _this$_state.pageSize,
              page = _this$_state.page,
              searchTerm = _this$_state.searchTerm; // 1. sort

          var data = sort(metadata.values, sortColumn, sortDirection); // // 2. filter

          data = data.filter(function (country) {
            return matches(country, searchTerm, _this2.pipe);
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
  "./src/modules/details/services/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/details/services/index.ts ***!
    \***********************************************/

  /*! exports provided: services, DetailsService, DataService */

  /***/
  function srcModulesDetailsServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/modules/details/services/data.service.ts");
    /* harmony import */


    var _tables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tables.service */
    "./src/modules/details/services/tables.service.ts");
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
  "./src/modules/details/services/tables.service.ts":
  /*!********************************************************!*\
    !*** ./src/modules/details/services/tables.service.ts ***!
    \********************************************************/

  /*! exports provided: DetailsService */

  /***/
  function srcModulesDetailsServicesTablesServiceTs(module, __webpack_exports__, __webpack_require__) {
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
//# sourceMappingURL=common-es5.js.map