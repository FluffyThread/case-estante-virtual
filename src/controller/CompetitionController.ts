import { log } from "console";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { Request, Response } from "express";

const competitionBusiness = new CompetitionBusiness()

export class CompetitionController {
  insertCompetition = async (req: Request, res: Response) => {
    try {
      const { name, type } = req.body
      await competitionBusiness.insertCompetition(name, type)
      res.send("Competition created succesfully!")
    }
    catch (error: any) {
      res.send(error.message);
    }
  }

  getAllData = async (req: Request, res: Response) => {
    try {
      let result = await competitionBusiness.getAllData()
      res.json(result)

    } catch (error: any) {
      res.send(error.message)
    }
  }

  finishCompetition = async (req: Request, res: Response) => {
    try {
      const id = req.query.id as string;
      await competitionBusiness.finishCompetition(id);
      res.status(201).send("Competition has ended successfully!");
    } catch (error: any) {
      if (error.message === "Competition does not exist") {
        res.status(404).json({ error: error.message });
      } else {
        res.json({ error: error.message });
      }
    }
  };

  deleteCompetitionById = async(req:Request, res:Response):Promise<void> => {
    const id = req.query.id as string;
    try {
      await competitionBusiness.deleteCompetitionById(id);
      res.send("Competition was deleted succesfully!");
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

}