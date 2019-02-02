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
  },
  google: {
    email: String,
    id: String,
    displayName: String,
    token: String
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXJzLm1vZGVscy5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXJzU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsb3dlcmNhc2UiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImdvb2dsZSIsImlkIiwiZGlzcGxheU5hbWUiLCJ0b2tlbiIsInByZSIsImlzTW9kaWZpZWQiLCJpc05ldyIsImJjcnlwdGpzIiwiZ2VuU2FsdCIsInNhbHQiLCJoYXNoIiwiY29uc29sZSIsImxvZyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7OztJQURRQSxNLEdBQVdDLGtCLENBQVhELE07OztBQUdSLElBQU1FLGNBQWMsSUFBSUYsTUFBSixDQUFXO0FBQzdCRyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsY0FBVSxJQUZMO0FBR0xDLGVBQVcsSUFITjtBQUlMQyxZQUFRO0FBSkgsR0FEc0I7QUFPN0JDLFlBQVU7QUFDUkwsVUFBTUMsTUFERTtBQUVSQyxjQUFVO0FBRkYsR0FQbUI7QUFXN0JJLFVBQVE7QUFDTlAsV0FBT0UsTUFERDtBQUVOTSxRQUFJTixNQUZFO0FBR05PLGlCQUFhUCxNQUhQO0FBSU5RLFdBQU9SO0FBSkQ7QUFYcUIsQ0FBWCxDQUFwQjtBQWtCQUgsWUFBWVksR0FBWixDQUFnQixNQUFoQiwyRUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ2xCLEtBQUtDLFVBQUwsQ0FBZ0IsVUFBaEIsS0FBK0IsS0FBS0MsS0FEbEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFFREMsbUJBQVNDLE9BQVQsRUFGQzs7QUFBQTtBQUVkQyxjQUZjO0FBQUE7QUFBQSxpQkFHREYsbUJBQVNHLElBQVQsQ0FBYyxLQUFLWCxRQUFuQixFQUE2QlUsSUFBN0IsQ0FIQzs7QUFBQTtBQUdkQyxjQUhjOztBQUlwQixlQUFLWCxRQUFMLEdBQWdCVyxJQUFoQjtBQUNBQyxrQkFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0IsS0FBS2IsUUFBN0I7O0FBTG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO2tCQVFlUixtQkFBU3NCLEtBQVQsQ0FBZSxPQUFmLEVBQXdCckIsV0FBeEIsQyIsImZpbGUiOiJ1c2Vycy5tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hVHlwZSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbmNvbnN0IFVzZXJzU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbG93ZXJjYXNlOiB0cnVlLFxyXG4gICAgdW5pcXVlOiB0cnVlXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGdvb2dsZToge1xyXG4gICAgZW1haWw6IFN0cmluZyxcclxuICAgIGlkOiBTdHJpbmcsXHJcbiAgICBkaXNwbGF5TmFtZTogU3RyaW5nLFxyXG4gICAgdG9rZW46IFN0cmluZ1xyXG4gIH1cclxufSk7XHJcblVzZXJzU2NoZW1hLnByZShcInNhdmVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMuaXNNb2RpZmllZChcInBhc3N3b3JkXCIpIHx8IHRoaXMuaXNOZXcpIHtcclxuICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHRqcy5nZW5TYWx0KCk7XHJcbiAgICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0anMuaGFzaCh0aGlzLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBoYXNoO1xyXG4gICAgY29uc29sZS5sb2coXCJwYXNzd29yZFwiLCB0aGlzLnBhc3N3b3JkKTtcclxuICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcInVzZXJzXCIsIFVzZXJzU2NoZW1hKTtcclxuIl19