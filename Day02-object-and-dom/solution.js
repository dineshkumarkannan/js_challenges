const body = document.querySelector("body");
const div = document.createElement("div");
// const button = document.createElement("button");
// button.innerText = "Get User Info";
div.setAttribute("id", "output");

const user = {
  name: "Alice",
  age: 28,
  email: "alice@example.com",
};

function getUserInfo(user) {
  let result = `Name: ${user.name || "Unknown"}, Age: ${
    user.age || "Not specified"
  }, Email: ${user.email || "Not provided"}`;
  div.innerHTML = result;
  return;
}

// button.addEventListener("click", () => {
//   body.appendChild(div);
//   getUserInfo(user);
// });
// body.appendChild(button);

document.addEventListener("DOMContentLoaded", () => {
  body.appendChild(div);
  getUserInfo(user);
});
