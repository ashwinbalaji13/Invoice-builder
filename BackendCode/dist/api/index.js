"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _invoice = require("./resources/invoice/invoice.router");

var _client = require("./resources/client/client.router");

var _users = require("./resources/users/users.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();
restRouter.use("/invoices", _invoice.invoiceRouter);
restRouter.use("/clients", _client.clientRouter);
restRouter.use("/users", _users.usersRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJpbnZvaWNlUm91dGVyIiwiY2xpZW50Um91dGVyIiwidXNlcnNSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsa0NBQWFDLGtCQUFRQyxNQUFSLEVBQW5CO0FBQ1BGLFdBQVdHLEdBQVgsQ0FBZSxXQUFmLEVBQTRCQyxzQkFBNUI7QUFDQUosV0FBV0csR0FBWCxDQUFlLFVBQWYsRUFBMkJFLG9CQUEzQjtBQUNBTCxXQUFXRyxHQUFYLENBQWUsUUFBZixFQUF5Qkcsa0JBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgaW52b2ljZVJvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy9pbnZvaWNlL2ludm9pY2Uucm91dGVyXCI7XHJcbmltcG9ydCB7IGNsaWVudFJvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy9jbGllbnQvY2xpZW50LnJvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2Vyc1JvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy91c2Vycy91c2Vycy5yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZXN0Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxucmVzdFJvdXRlci51c2UoXCIvaW52b2ljZXNcIiwgaW52b2ljZVJvdXRlcik7XHJcbnJlc3RSb3V0ZXIudXNlKFwiL2NsaWVudHNcIiwgY2xpZW50Um91dGVyKTtcclxucmVzdFJvdXRlci51c2UoXCIvdXNlcnNcIiwgdXNlcnNSb3V0ZXIpO1xyXG4iXX0=