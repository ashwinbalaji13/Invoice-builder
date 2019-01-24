import HttpServerCodes from "http-status-codes";
import Users from "./users.models";
import userService from './users.service.js'
export default{
  async signup(req,res){
    const {error,value} =userService.validateSchema(req.body);
    if(error && error.details){
      return res.status(HttpServerCodes.BAD_REQUEST).json(error);
    }    try {

      let result = await Users.create(value);
      res.json(result);
    } catch (err) {
      res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).json({ err: err});
    }   
  }
}