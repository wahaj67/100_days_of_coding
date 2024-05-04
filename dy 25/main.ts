// question 73
function updateVariable(){
    let number = 10
    console.log("Intial value" , number)


    number = 20 
    console.log("Update value", number)
}
updateVariable()

// question 74
function swapValue(){
    let a= 5 , b = 10
    console.log("before swap : a =",a,"b=",b)
    let temp = a
     a = b 
     b= temp
 console.log("After swap:a=",a, "b=",b)

}
swapValue()

//  question 75
function useCompoundOperators(){
    let x = 4
    console.log("Intial x:",x)
     x += 2 
     console.log("After addition:", x)
     x-=1
     console.log("After subtraction:", x)
     x*=3
     console.log("After multiplication:",x)
     x/=2
     console.log("After division:",x)
     
}
useCompoundOperators()