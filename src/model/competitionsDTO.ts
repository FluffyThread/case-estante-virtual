export enum competitionType {
    HUNDRED = "100m rasos",
    DARTS = "lançamento de dardos"
}

export interface competitionDTO {
    id:string,
    name:string,
    type:competitionType
}

