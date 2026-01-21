const { useSyncExternalStore } = require("react");

let u1 = {
  name: "Hitesh",
  age: 35,
  status: "active",
};

let u2 = {
  name: "ronak",
  age: 30,
  status: "inactive",
};

let u3 = {
  name: "dhruvesh",
  age: 32,
  status: "active",
};

// u1 = u2 = u3;   // Here start from right side. first u2 point to u3 then u1 point where u2 is point.//so both u1 and u2 point u3
// console.log(u1); //dhruvesh
// console.log(u2); //dhruvesh
// console.log(u3); //dhruvesh

// console.log('------------');

u1 = u2; //now u1 point to u2 data
console.log(u1); //ronak
console.log(u2); //ronak
console.log(u3); //dhruvesh
console.log("------------");

u2 = u3; //u2 point to u3
console.log(u1); //ronak
console.log(u2); //dhruvesh
console.log(u3); //dhruvesh

console.log("------------");
u3 = u1; //u3 point to u1
console.log(u1); //ronak
console.log(u2); //dhruvesh
console.log(u3); //ronak

//usecase
//1. share common config
