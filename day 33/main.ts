// q 97 
function getCurrentDateFormatted():string{
    const now = new Date
    const day = String(now.getDate()).padStart(2,'0')
    const month = String(now.getMonth()+1).padStart(2,'0')
const year =  now.getFullYear()
return `${day}-${month}-${year}`
}
console.log(getCurrentDateFormatted())

// q 98
function daysUntillNewYear():number{
    const today=new Date() 
    const newYear=new Date (today.getFullYear() +1,0,1) 
    const diff=newYear.getTime()-today.getTime()
    const days = Math.ceil(diff/(1000*60*60*24))
    return days        
}
console.log(daysUntillNewYear()+"days untill new year")

// q99
function getNextBirthDay(month:number,day:number):Date{
    const today=new Date ()
    let year = today.getFullYear()
    const birthday=new Date(year , month-1,day)
    if(birthday<today){
        birthday.setFullYear(year+1)
    }
    return birthday
}

const nextBirthday = getNextBirthDay(5,16)
console.log(`Next Birht day on: ${nextBirthday.toLocaleDateString()}`)
