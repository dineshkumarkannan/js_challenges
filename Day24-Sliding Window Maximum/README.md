## Day 24

## Challenge 1 : Sliding Window Maximum

You are given an array of integers nums and an integer k.
Your task is to return an array of the maximum values in every contiguous subarray (window) of size k.

```js
// Input: (nums = [1, 3, -1, -3, 5, 3, 6, 7]), (k = 3);
// Output: [3, 3, 5, 5, 6, 7];

// Explanation:
// Window positions:
// [1 3 -1] -3  5  3  6  7 → max = 3
//  1 [3 -1 -3] 5  3  6  7 → max = 3
//  1  3 [-1 -3 5] 3  6  7 → max = 5
//  1  3 -1 [-3 5 3] 6  7 → max = 5
//  1  3 -1 -3 [5 3 6] 7 → max = 6
//  1  3 -1 -3  5 [3 6 7] → max = 7
```

## Challenge 2 : First Negative Integer in Every Window of Size K

Given an array of integers and a window size k, return the first negative integer in every sliding window of size k. If there is no negative integer in a window, return 0 for that window.

```js
Input: (arr = [12, -1, -7, 8, 15, 30, 16, 28]), (k = 3);
Output: [-1, -1, -7, 0, 0, 0];

// Explanation:
// Window 1: [12, -1, -7] → First negative: -1
// Window 2: [-1, -7, 8] → First negative: -1
// Window 3: [-7, 8, 15] → First negative: -7
// Window 4: [8, 15, 30] → No negative → 0
// Window 5: [15, 30, 16] → No negative → 0
// Window 6: [30, 16, 28] → No negative → 0
```
