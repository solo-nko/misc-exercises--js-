//simple exercise done during a react.js course.
//converts an array of numbers to an array of objects.

function transformToObjects(numberArray) 
{
	const objectArray = numberArray.map((elem) => {
		return {val:elem};
	})
	return objectArray;
}

const sample = [1,2,3];

console.log(sample);
console.log(transformToObjects(sample));
