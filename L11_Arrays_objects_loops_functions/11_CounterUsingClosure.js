// function createCounter(){
//   let count=0;
//     return function(){
//         count++;
//         return count;
//     }
// }
//  let counter = createCounter();
//  console.log(counter());
//  console.log(counter());

function makeCnt(){
  let cnt=0;
  return function inn (){
    cnt++;
    return cnt;
  }
}
let bb=makeCnt();
console.log(bb());
console.log(bb());
console.log(bb());
