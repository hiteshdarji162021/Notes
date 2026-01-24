let username: string = 'hitesh';
console.log(username);

let age: number = 22;
console.log(age);  

let isActive: boolean = true;
console.log(isActive);


//array dynamic type + homogeneous array : only similar type of data
let num: number[] = [1, 2, 3, 4, 5];
num.push(6);
console.log(num);




//1. way
let browsers: string[] = ['chrome', 'firefox', 'safari'];
browsers.push('edge');
console.log(browsers);


//2. way
//array with generic type
let fruits: Array<string> = ['apple', 'banana', 'mango'];
fruits.push('orange');
console.log(fruits);




//tuple : fixed length array with different types of data
//old apporch
let person: [string, number, boolean] = ['hitesh', 22, true];
console.log(person);
person.push('developer'); //tuple allows push method
console.log(person);


//from ts 4.0 onwards you can give name of tuple elements
// new approch and better
let employee: [name: string, id: number, isPermanent: boolean] = ['rahul', 101, true];
console.log(employee);


//enum is collection of related constants
enum BROWSER {
    Chrome,
    Firefox = 'mozila firefox',
    Safari='Safari',
    Edge='Microsoft Edge'
}


console.log(BROWSER.Chrome);  //0 its default vlaue of typescript
console.log(BROWSER.Firefox); //mozila firefox
console.log(BROWSER); //whole enum print






//any:
let data: any = 25;
console.log(data);
data = 'hello';
console.log(data);
data = true;
console.log(data);




//unknown
let value: unknown = 30;
console.log(value);
value = 'typescript';
console.log(value);
value = false;
console.log(value);
value = 'hitesh';


if (typeof value === 'string') {
    console.log(value.toUpperCase());
}


function add1(a: number, b: number): number {
    return a + b;
}  
let sum1 = add1(5, 10);
console.log(sum1);



let p1 :[string, number] =  ['hitesh',23];
console.log(p1);