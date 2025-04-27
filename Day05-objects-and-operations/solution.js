const userProfile = {
  name: "",
  age: 0,
  email: "",
  isActive: false,
};

function updateProfile(key, value) {
  userProfile[key] = value;
}

function printProfile() {
  for (const key in userProfile) {
    if (typeof userProfile[key] === "function") {
      continue; // Skip methods
    }
    console.log(`${capitalize(key)}: ${userProfile[key]}`);
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Sample usage
updateProfile("name", "Alice");
updateProfile("age", 28);
updateProfile("email", "alice@example.com");
updateProfile("city", "New York"); // Dynamic key
printProfile();

// 🔥 Stretch Goal: Add greet method
userProfile.greet = function () {
  console.log(`Hi, my name is ${this.name}!`);
};

userProfile.greet();
