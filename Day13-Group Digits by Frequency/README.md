## Day 13

# Challenge 1 : Group Digits by Frequency

Write a function that takes a string of digits and returns an object where each key is a digit, and its value is the number of times it appears — sorted in descending order of frequency.

```js
groupDigitsByFrequency("312313223");

// Output:  {
//   "3": 3,
//   "2": 3,
//   "1": 2
// }
```

# Challenge 2 : Group digits by frequency, but group digits that share the same frequency together.

```js
// Input: "312313223"
// Output: {
//   3: ["3", "2"],
//   2: ["1"]
// }
```

# Challenge 3 : Return only the digit(s) that appear most frequently (i.e., max frequency), sorted in ascending digit order.

```js
groupMostFrequentDigits("312313223");
// Output: { '2': 3, '3': 3 }
```

# Challenge 4 : Find the most frequent alphanumeric characters (letters & digits only) in a string, ignoring spaces and special characters, and return them in descending order of frequency.

```js
mostFrequentAlphaNum("abca123#@!112233 && ab");
// Output: {
//   "1": 3,
//   "2": 3,
//   "3": 3,
//   "a": 3,
//   "b": 3
// }
```

# Challenge 5 : Remove Characters That Appear More Than Once

Given a string, return a new string with only characters that appear exactly once, in the original order.

```js
Input: "programming";
// Output: "poain"
```

# Challenge 6 : Remove Non-Repeating Characters

Write a function that removes all characters that appear only once in the string. Only keep characters that occur more than once — in their original order.

```js

removeNonRepeats("programming") ➞ "rgrammng"
removeNonRepeats("abacdc") ➞ "aac"
removeNonRepeats("xyz") ➞ ""

```
