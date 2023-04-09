export enum competitionType {
    HUNDRED = "100m",
    DARTS = "dardos"
}

export interface competitionDTO {
    id:string,
    name:string,
    type:string
}

export type Competition = {
    id:string,
    name:string,
    type:competitionType,
    finished:number
}

