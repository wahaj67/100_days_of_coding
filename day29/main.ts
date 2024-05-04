// q 85
function findCodePosition(str:string):number{
    return str.indexOf("code")
}

console.log(findCodePosition("learn  to code with javascript "))


// q86

function hasJavaScript(str:string):boolean{
    return str.includes("JavaScript")
}

console.log(hasJavaScript("i love coding in java script"))


// q87
function extractFirstTenChars(str:string):string{
    return str.substring(0 , 10 )
}
console.log(extractFirstTenChars('hello, javacriptworld'))