let fruits = ["apple", "banana", "orange", " grape", "kiwi"];
let vegetables = [];

for (let i = 0; i < 3; i++) {
  let vegetable = prompt("Enter a veggie: ");
  vegetables.push(vegetable);
}

console.log("Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);
console.log("Element at Index 2:", fruits[2]);
console.log("Last Element of Fruits:", fruits[fruits.length - 1]);
console.log("Veggies: ", vegetables);
console.log("Length of Veggies: ", vegetables.length);
