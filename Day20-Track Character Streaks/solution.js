// solution #1

function charStreaks(str) {
  if (!str) return [];

  let result = [];
  let currentChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      result.push({ char: currentChar, count: count });
      currentChar = str[i];
      count = 1;
    }
  }

  // Push the last streak
  result.push({ char: currentChar, count: count });

  return result;
}

console.log(charStreaks("aaabbcddddd"));
// [
//   { char: "a", count: 3 },
//   { char: "b", count: 2 },
//   { char: "c", count: 1 },
//   { char: "d", count: 5 }
// ]
console.log(charStreaks("aabbcc"));
// [
//   { char: "a", count: 2 },
//   { char: "b", count: 2 },
//   { char: "c", count: 2 }
// ]
console.log(charStreaks(""));
// []

// Challenge 2 : solution

function compressStreaks(str) {
  let currentChar = str[0];
  let count = 1;
  let result = "";

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      result += count > 1 ? currentChar + count : currentChar;
      currentChar = str[i];
      count = 1;
    }
  }

  result += count > 1 ? currentChar + count : currentChar;

  return result;
}

console.log(compressStreaks("aaabbcddddd"));
// "a3b2cd5"
