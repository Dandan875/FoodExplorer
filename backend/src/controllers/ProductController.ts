import { Request, Response } from "express";
import { sequelize } from "../database/index";
import { Product } from "../models/Products";


export const list = async (req: Request, res: Response) => {
  let list = await Product.findAll();
  return res.json({});
};

export const getProduct = async (req: Request, res: Response) => {
  let { id } = req.params;

  let product = await Product.findByPk(id);
  if(product){
    return res.json({product})
  } else {
    return res.json({ error: "frase não encontrada" })
  }
}

export const create = async (req: Request, res: Response) => {
  const { name, category, price } = req.body;

  const nProduct = await Product.create({ name, category, price });

  return res.json({ id: nProduct.id, name, category, price });
}

export const update = async (req: Request, res: Response) => {
  let { id } = req.params;
  let { name, category, price } = req.body;

  let product = await Product.findByPk(id);
  if(product){
    product.name = name;
    product.category = category;
    product.price = price;
    await product.save();

    return res.json({product});
  } else {
    return res.json({error: "usuario não encontrado"})
  }
}

export const deleteProduct = async (req: Request, res:Response) => {
  let { id } = req.params;

  await Product.destroy({
    where: {id}
  });

  return res.json({});
}

export const uploadFile = (req: Request, res: Response) => {
  console.log("FILE" ,req.file);
  
  return res.json({})
}
