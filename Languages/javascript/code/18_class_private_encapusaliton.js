class car {
  #price; //private variable
  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }
  #test1() {
    //private method
    console.log("private method");
  }

  //public method
  testDriver() {
    console.log(`Test driving the car ${this.name} priced at ${this.#price}`);
  }

  sum = function () {
    console.log("anonymous funciton");
  };
  sub = () => {
    console.log("arrow function");
  };

  //setter method
  //encapsulation - private variable can be accessed only through public methods
  setPrice(newPrice) {
    this.#price = newPrice;
  }
  //public method to get private variable
  //encapsulation - private variable can be accessed only through public methods
  //getter method
  getPrice() {
    return this.#price;
  }
}

let c1 = new car("BMW", 50000);
console.log(c1.name); //BMW
//console.log(c1.#price);  //SyntaxError: Private field '#price' must be declared in an enclosing class

c1.testDriver(); //Test driving the car BMW priced at 50000

//c1.test1() //SyntaxError: Private field '#test1' must be declared in an enclosing class

c1.sum();
c1.sub();

console.log("==============getter========================");

let price = c1.getPrice(); //50000 /
console.log(price);

console.log("==============setter========================");
c1.setPrice(55000);
console.log(c1.getPrice()); //55000
