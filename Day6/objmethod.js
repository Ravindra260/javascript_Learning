// var user ={
//     name:"rohit",
//     age:24,
//     print: function(x){
//        var y=x+9;
//        return y;
//     }
// };
//console.log(user.name);
//console.log(user.print(5));

//2 arrays can be convert into array of object
var product =["Fan","fridge","Cooler"];
var price=[1000,4000,5000];
var data=[];
for( var i=0;i<product.length;i++){
    var obj={};
    obj.name=product[i];
    obj["price"]=price[i];
    data.push(obj);
}
console.log(data);

