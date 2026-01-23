let profile={
   name:"ashok",
   occupation:"business",
   age:40,
   nationality:"indian"
}
//for-In loop
// for every 'key-> k' that is present inside person object
for(let k in profile){
    console.log(k,":",profile[k] );
}

profile['country']="india";
console.log(profile);

delete profile.country;
console.log(profile);