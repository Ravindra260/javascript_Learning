var amazon =[
    {name:"speaker",price:5000,rating:4},
    {name:"led",price:6000,rating:5},
    {name:"headphone",price:8000,rating:3},
];
var add=0;
for(var i=0;i<amazon.length;i++){
    add+=amazon[i].rating
}
var avg=add/amazon.length;
console.log(avg);