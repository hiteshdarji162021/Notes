//common memory allocation for all static variable and methods. memoery allocation at time and use while execution.


class employee {
  static timeOut = 10;
  static readExcelData() {
    console.log("read data from excel");
  }
  writeData() {
    console.log("write data in excel");
  }
}

let emp = new employee();

console.log(employee.timeOut);
employee.readExcelData();

emp.writeData();
