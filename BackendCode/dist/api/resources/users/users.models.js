"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
UsersSchema.pre("save", (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var salt, hash;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(this.isModified("password") || this.isNew)) {
            _context.next = 9;
            break;
          }

          _context.next = 3;
          return _bcryptjs2.default.genSalt();

        case 3:
          salt = _context.sent;
          _context.next = 6;
          return _bcryptjs2.default.hash(this.password, salt);

        case 6:
          hash = _context.sent;

          this.password = hash;
          console.log("password", this.password);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));
exports.default = _mongoose2.default.model("users", UsersSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXJzLm1vZGVscy5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXJzU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsb3dlcmNhc2UiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInByZSIsImlzTW9kaWZpZWQiLCJpc05ldyIsImJjcnlwdGpzIiwiZ2VuU2FsdCIsInNhbHQiLCJoYXNoIiwiY29uc29sZSIsImxvZyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7OztJQURRQSxNLEdBQVdDLGtCLENBQVhELE07OztBQUdSLElBQU1FLGNBQWMsSUFBSUYsTUFBSixDQUFXO0FBQzdCRyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsY0FBVSxJQUZMO0FBR0xDLGVBQVcsSUFITjtBQUlMQyxZQUFRO0FBSkgsR0FEc0I7QUFPN0JDLFlBQVU7QUFDUkwsVUFBTUMsTUFERTtBQUVSQyxjQUFVO0FBRkY7QUFQbUIsQ0FBWCxDQUFwQjtBQVlBSixZQUFZUSxHQUFaLENBQWdCLE1BQWhCLDJFQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDbEIsS0FBS0MsVUFBTCxDQUFnQixVQUFoQixLQUErQixLQUFLQyxLQURsQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQUVEQyxtQkFBU0MsT0FBVCxFQUZDOztBQUFBO0FBRWRDLGNBRmM7QUFBQTtBQUFBLGlCQUdERixtQkFBU0csSUFBVCxDQUFjLEtBQUtQLFFBQW5CLEVBQTZCTSxJQUE3QixDQUhDOztBQUFBO0FBR2RDLGNBSGM7O0FBSXBCLGVBQUtQLFFBQUwsR0FBZ0JPLElBQWhCO0FBQ0FDLGtCQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QixLQUFLVCxRQUE3Qjs7QUFMb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7a0JBUWVSLG1CQUFTa0IsS0FBVCxDQUFlLE9BQWYsRUFBd0JqQixXQUF4QixDIiwiZmlsZSI6InVzZXJzLm1vZGVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWFUeXBlIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuY29uc3QgVXNlcnNTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBsb3dlcmNhc2U6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWVcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH1cclxufSk7XHJcblVzZXJzU2NoZW1hLnByZShcInNhdmVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMuaXNNb2RpZmllZChcInBhc3N3b3JkXCIpIHx8IHRoaXMuaXNOZXcpIHtcclxuICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHRqcy5nZW5TYWx0KCk7XHJcbiAgICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0anMuaGFzaCh0aGlzLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBoYXNoO1xyXG4gICAgY29uc29sZS5sb2coXCJwYXNzd29yZFwiLCB0aGlzLnBhc3N3b3JkKTtcclxuICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcInVzZXJzXCIsIFVzZXJzU2NoZW1hKTtcclxuIl19