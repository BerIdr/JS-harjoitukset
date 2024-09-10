let numbers = [];

while (true) {
  let input = prompt("Enter a number:");

  let number = Number(input);

  if (!isNaN(number) && input.trim() !== "") {
    numbers.push(number);
  } else {
    break;
  }
}

let evenNumbers = [];

for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

document.querySelector("#numbers").innerHTML = `Numbers: ${numbers.join(
  ", "
)}<br>Even Numbers: ${
  evenNumbers.length > 0 ? evenNumbers.join(", ") : "None"
}`;

console.log("Numbers:", numbers);
console.log(
  "Even Numbers:",
  evenNumbers.length > 0 ? evenNumbers.join(", ") : "None"
);
