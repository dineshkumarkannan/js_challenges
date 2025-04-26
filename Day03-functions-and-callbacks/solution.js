// solution #1

function processNumbers(arr, cb) {
  let res = [];
  for (let val of arr) {
    let cbRes = cb.call(this, val);
    res.push(cbRes);
  }
  return res;
}

// Callback: Double
function double(n) {
  return n * 2;
}

// Callback: Square
function square(n) {
  return n * n;
}

// Sample usage
const numbers = [1, 2, 3, 4, 5];

console.log(processNumbers(numbers, double)); // [2, 4, 6, 8, 10]
console.log(processNumbers(numbers, square)); // [1, 4, 9, 16, 25]

// solution #2

function filterNumbers(arr, callback) {
  const result = [];
  for (const num of arr) {
    if (callback(num)) {
      result.push(num);
    }
  }
  return result;
}

// Callback: is even
function isEven(n) {
  return n % 2 === 0;
}

console.log(filterNumbers(numbers, isEven)); // [2, 4]
