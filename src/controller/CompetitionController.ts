import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { Request, Response } from "express";

const competitionBusiness = new CompetitionBusiness()

export class CompetitionController {
    insertCompetition = async(req:Request, res:Response) => {
        try {
            const { name, type } = req.body
            await competitionBusiness.insertCompetition(name, type)
            res.send("Competition created succesfully!")
        } 
        catch (error:any) {
            res.send(error.message);
        }
    }
}