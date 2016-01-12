function parent (name) {
	this.name = name || "adam";	
};

var parent1 = new parent('adam');

var child = Object.create(parent, {
	age: {value: 2}
});

console.dir(child);