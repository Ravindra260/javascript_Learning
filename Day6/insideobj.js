user2 ={
    name:"Rahul",
    age:25,
    gender:"male",
    city:"banglore",
    mark:[24,45,56,67,56],
    addres:{
        state:"mahrastra",
        country:"India",
        dist:"Thane",
        Pincode:"421302"

    }

};
//dot nataion
console.log(user2.addres.state);
console.log(user2.city);
console.log(user2.mark[4]);
//bracket notation
console.log(user2['gender']);
console.log(user2.gender);
console.log(user2["gender"]);

