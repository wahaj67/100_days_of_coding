// Q124
interface person{
    name:string
    getName():string
}

const persons:person={
    name:"Wahaj",
    getName() {
        return this.name
    },
}
console.log(persons.getName())

// Q125
interface rect{
    width:number
    height:number
    calculateArea():number
}

const rectangle:rect={
    width:20,
    height:30,
    calculateArea(){
        return this.width * this.height
    }
}

console.log(rectangle.calculateArea())

// Q126
interface ob{
    property:string
    outerMethod():void
}

const obj:ob={
    property:"value",
    outerMethod(){
   console.log(this.property)
const inneMethod =()=>{
    console.log(this.property)
}
inneMethod()
}
}
obj.outerMethod()
