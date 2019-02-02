"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authRouter = exports.authRouter = _express2.default.Router();

authRouter.get("/google", _passport2.default.authenticate("google", { scope: ["profile", "email"] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
authRouter.get("/google/callback", _passport2.default.authenticate("google"), function (req, res) {
  console.log("inside authrouter.router");
  // res.redirect('/');
  res.json({ mes: "succes login" });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvYXV0aC9hdXRoLnJvdXRlci5qcyJdLCJuYW1lcyI6WyJhdXRoUm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsInBhc3Nwb3J0IiwiYXV0aGVudGljYXRlIiwic2NvcGUiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIm1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUNPLElBQU1BLGtDQUFhQyxrQkFBUUMsTUFBUixFQUFuQjs7QUFFUEYsV0FBV0csR0FBWCxDQUFlLFNBQWYsRUFBMEJDLG1CQUFTQyxZQUFULENBQXNCLFFBQXRCLEVBQWdDLEVBQUVDLE9BQU8sQ0FBQyxTQUFELEVBQVksT0FBWixDQUFULEVBQWhDLENBQTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQU4sV0FBV0csR0FBWCxDQUFlLGtCQUFmLEVBQW1DQyxtQkFBU0MsWUFBVCxDQUFzQixRQUF0QixDQUFuQyxFQUFvRSxVQUFTRSxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDckZDLFVBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBO0FBQ0FGLE1BQUlHLElBQUosQ0FBUyxFQUFFQyxLQUFLLGNBQVAsRUFBVDtBQUNELENBSkQiLCJmaWxlIjoiYXV0aC5yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmV4cG9ydCBjb25zdCBhdXRoUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbmF1dGhSb3V0ZXIuZ2V0KFwiL2dvb2dsZVwiLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoXCJnb29nbGVcIiwgeyBzY29wZTogW1wicHJvZmlsZVwiLCBcImVtYWlsXCJdIH0pKTtcclxuXHJcbi8vIEdFVCAvYXV0aC9nb29nbGUvY2FsbGJhY2tcclxuLy8gICBVc2UgcGFzc3BvcnQuYXV0aGVudGljYXRlKCkgYXMgcm91dGUgbWlkZGxld2FyZSB0byBhdXRoZW50aWNhdGUgdGhlXHJcbi8vICAgcmVxdWVzdC4gIElmIGF1dGhlbnRpY2F0aW9uIGZhaWxzLCB0aGUgdXNlciB3aWxsIGJlIHJlZGlyZWN0ZWQgYmFjayB0byB0aGVcclxuLy8gICBsb2dpbiBwYWdlLiAgT3RoZXJ3aXNlLCB0aGUgcHJpbWFyeSByb3V0ZSBmdW5jdGlvbiBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCxcclxuLy8gICB3aGljaCwgaW4gdGhpcyBleGFtcGxlLCB3aWxsIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBob21lIHBhZ2UuXHJcbmF1dGhSb3V0ZXIuZ2V0KFwiL2dvb2dsZS9jYWxsYmFja1wiLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoXCJnb29nbGVcIiksIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XHJcbiAgY29uc29sZS5sb2coXCJpbnNpZGUgYXV0aHJvdXRlci5yb3V0ZXJcIik7XHJcbiAgLy8gcmVzLnJlZGlyZWN0KCcvJyk7XHJcbiAgcmVzLmpzb24oeyBtZXM6IFwic3VjY2VzIGxvZ2luXCIgfSk7XHJcbn0pO1xyXG4iXX0=