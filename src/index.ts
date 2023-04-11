import express, { Request, Response } from "express"

import { db } from "./services/db"

import cors from 'cors'

import { competitionRouter } from "./routes/competitionRouter"

import { scoreRouter } from "./routes/scoreRouter"
import { startDB } from "./services/functions"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
    
});

const tableName = "competitions"


startDB()

app.use("/competition", competitionRouter)

app.use("/score", scoreRouter)


  


