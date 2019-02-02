import express from "express";
import passport from "passport";
import authController from "./auth.controller";
export const authRouter = express.Router();

authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failure" }),
  authController.sendJWTToken
);
