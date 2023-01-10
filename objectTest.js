const travelGroup = {
    travelers : [
        {
        name: "Sally",
        age: 23,
        origin: "michigan"
        },
        {
        name: "Micheal",
        age: 34,
        origin: "switzerland"
        }],
    _destination : "Hokkaido",
    set destination(placeName){
        this._destination = placeName;
    },
    get destination(){
        return this._destination;
    }
}

travelGroup.destination = "Greece";
console.log(`This group is bound for ${travelGroup.destination}`);

let travelerName = travelGroup.travelers[1].name;
console.log(`The traveler's name is ${travelerName}.`);

function travelerSignup (name, age, origin) {
    return {
        name,
        age,
        origin
    };
}

