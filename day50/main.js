"use strict";
// Q148
function addAndSub(a, b, c, d) {
    console.log("before time delay");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b - c + d);
        }, 3000);
    });
}
addAndSub(65, 635, 272, 3723).then(res => console.log(res));
//  Q149
console.log("before time delay");
setTimeout(() => {
    console.log("SIDRAWAHAJALI");
}, 3000);
console.log("after delay");
//    Q150
console.log("before synchronous operation");
for (let i = 0; i < 1e9; i++) { }
console.log("after synchronous operation");
console.log("befroe asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 3000);
console.log("after Asynchronous operation setup ");
