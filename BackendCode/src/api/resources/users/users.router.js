import express from "express";
import usersController from "./users.controller";

export const usersRouter = express.Router();
usersRouter
  .route("/")
  .post(usersController.signup)
