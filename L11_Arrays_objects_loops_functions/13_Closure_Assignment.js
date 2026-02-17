// Question 1 — Counter Module Using Closures
// 🎯 SOCHO PEHLE — Logic ka POV

// Tumhe basically ek function banana hai:

// createCounter()
// Iske andar ek private variable hoga → count = 0
// Aur return mein ek object dena hai jiske andar 3 functions honge:

// increment()

// decrement()

// getCount()

// All 3 functions closure banayenge count ke around.

// Private ka matlab?
// Bahar se koi direct count = 50 nahi kar sakta.


function  createCounter(){
 let count=30;
    return{
      increment:function(){
        count++;
        console.log("counter after increment" , count);
      },

      decrement:function(){
        count--;
        console.log("counter after decrement",count);
      },

      getCount:function(){
        return count;
      }
    };
}
// yeh bahar hona chahiye
    let result=createCounter();

// object ko function ki tarah call nahi karna,
// uske methods ko call karna hai

// result.increment();

result.increment();
result.decrement();
result.getCount();

//          Your Doubt:

// “result.increment — yeh toh sirf naam hai… method kahaan hai???”

// Answer:
// Method wahi hai — jo tumne object ke andar banaya.
// "increment" key hai, aur uska value ek function hai → THAT function is the method.

    
// ⭐ Real Mapping

// Think it like a dictionary:

// Key	Value
// increment	function() {...}
// decrement	function() {...}
// getCount	function() {...}

// So when you do:

// result.increment();


// You’re saying:

// 👉 “result object ke andar jo KEY ‘increment’ hai,
// uska jo VALUE function hai, usko run karo.”

// Toh method wahi hai — bas key ke through usse access kar rahe ho!


function createCounter(){
    let 
}