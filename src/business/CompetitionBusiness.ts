import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { competitionDTO } from "../model/competitionsDTO";
import { isValidInput, lowerCase } from "../services/functions";
import { IdGenerator } from "../services/idGenerator";

const idGenerator = new IdGenerator()

export class CompetitionBusiness {

    private competitionDatabase: CompetitionDatabase;

    constructor(competitionDatabase?: CompetitionDatabase) {
        this.competitionDatabase = competitionDatabase || new CompetitionDatabase();
      }
      
    insertCompetition = async(name:string, type:string) => {
        let typeInLower
        try {
            if (!name || !type) {
                throw new Error("Must fill all the fields: 'name', 'type'");
            }
            if (!isValidInput(type)) {
                throw new Error("type only accept two arguments: '100m' or 'dardos'");
            } else{
                typeInLower = lowerCase(type)
            }
            const id = idGenerator.generateId()
            
            const input:competitionDTO = {
                id,
                name,
                type:typeInLower
            }
            await this.competitionDatabase.insertCompetition(input)
            return true
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAllData = async() => {
        try {
            let rows = await this.competitionDatabase.getAllData("competitions")
            if (rows.length < 1) {
                throw new Error("No competitions was found :/");    
            }
            return rows
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    finishCompetition = async (id: string) => {
        try {
          if (!id) {
            throw new Error("ID must be passed as query");
          }
          const competition:any = await this.competitionDatabase.getById(id);

          if (competition.length < 1) {
            throw new Error("Competition does not exist");
          }
          await this.competitionDatabase.finishCompetition(id);
          return true

        } catch (error:any) {
          throw new Error(error.message);
        }
      };

      deleteCompetitionById = async (id:string):Promise<boolean> => {
        try {
            const competition:any = await this.competitionDatabase.getById(id)
            if (competition.length < 1) {
                throw new Error("The competition does not exist");     
            }
            await this.competitionDatabase.deleteCompetitionById(id)
            return true
        } catch (error:any) {
            throw new Error(error.message);
            
        }
      }
}