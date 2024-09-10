let numbers = [3, 1, 43, 34, 12];

function sortArray() {
  return numbers.sort((a, b) => a - b);
}

console.log("Original array:", numbers);
console.log("Sorted array:", sortArray());
