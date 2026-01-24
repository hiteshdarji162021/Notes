//method overloading: 
//multiple methods: same name
class Calc {

    //overloaded methods: signatures/prototypes: no method body:
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: string, b: boolean): string;
    add(a: number, b: boolean): string;

    //single implementation only: with the body:
    add(a: any, b: any): any {
        return a + b;
    }


}

let c1 = new Calc();
let r1 = c1.add(10, 20);
console.log(r1);
let r2 = c1.add('hello', 'playwright');
console.log(r2);

let r3 = c1.add(100, true);
console.log(r3);

let r4 = c1.add('naveen', true);
console.log(r4);



class EComm {
    search(name: string, color: string): string[];
    search(name: string, price: number): string[];
    search(name: string, price: number, seller: string): string[];
    search(name: string, price: number, seller: string, zip: number): string[];
    search(name: string, color: string, seller: string, zip: number): string[];


    search(name: string, colorOrPrice: string | number, seller?: string, zip?: number): string[] {

        console.log('searhing the product.....');
        console.log(`${name} - ${colorOrPrice}, - ${seller} - ${zip}`);
        return ['macbook pro', 'imac', 'ipad'];
    }
}

let ec = new EComm();
ec.search('macbook pro', 'white');
ec.search('apple', 1000);
ec.search('imac', 400, 'amazon');
ec.search('canon', 500, 'amazon', 90900);
ec.search('Apple', 'black', 'flipkart', 989898);



//

function login(username: string, password: string): boolean;
function login(username: string, password: string, role: string): boolean;
function login(username: string, otp: number): boolean;

function login(username: string, otpOrPassword: string | number, role?: string): boolean {

    if (username && otpOrPassword) {
        if (typeof otpOrPassword === 'number') {
            console.log(`login with username: ${username} and otp: ${otpOrPassword}`);
            return true;
        }
        else if (role) {
            console.log(`login with username: ${username} and password: ${otpOrPassword} and role: ${role}`);
            return true;
        }
        else {
            console.log(`login with username: ${username} and password: ${otpOrPassword}`);
            return true;
        }
    }

    else {
        console.log('invalid credentails..');
        return false;
    }
}

console.log(login('admin', 'admin'));
console.log(login('admin', 9090));
console.log(login('naveen', 'naveen123', 'administrator'));
//console.log(login('admin', 9090, 'seller'));//CT error
//console.log(login('admin')); //CT error



