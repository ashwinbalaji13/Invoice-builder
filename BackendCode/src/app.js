import express from "express";
import mongoose from "mongoose";
import { router } from "./config/routes";
let app = express();
mongoose.Promise = global.Promise;
app.use("/api", router);
app.get("/", (req, res) => {
  res.json({
    mes: "welcome"
  });
});
mongoose.connect(
  "mongodb://localhost/invoice-builder",
  { useNewUrlParser: true }
);

// app.use((req, res, next) => {
//   const error = new Error("Not found");
//   error.message = "Invalid route";
//   error.status = 404;
//   next(error);
// });
// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       err: err.message
//     }
//   });
// });
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
