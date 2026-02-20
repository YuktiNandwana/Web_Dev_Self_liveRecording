function secureBankAccount(){
    let money =0;

     function deposit(val){
      money+=val;
      return money;
    }
    
     function withdraw(val){
    money-=val;
    return money;
     }

     function getBalance(){
       return money;
     }

   return{
       deposit,withdraw,getBalance
   }

}

let account=secureBankAccount();

console.log(account.deposit(1000));
console.log(account.withdraw(50));
console.log(account.getBalance());