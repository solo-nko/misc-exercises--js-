//This is an exercise in factory functions and objects, originally made as part of a project on Codecademy.  The idea is to create a function that produces objects representing Pila aequor (p. aequor), an undersea organism with a unique DNA strand.

// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G'];
	return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
	const newStrand = [];
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase());
	};
	return newStrand;
};

// pAequorFactory() creates an object representing a discovered specimen of p. aequor.  It accepts a specimen number and a dna strand as arguments, although it only needs the specimen number to operate.
function pAequorFactory(numVal, dnaVal = mockUpStrand())// though the user may input a value for dnaVal (it expects an array), by default the function will generate one using mockUpStrand()
{
	return {
	_specimenNum: numVal,
	_dna: dnaVal,
	mutate(){
		let sample = Array.from(this._dna);
		let newBase = sample[0];
		while(newBase === sample[0])
		{
			newBase = returnRandBase();
		}
		sample[0] = newBase;
		this.dna = sample;
	},
	compareDNA(otherSpecimen){ //the method compareDNA() accepts another specimen as its argument, and compares their DNA strands for matching elements.
		let otherStrand = otherSpecimen.dna; //store otherSpecimen in a new local variable for easy reference
		let numberMatching = 0;
		for (i = 0; i < this._dna.length; i++) //compare the two dna properties.  each time a match is found, increment numberMatching
		{
			if (otherStrand[i] === this._dna[i])
			{
				numberMatching++;
			}
		};
		let percentage = (numberMatching/this._dna.length); //get a percentage of matching elements by dividing the number of matches by the total size of the array.
		percentage = percentage.toFixed(2)*100;//toFixed allows us to drop decimals to the specified number of places
		if (percentage != 0)//if there were any matches at all, explain how much they match
		{
			console.log(`Specimen #${numVal} and Specimen #${otherSpecimen.specimenNum} share ${percentage}% of their DNA strands.`);
		} else //otherwise, mention that they had no matches
		{
			console.log(`Specimen #${numVal} and Specimen #${otherSpecimen.specimenNum} do not share any DNA.`);
		}
	},
	willLikelySurvive(){  //it's been decided that if a specimen's DNA strand consists of more than 60% 'C' or 'G' elements, they are more likely to survive the harsh undersea environments.  willLikelySurvive() investigates this and returns a boolean "true" if they are found to meet this metric, or "false" otherwise.
		let counter = 0;
		this.dna.forEach(function(element)
		{
			if (element === 'C' || element === 'G')
			{
				counter++;                    
	  		};
		});
		let survivalOdds = ((counter/this.dna.length).toFixed(2))*100;
		if (survivalOdds >= 60)
		{
			return true;
		} else
		{
			return false;
		};
	},
	get dna(){ //simple getter function
		return this._dna;
	},
	get specimenNum(){
		return this._specimenNum;
	}
	};
};

// let specimenZero = pAequorFactory(0);
// let specimenZeroTwo = pAequorFactory(2);
// specimenZero.compareDNA(specimenZeroTwo);

let survivableOrganisms = [];
let subjectNumber = 0;
while (survivableOrganisms.length < 30)
{
	let testOrganism = pAequorFactory(subjectNumber);
	if (testOrganism.willLikelySurvive() === true)
	{
		survivableOrganisms.push(testOrganism);
	}
	subjectNumber++;
};

console.log("The following specimens of Pila aequor were found to be in possession of DNA strands conducive to longterm survival:");
for (let i = 0; i < survivableOrganisms.length; i++)
{
	console.log(`Specimen #${survivableOrganisms[i].specimenNum} (Strand Sequence: [${survivableOrganisms[i].dna}])`);
}
