const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
  { name: "Monitor", price: 300 },
];

// map
const names = products.map((product) => product.name);
// console.log(`names: ${names}`);

// filter
const moreThan500 = products.filter((product) => product.price > 500);
// console.log(moreThan500);

// reduce
const totalCost = products.reduce((acc, curr, inx, arr) => {
  acc = acc + curr.price;
  return acc;
}, 0);
console.log(totalCost);

// reduce
const expensiveProduct = products.reduce((acc, curr) => {
  return acc.price > curr.price ? acc : curr;
});
console.log(expensiveProduct);
