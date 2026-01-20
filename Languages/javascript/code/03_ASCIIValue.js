//ASCII values

//0-9 = 48-57
//A-Z = 65-90
//a-z = 97-122

let a = "A";
console.log(a.charCodeAt(0)); //65
console.log(a.charCodeAt(0) + "B".charCodeAt(0)); //65+66=131
console.log("AB".charCodeAt(0)); //65
console.log("AB".charCodeAt(1)); //66

a = "Z";
console.log(a.charCodeAt(0)); //90

a = "a";
console.log(a.charCodeAt(0)); //97
a = "z";
console.log(a.charCodeAt(0)); //122
a = "0";
console.log(a.charCodeAt(0)); //48
a = "9";
console.log(a.charCodeAt(0)); //57
console.log("AB".charCodeAt(1)); // if we write 0 then check, and if we write 1 then check B. Only the individual character code is checked. character ascii value we get.

//If we want to get a character from an ASCII value, then use the fromCharCode() function
console.log(String.fromCharCode(65)); //A
console.log(String.fromCharCode(90)); //Z
console.log(String.fromCharCode(97)); //a
console.log(String.fromCharCode(122)); //z
console.log(String.fromCharCode(48)); //0
console.log(String.fromCharCode(57)); //9
console.log(String.fromCharCode(65, 66, 67, 68, 69)); //ABCDE
