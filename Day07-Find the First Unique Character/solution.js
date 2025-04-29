// solution #1

function firstUniqueChar(str) {
  const strMap = new Map();

  for (const char of str) {
    strMap.set(char, (strMap.get(char) || 0) + 1);
  }

  for (const [key, value] of strMap) {
    if (value === 1) return key;
  }

  return null;
}

// solution #2
// Efficient + Cleaner Version:

// Instead of using a Map, we can do it using:
// A frequency object ({}) instead of Map (a bit faster in JS engines).
// Loop through the string once to count.
// Loop again through original string to preserve order.

function firstUniqueChar(str) {
  const freq = {};

  // Count frequencies
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find first unique by order
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

// Why is this better?
// ✅ Slightly better memory performance than using a Map.
// ✅ Preserves character order by looping the original string again.
// ✅ Uses simple JS objects and loops — lightweight for V8 engine.
