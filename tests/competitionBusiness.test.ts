import { closeDB, startDB } from "../src/services/functions";
import { CompetitionBusiness } from "../src/business/CompetitionBusiness";
import { CompetitionDatabase } from "../src/data/CompetitionDatabase";
import { competitionDTO } from "../src/model/competitionsDTO";




const competitionDatabase = new CompetitionDatabase() as jest.Mocked<CompetitionDatabase>;
const competitionBusiness = new CompetitionBusiness();

describe("Competition Business tests", () => {
    beforeAll(async () => {
      await startDB();
    });
  
    afterAll(async () => {
      await closeDB();
    });
  
    describe("insertCompetition", () => {
      test("Should throw an error when name is missing", async () => {
        expect.assertions(1);
        try {
          await competitionBusiness.insertCompetition("", "100m");
        } catch (error: any) {
          expect(error.message).toBe("Must fill all the fields: 'name', 'type'");
        }
      });
  
      test("Should throw an error when type is missing", async () => {
        expect.assertions(1);
        try {
          await competitionBusiness.insertCompetition("Competition1", "");
        } catch (error: any) {
          expect(error.message).toBe("Must fill all the fields: 'name', 'type'");
        }
      });
  
      test("Should throw an error when type is not valid", async () => {
        expect.assertions(1);
        try {
          await competitionBusiness.insertCompetition("Competition1", "Basketball");
        } catch (error: any) {
          expect(error.message).toBe("type only accept two arguments: '100m' or 'dardos'");
        }
      });
  
      test("Should insert competition successfully", async () => {
        const mockInput: competitionDTO = {
          id: "123",
          name: "Competition1",
          type: "100m",
        };
        await expect(competitionBusiness.insertCompetition(mockInput.name, mockInput.type)).resolves.toEqual(true);
      });
    });
  
    describe("getAllData", () => {
      test("Should return all competition data if a competition is inserted", async () => {
        try {
          const result = await competitionBusiness.getAllData();
          expect(result.length).toBeGreaterThan(0);
        } catch (error: any) {
          expect(error.message).toEqual("No competitions was found :/");
        }
      });
    });
    describe("finishCompetition", () => {
        test("Should throw an error if ID is not passed as query", async () => {
            expect.assertions(1);
            try {
                await competitionBusiness.finishCompetition("");
            } catch (error:any) {
                expect(error.message).toBe("ID must be passed as query");
            }
        });
        test("Should throw an error if there is no Data", async () => {
            expect.assertions(1);
            const idMock = "teste"
            try {
                await competitionBusiness.finishCompetition(idMock);
            } catch (error:any) {
                expect(error.message).toBe("Competition does not exist")
            }
        })
        test("Should end competitions successfully", async () => {
            const mockInput: competitionDTO = {
                id: "123",
                name: "Competition1",
                type: "100m",
              };
            await competitionDatabase.insertCompetition(mockInput)
            await expect(competitionBusiness.finishCompetition(mockInput.id)).resolves.toEqual(true)
        })
    });
    describe("deleteCompetition", () => {
        test("Should throw an error if the competition does not exist", async () => {
            const mockId = "teste"
            try {
                await competitionBusiness.deleteCompetitionById(mockId)
            } catch (error:any) {
                expect(error.message).toBe("The competition does not exist")
            }
        })
        test("Should end competition succesfully", async() => {
            const mockInput: competitionDTO = {
                id: "1234",
                name: "Competition1",
                type: "100m",
              };
              await competitionDatabase.insertCompetition(mockInput)
              await expect(competitionBusiness.deleteCompetitionById("1234")).resolves.toEqual(true)
        })
    })
  });
  
  
  
  
  
