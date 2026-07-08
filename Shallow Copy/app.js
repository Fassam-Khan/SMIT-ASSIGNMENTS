let user = {
    name : "Fassam Khan",
    age : 19,
    adress : {
        city : "Karachi",
        country : "Pakistan"
    }
}


let userCopy = {...user}

userCopy.adress.city = "Lahore"
userCopy.name = "Khan"

console.log("Original User >>", user);
console.log("Copy User >>", userCopy);


const original = {
    name: "Alice",
    details: { age: 30, hobbies: ["reading", "cycling"] }
  };
  
  const copy = structuredClone(original);
  
  copy.details.hobbies.push("coding");
  
  console.log(original.details.hobbies); 
  console.log(copy.details.hobbies);     