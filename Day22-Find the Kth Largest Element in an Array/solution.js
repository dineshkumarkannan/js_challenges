// Solution #1

function findKthLargestElm(arr, k) {
  let heap = [];

  for (let num of arr) {
    heap.push(num);
    heap.sort((a, b) => a - b);

    if (heap.length > k) {
      heap.shift();
    }
  }

  return heap[0];
}
// Time Complexity: O(n log k)
// Space Complexity: O(k)
// Example usage:
// const arr = [3, 2, 1, 5, 6, 4];
// const k = 2;
// console.log(findKthLargestElm(arr, k)); // Output: 5

// above time complexity is O(n * k log k) because of the sort operation in each iteration.
// We can optimize this by using a min-heap of size k.

// Solution #2

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  remove() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }

    return min;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];

      if (element >= parent) break;

      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx] < element) swap = leftIdx;
      }

      if (rightIdx < length) {
        if (
          (swap === null && this.heap[rightIdx] < element) ||
          (swap !== null && this.heap[rightIdx] < this.heap[leftIdx])
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;

      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

function findKthLargest(nums, k) {
  const heap = new MinHeap();

  for (let num of nums) {
    heap.insert(num);
    if (heap.size() > k) {
      heap.remove();
    }
  }

  console.log(heap);

  return heap.peek(); // This is the Kth largest element
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5

// MinHeap

// Time Complexity: O(n log k)
// Space Complexity: O(k)

// A MinHeap is a complete binary tree
// - The parent node is always less than or equal to its children.
// - The smallest element is always at the root (index 0 of the array).
