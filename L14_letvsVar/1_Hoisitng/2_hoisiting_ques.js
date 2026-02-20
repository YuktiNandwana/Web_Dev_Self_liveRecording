//before hoisitng 

// console.log(helloWorld);

// var helloWorld = function (){
//     console.log("helloWorld");
// }

// console.log(helloWorld);

// console.log("SAY HELLO BEFORE FUCNTION CALLING ",sayHello );

// function sayHello(){
//     console.log("Hello");
// }

// console.log("SAY HELLO AFTER FUNCITON CALLING", sayHello);

////////////////////////////////////////

//after hoisitng is it run like this in inside js memory


///only L.H.S part will get hoisted incase of var creation .
//value willl be assigned when  program will run
var helloWorld
//entire fucntion get hoisted
function sayHello(){
    console.log("Hello");
}
console.log(helloWorld);

 helloWorld = function (){
    console.log("helloWorld");
}

console.log(helloWorld);

console.log("SAY HELLO BEFORE FUCNTION CALLING ",sayHello );

console.log("SAY HELLO AFTER FUNCITON CALLING", sayHello);


//output
//undefined
//helloWorld
// SAY HELLO BEFORE FUCNTION CALLING Hello
//SAY HELLO AFTER FUNCITON CALLING Hello
//

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000); 
}