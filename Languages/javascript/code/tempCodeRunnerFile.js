function startMachin(callback) {
  setTimeout(() => {
    console.log("1. Start Machin");
    callback();
  }, 5000);
}

function bilwater(callback) {
  setTimeout(() => {
    console.log("2. bil water");
    callback();
  }, 3000);
}

function addCoffeePowder(callback) {
  setTimeout(() => {
    console.log("3. add Coffee Powder");
    callback();
  }, 4000);
}

function popinCup(callback) {
  setTimeout(() => {
    console.log("4. pop in Cup");
    callback();
  }, 3000);
}

function servecofee(callback) {
  setTimeout(() => {
    console.log("5. serve cofee");
    callback();
  }, 1000);
}

// startMachin(()=>{})
// bilwater(()=>{})
// addCoffeePowder(()=>{})
// popinCup(()=>{})
// servecofee(()=>{})

startMachin(() => {
  bilwater(() => {
    addCoffeePowder(() => {
      popinCup(() => {
        servecofee(() => {
          console.log("done");
        });
      });
    });
  });
});