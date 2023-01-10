// The purpose of this exercise is to practice functions in concise form.  It is a simple calculator to express hours of sleep per week, in terms of actual hours and ideal hours.

let getSleepHours = (day) => //this is an arrow declaration.  It goes like "let/const {functionName} = (parameters) => {function code}" 
{
  day = day.toLowerCase(); //We'll take a moment to flatten output to lowercase, as sometimes the day of the week can be capitalized.
  switch(day)
  {
    case "monday":
      return 6;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 9;
      break;
    case "saturday":
      return 10;
      break;
    case "sunday":
      return 8;
      break;
  }
}

let getActualSleepHours = () =>
{
  let totalHours = 0; //Practically speaking, there is no reason to give an initial value here, but I prefer to initialize all my variables. It's a habit from C++ programming.
  totalHours += getSleepHours("Monday");
  totalHours += getSleepHours("Tuesday");
  totalHours += getSleepHours("Wednesday");
  totalHours += getSleepHours("Thursday");
  totalHours += getSleepHours("Friday");
  totalHours += getSleepHours("Saturday");
  totalHours += getSleepHours("Sunday");
  return totalHours;
}

let getIdealSleepHours = (idealHours = 8) =>
{
  return idealHours * 7;
}

console.log(`Ideally, I would get ${getIdealSleepHours()} hours of sleep each week.  However, I usually get ${getActualSleepHours()} hours instead.`);

let calculateSleepDebt = () =>
{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours)
  {
    console.log("I get the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours)
  {
    let surplus = actualSleepHours - idealSleepHours;
    console.log(`I got ${surplus} hour(s) more sleep than I needed.`);
  } else
  {
    let deficit = idealSleepHours - actualSleepHours;
    console.log(`I got ${deficit} hour(s) less sleep than I needed.`);
  }
}

calculateSleepDebt();