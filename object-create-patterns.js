var MYAPP = MYAPP || {};

MYAPP.namespace = function (ns_string) {
	var parts = ns_string.split('.'),
		parent = MYAPP,
		i;

	if (parts[0] === "MYAPP") {
		parts = parts.slice(1);
	}

	for (i=0; i<parts.length; i+=1) {
		if (typeof parent[parts[i]] === "undefined") {
			parent[parts[i]] = {};
		}

		parent = parent[parts[i]];
	}

	return parent;
}

MYAPP.namespace('MYAPP.utilities.Array');

MYAPP.utilities.Array = (function () {
	var Contr,
		test = 'test constr';

	Contr = function (o) {
		this.elements = this.toArray(o);
	};

	Contr.staticFunc = function () {
		return "im static function";
	}

	Contr.prototype = {
		constructor: MYAPP.utilities.Array,
		version: "2.0",
		toArray: function (obj) {
			console.log(obj.length)
			for (var i=0, a=[], len = obj.length; i < len; i += 1) {
				a[i] = obj[i];
			}

			return a;
		},

		getElement: function () {
			return this.elements;
		}
	};

	return Contr;
}());

// var arr = new MYAPP.utilities.Array([1,2,3,4]);
console.log(MYAPP.utilities.Array.staticFunc())