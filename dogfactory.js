//this is an exercise in factory functions.

function dogFactory(name = "sam", breed = "daschund", weight = 35) //function dogFactory() creates a new object.  i added some default values to the parameters, mainly to indicate what kinds of values are expected.
{
  return {
    _name: name, //name is expected to be a string.
    _breed: breed, //breed is expected to be a string.
    _weight: weight, //weight is expected to be a weight.
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(newName) { //setter functions are used in place of directly modifying the property.  I wasn't sure what the practical purpose of using a middleman like this was supposed to be, but I think one important thing that occurred to me is that using a setter function allows you to perform input validation.  I didn't do it here, but you could for example use if/else logic to test whether what the user is trying to change the property to is actually valid.
      this._name = newName;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++;
    }
  };
}

const goldie = dogFactory("Goldie", "Golden Retriever", 50);

goldie.weight = 43; //an important note about getter and setter functions is that they aren't used with paranthesis.

console.log(goldie);