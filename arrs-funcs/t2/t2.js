let numbers = [];

for (let i = 0; i < 5; i++) {
  let number = prompt(`Enter Number ${i + 1}: `);
  numbers.push(Number(number));
}

// [...] -> spread operaattori
let nums = [...numbers];

let num = numbers.includes(2);

let message = num
  ? "Number 2 is in the array."
  : "Number 2 is not found in the array.";

let sortNums = [...numbers];

numbers.pop();
numbers.sort((a, b) => a - b);

document.querySelector("#numbers").innerHTML = `Numbers: [${nums.join(", ")}]`;
document.querySelector("#num").innerHTML = `${message}`;
document.querySelector("#update").innerHTML = `Updated Numbers: [${numbers.join(
  ", "
)}]`;
document.querySelector("#sort").innerHTML = `Sorted numbers: [${sortNums.join(
  ", "
)}]`;

console.log("Numbers:", nums);
console.log("Updated Numbers:", numbers);
console.log("Enter a number to search:\n" + message);
