function combineStringAndNumber(text:string,number: number):string {
    return text + number;
}

console.log(combineStringAndNumber("age",30))

function remainder(num1:number, num2:number): number {
    return num1 % num2
}
console.log(remainder(5, 2))

function checkBothTrue (val1: boolean,val2:boolean): boolean{
    return val1 && val2
}

console.log(checkBothTrue(true, false))