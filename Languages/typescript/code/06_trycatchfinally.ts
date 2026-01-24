let number = 9 / 0;
console.log(number);


function m1() {
    console.log('m1 method');
    m2();
}


function m2() {
    console.log('m2 method');
    m3();
}





function m3() {
    console.log('m3 method');
    try {


        throw new Error('some error')
    } catch (error) {
        console.log('some error');
        console.log(error);


    } finally {
        console.log('finally');
    }
}


m1();
console.log('bye');

//for e.g m3 is thaird parthy function which use in our project and thrid party said we can not.
//you handle at your end then we put try catch at m2 in our funciton. please note.
