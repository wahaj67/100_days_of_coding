// Q127
function traditional(a:number,b:number):number{
    return a+b
}

console.log(traditional(95,87))

const traditional1 =(a:number,b:number)=> a+b

console.log(traditional1(95,87))

// Q128
const multiply=(...numbers:number[])=>
    numbers.reduce((total,number)=>total*number,1)

console.log(multiply(3,67,68))

// Q129

const traditionalVsArrow={
    value:"traditionalVsArrow value",
    traditionalFunc:function(){
        console.log("traditonal function", this.value)
    },
    arrowFunction:()=>{
        console.log("arrow function", this.value)
    }
}
traditionalVsArrow.traditionalFunc()
traditionalVsArrow.arrowFunction()