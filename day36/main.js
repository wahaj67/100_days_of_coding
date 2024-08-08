"use strict";
// Q106
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2008));
console.log(isLeapYear(2000));
console.log(isLeapYear(2004));
// Q107
function divisibleByTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(divisibleByTwoAndThree(12));
console.log(divisibleByTwoAndThree(100));
// Q108
function check(nam1, nam2) {
    return nam1.toLowerCase() === nam2.toLowerCase();
}
console.log(check("John", "john"));
console.log(check("John", "JohN"));
