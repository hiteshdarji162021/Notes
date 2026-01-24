let name1: string = 'hitesh';
let age: number = 33;


type user = string | number;
// let udetail :user = true  - we can not enter other then string or number else throw error


let udetails = 'gabbar';
console.log(udetails); //gabbar


type status = 'peding' | 'inprogrsss' | 'completed' | 100;
//let orderStatus :status = 'test';   // apart from peding or inprogrsss or completed we can not write.
let orderstatus: status = 'peding';
console.log(orderstatus); // peding




type user1 = {
   id: string | number,
   name: string,
   salary: number,
   isActive?: boolean,  //opitonal
   createAt: Date
}


let newUser: user1 = {
   id: 1,
   name: 'John',
   salary: 50000,
   //isActive: true,  - removed as its optional
   createAt: new Date()
}
console.log(newUser);


let newUser2: user1 = {
   id: 2,
   name: 'hitesh',
   salary: 60000,
   isActive: true,  //- removed as its optional
   createAt: new Date() //- if we remove this then its throw error.
   // drive():void {  - we can not create function additonal. only fix vlaue.


   // }
}
console.log(newUser2);





