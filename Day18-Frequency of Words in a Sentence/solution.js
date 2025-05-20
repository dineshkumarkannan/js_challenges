// solution #1

function wordFrequency(sentence) {
  const wordArray = sentence.split(" ");
  const result = new Map();
  wordArray.forEach((word) => {
    let lword = word.replace(/[^\w\s]/g, "").toLowerCase();
    result.set(lword, (result.get(lword) || 0) + 1);
  });
  return Object.fromEntries(result);
}

console.log(
  wordFrequency(
    "The quick brown fox jumps over the lazy dog. The dog was not amused."
  )
); // {
//     "the": 3,
//     "quick": 1,
//     "brown": 1,
//     "fox": 1,
//     "jumps": 1,
//     "over": 1,
//     "lazy": 1,
//     "dog": 2,
//     "was": 1,
//     "not": 1,
//     "amused": 1
// }

// solution #2

function wordFrequencyNoStopWords(sentence) {
  const stopWords = new Set([
    "the",
    "a",
    "an",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
  ]);
  const wordArray = sentence.split(" ");
  const result = new Map();
  wordArray.forEach((word) => {
    let lword = word.replace(/[^\w\s]/g, "").toLowerCase();
    if (!stopWords.has(lword)) {
      result.set(lword, (result.get(lword) || 0) + 1);
    }
  });
  return Object.fromEntries(result);
}

console.log(
  wordFrequencyNoStopWords(
    "The quick brown fox jumps over the lazy dog. The dog was not amused."
  )
); // {
//     "quick": 1,
//     "brown": 1,
//     "fox": 1,
//     "jumps": 1,
//     "over": 1,
//     "lazy": 1,
//     "dog": 2,
//     "not": 1,
//     "amused": 1
// }
