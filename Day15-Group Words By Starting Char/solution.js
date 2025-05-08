// solution: Challege 1

function groupWordsByStartingChar(arr) {
  let wordsMap = {};

  for (let word of arr) {
    const char = word.charAt(0).toLowerCase();
    if (!wordsMap[char]) {
      wordsMap[char] = [];
    }

    wordsMap[char].push(word);
  }
  return wordsMap;
}

console.log(
  groupWordsByStartingChar(["Apple", "ant", "banana", "Berry", "cat", "Camel"])
); // {
//   a: ["Apple", "ant"],
//   b: ["banana", "Berry"],
//   c: ["cat", "Camel"]
// }

// solution : Challenge 2

function groupWordsByEndingChar(arr) {
  let wordsMap = {};

  for (let word of arr) {
    const char = word.charAt(word.length - 1).toLowerCase();
    if (!wordsMap[char]) {
      wordsMap[char] = [];
    }

    wordsMap[char].push(word);
  }
  return wordsMap;
}

// solution : Challenge 3

function groupWordsByLength(words) {
  const freqMap = {};

  for (let val of words) {
    const charLength = val.length;
    if (!freqMap[charLength]) {
      freqMap[charLength] = [];
    }
    freqMap[charLength].push(val);
  }
  return freqMap;
}

console.log(groupWordsByLength(["tree", "apple", "to", "bat", "code", "hi"]));
// {
//     "2": [
//         "to",
//         "hi"
//     ],
//     "3": [
//         "bat"
//     ],
//     "4": [
//         "tree",
//         "code"
//     ],
//     "5": [
//         "apple"
//     ]
// }
