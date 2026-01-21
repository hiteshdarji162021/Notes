function first() {
  console.log("Inside first");
  second();
  console.log("First ends");
}

function second() {
  console.log("Inside second");
  third();
  console.log("Second ends");
}

function third() {
  console.log("Inside third");
}

first();

//output
// Inside first
// Inside second
// Inside third
// Second ends
// First ends
