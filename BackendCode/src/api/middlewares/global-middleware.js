import express from "express";
import logger from "morgan";
import passport from "passport";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../config/swagger.json";
import { configureJWTStrategy } from "./passport-jwt.js";
export const setGlobalMiddleware = app => {
  app.use(logger("dev"));
  app.use(passport.initialize());
  configureJWTStrategy();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true
    })
  );
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
};
