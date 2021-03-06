"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _users = require("./users.controller");

var _users2 = _interopRequireDefault(_users);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usersRouter = exports.usersRouter = _express2.default.Router();
usersRouter.post("/signup", _users2.default.signup);
usersRouter.post("/login", _users2.default.login);
usersRouter.post("/test", _passport2.default.authenticate("jwt", { session: "false" }), _users2.default.test);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXJzLnJvdXRlci5qcyJdLCJuYW1lcyI6WyJ1c2Vyc1JvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwidXNlcnNDb250cm9sbGVyIiwic2lnbnVwIiwibG9naW4iLCJwYXNzcG9ydCIsImF1dGhlbnRpY2F0ZSIsInNlc3Npb24iLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxvQ0FBY0Msa0JBQVFDLE1BQVIsRUFBcEI7QUFDUEYsWUFBWUcsSUFBWixDQUFpQixTQUFqQixFQUE0QkMsZ0JBQWdCQyxNQUE1QztBQUNBTCxZQUFZRyxJQUFaLENBQWlCLFFBQWpCLEVBQTJCQyxnQkFBZ0JFLEtBQTNDO0FBQ0FOLFlBQVlHLElBQVosQ0FBaUIsT0FBakIsRUFBMEJJLG1CQUFTQyxZQUFULENBQXNCLEtBQXRCLEVBQTZCLEVBQUVDLFNBQVMsT0FBWCxFQUE3QixDQUExQixFQUE4RUwsZ0JBQWdCTSxJQUE5RiIsImZpbGUiOiJ1c2Vycy5yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgdXNlcnNDb250cm9sbGVyIGZyb20gXCIuL3VzZXJzLmNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxudXNlcnNSb3V0ZXIucG9zdChcIi9zaWdudXBcIiwgdXNlcnNDb250cm9sbGVyLnNpZ251cCk7XHJcbnVzZXJzUm91dGVyLnBvc3QoXCIvbG9naW5cIiwgdXNlcnNDb250cm9sbGVyLmxvZ2luKTtcclxudXNlcnNSb3V0ZXIucG9zdChcIi90ZXN0XCIsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZShcImp3dFwiLCB7IHNlc3Npb246IFwiZmFsc2VcIiB9KSwgdXNlcnNDb250cm9sbGVyLnRlc3QpO1xyXG4iXX0=