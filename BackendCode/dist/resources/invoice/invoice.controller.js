"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _invoice = require("../models/invoice.models");

var _invoice2 = _interopRequireDefault(_invoice);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findAll: function findAll(req, res, next) {
    console.log("inside findAll");
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === undefined ? 1 : _req$query$page,
        _req$query$limit = _req$query.limit,
        limit = _req$query$limit === undefined ? 10 : _req$query$limit,
        filter = _req$query.filter,
        sortItem = _req$query.sortItem,
        sortOrder = _req$query.sortOrder;

    var options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10)
    };
    var query = {};
    if (filter) {
      query.item = {
        $regex: filter
      };
    }
    if (sortItem && sortOrder) {
      options.sort = (0, _defineProperty3.default)({}, sortItem, sortOrder);
    }
    console.log(options);
    _invoice2.default.paginate(query, options).then(function (invoices) {
      return res.json(invoices);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error);
    });
  },
  create: function create(req, res, next) {
    console.log("inside create", req.body);
    // let error = new Error({ message: 'error from create' });
    // error.status = 404;
    // next(error);
    // let { item, qty, date, due, tax, rate } = req.body;

    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().required(),
      date: _joi2.default.date().required(),
      due: _joi2.default.date().required(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.date().required(),
      qty: _joi2.default.number().required()
    });

    var _Joi$validate = _joi2.default.validate(req.body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;
    // console.log('value of req', value);


    if (error && error.details) {
      return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
    }

    _invoice2.default.create(value).then(function (invoice) {
      res.json(invoice);
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ err: "error while inserting data" });
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _invoice2.default.findById(id).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "could not find any voice" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ err: "error while inserting data" });
    });
  },
  deleteRecord: function deleteRecord(req, res) {
    var id = req.params.id;

    _invoice2.default.findByIdAndDelete(id).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "could not find the record" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ err: "error while inserting data" });
    });
  },
  update: function update(req, res) {
    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().optional(),
      date: _joi2.default.date().optional(),
      due: _joi2.default.date().optional(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.date().optional(),
      qty: _joi2.default.number().optional()
    });
    var id = req.params.id;

    var _Joi$validate2 = _joi2.default.validate(req.body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

    if (error && error.details) {
      return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
    }
    _invoice2.default.findOneAndUpdate({ _id: id }, value, { new: true }).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "could not find the record" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ err: "error while updating data" });
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvaW52b2ljZS9pbnZvaWNlLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZEFsbCIsInJlcSIsInJlcyIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJwYWdlIiwibGltaXQiLCJmaWx0ZXIiLCJzb3J0SXRlbSIsInNvcnRPcmRlciIsIm9wdGlvbnMiLCJwYXJzZUludCIsIml0ZW0iLCIkcmVnZXgiLCJzb3J0IiwiSW52b2ljZSIsInBhZ2luYXRlIiwidGhlbiIsImpzb24iLCJpbnZvaWNlcyIsImNhdGNoIiwic3RhdHVzIiwiSHR0cFNlcnZlckNvZGVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyb3IiLCJjcmVhdGUiLCJib2R5Iiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsInN0cmluZyIsInJlcXVpcmVkIiwiZGF0ZSIsImR1ZSIsInRheCIsIm51bWJlciIsIm9wdGlvbmFsIiwicmF0ZSIsInF0eSIsInZhbGlkYXRlIiwidmFsdWUiLCJkZXRhaWxzIiwiQkFEX1JFUVVFU1QiLCJpbnZvaWNlIiwiZXJyIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJOT1RfRk9VTkQiLCJkZWxldGVSZWNvcmQiLCJmaW5kQnlJZEFuZERlbGV0ZSIsInVwZGF0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCJuZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFDZTtBQUNiQSxTQURhLG1CQUNMQyxHQURLLEVBQ0FDLEdBREEsRUFDS0MsSUFETCxFQUNXO0FBQ3RCQyxZQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFEc0IscUJBRXdDSixJQUFJSyxLQUY1QztBQUFBLHFDQUVkQyxJQUZjO0FBQUEsUUFFZEEsSUFGYyxtQ0FFUCxDQUZPO0FBQUEsc0NBRUpDLEtBRkk7QUFBQSxRQUVKQSxLQUZJLG9DQUVJLEVBRko7QUFBQSxR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QU1WLGNBQUlLLElBQUosR0FBV0ksUUFBWCxFQUx5QjtBQU0vQkUsV0FBS1gsY0FBSVEsTUFBSixHQUFhQyxRQUFiO0FBTjBCLEtBQWxCLENBQWY7QUFEZSxRQVNQVSxFQVRPLEdBU0FoRCxJQUFJaUQsTUFUSixDQVNQRCxFQVRPOztBQUFBLHlCQVVVbkIsY0FBSVksUUFBSixDQUFhekMsSUFBSTJCLElBQWpCLEVBQXVCQyxNQUF2QixDQVZWO0FBQUEsUUFVUEgsS0FWTyxrQkFVUEEsS0FWTztBQUFBLFFBVUFpQixLQVZBLGtCQVVBQSxLQVZBOztBQVdmLFFBQUlqQixTQUFTQSxNQUFNa0IsT0FBbkIsRUFBNEI7QUFDMUIsYUFBTzFDLElBQUlxQixNQUFKLENBQVdDLDBCQUFnQnFCLFdBQTNCLEVBQXdDekIsSUFBeEMsQ0FBNkNNLEtBQTdDLENBQVA7QUFDRDtBQUNEVCxzQkFBUXVDLGdCQUFSLENBQXlCLEVBQUVDLEtBQUtSLEVBQVAsRUFBekIsRUFBc0NOLEtBQXRDLEVBQTZDLEVBQUVlLEtBQUssSUFBUCxFQUE3QyxFQUNHdkMsSUFESCxDQUNRLG1CQUFXO0FBQ2YsVUFBSSxDQUFDMkIsT0FBTCxFQUFjO0FBQ1osZUFBTzVDLElBQUlxQixNQUFKLENBQVdDLDBCQUFnQjRCLFNBQTNCLEVBQXNDaEMsSUFBdEMsQ0FBMkMsRUFBRTJCLEtBQUssMkJBQVAsRUFBM0MsQ0FBUDtBQUNEO0FBQ0QsYUFBTzdDLElBQUlrQixJQUFKLENBQVMwQixPQUFULENBQVA7QUFDRCxLQU5ILEVBT0d4QixLQVBILENBT1MsZUFBTztBQUNacEIsVUFBSXFCLE1BQUosQ0FBV0MsMEJBQWdCQyxxQkFBM0IsRUFBa0RMLElBQWxELENBQXVELEVBQUUyQixLQUFLLDJCQUFQLEVBQXZEO0FBQ0QsS0FUSDtBQVVEO0FBMUdZLEMiLCJmaWxlIjoiaW52b2ljZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludm9pY2UgZnJvbSBcIi4uL21vZGVscy9pbnZvaWNlLm1vZGVsc1wiO1xyXG5pbXBvcnQgSHR0cFNlcnZlckNvZGVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5pbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGZpbmRBbGwocmVxLCByZXMsIG5leHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGZpbmRBbGxcIik7XHJcbiAgICBjb25zdCB7IHBhZ2UgPSAxLCBsaW1pdCA9IDEwLCBmaWx0ZXIsIHNvcnRJdGVtLCBzb3J0T3JkZXIgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHBhZ2U6IHBhcnNlSW50KHBhZ2UsIDEwKSxcclxuICAgICAgbGltaXQ6IHBhcnNlSW50KGxpbWl0LCAxMClcclxuICAgIH07XHJcbiAgICBsZXQgcXVlcnkgPSB7fTtcclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgcXVlcnkuaXRlbSA9IHtcclxuICAgICAgICAkcmVnZXg6IGZpbHRlclxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRJdGVtICYmIHNvcnRPcmRlcikge1xyXG4gICAgICBvcHRpb25zLnNvcnQgPSB7XHJcbiAgICAgICAgW3NvcnRJdGVtXTogc29ydE9yZGVyXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgIEludm9pY2UucGFnaW5hdGUocXVlcnksIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKGludm9pY2VzID0+IHJlcy5qc29uKGludm9pY2VzKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgY3JlYXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBjcmVhdGVcIiwgcmVxLmJvZHkpO1xyXG4gICAgLy8gbGV0IGVycm9yID0gbmV3IEVycm9yKHsgbWVzc2FnZTogJ2Vycm9yIGZyb20gY3JlYXRlJyB9KTtcclxuICAgIC8vIGVycm9yLnN0YXR1cyA9IDQwNDtcclxuICAgIC8vIG5leHQoZXJyb3IpO1xyXG4gICAgLy8gbGV0IHsgaXRlbSwgcXR5LCBkYXRlLCBkdWUsIHRheCwgcmF0ZSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgZGF0ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBkdWU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgdGF4OiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICAgICAgcmF0ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBxdHk6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbHVlIG9mIHJlcScsIHZhbHVlKTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5CQURfUkVRVUVTVCkuanNvbihlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgSW52b2ljZS5jcmVhdGUodmFsdWUpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oeyBlcnI6IFwiZXJyb3Igd2hpbGUgaW5zZXJ0aW5nIGRhdGFcIiB9KTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgSW52b2ljZS5maW5kQnlJZChpZClcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuTk9UX0ZPVU5EKS5qc29uKHsgZXJyOiBcImNvdWxkIG5vdCBmaW5kIGFueSB2b2ljZVwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbih7IGVycjogXCJlcnJvciB3aGlsZSBpbnNlcnRpbmcgZGF0YVwiIH0pO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIGRlbGV0ZVJlY29yZChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIEludm9pY2UuZmluZEJ5SWRBbmREZWxldGUoaWQpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLk5PVF9GT1VORCkuanNvbih7IGVycjogXCJjb3VsZCBub3QgZmluZCB0aGUgcmVjb3JkXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKHsgZXJyOiBcImVycm9yIHdoaWxlIGluc2VydGluZyBkYXRhXCIgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgIGl0ZW06IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBkYXRlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIGR1ZTogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxyXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICByYXRlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIHF0eTogSm9pLm51bWJlcigpLm9wdGlvbmFsKClcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgSW52b2ljZS5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB2YWx1ZSwgeyBuZXc6IHRydWUgfSlcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuTk9UX0ZPVU5EKS5qc29uKHsgZXJyOiBcImNvdWxkIG5vdCBmaW5kIHRoZSByZWNvcmRcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oeyBlcnI6IFwiZXJyb3Igd2hpbGUgdXBkYXRpbmcgZGF0YVwiIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdfQ==