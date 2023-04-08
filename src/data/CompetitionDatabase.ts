import { competitionDTO } from "../model/competitionsDTO";
import { db } from "../services/db";

export class CompetitionDatabase {

    insertCompetition = async(input:competitionDTO):Promise<void> => {
        try {
            await db.run(`INSERT INTO competitions (id, name, type) VALUES(?,?,?)`,[input.id, input.name, input.type])
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}