let user = {
  name: "hitesh",
  age: 30,
  status: "active",
  isEmployed: true,
};

// Read
console.log(user.age); // 30
console.log(user["age"]); // 30

if (user.name === 'hitesh') {
    console.log("pass");
}

// Add
user.city = "Ahmedabad";
console.log(user.city); // Ahmedabad
console.log(user); //{ name: 'hitesh', age: 30, status: 'active', isEmployed: true, city: 'Ahmedabad' }

// Update
user.age = 31;
console.log(user.age); // 31

// Delete
delete user.isEmployed;
console.log(user); // { name: 'hitesh', age: 31, status: 'active', city: 'Ahmedabad' }
