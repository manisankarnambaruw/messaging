"use strict";
(self["webpackChunkmessaging"] = self["webpackChunkmessaging"] || []).push([["src_main_webapp_src_pages_Landing_js"],{

/***/ "./src/main/webapp/src/pages/Landing.js":
/*!**********************************************!*\
  !*** ./src/main/webapp/src/pages/Landing.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Header/Header.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/collections/Message/Message.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/main/webapp/src/constants.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
var _templateObject;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ADD_USER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  mutation createUser($username: String!) {\n    createUser(username: $username) {\n      id\n      username\n    }\n  }\n"])));
function LandingPage(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ADD_USER),
    _useMutation2 = _slicedToArray(_useMutation, 2),
    addUser = _useMutation2[0],
    _useMutation2$ = _useMutation2[1],
    data = _useMutation2$.data,
    loading = _useMutation2$.loading,
    error = _useMutation2$.error;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var handleSubmit = function handleSubmit() {
    if (!!username) {
      addUser({
        variables: {
          username: username
        }
      });
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!!data && !!(data !== null && data !== void 0 && data.createUser)) {
      var _data$createUser;
      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.localStorageKey, data === null || data === void 0 || (_data$createUser = data.createUser) === null || _data$createUser === void 0 ? void 0 : _data$createUser.username);
      navigate("/app");
    }
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      height: "100vh",
      paddingTop: "100px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attached: "top"
  }, "Enter User Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attached: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Input, {
    value: username,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return setUsername(value);
    },
    error: !!error
  }), !!error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
    negative: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["default"].Header, null, "Error, Could you check something!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["default"].List, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["default"].Item, null, "Choose a different username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["default"].Item, null, "Users might reached exhaust limit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Button, {
    type: "submit"
  }, "Submit"))));
}

/***/ })

}]);
//# sourceMappingURL=src_main_webapp_src_pages_Landing_js.bundle.js.map