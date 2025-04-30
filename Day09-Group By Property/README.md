# Day 09 - Group By Property

## Challenge

Write a reusable function to group an array of objects based on a common property.

## Example Input

```js
groupBy(users, "role");

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" },
  { name: "Eve", role: "guest" },
];

// OUTPUT :
// {
//   admin: [
//     { name: "Alice", role: "admin" },
//     { name: "Charlie", role: "admin" }
//   ],
//   user: [
//     { name: "Bob", role: "user" },
//     { name: "David", role: "user" }
//   ],
//   guest: [
//     { name: "Eve", role: "guest" }
//   ]
// }
```
