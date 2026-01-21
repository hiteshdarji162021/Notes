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

//error as its point ot null refrence variable.
//Garbage collector call when point null refrence Object.
//Stack memory ma object refrence hoy, and head ma badha objects.

let person = {
  name: "tom",
  age: 30,
};
console.log(person);
person = null; //null reference of object.
console.log(person); //null
//console.log(person.name); //error
