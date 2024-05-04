// let smartphone = {
//     make: "samsung",
//     model: "galaxy s21",
//     specs: {
//         storage:"128GB",
//         screensize: "6.2 inches" ,
//         batterylife:"18 hours"
//     }
// };
// console.log(smartphone)
// let developerSkills = {
//     languages : ["Java script","Type script","Python"],
//     frameworks: ["React","Angular", "Vue"],
//     tools: ["Git", "Webpack", "Docker"]
// }
// let {languages, frameworks, tools} = developerSkills
// console.log(`languages ${languages[0]} , frameworks ${frameworks[0]}, tools ${tools[0]} `)
function createObjectWithDynamickey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPreference = createObjectWithDynamickey("theme", "dark");
console.log(userPreference);
