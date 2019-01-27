"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureJWTStrategy = undefined;

var _passportJwt = require("passport-jwt");

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _users = require("../resources/users/users.models");

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureJWTStrategy = exports.configureJWTStrategy = function configureJWTStrategy() {
  var opts = {};
  opts.jwtFromRequest = _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "ahgd123";
  _passport2.default.use(new _passportJwt.Strategy(opts, function (jwt_payload, done) {
    console.log(jwt_payload);
    _users2.default.findOne({ _id: jwt_payload.id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        console.log(user);

        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  }));

  _passport2.default.serializeUser(function (user, done) {
    done(null, user);
  });

  _passport2.default.deserializeUser(function (user, done) {
    done(null, user);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtand0LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUpXVFN0cmF0ZWd5Iiwib3B0cyIsImp3dEZyb21SZXF1ZXN0IiwiRXh0cmFjdEp3dCIsImZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbiIsInNlY3JldE9yS2V5IiwicGFzc3BvcnQiLCJ1c2UiLCJTdHJhdGVneSIsImp3dF9wYXlsb2FkIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJVc2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwiZXJyIiwidXNlciIsInNlcmlhbGl6ZVVzZXIiLCJkZXNlcmlhbGl6ZVVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDTyxJQUFNQSxzREFBdUIsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ3hDLE1BQUlDLE9BQU8sRUFBWDtBQUNBQSxPQUFLQyxjQUFMLEdBQXNCQyx3QkFBV0MsMkJBQVgsRUFBdEI7QUFDQUgsT0FBS0ksV0FBTCxHQUFtQixTQUFuQjtBQUNBQyxxQkFBU0MsR0FBVCxDQUNFLElBQUlDLHFCQUFKLENBQWFQLElBQWIsRUFBbUIsVUFBU1EsV0FBVCxFQUFzQkMsSUFBdEIsRUFBNEI7QUFDN0NDLFlBQVFDLEdBQVIsQ0FBWUgsV0FBWjtBQUNBSSxvQkFBS0MsT0FBTCxDQUFhLEVBQUVDLEtBQUtOLFlBQVlPLEVBQW5CLEVBQWIsRUFBc0MsVUFBU0MsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQ3hELFVBQUlELEdBQUosRUFBUztBQUNQLGVBQU9QLEtBQUtPLEdBQUwsRUFBVSxLQUFWLENBQVA7QUFDRDtBQUNELFVBQUlDLElBQUosRUFBVTtBQUNSUCxnQkFBUUMsR0FBUixDQUFZTSxJQUFaOztBQUVBLGVBQU9SLEtBQUssSUFBTCxFQUFXUSxJQUFYLENBQVA7QUFDRCxPQUpELE1BSU87QUFDTCxlQUFPUixLQUFLLElBQUwsRUFBVyxLQUFYLENBQVA7QUFDQTtBQUNEO0FBQ0YsS0FaRDtBQWFELEdBZkQsQ0FERjs7QUFtQkFKLHFCQUFTYSxhQUFULENBQXVCLFVBQVNELElBQVQsRUFBZVIsSUFBZixFQUFxQjtBQUMxQ0EsU0FBSyxJQUFMLEVBQVdRLElBQVg7QUFDRCxHQUZEOztBQUlBWixxQkFBU2MsZUFBVCxDQUF5QixVQUFTRixJQUFULEVBQWVSLElBQWYsRUFBcUI7QUFDNUNBLFNBQUssSUFBTCxFQUFXUSxJQUFYO0FBQ0QsR0FGRDtBQUdELENBOUJNIiwiZmlsZSI6InBhc3Nwb3J0LWp3dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmF0ZWd5LCBFeHRyYWN0Snd0IH0gZnJvbSBcInBhc3Nwb3J0LWp3dFwiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9yZXNvdXJjZXMvdXNlcnMvdXNlcnMubW9kZWxzXCI7XHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmVKV1RTdHJhdGVneSA9ICgpID0+IHtcclxuICB2YXIgb3B0cyA9IHt9O1xyXG4gIG9wdHMuand0RnJvbVJlcXVlc3QgPSBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpO1xyXG4gIG9wdHMuc2VjcmV0T3JLZXkgPSBcImFoZ2QxMjNcIjtcclxuICBwYXNzcG9ydC51c2UoXHJcbiAgICBuZXcgU3RyYXRlZ3kob3B0cywgZnVuY3Rpb24oand0X3BheWxvYWQsIGRvbmUpIHtcclxuICAgICAgY29uc29sZS5sb2coand0X3BheWxvYWQpO1xyXG4gICAgICBVc2VyLmZpbmRPbmUoeyBfaWQ6IGp3dF9wYXlsb2FkLmlkIH0sIGZ1bmN0aW9uKGVyciwgdXNlcikge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIHJldHVybiBkb25lKGVyciwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgIC8vIG9yIHlvdSBjb3VsZCBjcmVhdGUgYSBuZXcgYWNjb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoZnVuY3Rpb24odXNlciwgZG9uZSkge1xyXG4gICAgZG9uZShudWxsLCB1c2VyKTtcclxuICB9KTtcclxuXHJcbiAgcGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKGZ1bmN0aW9uKHVzZXIsIGRvbmUpIHtcclxuICAgIGRvbmUobnVsbCwgdXNlcik7XHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==