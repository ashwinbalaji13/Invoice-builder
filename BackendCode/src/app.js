import express from "express";
import mongoose from "mongoose";
// import { router } from "./config/routes";
import logger from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger.json";
import { restRouter } from "./api/index.js";
import { setGlobalMiddleware } from "./api/middlewares/global-middleware";
let app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  // "mongodb://localhost/invoice-builder",
  "mongodb://ashwin:ashwin13@ds117545.mlab.com:17545/invoice_builder",
  { useNewUrlParser: true, useCreateIndex: true }
);
setGlobalMiddleware(app);

app.get("/", (req, res) => {
  res.json({
    mes: "welcome"
  });
});

app.use("/api", restRouter);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.message = "Invalid route";
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});
app.listen(8000, () => {
  console.log("listening to port 3000");
});
