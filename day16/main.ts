let laptop = {
make: "dell",
model: "xps 15",
year: "2022",
describe: function() {
    console.log(`this laptop is a ${this.year} ${this.make} ${this.model},` )
}

}
laptop.describe()

let laptops  = [
    {make: "dell", model: "xps15", year: "2021"},
    { make:"apple",model: "mackbook pro",year:"2020"},
    { make:"hp", model:"spectre x360",year:"2021"}    
    
]
let [laptop1 , laptop2]  = laptops
console.log(laptop1)
console.log(laptop2)


let priceset1 = [1200, 1500, 1100]
let priceset2 = [1000, 1300, 1600]
let combinedprices = [...priceset1, ...priceset2].sort((a,b) => a - b);
console.log(combinedprices)