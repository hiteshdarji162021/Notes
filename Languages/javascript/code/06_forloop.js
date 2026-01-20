//2. for loop:

//1 to 10:
for (let m = 1; m <= 10; m++){
    console.log(m);//12345678910
}

console.log('===========');
let n = 1;
for (; n <= 10 ;){
    console.log(n);//1234...910
    n++;//11
}

console.log('===========');
for (; ;){
    console.log('byEE!!!!');
    break;
}

console.log('===========');
//10 to 1:
for (let s = 10; s >= 1; s--){
    console.log(s);
}

console.log('===========');
//print all the even numbers bw 1 to 10:
for (let num = 1; num <= 10; num++){
    if (num % 2 === 0) {
        console.log(num);
    }
}

//print all the odd numbers bw 1 to 10:
for (let num = 1; num <= 10; num++){
    if (num % 2 === 1) {
        console.log(num);
    }
}

//use cases for for loop: if number of iterations are fixed
//1. drop down with fixed value: month, day, year, country
//2. excel/csv: 10 rows: 1 to 10
//3. Array/list: 5: 0 to 4
//4. flight/movie/bus booking: seats: 120 : 0 to 119
//5. Menu Items/Category: 
//6. footer links: 
//7. wrong login attempts: max 3 times
//8. retry logiv: run the failure test cases: 1 2 3 : Failed
