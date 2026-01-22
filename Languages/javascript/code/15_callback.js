//async --parelll


//1. Start Machin  -- 5 sec
//2.bilwater --3 sec
//3. addCoffeePowder --4sec
//4. pop in Cup --3sec
//5. serve cofee -- 1 sec




//all async functions - becuaes function not existing one by one
//1.
function startMachin(callback) {
    setTimeout(() => {
        console.log('1. machin started');
        callback();
    }, 5000);
}




function bilWater(callback){
    setTimeout(() => {
        console.log('2. boil water');
        callback();
       
    }, 3000);
}


function addCoffeePowder(callback){
    setTimeout(() => {
        console.log('3. cofee powder added');
        callback()
    }, 3000);
}




function popInCup(callback){
    setTimeout(() => {
        console.log('4 pop in cup');
        callback()
    }, 3000);
}


function serveCoffee(callback){
    setTimeout(() => {
        console.log('5. cofee served');
        callback()
    }, 1000);
}


startMachin(()=>{})
bilWater(()=>{})
addCoffeePowder(()=>{})
popInCup(()=>{})
serveCoffee(()=>{})


//output is not coming in sequance
// 5. cofee served
// 2. boil water
// 3. cofee powder added
// 4 pop in cup
// 1. machin started


console.log("=========================================================================================");





//2.
//call back hell  and peramid of dom - if we call with this way method
startMachin(()=>{
    bilWater(()=>{
        addCoffeePowder(()=>{
            popInCup(()=>{
                serveCoffee(()=>{
                    console.log('your coffee served enjoy');
                })
            })
        })
    });
})




//output
// 1. machin started
// 2. boil water
// 3. cofee powder added
// 4 pop in cup
// 5. cofee served
// your coffee served enjoy


//to solve this problem,-> we have to use promises->async/wait
