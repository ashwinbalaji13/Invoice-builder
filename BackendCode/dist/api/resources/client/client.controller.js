"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _client = require("./client.models");

var _client2 = _interopRequireDefault(_client);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findAll: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("inside findAll");
              // const { page = 1, limit = 10, filter, sortItem, sortOrder } = req.query;
              // const options = {
              //   page: parseInt(page, 10),
              //   limit: parseInt(limit, 10)
              // };
              // let query = {};
              // if (filter) {
              //   query.item = {
              //     $regex: filter
              //   };
              // }
              // if (sortItem && sortOrder) {
              //   options.sort = {
              //     [sortItem]: sortOrder
              //   };
              // }
              // console.log(options);
              _context.prev = 1;
              _context.next = 4;
              return _client2.default.find({});

            case 4:
              result = _context.sent;

              res.json(result);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 8]]);
    }));

    function findAll(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return findAll;
  }(),
  create: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
      var schema, _Joi$validate, error, value, result;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("inside create", req.body);
              // let error = new Error({ message: 'error from create' });
              // error.status = 404;
              // next(error);
              // let { item, qty, date, due, tax, rate } = req.body;

              schema = _joi2.default.object().keys({
                firstName: _joi2.default.string().required(),
                lastName: _joi2.default.string().required(),
                email: _joi2.default.string().required()
              });
              _Joi$validate = _joi2.default.validate(req.body, schema), error = _Joi$validate.error, value = _Joi$validate.value;
              // console.log('value of req', value);

              if (!(error && error.details)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error));

            case 5:
              _context2.prev = 5;
              _context2.next = 8;
              return _client2.default.create(value);

            case 8:
              result = _context2.sent;

              res.json(result);
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](5);

              res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ err: "error while inserting client data" });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[5, 12]]);
    }));

    function create(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    }

    return create;
  }(),
  findOne: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var id, client;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.params.id;
              _context3.prev = 1;
              _context3.next = 4;
              return _client2.default.findById(id);

            case 4:
              client = _context3.sent;

              if (client) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "could not find any voice" }));

            case 7:
              return _context3.abrupt("return", res.json(client));

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);
              return _context3.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error));

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 10]]);
    }));

    function findOne(_x7, _x8) {
      return _ref3.apply(this, arguments);
    }

    return findOne;
  }(),
  deleteRecord: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var id, client;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              _context4.prev = 1;
              _context4.next = 4;
              return _client2.default.findByIdAndDelete(id);

            case 4:
              client = _context4.sent;

              if (client) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "could not find the record" }));

            case 7:
              return _context4.abrupt("return", res.json(client));

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](1);

              res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ err: "error while inserting data" });

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[1, 10]]);
    }));

    function deleteRecord(_x9, _x10) {
      return _ref4.apply(this, arguments);
    }

    return deleteRecord;
  }(),
  update: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var schema, id, _Joi$validate2, error, value, client;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              schema = _joi2.default.object().keys({
                firstName: _joi2.default.string().optional(),
                lastName: _joi2.default.string().optional(),
                email: _joi2.default.string().optional()
              });
              id = req.params.id;
              _Joi$validate2 = _joi2.default.validate(req.body, schema), error = _Joi$validate2.error, value = _Joi$validate2.value;

              if (!(error && error.details)) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error));

            case 5:
              console.log(value);
              _context5.prev = 6;
              _context5.next = 9;
              return _client2.default.findOneAndUpdate({ _id: id }, value, { new: true });

            case 9:
              client = _context5.sent;

              if (client) {
                _context5.next = 12;
                break;
              }

              return _context5.abrupt("return", res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "could not find the record" }));

            case 12:
              return _context5.abrupt("return", res.json(client));

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](6);

              res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json({ err: "error while updating data" });

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[6, 15]]);
    }));

    function update(_x11, _x12) {
      return _ref5.apply(this, arguments);
    }

    return update;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJDbGllbnQiLCJmaW5kIiwicmVzdWx0IiwianNvbiIsInN0YXR1cyIsIkh0dHBTZXJ2ZXJDb2RlcyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVycm9yIiwiY3JlYXRlIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJmaXJzdE5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImxhc3ROYW1lIiwiZW1haWwiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiZGV0YWlscyIsIkJBRF9SRVFVRVNUIiwiZXJyIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJjbGllbnQiLCJOT1RfRk9VTkQiLCJkZWxldGVSZWNvcmQiLCJmaW5kQnlJZEFuZERlbGV0ZSIsInVwZGF0ZSIsIm9wdGlvbmFsIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIm5ldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFDZTtBQUNQQSxTQURPO0FBQUEseUdBQ0NDLEdBREQsRUFDTUMsR0FETixFQUNXQyxJQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYQyxzQkFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CVztBQUFBO0FBQUEscUJBcUJVQyxpQkFBT0MsSUFBUCxDQUFZLEVBQVosQ0FyQlY7O0FBQUE7QUFxQkxDLG9CQXJCSzs7QUFzQlROLGtCQUFJTyxJQUFKLENBQVNELE1BQVQ7QUF0QlM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFB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RlVwQixpQkFBT2tDLGdCQUFQLENBQXdCLEVBQUVDLEtBQUtWLEVBQVAsRUFBeEIsRUFBcUNMLEtBQXJDLEVBQTRDLEVBQUVnQixLQUFLLElBQVAsRUFBNUMsQ0F6RlY7O0FBQUE7QUF5RkxSLG9CQXpGSzs7QUFBQSxrQkEwRkpBLE1BMUZJO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQTJGQWhDLElBQUlRLE1BQUosQ0FBV0MsMEJBQWdCd0IsU0FBM0IsRUFBc0MxQixJQUF0QyxDQUEyQyxFQUFFb0IsS0FBSywyQkFBUCxFQUEzQyxDQTNGQTs7QUFBQTtBQUFBLGdEQTZGRjNCLElBQUlPLElBQUosQ0FBU3lCLE1BQVQsQ0E3RkU7O0FBQUE7QUFBQTtBQUFBOztBQStGVGhDLGtCQUFJUSxNQUFKLENBQVdDLDBCQUFnQkMscUJBQTNCLEVBQWtESCxJQUFsRCxDQUF1RCxFQUFFb0IsS0FBSywyQkFBUCxFQUF2RDs7QUEvRlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6ImNsaWVudC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tIFwiLi9jbGllbnQubW9kZWxzXCI7XHJcbmltcG9ydCBIdHRwU2VydmVyQ29kZXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XHJcbmltcG9ydCBKb2kgZnJvbSBcImpvaVwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYXN5bmMgZmluZEFsbChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgZmluZEFsbFwiKTtcclxuICAgIC8vIGNvbnN0IHsgcGFnZSA9IDEsIGxpbWl0ID0gMTAsIGZpbHRlciwgc29ydEl0ZW0sIHNvcnRPcmRlciB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgLy8gY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIC8vICAgcGFnZTogcGFyc2VJbnQocGFnZSwgMTApLFxyXG4gICAgLy8gICBsaW1pdDogcGFyc2VJbnQobGltaXQsIDEwKVxyXG4gICAgLy8gfTtcclxuICAgIC8vIGxldCBxdWVyeSA9IHt9O1xyXG4gICAgLy8gaWYgKGZpbHRlcikge1xyXG4gICAgLy8gICBxdWVyeS5pdGVtID0ge1xyXG4gICAgLy8gICAgICRyZWdleDogZmlsdGVyXHJcbiAgICAvLyAgIH07XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZiAoc29ydEl0ZW0gJiYgc29ydE9yZGVyKSB7XHJcbiAgICAvLyAgIG9wdGlvbnMuc29ydCA9IHtcclxuICAgIC8vICAgICBbc29ydEl0ZW1dOiBzb3J0T3JkZXJcclxuICAgIC8vICAgfTtcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IENsaWVudC5maW5kKHt9KTtcclxuICAgICAgcmVzLmpzb24ocmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycm9yKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGNyZWF0ZShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgY3JlYXRlXCIsIHJlcS5ib2R5KTtcclxuICAgIC8vIGxldCBlcnJvciA9IG5ldyBFcnJvcih7IG1lc3NhZ2U6ICdlcnJvciBmcm9tIGNyZWF0ZScgfSk7XHJcbiAgICAvLyBlcnJvci5zdGF0dXMgPSA0MDQ7XHJcbiAgICAvLyBuZXh0KGVycm9yKTtcclxuICAgIC8vIGxldCB7IGl0ZW0sIHF0eSwgZGF0ZSwgZHVlLCB0YXgsIHJhdGUgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgZmlyc3ROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgbGFzdE5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygndmFsdWUgb2YgcmVxJywgdmFsdWUpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBDbGllbnQuY3JlYXRlKHZhbHVlKTtcclxuICAgICAgcmVzLmpzb24ocmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oeyBlcnI6IFwiZXJyb3Igd2hpbGUgaW5zZXJ0aW5nIGNsaWVudCBkYXRhXCIgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGNsaWVudCA9IGF3YWl0IENsaWVudC5maW5kQnlJZChpZCk7XHJcbiAgICAgIGlmICghY2xpZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLk5PVF9GT1VORCkuanNvbih7IGVycjogXCJjb3VsZCBub3QgZmluZCBhbnkgdm9pY2VcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oY2xpZW50KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU2VydmVyQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycm9yKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGRlbGV0ZVJlY29yZChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBjbGllbnQgPSBhd2FpdCBDbGllbnQuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xyXG4gICAgICBpZiAoIWNsaWVudCkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5OT1RfRk9VTkQpLmpzb24oeyBlcnI6IFwiY291bGQgbm90IGZpbmQgdGhlIHJlY29yZFwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMuanNvbihjbGllbnQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbih7IGVycjogXCJlcnJvciB3aGlsZSBpbnNlcnRpbmcgZGF0YVwiIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgdXBkYXRlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgIGZpcnN0TmFtZTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIGxhc3ROYW1lOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBjbGllbnQgPSBhd2FpdCBDbGllbnQuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgdmFsdWUsIHsgbmV3OiB0cnVlIH0pO1xyXG4gICAgICBpZiAoIWNsaWVudCkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTZXJ2ZXJDb2Rlcy5OT1RfRk9VTkQpLmpzb24oeyBlcnI6IFwiY291bGQgbm90IGZpbmQgdGhlIHJlY29yZFwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMuanNvbihjbGllbnQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoSHR0cFNlcnZlckNvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbih7IGVycjogXCJlcnJvciB3aGlsZSB1cGRhdGluZyBkYXRhXCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=