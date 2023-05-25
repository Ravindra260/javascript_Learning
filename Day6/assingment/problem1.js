var data = 
{    
    product:["Rice","dal","Milk"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
    total_price :function(){
        var total=0;
        for(var i=0;i<this.quantity.length;i++)
        {
            total=total + (this.quantity[i]*this.price[i]);
        }
         return total;
    }
};
  console.log(data["total_price"]());
  