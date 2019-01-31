import { Strategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
import User from "../resources/users/users.models";
import { devconfig } from "../../config/env/development";
export const configureJWTStrategy = () => {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = devconfig.secret;
  passport.use(
    new Strategy(opts, function(jwt_payload, done) {
      // console.log(jwt_payload);
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

};
