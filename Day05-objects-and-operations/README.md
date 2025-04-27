# Day 05 – JavaScript Objects and Operations

## 🧠 Goal:

- Get very comfortable with creating and updating objects
- Understand dynamic properties and looping over objects

---

## 💬 Task:

Create a simple **Profile Manager** app:

1️⃣ Create a `userProfile` object with these properties:

- `name` (string)
- `age` (number)
- `email` (string)
- `isActive` (boolean)

---

2️⃣ Write a function `updateProfile(key, value)` that:

- Updates the given key with the new value inside the `userProfile`
- If the key does not exist, add it dynamically.

---

3️⃣ Write a function `printProfile()` that:

- Loops through all properties and logs them nicely:
  Example: `Name: John`, `Age: 30`, `Email: john@example.com`, etc.

---

## 📦 Example Usage:

```js
updateProfile("name", "Alice");
updateProfile("age", 28);
updateProfile("city", "New York"); // adding new property dynamically
printProfile();

// Output:
// Name: Alice
// Age: 28
// Email: (empty)
// IsActive: (false)
// City: New York
```
