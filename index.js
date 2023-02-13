// Code your solutions in this file
for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
} 
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow`)
        debugger;
    }
    return gifts;
}
wrapGifts(gifts); 
const names = ["Charlie", "Samip", "Ali"];
function writeCards(names, events) {
    const newNames = [];
    for (let i = 0; i < names.length; i++) {
        
        newNames[i] = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
    }
    return newNames;

    

} 
console.log( writeCards(names, "birthday"));
function countDown(n) {
    while(n >= 0) {
        console.log(n);
        n--;
    }
}
countDown(10);


    

    