import { Router, Request, Response } from "express";
import * as UserController from "../controllers/UserController";
import { Auth } from "../middleware/auth";

const UserRoute = Router();

UserRoute.post('/user', UserController.create);
UserRoute.get('/user', Auth.private, UserController.list);
UserRoute.get('/user/:id', Auth.private, UserController.getUser);

export default UserRoute;