"use strict";
(self["webpackChunkmessaging"] = self["webpackChunkmessaging"] || []).push([["src_main_webapp_src_pages_Rooms_js"],{

/***/ "./src/main/webapp/src/pages/Rooms.js":
/*!********************************************!*\
  !*** ./src/main/webapp/src/pages/Rooms.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rooms)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Header/Header.js");
var _templateObject, _templateObject2;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ADD_ROOM = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  mutation createRoom($roomName: String!, $roomDesc: String) {\n    createRoom(roomName: $roomName, roomDesc: $roomDesc) {\n      id\n      roomName\n      roomDesc\n    }\n  }\n"])));
var QUERY_ROOMS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query {\n    rooms {\n      id\n      roomName\n      roomDesc\n    }\n  }\n"])));
function Rooms() {
  var _data$rooms2;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    roomName = _useState2[0],
    setRoomName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    roomDesc = _useState4[0],
    setRoomDesc = _useState4[1];
  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(ADD_ROOM),
    _useMutation2 = _slicedToArray(_useMutation, 2),
    addRoom = _useMutation2[0],
    roomData = _useMutation2[1].data;
  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(QUERY_ROOMS),
    data = _useQuery.data,
    refetch = _useQuery.refetch;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!!roomData) {
      refetch();
    }
  }, [roomData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      paddingTop: "30px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: function onSubmit() {
      var _data$rooms;
      if (!!roomName && !(data !== null && data !== void 0 && (_data$rooms = data.rooms) !== null && _data$rooms !== void 0 && _data$rooms.find(function (r) {
        return r.roomName === roomName;
      }))) {
        addRoom({
          variables: {
            roomName: roomName,
            roomDesc: roomDesc
          }
        });
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["default"].Input, {
    placeholder: "Room Name",
    value: roomName,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return setRoomName(value);
    },
    width: 5
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["default"].Input, {
    placeholder: "Room Description",
    value: roomDesc,
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return setRoomDesc(value);
    },
    width: 5
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["default"].Button, {
    type: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "add"
  }), " Add"))), data === null || data === void 0 || (_data$rooms2 = data.rooms) === null || _data$rooms2 === void 0 ? void 0 : _data$rooms2.map(function (r) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
      inverted: true,
      key: "room-".concat(r.id),
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return navigate("/app/".concat(r.id));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["default"], null, r.roomName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, r.roomDesc));
  })));
}

/***/ })

}]);
//# sourceMappingURL=src_main_webapp_src_pages_Rooms_js.bundle.js.map