import Invoice from "../models/invoice.models";
export default {
  findAll(req, res, next) {
    console.log("inside findAll");
    Invoice.find().then(invoices => res.json(invoices));
  },
  create(req, res, next) {
    console.log("inside create", req.body);
    let error = new Error({ message: "error from create" });
    error.status = 404;
    next();
    let { item, qty, date, due, tax, rate } = req.body;
    if (!item) {
      return res.status(400).json({ err: "item is required field" });
    }
    Invoice.create({ item, qty, date, due, tax, rate })
      .then(invoice => {
        res.json(invoice);
      })
      .catch(err => {
        res.status(500).json({ err: "error while inserting data" });
      });
  }
};
