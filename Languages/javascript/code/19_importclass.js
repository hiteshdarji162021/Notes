import { TestUtil, age } from "./19.exportclass.js";

let tu = new TestUtil();

tu.readData();
tu.writeData();
//tu.#connectDB(); //private method can not access outside the class
console.log(age);
TestUtil.print(tu); //Call by object refrence
