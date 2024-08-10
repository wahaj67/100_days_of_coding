// Q142
const pr = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Hello, world!")
    }, 2000);
})
pr.then(res=>console.log(res))
// Q143
const condi = new Promise<string>((resolve,reject)=>{
 const succes = Math.random() >0.5
 if(succes){
    resolve("success")

 }else{
    reject(new Error("failed"))
 }
})

condi.then((res)=>console.log(res))
condi.catch((err)=>console.log(err))

// Q144

const prom1 = Promise.resolve(3)
const Promise2 = 42
const promise3 = new Promise<string>((res)=>{
    setTimeout( res,100,"foo")
        
    
})
Promise.all([
    prom1,Promise2,promise3
]).then((values)=>console.log(values))
