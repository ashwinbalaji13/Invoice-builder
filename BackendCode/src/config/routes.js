import express from "express";
import invoiceController from "../api/controllers/invoice.controller";
export let router = express.Router();

router.get("/invoices", invoiceController.findAll);
