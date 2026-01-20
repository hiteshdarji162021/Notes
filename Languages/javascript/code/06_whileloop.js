//1. while

//1 to 10:
let i = 1; //start -- initlization
while (i <= 10) {
  //conditional
  console.log(i); //12345678910 -- statement
  i++; //11 //increment
  // ++i;
  //i = i + 1;//11
}

console.log("===========");
//break:
let j = 1;
while (j <= 10) {
  console.log(j); //12345
  if (j === 5) {
    console.log("bye");
    break;
  }
  j++; //5
}

console.log("===========");

//
while (true) {
  console.log("welcome to Naveen Automation Labs");
  break;
}

//
while (1) {
  console.log("welcome to Naveen Automation Labs");
  break;
}

//
let k = 1;
while (true) {
  console.log("welcome to hotel taj");
  if (k === 5) {
    console.log("bye!!");
    break;
  }
  k++; //5
}

console.log("===========");

//use cases for while loop: if number of iterations are not fixed
//1. wait for the webelement: 0 5 10 20 25
//2. wait for page loading/dynamic loader: 5 10 15 20
//3. webtable pagination:
//4. Infinite page scrolling:
//5. total number of links/elements: 30, 40, 100
//6. calendar handling:
//7. carousel handling:
//8. get the data from DB-table:
//9. progress bar: 0 to 100%: time taken
//10. File downloading/uploading: time taken to download it
//11. wait for the dynamic alert/popup/adv
//12. EOF: end of file: 1 to n
