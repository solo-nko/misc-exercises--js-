//this function calculates what age a person either was or will be.  It accepts the user's current age, and the year they would like to project to.  
//If the year is in the future, it will calculate what age they will be during that year.
//If the year is in the past, it will calculate what age they were during that year.
//If the year is from before the user was born, it will tell you how far past their birth year it is.

function howOld(age,year)
{
  const currentYear = 2022; //We need the current year in order to calculate the rest.  This could also reworked as a parameter.
  let yearDifference = year - currentYear;
  let newAge = 0;
  if(yearDifference < 0)
  {
    yearDifference -= (yearDifference*2);
    if(yearDifference > age)
    {
      yearDifference -= age;
      return `The year ${year} was ${yearDifference} years before you were born.`;
    } else
    {
      newAge = age - yearDifference;
      return `You were ${newAge} in the year ${year}.`;
    }
  } else
  {
    newAge = age + yearDifference;
    return `You will be ${newAge} in the year ${year}.`;
  }
}
