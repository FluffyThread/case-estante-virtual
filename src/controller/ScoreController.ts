import { Request, Response } from "express";
import { ScoreBusiness } from "../business/ScoreBusiness";

const scoreBusiness = new ScoreBusiness()

export class ScoreController {


    registerNewScore = async (req: Request, res: Response) => {
        try {
            const { competition_id, athlete, value, unit } = req.body
            await scoreBusiness.registerScore(competition_id, athlete, value, unit)
            res.status(201).send("Score succesfuly registered")
        } catch (error: any) {
            if (error.message === "Competition does not exist") {
                res.status(404).json({ error: error.message });
            } else {
                res.json({ error: error.message });
            }
        }
    }
    getAllData = async (req: Request, res: Response) => {
        try {
            let result = await scoreBusiness.getAllData()
            res.json(result)
            console.log(result);

        } catch (error: any) {
            res.send(error.message)
        }
    }
}