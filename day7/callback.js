// //call Back finction Learning

// function eatbreakfastt(item,time,brush){
//     console.log("i will Eat"+" "+item+" "+ "as breakfast at"+" "+time)

// }
//  function dobrush(){
//     console.log("brush first then")
//  }
// eatbreakfastt("idli",9,dobrush())

// //Now let’s to pass number as argument along with strin
function eatBreakfast(item,time){
     doBrush()
	console.log("I will eat"+" "+item +" "+ "as my breakfast"+" at"+" "+time)
}


function doBrush(){
	console.log("First brush your teeth")
}

eatBreakfast( "idly",9,doBrush)
