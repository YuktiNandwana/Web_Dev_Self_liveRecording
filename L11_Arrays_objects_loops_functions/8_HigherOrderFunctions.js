/* A Higher-Order Function is a function that either:

Takes another function as an argument, or
Returns a function, or
Does both /*


//1. here we pass function as a argument

// function favCar(){
//     console.log("Thar or Defender");
// }

// function yuktiDream(fn){
//  fn();
// }

// yuktiDream(favCar);

//so here yuktiDream is a hof as it pass another function inside it as argument


//2. now we can also. return a function 
//example 1

function outer (){
    return function  inner(){
        console.log("hey i m inner");
    }
}

let result= outer();
result();



//example 2
// function cake(){
//     return function choco(){
//         console.log("dark cake is my favourite....")
//     }
// }
//  let birthday=cake();
//  birthday();


//  Why Use HOFs?
// ✅ Reusability - Write once, use with different functions
// ✅ Abstraction - Hide complex logic
// ✅ Composition - Combine functions for powerful operations
// ✅ Flexibility - Customize behavior without changing core function
// ✅ Cleaner Code - More readable and maintainable

// function vacation (){
//     console.log("ayodhya we will go definitetly with my family");
// }

// function whenGo(fn){
//     console.log("hey yes go ahead bro sis")
//     fn();
// }
// whenGo(vacation)




function pyaar (){
    return function mohaabbat (){
    console.log("attraction");
    }
}
let love = pyaar();
love();
