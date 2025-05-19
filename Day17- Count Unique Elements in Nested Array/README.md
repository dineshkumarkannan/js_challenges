# Day 17

## Challenge: Count Unique Elements in Nested Array

Write a function that takes a deeply nested array of elements and returns the count of unique primitive values (like numbers, strings, booleans).

```js
countUnique([1, [2, [3, 4, 1], 2], 5, [3]]);
// Output: 5 (unique values: 1, 2, 3, 4, 5)

countUnique(["a", ["b", ["a", "c"]], "d"]);
// Output: 4 (unique values: "a", "b", "c", "d")
```

## Challenge : Return the actual unique values from the deeply nested array, preserving insertion order (not count)

```js
countUniqueValues([1, [2, 3, [1, 4]], 2, [5, [3]]]);
// Output: [1, 2, 3, 4, 5]
```

## Challenge : Write a function chunkArray(arr, size) that splits an array into groups of the specified size and returns them as a 2D array.

```js
chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// Output: [[1, 2, 3], [4, 5, 6], [7]]
```
