//  q = 88 

function roundToNearestInteger(num:number):number{
    return Math.round(num)
}
console.log(roundToNearestInteger(4.7))
console.log(roundToNearestInteger(4.4))

// q = 89 ;
function convertStringToNumber(str:string):number{
    return parseFloat(str)

}
console.log(convertStringToNumber("123.45"))
console.log(convertStringToNumber("98"))

// q = 90 ;
function isValueNan(value:any):boolean{
    return isNaN(value);
}
console.log(isValueNan("hello"))
console.log(isValueNan(123))
