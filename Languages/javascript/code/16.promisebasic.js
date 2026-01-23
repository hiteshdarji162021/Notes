//1.

let result = new Promise((resolve, reject) => {
  console.log("start the promise");
  let sucess = true;
  if (sucess) {
    resolve("training is done");
  } else {
    reject("failed");
  }
});

//finally always execute. if pass then go to then and if fail go to catch.
result
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error))
  .finally(console.log("its done"));

//2.
let errorPromise = new Promise((resolve, reject) => {
  reject("something got failed");
});

errorPromise.catch((error) => console.log(error));

//3. result promise

let resultPromise = new Promise((resolve, reject) => {
  resolve(100);
});

resultPromise.then((result) => console.log(result));

//4. same 3rd but remove reject. alwasy first param is resolve, and reject is optional
let resultPromise1 = new Promise((resolve) => {
  resolve(100);
});

resultPromise1.then((result) => console.log(result));

//5.

let cakePromise = new Promise((resolve, reject) => {
  console.log("lets making cake");
  let status = true;
  if (status) {
    return resolve("cake is ready");
  } else {
    return reject("health issue cake not done");
  }
});

cakePromise
  .then((result) => console.log(result))
  .catch((reject) => console.log(reject))
  .finally(() => console.log("lets party"));

//6.
//chaining function

function doubleamountafter2seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      x = resolve(x * 2);
    }, 2000);
  });
}

doubleamountafter2seconds(5)
  .then((result) => {
    console.log(result); //10
    return doubleamountafter2seconds(result);
  })
  .then((result) => {
    console.log(result); //20
    return doubleamountafter2seconds(result);
  })
  .then((result) => console.log(result)); //40

//7. Promise.all() - if all promise pass then print all promise else only reject promise status print.

let promise1 = new Promise((resolve, reject) => {
  resolve("promise 1 print");
});
let promise2 = new Promise((resolve, reject) => {
  reject("promise 2 fail");
});
let promise3 = new Promise((resolve, reject) => {
  resolve("promise 3 print");
});

Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//8.Promise.race() - fist promise result show whether its pass or fail

let promise11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 11 pass");
  }, 1000);
});
let promise12 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 12 print");
  }, 2000);
});
let promise13 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 13 print");
  }, 5000);
});

Promise.race([promise11, promise12, promise13])
  .then((result) => {
    console.log(result);
    console.log("working as expected");
  })
  .catch((error) => {
    console.log(error);
    console.log("not working as expected");
  });
