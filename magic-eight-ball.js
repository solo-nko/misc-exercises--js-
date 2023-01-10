let userName = "";

userName ? console.log(`Hello, ${userName}!`) :
console.log("Hello!"); //this is what's called a 'ternary expression.'  It's basically an abbreviated version of an if...else statement, where ? is the 'if' and : is the 'else.'  In English this would be "If userName is true, write 'Hello, {userName}!', else write 'Hello!'.  If username contains what's known as a falsy value, such as 0, null or an empty string, the condition will evaluate to false and it will simply print "Hello!".

let userQuestion = "Will my dreams come true?";

userName ? console.log(`${userName}'s question: "${userQuestion}"`) :
console.log(`Your question: "${userQuestion}"`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch(randomNumber)
{
  case 0:
    eightBall = "It is certain.";
    break;
  case 1:
    eightBall = "It is decidedly so.";
    break;
  case 2:
    eightBall = "Replay hazy, try again.";
    break;
  case 3:
    eightBall = "Cannot predict now.";
    break;
  case 4:
    eightBall = "Do not count on it.";
    break;
  case 5:
    eightBall = "My sources say no.";
    break;
  case 6:
    eightBall = "The outlook is not so good.";
    break;
  case 7:
    eightBall = "Signs point to yes.";
    break;
}

console.log(`The Magic Eight Ball says: ${eightBall}`);
