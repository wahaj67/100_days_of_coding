// function addNumbers(num1 : number, num2 : number): number {
//     return num1 + num2
// }
// console.log(addNumbers(5,7))
// function greetUsers(name:string = "anonymous"){
//     console.log(`hello ${name}!`)
// }
// greetUsers("alice")
// greetUsers()
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(4));
console.log(squareExpression(4));
