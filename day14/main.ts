function make_album(artist: string,title: string, tracks?: number) {
    let album ={artist, title}
    if (tracks){
        album[tracks] = tracks;
    }
    return album
}

console.log(make_album("artist one","the first album"))
console.log(make_album("artist  two", "the second album"))
console.log(make_album("artist three","the third album"))

let magician : string[] = ["khizer","qasim","zyan"]
function show_magician(magician:string[]){
    magician.forEach(magician => {
        console.log(magician)
    }
  )

}
show_magician(magician);

function make_great(magician: string[]) {
    for(let i = 0; i<magician.length; i++) {
        magician[i] = magician[i] + "the great";
    }
}
make_great(magician)
show_magician(magician)