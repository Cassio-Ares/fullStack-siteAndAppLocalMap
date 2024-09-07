import { AppDataSource } from "./src/data-source";

import express from "express";
import cors from "cors";
import { routerCompany } from "./src/router/PartherCompany.routes";
import { routesUser } from "./src/router/User.routes";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
  })
  .catch((error) => console.log(error));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", routerCompany);
app.use("/", routesUser)

const Port = 3000;

app.listen(Port, () => {
  console.log(`Rodando na port ${Port}`);
});

/**
 * Install:
 *    yarn init
 *    yarn add express typeorm sqlite3 reflect-metadata
 *    yarn add cors
 *    yarn add ts-node-dev --dev          - para criar um script de inicialização "dev": "tsnd --respawn index.ts"
 *    yarn add typescript --dev           - add TS
 *    yarn tsc --init                     - ininciar o ts
 *
 *
 *    types:
 *    yarn add @types/express --dev
 *    yarn add @types/cors --dev
 *
 *    npx typeorm init --name localmap --database sqlite
 */
