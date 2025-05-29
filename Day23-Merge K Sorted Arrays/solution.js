class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Swap helper
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert new node into heap
  insert(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  // Bubble up to maintain heap property
  bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent].val > this.heap[index].val) {
        this.swap(parent, index);
        index = parent;
      } else {
        break;
      }
    }
  }

  // Remove and return the smallest node (top)
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  // Bubble down to maintain heap property
  bubbleDown(index) {
    const length = this.heap.length;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left].val < this.heap[smallest].val) {
        smallest = left;
      }
      if (right < length && this.heap[right].val < this.heap[smallest].val) {
        smallest = right;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function mergeKSortedArrays(arrays) {
  const heap = new MinHeap();
  const result = [];

  // Step 1: Insert first element of each array into the heap
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) {
      heap.insert({ val: arrays[i][0], arrIdx: i, eleIdx: 0 });
    }
  }

  // Step 2: While heap is not empty
  while (!heap.isEmpty()) {
    const { val, arrIdx, eleIdx } = heap.extractMin();
    result.push(val);

    // Step 3: Push next element from same array into heap
    const nextIdx = eleIdx + 1;
    if (nextIdx < arrays[arrIdx].length) {
      heap.insert({ val: arrays[arrIdx][nextIdx], arrIdx, eleIdx: nextIdx });
    }
  }

  return result;
}

// Example usage:
const arrays = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
console.log(mergeKSortedArrays(arrays)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// This code defines a MinHeap class and a function to merge K sorted arrays using the heap.
// The MinHeap class provides methods to insert elements, extract the minimum element, and maintain the heap property.
// The mergeKSortedArrays function uses the MinHeap to efficiently merge K sorted arrays into a single sorted array.

// time Complexity: O(N log K), where N is the total number of elements across all arrays and K is the number of arrays.
// space Complexity: O(K), for the heap that stores at most K elements at any time.
// This implementation efficiently merges K sorted arrays using a min-heap, ensuring optimal performance.

// Solution: Challenge 2 - Top K Frequent Elements

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap.push(node);
    this.bubbledUp();
  }

  remove() {
    console.log("called");
    if (this.size === 0) return null;

    let min = this.heap[0];
    let end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbledDown();
    }

    return min;
  }

  bubbledUp() {
    let idx = this.heap.length - 1;
    let elm = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];

      if (parent[1] < elm[1]) break;

      this.heap[parentIdx] = elm;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  bubbledDown() {
    let idx = 0;
    let length = this.heap.length;

    while (true) {
      let elm = this.heap[idx];
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length && elm[1] > this.heap[leftIdx][1]) {
        swap = leftIdx;
      }

      if (
        rightIdx < length &&
        ((swap === null && elm[1] > this.heap[rightIdx][1]) ||
          (swap !== null && this.heap[rightIdx][1] < this.heap[leftIdx][1]))
      ) {
        swap = rightIdx;
      }

      console.log(swap);

      if (swap === null) break;

      this.heap[idx] = this.heap[swap];
      this.heap[swap] = elm;
      idx = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

function mostFequentElements(arr, k) {
  let freq = new Map();
  let heap = new MinHeap();

  for (let val of arr) {
    freq.set(val, (freq.get(val) || 0) + 1);
  }

  for (let res of freq.entries()) {
    heap.insert(res);
    if (heap.size() > k) {
      heap.remove();
    }
  }

  return heap.heap.sort((a, b) => b[1] - a[1]).map((entry) => entry[0]);
}

console.log(mostFequentElements([1, 1, 1, 2, 2, 3, 3, 3, 3], 2)); // Output: [1, 3]
