var john={
    fullName:'John Smith',
    bills:[124,48,268,180,42],
    TIP:function(){
        this.tips=[];
        this.finalValues=[];
        for(var i=0;i<this.bills.length;i++)
        {
            var percentOfEachBill;
            if(this.bills[i]<50){
                 percentOfEachBill=20/100;
            }else if(this.bills[i]>=50&&this.bills<200){
                percentOfEachBill=15/100;
            }else{
                percentOfEachBill=10/100;
            }
            this.tip[i]=this.bills[i]*percentOfEachBill;
            this.finalValues[i]=this.bills[i]+ this.bills[i]*percentOfEachBill;
        }
    }
}
john.TIP();
console.log(john);


var mark={
    fullName:'Mark',
    bills:[77,475,110,45],
    TIP:function(){
        this.tips=[];
        this.finalValues=[];
        for(var i=0;i<this.bills.length;i++)
        {
            var percentOfEachBill;
            if(this.bills[i]<100){
                 percentOfEachBill=20/100;
            }else if(this.bills[i]>=100&&this.bills<300){
                percentOfEachBill=10/100;
            }else{
                percentOfEachBill=25/100;
            }
            this.tip[i]=this.bills[i]*percentOfEachBill;
            this.finalValues[i]=this.bills[i]+ this.bills[i]*percentOfEachBill;
        }
    }
}
var average= function (tips)
{
    var sum=0;
    for(var i=0;i<tip.length;i++){
        sum+=tips[i];
    }
    return sum/tips.length;
}
john.TIP();
mark.TIP();


mark.average=average(john.tips);
mark.average=average(mark.tips);
console.log(john,mark);
if(john.average>mark.average)
{
    console.log(john.fullName+"has an average higher");
}else if(john.average<mark.average)
{
    console.log(mark.average+"has an average higher");
}else{
    console.log("They have the same average");
}
