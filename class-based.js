//#1 this is the default prototype inheritance

// function inherit(child, parent) {
// 	child.prototype = new parent ();
// }

// function parent (name) {
// 	this.name = name || 'parent';
// }

// parent.prototype.say = function () {
// 	return this.name;
// }

// function child(name) {
// }

// inherit(child, parent);

// var testChild = new child();
// testChild.name = "test"
//console.log(testChild.say())

// #2 constructor inherit
// only have the parent properties
function parent2 (name) {
	this.name = name || "adam";
}

parent2.prototype.say = function () {
	return this.name;
}

function child2 (name) {
	parent2.apply(this, arguments);
}

var kid = new child2('patrick');
// console.dir(kid);

//#3 combine #1 and #2
function parent3 (name) {
	this.name = name || "adam";
}

parent3.prototype.say = function () {
	return this.name;
}

function child3 (name) {
	parent3.apply(this, arguments);
}

child3.prototype = new parent3();

var kid3 = new child3('child three');
// console.log(kid3.name);
// console.log(kid3.say());

// #5 temp parent constructor
function inherit2 (c, p) {
	var F = function() {};
	F.prototype = p.prototype;
	c.prototype = new F();
}

function parent5 (name) {
	this.name = name;
}

parent5.prototype.say = function () {
	return this.name;
}

function child5 () {}

var parentTest = new parent5('test parent');

inherit2(child5, parent5);
var kid5 = new child5();
console.dir(kid5.say());

