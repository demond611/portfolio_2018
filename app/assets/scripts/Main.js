var $ = require('jquery');
// using require does not require file ending
var Person = require('./modules/Person');

var robert = new Person('Robert', 'blue');
robert.greet();