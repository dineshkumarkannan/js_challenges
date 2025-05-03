// Solution : Challenge 1

function findLongSubString(str) {
  let maxLength = 0;

  let start = 0,
    end = 0;

  let seen = new Map();

  while (end < str.length) {
    let char = str[end];

    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }
    seen.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
  }
  return maxLength;
}

console.log(findLongSubString("abcabcbb")); // 3
console.log(findLongSubString("bbbbb")); // 1

// Solution : Challenge 2

function sortCharBaseOnFrequency(str) {
  const freqMap = new Map();
  const cleanStr = str.replace(/\s/g, "").toLowerCase();

  for (let char of cleanStr) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  const sortedChars = [...freqMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([char, count]) => char.repeat(count))
    .join("");

  return sortedChars;
}

// Solution : Challenge 3

function areAnagrams(str1, str2) {
  const lstr1 = str1.replace(/\s/g, "").toLowerCase();
  const lstr2 = str2.replace(/\s/g, "").toLowerCase();

  if (lstr1.length !== lstr2.length) return false;

  const mapStr1 = new Map();
  const mapStr2 = new Map();

  for (let val of lstr1) {
    mapStr1.set(val, (mapStr1.get(val) || 0) + 1);
  }

  for (let val of lstr2) {
    mapStr2.set(val, (mapStr2.get(val) || 0) + 1);
  }

  if (mapStr1.size !== mapStr2.size) return false;

  for (let [key, val] of mapStr1) {
    if (mapStr2.get(key) !== val) {
      return false;
    }
  }

  return true;
}

// solution : challenge 4

function groupWordsByAnagram(arr) {
  let resultMap = new Map();

  for (let val of arr) {
    let sortedVal = val
      .replace(/\s/g, "")
      .split("")
      .sort()
      .join("")
      .toLowerCase();
    if (!resultMap.has(sortedVal)) {
      resultMap.set(sortedVal, []);
    }
    resultMap.get(sortedVal).push(val);
  }
  return Array.from(resultMap).map((val) => val[1]);
}

// solution : challenge 5

function longestWords(str) {
  const cleanStr = str.replace(/[^\w\s]/g, "").replace(/\s+/g, " ");

  let strArr = cleanStr.trim().split(" ");

  let result = [];
  let maxWordLength = 0;

  for (let word of strArr) {
    if (word.length > maxWordLength) {
      maxWordLength = word.length;
      result = [word];
    } else if (word.length === maxWordLength) {
      result.push(word);
    }
  }
  return result;
}

console.log(longestWords("I am a software engineer")); // [ 'software' ]
console.log(longestWords("I am a software engineer, and I love coding")); // [ 'software', 'engineer' ]
