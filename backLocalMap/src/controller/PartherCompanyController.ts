import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { PartherCompany } from "../entity/PartherCompany";

//To Do validation and error (try/)

export async function getAll(_, res: Response) {
  const partherCompanyRepository = AppDataSource.getRepository(PartherCompany);

  const allCompany = await partherCompanyRepository.find();

  return res.status(200).json(allCompany);
}

export async function save(req: Request, res: Response) {
  const partherCompanyRepository = AppDataSource.getRepository(PartherCompany);

  const savedCompany = await partherCompanyRepository.save(req.body);

  return res.status(200).json(savedCompany);
}

export async function updata(req: Request, res: Response) {
  const partherCompanyRepository = AppDataSource.getRepository(PartherCompany);

  const company = await partherCompanyRepository.findOneBy({
    id: req.params.id,
  });

  const updataCompany = await partherCompanyRepository.update(
    company,
    req.body
  );

  return res.status(200).json(updataCompany);
}

export async function remove(req: Request, res: Response) {
    
  const partherCompanyRepository = AppDataSource.getRepository(PartherCompany);

  const company = await partherCompanyRepository.findOneBy({id:req.params.id})

  const removeCompany = await partherCompanyRepository.delete(company)

  return res.status(200).json(removeCompany)
}
