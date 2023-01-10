//The purpose of this document is to demonstrate variable scoping.  That is, the accessibility of a variable depending on where it is declared in the code.

const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight'; //here we have a variable, lightWaves, being declared.  It is a local variable.
      let region = 'The Arctic';
    // Add if statement here:
    if (region === "The Arctic")
    {
      let lightWaves = "Northern Lights"; //here we have another variable of the same name, also lightWaves, being declared.  It is more local than the previous one.
      console.log(lightWaves); //this will print "Northern Lights", not "Moonlight."
    }
    
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();