// q 91
var favouriteFruits = ["Mnago", "Banana", "Cheery", "Orange"];
favouriteFruits.push("Strawberry");
console.log(favouriteFruits);
// q 92 
// function removeLastElement<T>(arr: T[]):T | undefined {
//     return arr.pop()
// }
// const fruits:string[]=["apple","mango","banana","cherry"]
// console.log(removeLastElement(fruits))
// console.log(fruits)
// q 93 
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["apple", "banana", "cherry"];
replaceBananaWithMango(fruits);
console.log(fruits);
