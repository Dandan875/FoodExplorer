import { Request, Response } from "express";
import { sequelize } from "../database/index";
import { User } from "../models/Users";
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export const register = async (req: Request, res: Response) => {
  if(req.body.email && req.body.password){
    let { name, email, password } = req.body.email;

    let hasUser = await User.findOne({
      where: {email}
    });

    if(!hasUser){
      let newUser = await User.create({ name, email, password})
    
      const token = JWT.sign(
        { id: newUser.id, email: newUser.email },
        process.env.JWT_TOKEN as string,
        { expiresIn: '2h'}
      );

      res.status(201);
      res.json({id: newUser.id, token})
    } else {
      res.json({error: 'Este email já existe'})

    }
  }

  res.json({error: 'Email e/ou senha não enviado'})
}

export const login = async (req: Request, res: Response) => {
  if(req.body.email && req.body.password){
    let email: string = req.body.email;
    let password: string = req.body.password;

    let user = await User.findOne({
      where: {email, password}
    });

    if(user){
      const token = JWT.sign(
        { id: user.id, email: user.email },
        process.env.JWT_TOKEN as string,
        { expiresIn: '2h'}
      );

      res.json({ status: true, token });
      return;
    }
  }

  res.json({status: false})
}

export const list = async (req: Request, res: Response) => {
  let list = await User.findAll();
  return res.json({list});
};

export const getUser = async (req: Request, res: Response) => {
  let { id } = req.params;

  let user = await User.findByPk(id);
  if(user){
    return res.json({user})
  } else {
    return res.json({ error: "usuario não encontrado" })
  }
}

export const create = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const nUser = await User.create({ name, email, password });

  return res.json({ id: nUser.id, name, email, password });
}

