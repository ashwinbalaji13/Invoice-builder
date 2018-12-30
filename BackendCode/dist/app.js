"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require("./config/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
_mongoose2.default.Promise = global.Promise;
app.use("/api", _routes.router);
app.get("/", function (req, res) {
  res.json({
    mes: "welcome"
  });
});

_mongoose2.default.connect("mongodb://localhost/invoice-builder", { useNewUrlParser: true });
app.listen(3000, function () {
  console.log("listening to port 3000");
});
//# sourceMappingURL=app.js.map