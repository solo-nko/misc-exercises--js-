//this will make sense
const sentence = ["sense", "make", "will", "this"];

function reverseArray(inputArray)
{
    let newArray = [];
    for (let i = inputArray.length - 1; i >= 0; i--)
    {
        newArray.push(inputArray[i]);    
    }
    return newArray.join(' ');
}

console.log(reverseArray(sentence));