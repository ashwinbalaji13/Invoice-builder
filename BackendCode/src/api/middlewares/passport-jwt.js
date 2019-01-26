import { Strategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
import User from "../resources/users/users.models";
export const configureJWTStrategy = () => {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "ahgd123";
  passport.use(
    new Strategy(opts, function(jwt_payload, done) {
      console.log(jwt_payload);
      User.findOne({ _id: jwt_payload.id }, function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          console.log(user);

          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
};
