import { Car, BMW } from "./inheritance.js";

let myBMW = new BMW();
myBMW.start(); //overridden method //BMW started with key less
console.log(`BMW speed is ${myBMW.speed} km/h`); //BMW speed is 200 km/h
myBMW.autoPark(); //BMW auto park feature
myBMW.refuel(); //car refueled
myBMW.stop(); //no change in inherited method  //car stopped
BMW.billing(); //BMW billing
myBMW.loading(); //inherited from vehicle  //BMW loading

console.log("==============================");
let myCar = new Car();
myCar.start(); //car started
console.log(`Car speed is ${myCar.speed} km/h`); //Car speed is 100 km/h
myCar.refuel(); //car refueled
myCar.stop(); //car stopped
Car.billing(); //car billing
myCar.loading(); //car loading

console.log("============================================");

let b1 = new BMW();
let c1 = new Car();
c1 = b1;
c1.start(); //BMW started with key less //runtime polymorphism
c1.stop(); //car stopped
c1.refuel(); //car refueled
c1.loading(); //BMW loading
c1.autoPark(); //BMW auto park feature

//Notes.
//1. Override only for method.
//2. variable and staatic block same way but not said its override. its indicate variable hiding.
//2. multiple inheritance not allowed using classes. (not used here)
