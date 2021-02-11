(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-forms-forms-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  *ngIf='(metadata.length >0) || (1==1)'>\r\n<form (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\" >\r\n\r\n    <div class=\"container text-right p-2\">\r\n        <button type=\"button\" *ngIf=\"btnStatus.mode=='view'\" class=\"btn btn-primary custom r-5\" (click)=\"onEdit()\" [disabled]=\"false\" [hidden]=\"false\">Edit</button>&nbsp;\r\n        <button type=\"button\" *ngIf=\"btnStatus.mode=='view'\" class=\"btn btn-success custom r-5\" (click)=\"onDelete()\" [disabled]=\"false\" [hidden]=\"false\">Delete</button>&nbsp;\r\n        <button type=\"submit\" *ngIf=\"btnStatus.isEditing\" (click)=\"onSubmit(form)\" class=\"btn btn-success custom r-5\" [disabled]=\"false\">&nbsp;\r\n            <span *ngIf=\"this.loadbtnShow\" id=\"spinbutton\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>  \r\n            Save\r\n        </button>&nbsp; \r\n        <button type=\"button\" id=\"cancel\" *ngIf=\"btnStatus.isEditing\" [disabled]=\"false\" (click)=\"onCancel()\" class=\"btn btn-mdprimary custom r-5\">Cancel</button>&nbsp;\r\n        <button type=\"button\" *ngIf=\"btnStatus.mode=='view'\" class=\"btn btn-primary custom r-5\" (click)=\"onBack()\" [disabled]=\"false\" [hidden]=\"false\">Back</button>&nbsp;\r\n    </div>\r\n    <div class=\"p-2\"> \r\n        <div formArrayName=\"SubStageFormArray\">\r\n          <div class=\"basic-stage\">\r\n            <div *ngFor = 'let item of metadata; let idx = index'>\r\n              <div *ngIf='item.visibleRow'>\r\n                <div class=\"form-group\" *ngIf='item.name==\"id\"; else not_id' >\r\n                    <label>{{item.label}}</label>\r\n                    <input class=\"form-control\" name=\"{{item.name}}\" id=\"ctrl{{idx}}\" type=\"text\" [formControlName]=\"idx\" placeholder=\"{{item.name}}\" readonly>\r\n                </div>\r\n                <ng-template #not_id>\r\n                <div class=\"form-group\" *ngIf='item.ctype==\"text\"'>\r\n                    <label>{{item.label}}</label>\r\n                    <input class=\"form-control\" name=\"{{item.name}}\" id=\"ctrl{{idx}}\" type=\"text\" [formControlName]=\"idx\" placeholder=\"{{item.name}}\">\r\n                </div>\r\n                <div class=\"form-group\" *ngIf='item.ctype==\"area\"'>\r\n                    <label>{{item.label}}</label>\r\n                    <textarea class=\"form-control\" name=\"{{item.name}}\" id=\"ctrl{{idx}}\" cols=\"30\" rows=\"3\" placeholder=\"{{item.name}}\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\" *ngIf='item.ctype==\"nohp\"'>\r\n                    <label>No HP</label>\r\n                    <div class=\"form-group form-inline\">            \r\n                        <input type=\"text\" id=\"np\" class=\"form-control col-3\" value=\"+62\" readonly>\r\n                        <input type=\"Number\" class=\"form-control col-9\" placeholder=\"{{item.name}}\">\r\n                    </div>\r\n                </div>\r\n                </ng-template>\r\n                <span *ngIf=\"!IsValidItem(idx)\" class=\"inputError\">{{lastError}}</span>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between p-2\">\r\n    </div>\r\n</form>    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/sort-icon/sort-icon.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/sort-icon/sort-icon.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf='direction === \"asc\"'><fa-icon class=\"sort-icon\" [icon]='[\"fas\", \"chevron-up\"]'></fa-icon></ng-container><ng-container *ngIf='direction === \"desc\"'><fa-icon class=\"sort-icon\" [icon]='[\"fas\", \"chevron-down\"]'></fa-icon></ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/containers/tables/tables.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/containers/tables/tables.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\r\n    <sb-dashboard-head title=\"{{Title}}\" [hideBreadcrumbs]=\"false\">\r\n    </sb-dashboard-head>\r\n    <sb-card>\r\n        <div class=\"card-body\">{{Description}}</div>\r\n    </sb-card>\r\n    <sb-card>\r\n        <div class=\"card-header\">\r\n            <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>\r\n            {{Title}}\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <sb-ng-bootstrap-table [pageSize]=\"6\">                \r\n            </sb-ng-bootstrap-table>\r\n        </div>\r\n    </sb-card>\r\n</sb-layout-dashboard>\r\n");

/***/ }),

/***/ "./src/modules/forms/components/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/forms/components/index.ts ***!
  \***********************************************/
/*! exports provided: components, NgBootstrapTableComponent, SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-bootstrap-table/ng-bootstrap-table.component */ "./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.ts");
/* harmony import */ var _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-icon/sort-icon.component */ "./src/modules/forms/components/sort-icon/sort-icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function() { return _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"]; });




const components = [_ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"], _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"]];




/***/ }),

/***/ "./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead > tr > th {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Zvcm1zL2NvbXBvbmVudHMvbmctYm9vdHN0cmFwLXRhYmxlL0Q6XFxBQkdcXGFiZ25nL3NyY1xcbW9kdWxlc1xcZm9ybXNcXGNvbXBvbmVudHNcXG5nLWJvb3RzdHJhcC10YWJsZVxcbmctYm9vdHN0cmFwLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvZm9ybXMvY29tcG9uZW50cy9uZy1ib290c3RyYXAtdGFibGUvbmctYm9vdHN0cmFwLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9tb2R1bGVzL2Zvcm1zL2NvbXBvbmVudHMvbmctYm9vdHN0cmFwLXRhYmxlL25nLWJvb3RzdHJhcC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG50aGVhZCA+IHRyID4gdGgge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwidGhlYWQgPiB0ciA+IHRoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NgBootstrapTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function() { return NgBootstrapTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_details_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/details/directives */ "./src/modules/details/directives/index.ts");
/* harmony import */ var _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/services/base.service */ "./src/modules/services/base.service.ts");
/* harmony import */ var _modules_details_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/details/services */ "./src/modules/details/services/index.ts");
/* harmony import */ var _app_app_parameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/app.parameter */ "./src/app/app.parameter.ts");








let NgBootstrapTableComponent = class NgBootstrapTableComponent {
    constructor(router, activatedRoute, param, coreService, dataService, changeDetectorRef) {
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
    ngOnInit() {
        var _a;
        // Intialization
        this.idmenu = this.coreService.GetIdmenu();
        const url = this.router.url;
        // console.log(url);
        let splitted = url.split("/");
        if (splitted.length === 4) {
            this.id = splitted[splitted.length - 1];
            sessionStorage.setItem("id", this.id);
        }
        else {
            this.id = (_a = sessionStorage.getItem("id")) !== null && _a !== void 0 ? _a : "";
        }
        const json = sessionStorage.getItem(this.idmenu.toString());
        if (json != null) {
            const md = JSON.parse(json);
            this.metadata = md.metadata;
            // console.log(md);
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                SubStageFormArray: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
            });
            const fa = this.form.get('SubStageFormArray');
            const arrValids = [];
            const vals = md.values.find(o => o.id === parseInt(this.id, 0));
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < this.metadata.length; i++) {
                const item = this.metadata[i];
                if (!!vals) {
                    fa.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](vals[item.name], arrValids));
                }
                else {
                    fa.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", arrValids));
                }
            }
        }
        // On URL Changed Event
        this.param.receiveFunctionEvent().subscribe((p) => {
            var _a;
            splitted = p.url.split("/");
            if (splitted.length === 4) {
                this.id = splitted[splitted.length - 1];
                sessionStorage.setItem("id", this.id);
            }
            else {
                this.id = (_a = sessionStorage.getItem("id")) !== null && _a !== void 0 ? _a : "";
            }
            this.op = p.op;
            this.btnStatus = {
                mode: p.op ? p.op : 'view',
                isEditing: (p.op === 'add') || (p.op === 'edit'),
                isNew: (p.op === 'add')
            };
            if (!!this.id) {
                // TODO optimize to only get a row data, without metadata
                this.coreService.GetMetaData().then(md => {
                    this.data = md;
                    this.metadata = md.metadata;
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        SubStageFormArray: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
                    }, { updateOn: 'change' });
                    const fa = this.form.get('SubStageFormArray');
                    // console.log(fa);
                    const arrValids = [];
                    const vals = md.values.find(o => o.id === parseInt(this.id, 0));
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < this.metadata.length; i++) {
                        const item = this.metadata[i];
                        if (!!vals) {
                            fa.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](vals[item.name], arrValids));
                        }
                        else {
                            fa.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", arrValids));
                        }
                        // console.log(item.name+'='+vals[item.name]);
                    }
                    this.dataService.pageSize = this.pageSize;
                    this.data$ = this.dataService.data$;
                    this.total$ = this.dataService.total$;
                    this.baseURL = this.coreService.getBaseURL();
                });
            }
        });
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.dataService.sortColumn = column;
        this.dataService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }
    onSubmit() {
        const array = this.form.get('SubStageFormArray');
        const form = {};
        const vals = this.data.values.find(o => o.id === parseInt(this.id, 0));
        const values = this.form.value.SubStageFormArray;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.metadata.length; i++) {
            form[this.metadata[i].name] = values[i];
            vals[this.metadata[i].name] = values[i];
        }
        const json = JSON.stringify(form);
        // console.log(form);
        this.coreService.GetMetaData().then(metadata => {
            // console.log(metadata);
            this.data = metadata;
            sessionStorage.setItem(this.idmenu.toString(), JSON.stringify(metadata));
            // const fa = this.form.get('SubStageFormArray') as FormArray;
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
    onAdd() {
        const route = `${this.baseURL}/forms/${this.idmenu}/${this.id}/add/`;
        this.router.navigate([route]);
    }
    onEdit() {
        const route = `${this.baseURL}/forms/${this.idmenu}/${this.id}/edit/`;
        this.router.navigate([route]);
    }
    onDelete() {
        const route = `${this.baseURL}/details/${this.idmenu}`;
        this.router.navigate([route]);
    }
    onSave(param) {
        this.coreService.Save(param);
        let route = `${this.baseURL}/forms/${this.idmenu}/${this.id}/`;
        if (this.btnStatus.isNew) {
            this.id = '-1'; // newid
            if (false) {}
        }
        else {
        }
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([route]);
        // this.router.navigate([route]).then(() => {
        //     window.location.reload();
        // });;
    }
    onCancel() {
        console.log(this.idmenu);
        let route = `${this.baseURL}/forms/${this.idmenu}/${this.id}/`;
        if (this.btnStatus.isNew) {
            route = `${this.baseURL}/details/${this.idmenu}`;
        }
        this.router.navigate([route]);
    }
    onBack() {
        const route = `${this.baseURL}/details/${this.idmenu}`;
        this.router.navigate([route]);
    }
    get SubStageValues() {
        return this.form.get('SubStageFormArray');
    }
    IsValidItem(indexNo) {
        // console.log(this.form);
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
};
NgBootstrapTableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _app_app_parameter__WEBPACK_IMPORTED_MODULE_7__["AppParameter"] },
    { type: _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"] },
    { type: _modules_details_services__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgBootstrapTableComponent.prototype, "pageSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_modules_details_directives__WEBPACK_IMPORTED_MODULE_4__["SBSortableHeaderDirective"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], NgBootstrapTableComponent.prototype, "headers", void 0);
NgBootstrapTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-ng-bootstrap-table',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ng-bootstrap-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ng-bootstrap-table.component.scss */ "./src/modules/forms/components/ng-bootstrap-table/ng-bootstrap-table.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _app_app_parameter__WEBPACK_IMPORTED_MODULE_7__["AppParameter"],
        _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
        _modules_details_services__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], NgBootstrapTableComponent);



/***/ }),

/***/ "./src/modules/forms/components/sort-icon/sort-icon.component.scss":
/*!*************************************************************************!*\
  !*** ./src/modules/forms/components/sort-icon/sort-icon.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sort-icon {\n  height: 0.9rem;\n  width: 0.9rem;\n  margin-left: 0.25rem;\n  margin-top: -0.125rem;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Zvcm1zL2NvbXBvbmVudHMvc29ydC1pY29uL0Q6XFxBQkdcXGFiZ25nL3NyY1xcbW9kdWxlc1xcZm9ybXNcXGNvbXBvbmVudHNcXHNvcnQtaWNvblxcc29ydC1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvZm9ybXMvY29tcG9uZW50cy9zb3J0LWljb24vc29ydC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNESiIsImZpbGUiOiJzcmMvbW9kdWxlcy9mb3Jtcy9jb21wb25lbnRzL3NvcnQtaWNvbi9zb3J0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLnNvcnQtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDAuOXJlbTtcclxuICAgIHdpZHRoOiAwLjlyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0wLjEyNXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIiwiLnNvcnQtaWNvbiB7XG4gIGhlaWdodDogMC45cmVtO1xuICB3aWR0aDogMC45cmVtO1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgbWFyZ2luLXRvcDogLTAuMTI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/modules/forms/components/sort-icon/sort-icon.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/forms/components/sort-icon/sort-icon.component.ts ***!
  \***********************************************************************/
/*! exports provided: SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return SortIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortIconComponent = class SortIconComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SortIconComponent.prototype, "direction", void 0);
SortIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-sort-icon',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sort-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/components/sort-icon/sort-icon.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sort-icon.component.scss */ "./src/modules/forms/components/sort-icon/sort-icon.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SortIconComponent);



/***/ }),

/***/ "./src/modules/forms/containers/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/forms/containers/index.ts ***!
  \***********************************************/
/*! exports provided: containers, TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables/tables.component */ "./src/modules/forms/containers/tables/tables.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return _tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]; });



const containers = [_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]];



/***/ }),

/***/ "./src/modules/forms/containers/tables/tables.component.scss":
/*!*******************************************************************!*\
  !*** ./src/modules/forms/containers/tables/tables.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9mb3Jtcy9jb250YWluZXJzL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/forms/containers/tables/tables.component.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/forms/containers/tables/tables.component.ts ***!
  \*****************************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_parameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/app.parameter */ "./src/app/app.parameter.ts");
/* harmony import */ var _modules_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/services/base.service */ "./src/modules/services/base.service.ts");
/* harmony import */ var _modules_details_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/details/services */ "./src/modules/details/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let TablesComponent = class TablesComponent {
    constructor(router, activatedRoute, param, coreService, dataService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.param = param;
        this.coreService = coreService;
        this.dataService = dataService;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((event) => {
            return (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]);
        }))
            .subscribe((event) => {
            const e = event;
            const navId = new _app_app_parameter__WEBPACK_IMPORTED_MODULE_3__["NavIdentification"]();
            navId.url = e.url.toString();
            const pars = navId.url.split("/");
            const temp = pars[pars.length - 1].toString();
            // console.log(['add', 'edit', 'view'].includes(temp));
            if (['add', 'edit', 'view'].includes(temp)) {
                navId.op = pars[pars.length - 1];
            }
            else {
                navId.op = 'view';
            }
            // console.log(navId);
            this.param.sendFunctionEvent(navId);
            if (this.coreService.CanGetData()) {
                this.coreService.GetMetaData().then(metadata => {
                    this.Title = metadata.title;
                    this.Description = metadata.description;
                });
            }
        });
    }
    ngOnInit() {
    }
};
TablesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _app_app_parameter__WEBPACK_IMPORTED_MODULE_3__["AppParameter"] },
    { type: _modules_services_base_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"] },
    { type: _modules_details_services__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'sb-details',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/forms/containers/tables/tables.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tables.component.scss */ "./src/modules/forms/containers/tables/tables.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _app_app_parameter__WEBPACK_IMPORTED_MODULE_3__["AppParameter"],
        _modules_services_base_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
        _modules_details_services__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
], TablesComponent);



/***/ }),

/***/ "./src/modules/forms/directives/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/forms/directives/index.ts ***!
  \***********************************************/
/*! exports provided: directives, SBSortableHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directives", function() { return directives; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ "./src/modules/forms/directives/sortable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function() { return _sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]; });



const directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]];



/***/ }),

/***/ "./src/modules/forms/directives/sortable.directive.ts":
/*!************************************************************!*\
  !*** ./src/modules/forms/directives/sortable.directive.ts ***!
  \************************************************************/
/*! exports provided: SBSortableHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function() { return SBSortableHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const rotate = { asc: 'desc', desc: '', '': 'asc' };
let SBSortableHeaderDirective = class SBSortableHeaderDirective {
    constructor() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get isAscending() {
        return this.direction === 'asc';
    }
    get isDescending() {
        return this.direction === 'desc';
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sbSortable, direction: this.direction });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SBSortableHeaderDirective.prototype, "sbSortable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SBSortableHeaderDirective.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SBSortableHeaderDirective.prototype, "sort", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.asc'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SBSortableHeaderDirective.prototype, "isAscending", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.desc'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SBSortableHeaderDirective.prototype, "isDescending", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], SBSortableHeaderDirective.prototype, "rotate", null);
SBSortableHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'th[sbSortable]',
    })
], SBSortableHeaderDirective);



/***/ }),

/***/ "./src/modules/forms/forms-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/forms/forms-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ROUTES1, FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES1", function() { return ROUTES1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forms_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.module */ "./src/modules/forms/forms.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/modules/forms/containers/index.ts");
var FormsRoutingModule_1;

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES1 = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
        data: {
            title: 'Form',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Forms',
                    active: true,
                },
            ],
        },
    },
];
let FormsRoutingModule = FormsRoutingModule_1 = class FormsRoutingModule {
    constructor() {
    }
};
FormsRoutingModule.Data = {
    title: localStorage.getItem('title'),
    breadcrumbs: [
        {
            text: 'Dashboard',
            link: '/dashboard',
        },
        {
            text: 'Form',
            active: true,
        },
    ],
};
FormsRoutingModule.Route = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
        data: FormsRoutingModule_1.Data,
        children: [
            { path: '', component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"], data: FormsRoutingModule_1.Data },
            {
                path: ':idmenu',
                component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
                data: FormsRoutingModule_1.Data,
                children: [
                    { path: '', component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"], data: FormsRoutingModule_1.Data },
                    {
                        path: ':id',
                        component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
                        data: FormsRoutingModule_1.Data,
                        children: [
                            { path: '', component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"], data: FormsRoutingModule_1.Data },
                            {
                                path: ':op',
                                component: _containers__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"],
                                data: FormsRoutingModule_1.Data
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
FormsRoutingModule = FormsRoutingModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_forms_module__WEBPACK_IMPORTED_MODULE_3__["FormModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(FormsRoutingModule_1.Route)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FormsRoutingModule);



/***/ }),

/***/ "./src/modules/forms/forms.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/forms/forms.module.ts ***!
  \*******************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "./src/modules/app-common/app-common.module.ts");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "./src/modules/navigation/navigation.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/modules/forms/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/modules/forms/containers/index.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives */ "./src/modules/forms/directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards */ "./src/modules/forms/guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services */ "./src/modules/forms/services/index.ts");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Components */

/* Containers */

/* Directives */

/* Guards */

/* Services */

let FormModule = class FormModule {
};
FormModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
        ],
        providers: [
            ..._services__WEBPACK_IMPORTED_MODULE_11__["services"],
            ..._guards__WEBPACK_IMPORTED_MODULE_10__["guards"],
            ..._directives__WEBPACK_IMPORTED_MODULE_9__["directives"],
        ],
        declarations: [
            ..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"],
            ..._components__WEBPACK_IMPORTED_MODULE_7__["components"],
            ..._directives__WEBPACK_IMPORTED_MODULE_9__["directives"],
        ],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
    })
], FormModule);



/***/ }),

/***/ "./src/modules/forms/guards/index.ts":
/*!*******************************************!*\
  !*** ./src/modules/forms/guards/index.ts ***!
  \*******************************************/
/*! exports provided: guards, TablesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tables_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.guard */ "./src/modules/forms/guards/tables.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TablesGuard", function() { return _tables_guard__WEBPACK_IMPORTED_MODULE_1__["TablesGuard"]; });



const guards = [_tables_guard__WEBPACK_IMPORTED_MODULE_1__["TablesGuard"]];



/***/ }),

/***/ "./src/modules/forms/guards/tables.guard.ts":
/*!**************************************************!*\
  !*** ./src/modules/forms/guards/tables.guard.ts ***!
  \**************************************************/
/*! exports provided: TablesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesGuard", function() { return TablesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TablesGuard = class TablesGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
TablesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TablesGuard);



/***/ }),

/***/ "./src/modules/forms/services/data.service.ts":
/*!****************************************************!*\
  !*** ./src/modules/forms/services/data.service.ts ***!
  \****************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/services/base.service */ "./src/modules/services/base.service.ts");
/* harmony import */ var _app_app_parameter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/app.parameter */ "./src/app/app.parameter.ts");







function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(data, column, direction) {
    if (direction === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(country, term, pipe) {
    return (country.name.toLowerCase().includes(term.toLowerCase()) ||
        pipe.transform(country.area).includes(term) ||
        pipe.transform(country.population).includes(term));
}
let DataService = class DataService {
    constructor(param, coreService, pipe) {
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
            sortDirection: '',
        };
        const id = '';
        const url = '';
        this.param.receiveFunctionEvent().subscribe(p => {
            if (p.idmenu !== '') {
                this.idmenu = p.idmenu;
                if (this.coreService.CanGetData()) {
                    this.coreService.GetMetaData().then(metadata => {
                        this._search$
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this._loading$.next(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this._search(metadata)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this._loading$.next(false)))
                            .subscribe(result => {
                            this._data$.next(result.data);
                            this._total$.next(result.total);
                        });
                        this._search$.next();
                    });
                }
            }
        });
    }
    get data$() {
        return this._data$.asObservable();
    }
    get total$() {
        return this._total$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get page() {
        return this._state.page;
    }
    set page(page) {
        this._set({ page });
    }
    get pageSize() {
        return this._state.pageSize;
    }
    set pageSize(pageSize) {
        this._set({ pageSize });
    }
    get searchTerm() {
        return this._state.searchTerm;
    }
    set searchTerm(searchTerm) {
        this._set({ searchTerm });
    }
    set sortColumn(sortColumn) {
        this._set({ sortColumn });
    }
    set sortDirection(sortDirection) {
        this._set({ sortDirection });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search(metadata) {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let data = sort(metadata.values, sortColumn, sortDirection);
        // // 2. filter
        data = data.filter(d => matches(d, searchTerm, this.pipe));
        const total = data.length;
        // 3. paginate
        data = data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ data, total });
    }
};
DataService.ctorParameters = () => [
    { type: _app_app_parameter__WEBPACK_IMPORTED_MODULE_6__["AppParameter"] },
    { type: _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_app_parameter__WEBPACK_IMPORTED_MODULE_6__["AppParameter"],
        _modules_services_base_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]])
], DataService);



/***/ }),

/***/ "./src/modules/forms/services/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/forms/services/index.ts ***!
  \*********************************************/
/*! exports provided: services, DetailsService, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/modules/forms/services/data.service.ts");
/* harmony import */ var _tables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.service */ "./src/modules/forms/services/tables.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return _tables_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]; });




const services = [_tables_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]];




/***/ }),

/***/ "./src/modules/forms/services/tables.service.ts":
/*!******************************************************!*\
  !*** ./src/modules/forms/services/tables.service.ts ***!
  \******************************************************/
/*! exports provided: DetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return DetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DetailsService = class DetailsService {
    constructor() { }
    getTables$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    }
};
DetailsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DetailsService);



/***/ })

}]);
//# sourceMappingURL=modules-forms-forms-routing-module-es2015.js.map