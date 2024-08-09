// Q133 & 134
const person={
    name:"wahaj ali",
    age:19,
    city:"karachi"
}

let jsonString = JSON.stringify(person)

console.log(jsonString)
let parse =JSON.parse(jsonString)
console.log(parse)

let JsonString = JSON.stringify(jsonString,null,3)
console.log(JsonString)




































































