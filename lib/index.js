"use strict";

var _square = _interopRequireDefault(require("./square"));

var _sum = _interopRequireDefault(require("./sum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.writeln('the sum of 5 and 6 is: ', (0, _sum["default"])(5, 6).toString(), '<br/>');
document.writeln('the sum of 7 and 2 is: ', (0, _sum["default"])(7, 2).toString(), '<br/>');
document.writeln('the square of 5 and 6 is: ', (0, _square["default"])(5, 6).toString(), '<br/>');
document.writeln('the square of 7 and 4 is: ', (0, _square["default"])(7, 4).toString(), '<br/>');