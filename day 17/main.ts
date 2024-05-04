function logHobbies(...hobbies:string[]){
    hobbies.forEach(hobby => {
        console.log(`i enjoy ${hobby}`)
    }
        )
}
logHobbies ("reading","coding","bikeriding")

let myIdealDay = `My ideal day involve:
1.waking for early and going for a jog
2.spending a few hours coding on a personal projects
3.ending a day by reading Goodbook`;

console.log(myIdealDay)

function calculateArea (width:number, height: number): number {
    return width * height
}
let calculateAreaArrow = (width:number,height:number) :  number => width * height;

console.log(calculateAreaArrow(5,7))