## Day 10 - Deep Equality Check

### Goal

Write a function that compares two values deeply and returns true if they are the same in structure and content.

### Key Concepts

- Recursion
- Type comparison
- Object and array traversal

### Example

```js
deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }); // true
```

// Brute Force Approach

function findPairsBruteForce(arr, target) {
const result = [];

for (let i = 0; i < arr.length; i++) {
for (let j = i + 1; j < arr.length; j++) {
if (arr[i] + arr[j] === target) {
result.push([arr[i], arr[j]]);
}
}
}

return result;
}

## Day 10.1 - Find Pairs That Sum to Target

### Goal

Write a function that finds all pairs of numbers in an array that add up to a given target.

```js
function findPairs(arr, target) {
  // Your code here
}

console.log(findPairs([1, 2, 3, 4, 5, 6], 7));
// Expected Output: [[1, 6], [2, 5], [3, 4]]
```
