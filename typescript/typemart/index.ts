import { match } from 'assert';
import products from './products';

//the index number determines which product is used for the following code
const productName:string = products[0].name;

const matchingProduct = products.find(function(product){
	return product.name == productName;
})

console.log(productName);
console.log(matchingProduct);

function convertToBool(input) {
	if (input === 'true') {
		return true;
	} else if (input === 'false') {
		return false;
	} else {
		console.log("Invalid input.");
	}
}

if (convertToBool(matchingProduct?.preOrder) === true) {
	console.log("This item is available for preorder.");
}

let shippingAddress:string = '2657 Wild Street, Buffalo, New York';

/**
 * Constructs a receipt for the customer.
 * @returns Nothing, only outputs to console
 */
function buildReceipt() {
	let shipping:number = 5;
	let taxPercent:number;
	let taxTotal:number;
	let total:number;

	if (Number(matchingProduct?.price) > 25) {
		shipping = 0;
		console.log("You got free shipping!");
	} else if (Number(matchingProduct?.price) < 25) {
		shipping = 5;
	}

	if (shippingAddress.includes("New York")) {
		taxPercent = 0.1;	
	} else {
		taxPercent = 0.05;
	}

	taxTotal = taxPercent*Number(matchingProduct?.price);
	total = shipping+taxTotal+Number(matchingProduct?.price);

	console.log("Order Summary:");
	console.log(`Product: ${matchingProduct?.name}`);
	console.log(`Shipping Address: ${shippingAddress}`);
	console.log(`Product Price: $${matchingProduct?.price}`);
	console.log(`Tax Amount (${taxPercent*100}%): ${taxTotal}`);
	console.log(`Shipping: $${shipping}`);
	console.log(`Final Total: $${total}`);
}

buildReceipt();