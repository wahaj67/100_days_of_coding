"use strict";
// *Q103
function getRandomBol() {
    return Math.random() >= 0.5;
}
console.log(getRandomBol());
// *`Q104`
// function getRandomHexColor():string{
//     const color = "#"+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,"0")
// return color
// }
// console.log(getRandomHexColor())
// function getRandomHexColor():string{
//     const sp = "#" + Math.floor(Math.random()* 0xFFFFFFFFFFFF ).toString(17).padEnd(10,"0")
//     return sp
// }
// console.log(getRandomHexColor())
// Q105
// function getDice():number{
//     const dd = Math.floor(Math.random()*100000)+2
// return dd
// }
// console.log(getDice());
function getcode() {
    const ss = "#" + Math.floor(Math.random() * 0xffff).toString(16).padStart(6, "0");
    return ss;
}
console.log(getcode());
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());
