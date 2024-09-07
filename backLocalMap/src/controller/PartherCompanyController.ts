import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { PartherCompany } from "../entity/PartherCompany";

export async function save(req: Request, res: Response) {
  const partherCompanyRepository = AppDataSource.getRepository(PartherCompany);

  const savedCompany = await partherCompanyRepository.save(req.body);

  return res.status(200).json(savedCompany)
}


export async function getAll(req:Request, res:Response) {
    const partherCompanyRepository = AppDataSource.getRepository(PartherCompany);

    const allCompany = await partherCompanyRepository.find()

    return res.status(200).json(allCompany)
}