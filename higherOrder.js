// simple exercise in 'higher order functions.'  higher order functions are functions that take other functions as arguments.  a function that is used as an argument in this way is called a 'callback function.'

//addTwo is a function that takes the variable num and adds two to it.
const addTwo = num => {
    return num + 2;
  }

//checkConsistentOutput is a higher order function that takes a function and a (ideally) number.  It gives the number to the callback function, and checks the returned result from that function before returning its own result.
const checkConsistentOutput = (func, val) => {
  let checkA = val + 2; //add 2 to val.
  let checkB = func(val); //give val to the callback function.
  if (checkA == checkB) //if val+2 is equal to the number returned by the callback function...
  {
    return checkB; //we return the callback function's output, as it has passed the consistency test.
  } else
  {
    return 'inconsistent results';
  }

}
  
  console.log(checkConsistentOutput(addTwo, 4));