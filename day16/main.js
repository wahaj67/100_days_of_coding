// let laptop = {
// make: "dell",
// model: "xps 15",
// year: "2022",
// describe: function() {
//     console.log(`this laptop is a ${this.year} ${this.make} ${this.model},` )
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// }
// laptop.describe()
// let laptops  = [
//     {make: "dell", model: "xps15", year: "2021"},
//     { make:"apple",model: "mackbook pro",year:"2020"},
//     { make:"hp", model:"spectre x360",year:"2021"}    
// ]
// let [laptop1 , laptop2]  = laptops
// console.log(laptop1)
// console.log(laptop2)
var priceset1 = [1200, 1500, 1100];
var priceset2 = [1000, 1300, 1600];
var combinedprices = __spreadArray(__spreadArray([], priceset1, true), priceset2, true).sort(function (a, b) { return a - b; });
console.log(combinedprices);
