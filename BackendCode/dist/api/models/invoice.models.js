"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

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
exports.default = _mongoose2.default.model("invoice", InvoiceSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2ludm9pY2UubW9kZWxzLmpzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiSW52b2ljZVNjaGVtYSIsIml0ZW0iLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJxdHkiLCJOdW1iZXIiLCJkYXRlIiwiRGF0ZSIsImR1ZSIsInJhdGUiLCJ0YXgiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztJQUNRQSxNLEdBQVdDLGtCLENBQVhELE07O0FBQ1IsSUFBTUUsZ0JBQWdCLElBQUlGLE1BQUosQ0FBVztBQUMvQkcsUUFBTTtBQUNKQyxVQUFNQyxNQURGO0FBRUpDLGNBQVU7QUFGTixHQUR5QjtBQUsvQkMsT0FBSztBQUNISCxVQUFNSTtBQURILEdBTDBCO0FBUS9CQyxRQUFNO0FBQ0pMLFVBQU1NO0FBREYsR0FSeUI7QUFXL0JDLE9BQUs7QUFDSFAsVUFBTU07QUFESCxHQVgwQjtBQWMvQkUsUUFBTTtBQUNKUixVQUFNSTtBQURGLEdBZHlCO0FBaUIvQkssT0FBSztBQUNIVCxVQUFNSTtBQURIO0FBakIwQixDQUFYLENBQXRCO2tCQXFCZVAsbUJBQVNhLEtBQVQsQ0FBZSxTQUFmLEVBQTBCWixhQUExQixDIiwiZmlsZSI6Imludm9pY2UubW9kZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYVR5cGUgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5jb25zdCBJbnZvaWNlU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgaXRlbToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIHF0eToge1xyXG4gICAgdHlwZTogTnVtYmVyXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlXHJcbiAgfSxcclxuICBkdWU6IHtcclxuICAgIHR5cGU6IERhdGVcclxuICB9LFxyXG4gIHJhdGU6IHtcclxuICAgIHR5cGU6IE51bWJlclxyXG4gIH0sXHJcbiAgdGF4OiB7XHJcbiAgICB0eXBlOiBOdW1iZXJcclxuICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcImludm9pY2VcIiwgSW52b2ljZVNjaGVtYSk7XHJcbiJdfQ==