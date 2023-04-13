import { Request, Response } from "express";
import { ScoreBusiness } from "../business/ScoreBusiness";

const scoreBusiness = new ScoreBusiness()

export class ScoreController {


    registerNewScore = async (req: Request, res: Response) => {
        try {
            const { competition_id, athlete, value, unit } = req.body
            await scoreBusiness.registerScore(competition_id, athlete, value, unit)
            res.status(201).send("Score succesfully registered!")
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

        } catch (error: any) {
            res.send(error.message)
        }
    }

    getAllScoreFromCompetition = async (req: Request, res: Response) => {
        try {
          const foreignKey  = req.query.id as string;
          const values = await scoreBusiness.getAllScoreFromCompetition(foreignKey);
          res.status(200).json({Ranking: values });
        } catch (err:any) {
          res.status(500).json({ error: err.message });
        }
      };
}