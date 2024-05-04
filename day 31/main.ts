// q 91

let favouriteFruits:string[]=["Mnago","Banana","Cheery","Orange"]
favouriteFruits.push("Strawberry")
console.log(favouriteFruits)


// q 92 
function removeLastElement<T>(arr: T[]):T | undefined {
    return arr.pop()
}
const fruit:string[]=["apple","mango","banana","cherry"]
console.log(removeLastElement(fruit))
console.log(fruit)


// q 93 
 
function replaceBananaWithMango(fruits:string[]):void{
    const index = fruits.indexOf("banana")
    if (index!== -1 ) fruits[index]="Mango"

}
const fruits:string[]=["apple","banana","cherry"]
replaceBananaWithMango(fruits)
console.log(fruits)
