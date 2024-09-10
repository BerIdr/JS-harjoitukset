function sortArray(numbers, order) {
  let newArray;
  if (order === "asc") {
    newArray = numbers.sort((a, b) => a - b);
  } else if (order === "desc") {
    newArray = numbers.sort((a, b) => b - a);
  }
  return newArray;
}

const numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, "desc"));
console.log(sortArray(numbers, "asc"));

const sortedArray = sortArray(numbers, "asc");
console.log(sortedArray);
