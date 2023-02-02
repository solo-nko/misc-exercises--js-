const subTeacherDirector = [];

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
      return subTeachers[(Math.floor(Math.random(subTeachers.length-1)))];
   }
}

const baxterElem = new School("Baxter","primary", 346);

baxterElem.quickFacts();

class PrimarySchool extends School
{
   constructor(name, numOfStudents, pickupPolicy)
   {
      super(name,'primary',numOfStudents);
      this._pickupPolicy = pickupPolicy;
   }

   //getters
   get pickupPolicy()
   {
      return this._pickupPolicy;
   }
}

