const accountId = 144553
let accountEmail = "shaban@google.com"
var accountPassword = "12345"
accountCity = "Multan"
let accountstate;

// accountId = 2// not allowed

accountEmail = "sh@sh.com"
accountPassword = "381381"
accountCity = "Lahore"

console.log(accountId);


/* 
prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])