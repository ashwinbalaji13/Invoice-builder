import passport from "passport";
import TwitterStrategy from "passport-twitter";
import User from "../../api/resources/users/users.models";
import { devconfig } from "../../config/env/development";

export const configureTwitterStrategy = () => {
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: devconfig.twitter.consumerKey,
        consumerSecret: devconfig.twitter.consumerSecret,
        callbackURL: devconfig.twitter.callbackURL,
        email: true
      },
      async function(token, tokenSecret, profile, done) {
        console.log("passport twitter end", profile);
        let user = await User.findOne({ "twitter.id": profile.id });
        if (user) {
          // console.log("user", user);
          return done(null, user);
        }
        let newuser = new User({});
        newuser.twitter.id = profile.id;
        newuser.twitter.token = token;
        newuser.twitter.displayName = profile.displayName;
        newuser.twitter.name = profile.username;
        await newuser.save();
        // console.log(newuser);
        done(null, profile);
      }
    )
  );
};
