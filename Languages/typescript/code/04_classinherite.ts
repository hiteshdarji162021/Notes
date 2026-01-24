import { BMW, User } from "./04_Class_Objects_Readonly";


let u1 = new User('Tom', 20, 12.33, 800);
u1.drive();
console.log(u1.shares);

let bm = new BMW('rolsroyal','blue',1);
bm.start();
bm.stop();
bm.autoParking();