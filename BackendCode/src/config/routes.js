import express from "express";
import invoiceController from "../api/resources/invoice";
export let router = express.Router();

router.get("/invoices", invoiceController.findAll);
router.post("/invoices", invoiceController.create);
router.get("/invoices/:id", invoiceController.findOne);
router.delete("/invoices/:id", invoiceController.deleteRecord);
router.put("/invoices/:id", invoiceController.update);
