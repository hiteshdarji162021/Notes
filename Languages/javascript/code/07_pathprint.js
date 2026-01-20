//1. prefered / in path.
let path1 = "c:/users/documents/file.txt";
console.log(`File path is: ${path1}`); //c:/users/documents/file.txt

let path3 = "c:\\users\\documents\\file.txt";
console.log(`File path is: ${path3}`); //File path is: c:\users\documents\file.txt

let path4 = "d:\downloads\file.txt";
console.log(`Updated file path is: ${path4}`); //d:downloadsile.txt

let path5 = String.raw`c:\users\documents\file.txt`;
console.log(`Updated file path is: ${path5}`); //c:\users\documents\file.txt
