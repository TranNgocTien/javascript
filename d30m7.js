var mark={
    fullName:'Mark ***',
    mass:62,
    height:1.72,
    BMI:function()
    {
        this.bmi=this.mass/(this.height*this.height)
        return this.bmi; 
    }
}

var john={
    fullName:'John Smith',
    mass:72,
    height:1.80,
    BMI:function()
    {
        this.bmi=this.mass/(this.height*this.height)
        return this.bmi; 
    }
}
mark.BMI();
john.BMI();
console.log(mark,john);
if(john.BMI>mark.BMI)
{
    console.log(john.fullName+'has  a higher BMI than'+mark.fullName);
}else if(john.BMI<mark.BMI)
{
    console.log(mark.fullName+'has  a higher BMI than'+john.fullName);
}else{
    console.log(mark.fullName+'has a BMI equal'+john.fullName);
}