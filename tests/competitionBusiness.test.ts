import { CompetitionBusiness } from "../src/business/CompetitionBusiness";
import { CompetitionDatabase } from "../src/data/CompetitionDatabase";
import { competitionDTO } from "../src/model/competitionsDTO";
import { isValidInput, lowerCase } from "../src/services/functions";
import { IdGenerator } from "../src/services/idGenerator";




describe("CompetitionBusiness", () => {
    const mockInsertCompetition = jest.fn();
    const mockCompetitionDatabase = jest.fn(() => ({
      insertCompetition: mockInsertCompetition,
    }))();
    const competitionDatabase = new CompetitionDatabase() as jest.Mocked<CompetitionDatabase>;
    const competitionBusiness = new CompetitionBusiness();

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
    })
})

