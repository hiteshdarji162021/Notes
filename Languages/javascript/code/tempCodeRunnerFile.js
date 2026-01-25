let car1 = {
  name: "bmw",
  price: 40,
  model: "x1",
};
for (let [key, value] of Object.entries(car1)) {
  console.log(key + " -> " + value);
}