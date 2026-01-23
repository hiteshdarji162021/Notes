function startMachin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. machin started");
      resolve();
    }, 5000);
  });
}

function bilWater() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. boil water");
      resolve();
    }, 4000);
  });
}

function addCoffeePowder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3. cofee powder added");
      resolve();
    }, 3000);
  });
}

function popInCup() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4 pop in cup");
      resolve();
    }, 2000);
  });
}

function serveCoffee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("5. cofee served");
      resolve();
    }, 1000);
  });
}

// startMachin()
//   .then(bilWater)
//   .then(addCoffeePowder)
//   .then(popInCup)
//   .then(serveCoffee)
//   .then(() => {
//     console.log("Coffee is ready to serve!");
//   });

console.log(
  "============================async await=============================",
);
//async await
async function makeCoffee() {
  startMachin();
  bilWater();
  addCoffeePowder();
  await popInCup();
  await serveCoffee();
  console.log("Coffee is ready to serve!");
}
makeCoffee();