import { Router } from 'express';
import { getAll, remove, save, updata } from '../controller/UserController';

export const routesUser = Router()

routesUser.get("/user", getAll);
routesUser.post("/user", save);
routesUser.put("/user/:id", updata);
routesUser.delete("/user/:id", remove)