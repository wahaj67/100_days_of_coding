// let age : number = 25
// if (age <2){
//     console.log('the person ia baby.')
// }else if (age<4){
//     console.log('the person is a tolder')
// }else if (age <13){
//     console.log('the person is a kid')
// }else if(age<20){
//     console.log('the person is teenager')
// }else if (age <65){
//     console.log('the person is adulyt')
// } else {
//     console.log('the person is elder')
// // }
// let fav_fruits : string[] = ['apple',"banana","cheery"]
// if (fav_fruits.includes('banana')){
//     console.log('you really like banana')
// }
// if (fav_fruits.includes('apple')){
//     console.log('you really like apple')
// }
var username = ['admin', "user1", "user2", "user3", 'user4'];
username.forEach(function (username) {
    if (username == 'admin') {
        console.log('hello , admin would you like to see status report');
    }
    else {
        console.log("hello ".concat(username, " thank you for loging again"));
    }
});
