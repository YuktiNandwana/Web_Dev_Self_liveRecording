function add (num){
    if(!num) return 0;

   return function  helper(v){
      if(!v)return num;
      num+=v;
      return helper;
   }
}
console.log(add());
console.log(add(1)());
console.log(add(1)(2)());
console.log(add(1)(2)(3)());
console.log(add(1)(2)(3)(4)());


// example 2. INFINITE CURRYING
//Advanced Example: "Infinite Currying" (Boss Level)
//Interview mein puchte hain: Ek aisa function banao jo kitne bhi numbers jod sake, jaise add(1)(2)(3)(4)...()

function curryiedAdd(num){
     if(!num) return 0; // Agar shuru mein hi khali call kiya 'add()', toh 0 de do
  return function helper(v){
    if(!v) return num; // Agar aage koi number nahi diya '()', toh Final Total de do

    num+=v; // Naya number purane total mein jodo
    return helper // MAGIC HAPPENS HERE (Function khud ko wapas bhej raha hai)
    }
}
  
console.log(curryiedAdd(4)(9)());


//📝 Code ke neeche likhne wala Note:
// 🔥 The "Zinda Robot" Rule (Why return helper?) 🔥

// 1. Problem (Error kyun aata?): > JavaScript mein kisi bhi cheez ke aage bracket () lagane ke liye, uss cheez ka Function hona zaroori hai. Agar helper apna Total Number (jaise 3) return kar deta, toh code ban jata 3(3). Number ke aage bracket lagate hi JS Error de deta aur chain toot jati!

// 2. Solution (return helper ka Jadoo):
// Isliye helper Total (num += v) ko apne andar (Closure mein) yaad rakhta hai, aur bahar khud ko hi bhej deta hai (return helper;).

// 3. Asaan Bhasha Mein: > "Chain ko zinda rakhne ke liye! return helper; ek Zinda Function (Robot) wapas deta hai taaki agla wala bracket () us par lag sake. Jab tak brackets aate rahenge, ye khud ko return karta rahega. Aur jaise hi khali bracket () aayega, ye samajh jayega ki chain khatam ho gayi aur final Total return kar dega."