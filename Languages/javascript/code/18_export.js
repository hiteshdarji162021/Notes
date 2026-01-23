export let p1 = 3.14;

export function add(a, b) {
  //console.log(a+b);
  return a + b;
}

console.log("===================================");

let p2 = 3.14;

function add1(a, b) {
  return a + b;
}

export { p2, add1 }; //no needs to write export line this just one line export all at same time.

console.log("===================================");

//default function
// it can use only one time in a file
// export default function sub(a,b){
//     return a-b;
// }

let price = 100;
export default price; //export default variable
