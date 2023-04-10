import express from "express";
import { ScoreController } from "../controller/ScoreController";

export const scoreRouter = express.Router()
const scoreController = new ScoreController

// ENDPOINT PARA CRIAR NOVO RESULTADO DE UM ATLETA
scoreRouter.post("/create", scoreController.registerNewScore)

// ENDPOINT PARA RETORNAR DADOS DO RESULTADO DE TODOS OS ATLETAS
scoreRouter.get("/getall", scoreController.getAllData)

//ENDPOINT PARA RETORNAR O RANKING DE DETERMINADA COMPETIÇÃO
scoreRouter.get("/rank", scoreController.getAllScoreFromCompetition)
