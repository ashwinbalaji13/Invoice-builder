import passport from "passport";
import GoogleStrategy from "passport-google-oauth";
import User from "../../api/resources/users/users.models";
import { devconfig } from "../../config/env/development";
// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.

export const configureGoogleStrategy = () => {
  passport.use(
    new GoogleStrategy.OAuth2Strategy(
      {
        clientID: devconfig.google.clientId,
        clientSecret: devconfig.google.clientSecret,
        callbackURL: devconfig.google.callbackURL
      },
      async function(token, tokenSecret, profile, done) {
        console.log("passport google end");
        let user = await User.findOne({ "google.id": profile.id });
        if (user) {
          console.log("user", user);
          return done(null, user);
        }
        console.log("before creatiomn");
        let newuser = new User({});
        newuser.google.id = profile.id;
        newuser.google.token = token;
        newuser.google.displayName = profile.displayName;
        newuser.google.email = profile.emails[0].value;
        console.log("After creation", newuser);
        await newuser.save();
        // console.log(newuser);
        done(null, profile);
      }
    )
  );
};
