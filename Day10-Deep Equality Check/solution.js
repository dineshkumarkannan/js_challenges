function deepEqual(a, b) {
  // Fast path for identical values
  if (a === b) return true;

  // Handle null or non-objects
  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    return false;
  }

  // Handle Date
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // Handle Set
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    const arrA = Array.from(a);
    const arrB = Array.from(b);
    return arrA.every((val) => arrB.some((bVal) => deepEqual(val, bVal)));
  }

  // Handle Map
  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (let [key, val] of a.entries()) {
      if (!b.has(key)) return false;
      if (!deepEqual(val, b.get(key))) return false;
    }
    return true;
  }

  // Handle Array
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // Handle Function by reference
  if (typeof a === "function" || typeof b === "function") {
    return a === b;
  }

  // Handle plain Object
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

// Solution - Day 10.1

// 1. Two-Pointer Approach (Sorted Array)

function findPairsTwoPointer(arr, target) {
  arr.sort((a, b) => a - b);
  let start = 0,
    end = arr.length - 1;
  let result = [];

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === target) {
      result.push([arr[start], arr[end]]);
      start++;
      end--;
      while (arr[start] === arr[start - 1]) start++; // Skip duplicates
      while (arr[end] === arr[end + 1]) end--; // Skip duplicates
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  return result;
}

//   2. Hash Map Approach (Unsorted Array)

function findPairsHashMap(arr, target) {
  const seen = new Set();
  const result = new Set(); // To prevent duplicate pairs

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      const pair = [
        Math.min(num, complement),
        Math.max(num, complement),
      ].toString();
      result.add(pair);
    }
    seen.add(num);
  }

  return Array.from(result).map((pair) => pair.split(",").map(Number));
}

// 3. Brute Force Approach (Nested Loops)

function findPairsBruteForce(arr, target) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}
