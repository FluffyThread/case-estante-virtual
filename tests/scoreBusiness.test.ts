import { closeDB, startDB } from "../src/services/functions";
import { CompetitionDatabase } from "../src/data/CompetitionDatabase";
import { ScoreDatabase } from "../src/data/ScoreDatabase";
import { ScoreBusiness } from "../src/business/ScoreBusiness";
import { scoreDTO } from "../src/model/scoreDTO";




const competitionDatabase = new CompetitionDatabase() as jest.Mocked<CompetitionDatabase>;
const scoreDatabase = new ScoreDatabase() as jest.Mocked<ScoreDatabase>
const scoreBusiness = new ScoreBusiness() as jest.Mocked<ScoreBusiness>

describe("ScoreBusiness", () => {

    beforeAll(async () => {
        await startDB();
    });

    afterAll(async () => {
        await closeDB();
    });

    describe("registerScore", () => {

        test("Should throw an error if all fields are not filled", async () => {
            const mockInput: any = {
                competition_id: "",
                athlete: "",
                value: "",
                unit: ""
            };
            await expect(scoreBusiness.registerScore(mockInput.competition_id, mockInput.athlete, mockInput.value, mockInput.unit)).rejects.toThrow(new Error("All fields must be filled: 'competitionId', 'athlete', 'value', 'unit'"));
        });

        test("Should throw an error if unit is not valid", async () => {
            const mockInput: any = {
                competition_id: "1",
                athlete: "Jane Doe",
                value: 10,
                unit: "cm"
            };
            await expect(scoreBusiness.registerScore(mockInput.competition_id, mockInput.athlete, mockInput.value, mockInput.unit)).rejects.toThrow(new Error("Unit field can only accept two arguments: 's' or 'm'"));
        });

        test("Should throw an error if the competition has been finished", async () => {
            const mockCompetition: any = {
                id: "1",
                name: "Competition 1",
                type: "100m",
            };
            await competitionDatabase.insertCompetition(mockCompetition);
            await competitionDatabase.finishCompetition("1")
            const mockInput: any = {
                competition_id: "1",
                athlete: "Jane Doe",
                value: 10,
                unit: "s"
            };
            await expect(scoreBusiness.registerScore(mockInput.competition_id, mockInput.athlete, mockInput.value, mockInput.unit)).rejects.toThrow(new Error("The competition has been finished"));
        });
        test("Should throw an error if the athlete has made all attempts", async () => {
            const mockCompetition: any = {
                id: "4",
                name: "Competition 1",
                type: "100m",
                finished: 0
            };
            await competitionDatabase.insertCompetition(mockCompetition);
            const mockScore1: any = {
                id: "1",
                competitionId: "4",
                athlete: "Jane Doe",
                value: 10,
                unit: "s"
            };
            const mockScore2: any = {
                id: "2",
                competitionId: "4",
                athlete: "Jane Doe",
                value: 11,
                unit: "s"
            };
            const mockScore3: any = {
                id: "3",
                competitionId: "4",
                athlete: "Jane Doe",
                value: 12,
                unit: "s"
            };
            await scoreDatabase.registerNewScore(mockScore1);
            await scoreDatabase.registerNewScore(mockScore2);
            await scoreDatabase.registerNewScore(mockScore3);
            const mockInput: any = {
                competition_id: "4",
                athlete: "Jane Doe",
                value: 13,
                unit: "s"
            };
            await expect(scoreBusiness.registerScore(mockInput.competition_id, mockInput.athlete, mockInput.value, mockInput.unit)).rejects.toThrow(new Error("The athlete has made all attempts."))
        })
    })
    describe("getAllData", () => {
        test("Should return an array with data if there are scores", async () => {

            const mockData: scoreDTO = { id: "teste", competitionId: "1", athlete: "Jane", value: 10, unit: "s" };

            await scoreDatabase.registerNewScore(mockData)

            const result = await scoreBusiness.getAllData();

            expect(result.some(item => item.id === mockData.id && item.athlete === mockData.athlete)).toEqual(true);
        });

        test("Should throw an error if no scores are found", async () => {

            await scoreDatabase.clearTable()

            await expect(scoreBusiness.getAllData()).rejects.toThrow(new Error("No score was found :/"));
        });
    });
    describe("getAllScoresFromCompetition", () => {

        test('should return the competition ranking', async () => {
            await competitionDatabase.clearTable()
            
            const competition = { id: '1', name: 'Test Competition', type: '100m' };
            await competitionDatabase.insertCompetition(competition);
          
            const scores: scoreDTO[] = [
              { id: '1', athlete: 'John Doe', value: 11, unit: 's', competitionId: '1' },
              { id: '2', athlete: 'Jane Doe', value: 10, unit: 's', competitionId: '1' }
            ];
            await scoreDatabase.registerNewScore(scores[0]);
            await scoreDatabase.registerNewScore(scores[1]);
          

            const result = await scoreBusiness.getAllScoreFromCompetition('1');
          
            expect(typeof result).toBe('object')
        });
    })

})