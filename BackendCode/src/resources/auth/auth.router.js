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

//github
authRouter.get("/github", passport.authenticate("github"));

authRouter.get("/github/callback", passport.authenticate("github", { failureRedirect: "/login" }), function (req, res) {
  // Successful authentication, redirect home.
  authController.sendJWTToken(req, res);
});

authRouter.get("/twitter", passport.authenticate("twitter"));

authRouter.get(
  "/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  authController.sendJWTToken
);
authRouter.get('/authenticate', passport.authenticate("jwt", { session: "false" }), authController.authenticate)
