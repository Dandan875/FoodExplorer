import { Request, Response } from "express";
import { sequelize } from "../database/index";
import { Order } from "../models/Orders";


export const list = async (req: Request, res: Response) => {
  let list = await Order.findAll();
  return res.json({list});
};

export const getOrder = async (req: Request, res: Response) => {
  let { id } = req.params;

  let order = await Order.findByPk(id);
  if(order){
    return res.json({order})
  } else {
    return res.json({ error: "frase não encontrada" })
  }
}

export const create = async (req: Request, res: Response) => {
  const { totalPrice, status } = req.body;

  const nOrder = await Order.create({ totalPrice, status });

  return res.json({ id: nOrder.id, totalPrice, status });
}

export const update = async (req: Request, res: Response) => {
  let { id } = req.params;
  let { totalPrice, status } = req.body;

  let order = await Order.findByPk(id);
  if(order){
    order.totalPrice = totalPrice;
    order.status = status;
    await order.save();

    return res.json({order});
  } else {
    return res.json({error: "usuario não encontrado"})
  }
}

export const deleteOrder = async (req: Request, res:Response) => {
  let { id } = req.params;

  await Order.destroy({
    where: {id}
  });

  return res.json({});
}