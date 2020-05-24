function add (a,b) {
	return a+b
}

function subtract (a,b) {
	return a-b
}
function sum (array) {
	sum=0
	array.forEach(element => {
		sum+=element;
	});
	return sum
}

function multiply (array) {
	total=1;
	array.forEach(element => {
		total*=element;
	});
	return total
}

function power(a,b) {
	return Math.pow(a,b)
}

function factorial(a) {
	if (a==0 || a==1){
		return 1
	}
	total=a;
	array=[...Array(a).keys()];
	array.shift();
	array.forEach(element => {
		total*=element;
	});
	return total
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}