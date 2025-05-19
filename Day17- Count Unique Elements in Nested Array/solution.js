// solution #1

function countUnique(arr) {
  let stack = [...arr];
  let uniqueSet = new Set();

  while (stack.length > 0) {
    const value = stack.pop();

    if (Array.isArray(value)) {
      stack.push(...value);
    } else {
      uniqueSet.add(value);
    }
  }

  return uniqueSet.size;
}

console.log(countUnique([1, [2, [3, 4, 1], 2], 5, [3]]) === 5); // 1, 2, 3, 4, 5
console.log(countUnique([1, 2, 3, 4, 5]) === 5); // 1, 2, 3, 4, 5

// sollution #2

function countUniqueValues(arr) {
  const result = [];
  const seen = new Set();

  function flatten(input) {
    for (const item of input) {
      if (Array.isArray(item)) {
        flatten(item);
      } else if (!seen.has(item)) {
        seen.add(item);
        result.push(item);
      }
    }
  }

  flatten(arr);
  return result;
}
console.log(countUniqueValues([1, [2, [3, 4, 1], 2], 5, [3]])); // [1, 2, 3, 4, 5]
console.log(countUniqueValues([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

// solution #3

function chunkArray(arr, len) {
  return arr.reduce((result, curr) => {
    let last = result[result.length - 1];
    if (!last || last.length === len) {
      result.push([curr]);
    } else {
      last.push(curr);
    }
    return result;
  }, []);
}

function chunkArray(arr, len) {
  let result = [];

  for (let i = 0; i < arr.length; i += len) {
    result.push(arr.slice(i, i + len));
  }

  return result;
}
