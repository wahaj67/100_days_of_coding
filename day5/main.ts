// let  transport : string[] = ['honda125','bmw','submarine']
// transport.forEach(transport => {
//     console.log(`i would like to a own${transport}`)
// }

// )



let guest: string[]=['zyan','zubair','khalil','qasim']
guest.forEach(guest => {
    console.log(`kindly take dinner with me ${guest}`)
}
    )



let unabletoattend = "zubair"
console.log(`${unabletoattend} cant make it dinner`)

let newguest = "hammad"
guest[guest.indexOf(unabletoattend)] = newguest
guest.forEach(guest => {
    console.log(`dear ${guest}would you like to join with dinner`)
}

)