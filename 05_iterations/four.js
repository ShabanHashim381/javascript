const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "cpp"]

for (const key in programming) {
    console.log(key);
}

// const map = new Map()
// map.set('PAK', "Pakistan")
// map.set('USA', "United StateS OF America")
// map.set('CHI', "China")

// for (const key in object) {
//     console.log(key);
// }