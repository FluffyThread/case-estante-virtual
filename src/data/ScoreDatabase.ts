import { scoreDTO } from "../model/scoreDTO";
import { db } from "../services/db";

export class ScoreDatabase {
    registerNewScore = async (input: scoreDTO): Promise<void> => {
        try {
            await db.run(`INSERT INTO score (id, competition_id, athlete, value, unit) VALUES(?,?,?,?,?)`, [input.id, input.competitionId, input.athlete, input.value, input.unit])
        } catch (error: any) {
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

 
    checkNameOccurrence = (name: string) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT COUNT(*) AS count FROM score WHERE athlete = ?`;
            db.get(sql, [name], (err:any, row:any) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                }
                console.log(row.count);
                
                if (row.count >= 3) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    };

    checkNameOccurrence100m = (name: string) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT COUNT(*) AS count FROM score WHERE athlete = ?`;
            db.get(sql, [name], (err:any, row:any) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                }
                
                if (row.count > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    };

    getAllScoreFromCompetition = async (foreignKey: string): Promise<any[]> => {
        const query = 'SELECT * FROM score WHERE competition_id = ?';
        return new Promise((resolve, reject) => {
          db.all(query, [foreignKey], (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      };

    clearTable = async() => {
        await db.run(`DELETE FROM score`)
    }
}