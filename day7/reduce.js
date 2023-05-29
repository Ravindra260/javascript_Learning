 var mark=[10,20,30,40];
 var sum=mark.reduce(function(acc,elem){
  return acc+elem
 })
 console.log(sum)


 //with intial value
 var mark1=[10,20,30,40];
 var sum1=mark1.reduce(function(acc,elem){
  return acc+elem
 },20)
 console.log(sum1)

 let array = [10, 16, 17, 18, 19];

let addNums=function (acc, cv) {
  return acc+cv;
}

let total=array.reduce(addNums,10);
console.log(total)