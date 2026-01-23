function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // Simulate success or failure
      if (success) {
        resolve("success");
      } else {
        reject("error");
      }
    }, 2000);
  });
}
//outdated code using then and catch
// getUserData()
//     .then((message) => {
//         console.log(message);
//     }).catch((error) => {
//         console.log(error);
//     });

//its optional to async with function if not  use inside await else its mandatory to use asyc.
// if use await then must function async

async function showUsrData() {
  try {
    console.log("user data");
    let name = await getUserData();
    console.log(name);
  } catch (error) {
    console.log(error);
  }
}
showUsrData();

//output
// user data
// success

console.log("=======================");

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Doe" },
      ]);
    }, 2000);
  });
}

let orders = await fetchData();
console.log(orders);

// output
// success
// [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Doe' }
// ]

//awit concepts other example
//promise written any thing array, arrayobject, stirng, number anything
//return string
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // Simulate success or failure
      if (success) {
        resolve("success");
      } else {
        reject("error");
      }
    }, 2000);
  });
}

//return array object
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Doe" },
      ]);
    }, 2000);
  });
}

//return array
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Doe" },
      );
    }, 2000);
  });
}

//promise given
let getuser = getUserData();
let showUser = fetchData();
let getdata = getData();

//1.

// let[get, show] = await Promise.all([getuser, showUser]);
// console.log(get);
// console.log(show);

//2. //parellel exueciton take 2 seconds

// 1.approch - array destructuing
let [user, showuse, gtdata] = await Promise.all([getuser, showUser, getdata]);
console.log(user);
console.log(showuse);
console.log(gtdata);

//2nd approch- all inside one array
let data = await Promise.all([getuser, showUser, getData]);
console.log(data);

//3. sequential execution take 2+2= 4 seconds
let get = await getUserData();
let show = await fetchData();
let data1 = await Promise.all([get, show]);
console.log(data1);

console.log("=====================================");

console.log("do not wait for anything just proceed not use await");
function sendEmail(emailid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Email sent to ${emailid}`);
      resolve();
    }, 2000);
  });
}

sendEmail("hitesh@gmail.com");
console.log("checkout order");

console.log("=====================================");

function sendEmail1(emailid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Email sent to ${emailid}`);
      resolve();
      return true;
    }, 2000);
  });
}

//1. approch
let status1 = sendEmail1("hitesh@gmail.com");
console.log(status1); // Promise <Pending>  as not write await with send email
console.log("checkout order");

//2. approch - proper output
let status2 = await sendEmail1("hitesh@gmail.com");
console.log("checkout order");
