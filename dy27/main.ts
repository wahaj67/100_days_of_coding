let car = {
make:"toyota",
model:"corolla",
year : 2020


}
console.log(car.model)

let car = {
    make:"toyota",
    model:"corolla",
    year:2020,
  color:"blue"  
};
car.color = "green";
  car.year = 2021

console.log(car)

function logObjestProperties(obj:object) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`)
    }
}

logObjestProperties({make:"toyota",model:"corolla",year:"2021",color:"blue"})