import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth';

import { devconfig } from '../../config/env/development'
// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.

export const configureGoogleStrategy = () => {

  passport.use(new GoogleStrategy.OAuth2Strategy({
    clientID: devconfig.google.clientId,
    clientSecret: devconfig.google.clientSecret,
    callbackURL: devconfig.google.callbackURL
  },
    function (token, tokenSecret, profile, done) {
      console.log("google", token, tokenSecret, "profile", profile)
      done(null, profile);
    }
  ));
}