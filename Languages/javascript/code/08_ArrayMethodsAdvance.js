//1. split
let language = "java_python_javascript_typescript_c#";
let splitlanguage = language.split("_");
console.log(splitlanguage[1]); //python
console.log(splitlanguage); //[ 'java', 'python', 'javascript', 'typescript', 'c#' ]

let test = "aASeleniumaAaAPlaywrightaACypress";
let sp = test.split("aA");
console.log(sp[0]); //empty
console.log(sp); //[ '', 'Selenium', '', 'Playwright', 'Cypress' ]

console.log(
  "====================================================================================",
);

//2. index of - find index from start

let number = [1, 2, 3, 4, 5];
let n = number.indexOf(2);
console.log(n); //1

let msg = ["hi", "this", "is", "javascript", "code"];
let m = msg.indexOf("is");
console.log(m); //2
if (msg.indexOf("javascript") == 3) {
  console.log("pass"); // pass
} else {
  console.log("fail");
}
console.log(
  "====================================================================================",
);

//3. lastindexof - find index from last
let msg2 = ["hi", "is", "this", "javascript", "this", "code", "this", "gabbar"];
let p3 = msg2.lastIndexOf("this");
console.log(p3); //6
console.log(
  "====================================================================================",
);

//4. includes
let msg1 = ["hi", "this", "is", "javascript", "code"];
let p0 = msg1.includes("hitesh");
let p2 = msg1.includes("is");
console.log(p0); //false
console.log(p2); //true
console.log(
  "====================================================================================",
);

//Find first, second and third accurance,
//index of only get first accurance
//lastindexof only get last accurance
//but what if want second or third accurance

//print index of 1 occurance of 'this'
let message = [
  "hi",
  "is",
  "this",
  "javascript",
  "this",
  "code",
  "this",
  "gabbar",
];
let m2 = message.indexOf("this");
console.log(m2); //2

//2 occurance of 'this' and second param is from which index you want to start to looking
let m3 = message.indexOf("this", m2 + 1);
console.log(m3);

//3 occurance of 'this'
let m4 = ("this", m3 + 1);
console.log(m4);

console.log(
  "====================================================================================",
);

//2. way generic method create for find n number of accurance find
function findNthIndex(arr, value, n) {
  let index = -1;
  while (n > 0) {
    index = arr.indexOf(value, index + 1);
    if (index === -1) return -1; // Not enough occurrences
    n--;
  }
  return index;
}

let message2 = [
  "hi",
  "is",
  "this",
  "javascript",
  "this",
  "code",
  "this",
  "gabbar",
];

console.log(findNthIndex(message2, "this", 1)); // 1st → 1
console.log(findNthIndex(message2, "this", 2)); // 2nd → 4
console.log(findNthIndex(message2, "this", 3)); // 3rd → 6
console.log(findNthIndex(message2, "this", 4)); // 4th → -1 (not available)

console.log(
  "====================================================================================",
);

//3.
//slice -portion of the array
//slice immutable so we can not change value
let number1 = [1, 2, 3, 4, 5, 6];
let n1 = number1.slice(2, 5); //Here 2 and 5 is index
console.log(n1); //[ 3, 4, 5 ]
console.log(number); //[ 1, 2, 3, 4, 5, 6 ]

let name1 = [
  "Hitesh",
  "Ronak",
  "Dhruvesh",
  "sunil",
  "nisarg",
  "samir",
  "krunal",
  "ankur",
];
//Here exclude last index which is 5th. only print 2,3,4 index if we write (2,5)
let nam1 = name1.slice(2, 5);
console.log(nam1); //[ 'Dhruvesh', 'sunil', 'nisarg' ]

// get last 3 numbers
let name2 = [
  "Hitesh",
  "Ronak",
  "Dhruvesh",
  "sunil",
  "nisarg",
  "samir",
  "krunal",
  "ankur",
];
let lastthree = name2.slice(-3); //[ 'samir', 'krunal', 'ankur' ]
console.log(lastthree);
//we can not do for first 3 number. only for last 3 like above

// start with that index which given
let name3 = [
  "Hitesh",
  "Ronak",
  "Dhruvesh",
  "sunil",
  "nisarg",
  "samir",
  "krunal",
  "ankur",
];
let n2 = name3.slice(2);
console.log(n2); //[ 'Dhruvesh', 'sunil', 'nisarg', 'samir', 'krunal', 'ankur' ]

// start with that index which given
let name4 = [
  "Hitesh",
  "Ronak",
  "Dhruvesh",
  "sunil",
  "nisarg",
  "samir",
  "krunal",
  "ankur",
];
name4.slice(3); // Here we can not change array value and print
console.log(name4); //["Hitesh", "Ronak", "Dhruvesh","sunil","nisarg", "samir","krunal", "ankur"];

console.log(
  "====================================================================================",
);

//splice - add/remove element at specific location.
//array.splice(start,deletecount,item1,item2...)
//splice is mutable so we change array value

let cart3 = ["apple", "banana", "orange", "grape", "kiwi"];
//add single fruint in index
cart3.splice(3, 0, "mango");
console.log(cart3); //[ 'apple', 'banana', 'orange', 'mango', 'grape', 'kiwi' ]

//add multiple elements
let n3 = [4, 5, 6];
n3.splice(0, 0, 1, 2, 3);
console.log(n3); //[ 1, 2, 3, 4, 5, 6 ]

//replace word
let days = ["monday", "tuesday", "wednesday", "thrusday", "friday"];
//replace wednesday with partyday
days.splice(2, 1, "partyday");
console.log(days); //[ 'monday', 'tuesday', 'partyday', 'thrusday', 'friday' ]

//replace multiple words

let days1 = ["monday", "tuesday", "wednesday", "thrusday", "friday"];
//replace wednesday with partyday
days1.splice(1, 3, "partyday");
console.log(days1); //[ 'monday', 'partyday', 'friday' ]

//removed item name show if we asign value
let days2 = ["monday", "tuesday", "wednesday", "thrusday", "friday"];
let p1 = days2.splice(-10, 3); //[ 'monday', 'tuesday', 'wednesday' ]
console.log(p1);

// remainig items show if we not assign vlaue
let days3 = ["monday", "tuesday", "wednesday", "thrusday", "friday"];
days3.splice(-10, 3);
console.log(days3); //[ 'thrusday', 'friday' ]

console.log(
  "====================================================================================",
);

//5. startwith()
let language1 = "java_python_javascript_typescript_c#";
console.log(language1.startsWith("java")); //true

//6. endwith()
let language2 = "java_python_javascript_typescript_c#";
console.log(language2.endsWith("c#")); //true
console.log(language2.endsWith("abc")); //false

//7. padStart()
let id = "71";
console.log(id.padStart(5, "0"));  //00071- total length should be 5 and add 0 for that

//8.padEnd();
let id1 = "71";
console.log(id1.padEnd(5, "0"));  //71000- total length should be 5 and add 0 for that

//9. repeat
console.log("ha".repeat(3));