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
      const ratingSum = this._ratings.reduce((total, current) => {total+current}) //needs testing
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
   
}