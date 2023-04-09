export interface scoreDTO {
    id:string,
    competitionId:string,
    athlete:string,
    value:number,
    unit:string
}

export type Score = {
    competitionId:string,
    athlete:string,
    value:number,
    unit:string
}