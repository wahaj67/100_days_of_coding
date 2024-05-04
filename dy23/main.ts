// function addNumberAndString(number1: number, numberString:string): number {
//     return number1 + Number(numberString);
// }
// console.log(addNumberAndString(10, "5"))


function divideAndRemainder(dividend: number,divisor:number):{quotient: number; remainder: number} {
let quotient = Math.floor(dividend / divisor)
let remainder = dividend % divisor 
return {quotient, remainder}
}
console.log(divideAndRemainder(10, 3))