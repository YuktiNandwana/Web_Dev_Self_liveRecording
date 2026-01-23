let a =[1,2,3,4];

// Array is like doubly linked list ki trh hota hai thoda thoda
//push, pop for operations at end


// 🔥 In push():

// Tum value deti ho

// JavaScript next index automatic set kar deta hai

// 🔥 In pop():

// Tum kuch bhi nahi deti

// JavaScript last index se remove kar deta hai

// ✨ Super simple line:

// push() → value last me add
// pop() → value last se remove

a.push(2);
console.log(a);

a.pop();
console.log(a)

//shift and unshift operations

a.unshift(10);//add krna value front mei
console.log(a)

a.shift();
console.log(a);//remove value from front
