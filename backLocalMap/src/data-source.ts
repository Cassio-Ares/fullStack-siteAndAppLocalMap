import "reflect-metadata";
import { DataSource } from "typeorm";
import { PartherCompany } from "./entity/PartherCompany";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities:[PartherCompany, User],
    migrations:[],
    subscribers:[]
})
