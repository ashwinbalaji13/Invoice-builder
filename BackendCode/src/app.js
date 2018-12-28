import express from "express";
import { router } from "./config/routes";
let app = express();
app.use("/api", router);
app.get("/", (req, res) => {
  res.json({
    mes: "welcome"
  });
});
app.listen(3000, () => {
  console.log("listening to port 3000");
});
