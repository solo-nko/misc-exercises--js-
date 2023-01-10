//the purpose of this exercise is to practice using more complex switch statements.  I like switch statements, but they're only ever demonstrated as being used for very simple comparison purposes i.e. "if x === y, run this."  If if...else statements can run code such as "if x > y && x === z, run this", I feel like switch statements should be able to, as well.

function lifePhase (age)
{
  switch(true)//Switch statements work by taking the value passed to them and checking each case to see if they are strictly equivalent to said value.  So we just use a boolean as our switch value...
  {
    case age >= 0 && age <= 3: //...and then ask "is this true?"
      return "baby";
    case age >= 4 && age <= 12://...what about this?
      return "child";
    case age >= 13 && age <= 19://...or this?
      return "teen";
    case age >= 20 && age <= 64:
      return "adult";
    case age >= 65 && age <= 140:
      return "senior citizen";
    case age < 0 || age > 140:
      return "This is not a valid age";
  }

}






// Uncomment the line below when you're ready to try out your function
// console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!