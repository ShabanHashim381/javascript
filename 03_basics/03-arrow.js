const user = {
    username: "Shaban",
    price: 999,
    
    welcomeMassage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMassage()
// user.username = "sam"
// user.welcomeMassage()

// console.log(this); 

// function chai(){
//     let username = "Shaban"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Shaban"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Shaban"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  (num1 + num2)

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  {username: "Shaban"}
   
 
console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()