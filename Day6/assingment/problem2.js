var rectangle=
{
    length:9,
    width:6,
    area:function()
    {
        var area1=0;
        area1=area1+ (this.length*this.width);
        return area1;
    },
    area2:function()
    {
        var peri=0;
        peri=peri + 2*(this.length+this.width);
        return peri;
    }
};
console.log(rectangle["area"]());

console.log(rectangle.area2());