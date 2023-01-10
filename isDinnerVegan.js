//the purpose of this function is to go through every object in an array and see if the value of the "source" property is "plant."  if it finds every source property to be plant-based, it returns true.  otherwise, it returns false.  this was written as en exercise in interacting with arrays containing objects.

function isTheDinnerVegan(dinner)
{
  let index = dinner.length - 1;
  while (index >= 0) //i decided to try a while loop this time, becauase i had until now mainly only used for loops in javascript.  it's designed to start at the end of the array and move to the front.
  {
    let dish = dinner[index].source; //"variable dish is equal to the source property of the current element in the dinner array".  There isn't really any practical reason to use a separate variable for this, I could have just put it in the if statement below.  I only did it here for debugging purposes (so I could see what was being passed to "dish").
    if (dish != 'plant')
    {
      return false;
    }
    index--;
  }
  return true;
}

//for testing purposes only
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner));