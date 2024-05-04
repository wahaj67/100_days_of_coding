let numbers = [1,2,3,4,5]
let doubledNumbers = numbers.map (number => number * 2)
console.log(doubledNumbers)

let mixedArray = [1 ,"apple", 2, "banana", true, "carrrot"]
let stringArray = mixedArray.filter(item => typeof item === "string")
console.log(stringArray)

let grades = [88, 94,72,99,53,77]
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade)