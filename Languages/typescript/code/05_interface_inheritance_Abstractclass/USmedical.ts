//more then 1 inteface exntes in interface in typescript not in java.
//100% abstractoin in interface
// no static method
// no default method.
  //only method declartion
  //not create object of interface

import { UNSC } from "./UNSC";
import { who } from "./who";
//more then 1 inteface exntes in interface in typescript not in java.
//100% abstractoin in interface
// no static method
// no default method.
  //only method declartion
  //not create object of interface
export interface USmedical extends who, UNSC {
  //min_free :number=10; // you can not initilize its error
  min_free:number;


  physio(): void;
  cardio(): void;
  emergency():void;
}
