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

var _development = require("../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureJWTStrategy = exports.configureJWTStrategy = function configureJWTStrategy() {
  var opts = {};
  opts.jwtFromRequest = _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = _development.devconfig.secret;
  _passport2.default.use(new _passportJwt.Strategy(opts, function (jwt_payload, done) {
    // console.log(jwt_payload);
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
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtand0LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUpXVFN0cmF0ZWd5Iiwib3B0cyIsImp3dEZyb21SZXF1ZXN0IiwiRXh0cmFjdEp3dCIsImZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbiIsInNlY3JldE9yS2V5IiwiZGV2Y29uZmlnIiwic2VjcmV0IiwicGFzc3BvcnQiLCJ1c2UiLCJTdHJhdGVneSIsImp3dF9wYXlsb2FkIiwiZG9uZSIsIlVzZXIiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJlcnIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNPLElBQU1BLHNEQUF1QixTQUF2QkEsb0JBQXVCLEdBQU07QUFDeEMsTUFBSUMsT0FBTyxFQUFYO0FBQ0FBLE9BQUtDLGNBQUwsR0FBc0JDLHdCQUFXQywyQkFBWCxFQUF0QjtBQUNBSCxPQUFLSSxXQUFMLEdBQW1CQyx1QkFBVUMsTUFBN0I7QUFDQUMscUJBQVNDLEdBQVQsQ0FDRSxJQUFJQyxxQkFBSixDQUFhVCxJQUFiLEVBQW1CLFVBQVNVLFdBQVQsRUFBc0JDLElBQXRCLEVBQTRCO0FBQzdDO0FBQ0FDLG9CQUFLQyxPQUFMLENBQWEsRUFBRUMsS0FBS0osWUFBWUssRUFBbkIsRUFBYixFQUFzQyxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDeEQsVUFBSUQsR0FBSixFQUFTO0FBQ1AsZUFBT0wsS0FBS0ssR0FBTCxFQUFVLEtBQVYsQ0FBUDtBQUNEO0FBQ0QsVUFBSUMsSUFBSixFQUFVO0FBQ1JDLGdCQUFRQyxHQUFSLENBQVlGLElBQVo7O0FBRUEsZUFBT04sS0FBSyxJQUFMLEVBQVdNLElBQVgsQ0FBUDtBQUNELE9BSkQsTUFJTztBQUNMLGVBQU9OLEtBQUssSUFBTCxFQUFXLEtBQVgsQ0FBUDtBQUNBO0FBQ0Q7QUFDRixLQVpEO0FBYUQsR0FmRCxDQURGO0FBbUJELENBdkJNIiwiZmlsZSI6InBhc3Nwb3J0LWp3dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmF0ZWd5LCBFeHRyYWN0Snd0IH0gZnJvbSBcInBhc3Nwb3J0LWp3dFwiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9yZXNvdXJjZXMvdXNlcnMvdXNlcnMubW9kZWxzXCI7XHJcbmltcG9ydCB7IGRldmNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmVKV1RTdHJhdGVneSA9ICgpID0+IHtcclxuICB2YXIgb3B0cyA9IHt9O1xyXG4gIG9wdHMuand0RnJvbVJlcXVlc3QgPSBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpO1xyXG4gIG9wdHMuc2VjcmV0T3JLZXkgPSBkZXZjb25maWcuc2VjcmV0O1xyXG4gIHBhc3Nwb3J0LnVzZShcclxuICAgIG5ldyBTdHJhdGVneShvcHRzLCBmdW5jdGlvbihqd3RfcGF5bG9hZCwgZG9uZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhqd3RfcGF5bG9hZCk7XHJcbiAgICAgIFVzZXIuZmluZE9uZSh7IF9pZDogand0X3BheWxvYWQuaWQgfSwgZnVuY3Rpb24oZXJyLCB1c2VyKSB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgcmV0dXJuIGRvbmUoZXJyLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgLy8gb3IgeW91IGNvdWxkIGNyZWF0ZSBhIG5ldyBhY2NvdW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbn07XHJcbiJdfQ==