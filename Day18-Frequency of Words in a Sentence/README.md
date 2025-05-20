## Day 18

### Challenge: Frequency of Words in a Sentence

Write a function wordFrequency(sentence) that takes a sentence string and returns an object with each word as a key and its frequency as the value. Ignore punctuation and treat words as case-insensitive.

```js
wordFrequency(
  "The quick brown fox jumps over the lazy dog. The dog was not amused."
);

// Output:
// {
//   the: 3,
//   quick: 1,
//   brown: 1,
//   fox: 1,
//   jumps: 1,
//   over: 1,
//   lazy: 1,
//   dog: 2,
//   was: 1,
//   not: 1,
//   amused: 1
// }
```

### Challenge: Remove Common Stop Words

In this version, we’ll ignore commonly used stop words like "a", "the", "is", "and", etc., to focus on more meaningful words in the frequency count.

```js
wordFrequencyNoStopWords("This is a test. This test is simple and useful.");
// Output:
// {
//   test: 2,
//   this: 2,
//   simple: 1,
//   useful: 1
// }
```
