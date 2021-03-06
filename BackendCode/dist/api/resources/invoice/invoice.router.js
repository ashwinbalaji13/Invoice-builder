"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invoiceRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _invoice = require("./invoice.controller");

var _invoice2 = _interopRequireDefault(_invoice);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var invoiceRouter = exports.invoiceRouter = _express2.default.Router();
invoiceRouter.route("/").post(_passport2.default.authenticate("jwt", { session: "false" }), _invoice2.default.create).get(_passport2.default.authenticate("jwt", { session: "false" }), _invoice2.default.findAll);
invoiceRouter.route("/:id").get(_passport2.default.authenticate("jwt", { session: "false" }), _invoice2.default.findOne).delete(_passport2.default.authenticate("jwt", { session: "false" }), _invoice2.default.deleteRecord).put(_passport2.default.authenticate("jwt", { session: "false" }), _invoice2.default.update);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5yb3V0ZXIuanMiXSwibmFtZXMiOlsiaW52b2ljZVJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyb3V0ZSIsInBvc3QiLCJwYXNzcG9ydCIsImF1dGhlbnRpY2F0ZSIsInNlc3Npb24iLCJpbnZvaWNlQ29udHJvbGxlciIsImNyZWF0ZSIsImdldCIsImZpbmRBbGwiLCJmaW5kT25lIiwiZGVsZXRlIiwiZGVsZXRlUmVjb3JkIiwicHV0IiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSx3Q0FBZ0JDLGtCQUFRQyxNQUFSLEVBQXRCO0FBQ1BGLGNBQ0dHLEtBREgsQ0FDUyxHQURULEVBRUdDLElBRkgsQ0FFUUMsbUJBQVNDLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkIsRUFBRUMsU0FBUyxPQUFYLEVBQTdCLENBRlIsRUFFNERDLGtCQUFrQkMsTUFGOUUsRUFHR0MsR0FISCxDQUdPTCxtQkFBU0MsWUFBVCxDQUFzQixLQUF0QixFQUE2QixFQUFFQyxTQUFTLE9BQVgsRUFBN0IsQ0FIUCxFQUcyREMsa0JBQWtCRyxPQUg3RTtBQUlBWCxjQUNHRyxLQURILENBQ1MsTUFEVCxFQUVHTyxHQUZILENBRU9MLG1CQUFTQyxZQUFULENBQXNCLEtBQXRCLEVBQTZCLEVBQUVDLFNBQVMsT0FBWCxFQUE3QixDQUZQLEVBRTJEQyxrQkFBa0JJLE9BRjdFLEVBR0dDLE1BSEgsQ0FHVVIsbUJBQVNDLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkIsRUFBRUMsU0FBUyxPQUFYLEVBQTdCLENBSFYsRUFHOERDLGtCQUFrQk0sWUFIaEYsRUFJR0MsR0FKSCxDQUlPVixtQkFBU0MsWUFBVCxDQUFzQixLQUF0QixFQUE2QixFQUFFQyxTQUFTLE9BQVgsRUFBN0IsQ0FKUCxFQUkyREMsa0JBQWtCUSxNQUo3RSIsImZpbGUiOiJpbnZvaWNlLnJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBpbnZvaWNlQ29udHJvbGxlciBmcm9tIFwiLi9pbnZvaWNlLmNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGludm9pY2VSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5pbnZvaWNlUm91dGVyXHJcbiAgLnJvdXRlKFwiL1wiKVxyXG4gIC5wb3N0KHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZShcImp3dFwiLCB7IHNlc3Npb246IFwiZmFsc2VcIiB9KSwgaW52b2ljZUNvbnRyb2xsZXIuY3JlYXRlKVxyXG4gIC5nZXQocGFzc3BvcnQuYXV0aGVudGljYXRlKFwiand0XCIsIHsgc2Vzc2lvbjogXCJmYWxzZVwiIH0pLCBpbnZvaWNlQ29udHJvbGxlci5maW5kQWxsKTtcclxuaW52b2ljZVJvdXRlclxyXG4gIC5yb3V0ZShcIi86aWRcIilcclxuICAuZ2V0KHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZShcImp3dFwiLCB7IHNlc3Npb246IFwiZmFsc2VcIiB9KSwgaW52b2ljZUNvbnRyb2xsZXIuZmluZE9uZSlcclxuICAuZGVsZXRlKHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZShcImp3dFwiLCB7IHNlc3Npb246IFwiZmFsc2VcIiB9KSwgaW52b2ljZUNvbnRyb2xsZXIuZGVsZXRlUmVjb3JkKVxyXG4gIC5wdXQocGFzc3BvcnQuYXV0aGVudGljYXRlKFwiand0XCIsIHsgc2Vzc2lvbjogXCJmYWxzZVwiIH0pLCBpbnZvaWNlQ29udHJvbGxlci51cGRhdGUpO1xyXG5cclxuIl19