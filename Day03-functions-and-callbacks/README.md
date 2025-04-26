# Day 03 – Functions & Callbacks Basics

## 🧠 Goal:

- Master JavaScript functions
- Learn how to pass a function into another function (callback concept)

---

## 💬 Task:

Create a function `processNumbers(arr, callback)` that:

1. Accepts an array of numbers.
2. Accepts a **callback function** to apply on **each** number.
3. Returns a **new array** containing the results.

---

## 📦 Example:

```js
const nums = [1, 2, 3, 4, 5];

function double(n) {
  return n * 2;
}

processNumbers(nums, double);
// Output: [2, 4, 6, 8, 10]
```
