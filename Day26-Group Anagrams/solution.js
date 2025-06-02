//  solution #1

function groupAnagrams(words) {
  const map = new Map();

  for (let word of words) {
    const sorted = word.split("").sort().join("");
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
