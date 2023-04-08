import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { competitionDTO, competitionType } from "../model/competitionsDTO";
import { IdGenerator } from "../services/idGenerator";


const competitionDatabase = new CompetitionDatabase()
const idGenerator = new IdGenerator()

export class CompetitionBusiness {
    insertCompetition = async(name:string, type:competitionType) => {
        try {
            if (!name || !type) {
                throw new Error("Must fill all the fields: 'name', 'type'");
            }
            const id = idGenerator.generateId()
            
            const input:competitionDTO = {
                id,
                name,
                type
            }
            await competitionDatabase.insertCompetition(input)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}