// singleton
// object .create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shaban",
    "full name": "Shaban Hashim",
    [mySym]: "mykey1",
    age: 18,
    location: "Multan",
    email: "shaban@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Shaban@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Shaban@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());