export default {
  findAll(req, res, next) {
    console.log("inside");
    res.json({ msg: "all invoices" });
  }
};
