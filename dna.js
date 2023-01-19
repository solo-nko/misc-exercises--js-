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
    }
    return newStrand;
  };

  console.log(mockUpStrand());

  function pAequorFactory(numVal, dnaVal = mockUpStrand())
  {
    return {
        _specimenNum: numVal,
        _dna: dnaVal,
        mutate(){
            let sample = Array.from(this._dna);
            let newBase = sample[0];
            while(newBase === sample[0]) {
                newBase = returnRandBase();
            }
            sample[0] = newBase;
            this.dna = sample;
        },
        compareDNA(otherSpecimen){
			let otherStrand = otherSpecimen.dna;
			let numberMatching = 0;
			for (i = 0; i < this._dna.length; i++)
			{
				if (otherStrand[i] === this._dna[i])
				{
					numberMatching++;
				}
			}
			let percentage = (numberMatching/this._dna.length);
			percentage = percentage.toFixed(2)*100;
			if (percentage != 0)
			{
				console.log(`Specimen #${numVal} and Specimen #${otherSpecimen.specimenNum} share ${percentage}% of their DNA strands.`);
			} else
			{
				console.log(`Specimen #${numVal} and Specimen #${otherSpecimen.specimenNum} do not share any DNA.`);
			}
        },
		get dna(){
			return this._dna;
		},
		get specimenNum(){
			return this._specimenNum;
		}
    };
  };