var billsOfThreeRestaurant=[124,48,268];
var tip=function(bill)
{
    if(bill<50)
    {
        return bill*20/100;
    }else if(bill>=50&&bill<=200)
        {
            return bill*15/100;
        }else if(bill>200)
        {
            return bill*10/100;
        }
}
var tipForWaiter=[];
tipForWaiter[0]=tip(billsOfThreeRestaurant[0]);
tipForWaiter[1]=tip(billsOfThreeRestaurant[1]);
tipForWaiter[2]=tip(billsOfThreeRestaurant[2]);
console.log(tipForWaiter);

var bothTipAndBill=[];
bothTipAndBill[0]=tip(billsOfThreeRestaurant[0])+billsOfThreeRestaurant[0];
bothTipAndBill[1]=tip(billsOfThreeRestaurant[1])+billsOfThreeRestaurant[1];
bothTipAndBill[2]=tip(billsOfThreeRestaurant[2])+billsOfThreeRestaurant[2];
console.log(bothTipAndBill);    