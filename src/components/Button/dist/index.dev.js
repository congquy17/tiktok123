"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cx = _bind["default"].bind(_ButtonModule["default"]);

function button(_ref) {
  var to = _ref.to,
      href = _ref.href,
      children = _ref.children,
      onClick = _ref.onClick;
  var comp = 'button';
  var classes = cx('wrapper');
  return;
}

var _default = button;
exports["default"] = _default;