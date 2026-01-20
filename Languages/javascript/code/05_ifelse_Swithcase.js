//Bad practice to use if else because its performance issue check each and every condition.
let browser = "opera";

if (browser === "chrome") {
  console.log("You are using Chrome");
} else if (browser === "firefox") {
  console.log("You are using Firefox");
} else if (browser === "safari") {
  console.log("You are using Safari");
} else {
  console.log("Unknown Browser");
}

//So in this case use switch case instead of below

//Switch case - Here directly go to safari. Not checking othe cases chrome and firefox. 
// So best to use switch case.
let browser1 = "safari";
switch (browser1.toLowerCase()) {
  case "chrome":
    console.log("You are using Chrome");
    break;
  case "firefox":
    console.log("You are using Firefox");
    break;
  case "safari":
    console.log("You are using Safari");
    break;
  default:
    console.log("Unknown Browser");
}
