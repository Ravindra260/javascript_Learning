var array=[1,2,3,4,7];
var odd=array.filter(function(elem){
    return elem%2!=0
}).reduce(function(acc,elem){  
    return acc+elem
})
console.log(odd)