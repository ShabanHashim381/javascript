// for of
 
["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Eac char is ${greet}`)
}

// Maps

const map = new Map()
map.set('PAK', "Pakistan")
map.set('USA', "United StateS OF America")
map.set('CHI', "China")



// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-', value );
}

const myObject = {
    game1: 'NFS',
    game2:'Spiderman'
}

// for (const [key, value ] of object) {
//     console.log(key,':-', value );

// }