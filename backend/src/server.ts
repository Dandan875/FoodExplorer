import Express, { Router, Request, Response, ErrorRequestHandler } from "express";
import UserRoute from "./routes/user.routes";
import ProductRoute from "./routes/product.routes";
import OrderRoute from "./routes/order.routes";
import FavoritesRoute from "./routes/favorites.routes";
import {User} from "./models/Users";
import cors from "cors";

const server = Express();
server.use(Express.json);
server.use(cors());



server.use(UserRoute, ProductRoute, OrderRoute, FavoritesRoute);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({error: 'Endpoint não encontrado.'})
})

server.use()

const PORT = 3000;
server.listen(PORT, () => console.log('server is running'));