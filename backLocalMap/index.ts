import { AppDataSource } from "./src/data-source";

import express from "express";
import cors from "cors";

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

const Port = 3000;

app.listen(Port, () => {
  console.log(`Rodando na port ${Port}`);
});
