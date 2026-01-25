export interface User{
    name: string;
    age: number;
    drive(): void;
}

export interface Customer{
    salary: number;
    login(): boolean;

}

let user: User & Customer = {
    name: "Tom",
    age: 30,
    salary: 12.33,

    login(): boolean {
        console.log('user is logged', user.name, user.age);
        return true;
    },
    drive(): void {
        console.log('user is driving', user.name, user.age);
    }

}

console.log(user.name);
user.drive();
user.login();
console.log(user.salary);