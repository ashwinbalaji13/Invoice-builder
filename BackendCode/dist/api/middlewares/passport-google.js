"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureGoogleStrategy = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportGoogleOauth = require("passport-google-oauth");

var _passportGoogleOauth2 = _interopRequireDefault(_passportGoogleOauth);

var _users = require("../../api/resources/users/users.models");

var _users2 = _interopRequireDefault(_users);

var _development = require("../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.

var configureGoogleStrategy = exports.configureGoogleStrategy = function configureGoogleStrategy() {
  _passport2.default.use(new _passportGoogleOauth2.default.OAuth2Strategy({
    clientID: _development.devconfig.google.clientId,
    clientSecret: _development.devconfig.google.clientSecret,
    callbackURL: _development.devconfig.google.callbackURL
  }, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(token, tokenSecret, profile, done) {
      var newuser;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("passport google", profile);
              // let user = User.findOne({ "google.id": profile.id });
              // if (user) {
              //   return done(null, user);
              // }
              newuser = new _users2.default({});

              debugger;
              newuser.google.id = profile.id;
              newuser.google.token = token;
              newuser.google.displayName = profile.displayName;
              newuser.google.email = profile.emails[0].value;
              _context.next = 9;
              return newuser.save();

            case 9:
              console.log(newuser);
              done(null, profile);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtZ29vZ2xlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUdvb2dsZVN0cmF0ZWd5IiwicGFzc3BvcnQiLCJ1c2UiLCJHb29nbGVTdHJhdGVneSIsIk9BdXRoMlN0cmF0ZWd5IiwiY2xpZW50SUQiLCJkZXZjb25maWciLCJnb29nbGUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImNhbGxiYWNrVVJMIiwidG9rZW4iLCJ0b2tlblNlY3JldCIsInByb2ZpbGUiLCJkb25lIiwiY29uc29sZSIsImxvZyIsIm5ld3VzZXIiLCJVc2VyIiwiaWQiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiZW1haWxzIiwidmFsdWUiLCJzYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1BLDREQUEwQixTQUExQkEsdUJBQTBCLEdBQU07QUFDM0NDLHFCQUFTQyxHQUFULENBQ0UsSUFBSUMsOEJBQWVDLGNBQW5CLENBQ0U7QUFDRUMsY0FBVUMsdUJBQVVDLE1BQVYsQ0FBaUJDLFFBRDdCO0FBRUVDLGtCQUFjSCx1QkFBVUMsTUFBVixDQUFpQkUsWUFGakM7QUFHRUMsaUJBQWFKLHVCQUFVQyxNQUFWLENBQWlCRztBQUhoQyxHQURGO0FBQUEsd0ZBTUUsaUJBQWVDLEtBQWYsRUFBc0JDLFdBQXRCLEVBQW1DQyxPQUFuQyxFQUE0Q0MsSUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VDLHNCQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0JILE9BQS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSUkscUJBTk4sR0FNZ0IsSUFBSUMsZUFBSixDQUFTLEVBQVQsQ0FOaEI7O0FBT0U7QUFDQUQsc0JBQVFWLE1BQVIsQ0FBZVksRUFBZixHQUFvQk4sUUFBUU0sRUFBNUI7QUFDQUYsc0JBQVFWLE1BQVIsQ0FBZUksS0FBZixHQUF1QkEsS0FBdkI7QUFDQU0sc0JBQVFWLE1BQVIsQ0FBZWEsV0FBZixHQUE2QlAsUUFBUU8sV0FBckM7QUFDQUgsc0JBQVFWLE1BQVIsQ0FBZWMsS0FBZixHQUF1QlIsUUFBUVMsTUFBUixDQUFlLENBQWYsRUFBa0JDLEtBQXpDO0FBWEY7QUFBQSxxQkFZUU4sUUFBUU8sSUFBUixFQVpSOztBQUFBO0FBYUVULHNCQUFRQyxHQUFSLENBQVlDLE9BQVo7QUFDQUgsbUJBQUssSUFBTCxFQUFXRCxPQUFYOztBQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQXlCRCxDQTFCTSIsImZpbGUiOiJwYXNzcG9ydC1nb29nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCBHb29nbGVTdHJhdGVneSBmcm9tIFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXJzLm1vZGVsc1wiO1xyXG5pbXBvcnQgeyBkZXZjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xyXG4vLyBVc2UgdGhlIEdvb2dsZVN0cmF0ZWd5IHdpdGhpbiBQYXNzcG9ydC5cclxuLy8gICBTdHJhdGVnaWVzIGluIHBhc3Nwb3J0IHJlcXVpcmUgYSBgdmVyaWZ5YCBmdW5jdGlvbiwgd2hpY2ggYWNjZXB0XHJcbi8vICAgY3JlZGVudGlhbHMgKGluIHRoaXMgY2FzZSwgYSB0b2tlbiwgdG9rZW5TZWNyZXQsIGFuZCBHb29nbGUgcHJvZmlsZSksIGFuZFxyXG4vLyAgIGludm9rZSBhIGNhbGxiYWNrIHdpdGggYSB1c2VyIG9iamVjdC5cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmVHb29nbGVTdHJhdGVneSA9ICgpID0+IHtcclxuICBwYXNzcG9ydC51c2UoXHJcbiAgICBuZXcgR29vZ2xlU3RyYXRlZ3kuT0F1dGgyU3RyYXRlZ3koXHJcbiAgICAgIHtcclxuICAgICAgICBjbGllbnRJRDogZGV2Y29uZmlnLmdvb2dsZS5jbGllbnRJZCxcclxuICAgICAgICBjbGllbnRTZWNyZXQ6IGRldmNvbmZpZy5nb29nbGUuY2xpZW50U2VjcmV0LFxyXG4gICAgICAgIGNhbGxiYWNrVVJMOiBkZXZjb25maWcuZ29vZ2xlLmNhbGxiYWNrVVJMXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGZ1bmN0aW9uKHRva2VuLCB0b2tlblNlY3JldCwgcHJvZmlsZSwgZG9uZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFzc3BvcnQgZ29vZ2xlXCIsIHByb2ZpbGUpO1xyXG4gICAgICAgIC8vIGxldCB1c2VyID0gVXNlci5maW5kT25lKHsgXCJnb29nbGUuaWRcIjogcHJvZmlsZS5pZCB9KTtcclxuICAgICAgICAvLyBpZiAodXNlcikge1xyXG4gICAgICAgIC8vICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBuZXd1c2VyID0gbmV3IFVzZXIoe30pO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIG5ld3VzZXIuZ29vZ2xlLmlkID0gcHJvZmlsZS5pZDtcclxuICAgICAgICBuZXd1c2VyLmdvb2dsZS50b2tlbiA9IHRva2VuO1xyXG4gICAgICAgIG5ld3VzZXIuZ29vZ2xlLmRpc3BsYXlOYW1lID0gcHJvZmlsZS5kaXNwbGF5TmFtZTtcclxuICAgICAgICBuZXd1c2VyLmdvb2dsZS5lbWFpbCA9IHByb2ZpbGUuZW1haWxzWzBdLnZhbHVlO1xyXG4gICAgICAgIGF3YWl0IG5ld3VzZXIuc2F2ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld3VzZXIpO1xyXG4gICAgICAgIGRvbmUobnVsbCwgcHJvZmlsZSk7XHJcbiAgICAgIH1cclxuICAgIClcclxuICApO1xyXG59O1xyXG4iXX0=