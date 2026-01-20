const a = 10;

function test() {
  const a = 20; // block-scoped constant
  console.log(a); // 20

  if (true) {
    const a = 30; // new constant (block scope)
    console.log(a); // 30
  }

  console.log(a); // 20
}

test();
console.log(a); // 10
