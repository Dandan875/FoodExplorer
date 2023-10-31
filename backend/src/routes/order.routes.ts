import { Router, Request, Response } from "express";
import * as OrderController from "../controllers/OrderController";
import { Auth } from "../middleware/auth";

const OrderRoute = Router();

OrderRoute.post('/order', Auth.private, OrderController.create);
OrderRoute.get('/order', Auth.private, OrderController.list);
OrderRoute.get('/order/:id', Auth.private, OrderController.getOrder);
OrderRoute.put('/order/:id', Auth.private, OrderController.update);
OrderRoute.delete('/order/:id', Auth.private, OrderController.deleteOrder);

export default OrderRoute;