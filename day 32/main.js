// q 94
// const words:string[]=["Hello","world","typescript","javascript"]
// const lengths:number[]=words.map(word=>word.length)
// console.log(lengths)
// q95
// function filterGreaterThanten(numbers:number[]):number[]{
//     return numbers.filter(number=> number > 10);
// }
// const number:number[]=[5,10,15,20,25]
// console.log(filterGreaterThanten(number))
// q 96
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [1025, 2020, 3500, 1000, 985];
console.log(calculateSum(numbers));
