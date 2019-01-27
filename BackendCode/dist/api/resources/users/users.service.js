"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    validateSchema: function validateSchema(body) {
        var schema = _joi2.default.object().keys({
            email: _joi2.default.string().required(),
            password: _joi2.default.string().required()
        });

        var _Joi$validate = _joi2.default.validate(body, schema),
            error = _Joi$validate.error,
            value = _Joi$validate.value;

        if (error && error.details) {
            return { error: error };
        } else {
            return { value: value };
        }
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXJzLnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGVTY2hlbWEiLCJib2R5Iiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsImVtYWlsIiwic3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWM7QUFDVkEsa0JBRFUsMEJBQ0tDLElBREwsRUFDVTtBQUNoQixZQUFNQyxTQUFTQyxjQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLG1CQUFPSCxjQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEc0I7QUFFN0JDLHNCQUFVTixjQUFJSSxNQUFKLEdBQWFDLFFBQWI7QUFGbUIsU0FBbEIsQ0FBZjs7QUFEZ0IsNEJBTVdMLGNBQUlPLFFBQUosQ0FBYVQsSUFBYixFQUFtQkMsTUFBbkIsQ0FOWDtBQUFBLFlBTU5TLEtBTk0saUJBTU5BLEtBTk07QUFBQSxZQU1DQyxLQU5ELGlCQU1DQSxLQU5EOztBQU9kLFlBQUlELFNBQVNBLE1BQU1FLE9BQW5CLEVBQTRCO0FBQzFCLG1CQUFPLEVBQUNGLFlBQUQsRUFBUDtBQUNELFNBRkQsTUFFSztBQUNELG1CQUFNLEVBQUNDLFlBQUQsRUFBTjtBQUNIO0FBRU47QUFkUyxDIiwiZmlsZSI6InVzZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmFsaWRhdGVTY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICAgICAgICBlbWFpbDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IEpvaS52YWxpZGF0ZShib2R5LCBzY2hlbWEpO1xyXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn07XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICByZXR1cm57dmFsdWV9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG59Il19