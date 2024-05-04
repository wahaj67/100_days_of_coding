// q 82
function stringLength(str:string):number {
    return str.length
}

console.log(stringLength("alice"))
// q 83
function convertCase(str: string) {
    let upperStr = str.toUpperCase()
    let lowerStr = str.toLowerCase()

console.log("upperCase", upperStr,"lowerCase",lowerStr,)}
convertCase("hello world")

// q 84
function replaceJavaScriptWithTypeScript(sentence:string):string {
return sentence.replace(/JavaScript/g ,"TypeScript")
}
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"))