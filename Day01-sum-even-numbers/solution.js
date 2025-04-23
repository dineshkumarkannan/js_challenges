// solution #0

function sumEvenNumbers(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let val of arr) {
    if (val % 2 === 0) {
      sum += val;
    }
  }
  return sum;
}

// solution #1
function sumEvenNumbers(arr) {
  return arr
    .filter((val) => val % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
}

sumEvenNumbers([1, 2, 3, 4, 5, 6]); // ➞ 12
sumEvenNumbers([7, 11, 13]); // ➞ 0
sumEvenNumbers([2, 4, 6, 8]); // ➞ 20
sumEvenNumbers([]); // ➞ 0
