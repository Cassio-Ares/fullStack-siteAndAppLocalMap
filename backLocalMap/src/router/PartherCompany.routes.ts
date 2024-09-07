import { Router } from "express";
import { getAll, save } from "../controller/PartherCompanyController";


export const routerCompany = Router()

routerCompany.post("/partherCompany", save);
routerCompany.get("/partherCompany", getAll)