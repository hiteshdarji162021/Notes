let user1 = { name: "Hitesh" };
let user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul