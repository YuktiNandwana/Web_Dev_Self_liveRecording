//1. here we pass function as a argument

function favCar(){
    console.log("Thar or Defender");
}

function yuktiDream(fn){
 fn();
}

yuktiDream(favCar);

//so here yuktiDream is a hof as it pass another function inside it as argument


//2. now we can also. return a function 
//example 1
function outer (){
    return function  inner(){
        console.log("hey i m inner");
    }
}
//example 2
let result= outer();
result();

function cake(){
    return function choco(){
        console.log("dark cake is my favourite....")
    }
}
 let birthday=cake();
 birthday();
