export class Employee {


    getSalary(empName: string): number {
        if (empName === 'tom') {
            return 12.33;
        }
        else if (empName === 'peter') {
            return 14.33;
        }
        else {
            console.log('emp not found...' + empName);
            return -1;
        }
    }


}

// //create the object of this class:
// let e1 = new Employee();
// let sal = e1.getSalary('tom');
// console.log(sal);

export { };
//name: add
//params: 2 params
//return type: number

function add(x: number, y: number): number {
    return x + y;
}

let res: number = add(10, 20);
console.log(res);

//function void -- no return keyword
function print(): void {
    console.log('some info....');
}

print();

function clickElement(element: string): void {
    console.log(`click on element: ${element}`);
}

clickElement('loginBtn');

/**
 * This function is checking the element on the page
 * @param element 
 * @param timeout 
 * @returns it returns a boolean value(true/false)
 */
function isElementDisplayed(element: string, timeout: number): boolean {
    let isElement = true;
    if (isElement) {
        console.log(`ele is present on the page : ${element} within time ${timeout}`);
        return true;
    }
    else {
        console.log('ele not found...');
        return false;
    }

}

if (isElementDisplayed('loginLink', 10)) {
    clickElement('loginLink');
}


function getData(): string[] {
    console.log('get data....');
    return ['macbook', 'imac', 'canon'];
}

console.log(getData());

//will never return anything...
//1. function will throw an error..
function throwError(mesg: string): never {
    throw new Error(mesg);
}

throwError('browser not found...');

//2. infinite loop:
// function keepRunning():never {
//     while (true) {
//         console.log('Running...');
//     }
// }

//keepRunning();


function getUserData(): {} {
    return {
        name: 'tom',
        age: 30
    }
}

let user = getUserData();
console.log(user);
