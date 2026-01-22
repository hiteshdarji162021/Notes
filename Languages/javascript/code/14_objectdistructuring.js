//Object destructuring

//1.
let user = {
  name: "hitesh",
  age: 33,
  city: "dehgam",
  ispermenent: true,
};

function getInfo({ name, age }) {
  //name, age param here match with object key of user. if we use other key other then in user object then show undefined.
  console.log(name);
  console.log(age);
}

getInfo(user);

console.log("=========================================");

//2.
let products = ["macbook", "keyboard", "imac"];
let [a, b, c] = products;
console.log(a);
console.log(b);
console.log(c);

//3. skip assign value
let prod = ["macbook", "keyboard", "imac"];
let [a1, , c1] = prod;
console.log(a1); //macbook
//console.log(b); //no use
console.log(c1); //imac

console.log("=========================================");

//3.
let products1 = ["macbook", "keyboard", "imac"];
let [first, , third, test] = products1;
console.log(first); //macbook
console.log(third); //imac
console.log(test); //undefined

console.log("=========================================");

//4.
let products3 = ["macbook", "keyboard", "imac"];
let [first1, , third1, test1] = products3;
console.log(first1); //macbook
console.log(third1); //imac
console.log(test1); //abc

//default value override
//4.
let products33 = ["macbook", "keyboard", "imac"];
let [first2 = "a", second2, thrid2, fourth = "abc"] = products33;
console.log(first2); //macbook
console.log(second2); //keyboard
console.log(thrid2); //imac
console.log(fourth); //abc  //added new one with default value. if added new one without default then show undefined.

console.log("=========================================");

//5.
let number = [1, 2, 3, 4, 5];
let [head, ...tail] = number;
console.log(head); //1
console.log(tail); //[2,3,4,5]

console.log("=========================================");

//6.
let product = {
  name: "hitesh",
  age: 33,
  city: "dehgam",
  ispermenent: true,
};

let { name, age } = product;
console.log(name);
console.log(age);

let { name: myname } = product; //rename exisiting param
console.log(myname);

console.log("=========================================");

//7.

let emp = {
  name: "hitesh",
  age: 30,
  city: "dehgam",
  ispermenent: true,
};

function getInfo1({ name, city }) {
  console.log(name);
  console.log(city);
}

function getInfo2({ age }) {
  console.log(age);
}
getInfo1(emp);
getInfo2(emp);
