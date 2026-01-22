//map, filter, reduce

//1. map
let number = [1, 2, 3, 4, 5];
let newNumber = number.map((ele) => ele + 5);
console.log(newNumber);

let number2 = [1, 2, 3, 4, 5];
let newNumber2 = number2.map((ele) => ele * ele);
console.log(newNumber2);

//for convert upper case
let words = ["playwright", "selenium", "cypress"];
let upper = words.map((ele) => ele.toUpperCase());
console.log(upper);

//for get first char of every string
let words1 = ["playwright", "selenium", "cypress"];
let firstChar = words1.map((ele) => ele[0]);
console.log(firstChar);

//concate word with each string value of array
let words2 = ["playwright", "selenium", "cypress"];
let conct = words2.map((ele) => "web " + ele);
console.log(conct);

//2. filter
let number3 = [1, 2, 3, 4, 5];
let filterNumber = number3.filter((ele) => ele > 3);
console.log(filterNumber);

let number32 = [1, 2, 3, 4, 5];
let evennumbers = number32.filter((ele) => ele % 2 == 0);
console.log(oddeven);

let number4 = [1, 2, 3, 4, 5];
let filterNumber1 = number4.filter((ele) => ele > 2 && ele < 5);
console.log(filterNumber1);

let footer = [
  "amazon help",
  "contact",
  "amazon music",
  "amazon prime",
  "price",
];
let amazonlist = footer
  .filter((ele) => ele.startsWith("amazon"))
  .filter((ele) => ele.includes("music"));
console.log(amazonlist);

//3.
let number5 = [1, 2, 3, 4, 5];
let reduceNumber = number5.reduce((result, num) => result + num, 0);
console.log(reduceNumber);

let dict = ["playwright", "selenium", "cypress"];
let newdic = dict.reduce((result, ele) => result + " " + ele);
console.log(newdic);

//combo of map +filter + reduce
let n1 = [85, 92, 67, 78, 95, 43, 88, 76, 91, 82];
//get passing score>=70 and then add bonus 5 in each marks and then average
let avg =
  n1
    .filter((ele) => ele >= 70)
    .map((ele) => ele + 5)
    .reduce((result, ele) => result + ele, 0) /
  n1.filter((ele) => ele >= 70).length;
console.log(avg);

//get lowest price <50, apply 10% discount, calculate total.

let price = [25, 60, 15, 80, 35, 120, , 45, 90];

let finalPrice = price
  .filter((ele) => ele < 50)
  .map((ele) => ele * 0.9)
  .reduce((total, num) => total + num, 0);
console.log(finalPrice);

//get the long word, lenght >4,convert to uppar case, -> join with -
let dict1 = ["playwright", "selenium", "cypress", "js", "widi"];

let final = dict1
  .filter((ele) => ele.length > 4)
  .map((ele) => ele.toUpperCase())
  .reduce((result, str) => result + "-" + str);
console.log(final);
