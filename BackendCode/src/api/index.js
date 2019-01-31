import express from "express";
import { invoiceRouter } from "./resources/invoice/invoice.router";
import { clientRouter } from "./resources/client/client.router";
import { usersRouter } from "./resources/users/users.router";
import { authRouter } from "../resources/auth";

export const restRouter = express.Router();
restRouter.use("/invoices", invoiceRouter);
restRouter.use("/clients", clientRouter);
restRouter.use("/users", usersRouter);
restRouter.use('/auth',authRouter)
