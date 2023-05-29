var amazon =[
    {name:"speaker",price:5000,rating:4},
    {name:"led",price:6000,rating:5},
    {name:"headphone",price:8000,rating:3},
];
var newproduct={name:"palysyote",price:9000,rating:9};
amazon.push(newproduct);
console.log(amazon);
for(var i=0; i<amazon.length; i++){
    if(amazon[i].rating>4){
        console.log(amazon[i].name);
    }
}

for(var i=0;i<amazon.length;i++){
    console.log(amazon[i].name,amazon[i].price,amazon[i].rating)
}