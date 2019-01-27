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

var InvoiceSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvaW52b2ljZS9pbnZvaWNlLm1vZGVscy5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIkludm9pY2VTY2hlbWEiLCJpdGVtIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicXR5IiwiTnVtYmVyIiwiZGF0ZSIsIkRhdGUiLCJkdWUiLCJyYXRlIiwidGF4IiwicGx1Z2luIiwibW9uZ29vc2VQYWdpbmF0ZSIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFDUUEsTSxHQUFXQyxrQixDQUFYRCxNOztBQUNSLElBQU1FLGdCQUFnQixJQUFJRixNQUFKLENBQVc7QUFDL0JHLFFBQU07QUFDSkMsVUFBTUMsTUFERjtBQUVKQyxjQUFVO0FBRk4sR0FEeUI7QUFLL0JDLE9BQUs7QUFDSEgsVUFBTUk7QUFESCxHQUwwQjtBQVEvQkMsUUFBTTtBQUNKTCxVQUFNTTtBQURGLEdBUnlCO0FBVy9CQyxPQUFLO0FBQ0hQLFVBQU1NO0FBREgsR0FYMEI7QUFjL0JFLFFBQU07QUFDSlIsVUFBTUk7QUFERixHQWR5QjtBQWlCL0JLLE9BQUs7QUFDSFQsVUFBTUk7QUFESDtBQWpCMEIsQ0FBWCxDQUF0QjtBQXFCQU4sY0FBY1ksTUFBZCxDQUFxQkMsMEJBQXJCO2tCQUNlZCxtQkFBU2UsS0FBVCxDQUFlLFNBQWYsRUFBMEJkLGFBQTFCLEMiLCJmaWxlIjoiaW52b2ljZS5tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hVHlwZSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgbW9uZ29vc2VQYWdpbmF0ZSBmcm9tIFwibW9uZ29vc2UtcGFnaW5hdGVcIjtcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5jb25zdCBJbnZvaWNlU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgaXRlbToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIHF0eToge1xyXG4gICAgdHlwZTogTnVtYmVyXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlXHJcbiAgfSxcclxuICBkdWU6IHtcclxuICAgIHR5cGU6IERhdGVcclxuICB9LFxyXG4gIHJhdGU6IHtcclxuICAgIHR5cGU6IE51bWJlclxyXG4gIH0sXHJcbiAgdGF4OiB7XHJcbiAgICB0eXBlOiBOdW1iZXJcclxuICB9XHJcbn0pO1xyXG5JbnZvaWNlU2NoZW1hLnBsdWdpbihtb25nb29zZVBhZ2luYXRlKTtcclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJpbnZvaWNlXCIsIEludm9pY2VTY2hlbWEpO1xyXG4iXX0=