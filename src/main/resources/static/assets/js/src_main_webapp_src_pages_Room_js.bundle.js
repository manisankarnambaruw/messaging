"use strict";
(self["webpackChunkmessaging"] = self["webpackChunkmessaging"] || []).push([["src_main_webapp_src_pages_Room_js"],{

/***/ "./src/main/webapp/src/pages/Room.js":
/*!*******************************************!*\
  !*** ./src/main/webapp/src/pages/Room.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Room)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Header/Header.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stomp/stompjs */ "./node_modules/@stomp/stompjs/esm6/compatibility/stomp.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/main/webapp/src/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Room() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    messages = _useState2[0],
    setMessages = _useState2[1];
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    id = _useParams.id;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    stpClient = _useState4[0],
    setStpClient = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    connected = _useState8[0],
    setConnected = _useState8[1];
  var handleSendMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message) {
    stpClient.send("/app/chat/" + id, {}, JSON.stringify({
      from: localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__.localStorageKey),
      content: message
    }));
    setMessage("");
  }, [stpClient]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var socket = new (sockjs_client__WEBPACK_IMPORTED_MODULE_1___default())("/chat");
    var stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__.Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      setConnected(true);
      console.log("Connected: " + frame);
      stompClient.subscribe("/topic/messages/" + id, function (messageOutput) {
        setMessages(function (m) {
          return [].concat(_toConsumableArray(m), [JSON.parse(new TextDecoder().decode(messageOutput._binaryBody))]);
        });
      });
    });
    setStpClient(stompClient);
    return function () {
      return stompClient.disconnect();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      paddingTop: "20px",
      paddingBottom: "20px",
      height: "100vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attached: "bottom",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attached: "top"
  }, connected ? "Connected" : "Disconnected"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attached: "bottom",
    style: {
      height: "80%",
      overflowY: "auto"
    }
  }, messages.map(function (m, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: "messages-".concat(index)
    }, m.from, ": ", m.content);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onSubmit: function onSubmit() {},
    style: {
      justifySelf: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Input, {
    value: message,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return setMessage(value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Button, {
    type: "submit",
    onClick: function onClick() {
      return handleSendMessage(message);
    }
  }, "Submit")))));
}

/***/ })

}]);
//# sourceMappingURL=src_main_webapp_src_pages_Room_js.bundle.js.map