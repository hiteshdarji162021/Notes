export class Util {
    private constructor() { }

    static readPDF(): void {
        console.log('read pdf');
    }

    static writeExcel(): void {
        console.log('write in xls');
    }

}

// export class Person extends Util{

// }

//let e1 = new Util();

Util.readPDF();
Util.writeExcel();

//usecase of private constructor
//1. we can not inherite class
//2. we can not create object of class
