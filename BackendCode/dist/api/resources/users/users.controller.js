"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _users = require("./users.models");

var _users2 = _interopRequireDefault(_users);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _usersService = require("./users.service.js");

var _usersService2 = _interopRequireDefault(_usersService);

var _tslint = require("tslint");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signup: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _userService$validate, error, value, result;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _userService$validate = _usersService2.default.validateSchema(req.body), error = _userService$validate.error, value = _userService$validate.value;

              if (!(error && error.details)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error));

            case 3:
              _context.prev = 3;
              _context.next = 6;
              return _users2.default.create(value);

            case 6:
              result = _context.sent;
              return _context.abrupt("return", res.json({ success: true, message: "User Created successfully" }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);

              res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ err: _context.t0 });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[3, 10]]);
    }));

    function signup(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return signup;
  }(),
  login: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _userService$validate2, error, value, user, matched, token;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _userService$validate2 = _usersService2.default.validateSchema(req.body), error = _userService$validate2.error, value = _userService$validate2.value;

              if (!(error && error.details)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error));

            case 3:
              _context2.prev = 3;
              _context2.next = 6;
              return _users2.default.findOne({ email: value.email });

            case 6:
              user = _context2.sent;

              if (user) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "Invalid Email or email not exist" }));

            case 9:
              _context2.next = 11;
              return _bcryptjs2.default.compare(value.password, user.password);

            case 11:
              matched = _context2.sent;

              // const matched = false;
              console.log("matched", matched);

              if (matched) {
                _context2.next = 17;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "Invalid Password" }));

            case 17:
              token = _jsonwebtoken2.default.sign({ id: user._id }, "ahgd123", { expiresIn: "1d" });
              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.OK).json({ message: "success", token: token }));

            case 19:
              _context2.next = 24;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](3);

              res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ err: _context2.t0 });

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[3, 21]]);
    }));

    function login(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return login;
  }(),
  test: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", res.json({ success: "success" }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function test(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return test;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXJzLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic2lnbnVwIiwicmVxIiwicmVzIiwidXNlclNlcnZpY2UiLCJ2YWxpZGF0ZVNjaGVtYSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsInN0YXR1cyIsIkh0dHBTZXJ2ZXJDb2RlcyIsIkJBRF9SRVFVRVNUIiwianNvbiIsIlVzZXJzIiwiY3JlYXRlIiwicmVzdWx0Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJlcnIiLCJsb2dpbiIsImZpbmRPbmUiLCJlbWFpbCIsInVzZXIiLCJiY3J5cHRqcyIsImNvbXBhcmUiLCJwYXNzd29yZCIsIm1hdGNoZWQiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJqd3QiLCJzaWduIiwiaWQiLCJfaWQiLCJleHBpcmVzSW4iLCJPSyIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O2tCQUVlO0FBQ1BBLFFBRE87QUFBQSx5R0FDQUMsR0FEQSxFQUNLQyxHQURMO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FFY0MsdUJBQVlDLGNBQVosQ0FBMkJILElBQUlJLElBQS9CLENBRmQsRUFFSEMsS0FGRyx5QkFFSEEsS0FGRyxFQUVJQyxLQUZKLHlCQUVJQSxLQUZKOztBQUFBLG9CQUdQRCxTQUFTQSxNQUFNRSxPQUhSO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUlGTixJQUFJTyxNQUFKLENBQVdDLDBCQUFnQkMsV0FBM0IsRUFBd0NDLElBQXhDLENBQTZDTixLQUE3QyxDQUpFOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU9VTyxnQkFBTUMsTUFBTixDQUFhUCxLQUFiLENBUFY7O0FBQUE7QUFPTFEsb0JBUEs7QUFBQSwrQ0FRRmIsSUFBSVUsSUFBSixDQUFTLEVBQUVJLFNBQVMsSUFBWCxFQUFpQkMsU0FBUywyQkFBMUIsRUFBVCxDQVJFOztBQUFBO0FBQUE7QUFBQTs7QUFVVGYsa0JBQUlPLE1BQUosQ0FBV0MsMEJBQWdCUSxxQkFBM0IsRUFBa0ROLElBQWxELENBQXVELEVBQUVPLGdCQUFGLEVBQXZEOztBQVZTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBYVBDLE9BYk87QUFBQSwyR0FhRG5CLEdBYkMsRUFhSUMsR0FiSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBY2NDLHVCQUFZQyxjQUFaLENBQTJCSCxJQUFJSSxJQUEvQixDQWRkLEVBY0hDLEtBZEcsMEJBY0hBLEtBZEcsRUFjSUMsS0FkSiwwQkFjSUEsS0FkSjs7QUFBQSxvQkFlUEQsU0FBU0EsTUFBTUUsT0FmUjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFnQkZOLElBQUlPLE1BQUosQ0FBV0MsMEJBQWdCQyxXQUEzQixFQUF3Q0MsSUFBeEMsQ0FBNkNOLEtBQTdDLENBaEJFOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW1CVU8sZ0JBQU1RLE9BQU4sQ0FBYyxFQUFFQyxPQUFPZixNQUFNZSxLQUFmLEVBQWQsQ0FuQlY7O0FBQUE7QUFtQkhDLGtCQW5CRzs7QUFBQSxrQkFvQkpBLElBcEJJO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQXFCQXJCLElBQUlPLE1BQUosQ0FBV0MsMEJBQWdCQyxXQUEzQixFQUF3Q0MsSUFBeEMsQ0FBNkMsRUFBRU8sS0FBSyxrQ0FBUCxFQUE3QyxDQXJCQTs7QUFBQTtBQUFBO0FBQUEscUJBdUJhSyxtQkFBU0MsT0FBVCxDQUFpQmxCLE1BQU1tQixRQUF2QixFQUFpQ0gsS0FBS0csUUFBdEMsQ0F2QmI7O0FBQUE7QUF1QkhDLHFCQXZCRzs7QUF3QlQ7QUFDQUMsc0JBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixPQUF2Qjs7QUF6QlMsa0JBMEJKQSxPQTFCSTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREEyQkF6QixJQUFJTyxNQUFKLENBQVdDLDBCQUFnQkMsV0FBM0IsRUFBd0NDLElBQXhDLENBQTZDLEVBQUVPLEtBQUssa0JBQVAsRUFBN0MsQ0EzQkE7O0FBQUE7QUE2QkRXLG1CQTdCQyxHQTZCT0MsdUJBQUlDLElBQUosQ0FBUyxFQUFFQyxJQUFJVixLQUFLVyxHQUFYLEVBQVQsRUFBMkIsU0FBM0IsRUFBc0MsRUFBRUMsV0FBVyxJQUFiLEVBQXRDLENBN0JQO0FBQUEsZ0RBOEJBakMsSUFBSU8sTUFBSixDQUFXQywwQkFBZ0IwQixFQUEzQixFQUErQnhCLElBQS9CLENBQW9DLEVBQUVLLFNBQVMsU0FBWCxFQUFzQmEsWUFBdEIsRUFBcEMsQ0E5QkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFpQ1Q1QixrQkFBSU8sTUFBSixDQUFXQywwQkFBZ0JRLHFCQUEzQixFQUFrRE4sSUFBbEQsQ0FBdUQsRUFBRU8saUJBQUYsRUFBdkQ7O0FBakNTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBb0NQa0IsTUFwQ087QUFBQSwyR0FvQ0ZwQyxHQXBDRSxFQW9DR0MsR0FwQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQXFDSkEsSUFBSVUsSUFBSixDQUFTLEVBQUVJLFNBQVMsU0FBWCxFQUFULENBckNJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJ1c2Vycy5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh0dHBTZXJ2ZXJDb2RlcyBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL3VzZXJzLm1vZGVsc1wiO1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSBcIi4vdXNlcnMuc2VydmljZS5qc1wiO1xyXG5pbXBvcnQgeyBUZXN0IH0gZnJvbSBcInRzbGludFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGFzeW5jIHNpZ251cChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5CQURfUkVRVUVTVCkuanNvbihlcnJvcik7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgVXNlcnMuY3JlYXRlKHZhbHVlKTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVc2VyIENyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKHsgZXJyOiBlcnIgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBsb2dpbihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5CQURfUkVRVUVTVCkuanNvbihlcnJvcik7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7IGVtYWlsOiB2YWx1ZS5lbWFpbCB9KTtcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLkJBRF9SRVFVRVNUKS5qc29uKHsgZXJyOiBcIkludmFsaWQgRW1haWwgb3IgZW1haWwgbm90IGV4aXN0XCIgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWF0Y2hlZCA9IGF3YWl0IGJjcnlwdGpzLmNvbXBhcmUodmFsdWUucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAvLyBjb25zdCBtYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWF0Y2hlZFwiLCBtYXRjaGVkKTtcclxuICAgICAgaWYgKCFtYXRjaGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLkJBRF9SRVFVRVNUKS5qc29uKHsgZXJyOiBcIkludmFsaWQgUGFzc3dvcmRcIiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgaWQ6IHVzZXIuX2lkIH0sIFwiYWhnZDEyM1wiLCB7IGV4cGlyZXNJbjogXCIxZFwiIH0pO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5PSykuanNvbih7IG1lc3NhZ2U6IFwic3VjY2Vzc1wiLCB0b2tlbiB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbih7IGVycjogZXJyIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgdGVzdChyZXEsIHJlcykge1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogXCJzdWNjZXNzXCIgfSk7XHJcbiAgfVxyXG59O1xyXG4iXX0=