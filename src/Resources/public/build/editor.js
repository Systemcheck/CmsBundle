"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor"],{

/***/ "./assets/CmsEditor/App.js":
/*!*********************************!*\
  !*** ./assets/CmsEditor/App.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Editor */ "./assets/CmsEditor/Editor.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);














function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }






function App() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_13__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      gridPreview = _React$useState2[0],
      setGridPreview = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_13__.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      sections = _React$useState4[0],
      setSections = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_13__.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      newsections = _React$useState6[0],
      setNewSections = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_13__.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      pageId = _React$useState8[0],
      setPageId = _React$useState8[1];

  var toggleGrid = function toggleGrid() {
    return setGridPreview(gridPreview ? false : true);
  };

  react__WEBPACK_IMPORTED_MODULE_13__.useEffect(function () {
    setPageId(window.REP_LOG_APP_PROPS.id);
    setSections(JSON.parse(window.REP_LOG_APP_PROPS.app));
  }, [window.REP_LOG_APP_PROPS]);

  var addSection = function addSection(cols) {
    if (sections) {
      var _newsections = _toConsumableArray(sections);
    } else {
      var _newsections2 = new Array();
    }

    var columns = new Array();
    cols.map(function (col, idx) {
      columns.push({
        'blocks': new Array(),
        'width': col
      });
    });

    if (newsections.length === 0) {
      new Array(), _readOnlyError("newsections");
      [{
        columns: columns
      }], _readOnlyError("newsections");
    } else {
      newsections.unshift({
        columns: columns
      });
    }

    setSections(newsections);
    toggleGrid();
  };

  function saveBlocks(props, data, id) {
    if (sections) {
      var _savedsections = _toConsumableArray(sections);
    } else {
      var _savedsections2 = new Array();
    }

    var columns = savedsections[props.section].columns;
    var column = props.column;
    columns[column].blocks = data.blocks;
    savedsections[props.section] = {
      columns: columns
    };
    setNewSections(savedsections);
    axios__WEBPACK_IMPORTED_MODULE_15___default().post('https://localhost:8000/cms-editor-api/page/saveSections/1', savedsections).then(function (res) {
      console.log(res);
    })["catch"](function (error) {
      console.log('Saving failed: ', error);
    });
  }

  console.log(newsections);

  var setSectionOption = function setSectionOption(e) {
    console.log(e);
  };

  var saveNow = function saveNow() {
    axios__WEBPACK_IMPORTED_MODULE_15___default().post('https://localhost:8000/cms-editor-api/page/saveSections/1', newsections).then(function (res) {
      console.log(res);
    })["catch"](function (error) {
      console.log('Saving failed: ', error);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react__WEBPACK_IMPORTED_MODULE_13__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    style: {
      minHeight: "100vh"
    },
    maxWidth: "xl",
    className: "p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: function onClick() {
      return saveNow();
    }
  }, "Speichern")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"], {
    marginTop: 5,
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", {
    className: "sw-icon icon--default-basic-plus-circle sw-icon--fill",
    style: gridPreview ? {
      width: 24,
      height: 24
    } : {
      transform: 'rotate(45deg)',
      width: 24,
      height: 24
    },
    onClick: function onClick() {
      return toggleGrid();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("path", {
    fill: "var(--primary)",
    fillRule: "evenodd",
    d: "M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 Z M24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 8.11624501e-16,18.627417 0,12 C6.29380286e-15,5.372583 5.372583,3.29258647e-16 12,-8.8817842e-16 C18.627417,-3.29258647e-16 24,5.372583 24,12 Z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("p", null, "F\xFCge eine neue \"Section\" hinzu")), gridPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"], {
    marginTop: 5,
    className: "mx-auto text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-12 d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "gridPreview me-1",
    onClick: function onClick() {
      return addSection([12]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "row",
    style: {
      height: '-webkit-fill-available'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "previewInner"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "gridPreview me-1",
    onClick: function onClick() {
      return addSection([6, 6]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "row",
    style: {
      height: '-webkit-fill-available'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "previewInner"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "previewInner"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "gridPreview me-1",
    onClick: function onClick() {
      return addSection([4, 4, 4]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "row",
    style: {
      height: '-webkit-fill-available'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "previewInner"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "previewInner"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "previewInner"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "gridPreview",
    onClick: function onClick() {
      return addSection([4, 8]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "row",
    style: {
      height: '-webkit-fill-available'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "previewInner"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "previewInner"
  }))))))) : null, sections && sections.length > 0 ? sections.map(function (section, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("section", {
      key: index,
      className: "cms-editor-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("select", {
      className: "form-control",
      multiple: true,
      onChange: function onChange(e) {
        return setSectionOption(e);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("option", {
      value: "shape-divider-top"
    }, "Shape Divider Top"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("option", {
      value: "shape-divider-bottom"
    }, "Shape Divider Bottom"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
      className: "row p-4"
    }, section.columns.map(function (column, colidx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: 'col-' + column.width,
        key: colidx
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "cms-editor-section-column me-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", {
        className: "sw-icon icon--default-basic-plus-circle sw-icon--fill",
        style: {
          width: 24,
          height: 24
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("path", {
        fill: "#758CA3",
        fillRule: "evenodd",
        d: "M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 Z M24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 8.11624501e-16,18.627417 0,12 C6.29380286e-15,5.372583 5.372583,3.29258647e-16 12,-8.8817842e-16 C18.627417,-3.29258647e-16 24,5.372583 24,12 Z"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("p", null, "F\xFCge Bl\xF6cke per Drag & Drop hinzu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_Editor__WEBPACK_IMPORTED_MODULE_14__["default"], {
        blocks: column.blocks,
        section: index,
        column: colidx,
        onSave: saveBlocks
      }))));
    })));
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"], {
    p: 0,
    marginTop: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "h6",
    component: "span"
  }, "CMS Editor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"], {
    mt: 2,
    p: 4,
    style: {
      backgroundColor: '#ffffff',
      border: '1px solid #cccccc'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(_Editor__WEBPACK_IMPORTED_MODULE_14__["default"], null)))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/CmsEditor/Editor.js":
/*!************************************!*\
  !*** ./assets/CmsEditor/Editor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js");
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_editorjs_header__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @editorjs/list */ "./node_modules/@editorjs/list/dist/bundle.js");
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_editorjs_list__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _tools_timeline_tool__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tools/timeline/tool */ "./assets/CmsEditor/tools/timeline/tool.js");
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @editorjs/image */ "./node_modules/@editorjs/image/dist/bundle.js");
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_editorjs_image__WEBPACK_IMPORTED_MODULE_20__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }























var DEFAULT_INITIAL_DATA = function DEFAULT_INITIAL_DATA() {
  return {
    "time": new Date().getTime(),
    "blocks": [{
      "type": "header",
      "data": {
        "text": "This is my awesome editor!",
        "level": 1
      }
    }]
  };
};

var Editor = function Editor(props) {
  var EDITTOR_HOLDER_ID = "editor_".concat(props.section, "_").concat(props.column);
  var ejInstance = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_15__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      editorData = _React$useState2[0],
      setEditorData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_15__.useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      editor = _React$useState4[0],
      setEditor = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_15__.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      blocks = _React$useState6[0],
      setBlocks = _React$useState6[1];

  var Paragraph = __webpack_require__(/*! editorjs-paragraph-with-alignment */ "./node_modules/editorjs-paragraph-with-alignment/dist/bundle.js");

  var AlignmentTuneTool = __webpack_require__(/*! editorjs-text-alignment-blocktune */ "./node_modules/editorjs-text-alignment-blocktune/dist/bundle.js");

  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    if (props.blocks) {
      setBlocks(props.blocks);
      var editordata = {
        "time": new Date().getTime(),
        "blocks": props.blocks
      };
      setEditorData(editordata); //initEditor(editordata)
    }
  }, [props.blocks]); // This will run only once

  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    if (editorData) {
      if (!ejInstance.current) {
        initEditor();
      }

      return function () {
        ejInstance.current.destroy();
        ejInstance.current = null;
      };
    }
  }, [editorData]);

  var initEditor = function initEditor() {
    var _tools;

    var editor = new (_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_16___default())({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: function onReady() {
        ejInstance.current = editor;
      },
      onChange: function onChange(api, event) {
        /*api.saver.save().then((outputData) => {
            props.onSave(props, outputData, EDITTOR_HOLDER_ID)
        })*/
      },

      /*onChange: async () => {
          let content = await this.editorjs.saver.save();
          // Put your logic here to save this data to your DB
          setEditorData(content);
      },*/
      autofocus: true,
      tools: (_tools = {
        header: (_editorjs_header__WEBPACK_IMPORTED_MODULE_17___default()),
        timeline: _tools_timeline_tool__WEBPACK_IMPORTED_MODULE_19__["default"],
        list: {
          "class": (_editorjs_list__WEBPACK_IMPORTED_MODULE_18___default()),
          inlineToolbar: true
        }
      }, _defineProperty(_tools, "header", {
        "class": (_editorjs_header__WEBPACK_IMPORTED_MODULE_17___default()),
        tunes: ['align']
      }), _defineProperty(_tools, "paragraph", {
        "class": Paragraph,
        inlineToolbar: true
      }), _defineProperty(_tools, "image", {
        "class": (_editorjs_image__WEBPACK_IMPORTED_MODULE_20___default()),
        config: {
          endpoints: {
            byFile: 'http://localhost:8008/uploadFile',
            // Your backend file uploader endpoint
            byUrl: 'http://localhost:8008/fetchUrl' // Your endpoint that provides uploading by Url

          }
        }
      }), _defineProperty(_tools, "align", {
        "class": AlignmentTuneTool,
        config: {
          "default": "left",
          blocks: {
            header: 'center',
            list: 'left',
            paragraph: 'center'
          }
        }
      }), _tools)
    });
    setEditor(editor);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(react__WEBPACK_IMPORTED_MODULE_15__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement("div", {
    id: EDITTOR_HOLDER_ID
  }, " "));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ }),

/***/ "./assets/CmsEditor/reportWebVitals.js":
/*!*********************************************!*\
  !*** ./assets/CmsEditor/reportWebVitals.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);






var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ "node_modules_web-vitals_dist_web-vitals_js").then(__webpack_require__.bind(__webpack_require__, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportWebVitals);

/***/ }),

/***/ "./assets/CmsEditor/tools/timeline/eventTimeline.js":
/*!**********************************************************!*\
  !*** ./assets/CmsEditor/tools/timeline/eventTimeline.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/lab/Timeline */ "./node_modules/@material-ui/lab/esm/Timeline/Timeline.js");
/* harmony import */ var _material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/lab/TimelineConnector */ "./node_modules/@material-ui/lab/esm/TimelineConnector/TimelineConnector.js");
/* harmony import */ var _material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/lab/TimelineContent */ "./node_modules/@material-ui/lab/esm/TimelineContent/TimelineContent.js");
/* harmony import */ var _material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/lab/TimelineDot */ "./node_modules/@material-ui/lab/esm/TimelineDot/TimelineDot.js");
/* harmony import */ var _material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/lab/TimelineItem */ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItem.js");
/* harmony import */ var _material_ui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/lab/TimelineOppositeContent */ "./node_modules/@material-ui/lab/esm/TimelineOppositeContent/TimelineOppositeContent.js");
/* harmony import */ var _material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/lab/TimelineSeparator */ "./node_modules/@material-ui/lab/esm/TimelineSeparator/TimelineSeparator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");






















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable react-hooks/exhaustive-deps */













var DEFAULT_INITIAL_DATA = function DEFAULT_INITIAL_DATA() {
  return {
    events: [{
      "time": "Time",
      "description": "Description"
    }]
  };
};

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__["default"])(function (theme) {
  return {
    root: {
      paddingTop: '8px',
      backgroundColor: '#efefef'
    },
    timelinedot: {
      boxShadow: 'none',
      marginTop: '20px'
    },
    time: {
      flex: '0.2',
      padding: '8px',
      marginTop: '6px',
      textOverflow: 'ellipsis'
    },
    oppositeInButton: {
      flex: '0.14'
    },
    addButton: {
      boxShadow: 'none',
      paddingLeft: '14px',
      paddingRight: '14px'
    },
    description: {
      padding: '8px',
      width: '400px',
      textOverflow: 'ellipsis'
    },
    addButtonText: {
      color: '#FFFFFF',
      fontSize: '1.3rem'
    }
  };
});

var EventTimeline = function EventTimeline(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_21__.useState(props.data.events.length > 0 ? props.data : DEFAULT_INITIAL_DATA),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      timelineData = _React$useState2[0],
      setTimelineData = _React$useState2[1];

  var updateTimelineData = function updateTimelineData(newData) {
    setTimelineData(newData);

    if (props.onDataChange) {
      // Inform editorjs about data change
      props.onDataChange(newData);
    }
  };

  var onAddEvent = function onAddEvent(e) {
    var newData = _objectSpread({}, timelineData);

    newData.events.push({
      "time": "Time",
      "description": "Description"
    });
    updateTimelineData(newData);
  };

  var onContentChange = function onContentChange(index, fieldName) {
    return function (e) {
      var newData = _objectSpread({}, timelineData);

      newData.events[index][fieldName] = e.currentTarget.textContent;
      updateTimelineData(newData);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(react__WEBPACK_IMPORTED_MODULE_21__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_23__["default"], {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "left"
  }, timelineData.events.map(function (event, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
      className: classes.time
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_27__["default"], {
      color: "textSecondary",
      onBlur: onContentChange(index, 'time'),
      suppressContentEditableWarning: !props.readOnly,
      contentEditable: !props.readOnly
    }, event.time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_28__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_29__["default"], {
      className: classes.timelinedot
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_31__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_32__["default"], {
      elevation: 3,
      className: classes.description
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_27__["default"], {
      color: "primary",
      onBlur: onContentChange(index, 'description'),
      suppressContentEditableWarning: !props.readOnly,
      contentEditable: !props.readOnly
    }, event.description))));
  }), !props.readOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_25__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    className: classes.oppositeInButton
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_28__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_29__["default"], {
    color: "primary",
    className: classes.addButton,
    onClick: onAddEvent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_27__["default"], {
    className: classes.addButtonText
  }, " + "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement(_material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_31__["default"], null)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventTimeline);

/***/ }),

/***/ "./assets/CmsEditor/tools/timeline/tool.js":
/*!*************************************************!*\
  !*** ./assets/CmsEditor/tools/timeline/tool.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timeline)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _eventTimeline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./eventTimeline */ "./assets/CmsEditor/tools/timeline/eventTimeline.js");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var Timeline = /*#__PURE__*/function () {
  function Timeline(_ref) {
    var data = _ref.data,
        config = _ref.config,
        api = _ref.api,
        readOnly = _ref.readOnly;

    _classCallCheck(this, Timeline);

    this.api = api;
    this.readOnly = readOnly;
    this.data = {
      events: data.events || []
    };
    this.CSS = {
      wrapper: 'walkthrough-timeline'
    };
    this.nodes = {
      holder: null
    };
  }

  _createClass(Timeline, [{
    key: "render",
    value: function render() {
      var _this = this;

      var rootNode = document.createElement('div');
      rootNode.setAttribute('class', this.CSS.wrapper);
      this.nodes.holder = rootNode;

      var onDataChange = function onDataChange(newData) {
        _this.data = _objectSpread({}, newData);
      };

      react_dom__WEBPACK_IMPORTED_MODULE_11__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement(_eventTimeline__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onDataChange: onDataChange,
        readOnly: this.readOnly,
        data: this.data
      }), rootNode);
      return this.nodes.holder;
    }
  }, {
    key: "save",
    value: function save() {
      return this.data;
    }
  }], [{
    key: "toolbox",
    get: function get() {
      return {
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z\"/></svg>",
        title: 'Timeline'
      };
    }
  }, {
    key: "isReadOnlySupported",
    get: function get() {
      return true;
    }
  }]);

  return Timeline;
}();



/***/ }),

/***/ "./assets/editor.js":
/*!**************************!*\
  !*** ./assets/editor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CmsEditor_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CmsEditor/Editor */ "./assets/CmsEditor/Editor.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _CmsEditor_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CmsEditor/index.css */ "./assets/CmsEditor/index.css");
/* harmony import */ var _CmsEditor_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CmsEditor/App */ "./assets/CmsEditor/App.js");
/* harmony import */ var _CmsEditor_reportWebVitals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CmsEditor/reportWebVitals */ "./assets/CmsEditor/reportWebVitals.js");







react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmsEditor_App__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById('editor')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

(0,_CmsEditor_reportWebVitals__WEBPACK_IMPORTED_MODULE_5__["default"])();

/***/ }),

/***/ "./assets/CmsEditor/index.css":
/*!************************************!*\
  !*** ./assets/CmsEditor/index.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ecd287","vendors-node_modules_editorjs_editorjs_dist_editor_js-node_modules_editorjs_header_dist_bundl-fbef40"], () => (__webpack_exec__("./assets/editor.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBQUEsS0FBSyxFQUFFO0FBRkYsT0FBUDtBQUlEOzs7U0FFRCxlQUFpQztBQUMvQixhQUFPLElBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkSDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBViw2Q0FBQSxlQUNFLGlEQUFDLDZDQUFELHFCQUNFLGlEQUFDLHNEQUFELE9BREYsQ0FERixFQUlFSyxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsUUFBeEIsQ0FKRixHQU9BO0FBQ0E7QUFDQTs7QUFDQTVELHNFQUFlOzs7Ozs7Ozs7OztBQ25CZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9DbXNFZGl0b3IvQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9DbXNFZGl0b3IvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9DbXNFZGl0b3IvcmVwb3J0V2ViVml0YWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9DbXNFZGl0b3IvdG9vbHMvdGltZWxpbmUvZXZlbnRUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ21zRWRpdG9yL3Rvb2xzL3RpbWVsaW5lL3Rvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ21zRWRpdG9yL2luZGV4LmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBvZ3JhcGh5LCBDb250YWluZXIsIEJveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVkaXRvciBmcm9tICcuL0VkaXRvcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IFtncmlkUHJldmlldywgc2V0R3JpZFByZXZpZXddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc2VjdGlvbnMsIHNldFNlY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbbmV3c2VjdGlvbnMsIHNldE5ld1NlY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcGFnZUlkLCBzZXRQYWdlSWRdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICAgIFxyXG4gICAgY29uc3QgdG9nZ2xlR3JpZCA9ICgpID0+IHNldEdyaWRQcmV2aWV3KGdyaWRQcmV2aWV3ID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhZ2VJZCh3aW5kb3cuUkVQX0xPR19BUFBfUFJPUFMuaWQpXHJcbiAgICAgICAgc2V0U2VjdGlvbnMoSlNPTi5wYXJzZSh3aW5kb3cuUkVQX0xPR19BUFBfUFJPUFMuYXBwKSlcclxuICAgIH0sIFt3aW5kb3cuUkVQX0xPR19BUFBfUFJPUFNdKVxyXG5cclxuICAgIGNvbnN0IGFkZFNlY3Rpb24gPSAoY29scykgPT4ge1xyXG4gICAgICAgIGlmKHNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdzZWN0aW9ucyA9IFsuLi5zZWN0aW9uc11cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbmV3c2VjdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb2xzLm1hcCgoY29sLGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgJ2Jsb2NrcycgOiBuZXcgQXJyYXkoKSxcclxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiBjb2xcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG5ld3NlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBuZXdzZWN0aW9ucyA9IG5ldyBBcnJheSgpXHJcbiAgICAgICAgICAgIG5ld3NlY3Rpb25zID0gW3tcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMgOiBjb2x1bW5zXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3c2VjdGlvbnMudW5zaGlmdCh7Y29sdW1ucyA6IGNvbHVtbnN9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXRTZWN0aW9ucyhuZXdzZWN0aW9ucylcclxuICAgICAgICB0b2dnbGVHcmlkKClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2F2ZUJsb2NrcyAocHJvcHMsZGF0YSxpZCkge1xyXG4gICAgICAgIGlmKHNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGxldCBzYXZlZHNlY3Rpb25zID0gWy4uLnNlY3Rpb25zXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzYXZlZHNlY3Rpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb2x1bW5zID0gc2F2ZWRzZWN0aW9uc1twcm9wcy5zZWN0aW9uXS5jb2x1bW5zXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBwcm9wcy5jb2x1bW5cclxuICAgICAgICAgICAgY29sdW1uc1tjb2x1bW5dLmJsb2NrcyA9IGRhdGEuYmxvY2tzXHJcbiAgICAgICAgICAgIHNhdmVkc2VjdGlvbnNbcHJvcHMuc2VjdGlvbl0gPSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0TmV3U2VjdGlvbnMoc2F2ZWRzZWN0aW9ucyk7XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vbG9jYWxob3N0OjgwMDAvY21zLWVkaXRvci1hcGkvcGFnZS9zYXZlU2VjdGlvbnMvMScsc2F2ZWRzZWN0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyBmYWlsZWQ6ICcsIGVycm9yKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG5ld3NlY3Rpb25zKTtcclxuICAgIGNvbnN0IHNldFNlY3Rpb25PcHRpb24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzYXZlTm93ID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vbG9jYWxob3N0OjgwMDAvY21zLWVkaXRvci1hcGkvcGFnZS9zYXZlU2VjdGlvbnMvMScsbmV3c2VjdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgZmFpbGVkOiAnLCBlcnJvcilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX1cclxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVwieGxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNhdmVOb3coKX0+U3BlaWNoZXJuPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXs1fSBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdy1pY29uIGljb24tLWRlZmF1bHQtYmFzaWMtcGx1cy1jaXJjbGUgc3ctaWNvbi0tZmlsbFwiIHN0eWxlPXtncmlkUHJldmlldyA/IHt3aWR0aDogMjQsaGVpZ2h0OiAyNH0gOiB7dHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKScsd2lkdGg6IDI0LGhlaWdodDogMjR9fSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVHcmlkKCkgfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJ2YXIoLS1wcmltYXJ5KVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEsMTEgTDExLDcgQzExLDYuNDQ3NzE1MjUgMTEuNDQ3NzE1Myw2IDEyLDYgQzEyLjU1MjI4NDcsNiAxMyw2LjQ0NzcxNTI1IDEzLDcgTDEzLDExIEwxNywxMSBDMTcuNTUyMjg0NywxMSAxOCwxMS40NDc3MTUzIDE4LDEyIEMxOCwxMi41NTIyODQ3IDE3LjU1MjI4NDcsMTMgMTcsMTMgTDEzLDEzIEwxMywxNyBDMTMsMTcuNTUyMjg0NyAxMi41NTIyODQ3LDE4IDEyLDE4IEMxMS40NDc3MTUzLDE4IDExLDE3LjU1MjI4NDcgMTEsMTcgTDExLDEzIEw3LDEzIEM2LjQ0NzcxNTI1LDEzIDYsMTIuNTUyMjg0NyA2LDEyIEM2LDExLjQ0NzcxNTMgNi40NDc3MTUyNSwxMSA3LDExIEwxMSwxMSBaIE0xMiwyIEM2LjQ3NzE1MjUsMiAyLDYuNDc3MTUyNSAyLDEyIEMyLDE3LjUyMjg0NzUgNi40NzcxNTI1LDIyIDEyLDIyIEMxNy41MjI4NDc1LDIyIDIyLDE3LjUyMjg0NzUgMjIsMTIgQzIyLDYuNDc3MTUyNSAxNy41MjI4NDc1LDIgMTIsMiBaIE0yNCwxMiBDMjQsMTguNjI3NDE3IDE4LjYyNzQxNywyNCAxMiwyNCBDNS4zNzI1ODMsMjQgOC4xMTYyNDUwMWUtMTYsMTguNjI3NDE3IDAsMTIgQzYuMjkzODAyODZlLTE1LDUuMzcyNTgzIDUuMzcyNTgzLDMuMjkyNTg2NDdlLTE2IDEyLC04Ljg4MTc4NDJlLTE2IEMxOC42Mjc0MTcsLTMuMjkyNTg2NDdlLTE2IDI0LDUuMzcyNTgzIDI0LDEyIFpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkbDvGdlIGVpbmUgbmV1ZSBcIlNlY3Rpb25cIiBoaW56dTwvcD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAge2dyaWRQcmV2aWV3ID8gPEJveCBtYXJnaW5Ub3A9ezV9IGNsYXNzTmFtZT0nbXgtYXV0byB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFByZXZpZXcgbWUtMVwiIG9uQ2xpY2s9eygpID0+IGFkZFNlY3Rpb24oWzEyXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3toZWlnaHQ6ICctd2Via2l0LWZpbGwtYXZhaWxhYmxlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3SW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRQcmV2aWV3IG1lLTFcIiBvbkNsaWNrPXsoKSA9PiBhZGRTZWN0aW9uKFs2LDZdKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17e2hlaWdodDogJy13ZWJraXQtZmlsbC1hdmFpbGFibGUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0lubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdJbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFByZXZpZXcgbWUtMVwiIG9uQ2xpY2s9eygpID0+IGFkZFNlY3Rpb24oWzQsNCw0XSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3toZWlnaHQ6ICctd2Via2l0LWZpbGwtYXZhaWxhYmxlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdJbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3SW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0lubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkUHJldmlld1wiIG9uQ2xpY2s9eygpID0+IGFkZFNlY3Rpb24oWzQsOF0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7aGVpZ2h0OiAnLXdlYmtpdC1maWxsLWF2YWlsYWJsZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3SW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0lubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9Cb3g+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2VjdGlvbnMgJiYgc2VjdGlvbnMubGVuZ3RoID4gMCA/IHNlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNtcy1lZGl0b3Itc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG11bHRpcGxlIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VjdGlvbk9wdGlvbihlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaGFwZS1kaXZpZGVyLXRvcFwiPlNoYXBlIERpdmlkZXIgVG9wPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaGFwZS1kaXZpZGVyLWJvdHRvbVwiPlNoYXBlIERpdmlkZXIgQm90dG9tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLmNvbHVtbnMubWFwKChjb2x1bW4sIGNvbGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wtJytjb2x1bW4ud2lkdGh9IGtleT17Y29saWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtcy1lZGl0b3Itc2VjdGlvbi1jb2x1bW4gbWUtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdy1pY29uIGljb24tLWRlZmF1bHQtYmFzaWMtcGx1cy1jaXJjbGUgc3ctaWNvbi0tZmlsbFwiIHN0eWxlPXt7d2lkdGg6IDI0LGhlaWdodDogMjR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjNzU4Q0EzXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMSwxMSBMMTEsNyBDMTEsNi40NDc3MTUyNSAxMS40NDc3MTUzLDYgMTIsNiBDMTIuNTUyMjg0Nyw2IDEzLDYuNDQ3NzE1MjUgMTMsNyBMMTMsMTEgTDE3LDExIEMxNy41NTIyODQ3LDExIDE4LDExLjQ0NzcxNTMgMTgsMTIgQzE4LDEyLjU1MjI4NDcgMTcuNTUyMjg0NywxMyAxNywxMyBMMTMsMTMgTDEzLDE3IEMxMywxNy41NTIyODQ3IDEyLjU1MjI4NDcsMTggMTIsMTggQzExLjQ0NzcxNTMsMTggMTEsMTcuNTUyMjg0NyAxMSwxNyBMMTEsMTMgTDcsMTMgQzYuNDQ3NzE1MjUsMTMgNiwxMi41NTIyODQ3IDYsMTIgQzYsMTEuNDQ3NzE1MyA2LjQ0NzcxNTI1LDExIDcsMTEgTDExLDExIFogTTEyLDIgQzYuNDc3MTUyNSwyIDIsNi40NzcxNTI1IDIsMTIgQzIsMTcuNTIyODQ3NSA2LjQ3NzE1MjUsMjIgMTIsMjIgQzE3LjUyMjg0NzUsMjIgMjIsMTcuNTIyODQ3NSAyMiwxMiBDMjIsNi40NzcxNTI1IDE3LjUyMjg0NzUsMiAxMiwyIFogTTI0LDEyIEMyNCwxOC42Mjc0MTcgMTguNjI3NDE3LDI0IDEyLDI0IEM1LjM3MjU4MywyNCA4LjExNjI0NTAxZS0xNiwxOC42Mjc0MTcgMCwxMiBDNi4yOTM4MDI4NmUtMTUsNS4zNzI1ODMgNS4zNzI1ODMsMy4yOTI1ODY0N2UtMTYgMTIsLTguODgxNzg0MmUtMTYgQzE4LjYyNzQxNywtMy4yOTI1ODY0N2UtMTYgMjQsNS4zNzI1ODMgMjQsMTIgWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Gw7xnZSBCbMO2Y2tlIHBlciBEcmFnICZhbXA7IERyb3AgaGluenU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIGJsb2Nrcz17Y29sdW1uLmJsb2Nrc30gc2VjdGlvbj17aW5kZXh9IGNvbHVtbj17Y29saWR4fSBvblNhdmU9e3NhdmVCbG9ja3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPEJveCBwPXswfSBtYXJnaW5Ub3A9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENNUyBFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2NjY2NjYydcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRvciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFZGl0b3JKUyBmcm9tICdAZWRpdG9yanMvZWRpdG9yanMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0BlZGl0b3Jqcy9oZWFkZXInOyBcclxuaW1wb3J0IExpc3QgZnJvbSAnQGVkaXRvcmpzL2xpc3QnOyBcclxuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vdG9vbHMvdGltZWxpbmUvdG9vbCc7XHJcbmltcG9ydCBJbWFnZVRvb2wgZnJvbSAnQGVkaXRvcmpzL2ltYWdlJzsgXHJcblxyXG5cclxuY29uc3QgREVGQVVMVF9JTklUSUFMX0RBVEEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIFwidGltZVwiOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgIFwiYmxvY2tzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcImhlYWRlclwiLFxyXG4gICAgICAgIFwiZGF0YVwiOiB7XHJcbiAgICAgICAgICBcInRleHRcIjogXCJUaGlzIGlzIG15IGF3ZXNvbWUgZWRpdG9yIVwiLFxyXG4gICAgICAgICAgXCJsZXZlbFwiOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBFZGl0b3IgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IEVESVRUT1JfSE9MREVSX0lEID0gYGVkaXRvcl8ke3Byb3BzLnNlY3Rpb259XyR7cHJvcHMuY29sdW1ufWA7XHJcbiAgICBcclxuICAgIGNvbnN0IGVqSW5zdGFuY2UgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtlZGl0b3JEYXRhLCBzZXRFZGl0b3JEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2VkaXRvciwgc2V0RWRpdG9yXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgWyBibG9ja3MsIHNldEJsb2Nrc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFBhcmFncmFwaCA9IHJlcXVpcmUoJ2VkaXRvcmpzLXBhcmFncmFwaC13aXRoLWFsaWdubWVudCcpO1xyXG4gICAgY29uc3QgQWxpZ25tZW50VHVuZVRvb2wgPSByZXF1aXJlKCdlZGl0b3Jqcy10ZXh0LWFsaWdubWVudC1ibG9ja3R1bmUnKTsgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihwcm9wcy5ibG9ja3MpIHtcclxuICAgICAgICAgICAgc2V0QmxvY2tzKHByb3BzLmJsb2Nrcyk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IGVkaXRvcmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICBcImJsb2Nrc1wiOiBwcm9wcy5ibG9ja3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0RWRpdG9yRGF0YShlZGl0b3JkYXRhKVxyXG4gICAgICAgICAgICAvL2luaXRFZGl0b3IoZWRpdG9yZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9LCBbcHJvcHMuYmxvY2tzXSlcclxuICAgIFxyXG4gICAgLy8gVGhpcyB3aWxsIHJ1biBvbmx5IG9uY2VcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZWRpdG9yRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIWVqSW5zdGFuY2UuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpbml0RWRpdG9yKCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBlakluc3RhbmNlLmN1cnJlbnQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBlakluc3RhbmNlLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSwgW2VkaXRvckRhdGFdKTtcclxuXHJcbiAgICBjb25zdCBpbml0RWRpdG9yID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBlZGl0b3IgPSBuZXcgRWRpdG9ySlMoe1xyXG4gICAgICAgICAgICBob2xkZXI6IEVESVRUT1JfSE9MREVSX0lELFxyXG4gICAgICAgICAgICBsb2dMZXZlbDogXCJFUlJPUlwiLFxyXG4gICAgICAgICAgICBkYXRhOiBlZGl0b3JEYXRhLFxyXG4gICAgICAgICAgICBvblJlYWR5OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlakluc3RhbmNlLmN1cnJlbnQgPSBlZGl0b3I7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoYXBpLCBldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8qYXBpLnNhdmVyLnNhdmUoKS50aGVuKChvdXRwdXREYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25TYXZlKHByb3BzLCBvdXRwdXREYXRhLCBFRElUVE9SX0hPTERFUl9JRClcclxuICAgICAgICAgICAgICAgIH0pKi9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLypvbkNoYW5nZTogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmVkaXRvcmpzLnNhdmVyLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIC8vIFB1dCB5b3VyIGxvZ2ljIGhlcmUgdG8gc2F2ZSB0aGlzIGRhdGEgdG8geW91ciBEQlxyXG4gICAgICAgICAgICAgICAgc2V0RWRpdG9yRGF0YShjb250ZW50KTtcclxuICAgICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgICBhdXRvZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvb2xzOiB7IFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBIZWFkZXIsIFxyXG4gICAgICAgICAgICAgICAgdGltZWxpbmU6IFRpbWVsaW5lLFxyXG4gICAgICAgICAgICAgICAgbGlzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEhlYWRlcixcclxuICAgICAgICAgICAgICAgICAgICB0dW5lczogWydhbGlnbiddLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhcmFncmFwaDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBQYXJhZ3JhcGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lVG9vbGJhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEltYWdlVG9vbCxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieUZpbGU6ICdodHRwOi8vbG9jYWxob3N0OjgwMDgvdXBsb2FkRmlsZScsIC8vIFlvdXIgYmFja2VuZCBmaWxlIHVwbG9hZGVyIGVuZHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwOC9mZXRjaFVybCcsIC8vIFlvdXIgZW5kcG9pbnQgdGhhdCBwcm92aWRlcyB1cGxvYWRpbmcgYnkgVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczpBbGlnbm1lbnRUdW5lVG9vbCxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWc6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGg6ICdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEVkaXRvcihlZGl0b3IpO1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGlkPXtFRElUVE9SX0hPTERFUl9JRH0+IDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7IiwiY29uc3QgcmVwb3J0V2ViVml0YWxzID0gb25QZXJmRW50cnkgPT4ge1xyXG4gICAgaWYgKG9uUGVyZkVudHJ5ICYmIG9uUGVyZkVudHJ5IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgaW1wb3J0KCd3ZWItdml0YWxzJykudGhlbigoeyBnZXRDTFMsIGdldEZJRCwgZ2V0RkNQLCBnZXRMQ1AsIGdldFRURkIgfSkgPT4ge1xyXG4gICAgICAgIGdldENMUyhvblBlcmZFbnRyeSk7XHJcbiAgICAgICAgZ2V0RklEKG9uUGVyZkVudHJ5KTtcclxuICAgICAgICBnZXRGQ1Aob25QZXJmRW50cnkpO1xyXG4gICAgICAgIGdldExDUChvblBlcmZFbnRyeSk7XHJcbiAgICAgICAgZ2V0VFRGQihvblBlcmZFbnRyeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgcmVwb3J0V2ViVml0YWxzOyIsIiAgIFxyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUaW1lbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lJztcclxuaW1wb3J0IFRpbWVsaW5lQ29ubmVjdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVDb25uZWN0b3InO1xyXG5pbXBvcnQgVGltZWxpbmVDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVDb250ZW50JztcclxuaW1wb3J0IFRpbWVsaW5lRG90IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVEb3QnO1xyXG5pbXBvcnQgVGltZWxpbmVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVJdGVtJztcclxuaW1wb3J0IFRpbWVsaW5lT3Bwb3NpdGVDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQnO1xyXG5pbXBvcnQgVGltZWxpbmVTZXBhcmF0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZVNlcGFyYXRvcic7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBERUZBVUxUX0lOSVRJQUxfREFUQSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZXZlbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcInRpbWVcIjogXCJUaW1lXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXB0aW9uXCJcclxuICAgICAgfVxyXG4gICAgXSxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZmVmZWYnLFxyXG4gIH0sXHJcbiAgdGltZWxpbmVkb3Q6IHtcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgfSxcclxuICB0aW1lOiB7XHJcbiAgICBmbGV4OiAnMC4yJyxcclxuICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgbWFyZ2luVG9wOiAnNnB4JyxcclxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICB9LFxyXG4gIG9wcG9zaXRlSW5CdXR0b246IHtcclxuICAgIGZsZXg6ICcwLjE0JyxcclxuICB9LFxyXG4gIGFkZEJ1dHRvbjoge1xyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICBwYWRkaW5nTGVmdDogJzE0cHgnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMTRweCdcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgIHdpZHRoOiAnNDAwcHgnLFxyXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gIH0sXHJcbiAgYWRkQnV0dG9uVGV4dDoge1xyXG4gICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgIGZvbnRTaXplOiAnMS4zcmVtJyxcclxuICB9XHJcbn0pKTtcclxuXHJcbmNvbnN0IEV2ZW50VGltZWxpbmUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3RpbWVsaW5lRGF0YSwgc2V0VGltZWxpbmVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmRhdGEuZXZlbnRzLmxlbmd0aCA+IDAgPyBwcm9wcy5kYXRhIDogREVGQVVMVF9JTklUSUFMX0RBVEEpO1xyXG5cclxuICBjb25zdCB1cGRhdGVUaW1lbGluZURhdGEgPSAobmV3RGF0YSkgPT4ge1xyXG4gICAgc2V0VGltZWxpbmVEYXRhKG5ld0RhdGEpO1xyXG4gICAgaWYgKHByb3BzLm9uRGF0YUNoYW5nZSkge1xyXG4gICAgICAvLyBJbmZvcm0gZWRpdG9yanMgYWJvdXQgZGF0YSBjaGFuZ2VcclxuICAgICAgcHJvcHMub25EYXRhQ2hhbmdlKG5ld0RhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25BZGRFdmVudCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0ge1xyXG4gICAgICAuLi50aW1lbGluZURhdGFcclxuICAgIH1cclxuICAgIG5ld0RhdGEuZXZlbnRzLnB1c2goe1xyXG4gICAgICBcInRpbWVcIjogXCJUaW1lXCIsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiXHJcbiAgICB9KVxyXG4gICAgdXBkYXRlVGltZWxpbmVEYXRhKG5ld0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Db250ZW50Q2hhbmdlID0gKGluZGV4LCBmaWVsZE5hbWUpID0+IHtcclxuICAgIHJldHVybiAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdEYXRhID0ge1xyXG4gICAgICAgIC4uLnRpbWVsaW5lRGF0YVxyXG4gICAgICB9XHJcbiAgICAgIG5ld0RhdGEuZXZlbnRzW2luZGV4XVtmaWVsZE5hbWVdID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgICB1cGRhdGVUaW1lbGluZURhdGEobmV3RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8VGltZWxpbmUgYWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICB7dGltZWxpbmVEYXRhLmV2ZW50cy5tYXAoKGV2ZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8VGltZWxpbmVJdGVtIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxUaW1lbGluZU9wcG9zaXRlQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBvbkJsdXI9e29uQ29udGVudENoYW5nZShpbmRleCwgJ3RpbWUnKX0gc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nPXshcHJvcHMucmVhZE9ubHl9IGNvbnRlbnRFZGl0YWJsZT17IXByb3BzLnJlYWRPbmx5fT57ZXZlbnQudGltZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9UaW1lbGluZU9wcG9zaXRlQ29udGVudD5cclxuICAgICAgICAgICAgICA8VGltZWxpbmVTZXBhcmF0b3I+XHJcbiAgICAgICAgICAgICAgICA8VGltZWxpbmVEb3QgY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVsaW5lZG90fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRpbWVsaW5lQ29ubmVjdG9yIC8+XHJcbiAgICAgICAgICAgICAgPC9UaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgICA8VGltZWxpbmVDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5XCIgb25CbHVyPXtvbkNvbnRlbnRDaGFuZ2UoaW5kZXgsICdkZXNjcmlwdGlvbicpfSBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9eyFwcm9wcy5yZWFkT25seX0gY29udGVudEVkaXRhYmxlPXshcHJvcHMucmVhZE9ubHl9PntldmVudC5kZXNjcmlwdGlvbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvVGltZWxpbmVDb250ZW50PlxyXG4gICAgICAgICAgICA8L1RpbWVsaW5lSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAhcHJvcHMucmVhZE9ubHkgJiZcclxuICAgICAgICAgICAgPFRpbWVsaW5lSXRlbT5cclxuICAgICAgICAgICAgICA8VGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLm9wcG9zaXRlSW5CdXR0b259IC8+XHJcbiAgICAgICAgICAgICAgPFRpbWVsaW5lU2VwYXJhdG9yPlxyXG4gICAgICAgICAgICAgICAgPFRpbWVsaW5lRG90IGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRCdXR0b259IG9uQ2xpY2s9e29uQWRkRXZlbnR9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuYWRkQnV0dG9uVGV4dH0+ICsgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9UaW1lbGluZURvdD5cclxuICAgICAgICAgICAgICA8L1RpbWVsaW5lU2VwYXJhdG9yPlxyXG4gICAgICAgICAgICAgIDxUaW1lbGluZUNvbnRlbnQgLz5cclxuICAgICAgICAgICAgPC9UaW1lbGluZUl0ZW0+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9UaW1lbGluZT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50VGltZWxpbmU7XHJcbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgRXZlbnRUaW1lbGluZSBmcm9tICcuL2V2ZW50VGltZWxpbmUnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSB7XHJcblxyXG4gIHN0YXRpYyBnZXQgdG9vbGJveCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGljb246IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCI+PHBhdGggZD1cIk0wIDBoMjR2MjRIMFYwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTkgMTV2NEg1di00aDE0bTEtMkg0Yy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxNmMuNTUgMCAxLS40NSAxLTF2LTZjMC0uNTUtLjQ1LTEtMS0xek03IDE4LjVjLS44MiAwLTEuNS0uNjctMS41LTEuNXMuNjgtMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41ek0xOSA1djRINVY1aDE0bTEtMkg0Yy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxNmMuNTUgMCAxLS40NSAxLTFWNGMwLS41NS0uNDUtMS0xLTF6TTcgOC41Yy0uODIgMC0xLjUtLjY3LTEuNS0xLjVTNi4xOCA1LjUgNyA1LjVzMS41LjY4IDEuNSAxLjVTNy44MyA4LjUgNyA4LjV6XCIvPjwvc3ZnPmAsXHJcbiAgICAgIHRpdGxlOiAnVGltZWxpbmUnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaXNSZWFkT25seVN1cHBvcnRlZCgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoeyBkYXRhLCBjb25maWcsIGFwaSwgcmVhZE9ubHkgfSkge1xyXG4gICAgdGhpcy5hcGkgPSBhcGk7XHJcbiAgICB0aGlzLnJlYWRPbmx5ID0gcmVhZE9ubHk7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIGV2ZW50czogZGF0YS5ldmVudHMgfHwgW10sXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuQ1NTID0ge1xyXG4gICAgICB3cmFwcGVyOiAnd2Fsa3Rocm91Z2gtdGltZWxpbmUnLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm5vZGVzID0ge1xyXG4gICAgICBob2xkZXI6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgcm9vdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJvb3ROb2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLkNTUy53cmFwcGVyKTtcclxuICAgIHRoaXMubm9kZXMuaG9sZGVyID0gcm9vdE5vZGU7XHJcblxyXG4gICAgY29uc3Qgb25EYXRhQ2hhbmdlID0gKG5ld0RhdGEpID0+IHtcclxuICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgIC4uLm5ld0RhdGFcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgIChcclxuICAgICAgICA8RXZlbnRUaW1lbGluZVxyXG4gICAgICAgICAgb25EYXRhQ2hhbmdlPXtvbkRhdGFDaGFuZ2V9XHJcbiAgICAgICAgICByZWFkT25seT17dGhpcy5yZWFkT25seX1cclxuICAgICAgICAgIGRhdGE9e3RoaXMuZGF0YX0gLz5cclxuICAgICAgKSxcclxuICAgICAgcm9vdE5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLm5vZGVzLmhvbGRlcjtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFR5cG9ncmFwaHksIENvbnRhaW5lciwgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vQ21zRWRpdG9yL0VkaXRvcic7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICcuL0Ntc0VkaXRvci9pbmRleC5jc3MnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQ21zRWRpdG9yL0FwcCc7XHJcbmltcG9ydCByZXBvcnRXZWJWaXRhbHMgZnJvbSAnLi9DbXNFZGl0b3IvcmVwb3J0V2ViVml0YWxzJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICAgIDxBcHAgLz5cclxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3InKVxyXG4pO1xyXG5cclxuLy8gSWYgeW91IHdhbnQgdG8gc3RhcnQgbWVhc3VyaW5nIHBlcmZvcm1hbmNlIGluIHlvdXIgYXBwLCBwYXNzIGEgZnVuY3Rpb25cclxuLy8gdG8gbG9nIHJlc3VsdHMgKGZvciBleGFtcGxlOiByZXBvcnRXZWJWaXRhbHMoY29uc29sZS5sb2cpKVxyXG4vLyBvciBzZW5kIHRvIGFuIGFuYWx5dGljcyBlbmRwb2ludC4gTGVhcm4gbW9yZTogaHR0cHM6Ly9iaXQubHkvQ1JBLXZpdGFsc1xyXG5yZXBvcnRXZWJWaXRhbHMoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiVHlwb2dyYXBoeSIsIkNvbnRhaW5lciIsIkJveCIsImRlZmF1bHQiLCJSZWFjdCIsIkVkaXRvciIsImF4aW9zIiwiQXBwIiwidXNlU3RhdGUiLCJncmlkUHJldmlldyIsInNldEdyaWRQcmV2aWV3Iiwic2VjdGlvbnMiLCJzZXRTZWN0aW9ucyIsIm5ld3NlY3Rpb25zIiwic2V0TmV3U2VjdGlvbnMiLCJwYWdlSWQiLCJzZXRQYWdlSWQiLCJ0b2dnbGVHcmlkIiwidXNlRWZmZWN0Iiwid2luZG93IiwiUkVQX0xPR19BUFBfUFJPUFMiLCJpZCIsIkpTT04iLCJwYXJzZSIsImFwcCIsImFkZFNlY3Rpb24iLCJjb2xzIiwiQXJyYXkiLCJjb2x1bW5zIiwibWFwIiwiY29sIiwiaWR4IiwicHVzaCIsImxlbmd0aCIsInVuc2hpZnQiLCJzYXZlQmxvY2tzIiwicHJvcHMiLCJkYXRhIiwic2F2ZWRzZWN0aW9ucyIsInNlY3Rpb24iLCJjb2x1bW4iLCJibG9ja3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNldFNlY3Rpb25PcHRpb24iLCJlIiwic2F2ZU5vdyIsIm1pbkhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwiaW5kZXgiLCJjb2xpZHgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJ1c2VSZWYiLCJFZGl0b3JKUyIsIkhlYWRlciIsIkxpc3QiLCJUaW1lbGluZSIsIkltYWdlVG9vbCIsIkRFRkFVTFRfSU5JVElBTF9EQVRBIiwiRGF0ZSIsImdldFRpbWUiLCJFRElUVE9SX0hPTERFUl9JRCIsImVqSW5zdGFuY2UiLCJlZGl0b3JEYXRhIiwic2V0RWRpdG9yRGF0YSIsImVkaXRvciIsInNldEVkaXRvciIsInNldEJsb2NrcyIsIlBhcmFncmFwaCIsInJlcXVpcmUiLCJBbGlnbm1lbnRUdW5lVG9vbCIsImVkaXRvcmRhdGEiLCJjdXJyZW50IiwiaW5pdEVkaXRvciIsImRlc3Ryb3kiLCJob2xkZXIiLCJsb2dMZXZlbCIsIm9uUmVhZHkiLCJvbkNoYW5nZSIsImFwaSIsImV2ZW50IiwiYXV0b2ZvY3VzIiwidG9vbHMiLCJoZWFkZXIiLCJ0aW1lbGluZSIsImxpc3QiLCJpbmxpbmVUb29sYmFyIiwidHVuZXMiLCJjb25maWciLCJlbmRwb2ludHMiLCJieUZpbGUiLCJieVVybCIsInBhcmFncmFwaCIsInJlcG9ydFdlYlZpdGFscyIsIm9uUGVyZkVudHJ5IiwiRnVuY3Rpb24iLCJnZXRDTFMiLCJnZXRGSUQiLCJnZXRGQ1AiLCJnZXRMQ1AiLCJnZXRUVEZCIiwiUGFwZXIiLCJtYWtlU3R5bGVzIiwiVGltZWxpbmVDb25uZWN0b3IiLCJUaW1lbGluZUNvbnRlbnQiLCJUaW1lbGluZURvdCIsIlRpbWVsaW5lSXRlbSIsIlRpbWVsaW5lT3Bwb3NpdGVDb250ZW50IiwiVGltZWxpbmVTZXBhcmF0b3IiLCJldmVudHMiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwYWRkaW5nVG9wIiwidGltZWxpbmVkb3QiLCJib3hTaGFkb3ciLCJtYXJnaW5Ub3AiLCJ0aW1lIiwiZmxleCIsInBhZGRpbmciLCJ0ZXh0T3ZlcmZsb3ciLCJvcHBvc2l0ZUluQnV0dG9uIiwiYWRkQnV0dG9uIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJkZXNjcmlwdGlvbiIsImFkZEJ1dHRvblRleHQiLCJjb2xvciIsImZvbnRTaXplIiwiRXZlbnRUaW1lbGluZSIsImNsYXNzZXMiLCJ0aW1lbGluZURhdGEiLCJzZXRUaW1lbGluZURhdGEiLCJ1cGRhdGVUaW1lbGluZURhdGEiLCJuZXdEYXRhIiwib25EYXRhQ2hhbmdlIiwib25BZGRFdmVudCIsIm9uQ29udGVudENoYW5nZSIsImZpZWxkTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlYWRPbmx5IiwiUmVhY3RET00iLCJDU1MiLCJ3cmFwcGVyIiwibm9kZXMiLCJyb290Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInJlbmRlciIsImljb24iLCJ0aXRsZSIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==