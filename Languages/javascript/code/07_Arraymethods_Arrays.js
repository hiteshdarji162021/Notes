//[] Array is a built-in object that stores multiple values dynamically in single variable.

let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log(`Fruits array: ${fruits}`);

let n = [];
console.log(n.length);

//Array methods


//1. push- add value at end
let n1 = [1, 2, 3];
console.log(`Numbers array before: ${n1}`);
n1[3] = 4;
n1.push(5);
console.log(`Numbers array after: ${n1}`);
console.log(`Number of elements in numbers array: ${n1.length}`);

//2. Unshift - add to the beginning
let n2 = [1, 2, 3];
n2.unshift(0);
console.log(`Numbers array after unshift: ${n2}`);
console.log(`Number of elements in numbers array: ${n2.length}`);


//3. pop- remove from the end
let n3 = [1, 2, 3];
let removedElement = n3.pop();
console.log(`Removed element: ${removedElement}`);
console.log(`Numbers array after pop: ${n3}`);
console.log(`Number of elements in numbers array: ${n3.length}`);

//4.shift - remove from the beginning
let n4 = [1, 2, 3];
removedElement = n4.shift();
console.log(`Removed element: ${removedElement}`);
console.log(`Numbers array after shift: ${n4}`);
console.log(`Number of elements in numbers array: ${n4.length}`);


//5.update array
let n5 = [1, 2, 3];
n5[2] = 4;
console.log(`Numbers array after shift: ${n5}`);
console.log(`Number of elements in numbers array: ${n5.length}`);


//6. join - convert Array to string
let veggies = ["Carrot", "Broccoli", "Spinach"];
let veggiesString = veggies.join(" "); 
console.log(typeof veggiesString);
console.log(`Vegetables string=> ${veggiesString}`);


//7. split -convert String to Array
let strVeggies = "Carrot, Broccoli, Spinach";
let veggiesArray = strVeggies.split(": "); 
console.log(typeof veggiesArray);
console.log(`Vegetables array=> ${veggiesArray}`);


//8. copy array
let originalArray = [1, 2, 3, 4, 5];
let spreadCopiedArray = [...originalArray];
console.log(`Spread copied array: ${spreadCopiedArray}`);


let originalArray1 = [1, 2, 3, 4, 5];
let originalArray2=[6, 7, 8]
let concatarray1= [...originalArray1,...originalArray2];


let concatCopiedArray = originalArray1.concat(originalArray2);
console.log(`Concat copied array: ${concatCopiedArray}`);





