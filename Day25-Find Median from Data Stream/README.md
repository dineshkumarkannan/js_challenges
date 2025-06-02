## Day 25

Problem Statement:

Design a class that supports the following operations:
addNum(num) — Adds a number to the stream.
findMedian() — Returns the median of all elements so far.
📌 You need to efficiently handle real-time stream of numbers and return the median at any point.

```js
let mf = new MedianFinder();

mf.addNum(1);
mf.addNum(2);
mf.findMedian(); // → 1.5

mf.addNum(3);
mf.findMedian(); // → 2
```
