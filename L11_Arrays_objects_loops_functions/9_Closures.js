function food(){
    let favFood ="chole bhature";
    return function drink(){
        console.log("coke"+" & "+favFood)
    }
}
let dinner =food();//outer funciton khtm ho gya , inner function returned & stored in "dinner"
dinner();//inner function run hota hai => closure in action.

// Closure ka proof:

// Even though food() ka execution khatam ho gaya, inner function drink() ko ab bhi favFood ki value yaad hai.

 //Closure aspect neeche dekho |

// Definition: Jab inner function outer function ke variables ko yaad rakhe, even after outer end ho jaye



//example 2

function sum(){
    let a=2 ,b=3;
  return function add(){
   return a+b;
  }
}
let result=sum();
 console.log(result());



 //example 3

 function multiply(){
    let b=9,c=3;
    return function guna(){
        return b*c;
    }
 }
 let result1=multiply();
 console.log(result1());


 //example 4

 function makeCake(){
    let cakeName = "chocolatecake";
    return function madeBy(){
        console.log("YUKTI NANDWANA"+" loves to "+ cakeName)
    }
 }
let birthday=makeCake();
birthday();

//example 5

