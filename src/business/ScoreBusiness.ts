import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { ScoreDatabase } from "../data/ScoreDatabase";
import { Score, scoreDTO } from "../model/scoreDTO";
import { isUnitValid } from "../services/functions";
import { IdGenerator } from "../services/idGenerator";


const idGenerator = new IdGenerator()
const scoreDatabase = new ScoreDatabase()
const competitionDatabase = new CompetitionDatabase()
export class ScoreBusiness {
    
    registerScore = async(competition_id:string, athlete:string, value:number, unit:string) => {
        try {
            if (!athlete || !competition_id || !value || !unit) {
                throw new Error("All fields must be filled: 'competitionId', 'athlete', 'value', 'unit'");
            }
            if (!isUnitValid(unit)) {
                throw new Error("Unit field can only accept two arguments: 's' or 'm'");   
            }
            const competition:any = await competitionDatabase.getById(competition_id)

            const count:any = await scoreDatabase.checkNameOccurrence(athlete)
            console.log(count);
            
            if (count === true) {
                throw new Error("The athlete has made all attempts.");  
            }
            
            if (competition.length < 1) {
                throw new Error("Competition does not exist");
                
            }
            let id = idGenerator.generateId()
            let inputData:scoreDTO = {
                id,
                competitionId:competition_id,
                athlete,
                value,
                unit
            }
            return await scoreDatabase.registerNewScore(inputData)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getAllData = async() => {
        try {
            let rows = await scoreDatabase.getAllData("score")
            if (rows == null || rows == undefined) {
                console.log(rows);  
                throw new Error("No score was found :/");    
            }
            return rows
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
}

