"use strict";
//Q109
const now = new Date();
const currentHours = now.getHours();
if (currentHours < 12) {
    console.log("Good Morning");
}
//Q110
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(91));
console.log(assignGrade(65));
//Q111
function ageGroup(age) {
    if (age >= 5 && age <= 13) {
        return "Child";
    }
    else if (age >= 13 && age <= 19) {
        return "Teenager";
    }
    else
        return "Adult";
}
console.log(ageGroup(7));
