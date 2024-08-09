"use strict";
// Q115
function dayByNumber(day) {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "tuesday";
        case 3:
            return "wednesday";
        case 4:
            return "thursday";
        case 5:
            return "friday";
        case 6:
            return "saturday";
        case 7:
            return "sunday";
        default:
            console.log("invalid day");
    }
}
console.log(dayByNumber(5));
// Q116
function logSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "winter";
        case 3:
        case 4:
        case 5:
            return "spring";
        case 6:
        case 7:
        case 8:
            return "summer";
        case 9:
        case 10:
        case 11:
            return "Fall";
        default:
            return "invalid month";
    }
}
console.log(logSeason(5));
console.log(logSeason(10));
// Q117
function evaluateGrade(grade) {
    switch (grade) {
        case "A":
            return "Excellent";
        case "B":
            return "Good";
        case "C":
            return "Fair";
        case "D":
            return "Poor";
        case "F":
            return "Fail";
        default:
            return "Invalid Grade";
    }
}
console.log(evaluateGrade("C"));
