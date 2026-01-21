//freeze vs seal

// feeze no change. add/update/delete nothing can do
let user = {
  name: "hitesh",
  city: "Dehgam",
};
console.log(user); //{ name: 'hitesh', city: 'Dehgam' }

//1. way to freeze the object.
Object.freeze(user);

//2. way to freeze the object

let user1 = Object.freeze({
  name: "hitesh",
  city: "Dehgam",
});



//seal() we can update but can not add/delete

let emp = {
  name: "Dhruvesh",
  city: "Dehgam",
};
console.log(emp); //{ name: 'Dhruvesh', city: 'Dehgam' }

Object.seal(emp);

//update
emp.city = "Nandol";
console.log(emp); // allow //{ name: 'Dhruvesh', city: 'Nandol' }

//add
emp.salary = 2000;
console.log(emp); //Now allow //{ name: 'Dhruvesh', city: 'Nandol' }

//delete
delete emp.city;
console.log(emp); //Not allow //{ name: 'Dhruvesh', city: 'Nandol' }
