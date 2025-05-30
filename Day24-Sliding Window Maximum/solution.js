// Solution #1

function slidingWindowMaximum(arr, k) {
  let result = [];
  let deque = [];

  for (let i = 0; i < arr.length; i++) {
    if (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    while (deque.length && arr[deque[deque.length - 1]] < arr[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }
  return result;
}

console.log(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3, 3, 5, 5, 6, 7]
// Time Complexity: O(n)
// Space Complexity: O(k) for the deque
// Explanation:
// The function maintains a deque that stores indices of array elements in a way that the elements are in decreasing order.
// When the current index exceeds the window size, it removes the oldest index from the front of the deque.
// It also removes indices from the back of the deque if the current element is greater than the elements at those indices.
// Finally, it adds the current index to the deque and, if the window is fully formed, appends the maximum element (the front of the deque) to the result array.
// This approach ensures that we always have the maximum element of the current window at the front of the deque.
// The time complexity is O(n) because each element is added and removed from the deque at most once.
// The space complexity is O(k) because the deque can hold at most k elements at any time.
// This solution efficiently computes the maximum of each sliding window of size k in the input array.

// Solution : Challenge 2

function firstNegativeInEveryWindow(arr, k) {
  let deque = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      deque.push(i);
    }

    if (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    if (i >= k - 1) {
      result.push(deque.length > 0 ? arr[deque[0]] : 0);
    }
  }
  return result;
}

console.log(firstNegativeInEveryWindow([12, -1, -7, 8, 15, 30, 16, 28], 3)); //
