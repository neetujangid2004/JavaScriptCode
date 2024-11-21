/* Primitive data types 
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt
*/

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 123456789012;
// console.log(typeof(bigNumber) + " - " + bigNumber);

const bigNumber1 = 12345678901223n;
// console.log(typeof(bigNumber1) + " - " + bigNumber1);

/*
    Reference (Non primitive) data types
    array, objects, function
*/
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "neetu",
    age: 22
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof(heros) + " - " + heros);
console.log(typeof(myObj) + " - " + myObj);
console.log(typeof(myFunction))

/*  number  -   number
    string  -   string
    boolean -   boolean
    symbol  -   symbol
    null    -   object
    undefined-  undefined
    bigIng  -   bigInt
    array   - objectie
    object  - object
    function- function
 */