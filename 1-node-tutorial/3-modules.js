// CommonJS, every file is module(by default)
// Modules  - Encapsulated Code (only share minimum)

const names = require('./4-module.js');
const sayHi = require('./5-utils.js');
//console.log(names)

const data = require('./6-alternative-flavor.js');
//console.log(data);

require('./7-mind-grenade.js');

//sayHi('Susan');
//sayHi(names.john);
//sayHi(names.peter);