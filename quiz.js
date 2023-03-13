const arr = [];
const arr2 = arr.forEach(n => {

})
const arr3 = arr.map(res => {
    console.log(res);
})

const name = 'Hero'; const age = 34;
const person3 = { name, age };
//  console.log(person);
const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
const ratName = adventurer?.rat?.name;

// console.log(ratName);
let person = null;
console.log(person ? person : "person is null");

const also = [];

const result = also.filter(s => s)

const obj = { a: 1 }
console.log(Object.keys(obj).length === 0);