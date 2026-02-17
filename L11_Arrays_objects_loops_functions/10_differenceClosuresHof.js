// 🌟 Key Point: 

// HOF aur closure me overlap ho sakta hai, par dono ka focus alag hai.

// 1️⃣ HOF (Higher-Order Function) aspect

// Definition: Function jo function ko return kare ya function ko argument me le

// Tumhara code:

// function food() {
//     return function drink() {
//         console.log("coke & chole bhature");
//     }
// }
// let dinner = food(); // food() returns a inner function drink → HOF!


// ✅ Focus: food() function ne drink() function return kiya → HOF ka rule satisfy hua

// 2️⃣ Closure aspect

// Definition: Jab inner function outer function ke variables ko yaad rakhe, even after outer end ho jaye

// Tumhara code:

// function food() {
//     let favFood = "chole bhature";
//     return function drink() {
//         console.log("coke & " + favFood);
//     }
// }
// let dinner = food(); // outer function food() khatam ho gaya
// dinner();            // inner function run → favFood yaad hai → closure!


// ✅ Focus: drink() ne favFood ko yaad rakha, even though food() ka execution end ho chuka

// 💡 TL;DR:

// HOF = function ko return karna (ya argument me lena)

// Closure = returned function outer ke variable ko yaad rakhta hai

// 💥 So, ye code dono ka example hai:

// HOF → food() returns drink()

// Closure → drink() remembers favFood

// ✨ Memory Trick for Diary
// Concept	Focus	Your Code Example
// HOF	function return ya function argument	food() returns drink()
// Closure	inner function remembers outer variables	drink() remembers favFood