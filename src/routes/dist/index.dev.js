"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privateRoutes = exports.publicRoutes = void 0;

var _layouts = require("~/layouts");

var _Home = _interopRequireDefault(require("~/page/Home"));

var _Following = _interopRequireDefault(require("~/page/Following"));

var _Profile = _interopRequireDefault(require("~/page/Profile"));

var _Upload = _interopRequireDefault(require("~/page/Upload"));

var _Search = _interopRequireDefault(require("~/page/Search"));

var _config = _interopRequireDefault(require("~/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//  dùng để hiển thị public
var publicRoutes = [{
  path: _config["default"].routes.home,
  component: _Home["default"]
}, {
  path: _config["default"].routes.following,
  component: _Following["default"]
}, {
  path: _config["default"].routes.profile,
  component: _Profile["default"]
}, {
  path: _config["default"].routes.upload,
  component: _Upload["default"],
  layout: _layouts.HeaderOnly
}, {
  path: _config["default"].routes.search,
  component: _Search["default"],
  layout: null
}]; //  dùng để hiển thị bắt buộc phải đăng nhập

exports.publicRoutes = publicRoutes;
var privateRoutes = [];
exports.privateRoutes = privateRoutes;