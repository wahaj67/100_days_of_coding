//  question 70
function printNumberWithLet(){
    for(let i = 1; i <= 5; i++){
        console.log(i)
    } 
}
printNumberWithLet()

// question 71 

let age = 25;
let age = 26;
console.log(age)

const name = "alice"
try{
    name = "bob"
}catch(error){
    console.log(`error cant reaasigned a const declared variable`)
}

//  question 72

let blockLet = "visible inside the block"
const blockConst = "also only inside the block"
console.log(blockLet)
console.log(blockConst)
try {
console.log(blockLet)
}catch(error){
    console.log("blockLet is not acessible outside the block")
}
try {
    console.log(blockConst)

}catch(error){
    console.log("blockconst is not accesible outside the block")
}