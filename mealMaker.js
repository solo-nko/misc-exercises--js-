//this is an exercise in javascript objects.
//it creates an object containing information on today's special.

const menu =
{
    _mealName:"",//the underscore is meant to indicate that the value should not be directly modified.  note that this is for humans, not the computer, and is not some language-enforced hard regulation.
    _mealPrice:0,
    set mealName(mealToCheck){ //instead, we use what is called a "setter method" to set the price.
        if (typeof mealToCheck === "string"){ //first we check to see if the input is valid.
            this._mealName = mealToCheck; //then we pass the input into _mealName.  Why we need to use this roundabout method, I'm not sure at the time of this writing.
        }},
    set mealPrice(priceToCheck){
        if (typeof priceToCheck === "number"){
            this._mealPrice = priceToCheck;
        }
    },
    get todaysSpecial(){
        if (this._mealName && this._mealPrice){
            return `Today's Special is ${this._mealName} for $${this._mealPrice}!`;
        } else {
            return 'Meal or price was not set correctly!';
        }
    }
}

menu.mealName="lasagna";
menu.mealPrice=15;

console.log(menu.todaysSpecial);