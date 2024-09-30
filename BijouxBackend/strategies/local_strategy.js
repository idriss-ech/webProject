import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/user.model.js";
import {comparing} from '../middleware/crypting.js'



passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await User.findById(id);
    if (!findUser) throw new Error("User Not Found");
    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new Strategy({usernameField:'email', passwordField:'password'},async (username, password, done) => {
    try {
      console.log("authentication");
      const findUser = await User.findOne({ email:username });
      if (!findUser) {
        throw new Error("User Not Found");
      }
      if (!comparing(password, findUser.password)) {
        throw new Error("Failed to authenticate ");
      }
      done(null, findUser);
    } catch (error) {
      done(error, null);
    }
  })
);
