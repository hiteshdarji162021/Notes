import { Employee } from "./03_export_AccessModifiers_Public_Private_Protected";


class User extends Employee {

    constructor(name: string, age: number, salary: number, isActive: boolean) {
        super(name, age, salary, isActive);
    }


    static start(): void {
        let u1 = new User('tom', 20, 3.44, true);
        console.log(u1.name);
        console.log(u1.age);
        console.log(u1.isActive);
        //console.log(u1.salary);//CT error
        console.log(u1.getSalary());

        u1.getUserData();//protected
    }



}

User.start();