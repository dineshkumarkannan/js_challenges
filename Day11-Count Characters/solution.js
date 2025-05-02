// Solution #1

function countCharacters(str) {
  const lstr = str.replace(/\s/g, "").toLowerCase();
  const result = {};

  for (let val of lstr) {
    result[val] = (result[val] || 0) + 1;
  }

  return result;
}

// Solution #2 - Using Map

function countCharacters(str) {
  const lstr = str.replace(/\s/g, "").toLowerCase();
  const map = new Map();

  for (let char of lstr) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return Object.fromEntries(map); // Convert back to plain object
}

// Day 11.1 - Solution #1

function mostFrequentChars(str) {
  const cleaned = str.replace(/\s/g, "").toLowerCase();
  const freq = {};
  let maxCount = 0;
  let result = [];

  for (let char of cleaned) {
    freq[char] = (freq[char] || 0) + 1;
    maxCount = Math.max(maxCount, freq[char]);
  }

  for (let key in freq) {
    if (freq[key] === maxCount) {
      result.push(key);
    }
  }

  return result;
}
