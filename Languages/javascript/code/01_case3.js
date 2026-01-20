// Simple, predictable, hot function
function add(a, b) {
  return a + b;
}

// Warm-up loop → make function HOT
for (let i = 0; i < 10000; i++) {
  add(1, 2);
}
// Keep process alive briefly
console.log("done");
