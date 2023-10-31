import { Router, Request, Response } from "express";
import * as FavoritesController from "../controllers/FavoritesController";
import { Auth } from "../middleware/auth";

const FavoritesRoute = Router();

FavoritesRoute.post('/favorites', Auth.private, FavoritesController.create);
FavoritesRoute.get('/favorites', Auth.private, FavoritesController.list);
FavoritesRoute.get('/favorites/:id', Auth.private, FavoritesController.getFavorites);
FavoritesRoute.delete('/favorites/:id', Auth.private, FavoritesController.deleteFavorites);

export default FavoritesRoute;