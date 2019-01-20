import Client from "./client.models";
import HttpServerCodes from "http-status-codes";
import Joi from "joi";
export default {
  async findAll(req, res, next) {
    console.log("inside findAll");
    // const { page = 1, limit = 10, filter, sortItem, sortOrder } = req.query;
    // const options = {
    //   page: parseInt(page, 10),
    //   limit: parseInt(limit, 10)
    // };
    // let query = {};
    // if (filter) {
    //   query.item = {
    //     $regex: filter
    //   };
    // }
    // if (sortItem && sortOrder) {
    //   options.sort = {
    //     [sortItem]: sortOrder
    //   };
    // }
    // console.log(options);
    try {
      let result = await Client.find({});
      res.json(result);
    } catch (err) {
      return res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  },
  async create(req, res, next) {
    console.log("inside create", req.body);
    // let error = new Error({ message: 'error from create' });
    // error.status = 404;
    // next(error);
    // let { item, qty, date, due, tax, rate } = req.body;

    const schema = Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().required()
    });

    const { error, value } = Joi.validate(req.body, schema);
    // console.log('value of req', value);
    if (error && error.details) {
      return res.status(HttpServerCodes.BAD_REQUEST).json(error);
    }
    try {
      let result = await Client.create(value);
      res.json(result);
    } catch (err) {
      res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).json({ err: "error while inserting client data" });
    }
  },
  async findOne(req, res) {
    const { id } = req.params;
    try {
      let client = await Client.findById(id);
      if (!client) {
        return res.status(HttpServerCodes.NOT_FOUND).json({ err: "could not find any voice" });
      }
      return res.json(client);
    } catch (err) {
      return res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  },
  async deleteRecord(req, res) {
    const { id } = req.params;
    try {
      let client = await Client.findByIdAndDelete(id);
      if (!client) {
        return res.status(HttpServerCodes.NOT_FOUND).json({ err: "could not find the record" });
      }
      return res.json(client);
    } catch (err) {
      res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).json({ err: "error while inserting data" });
    }
  },
  async update(req, res) {
    const schema = Joi.object().keys({
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
      email: Joi.string().optional()
    });
    const { id } = req.params;
    const { error, value } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(HttpServerCodes.BAD_REQUEST).json(error);
    }
    console.log(value);
    try {
      let client = await Client.findOneAndUpdate({ _id: id }, value, { new: true });
      if (!client) {
        return res.status(HttpServerCodes.NOT_FOUND).json({ err: "could not find the record" });
      }
      return res.json(client);
    } catch (err) {
      res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).json({ err: "error while updating data" });
    }
  }
};
