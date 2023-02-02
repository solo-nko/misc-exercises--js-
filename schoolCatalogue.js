const subTeacherDirectory = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

class School {
   constructor(name, level, numOfStudents)
   {
      this._name = name;
      this._level = level;
      this._numOfStudents = numOfStudents;
   }
   
   //getters
   get name()
   {
      return this._name;
   }
   get level()
   {
      return this._level;
   }
   get numOfStudents()
   {
      return this._numOfStudents;
   }

   //setters
   set numOfStudents(input)
   {
      if (typeof(input) === "number")
      {
         this._numOfStudents = input;
      } else
      {
         console.log("Invalid input: numOfStudents must be set to a number.");
      }
   }

   //methods
   quickFacts()
   {
      console.log(`${this.name} educates ${this.numOfStudents} students at the ${this.level} school level.`);
   }

   //this method expects an array of strings representing a directory of substitute teachers.  it picks one of the strings at random and presents it.
   static pickSubstituteTeacher(subTeachers)
   {
      let output = subTeachers[(Math.floor(Math.random()*subTeachers.length))];
      return output;
   }
}

class PrimarySchool extends School
{
   constructor(name, numOfStudents, pickupPolicy)
   {
      super(name,"primary",numOfStudents);
      this._pickupPolicy = pickupPolicy;
   }

   //getters
   get pickupPolicy()
   {
      return this._pickupPolicy;
   }
}

class HighSchool extends School
{
   constructor(name, numOfStudents, sportsTeams)
   {
      super(name,"high school", numOfStudents);
      this._sportsTeams = sportsTeams;
   }
   
   get sportsTeams()
   {
      return this._sportsTeams;
   }
}

const teamsArray = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']

const alSmith = new HighSchool("Al E. Smith", 415, teamsArray);

const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or family member over the age of 13.");

lorraineHansbury.quickFacts();
console.log(`Today's substitute teacher is ${School.pickSubstituteTeacher(subTeacherDirectory)}.`);


