let a = 10;

function test() {
  let a = 20; // block-scoped variable
  console.log(a); // 20

  if (true) {
    let a = 30; // new variable (block scope)
    console.log(a); // 30
  }

  console.log(a); // 20
}

test();
console.log(a); // 10
