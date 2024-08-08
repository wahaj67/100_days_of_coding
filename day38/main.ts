// Q112
const countries = new Map<string, string>()
countries.set("USA","United States of America")
countries.set("CAN","Canada")
countries.set("FRA","France")
countries.set("Japan","Tokyo")

console.log(countries)

// Q113
function checkMap(countries:Map<string, string>) :void{
    if(countries.has("Pakistan")){
        console.log(`the country of pakistan is ${countries.get("pakistan")}`)
    }else {
        console.log("pakistan is not in the map")
    }
}

checkMap(countries)

//Q114

const students = new Map<number,string>()
students.set(1,"wahaj ali")
students.set(2,"qasim")
students.set(3,"waseem")

students.forEach((name,id)=>{
    console.log(`Student id: ${id} , name: ${name}`)
})