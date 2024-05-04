// let magicians: string [] = ["khizer","qasim","zyan"];

// function make_great(magicians : string[]): string[] {
//     let greatmagicians: string[] = []
//     magicians.forEach(magicians => {
//         greatmagicians.push(`${magicians}"the great`)
//     })
//   return greatmagicians;      

// } 
// let greatmagicians = make_great(magicians.slice())
// console.log("original magicians")
// show_magicians (magicians)
// console.log("greatmagicians")
// show_magicians(greatmagicians)


// function show_magicians(magicians: string[]) {
//     throw new Error("Function not implemented.");
// }

// function make_sandwich(...items:string[]){
//     console.log(`make a sandwich with ${items.join(',')}.`)
// }

// make_sandwich("ham","cheese")
// make_sandwich("turkey", "lettuce","tomato")
// make_sandwich("avocado","sprouts","mustard","mayo")



function make_car(manufacture: string, model:string,...options: [string,any][]): object    {
    let car = {manufacture,model};
options.forEach(([key,value])=> car [key] = value)
return car;                         
}
console.log(make_car("toyota", "corolla"),["color","red"],["year","2020"])
console.log(make_car("ford","fiesta",["color","blue"],["sunroof",true]))






























0