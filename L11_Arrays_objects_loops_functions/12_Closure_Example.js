//simple examples of CLOSURES. **********

 function animals(){
    let first="leopard", second="dear"
     return function yourFav(){
         console.log("these two are my fav animals"+first+" "+second);
    }
 }
 let result=animals();
  result();

// animals() ke andar jo variables first aur second hain,

// Wo outer function ke khatam ho jaane ke baad bhi accessible hain

// Kyunki yourFav() unko remember kar raha hai

// And jab tum result() ko call karti ho → wo closure bana ke values use karta hai