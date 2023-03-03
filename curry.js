class Computer
{
	constructor(form,price,mfg) {
		this._formFactor = form;
		this._price = price;
		this._manufacturer = mfg;
		this._inStock = false;
		this._currentInventory = 0;
	}

	//getters
	get formFactor() {
		return this._formFactor;
	}
	get price() {
		return this._price;
	}
	get manufacturer() {
		return this._manufacturer;
	}
	get inStock() {
		return this._inStock;
	}
	get currentInventory() {
		return this._currentInventory;
	}

	//setters
	set formFactor(input) {
		if (input.toLowerCase() === "laptop" || input.toLowerCase() === "desktop" || input.toLowerCase() === "tablet")	{
			this._formFactor = input;
		} else {
			console.log("invalid input");
		}	
	}
	set price(input) {
		if (typeof input === "number") {
			this._price = input;
		} else {
			console.log("invalid input");
		}
	}
	set manufacturer(input) {
		if (typeof input === "string") {
			this._manufacturer = input;
		} else {
			console.log("invalid input");
		}
	}
	set currentInventory(input) {
		if (typeof input === "number") {
			this._currentInventory = input;
		} else {
			console.log("invalid input");
		}
	}

	addToInventory(input) {
		this.currentInventory += input;
	}
}

const dellLaptop = new Computer("laptop", 600, "Dell");
const surfaceTablet = new Computer("tablet", 900, "Microsoft");
const asusLaptop = new Computer("laptop", 1600, "Asus");
const dellDesktop = new Computer("desktop", 1400, "Dell");
const hpDesktop = new Computer("desktop", 700, "HP");
const samTablet = new Computer("tablet", 750, "Samsung");
const macbook = new Computer("laptop", 900, "Apple");
const iPad = new Computer("tablet", 400, "Apple");
const macbookPro = new Computer("laptop", 1800, "Apple");
const iMac = new Computer("desktop", 1700, "Apple");
const macMini = new Computer("desktop", 650, "Apple");
const surfaceStudio = new Computer("desktop", 2000, "Microsoft");

const inventory = [
	dellLaptop,
	surfaceTablet,
	asusLaptop,
	dellDesktop,
	hpDesktop,
	samTablet,
	macbook,
	iPad,
	macbookPro,
	iMac,
	macMini,
	surfaceStudio
];

console.log(inventory);
//curried functions in arrow syntax
/*note that bracket notation is used in the filter function (obj[key]) instead of dot notation (obj.key).
The reason for this is that dot notation only works when you use the property's name explicitly ('manufacturer', in this case). It cannot be used to access a property name that is stored inside of a variable ('manufacturer' stored inside of the variable 'key'). As such, bracket notation is necessary. */
const setFilterArrow = array => key => value => array.filter(obj => obj[key] === value);

const filterPCs = setFilterArrow(inventory);
const filterPCsByMfg = filterPCs("manufacturer");
const filteredPCsByApple = filterPCsByMfg("Apple");

console.log(filteredPCsByApple);

//curried functions in standard function syntax
function setFilter(array){ //setFilter takes an array, ideally of objects.
	return function keyFilter(key){ //it gives this array to keyFilter.
		return function valueFilter(value){ //keyFilter gives the array to valueFilter.
			return array.filter(function(obj){  //valueFilter runs the filter function on the array, checking to see if the key given to keyFilter matches the value given to valueFilter.
				return obj[key] === value;
			})
		}
	}
}

//this is a test to filter through the inventory array in a currying fashion, using nested functions.
const testFilter = setFilter(inventory); //we set up a filter using the inventory array of objects created above.
const findMfg = testFilter("manufacturer");  //then we set up a filter that looks through the manufacturer property of those objects.
const findApple = findMfg("Apple"); //then we create a new array made from looking through each manufacturer property and seeing if its value was "Apple".

console.log();
console.log(findApple);