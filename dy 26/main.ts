// question 76
function addNumbers(num1 : number, num2 : number): number {
    return num1 + num2
}
console.log(addNumbers(5,7))
// question 77 
function greetUsers(name:string = "anonymous"){
    console.log(`hello ${name}!`)
}
greetUsers("alice")
greetUsers()

// question 78 
function squareDeclaration(number:number):number{
    return number * number
}
const squareExpression = function (number:number):number{
    return number*number
}
console.log(squareDeclaration(4))
console.log(squareExpression(4))