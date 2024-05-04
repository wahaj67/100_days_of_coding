// function addNumberAndString(number1: number, numberString:string): number {
//     return number1 + Number(numberString);
// }
// console.log(addNumberAndString(10, "5"))
function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(10, 3));
