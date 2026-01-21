//object - object refrenance name
//propeties - key and value pair
//fuction(behavior) - action


let user= {
    name: 'hitesh',
    age:30,
    salary:34.55,
    coding: function test(){
        console.log(`${this.name} is writting the code in js`);
    },
    // inside object so this of function its working without function keyword. only name like printing
    // internally its convert printing: function(ctc) { ... } //introduced in ES6 in javascript
    // pleaes note its not working if its outside object.
    printing(ctc){  
        console.log('your current ctc is',this.salary);  //your current ctc is 34.55
        let finalctc = ctc+this.salary;
        return finalctc;


    },


    playing: function(sprotsname){
        console.log(`${this.name} is playing ${sprotsname}`);
    },
    /**
     *
     * @param {number} speed
     */
    walking: (speed)=>{
        // console.log(`${this.name} is walking with ${speed}`); - Error - this.name is not work in => arrow function
        console.log(`${user.name} is walking with ${speed}`);
    }


}


console.log(user.name);  //hitesh
console.log(user['age']);  //30
 
user.coding();  //hitesh is writting the code in js
user['coding']();  //hitesh is writting the code in js


let sal = user.printing(20)  
console.log(sal); //54.55


user.playing('cricket')  //hitesh is playing cricket


user.walking(100) //hitesh is walking with 100