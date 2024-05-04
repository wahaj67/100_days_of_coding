function make_shirt(size: string = "large",message : string = "ilove typescript") {
    console.log(`making a ${size} shirt message with ${message } printed on it `)
}

make_shirt();
make_shirt("medium")
make_shirt('small', 'dive into coding')

function decribe_city(city: string, country: string = 'pakistan') {
    console.log(`${city} is in ${country}`)
}
decribe_city("karachi")
decribe_city("lahore")
decribe_city("tokyo","japan")


function city_country(city: string, country:string ): string {
    return `${city},${country}`
}
console.log(city_country("lahore","pakistan"))
console.log(city_country("tokyo","japan"))
console.log(city_country("paris","france"))