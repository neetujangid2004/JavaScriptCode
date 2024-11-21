let score = "33";
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);             // 33

/*
        "33"        ->  33
        "33abc"     ->  NaN
        true        ->  1,  false   ->  0
        null        ->  0
        undefined   ->  NaN
 */

let isLoggedIn = "";
let stringL = "neetu";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);                 // false

let strbooleanIsLoggedIn = Boolean(stringL);
// console.log(strbooleanIsLoggedIn);              // true

/* 
        1       ->  true,   0   ->  false
        ""      ->  false
        "neetu" ->  true
*/

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);