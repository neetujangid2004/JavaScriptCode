/*  
    Stack (Primitive), Heap (Non-Primitive)
*/
let myChannal = "neetujangid@gmail.com";
let anotherName = myChannal;
anotherName = "jangid@gmail.com";

// console.log(myChannal);
// console.log(anotherName);

let userOne = {
    email: "neetujangid@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "neetu@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);