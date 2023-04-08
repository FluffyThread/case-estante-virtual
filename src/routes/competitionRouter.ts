import express from "express";
import { CompetitionController } from "../controller/CompetitionController";

export const competitionRouter = express.Router()
const competitionController = new CompetitionController()

// ENDPOINT CRIAR NOVA COMPETIÇÃO
competitionRouter.post("/create", competitionController.insertCompetition)