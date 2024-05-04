// let guest : string [] = ['haider','abbas','muzamil','ashraf ']
// console.log("hey i found a biger able for dinner")
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// guest.unshift("ali");
// guest.splice(guest.length / 2, 0, " hassan")
// guest.push("abu bakar")
// guest.forEach(guest => {
//     console.log(`dear ${guest}would you like to join dinner with me`)
// }
// )
// console.log ('unfortaunately i can only invite two people on dinner')
// while(guest.length>2){
//     let removedguest = guest.pop();
//     console.log(`sorry ${removedguest} i cant invite you`)
// }
// guest.forEach(guest => {
//     console.log(`dear ${guest} you will still invited to dinner`)
// }
// )
// guest.splice(0,guest.length);
// console.log(guest)
// q 18
var places = ['newzeland', 'japan', 'china', 'israel', 'australia'];
console.log("original order:", places);
console.log("alphabatical order:", __spreadArray([], places, true).sort());
console.log("original order:", places);
console.log("reverse alphabatical order:", __spreadArray([], places, true).sort().reverse());
console.log("original order:", places);
places.reverse();
console.log("reversed order:", places);
places.reverse();
console.log("original order:", places);
places.sort();
console.log("alphabatical order:", places);
places.reverse();
console.log("reverse alphabatical order:", places);
