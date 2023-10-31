import { Request, Response } from "express";
import { sequelize } from "../database/index";
import { Favorites } from "../models/Favorites";


export const list = async (req: Request, res: Response) => {
  let list = await Favorites.findAll();

  return res.json({list});
};

export const getFavorites = async (req: Request, res: Response) => {
  let { id } = req.params;

  let favorites = await Favorites.findByPk(id);
  if(favorites){
    return res.json({favorites})
  } else {
    return res.json({ error: "frase não encontrada" })
  }
}

export const create = async (req: Request, res: Response) => {
  const { } = req.body;

  const nFavorites = await Favorites.create({});

  return res.json({ id: nFavorites.id });
}

export const deleteFavorites = async (req: Request, res:Response) => {
  let { id } = req.params;

  await Favorites.destroy({
    where: {id}
  });

  return res.json({});
}