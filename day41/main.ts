// Q 121
for (let i =1; i<=10; i++){
    if(i === 5){
        continue
    }
    console.log(i)
}
// Q 122

let counter:number = 10
while(counter > 0){
    if(counter===5){
        break
    }
    console.log(counter)
    counter--
}

// Q123

function vowel(str:string){
    const vowels = "aeiouAEIOU"
    for(const char of str){
        if(vowels.includes(char)){
            console.log(`First vowel found: ${char}`)
        break
        }
   
        console.log(char)
    }
}

vowel("hello")
vowel("sidrawahajali")
