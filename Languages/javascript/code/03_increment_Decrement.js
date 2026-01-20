//increment decrement operations

//post increment
// In post increment, the current value is returned first, and then the variable is incremented by 1.
//so Here first a value assigned to b then a is incremented by 1
let a=1
let b= a++
console.log(a) //2
console.log(b) //1


let m = -99
let n = m++
console.log(m) //-98
console.log(n) //-99


//pre increment
// In pre increment, the variable is incremented by 1 first, and then the new value is returned.
//So Here first c is incremented by 1, then a value is assigned to d,
let c=1
let d= ++c
console.log(c) //2
console.log(d) //2


let p = -99
let q = ++p
console.log(p) //-98
console.log(q) //-98




//post decrement
// In post-decrement, the current value is returned first, and then the variable is decremented by 1.
//so Here first e value is assigned to f, then e is decremented by 1
let e=10
let f= e--
console.log(e) //9
console.log(f) //10


let r = -100
let s = r--
console.log(r) //-101
console.log(s) //-100


//pre decrement
// In pre-decrement, the variable is decremented by 1 first, and then the new value is returned.
//So Here first g is decremented by 1, then a value is assigned to h      


let g=10
let h= --g
console.log(g) //9
console.log(h) //9




let total=100
console.log(total++) //100
console.log(total) //101


let num=200
console.log(++num) //201
console.log(num) //201


let t ='100'
let u= --t
console.log(t) //99
console.log(u) //99


console.log('1' ++) //error. First, store the value in a variable, then do the increment or decrement operation.    
console.log('1' --) //error. First, store the value in a variable, then do the increment or decrement operation.