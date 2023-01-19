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
        specimenNum: numVal,
        dna: dnaVal,
        mutate(){
            let sample = Array.from(this.dna);
            let newBase = sample[0];
            while(newBase === sample[0]) {
                newBase = returnRandBase();
            }
            sample[0] = newBase;
            this.dna = sample;
        },
        compareDNA(otherSpecimen){
            
        }
    };
  };