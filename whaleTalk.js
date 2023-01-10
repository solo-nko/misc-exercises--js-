//Just a silly little thing that translates an input string to "whale speech."  In this case, "whale speech" has two rules.
//Rule 1: No consonants.  No "y."
//Rule 2: "u" and "e" are extra long and are thus doubled.
//The purpose of this exercise is to practice loops and nested loops.

let input = "turpentine turtles";
const vowels = ["a", "e", "i", "o", "u"];

let resultArray = []; //we declare this as empty for now.  it will be filled up in the loop.

for (let i = 0; i<input.length; i++)
{
    if(input[i]===vowels[1]||input[i]===vowels[4]) //because "u" and "e" are doubled, we add an extra.
    {
        resultArray.push(input[i]);
    }
    for (let iVowels = 0; iVowels < vowels.length; iVowels++) //basically, for each character in the input (outer loop) we check if it's a vowel (aka part of vowels[]) and if so add it to resultArray (inner loop)
    {
        if (vowels[iVowels]===input[i])
        {
            resultArray.push(input[i]);
        }
    }
}

let resultString = resultArray.join("");
resultString = resultString.toUpperCase();

console.log(resultString);