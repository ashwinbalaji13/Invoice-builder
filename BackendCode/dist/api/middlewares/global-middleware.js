"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalMiddleware = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _swaggerUiExpress = require("swagger-ui-express");

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _swagger = require("../../config/swagger.json");

var _swagger2 = _interopRequireDefault(_swagger);

var _passportJwt = require("./passport-jwt.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setGlobalMiddleware = exports.setGlobalMiddleware = function setGlobalMiddleware(app) {
  app.use((0, _morgan2.default)("dev"));
  app.use(_passport2.default.initialize());
  (0, _passportJwt.configureJWTStrategy)();
  app.use(_express2.default.json());
  app.use(_express2.default.urlencoded({ extended: true }));
  app.use("/api-docs", _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, {
    explorer: true
  }));
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvZ2xvYmFsLW1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsic2V0R2xvYmFsTWlkZGxld2FyZSIsImFwcCIsInVzZSIsInBhc3Nwb3J0IiwiaW5pdGlhbGl6ZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic3dhZ2dlclVpIiwic2VydmUiLCJzZXR1cCIsInN3YWdnZXJEb2N1bWVudCIsImV4cGxvcmVyIiwicmVxIiwicmVzIiwibmV4dCIsImhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNPLElBQU1BLG9EQUFzQixTQUF0QkEsbUJBQXNCLE1BQU87QUFDeENDLE1BQUlDLEdBQUosQ0FBUSxzQkFBTyxLQUFQLENBQVI7QUFDQUQsTUFBSUMsR0FBSixDQUFRQyxtQkFBU0MsVUFBVCxFQUFSO0FBQ0E7QUFDQUgsTUFBSUMsR0FBSixDQUFRRyxrQkFBUUMsSUFBUixFQUFSO0FBQ0FMLE1BQUlDLEdBQUosQ0FBUUcsa0JBQVFFLFVBQVIsQ0FBbUIsRUFBRUMsVUFBVSxJQUFaLEVBQW5CLENBQVI7QUFDQVAsTUFBSUMsR0FBSixDQUNFLFdBREYsRUFFRU8sMkJBQVVDLEtBRlosRUFHRUQsMkJBQVVFLEtBQVYsQ0FBZ0JDLGlCQUFoQixFQUFpQztBQUMvQkMsY0FBVTtBQURxQixHQUFqQyxDQUhGO0FBT0FaLE1BQUlDLEdBQUosQ0FBUSxVQUFTWSxHQUFULEVBQWNDLEdBQWQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQy9CRCxRQUFJRSxNQUFKLENBQVcsNkJBQVgsRUFBMEMsR0FBMUM7QUFDQUYsUUFBSUUsTUFBSixDQUFXLDhCQUFYLEVBQTJDLGdEQUEzQztBQUNBRDtBQUNELEdBSkQ7QUFLRCxDQWxCTSIsImZpbGUiOiJnbG9iYWwtbWlkZGxld2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm1vcmdhblwiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCBzd2FnZ2VyVWkgZnJvbSBcInN3YWdnZXItdWktZXhwcmVzc1wiO1xyXG5pbXBvcnQgc3dhZ2dlckRvY3VtZW50IGZyb20gXCIuLi8uLi9jb25maWcvc3dhZ2dlci5qc29uXCI7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZUpXVFN0cmF0ZWd5IH0gZnJvbSBcIi4vcGFzc3BvcnQtand0LmpzXCI7XHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxNaWRkbGV3YXJlID0gYXBwID0+IHtcclxuICBhcHAudXNlKGxvZ2dlcihcImRldlwiKSk7XHJcbiAgYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG4gIGNvbmZpZ3VyZUpXVFN0cmF0ZWd5KCk7XHJcbiAgYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbiAgYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbiAgYXBwLnVzZShcclxuICAgIFwiL2FwaS1kb2NzXCIsXHJcbiAgICBzd2FnZ2VyVWkuc2VydmUsXHJcbiAgICBzd2FnZ2VyVWkuc2V0dXAoc3dhZ2dlckRvY3VtZW50LCB7XHJcbiAgICAgIGV4cGxvcmVyOiB0cnVlXHJcbiAgICB9KVxyXG4gICk7XHJcbiAgYXBwLnVzZShmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XHJcbiAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLCBcIk9yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHRcIik7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==