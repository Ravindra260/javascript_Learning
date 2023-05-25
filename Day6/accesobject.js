var user1=["rahul",25,"male","banglore","coding"];
var user2={
    name:"rahul",
    age:25,
    gender:"male",
    city:"banglore",
    hobbies:"codding",
    mark:[23,45,6,7,67]
};
user2['area']="bhiwandi";
user2.country="India";
console.log(user2["mark"]);
console.log(user2["city"]);
console.log(user2.mark[3]);
console.log(user2.hobbies);
user2["add"] = "japan";
console.log(user2);
delete user2["gender"];
console.log(user2);
delete user2.mark[2];
console.log(user2.mark);
delete user2["city"];
console.log(user2);

