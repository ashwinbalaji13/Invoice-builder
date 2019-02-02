import HttpServerCodes from "http-status-codes";
import Users from "./users.models";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import userService from "./users.service.js";

export default {
  async signup(req, res) {
    const { error, value } = userService.validateSchema(req.body);
    if (error && error.details) {
      return res.status(HttpServerCodes.BAD_REQUEST).json(error);
    }
    try {
      let user = new Users({});
      user.local.email = value.email;
      const salt = await bcryptjs.genSalt();
      value.password = await bcryptjs.hash(value.password, salt);
      user.local.password = value.password;
      await user.save();
      console.log("Signup user");
      // let result = await Users.create(value);
      return res.json({ success: true, message: "User Created successfully" });
    } catch (err) {
      res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).json({ err: err });
    }
  },
  async login(req, res) {
    const { error, value } = userService.validateSchema(req.body);
    if (error && error.details) {
      return res.status(HttpServerCodes.BAD_REQUEST).json(error);
    }
    try {
      console.log("login", value);

      const user = await Users.findOne({ "local.email": value.email });
      console.log("login", user);
      if (!user) {
        return res.status(HttpServerCodes.BAD_REQUEST).json({ err: "Invalid Email or email not exist" });
      }
      const matched = await bcryptjs.compare(value.password, user.local.password);
      // const matched = false;
      console.log("matched", matched);
      if (!matched) {
        return res.status(HttpServerCodes.BAD_REQUEST).json({ err: "Invalid Password" });
      } else {
        const token = jwt.sign({ id: user._id }, "ahgd123", { expiresIn: "1d" });
        return res.status(HttpServerCodes.OK).json({ message: "success", token });
      }
    } catch (err) {
      res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).json({ err: err });
    }
  },
  async test(req, res) {
    return res.json({ success: "success" });
  }
};
