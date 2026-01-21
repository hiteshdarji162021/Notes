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
