
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("A");
    console.log("N");    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMassage(username = "bat"){
    if(!username){
       console.log("Please enter a username");
       return
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("Shaban"));
// console.log(loginUserMassage("Shaban"))


function calculateCarPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCarPrice(200, 400, 500, 2000))

const user = {
    username: "Shaban",
    price: 199
}

function handleObject(anyObject){
     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "ball",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
     return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));