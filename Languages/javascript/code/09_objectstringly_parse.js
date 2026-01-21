let user3 = {
  name: "ronak",
  age: 30,
  address: {
    city: "dehgam",
    zip: 382305,
  },
};
console.log(user3);
console.log(typeof user3); //object

//we convert javascript object to JSON (javascript object Notation)
let u3 = JSON.stringify(user3);
console.log(u3);
console.log(typeof u3); //string

//convert JSON to javascript object.

let user4 = `{
  "userId": 2,
  "id": 18,
  "title": "test title",
  "body": "test body"
}`;

let u4 = JSON.parse(user4);

console.log(u4); //{ userId: 2, id: 18, title: 'test title', body: 'test body' }
console.log(typeof u4); //object
console.log(typeof user4); //string
console.log(user4);
//output
// {
//   "userId": 2,
//   "id": 18,
//   "title": "test title",
//   "body": "test body"
// }
