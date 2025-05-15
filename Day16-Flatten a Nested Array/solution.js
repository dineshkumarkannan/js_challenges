// solution : Challenge 1

function flattenArray(arr) {
  let result = [];

  while (arr.length > 0) {
    let currElm = arr.pop();
    if (!Array.isArray(currElm)) {
      result.push(currElm);
    } else {
      arr.push(...currElm);
    }
  }
  return result.reverse();
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7])); // [1, 2, 3, 4, 5, 6, 7]
