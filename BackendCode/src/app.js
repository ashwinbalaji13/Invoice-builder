import express from "express";
import mongoose from "mongoose";
import { router } from "./config/routes";
import logger from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger.json";

let app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true
  })
);

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/invoice-builder",
  { useNewUrlParser: true }
);

app.get("/", (req, res) => {
  res.json({
    mes: "welcome"
  });
});

app.use("/api", router);

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
app.listen(3000, () => {
  console.log("listening to port 3000");
});
