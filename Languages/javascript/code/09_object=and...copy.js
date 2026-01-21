//= and ... copy object

//1. way = its two object refrence represent one object.

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

//2. ... two object represent two refrence.
let user = {
  name: "hitesh",
  age: 30,
};

let person = { ...user };

console.log(person); //{ name: 'hitesh', age: 30 }
person.age = 45;
console.log(person); //{ name: 'hitesh', age: 45 }
console.log(user); //{ name: 'hitesh', age: 30 }
user.age = 100;
console.log(user); //{ name: 'hitesh', age: 100 }
console.log(person); //{ name: 'hitesh', age: 45 }

let emp = {
  name: "hitesh",
  address: "dehgam",
  salary: 50,
};

console.log(emp); //{ name: 'hitesh', address: 'dehgam', salary: 50 }

//here one object values have multiple refrence like emp, newemp both refrence point to one object values.
let newemp = emp;

newemp.address = "naroda";
console.log(newemp); //{ name: 'hitesh', address: 'naroda', salary: 50 }
console.log(emp); //{ name: 'hitesh', address: 'naroda', salary: 50 }

emp.address = "goa";
console.log(newemp); //{ name: 'hitesh', address: 'goa', salary: 50 }
console.log(emp); //{ name: 'hitesh', address: 'goa', salary: 50 }
