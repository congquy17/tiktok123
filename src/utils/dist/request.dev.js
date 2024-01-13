"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.get = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var request = _axios["default"].create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/'
});

var get = function get(path) {
  var option,
      response,
      _args = arguments;
  return regeneratorRuntime.async(function get$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          option = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          _context.next = 3;
          return regeneratorRuntime.awrap(request.get(path, option));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.get = get;
var _default = request;
exports["default"] = _default;