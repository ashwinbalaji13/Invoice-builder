var GitHubStrategy = require("passport-github").Strategy;
import passport from "passport";
import User from "../../api/resources/users/users.models";
import { devconfig } from "../../config/env/development";
export const configureGitHubStrategy = () => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: devconfig.github.clientID,
        clientSecret: devconfig.github.clientSecret,
        callbackURL: devconfig.github.callbackURL
      },
      async function(accessToken, refreshToken, profile, done) {
        console.log("passport github end");
        let user = await User.findOne({ "github.id": profile.id });
        if (user) {
          //   console.log("user", user);
          return done(null, user);
        }
        let newuser = new User({});
        newuser.github.id = profile.id;
        newuser.github.token = accessToken;
        newuser.github.displayName = profile.displayName;
        newuser.github.email = profile.emails[0].value;
        await newuser.save();
        // console.log(newuser);
        done(null, profile);
      }
    )
  );
};
