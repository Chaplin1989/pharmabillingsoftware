function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-medicine/add-medicine.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-medicine/add-medicine.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddMedicineAddMedicineComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"a1\">\n\t<h2>ITEM ENTRY</h2>\n\t<form #frm=\"ngForm\" (submit)=\"show(frm.value,frm);\" style=\"margin-left: 30px;\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<label>Item Name</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<input type=\"text\" name=\"iname\" ngModel class=\"a3\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<label class=\"a2\">Packing</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<input type=\"text\" name=\"packing\" ngModel class=\"a3\" placeholder=\"total tablets quantity\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<label>Print Name</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<input type=\"text\" name=\"pname\" ngModel class=\"a3\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<label class=\"a2\">Tax stab(%GST)</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<input type=\"text\" name=\"gst\" ngModel class=\"a3\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<label>Company</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<input type=\"text\" name=\"company\" ngModel class=\"a3\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<label class=\"a2\">Mfd.by</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<input type=\"text\" name=\"manufacturer\" ngModel class=\"a3\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input type=\"submit\" value=\"submit\" class=\"btn btn-info\" id=\"b4\" value=\"Save\">\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\t\n\t<!-- <div class=\"container-fluid b2\">\n\t\t<form #fr=\"ngForm\" (submit)=\"medicineDetails(fr.value,fr);\">\n\t\t\t\t<div class=\"row\" >\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label>Batch</label>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"Batch\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label class=\"a2\">Mfg.dt</label>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"Mfg_dt\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label>Exp.dt</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"Exp_dt\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label class=\"a2\">PTS</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"pts\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label>PTR</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"ptr\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label class=\"a2\">MRP</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"mrp\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label>Quantity</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"quantity\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label class=\"a2\">Option</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\n\t\t\t\t\t\t<input type=\"submit\" value=\"submit\" class=\"btn btn-warning\" id=\"b1\" value=\"Save\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n</div> -->\n<!-- <h1>{{Mid}}</h1> -->\n<!-- <h1>{{iname}}</h1>\n <h2>{{packing}}</h2> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/addorder/addorder.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addorder/addorder.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddorderAddorderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n<form #fd=\"ngForm\" (submit)=\"addorders(fd.value,fd);\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h2>Customer Details</h2>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<label>Customer Name</label>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<input type=\"text\" name=\"custoname\" ngModel>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<label>Contact No</label>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<input type=\"text\" name=\"cno\" ngModel>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<label>Customer Address</label>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<input type=\"text\" name=\"address\" ngModel>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<label>Age</label>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<input type=\"text\" name=\"age\" ngModel>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n\t\t\t<input type=\"submit\" value=\"save\" class=\"btn btn-success\">\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<input type=\"button\" class=\"btn btn-info\" value=\"Old Customer\" (click)=\"redirect();\">\n\t\t</div>\n\t</div>\n</form>\n</div>\n<!-- <div class=\"container-fluid\" style=\"margin-top: 30px;\">\n\t<form #fs=\"ngForm\" (submit)=\"add(fs.value);\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t    <input type=\"text\" class=\"form-control\" placeholder=\"Type name\" name=\"cname\">\n\t\t\t\t    <input type=\"text\" class=\"form-control\" placeholder=\"Type phno\" name=\"cno\">\n\t\t\t\t    <input type=\"submit\" name=\"submit\" value=\"submit\" class=\"btn btn-danger\">\n\t\t\t\t </div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <!-- Control the column width, and how they should appear on different devices -->\n    <div class=\"row \">\n      <div class=\"col-sm-12\">\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"  [ngClass]=\"{'show' : navbarOpen}\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/listmedicine\" style=\"color: #0000ff\">Medicine <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/customers\" style=\"color: #0000ff\">Customer</a>\n      </li>\n     <!--  <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/listorder\" style=\"color: #0000ff\">Order</a>\n      </li>\n    </ul>\n    <!-- <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form> -->\n  </div>\n</nav>\n</div>\n</div>\n    \n    <div class=\"row\">\n      <div class=\"col-sm-2\" style=\" background-color: #00bfff;height: 500px;\">\n        <ul style=\"list-style-type:none; margin-top: 50px;\">\n          <li><a href=\"/addorder\" style=\"color : #ffffff\">Add order</a></li>\n          <li><a href=\"/listorder\" style=\"color : #ffffff\">List order</a></li>\n          <li><a href=\"/addmedicine\" style=\"color : #ffffff\">Add medicine</a></li>\n          <li><a href=\"/listmedicine\" style=\"color : #ffffff\">List medicine</a></li>\n          <li><a href=\"/medicinedetails\" style=\"color : #ffffff\">Add medicine details</a></li>\n        </ul>\n      </div>\n      <div class=\"col-sm-10\" style=\"height: 400px;\"><router-outlet></router-outlet></div>\n    </div>\n\n  \n    <div class=\"row\">\n      \n      <div class=\"col-sm-12\"></div>\n    </div>\n    <br>\n    \n  </div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomersCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Customer Details</h3>\n<table class=\"table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Contact No</th>\n        <th>Address</th>\n        <th>Age</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let m of details\">\n      <tr>\n        <td>{{m.cname}}</td>\n        <td>{{m.cno}}</td>\n        <td>{{m.address}}</td>\n        <td>{{m.age}}</td>\n        \n      </tr>\n      \n    </tbody>\n  </table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dis-medi-det/dis-medi-det.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dis-medi-det/dis-medi-det.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDisMediDetDisMediDetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"table\">\n    <thead>\n      <tr>\n        <th>Batch no</th>\n        <th>Mfgdt</th>\n        <th>Expdt</th>\n        <th>Price for Retailer</th>\n        <th>Price from Seeler</th>\n        <th>Mrp</th>\n        <th>Quantity</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let m of details\">\n      <tr>\n        <td>{{m.batch}}</td>\n        <td>{{m.mfgdt}}</td>\n        <td>{{m.expdt}}</td>\n        <td>{{m.ptr}}</td>\n        <td>{{m.pts}}</td>\n        <td>{{m.mrp}}</td>\n        <td>{{m.quantity}}</td>\n        \n      </tr>\n      \n    </tbody>\n  </table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-medicine/list-medicine.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-medicine/list-medicine.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListMedicineListMedicineComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"table\">\n    <thead>\n      <tr>\n        <th>Itemname</th>\n        <th>Packing</th>\n        <th>Gst</th>\n        <th>Company</th>\n        <th>Mfdby</th>\n        <th>Option</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let m of medicine\">\n      <tr>\n        <td>{{m.itemname}}</td>\n        <td>{{m.packing}}</td>\n        <td>{{m.gst}}</td>\n        <td>{{m.company}}</td>\n        <td>{{m.mfdby}}</td>\n        <td><a [routerLink]=\"['/dismedidet',m.id]\"><button class=\"btn btn-danger\">Show details</button></a></td>\n      </tr>\n      \n    </tbody>\n  </table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listorder/listorder.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listorder/listorder.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListorderListorderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid f1\">\n<form #fa=\"ngForm\" (submit)=\"addorders(fd.value,fd);\">\n  <div class=\"row\">\n\t<div class=\"col-md-4\">\n\t\t<div class=\"input-group\">\n\t\t    <input type=\"text\" class=\"form-control\" name=\"cname\" ngModel placeholder=\"input name\">\n\t\t    <!-- <div class=\"input-group-append\">\n\t\t    </div> -->\n\t\t </div> \n\t</div>\n  <div class=\"col-md-4\">\n    <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" name=\"cno\" ngModel placeholder=\"input contact no\">\n     </div> \n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"input-group\">\n      <button class=\"btn btn-secondary\" type=\"button\"  (click)=\"custoorder(fa.value)\">Search<span><i class=\"fa fa-search\"></i></span>\n      </button>\n    </div>\n  </div>\n</div>\n</form>\n</div>\n<div class=\"container-fluid t1\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Customer Name</th>\n        <th>Contact No</th>\n        <th>Billing No</th>\n        <th>Total</th>\n        <th>Payment Mode</th>\n        <th>Print</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let u of orderdetails\">\n      <tr>\n        <td>{{u.custo_name}}</td>\n        <td>{{u.cno}}</td>\n        <td>{{u.billno}}</td>\n        <td>{{u.total}} </td>\n        <td>\n          <div class=\"form-group\">\n            <select name=\"sel1\" #sel1 ngModel={{u.paymode}} (change)=\"payment(u.billno,sel1.value);\">\n              <option value=\"cash\">Cash</option>\n              <option value=\"creditcard\">credit card</option>\n              <option value=\"debitcard\">Debit card</option>\n              <option value=\"cash on delivery\">Cash on delivery</option>\n            </select>\n          </div>\n        </td>\n        <td><a target=\"_blank\" href=\"{{url}}/print/{{u.billno}}\">Print Preview</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/medicinedetails/medicinedetails.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medicinedetails/medicinedetails.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMedicinedetailsMedicinedetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid b2\">\n\t<form #fr=\"ngForm\" (submit)=\"medicineDetails(fr.value,fr);\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<select  class=\"form-control\" id=\"sel2\" name=\"mid\" ngModel>\n\t\t\t\t\t<option *ngFor=\"let u of details\" value={{u.id}}>{{u.itemname}}</option>\n        \t\t</select>\n\t\t\t</div>\n\t\t</div>\n\n\t\t\t\t<div class=\"row\" >\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label>Batch</label>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"batch\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label class=\"a2\">Mfg.dt</label>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"mfg_dt\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label>Exp.dt</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"Exp_dt\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label class=\"a2\">PTS</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"pts\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label>PTR(Price to Retailer)</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"ptr\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label class=\"a2\">MRP</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"mrp\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label>Quantity</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"text\" name=\"quantity\" ngModel class=\"a3\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<label class=\"a2\">Option</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\n\t\t\t\t\t\t<input type=\"submit\" value=\"submit\" class=\"btn btn-warning\" id=\"b1\" value=\"Save\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/purchased/purchased.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/purchased/purchased.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPurchasedPurchasedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n<form #fx=\"ngForm\" (submit)=\"add(fx.value);\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\tSelect customer with contact no:\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<select  name=\"custoid\" ngModel>\n\t\t\t\t<!-- <option *ngFor=\"let u of details\" value={{u.id}}> -->\n\t\t\t\t<option *ngFor=\"let u of details\" [value]='u.id'>{{u.custo_name+'('+u.cno+')'}}</option>\n       \t\t</select>\n       \t\t<input type=\"submit\" value=\"save\" class=\"btn btn-info\">\n\t\t</div>\n\t\t\n\t</div>\n</form>\n</div>\n<div class=\"container-fluid\">\n<form #fr=\"ngForm\" (submit)=\"addorder(fr.value,fr);\">\n\t<!-- <div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\tSelect customer with contact no:\n\t\t</div>\n\t\t<div class=\"col-md-8\">\n\t\t\t<select  name=\"custoid\" ngModel [innerHTML]='customername'>\n\t\t\t\t<option *ngFor=\"let u of details\" value={{u.id}}>{{u.custo_name}} ({{(u.cno)}})</option>\n       \t\t</select>\n\t\t</div>\n\t</div> -->\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h2>Enter ordered medicine</h2>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<label>Item Name</label>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<select  class=\"form-control\" id=\"sel2\" name=\"iname\" ngModel>\n\t\t\t\t<option *ngFor=\"let u of mediname\" value={{u.itemname}}>{{u.itemname}}</option>\n        \t</select>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<label>Batch No</label>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<input type=\"text\" name=\"bno\" ngModel class=\"form-control\">\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<label>Tablets Quantity</label>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<input type=\"text\" name=\"quantity\" ngModel class=\"form-control\">\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<label>Option</label>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<input type=\"submit\"  value='submit' class=\"btn btn-success\">\n\t\t</div>\n\t</div>\n</form>\n</div>\n<router-outlet></router-outlet>\n{{billno}}";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/selectcusto/selectcusto.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectcusto/selectcusto.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSelectcustoSelectcustoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n<form #fr=\"ngForm\" (submit)=\"addorder(fr.value,fr);\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\tSelect customer with contact no:\n\t\t</div>\n\t\t<div class=\"col-md-8\">\n\t\t\t<select  name=\"custoid\" ngModel={{customername}}>\n\t\t\t\t<option *ngFor=\"let u of details\" value={{u.id}}>{{u.custo_name}} ({{(u.cno)}})</option>\n       \t\t</select>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t<input type=\"submit\" value=\"Save\" class=\"btn btn-danger\">\n\t\t</div>\n\t</div>\n</form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/add-medicine/add-medicine.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/add-medicine/add-medicine.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddMedicineAddMedicineComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a1\r\n{\r\n\tmargin-top: 20px;\r\n}\r\n.a2\r\n{\r\n\tpadding-left: 100px;\r\n}\r\n.a3\r\n{\r\n\tmargin-left: 30px;\r\n}\r\nh2\r\n{\r\n\tcolor: blue; \r\n\ttext-align: center;\r\n}\r\n#b1\r\n{\r\n\tmargin-left: 60px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.b2\r\n{\r\n\tmargin-top: 30px;\r\n\tpadding-top:20px; \r\n\tbackground-color:#bfff00;\r\n}\r\n#b3\r\n{\r\n\tpadding-top: 30px;\r\n\tpadding-left: 20px;\r\n}\r\n#b4\r\n{\r\n\tmargin-top: 20px;\r\n\twidth: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW1lZGljaW5lL2FkZC1tZWRpY2luZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGdCQUFnQjtBQUNqQjtBQUNBOztDQUVDLG1CQUFtQjtBQUNwQjtBQUNBOztDQUVDLGlCQUFpQjtBQUNsQjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBQ0E7O0NBRUMsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQix3QkFBd0I7QUFDekI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CO0FBQ0E7O0NBRUMsZ0JBQWdCO0NBQ2hCLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tZWRpY2luZS9hZGQtbWVkaWNpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hMVxyXG57XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYTJcclxue1xyXG5cdHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbn1cclxuLmEzXHJcbntcclxuXHRtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5oMlxyXG57XHJcblx0Y29sb3I6IGJsdWU7IFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jYjFcclxue1xyXG5cdG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmIyXHJcbntcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdHBhZGRpbmctdG9wOjIwcHg7IFxyXG5cdGJhY2tncm91bmQtY29sb3I6I2JmZmYwMDtcclxufVxyXG4jYjNcclxue1xyXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4jYjRcclxue1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/add-medicine/add-medicine.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/add-medicine/add-medicine.component.ts ***!
    \********************************************************/

  /*! exports provided: AddMedicineComponent */

  /***/
  function srcAppAddMedicineAddMedicineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddMedicineComponent", function () {
      return AddMedicineComponent;
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


    var _laravel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../laravel.service */
    "./src/app/laravel.service.ts");

    var AddMedicineComponent =
    /*#__PURE__*/
    function () {
      function AddMedicineComponent(lara) {
        _classCallCheck(this, AddMedicineComponent);

        this.lara = lara;
        this.data = "";
        this.token = "";
        this.id = "";
      }

      _createClass(AddMedicineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "show",
        value: function show(data, id) {
          //console.log(data);
          var fd = new FormData();
          fd.append('item_name', data.iname);
          fd.append('packing', data.packing);
          fd.append('print_name', data.pname);
          fd.append('gst', data.gst);
          fd.append('company', data.company);
          fd.append('manufacturer', data.manufacturer);
          this.lara.insert(fd).subscribe(function (datas) {
            console.log(datas);
          });
        }
      }]);

      return AddMedicineComponent;
    }();

    AddMedicineComponent.ctorParameters = function () {
      return [{
        type: _laravel_service__WEBPACK_IMPORTED_MODULE_2__["LaravelService"]
      }];
    };

    AddMedicineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-medicine',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-medicine.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-medicine/add-medicine.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-medicine.component.css */
      "./src/app/add-medicine/add-medicine.component.css")).default]
    })], AddMedicineComponent);
    /***/
  },

  /***/
  "./src/app/addorder/addorder.component.css":
  /*!*************************************************!*\
    !*** ./src/app/addorder/addorder.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddorderAddorderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';\r\n.main {\r\n    width: 50%;\r\n    margin: 50px auto;\r\n}\r\n/* Bootstrap 4 text input with search icon */\r\n.has-search .form-control {\r\n    padding-left: 2.375rem;\r\n}\r\n.has-search .form-control-feedback {\r\n    position: absolute;\r\n    z-index: 2;\r\n    display: block;\r\n    width: 2.375rem;\r\n    height: 2.375rem;\r\n    line-height: 2.375rem;\r\n    text-align: center;\r\n    pointer-events: none;\r\n    color: #aaa;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkb3JkZXIvYWRkb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFDeEY7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBRUEsNENBQTRDO0FBRTVDO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkZG9yZGVyL2FkZG9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xyXG4ubWFpbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbi8qIEJvb3RzdHJhcCA0IHRleHQgaW5wdXQgd2l0aCBzZWFyY2ggaWNvbiAqL1xyXG5cclxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMzc1cmVtO1xyXG59XHJcblxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyLjM3NXJlbTtcclxuICAgIGhlaWdodDogMi4zNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi4zNzVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/addorder/addorder.component.ts":
  /*!************************************************!*\
    !*** ./src/app/addorder/addorder.component.ts ***!
    \************************************************/

  /*! exports provided: AddorderComponent */

  /***/
  function srcAppAddorderAddorderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddorderComponent", function () {
      return AddorderComponent;
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


    var _laravel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../laravel.service */
    "./src/app/laravel.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddorderComponent =
    /*#__PURE__*/
    function () {
      function AddorderComponent(lara, route) {
        _classCallCheck(this, AddorderComponent);

        this.lara = lara;
        this.route = route;
        this.b = "grdfhdfh";
      }

      _createClass(AddorderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addorders",
        value: function addorders(data, id) {
          var _this = this;

          var fd = new FormData();
          fd.append('custoname', data.custoname);
          fd.append('cno', data.cno);
          fd.append('address', data.address);
          fd.append('age', data.age);
          this.lara.addcustomer(fd).subscribe(function (datas) {
            console.log(datas);

            if (datas[0].repply == 'ok') {
              //this.b="chaplin";
              //this.test();
              _this.route.navigate(['/purchasedmedi']);
            }
          });
        }
      }, {
        key: "redirect",
        value: function redirect() {
          this.route.navigate(['/purchasedmedi']);
        }
      }, {
        key: "test",
        value: function test() {
          console.log(this.b);
        }
      }]);

      return AddorderComponent;
    }();

    AddorderComponent.ctorParameters = function () {
      return [{
        type: _laravel_service__WEBPACK_IMPORTED_MODULE_2__["LaravelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AddorderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addorder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addorder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/addorder/addorder.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addorder.component.css */
      "./src/app/addorder/addorder.component.css")).default]
    })], AddorderComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import \"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIiXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'pharma';
        this.navbarOpen = false;
      }

      _createClass(AppComponent, [{
        key: "toggleNavbar",
        value: function toggleNavbar() {
          this.navbarOpen = !this.navbarOpen;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _add_medicine_add_medicine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-medicine/add-medicine.component */
    "./src/app/add-medicine/add-medicine.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _laravel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./laravel.service */
    "./src/app/laravel.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _medicinedetails_medicinedetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./medicinedetails/medicinedetails.component */
    "./src/app/medicinedetails/medicinedetails.component.ts");
    /* harmony import */


    var _addorder_addorder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./addorder/addorder.component */
    "./src/app/addorder/addorder.component.ts");
    /* harmony import */


    var _purchased_purchased_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./purchased/purchased.component */
    "./src/app/purchased/purchased.component.ts");
    /* harmony import */


    var _listorder_listorder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./listorder/listorder.component */
    "./src/app/listorder/listorder.component.ts");
    /* harmony import */


    var _selectcusto_selectcusto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./selectcusto/selectcusto.component */
    "./src/app/selectcusto/selectcusto.component.ts");
    /* harmony import */


    var _list_medicine_list_medicine_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./list-medicine/list-medicine.component */
    "./src/app/list-medicine/list-medicine.component.ts");
    /* harmony import */


    var _dis_medi_det_dis_medi_det_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./dis-medi-det/dis-medi-det.component */
    "./src/app/dis-medi-det/dis-medi-det.component.ts");
    /* harmony import */


    var _customers_customers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./customers/customers.component */
    "./src/app/customers/customers.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _add_medicine_add_medicine_component__WEBPACK_IMPORTED_MODULE_5__["AddMedicineComponent"], _medicinedetails_medicinedetails_component__WEBPACK_IMPORTED_MODULE_10__["MedicinedetailsComponent"], _addorder_addorder_component__WEBPACK_IMPORTED_MODULE_11__["AddorderComponent"], _purchased_purchased_component__WEBPACK_IMPORTED_MODULE_12__["PurchasedComponent"], _listorder_listorder_component__WEBPACK_IMPORTED_MODULE_13__["ListorderComponent"], _selectcusto_selectcusto_component__WEBPACK_IMPORTED_MODULE_14__["SelectcustoComponent"], _list_medicine_list_medicine_component__WEBPACK_IMPORTED_MODULE_15__["ListMedicineComponent"], _dis_medi_det_dis_medi_det_component__WEBPACK_IMPORTED_MODULE_16__["DisMediDetComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_17__["CustomersComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([{
        path: 'addmedicine',
        component: _add_medicine_add_medicine_component__WEBPACK_IMPORTED_MODULE_5__["AddMedicineComponent"]
      }, {
        path: 'medicinedetails',
        component: _medicinedetails_medicinedetails_component__WEBPACK_IMPORTED_MODULE_10__["MedicinedetailsComponent"]
      }, {
        path: 'addorder',
        component: _addorder_addorder_component__WEBPACK_IMPORTED_MODULE_11__["AddorderComponent"]
      }, {
        path: 'purchasedmedi',
        component: _purchased_purchased_component__WEBPACK_IMPORTED_MODULE_12__["PurchasedComponent"]
      }, {
        path: 'listorder',
        component: _listorder_listorder_component__WEBPACK_IMPORTED_MODULE_13__["ListorderComponent"]
      }, {
        path: 'listmedicine',
        component: _list_medicine_list_medicine_component__WEBPACK_IMPORTED_MODULE_15__["ListMedicineComponent"]
      }, {
        path: 'dismedidet/:id',
        component: _dis_medi_det_dis_medi_det_component__WEBPACK_IMPORTED_MODULE_16__["DisMediDetComponent"]
      }, {
        path: 'customers',
        component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_17__["CustomersComponent"]
      }])],
      providers: [_laravel_service__WEBPACK_IMPORTED_MODULE_8__["LaravelService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/customers/customers.component.css":
  /*!***************************************************!*\
    !*** ./src/app/customers/customers.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomersCustomersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customers/customers.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/customers/customers.component.ts ***!
    \**************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
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


    var _laravel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../laravel.service */
    "./src/app/laravel.service.ts");

    var CustomersComponent =
    /*#__PURE__*/
    function () {
      function CustomersComponent(lara) {
        _classCallCheck(this, CustomersComponent);

        this.lara = lara;
        this.details = [];
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.lara.getcusto().subscribe(function (data) {
            _this2.details = data;
          });
        }
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.ctorParameters = function () {
      return [{
        type: _laravel_service__WEBPACK_IMPORTED_MODULE_2__["LaravelService"]
      }];
    };

    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customers.component.css */
      "./src/app/customers/customers.component.css")).default]
    })], CustomersComponent);
    /***/
  },

  /***/
  "./src/app/dis-medi-det/dis-medi-det.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/dis-medi-det/dis-medi-det.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDisMediDetDisMediDetComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpcy1tZWRpLWRldC9kaXMtbWVkaS1kZXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dis-medi-det/dis-medi-det.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/dis-medi-det/dis-medi-det.component.ts ***!
    \********************************************************/

  /*! exports provided: DisMediDetComponent */

  /***/
  function srcAppDisMediDetDisMediDetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisMediDetComponent", function () {
      return DisMediDetComponent;
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


    var _laravel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../laravel.service */
    "./src/app/laravel.service.ts");

    var DisMediDetComponent =
    /*#__PURE__*/
    function () {
      function DisMediDetComponent(route, lara) {
        _classCallCheck(this, DisMediDetComponent);

        this.route = route;
        this.lara = lara;
        this.id = "";
        this.details = [];
      }

      _createClass(DisMediDetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.id = this.route.snapshot.paramMap.get('id');
          var fd = new FormData();
          fd.append("id", this.id);
          this.lara.getdet(fd).subscribe(function (datas) {
            _this3.details = datas;
            console.log(datas);
          });
        }
      }]);

      return DisMediDetComponent;
    }();

    DisMediDetComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _laravel_service__WEBPACK_IMPORTED_MODULE_3__["LaravelService"]
      }];
    };

    DisMediDetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dis-medi-det',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dis-medi-det.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dis-medi-det/dis-medi-det.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dis-medi-det.component.css */
      "./src/app/dis-medi-det/dis-medi-det.component.css")).default]
    })], DisMediDetComponent);
    /***/
  },

  /***/
  "./src/app/laravel.service.ts":
  /*!************************************!*\
    !*** ./src/app/laravel.service.ts ***!
    \************************************/

  /*! exports provided: LaravelService */

  /***/
  function srcAppLaravelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaravelService", function () {
      return LaravelService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var LaravelService =
    /*#__PURE__*/
    function () {
      function LaravelService(http) {
        _classCallCheck(this, LaravelService);

        this.http = http;
        this.url = 'http://localhost/billingsoftware/';
      }

      _createClass(LaravelService, [{
        key: "gettok",
        value: function gettok() {
          return this.http.get(this.url + 'gettoken');
        }
      }, {
        key: "insert",
        value: function insert(data) {
          return this.http.post('http://localhost/billingsoftware/addmed', data);
        }
      }, {
        key: "getmedidetails",
        value: function getmedidetails() {
          return this.http.get(this.url + 'getmedidetails');
        }
      }, {
        key: "inmedidetails",
        value: function inmedidetails(fd) {
          return this.http.post(this.url + 'inmedidetails', fd);
        }
      }, {
        key: "addcustomer",
        value: function addcustomer(fd) {
          return this.http.post(this.url + 'addcustomer', fd);
        }
      }, {
        key: "getcustomers",
        value: function getcustomers() {
          return this.http.get(this.url + 'getcustomers');
        }
      }, {
        key: "insorderdetails",
        value: function insorderdetails(fd) {
          return this.http.post(this.url + 'insorderdetails', fd);
        }
      }, {
        key: "inssuborder",
        value: function inssuborder(fd) {
          return this.http.post(this.url + 'inssuborder', fd);
        }
      }, {
        key: "getbillno",
        value: function getbillno() {
          return this.http.get(this.url + 'getbillno');
        }
      }, {
        key: "getcustoid",
        value: function getcustoid(fd) {
          return this.http.post(this.url + 'getcustoid', fd);
        }
      }, {
        key: "getlistorder",
        value: function getlistorder() {
          return this.http.get(this.url + 'listorder');
        }
      }, {
        key: "uppaymentmode",
        value: function uppaymentmode(data) {
          return this.http.post(this.url + 'uppaymentmode', data);
        }
      }, {
        key: "getCustoOrderDet",
        value: function getCustoOrderDet(cdata) {
          return this.http.post(this.url + 'getCustoOrderDetails', cdata);
        }
      }, {
        key: "getmedicines",
        value: function getmedicines() {
          return this.http.get(this.url + 'getmedicines');
        }
      }, {
        key: "getdet",
        value: function getdet(data) {
          return this.http.post(this.url + 'getdet', data);
        }
      }, {
        key: "getcusto",
        value: function getcusto() {
          return this.http.get(this.url + 'getcusto');
        }
      }]);

      return LaravelService;
    }();

    LaravelService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LaravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LaravelService);
    /***/
  },

  /***/
  "./src/app/list-medicine/list-medicine.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/list-medicine/list-medicine.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListMedicineListMedicineComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtbWVkaWNpbmUvbGlzdC1tZWRpY2luZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/list-medicine/list-medicine.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/list-medicine/list-medicine.component.ts ***!
    \**********************************************************/

  /*! exports provided: ListMedicineComponent */

  /***/
  function srcAppListMedicineListMedicineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListMedicineComponent", function () {
      return ListMedicineComponent;
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


    var _laravel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../laravel.service */
    "./src/app/laravel.service.ts");

    var ListMedicineComponent =
    /*#__PURE__*/
    function () {
      function ListMedicineComponent(lara) {
        _classCallCheck(this, ListMedicineComponent);

        this.lara = lara;
        this.medicine = [];
      }

      _createClass(ListMedicineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.lara.getmedicines().subscribe(function (data) {
            _this4.medicine = data;
          });
        }
      }]);

      return ListMedicineComponent;
    }();

    ListMedicineComponent.ctorParameters = function () {
      return [{
        type: _laravel_service__WEBPACK_IMPORTED_MODULE_2__["LaravelService"]
      }];
    };

    ListMedicineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-medicine',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-medicine.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-medicine/list-medicine.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-medicine.component.css */
      "./src/app/list-medicine/list-medicine.component.css")).default]
    })], ListMedicineComponent);
    /***/
  },

  /***/
  "./src/app/listorder/listorder.component.css":
  /*!***************************************************!*\
    !*** ./src/app/listorder/listorder.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListorderListorderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';\n/* Styles for wrapping the search box */\n.main {\r\n    width: 50%;\r\n    margin: 50px auto;\r\n}\n/* Bootstrap 4 text input with search icon */\n.has-search .form-control {\r\n    padding-left: 2.375rem;\r\n}\n.has-search .form-control-feedback {\r\n    position: absolute;\r\n    z-index: 2;\r\n    display: block;\r\n    width: 2.375rem;\r\n    height: 2.375rem;\r\n    line-height: 2.375rem;\r\n    text-align: center;\r\n    pointer-events: none;\r\n    color: #aaa;\r\n}\n.t1\r\n{\r\n    margin-top: 30px;\r\n}\n.f1\r\n{\r\n    margin-top: 30px;\r\n}\n.fa\r\n{\r\n    margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdG9yZGVyL2xpc3RvcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3RkFBd0Y7QUFEeEYsdUNBQXVDO0FBRXZDO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUVBLDRDQUE0QztBQUU1QztJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9saXN0b3JkZXIvbGlzdG9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZXMgZm9yIHdyYXBwaW5nIHRoZSBzZWFyY2ggYm94ICovXHJcbkBpbXBvcnQgJ2h0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XHJcbi5tYWluIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuLyogQm9vdHN0cmFwIDQgdGV4dCBpbnB1dCB3aXRoIHNlYXJjaCBpY29uICovXHJcblxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIuMzc1cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjM3NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbn1cclxuLnQxXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmYxXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmZhXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/listorder/listorder.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/listorder/listorder.component.ts ***!
    \**************************************************/

  /*! exports provided: ListorderComponent */

  /***/
  function srcAppListorderListorderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListorderComponent", function () {
      return ListorderComponent;
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


    var _laravel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../laravel.service */
    "./src/app/laravel.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ListorderComponent =
    /*#__PURE__*/
    function () {
      function ListorderComponent(lara, route) {
        _classCallCheck(this, ListorderComponent);

        this.lara = lara;
        this.route = route;
        this.orderdetails = [];
        this.url = "http://localhost/billingsoftware";
      }

      _createClass(ListorderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.lara.getlistorder().subscribe(function (data) {
            _this5.orderdetails = data;
          });
        }
      }, {
        key: "payment",
        value: function payment(bno, value) {
          console.log(value);
          var fd = new FormData();
          fd.append('billno', bno);
          fd.append('paymode', value);
          this.lara.uppaymentmode(fd).subscribe(function (d) {
            console.log(d);
          });
        }
      }, {
        key: "custoorder",
        value: function custoorder(data) {
          var _this6 = this;

          console.log(data.cname);
          console.log(data.cno);
          var custodata = new FormData();
          custodata.append('cname', data.cname);
          custodata.append('cno', data.cno);
          this.lara.getCustoOrderDet(custodata).subscribe(function (datas) {
            console.log(datas);

            if (datas[0] == "") {
              alert("data could not found");

              _this6.route.navigate(['/listorder']);
            } else {
              _this6.orderdetails = datas;
            }
          });
        }
      }]);

      return ListorderComponent;
    }();

    ListorderComponent.ctorParameters = function () {
      return [{
        type: _laravel_service__WEBPACK_IMPORTED_MODULE_2__["LaravelService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ListorderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-listorder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./listorder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listorder/listorder.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./listorder.component.css */
      "./src/app/listorder/listorder.component.css")).default]
    })], ListorderComponent);
    /***/
  },

  /***/
  "./src/app/medicinedetails/medicinedetails.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/medicinedetails/medicinedetails.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMedicinedetailsMedicinedetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".a1\r\n{\r\n\tmargin-top: 20px;\r\n}\r\n.a2\r\n{\r\n\tpadding-left: 100px;\r\n}\r\n.a3\r\n{\r\n\tmargin-left: 30px;\r\n}\r\nh2\r\n{\r\n\tcolor: blue; \r\n\ttext-align: center;\r\n}\r\n#b1\r\n{\r\n\tmargin-left: 60px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.b2\r\n{\r\n\tmargin-top: 30px;\r\n\tpadding-top:20px; \r\n\tbackground-color:#bfff00;\r\n}\r\n#b3\r\n{\r\n\tpadding-top: 30px;\r\n\tpadding-left: 20px;\r\n}\r\n#b4\r\n{\r\n\tmargin-top: 20px;\r\n\twidth: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNpbmVkZXRhaWxzL21lZGljaW5lZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGdCQUFnQjtBQUNqQjtBQUNBOztDQUVDLG1CQUFtQjtBQUNwQjtBQUNBOztDQUVDLGlCQUFpQjtBQUNsQjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBQ0E7O0NBRUMsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQix3QkFBd0I7QUFDekI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CO0FBQ0E7O0NBRUMsZ0JBQWdCO0NBQ2hCLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lZGV0YWlscy9tZWRpY2luZWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hMVxyXG57XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYTJcclxue1xyXG5cdHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbn1cclxuLmEzXHJcbntcclxuXHRtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5oMlxyXG57XHJcblx0Y29sb3I6IGJsdWU7IFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jYjFcclxue1xyXG5cdG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmIyXHJcbntcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdHBhZGRpbmctdG9wOjIwcHg7IFxyXG5cdGJhY2tncm91bmQtY29sb3I6I2JmZmYwMDtcclxufVxyXG4jYjNcclxue1xyXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4jYjRcclxue1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/medicinedetails/medicinedetails.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/medicinedetails/medicinedetails.component.ts ***!
    \**************************************************************/

  /*! exports provided: MedicinedetailsComponent */

  /***/
  function srcAppMedicinedetailsMedicinedetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicinedetailsComponent", function () {
      return MedicinedetailsComponent;
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


    var _laravel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../laravel.service */
    "./src/app/laravel.service.ts");

    var MedicinedetailsComponent =
    /*#__PURE__*/
    function () {
      function MedicinedetailsComponent(lara) {
        _classCallCheck(this, MedicinedetailsComponent);

        this.lara = lara;
        this.details = [];
      }

      _createClass(MedicinedetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.lara.getmedidetails().subscribe(function (data) {
            //console.log(data);
            _this7.details = data;
            console.log(_this7.details);
          });
        }
      }, {
        key: "medicineDetails",
        value: function medicineDetails(data, id) {
          var fd = new FormData();
          fd.append('mediid', data.mid);
          fd.append('batch', data.batch);
          fd.append('mfgdt', data.mfg_dt);
          fd.append('expdt', data.Exp_dt);
          fd.append('pts', data.pts);
          fd.append('ptr', data.ptr);
          fd.append('mrp', data.mrp);
          fd.append('quantity', data.quantity);
          this.lara.inmedidetails(fd).subscribe(function (datas) {
            console.log(datas);
          });
        }
      }]);

      return MedicinedetailsComponent;
    }();

    MedicinedetailsComponent.ctorParameters = function () {
      return [{
        type: _laravel_service__WEBPACK_IMPORTED_MODULE_2__["LaravelService"]
      }];
    };

    MedicinedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-medicinedetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./medicinedetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/medicinedetails/medicinedetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./medicinedetails.component.css */
      "./src/app/medicinedetails/medicinedetails.component.css")).default]
    })], MedicinedetailsComponent);
    /***/
  },

  /***/
  "./src/app/purchased/purchased.component.css":
  /*!***************************************************!*\
    !*** ./src/app/purchased/purchased.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPurchasedPurchasedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1cmNoYXNlZC9wdXJjaGFzZWQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/purchased/purchased.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/purchased/purchased.component.ts ***!
    \**************************************************/

  /*! exports provided: PurchasedComponent */

  /***/
  function srcAppPurchasedPurchasedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchasedComponent", function () {
      return PurchasedComponent;
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


    var _laravel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../laravel.service */
    "./src/app/laravel.service.ts");

    var PurchasedComponent =
    /*#__PURE__*/
    function () {
      function PurchasedComponent(lara) {
        _classCallCheck(this, PurchasedComponent);

        this.lara = lara;
        this.details = [];
        this.mediname = [];
        this.billno = "";
        this.customername = "";
        this.fst = "";
      }

      _createClass(PurchasedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.lara.getcustomers().subscribe(function (data) {
            //console.log(data);
            _this8.details = data;
            console.log(_this8.details);
          });
          this.lara.getbillno().subscribe(function (d) {
            //console.log(d[0].bno);
            _this8.billno = d[0].bno;
          });
          this.lara.getmedidetails().subscribe(function (data) {
            //console.log(data);
            _this8.mediname = data;
            console.log(_this8.mediname);
          });
        }
      }, {
        key: "add",
        value: function add(d) {
          this.customername = d.custoid;
          console.log(this.customername);
          var fd = new FormData();
          this.billno = this.billno + 1;
          fd.append('custo_id', this.customername);
          fd.append('billno', this.billno);
          this.lara.insorderdetails(fd).subscribe(function (datas) {
            console.log(datas[0].repply);
          });
        }
      }, {
        key: "addorder",
        value: function addorder(data, id) {
          var fd = new FormData();
          fd.append('billno', this.billno);
          fd.append('iname', data.iname);
          fd.append('batchno', data.bno);
          fd.append('strquantity', data.quantity);
          this.lara.inssuborder(fd).subscribe(function (datas) {
            console.log(datas[0].repply);
            id.reset();
          });
        }
      }]);

      return PurchasedComponent;
    }();

    PurchasedComponent.ctorParameters = function () {
      return [{
        type: _laravel_service__WEBPACK_IMPORTED_MODULE_2__["LaravelService"]
      }];
    };

    PurchasedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-purchased',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./purchased.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/purchased/purchased.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./purchased.component.css */
      "./src/app/purchased/purchased.component.css")).default]
    })], PurchasedComponent);
    /***/
  },

  /***/
  "./src/app/selectcusto/selectcusto.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/selectcusto/selectcusto.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSelectcustoSelectcustoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGN1c3RvL3NlbGVjdGN1c3RvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/selectcusto/selectcusto.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/selectcusto/selectcusto.component.ts ***!
    \******************************************************/

  /*! exports provided: SelectcustoComponent */

  /***/
  function srcAppSelectcustoSelectcustoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectcustoComponent", function () {
      return SelectcustoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SelectcustoComponent =
    /*#__PURE__*/
    function () {
      function SelectcustoComponent() {
        _classCallCheck(this, SelectcustoComponent);
      }

      _createClass(SelectcustoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectcustoComponent;
    }();

    SelectcustoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-selectcusto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./selectcusto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/selectcusto/selectcusto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./selectcusto.component.css */
      "./src/app/selectcusto/selectcusto.component.css")).default]
    })], SelectcustoComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\pharma\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map