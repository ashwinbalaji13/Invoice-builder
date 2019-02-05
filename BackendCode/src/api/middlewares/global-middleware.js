import express from "express";
import logger from "morgan";
import passport from "passport";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../config/swagger.json";
import { configureJWTStrategy } from "./passport-jwt.js";
import { configureGoogleStrategy } from "./passport-google";
import session from "express-session";
import { devconfig } from "../../config/env/development.js";
import usersModels from "../resources/users/users.models.js";
import { configureGitHubStrategy } from "./passport-github.js";
import { configureTwitterStrategy } from "./passport-twitter.js";
import cors from "cors";
export const setGlobalMiddleware = app => {
  app.use(logger("dev"));
  //passport
  app.use(passport.initialize());
  configureJWTStrategy();
  //google auth
  app.use(passport.session());
  configureGoogleStrategy();
  configureGitHubStrategy();
  configureTwitterStrategy();

  app.use(
    session({
      secret: devconfig.secret,
      resave: false,
      saveUninitialized: true
    })
  );
  //save user into session
  passport.serializeUser(function(user, done) {
    console.log("serialize", user.displayName);
    done(null, user.id);
  });
  //extract userid from session
  passport.deserializeUser(function(user, done) {
    console.log("deserialize", user);
    usersModels.findById(id, (err, user) => {
      done(null, user);
    });
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true
    })
  );
  app.use(cors());
  app.get("/failure", (req, res) => {
    res.redirect("http://localhost:4200/login");
  });
};
