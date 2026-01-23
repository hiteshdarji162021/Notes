let age = 33;

console.log("helllow wordlld"); //automaticall exported

class TestUtil {
  static counter = 1;

  static {
    console.log("staic method block1");
  }
  static {
    console.log("staic method block2");
  }

  readData() {
    console.log("read data");
  }

  writeData() {
    this.readData(); //2. non static to non static using this keyword
    TestUtil.drive(); //3. non static to static using class name
    console.log("write data");
  }

  //private method
  #connectDB() {
    console.log("connect to database");
  }
  /**
   *
   * @param {TestUtil} tu
   */
  static print(tu) {
    console.log("static method in TestUtil class");
    TestUtil.drive(); //1. static to static using class name

    //1. in Static method call non static method.
    // let l1 = new TestUtil();
    //l1.readData();

    //2. using call by refrence
    tu.readData();
  }

  static drive() {
    console.log("static drive method");
  }
}

export { TestUtil, age };

//rules


//staic->static => using class name
//non static -> non static => using this keywrod
//non static -> static => using class name
//static -> non static => using object/user by call reference
