function getAvailableProductNames(products) {
  return products
    .filter((product) => product.inStock)
    .map((product) => product.name.toUpperCase());
}

const products = [
  { name: "Keyboard", inStock: true },
  { name: "Monitor", inStock: false },
  { name: "Mouse", inStock: true },
  { name: "Webcam", inStock: false },
];

console.log(getAvailableProductNames(products));
// Output: ["KEYBOARD", "MOUSE"]
