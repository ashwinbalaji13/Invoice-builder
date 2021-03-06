"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _invoice = require("../api/resources/invoice");

var _invoice2 = _interopRequireDefault(_invoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();

router.get("/invoices", _invoice2.default.findAll);
router.post("/invoices", _invoice2.default.create);
router.get("/invoices/:id", _invoice2.default.findOne);
router.delete("/invoices/:id", _invoice2.default.deleteRecord);
router.put("/invoices/:id", _invoice2.default.update);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvcm91dGVzLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJnZXQiLCJpbnZvaWNlQ29udHJvbGxlciIsImZpbmRBbGwiLCJwb3N0IiwiY3JlYXRlIiwiZmluZE9uZSIsImRlbGV0ZSIsImRlbGV0ZVJlY29yZCIsInB1dCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUNPLElBQUlBLDBCQUFTQyxrQkFBUUMsTUFBUixFQUFiOztBQUVQRixPQUFPRyxHQUFQLENBQVcsV0FBWCxFQUF3QkMsa0JBQWtCQyxPQUExQztBQUNBTCxPQUFPTSxJQUFQLENBQVksV0FBWixFQUF5QkYsa0JBQWtCRyxNQUEzQztBQUNBUCxPQUFPRyxHQUFQLENBQVcsZUFBWCxFQUE0QkMsa0JBQWtCSSxPQUE5QztBQUNBUixPQUFPUyxNQUFQLENBQWMsZUFBZCxFQUErQkwsa0JBQWtCTSxZQUFqRDtBQUNBVixPQUFPVyxHQUFQLENBQVcsZUFBWCxFQUE0QlAsa0JBQWtCUSxNQUE5QyIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgaW52b2ljZUNvbnRyb2xsZXIgZnJvbSBcIi4uL2FwaS9yZXNvdXJjZXMvaW52b2ljZVwiO1xyXG5leHBvcnQgbGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KFwiL2ludm9pY2VzXCIsIGludm9pY2VDb250cm9sbGVyLmZpbmRBbGwpO1xyXG5yb3V0ZXIucG9zdChcIi9pbnZvaWNlc1wiLCBpbnZvaWNlQ29udHJvbGxlci5jcmVhdGUpO1xyXG5yb3V0ZXIuZ2V0KFwiL2ludm9pY2VzLzppZFwiLCBpbnZvaWNlQ29udHJvbGxlci5maW5kT25lKTtcclxucm91dGVyLmRlbGV0ZShcIi9pbnZvaWNlcy86aWRcIiwgaW52b2ljZUNvbnRyb2xsZXIuZGVsZXRlUmVjb3JkKTtcclxucm91dGVyLnB1dChcIi9pbnZvaWNlcy86aWRcIiwgaW52b2ljZUNvbnRyb2xsZXIudXBkYXRlKTtcclxuIl19