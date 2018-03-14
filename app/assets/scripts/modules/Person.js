function Person(name, color){
	this.name = name;
	this.color = color;
	this.greet = function(){
		console.log("Helloooo... " +name+ " this color " +color+ " is awesome!");
	}
}

module.exports = Person;