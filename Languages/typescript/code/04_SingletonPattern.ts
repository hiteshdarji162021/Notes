//example in web

export class Customer {
    //singltion pattern : u can create only one object /instance  of the class


    private static customer: Customer;
    private constructor() { };


    public static getInstance(): Customer {
        if (Customer.customer == null) {
            Customer.customer = new Customer();
        }
        return Customer.customer;
    }


    public getInfo(): void {
        console.log('getting customer info');
    }


}


let c1 = Customer.getInstance();
let c2 = Customer.getInstance();
console.log(c1 === c2);  //true


//1. while method is non static
Customer.getInstance().getInfo();  //getting customer info


//2. while method is static
//Customer.getInfo()




//cons
//parellel exuection not possible with singletoon pattern. so we are not using in ui automation.


//it required when sequance exeuction then we use singleturn pattern.
//when one user at a time at that time use singletoon pattern. we can use in api.


console.log("====================================================");