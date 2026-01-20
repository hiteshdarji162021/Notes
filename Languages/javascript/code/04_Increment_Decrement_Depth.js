let p =11
let j =p++ + ++p  //11 +13 
console.log(p); //13
console.log(j); //24


let a=11
let b=22
let c
c = a + b + a++ + b++ + ++a + ++b  //11 +22 +11 +22 +13 +24
console.log(a); //13
console.log(b); //24
console.log(c); //103




let i=10
let w = i++ + --i + ++i + i--  //10 +10 +11 +11


console.log(i);//10
console.log(w); //42


let m1=0
let n1=0
let p1= --m1 * --n1  * n1-- * m1--  //-1 *-1 *-1 * -1


console.log(m1); //-2
console.log(n1); //-2
console.log(p1); //1