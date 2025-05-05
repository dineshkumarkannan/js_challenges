### Day 14

# Challenge 1 : Group Consecutive Duplicates

Write a function groupConsecutiveDuplicates(str) that groups consecutive duplicate characters in a string into sub-arrays. The result should be an array of arrays, where each sub-array contains the same character repeated consecutively.

Note : In this challenge, you're only grouping characters that appear consecutively in the string — not all occurrences of the same character throughout the string

```js
groupConsecutiveDuplicates("aaabbcdddde");
// Output: [['a', 'a', 'a'], ['b', 'b'], ['c'], ['d', 'd', 'd', 'd'], ['e']]
```

# Challenge 2 : Compress Consecutive Characters

Given a string, compress consecutive characters into "char + count" format. If a character appears only once consecutively, keep it as is.

```js
Input: "aaabbcdee";
// Output: "a3b2cd1e2"
```
