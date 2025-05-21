### Day 20

### Challenge: Track Character Streaks

Write a function that takes a string and returns an array of objects, where each object represents a sequence of repeated characters and how many times they repeat in a row.

```js
charStreaks("aaabbcddddd");

// Output:
// [
//   { char: "a", count: 3 },
//   { char: "b", count: 2 },
//   { char: "c", count: 1 },
//   { char: "d", count: 5 },
// ];
```

### Challenge : Compress the String with Streaks

compress the string by representing each streak as the character followed by its count.
But if a character appears only once, just show the character without the count.

```js
compressStreaks("aaabbcddddd");
// Output: "a3b2cd5"
```
