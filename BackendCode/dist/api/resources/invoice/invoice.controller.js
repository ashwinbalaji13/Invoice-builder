"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _invoice = require("./invoice.models");

var _invoice2 = _interopRequireDefault(_invoice);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _client = require("../client/client.models");

var _client2 = _interopRequireDefault(_client);

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
      limit: parseInt(limit, 10),
      populate: "client"
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
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
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
      qty: _joi2.default.number().required(),
      client: _joi2.default.string().required()
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
      qty: _joi2.default.number().optional(),
      client: _joi2.default.string().optional()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwicGFnZSIsImxpbWl0IiwiZmlsdGVyIiwic29ydEl0ZW0iLCJzb3J0T3JkZXIiLCJvcHRpb25zIiwicGFyc2VJbnQiLCJwb3B1bGF0ZSIsIml0ZW0iLCIkcmVnZXgiLCJzb3J0IiwiSW52b2ljZSIsInBhZ2luYXRlIiwidGhlbiIsImpzb24iLCJpbnZvaWNlcyIsImNhdGNoIiwic3RhdHVzIiwiSHR0cFNlcnZlckNvZGVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwiY3JlYXRlIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJzdHJpbmciLCJyZXF1aXJlZCIsImRhdGUiLCJkdWUiLCJ0YXgiLCJudW1iZXIiLCJvcHRpb25hbCIsInJhdGUiLCJxdHkiLCJjbGllbnQiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiQkFEX1JFUVVFU1QiLCJpbnZvaWNlIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJOT1RfRk9VTkQiLCJkZWxldGVSZWNvcmQiLCJmaW5kQnlJZEFuZERlbGV0ZSIsInVwZGF0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCJuZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2JBLFNBRGEsbUJBQ0xDLEdBREssRUFDQUMsR0FEQSxFQUNLQyxJQURMLEVBQ1c7QUFDdEJDLFlBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQURzQixxQkFFd0NKLElBQUlLLEtBRjVDO0FBQUEscUNBRWRDLElBRmM7QUFBQSxRQUVkQSxJQUZjLG1DQUVQLENBRk87QUFBQSxzQ0FFSkMsS0FGSTtBQUFBLFFBRUpBLEtBRkksb0NBRUksRUFGSjtBQUFBLFFBRVFDLE1BRlIsY0FFUUEsTUFGUjtBQUFBLFFBRWdCQyxRQUZoQixjQUVnQkEsUUFGaEI7QUFBQSxRQUUwQkMsU0FGMUIsY0FFMEJBLFNBRjFCOztBQUd0QixRQUFNQyxVQUFVO0FBQ2RMLFlBQU1NLFNBQVNOLElBQVQsRUFBZSxFQUFmLENBRFE7QUFFZEMsYUFBT0ssU0FBU0wsS0FBVCxFQUFnQixFQUFoQixDQUZPO0FBR2RNLGdCQUFVO0FBSEksS0FBaEI7QUFLQSxRQUFJUixRQUFRLEVBQVo7QUFDQSxRQUFJRyxNQUFKLEVBQVk7QUFDVkgsWUFBTVMsSUFBTixHQUFhO0FBQ1hDLGdCQUFRUDtBQURHLE9BQWI7QUFHRDtBQUNELFFBQUlDLFlBQVlDLFNBQWhCLEVBQTJCO0FBQ3pCQyxjQUFRSyxJQUFSLHFDQUNHUCxRQURILEVBQ2NDLFNBRGQ7QUFHRDtBQUNEUCxZQUFRQyxHQUFSLENBQVlPLE9BQVo7QUFDQU0sc0JBQVFDLFFBQVIsQ0FBaUJiLEtBQWpCLEVBQXdCTSxPQUF4QixFQUNHUSxJQURILENBQ1E7QUFBQSxhQUFZbEIsSUFBSW1CLElBQUosQ0FBU0MsUUFBVCxDQUFaO0FBQUEsS0FEUixFQUVHQyxLQUZILENBRVMsZUFBTztBQUNaLGFBQU9yQixJQUFJc0IsTUFBSixDQUFXQywwQkFBZ0JDLHFCQUEzQixFQUFrREwsSUFBbEQsQ0FBdURNLEdBQXZELENBQVA7QUFDRCxLQUpIO0FBS0QsR0ExQlk7QUEyQmJDLFFBM0JhLGtCQTJCTjNCLEdBM0JNLEVBMkJEQyxHQTNCQyxFQTJCSUMsSUEzQkosRUEyQlU7QUFDckJDLFlBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSixJQUFJNEIsSUFBakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFNQyxTQUFTQyxjQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDL0JsQixZQUFNZ0IsY0FBSUcsTUFBSixHQUFhQyxRQUFiLEVBRHlCO0FBRS9CQyxZQUFNTCxjQUFJSyxJQUFKLEdBQVdELFFBQVgsRUFGeUI7QUFHL0JFLFdBQUtOLGNBQUlLLElBQUosR0FBV0QsUUFBWCxFQUgwQjtBQUkvQkcsV0FBS1AsY0FBSVEsTUFBSixHQUFhQyxRQUFiLEVBSjBCO0FBSy9CQyxZQUFNVixjQUFJSyxJQUFKLEdBQVdELFFBQVgsRUFMeUI7QUFNL0JPLFdBQUtYLGNBQUlRLE1BQUosR0FBYUosUUFBYixFQU4wQjtBQU8vQlEsY0FBUVosY0FBSUcsTUFBSixHQUFhQyxRQUFiO0FBUHVCLEtBQWxCLENBQWY7O0FBUHFCLHdCQWlCSUosY0FBSWEsUUFBSixDQUFhM0MsSUFBSTRCLElBQWpCLEVBQXVCQyxNQUF2QixDQWpCSjtBQUFBLFFBaUJiZSxLQWpCYSxpQkFpQmJBLEtBakJhO0FBQUEsUUFpQk5DLEtBakJNLGlCQWlCTkEsS0FqQk07QUFrQnJCOzs7QUFDQSxRQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUMxQixhQUFPN0MsSUFBSXNCLE1BQUosQ0FBV0MsMEJBQWdCdUIsV0FBM0IsRUFBd0MzQixJQUF4QyxDQUE2Q3dCLEtBQTdDLENBQVA7QUFDRDs7QUFFRDNCLHNCQUFRVSxNQUFSLENBQWVrQixLQUFmLEVBQ0cxQixJQURILENBQ1EsbUJBQVc7QUFDZmxCLFVBQUltQixJQUFKLENBQVM0QixPQUFUO0FBQ0QsS0FISCxFQUlHMUIsS0FKSCxDQUlTLGVBQU87QUFDWnJCLFVBQUlzQixNQUFKLENBQVdDLDBCQUFnQkMscUJBQTNCLEVBQWtETCxJQUFsRCxDQUF1RCxFQUFFTSxLQUFLLDRCQUFQLEVBQXZEO0FBQ0QsS0FOSDtBQU9ELEdBekRZO0FBMERidUIsU0ExRGEsbUJBMERMakQsR0ExREssRUEwREFDLEdBMURBLEVBMERLO0FBQUEsUUFDUmlELEVBRFEsR0FDRGxELElBQUltRCxNQURILENBQ1JELEVBRFE7O0FBRWhCakMsc0JBQVFtQyxRQUFSLENBQWlCRixFQUFqQixFQUNHL0IsSUFESCxDQUNRLG1CQUFXO0FBQ2YsVUFBSSxDQUFDNkIsT0FBTCxFQUFjO0FBQ1osZUFBTy9DLElBQUlzQixNQUFKLENBQVdDLDBCQUFnQjZCLFNBQTNCLEVBQXNDakMsSUFBdEMsQ0FBMkMsRUFBRU0sS0FBSywwQkFBUCxFQUEzQyxDQUFQO0FBQ0Q7QUFDRCxhQUFPekIsSUFBSW1CLElBQUosQ0FBUzRCLE9BQVQsQ0FBUDtBQUNELEtBTkgsRUFPRzFCLEtBUEgsQ0FPUyxlQUFPO0FBQ1pyQixVQUFJc0IsTUFBSixDQUFXQywwQkFBZ0JDLHFCQUEzQixFQUFrREwsSUFBbEQsQ0FBdUQsRUFBRU0sS0FBSyw0QkFBUCxFQUF2RDtBQUNELEtBVEg7QUFVRCxHQXRFWTtBQXVFYjRCLGNBdkVhLHdCQXVFQXRELEdBdkVBLEVBdUVLQyxHQXZFTCxFQXVFVTtBQUFBLFFBQ2JpRCxFQURhLEdBQ05sRCxJQUFJbUQsTUFERSxDQUNiRCxFQURhOztBQUVyQmpDLHNCQUFRc0MsaUJBQVIsQ0FBMEJMLEVBQTFCLEVBQ0cvQixJQURILENBQ1EsbUJBQVc7QUFDZixVQUFJLENBQUM2QixPQUFMLEVBQWM7QUFDWixlQUFPL0MsSUFBSXNCLE1BQUosQ0FBV0MsMEJBQWdCNkIsU0FBM0IsRUFBc0NqQyxJQUF0QyxDQUEyQyxFQUFFTSxLQUFLLDJCQUFQLEVBQTNDLENBQVA7QUFDRDtBQUNELGFBQU96QixJQUFJbUIsSUFBSixDQUFTNEIsT0FBVCxDQUFQO0FBQ0QsS0FOSCxFQU9HMUIsS0FQSCxDQU9TLGVBQU87QUFDWnJCLFVBQUlzQixNQUFKLENBQVdDLDBCQUFnQkMscUJBQTNCLEVBQWtETCxJQUFsRCxDQUF1RCxFQUFFTSxLQUFLLDRCQUFQLEVBQXZEO0FBQ0QsS0FUSDtBQVVELEdBbkZZO0FBb0ZiOEIsUUFwRmEsa0JBb0ZOeEQsR0FwRk0sRUFvRkRDLEdBcEZDLEVBb0ZJO0FBQ2YsUUFBTTRCLFNBQVNDLGNBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUMvQmxCLFlBQU1nQixjQUFJRyxNQUFKLEdBQWFNLFFBQWIsRUFEeUI7QUFFL0JKLFlBQU1MLGNBQUlLLElBQUosR0FBV0ksUUFBWCxFQUZ5QjtBQUcvQkgsV0FBS04sY0FBSUssSUFBSixHQUFXSSxRQUFYLEVBSDBCO0FBSS9CRixXQUFLUCxjQUFJUSxNQUFKLEdBQWFDLFFBQWIsRUFKMEI7QUFLL0JDLFlBQU1WLGNBQUlLLElBQUosR0FBV0ksUUFBWCxFQUx5QjtBQU0vQkUsV0FBS1gsY0FBSVEsTUFBSixHQUFhQyxRQUFiLEVBTjBCO0FBTy9CRyxjQUFRWixjQUFJRyxNQUFKLEdBQWFNLFFBQWI7QUFQdUIsS0FBbEIsQ0FBZjtBQURlLFFBVVBXLEVBVk8sR0FVQWxELElBQUltRCxNQVZKLENBVVBELEVBVk87O0FBQUEseUJBV1VwQixjQUFJYSxRQUFKLENBQWEzQyxJQUFJNEIsSUFBakIsRUFBdUJDLE1BQXZCLENBWFY7QUFBQSxRQVdQZSxLQVhPLGtCQVdQQSxLQVhPO0FBQUEsUUFXQUMsS0FYQSxrQkFXQUEsS0FYQTs7QUFZZixRQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUMxQixhQUFPN0MsSUFBSXNCLE1BQUosQ0FBV0MsMEJBQWdCdUIsV0FBM0IsRUFBd0MzQixJQUF4QyxDQUE2Q3dCLEtBQTdDLENBQVA7QUFDRDtBQUNEM0Isc0JBQVF3QyxnQkFBUixDQUF5QixFQUFFQyxLQUFLUixFQUFQLEVBQXpCLEVBQXNDTCxLQUF0QyxFQUE2QyxFQUFFYyxLQUFLLElBQVAsRUFBN0MsRUFDR3hDLElBREgsQ0FDUSxtQkFBVztBQUNmLFVBQUksQ0FBQzZCLE9BQUwsRUFBYztBQUNaLGVBQU8vQyxJQUFJc0IsTUFBSixDQUFXQywwQkFBZ0I2QixTQUEzQixFQUFzQ2pDLElBQXRDLENBQTJDLEVBQUVNLEtBQUssMkJBQVAsRUFBM0MsQ0FBUDtBQUNEO0FBQ0QsYUFBT3pCLElBQUltQixJQUFKLENBQVM0QixPQUFULENBQVA7QUFDRCxLQU5ILEVBT0cxQixLQVBILENBT1MsZUFBTztBQUNackIsVUFBSXNCLE1BQUosQ0FBV0MsMEJBQWdCQyxxQkFBM0IsRUFBa0RMLElBQWxELENBQXVELEVBQUVNLEtBQUssMkJBQVAsRUFBdkQ7QUFDRCxLQVRIO0FBVUQ7QUE3R1ksQyIsImZpbGUiOiJpbnZvaWNlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW52b2ljZSBmcm9tIFwiLi9pbnZvaWNlLm1vZGVsc1wiO1xyXG5pbXBvcnQgSHR0cFNlcnZlckNvZGVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5pbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcclxuaW1wb3J0IENsaWVudCBmcm9tIFwiLi4vY2xpZW50L2NsaWVudC5tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBmaW5kQWxsKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBmaW5kQWxsXCIpO1xyXG4gICAgY29uc3QgeyBwYWdlID0gMSwgbGltaXQgPSAxMCwgZmlsdGVyLCBzb3J0SXRlbSwgc29ydE9yZGVyIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBwYWdlOiBwYXJzZUludChwYWdlLCAxMCksXHJcbiAgICAgIGxpbWl0OiBwYXJzZUludChsaW1pdCwgMTApLFxyXG4gICAgICBwb3B1bGF0ZTogXCJjbGllbnRcIlxyXG4gICAgfTtcclxuICAgIGxldCBxdWVyeSA9IHt9O1xyXG4gICAgaWYgKGZpbHRlcikge1xyXG4gICAgICBxdWVyeS5pdGVtID0ge1xyXG4gICAgICAgICRyZWdleDogZmlsdGVyXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoc29ydEl0ZW0gJiYgc29ydE9yZGVyKSB7XHJcbiAgICAgIG9wdGlvbnMuc29ydCA9IHtcclxuICAgICAgICBbc29ydEl0ZW1dOiBzb3J0T3JkZXJcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgSW52b2ljZS5wYWdpbmF0ZShxdWVyeSwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oaW52b2ljZXMgPT4gcmVzLmpzb24oaW52b2ljZXMpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgY3JlYXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBjcmVhdGVcIiwgcmVxLmJvZHkpO1xyXG4gICAgLy8gbGV0IGVycm9yID0gbmV3IEVycm9yKHsgbWVzc2FnZTogJ2Vycm9yIGZyb20gY3JlYXRlJyB9KTtcclxuICAgIC8vIGVycm9yLnN0YXR1cyA9IDQwNDtcclxuICAgIC8vIG5leHQoZXJyb3IpO1xyXG4gICAgLy8gbGV0IHsgaXRlbSwgcXR5LCBkYXRlLCBkdWUsIHRheCwgcmF0ZSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgZGF0ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBkdWU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgdGF4OiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICAgICAgcmF0ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBxdHk6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBjbGllbnQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbHVlIG9mIHJlcScsIHZhbHVlKTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5CQURfUkVRVUVTVCkuanNvbihlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgSW52b2ljZS5jcmVhdGUodmFsdWUpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oeyBlcnI6IFwiZXJyb3Igd2hpbGUgaW5zZXJ0aW5nIGRhdGFcIiB9KTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgSW52b2ljZS5maW5kQnlJZChpZClcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuTk9UX0ZPVU5EKS5qc29uKHsgZXJyOiBcImNvdWxkIG5vdCBmaW5kIGFueSB2b2ljZVwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbih7IGVycjogXCJlcnJvciB3aGlsZSBpbnNlcnRpbmcgZGF0YVwiIH0pO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIGRlbGV0ZVJlY29yZChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIEludm9pY2UuZmluZEJ5SWRBbmREZWxldGUoaWQpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLk5PVF9GT1VORCkuanNvbih7IGVycjogXCJjb3VsZCBub3QgZmluZCB0aGUgcmVjb3JkXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKHsgZXJyOiBcImVycm9yIHdoaWxlIGluc2VydGluZyBkYXRhXCIgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgIGl0ZW06IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBkYXRlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIGR1ZTogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxyXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICByYXRlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIHF0eTogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIGNsaWVudDogSm9pLnN0cmluZygpLm9wdGlvbmFsKClcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgSW52b2ljZS5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB2YWx1ZSwgeyBuZXc6IHRydWUgfSlcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuTk9UX0ZPVU5EKS5qc29uKHsgZXJyOiBcImNvdWxkIG5vdCBmaW5kIHRoZSByZWNvcmRcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oeyBlcnI6IFwiZXJyb3Igd2hpbGUgdXBkYXRpbmcgZGF0YVwiIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdfQ==