// solution #1

function groupBy(arr, prop) {
  if (arr.length === 0) return {};

  let result = {};

  for (let value of arr) {
    let propStr = value[prop];
    if (result[propStr]) {
      result[propStr].push(value);
    } else {
      result[propStr] = [];
      result[propStr].push(value);
    }
  }
  return result;
}

// solution #2

// using Map

function groupBy(arr, prop) {
  const map = new Map();
  for (let item of arr) {
    const key = item[prop];
    const group = map.get(key) || [];
    group.push(item);
    map.set(key, group);
  }
  return Object.fromEntries(map);
}

// solution #3

// use reduce

function groupBy(arr, prop) {
  return arr.reduce((acc, obj) => {
    const key = obj[prop];
    (acc[key] ||= []).push(obj);
    return acc;
  }, {});
}
