"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require("mongoose-paginate");

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

var _client = require("../client/client.models");

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var InvoiceSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  },
  client: {
    ref: _client2.default,
    type: Schema.Types.ObjectId,
    required: true
  },
  date: {
    type: Date
  },
  due: {
    type: Date
  },
  rate: {
    type: Number
  },
  tax: {
    type: Number
  }
});
InvoiceSchema.plugin(_mongoosePaginate2.default);
exports.default = _mongoose2.default.model("invoice", InvoiceSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5tb2RlbHMuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJJbnZvaWNlU2NoZW1hIiwiaXRlbSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInF0eSIsIk51bWJlciIsImNsaWVudCIsInJlZiIsIkNsaWVudCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJkYXRlIiwiRGF0ZSIsImR1ZSIsInJhdGUiLCJ0YXgiLCJwbHVnaW4iLCJtb25nb29zZVBhZ2luYXRlIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0lBRFFBLE0sR0FBV0Msa0IsQ0FBWEQsTTs7O0FBR1IsSUFBTUUsZ0JBQWdCLElBQUlGLE1BQUosQ0FBVztBQUMvQkcsUUFBTTtBQUNKQyxVQUFNQyxNQURGO0FBRUpDLGNBQVU7QUFGTixHQUR5QjtBQUsvQkMsT0FBSztBQUNISCxVQUFNSTtBQURILEdBTDBCO0FBUS9CQyxVQUFRO0FBQ05DLFNBQUtDLGdCQURDO0FBRU5QLFVBQU1KLE9BQU9ZLEtBQVAsQ0FBYUMsUUFGYjtBQUdOUCxjQUFVO0FBSEosR0FSdUI7QUFhL0JRLFFBQU07QUFDSlYsVUFBTVc7QUFERixHQWJ5QjtBQWdCL0JDLE9BQUs7QUFDSFosVUFBTVc7QUFESCxHQWhCMEI7QUFtQi9CRSxRQUFNO0FBQ0piLFVBQU1JO0FBREYsR0FuQnlCO0FBc0IvQlUsT0FBSztBQUNIZCxVQUFNSTtBQURIO0FBdEIwQixDQUFYLENBQXRCO0FBMEJBTixjQUFjaUIsTUFBZCxDQUFxQkMsMEJBQXJCO2tCQUNlbkIsbUJBQVNvQixLQUFULENBQWUsU0FBZixFQUEwQm5CLGFBQTFCLEMiLCJmaWxlIjoiaW52b2ljZS5tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hVHlwZSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgbW9uZ29vc2VQYWdpbmF0ZSBmcm9tIFwibW9uZ29vc2UtcGFnaW5hdGVcIjtcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5pbXBvcnQgQ2xpZW50IGZyb20gXCIuLi9jbGllbnQvY2xpZW50Lm1vZGVsc1wiO1xyXG5cclxuY29uc3QgSW52b2ljZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIGl0ZW06IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBxdHk6IHtcclxuICAgIHR5cGU6IE51bWJlclxyXG4gIH0sXHJcbiAgY2xpZW50OiB7XHJcbiAgICByZWY6IENsaWVudCxcclxuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlXHJcbiAgfSxcclxuICBkdWU6IHtcclxuICAgIHR5cGU6IERhdGVcclxuICB9LFxyXG4gIHJhdGU6IHtcclxuICAgIHR5cGU6IE51bWJlclxyXG4gIH0sXHJcbiAgdGF4OiB7XHJcbiAgICB0eXBlOiBOdW1iZXJcclxuICB9XHJcbn0pO1xyXG5JbnZvaWNlU2NoZW1hLnBsdWdpbihtb25nb29zZVBhZ2luYXRlKTtcclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJpbnZvaWNlXCIsIEludm9pY2VTY2hlbWEpO1xyXG4iXX0=