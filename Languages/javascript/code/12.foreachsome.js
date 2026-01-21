let product = ["macbook", "samsung", "iphone", "sim", "keyboard"];

//for each method

product.forEach((ele) => {
  console.log(ele);
  if (ele == "iphone") {
    //break;  - In for reach break not work
    //return - return not give any error but its run whole loop. so its also not working.
  }
});

//some method

console.log("=================================");
let product1 = ["macbook", "samsung", "iphone", "sim", "keyboard"];
let flag = product1.some((ele) => {
  console.log(ele);
  if (ele == "iphone") {
    //break;  - In for reach break not work
    return true; //due to return statement we can store in flag. in foreach we can not store.
  }
});

console.log(flag);
