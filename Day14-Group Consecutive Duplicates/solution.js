// solution : challenge 1 : #1

function groupConsecutiveDuplicates(str) {
  if (!str) return [];

  let result = [];
  let currArr = [str[0]];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currArr[currArr.length - 1]) {
      currArr.push(str[i]);
    } else {
      result.push(currArr);
      currArr = [str[i]];
    }
  }

  result.push(currArr);
  return result;
}

// solution : challenge 1 : #2

function groupConsecutiveDuplicates(str) {
  return [...str].reduce((acc, curr) => {
    if (!acc.length || acc[acc.length - 1][0] !== curr) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);
}

console.log(groupConsecutiveDuplicates("aaabbcdddde")); // [["a", "a", "a"], ["b", "b"], ["c"], ["d", "d", "d", "d"], ["e"]]
console.log(groupConsecutiveDuplicates("abca")); // [["a"], ["b"], ["c"], ["a"]]

// solution : challenge 2 : #1

function compressConsecutiveChars(str) {
  if (!str) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

console.log(compressConsecutiveChars("aabbbac")); // "a2b3a1c1"
console.log(compressConsecutiveChars("abc")); // "a1b1c1"
