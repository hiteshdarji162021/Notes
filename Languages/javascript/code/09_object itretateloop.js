//iterate object properites
//using for .. in loop

let car = {
  name: "bmw",
  price: 40,
  model: "x1",
  color: "red",
};
for (let key in car) {
  console.log(car[key]);
}

console.log(
  "=========================================================================",
);

//1.
let user = {
  name: "hitesh",
  age: 30,
  address: {
    city: "dehgam",
    zip: 382305,
  },
};
console.log(user); //{ name: 'hitesh', age: 30, address: { city: 'dehgam', zip: 382305 } }
console.log(user.name); //hitesh
console.log(user.address); //{ city: 'dehgam', zip: 382305 }
console.log(user.address.city); //dehgam
console.log(user.address.zip); //382305

console.log(
  "=========================================================================",
);
//2. iterate with for in
let user2 = {
  name: "hitesh",
  age: 30,
  address: {
    city: "dehgam",
    zip: 382305,
  },
};

for (let i in user2) {
  console.log(i + "->" + user2[i]);
}

//output
// name hitesh
// age 30
// address [object Object]  - not work correctly for nested object
console.log(
  "=========================================================================",
);

//2. iterate with for of
let user3 = {
  name: "ronak",
  age: 30,
  address: {
    city: "dehgam",
    zip: 382305,
  },
};

for (let [key, value] of Object.entries(user3)) {
  console.log(key + " " + value);
}

//output
// name hitesh
// age 30
// address [object Object]  - not work correctly for nested object

console.log(
  "=========================================================================",
);

for (let [key, value] of Object.entries(user)) {
  if (typeof value === "object" && value !== null) {
    console.log(key + " -> " + JSON.stringify(value));
  } else {
    console.log(key + " -> " + value);
  }
}

// output
// name -> hitesh
// age -> 30
// address -> {"city":"dehgam","zip":382305}
