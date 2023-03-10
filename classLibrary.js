//This is an exercise in javascript classes and subclasses.

//parent class Media.  It has several properties and accompanying getters and setters that can be inherited by subclasses.
class Media
{
   //parent constructor
   constructor(title)
   {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
   }
   //parent getters and setters
   get title()
   {
      return this._title;
   }
   get isCheckedOut()
   {
      return this._isCheckedOut;
   }
   get ratings()
   {
      return this._ratings;
   }
   set isCheckedOut(input)
   {
      if (input === true || input === false)
      {
         this._isCheckedOut = input;
      } else
      {
         console.log("Invalid input");
      }
   }
   //parent methods
   toggleCheckOut()
   {
      this._isCheckedOut = !this._isCheckedOut;
   }
   getAverageRating()
   {
      const ratingSum = this._ratings.reduce((total, current) => total + current); //reduce is used to finding the sum of all values in the array
      return (ratingSum/this._ratings.length).toFixed(2);
   }
   addRating(newRating)
   {
      if(typeof(newRating) == "number" && newRating > 0 && newRating < 6)
      {
         this._ratings.push(newRating);
      } else
      {
         console.log("Invalid input.  Please enter a star rating from 1-5.");
      }
   }
}

class Book extends Media
{
   constructor(inputTitle,inputAuthor,inputPages)
   {
      super(inputTitle);
      this._author = inputAuthor;
      this._pages = inputPages;
   }
   get author()
   {
      return this._author;
   }
   get pages()
   {
      return this._pages;
   }
}

class Movie extends Media
{
   constructor(inputTitle,inputDirector,inputRunTime)
   {
      super(inputTitle);
      this._director = inputDirector;
      this._runTime = inputRunTime;
   }
   get director()
   {
      return this._director;
   }
   get runTime()
   {
      return this._runTime;
   }
}

// Testing

const historyOfEverything = new Book("A Short History of Nearly Everything", "Bill Bryson", 544);

historyOfEverything.toggleCheckOut();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Speed", "Jan de Bont", 116);
speed.toggleCheckOut();

console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

