import jwt from "jsonwebtoken";
import { devconfig } from "../../config/env/development";

export default {
  sendJWTToken(req, res) {
    const token = jwt.sign({ id: req.user._id }, devconfig.secret, {
      expiresIn: "1d"
    });
    return res.json({ success: true, token });
  }
};
