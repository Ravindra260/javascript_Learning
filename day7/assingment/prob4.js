var array=[1,2,3,4,6];
var odd=array.filter(function(elem){
    return elem%3==0
}).reduce(function(acc,elem){  
    return acc+elem*elem*elem
},0)
console.log(odd)