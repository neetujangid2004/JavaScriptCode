const score = 400;
// console.log(score);

const balance = new Number(100);

// console.log(balance);
// console.log(balance.toString() + " - " + typeof(balance) + "  -  " + balance.toString().length);
// console.log(balance.toFixed(2));

const otherName = 23.8966;
// console.log(otherName.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

/*************** Maths *************/
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(23.7));
// console.log(Math.ceil(8.2));
// console.log(Math.floor(67.9));
// console.log(Math.min(23, 56, 89, 12));
// console.log(Math.max(56, 78, 90, 12));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min = 20;
const max = 25;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);