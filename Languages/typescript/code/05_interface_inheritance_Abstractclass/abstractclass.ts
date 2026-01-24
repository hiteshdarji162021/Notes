//abstract class : abstract + non abstract methods
//0% abstraction
//100% abstraction
//partial abstraction
//0-100% : abstraction

//interface: only abstract methods
//100% abstraction

export abstract class Page {

    name: string;
    timer: number;

    constructor(name: string, timer: number) {
        this.name = name
        this.timer = timer
    }

    abstract title(): void;
    abstract url(): void;

    loadingTime(): void {
        console.log('page -- loading...10 secs');
    }
}

export class LoginPage extends Page {
    name: string;
    timer: number;
    constructor(name: string, timer: number) {
        super(name, timer);
        this.name = name
        this.timer = timer
    }

    override title(): void {
        console.log('login page title');
    }
    override url(): void {
        console.log('login page url -- http://abc.com');
    }
    override loadingTime(): void {
        console.log('login page -- loading...2 secs');
    }
    login(username: string, password: string): void {
        console.log('login with :' + username, password);
    }
}

//can not create the object of abstract class:
let lp = new LoginPage('amazon', 40);
console.log(lp.name, lp.timer);


lp.title();
lp.url();
lp.loadingTime();
lp.login('admin', 'admin');



//diff abstract class and encapsulation

// Abstraction - Its means not no implemeniton
// Encpulsiton - Hiding the implementation. Means public class have private variable and method. 
// for e.g atm you see machin and user using not seen sercate and interal things its encapuslation.
