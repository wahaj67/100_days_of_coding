// let  transport : string[] = ['honda125','bmw','submarine']
// transport.forEach(transport => {
//     console.log(`i would like to a own${transport}`)
// }
// )
var guest = ['zyan', 'zubair', 'khalil', 'qasim'];
guest.forEach(function (guest) {
    console.log("kindly take dinner with me ".concat(guest));
});
var unabletoattend = "zubair";
console.log("".concat(unabletoattend, " cant make it dinner"));
var newguest = "hammad";
guest[guest.indexOf(unabletoattend)] = newguest;
guest.forEach(function (guest) {
    console.log("dear ".concat(guest, "would you like to join with dinner"));
});
