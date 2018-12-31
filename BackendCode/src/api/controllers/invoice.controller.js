import Invoice from '../models/invoice.models';
import Joi from 'joi';
export default {
  findAll(req, res, next) {
    console.log('inside findAll');
    Invoice.find()
      .then(invoices => res.json(invoices))
      .catch(err => {
        return res.status(400).json(error);
      });
  },
  create(req, res, next) {
    console.log('inside create', req.body);
    // let error = new Error({ message: 'error from create' });
    // error.status = 404;
    // next(error);
    // let { item, qty, date, due, tax, rate } = req.body;

    const schema = Joi.object().keys({
      item: Joi.string().required(),
      date: Joi.date().required(),
      due: Joi.date().required(),
      tax: Joi.number().optional(),
      rate: Joi.date().required(),
      qty: Joi.number().required()
    });

    const { error, value } = Joi.validate(req.body, schema);
    // console.log('value of req', value);
    if (error && error.details) {
      return res.status(400).json(error);
    }

    Invoice.create(value)
      .then(invoice => {
        res.json(invoice);
      })
      .catch(err => {
        res.status(500).json({ err: 'error while inserting data' });
      });
  }
};
