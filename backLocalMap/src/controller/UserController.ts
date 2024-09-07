import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const db = AppDataSource.getRepository(User);

//To Do validation and error (try/)

export async function getAll(_, res: Response) {
  const allUser = await db.find();

  return res.status(200).json(allUser);
}

export async function save(req: Request, res: Response) {
  const saveUser = await db.save(req.body);

  return res.status(201).json(saveUser);
}

export async function updata(req: Request, res: Response) {
  const user = await db.findOneBy({ id: req.params.id });

  const updataUser = await db.update(user, req.body);

  return res.status(200).json(updataUser);
}

export async function remove(req: Request, res: Response) {
  const user = await db.findOneBy({ id: req.params.id });

  const removeUser = await db.delete(user);

  return res.status(200).json(removeUser)
}
