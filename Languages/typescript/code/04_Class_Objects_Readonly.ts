export class User {

    public name: string;
    public age: number;
    public salary: number;
    readonly shares: number;  //its same as constant. we can not change value after define except constructor.


    constructor(name: string, age: number, salary: number, shares: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.shares = 800;
    }

    drive(): void {
        console.log('user is driving: ' + this.name);
        // this.shares = 900;
    }

}

//create the object of User: new keyword:
// let u1 = new User('Abhi', 30, 12.33);
// console.log(u1.name, u1.age);
// u1.drive();
// u1.age = 35;
// console.log(u1.name, u1.age);
// //u1.shares = 30;

let u1 = new User('Abhi', 30, 12.33, 500);
let u2 = new User('manisha', 30, 12.33, 1500);


console.log(u1.shares);
//u1.shares = 10;


console.log("=========================================================================");
export class Car {

    public name: string;
    public color: string;
    public price: number;

    constructor(name: string, color: string, price: number) {
        this.name = name
        this.color = color
        this.price = price
    }

    //ts will add one hidden default constructor if not constor in class....

    start(): void {
        console.log('car start');
    }

    stop(): void {
        console.log('car -- stop');
    }

}

export class BMW extends Car {

    public name: string;
    public color: string;
    public price: number;

    constructor(name: string, color: string, price: number) {
        //if not constructor in parent class then still we needs to write super() in child class
        // as by default typescript add default constructor in parent class.

        super(name, color, price);  // Here in parent class hass parametirze custructor so we used super keyword with param.
        this.name = name
        this.color = color
        this.price = price
    }


    override start(): void {   //we user override keyword if method ovrride.(parent child class contain same method. its optional but recommanded so developer know it override method)
        console.log('BMW start');
    }

    autoParking(): void {
        console.log('BMW -- auto parking');
    }

}

console.log("=========================================================================");

