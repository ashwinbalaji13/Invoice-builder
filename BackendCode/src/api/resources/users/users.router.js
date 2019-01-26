import express from "express";
import usersController from "./users.controller";
import passport from "passport";

export const usersRouter = express.Router();
usersRouter.post("/signup", usersController.signup);
usersRouter.post("/login", usersController.login);
usersRouter.post("/test", passport.authenticate("jwt", { session: "false" }), usersController.test);
