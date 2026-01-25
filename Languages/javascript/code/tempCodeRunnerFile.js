let user1 = {
  name: undefined,
  age: 33,
  ispermenent: true,
};
function getInfo({ name='ronak', age,city='nandol' }) {
  console.log(name);
  console.log(age);
  console.log(city)
}

getInfo(user1);