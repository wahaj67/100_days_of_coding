// Q145
function execu(callback:(arg1:number,arg2:number)=>void):void

{
callback(10,20)
}
const add = (a:number,b:number)=>{
console.log(a+b)
}
execu(add)
// Q146\
const num:number[]=[10,20,30,40]

const fil:number[] = num.filter((numb)=>numb>5) 

console.log(fil)

// q147
function fetch(callback:(error:Error|null,data?:string)=>void):void{
    const error = new Error("failed to fecth data")
const data = "some data"
if(Math.random()>0.5){
    callback(null,data)

} else{
    callback(error)
}

fetch((error,data)=>{
    if(error){
        console.error(error.message)

    }else{
        console.log(data)
    }
})


}