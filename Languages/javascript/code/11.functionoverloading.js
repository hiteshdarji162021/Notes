//function overloading not support js

function login() {
  console.log("1st login method");
}

function login(a) {
  console.log("2nd login method", a);
}

//login(5) //Error
//login() //Error

console.log("============================================");

//1.  Noraml way

function login() {
  console.log("login withount param");
}

function withusernamePassword(uname, pwd) {
  console.log("login with username and password" + uname + pwd);
}

function withunamePwdOTP(uname, pwd, otp) {
  console.log("login with username, password and otp", uname, pwd, otp);
}

login(); //login withount param
withusernamePassword("hitesh", 123); //login with username and passwordhitesh123
withunamePwdOTP("hitesh", 123, 4567); //login with username, password and otp hitesh 123 4567

//2. Hack same with one login method but not recommanded.

function login() {
  if (arguments.length == 0) {
    console.log("login withount param");
  } else if (arguments.length == 2) {
    console.log(
      `login with username->${arguments[0]} and password->${arguments[1]}`,
    );
  } else if (arguments.length == 3) {
    console.log(
      `login with username->${arguments[0]} password->${arguments[1]} and otp->${arguments[2]}`,
    );
  } else {
    console.log("invalid login method");
  }
}

login(); //login withount param
login("hitesh", 123); //login with username->hitesh and password->123
login("hitesh", 123, 4567); //login with username->hitesh password->123 and otp->4567

//3. way its fine if you want to use
let l1 = function login() {
  console.log("login withount param");
};

let l2 = function login(uname, pwd) {
  console.log("login with username and password" + uname + pwd);
};

let l3 = function login(uname, pwd, otp) {
  console.log("login with username, password and otp", uname, pwd, otp);
};

l1(); //login withount param
l2("hitesh", 123); //login with username and passwordhitesh123
l3("hitesh", 123, 4567); //login with username, password and otp hitesh 123 4567
