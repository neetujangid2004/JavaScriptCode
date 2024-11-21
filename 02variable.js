const accountId = 144553;
let accountEmail = "neetujangid@gmail.com"
var accountPassword = "123456"
accountCity = "ajmer"

let accountState;
console.log(accountState);  // undefined

// accountId = 4567 // not allowed beacause constant value are not changable
console.log(accountId);

accountEmail = "prakashjangid@gmail.com";
console.log(accountEmail);

console.log([accountId, accountEmail, accountPassword, accountCity]);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// Prefer not to use var because of issue in block scope and functional scope
var accountPassword = "neetu123@";