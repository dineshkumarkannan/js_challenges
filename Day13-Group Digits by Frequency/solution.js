// solution : challenge 1

function groupDigitsByFrequency(str) {
  const freqMap = new Map();

  for (let char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Sort entries by frequency (value) in descending order
  const sortedEntries = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

  return Object.fromEntries(sortedEntries);
}

// solution : challenge 2

function groupDigitsBySameFrequency(str) {
  const result = {};
  const freqMap = [...str].reduce((map, curr) => {
    return map.set(curr, (map.get(curr) || 0) + 1);
  }, new Map());

  for (let [key, val] of freqMap) {
    if (!result[val]) {
      result[val] = [];
    }
    result[val].push(key);
  }
  return result;
}

// solution : challenge 3

function groupMostFrequentDigits(str) {
  let freqMap = new Map();
  let maxCount = 0;

  for (let char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, freqMap.get(char));
  }

  const filtered = [...freqMap.entries()]
    .filter(([_, v]) => v === maxCount)
    .sort((a, b) => a[0] - b[0]);

  return Object.fromEntries(filtered);
}

// solution : challenge 4

function mostFrequentAlphaNum(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const freqMap = new Map();
  let maxCount = 0;

  for (let char of cleanedStr) {
    let count = (freqMap.get(char) || 0) + 1;
    freqMap.set(char, count);
    maxCount = Math.max(maxCount, count);
  }

  // Filter only those with max frequency
  const maxEntries = Array.from(freqMap)
    .filter(([_, count]) => count === maxCount)
    .sort((a, b) => a[0].localeCompare(b[0])); // optional alphabetical sort

  // Convert to object
  return Object.fromEntries(maxEntries);
}

// solution : challenge 5

function removeCharAppearsMoreThanOnce(str) {
  const freqMap = {};

  for (let char of str) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  return [...str].filter((char) => freqMap[char] === 1).join("");
}

console.log(
  removeCharAppearsMoreThanOnce(
    "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"
  )
);

// solution : challenge 6

function removeNonRepeats(str) {
  const freq = {};
  const result = [];

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] > 1) {
      result.push(char);
    }
  }

  return result.join("");
}

console.log(removeNonRepeats("abacdc")); // aacc
