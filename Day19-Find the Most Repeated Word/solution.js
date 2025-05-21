// solution #1

function mostFrequentWord(sentence) {
  const words = sentence.split(" ");
  const frequency = new Map();

  words.forEach((word) => {
    const lword = word.replace(/[^\w\s]/g, "").toLowerCase();
    frequency.set(lword, (frequency.get(lword) || 0) + 1);
  });

  // Find max frequency
  let maxFreq = Math.max(...frequency.values());

  // Collect words with max frequency
  return [...frequency.entries()]
    .filter(([_, count]) => count === maxFreq)
    .map(([word, _]) => word);
}

console.log(
  mostFrequentWord(
    "The quick brown fox jumps over the lazy dog. The dog was not amused."
  )
); // ["the"]

// solution : Challenge 2

function isBalanced(str) {
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      const lastChar = stack.pop();

      if (brackets[lastChar] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// isBalanced("(hello(world))") // true
// isBalanced("((())")          // false
// isBalanced(")()(")           // false
