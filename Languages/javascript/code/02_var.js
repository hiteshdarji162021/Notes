var a = 10;

function test() {
  var a = 20; // re-declaration allowed (function scoped)
  console.log(a); // 20

  if (true) {
    var a = 30; // same variable (function scoped)
    console.log(a); // 30
  }

  console.log(a); // 30
}

test();
console.log(a); // 10
