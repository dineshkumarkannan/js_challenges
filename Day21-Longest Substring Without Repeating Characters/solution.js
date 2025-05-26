// Solution : Challenge 1

function findLongestSubStr(str) {
  let visited = new Set();
  let start = 0,
    end = 0,
    maxLen = 0;

  while (end < str.length) {
    if (!visited.has(str[end])) {
      visited.add(str[end]);
      maxLen = Math.max(maxLen, visited.size);
      end++;
    } else {
      visited.delete(str[start]);
      start++;
    }
  }

  return maxLen;
}

console.log(findLongestSubStr("abcabcbb")); // 3
console.log(findLongestSubStr("bbbbb")); // 1
console.log(findLongestSubStr("pwwkew")); // 3
console.log(findLongestSubStr("")); // 0

function longestUniqueSubstring(str) {
  let start = 0;
  let maxLen = 0;
  let maxSubstr = "";
  const charIndexMap = new Map();

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      start = charIndexMap.get(char) + 1;
    }

    charIndexMap.set(char, end);

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      maxSubstr = str.slice(start, end + 1);
    }
  }

  return maxSubstr;
}
console.log(longestUniqueSubstring("abcabcbb")); // "abc"
console.log(longestUniqueSubstring("bbbbb")); // "b"
console.log(longestUniqueSubstring("pwwkew")); // "wke"
