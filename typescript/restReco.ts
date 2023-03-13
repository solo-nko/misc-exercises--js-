// import restaurants from './restaurants';
const restaurants = [
{
	name: 'Silver Rice Sushi 🍣',
	priceBracket: '2',
	deliveryTimeMinutes: 40,
	openHour: '12',
	closeHour: '23',
	distance: '5',
},
{
	name: 'Nikko\'s Rotisserie Chicken 🍗',
	priceBracket: '1',
	deliveryTimeMinutes: 20,
	openHour: '12',
	closeHour: '21',
	distance: '8',
},
{
	name: 'Aita Trattoria 🍝',
	priceBracket: '3',
	deliveryTimeMinutes: 60,
	openHour: '18',
	closeHour: '22',
	distance: '1',
},
{
	name: 'Lula Bagel 🥯',
	priceBracket: '1',
	deliveryTimeMinutes: 20,
	openHour: '0',
	closeHour: '12',
	distance: '2',
},
{
	name: 'Golden Chopstick 🥢',
	priceBracket: '1',
	deliveryTimeMinutes: 20,
	openHour: '15',
	closeHour: '23',
	distance: '12',
}];

const dollarSigns = '$$';
const deliveryTimeMax = '90';
const maxDistance = 10;
let result;
let currentHour:number = new Date().getHours();

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  //using the Number global object as a function to carry out Number coercion.
	if (Number(restaurant.priceBracket) > priceBracket) {
		return false;
  }

  //using the String global object as a function to carry out String coercion. This works the same as a .toString() method.
  if (String(restaurant.deliveryTimeMinutes) > deliveryTimeMax) {
	return false;
  }

  if (Number(restaurant.distance) > maxDistance) {
	 return false;
  }

  if (currentHour < Number(restaurant.openHour) || currentHour > Number(restaurant.closeHour)) {
		return false;
  }

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
