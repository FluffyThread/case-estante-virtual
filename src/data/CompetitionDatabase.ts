import { Competition, competitionDTO } from "../model/competitionsDTO";
import { db } from "../services/db";

export class CompetitionDatabase {

    insertCompetition = async(input:competitionDTO):Promise<void> => {
        try {
            await db.run(`INSERT INTO competitions (id, name, type) VALUES(?,?,?)`,[input.id, input.name, input.type])
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAllData(tableName: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM ${tableName}`;
          db.all(query, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      }

      getById = async (id: string) => {
        return new Promise((resolve, reject) => {
          db.all(`SELECT * FROM competitions WHERE id = ?`, [id], (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      };

      finishCompetition = async (id: string) => {
        try {
          await new Promise<void>((resolve, reject) => {
            db.run(
              `UPDATE competitions SET finished = ? WHERE id = ?`,
              [true, id],
              (err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              }
            );
          });
        } catch (error:any) {
          throw new Error(error.message);
        }
      };

      deleteCompetitionById = async (id: string): Promise<void> => {
        try {
          await new Promise<void>((resolve, reject) => {
            db.run(
              `DELETE FROM competitions WHERE id = ?`,
              [id],
              (err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              }
            );
          });
        } catch (error:any) {
          throw new Error(error.message);
          
        }
      };
      
}