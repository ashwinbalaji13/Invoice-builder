import express from "express";
import logger from "morgan";
import passport from "passport";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../config/swagger.json";
import { configureJWTStrategy } from "./passport-jwt.js";
import {configureGoogleStrategy} from './passport-google'
import session from 'express-session';
import { devconfig } from "../../config/env/development.js";

export const setGlobalMiddleware = app => {
  app.use(logger("dev"));
//passport 
  app.use(passport.initialize());
  configureJWTStrategy();
//google auth
app.use(passport.session());
configureGoogleStrategy();  
app.use(session({
  secret: devconfig.secret,
  resave: false,
  saveUninitialized: true,
}))
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(user, done) {
  done(null,"Asdjhajkssd");
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
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
};
