//this is an exercise in objects.
//our goal is to create a complex object that stores data about a team.
const team = {
    _teamName: "ArenaTown Bulls",
    _players: [ //this is an array showcasing the Bulls' roster.  Each element (enclosed in {}) is itself an object with three properties.
        {firstName: "Micheal", lastName: "Jordan", age: 37},
        {firstName: "James", lastName: "Baird", age: 28},
        {firstName: "Dan", lastName: "Faylen", age: 31}
    ],
    _games: [ //as with the player roster, we have an array storing nested objects going over the Bulls' game record.
        {opponent: "Shooting Stars", teamPoints: 2, opponentPoints: 4},
        {opponent: "Oblivion Furies", teamPoints: 6, opponentPoints: 6},
        {opponent: "Dawncrest Novas", teamPoints: 5, opponentPoints: 4}
    ],
    get players() //this is a getter function to access _players.  It should generally be used instead of accessing _players directly.  same for games() and teamName()
    {
        return this._players;
    },
    get games()
    {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) //this is a method for addinga new player to the roster.
    {
        let newPlayer = {firstName: newFirstName, lastName: newLastName, age: newAge}; //it creates a new object with the required three properties...
        this.players.push(newPlayer); //and then using the .push() array method it adds that object to the end of the _players array.
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints)
    {
        let newGame = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
        this.games.push(newGame);
    },
    get teamName()
    {
        return this._teamName;
    }
}

team.addPlayer("Duke", "Jones", 27);
team.addGame("Boldark Titans", 3, 1);
console.log(team.games);