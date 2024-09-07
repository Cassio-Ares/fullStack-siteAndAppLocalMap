import { Router } from "express";
import { getAll, remove, save, updata } from "../controller/PartherCompanyController";


export const routerCompany = Router()

routerCompany.post("/partherCompany", save);
routerCompany.get("/partherCompany", getAll)
routerCompany.put("/partherCompany/:id", updata)
routerCompany.delete("/partherCompany/:id", remove)