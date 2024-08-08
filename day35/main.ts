// *Q103
function getRandomBol():boolean{
    return Math.random() >= 0.5
}

console.log(getRandomBol())

// Q104
function getcode():string{
const ss = "#" + Math.floor(Math.random()* 0xffff).toString(16).padStart(6,"0")
 return ss
}

console.log(getcode())


// Q105

function rollDice():number{
    return Math.floor(Math.random()*6)+1
}
console.log(rollDice())