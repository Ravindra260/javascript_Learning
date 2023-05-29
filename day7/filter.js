var sweets=["kova","gulab","laddu","bsrfi"];
var op=sweets.filter(function(elem,index){
    return index%2!=1
})
console.log(op)