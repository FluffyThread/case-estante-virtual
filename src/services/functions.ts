export function isValidInput(input: string): boolean {
    const validInputs = ['100m', 'dardos'];
    return validInputs.includes(input.toLowerCase());
}

export function lowerCase(input:string):string{
    const setLowerCase = input.toLowerCase()
    return setLowerCase
}

export function isUnitValid(input:string):boolean {
    const validInputs = ["s", "m"];
    return validInputs.includes(input.toLowerCase())
}