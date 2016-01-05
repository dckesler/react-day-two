export function checkContext() {
	console.log(this);
}

export function checkArguments() {
	Array.prototype.forEach.call(arguments, function(argument, index){
		console.log(`The ${index} argument is ${argument}`);	
	})
}
