//different way to array declaration

//1. using array literal

let colors = ["Red", "Green", "Blue"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]); //undefined
console.log(colors[-1]); //undefined
console.log(`Colors array: ${colors}`);
console.log(`Number of colors: ${colors.length}`);

//mixed data types
let mixedArray = [100, "Hello", true, null, undefined, 45.67];
console.log(`Mixed array: ${mixedArray}`);
console.log(`Number of elements in mixed array: ${mixedArray.length}`);

//2. using Array constructors  //old way to use. now not
let cars = new Array("Toyota", "Honda", "Ford");
console.log(`Cars array: ${cars}`);
console.log(`Number of cars: ${cars.length}`);

//3. using Array.of() //old way. now not
let test = Array.of(1, 2, 3, 4, 5);
console.log(`Test array: ${test}`);
console.log(`Number of elements in test array: ${test.length}`);

//4. using Array.from()  //convert string, map or object to array .
let str = "Hello";
let charArray = Array.from(str);
console.log(`Character array from string: ${charArray}`);
console.log(`Number of characters: ${charArray.length}`);
