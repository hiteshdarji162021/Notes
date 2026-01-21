function testing() {
  console.log("testing");
  pop();
}

function pop() {
  console.log("pop called");
  result();
}

function result() {
  console.log("result");
}

testing();