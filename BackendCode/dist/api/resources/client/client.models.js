"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require("mongoose-paginate");

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ClientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
ClientSchema.plugin(_mongoosePaginate2.default);
exports.default = _mongoose2.default.model("client", ClientSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQubW9kZWxzLmpzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiQ2xpZW50U2NoZW1hIiwiZmlyc3ROYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibGFzdE5hbWUiLCJlbWFpbCIsInBsdWdpbiIsIm1vbmdvb3NlUGFnaW5hdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBQ1FBLE0sR0FBV0Msa0IsQ0FBWEQsTTs7QUFDUixJQUFNRSxlQUFlLElBQUlGLE1BQUosQ0FBVztBQUM5QkcsYUFBVztBQUNUQyxVQUFNQyxNQURHO0FBRVRDLGNBQVU7QUFGRCxHQURtQjtBQUs5QkMsWUFBVTtBQUNSSCxVQUFNQyxNQURFO0FBRVJDLGNBQVU7QUFGRixHQUxvQjtBQVM5QkUsU0FBTztBQUNMSixVQUFNQyxNQUREO0FBRUxDLGNBQVU7QUFGTDtBQVR1QixDQUFYLENBQXJCO0FBY0FKLGFBQWFPLE1BQWIsQ0FBb0JDLDBCQUFwQjtrQkFDZVQsbUJBQVNVLEtBQVQsQ0FBZSxRQUFmLEVBQXlCVCxZQUF6QixDIiwiZmlsZSI6ImNsaWVudC5tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hVHlwZSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgbW9uZ29vc2VQYWdpbmF0ZSBmcm9tIFwibW9uZ29vc2UtcGFnaW5hdGVcIjtcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5jb25zdCBDbGllbnRTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBmaXJzdE5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBsYXN0TmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH1cclxufSk7XHJcbkNsaWVudFNjaGVtYS5wbHVnaW4obW9uZ29vc2VQYWdpbmF0ZSk7XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiY2xpZW50XCIsIENsaWVudFNjaGVtYSk7XHJcbiJdfQ==