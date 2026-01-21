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

u1 = u2 = u3;
console.log(u1); //ronak
console.log(u2); //dhruvesh
console.log(u3); //dhruvesh