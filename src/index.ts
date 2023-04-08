import express from "express"

import { db } from "./services/db"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});


try {
    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS competitions (id VARCHAR(255) PRIMARY KEY NOT NULL, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, finished BOOLEAN DEFAULT false )');
        db.run('CREATE TABLE IF NOT EXISTS score (id VARCHAR(255) PRIMARY KEY NOT NULL, competition_id VARCHAR(255) NOT NULL, athlete VARCHAR(255) NOT NULL, value REAL NOT NULL, unit VARCHAR(2) NOT NULL, FOREIGN KEY(competition_id) REFERENCES competitions(id))');
      });
    console.log("Tables created succesfully");    
} catch (error:any) {
    console.log(error.message);
}


