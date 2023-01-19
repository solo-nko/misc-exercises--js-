// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };

  console.log(mockUpStrand());

  function pAequorFactory(numVal, dnaVal)
  {
    return {
        specimenNum: numVal,
        dna: dnaVal,
        mutate(){
            let sample = this.dna;
            while(sample === this.dna) {
                sample = returnRandBase();
            }
            this.dna = sample;
        }
    };
  };