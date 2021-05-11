"use strict";
//
// SPREAD
//
const cards = ['♠️', '♣️', '♥️', '♦️'];
const player = {
    name: "Lionel",
    score: 0
};
console.log(...cards);
// const playerInfo = (name: string, score: number = 0) => {
//   console.log(`Player[${name}] has scored ${score}`)
//}
// Get a copy of the player
let p1 = Object.assign({}, player);
p1.score = 10;
console.log(p1);
//
// Rest parameters
//
const puts = (...values) => {
    console.log(values);
};
puts(1, 23, "test");
