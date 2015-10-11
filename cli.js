#!/usr/bin/env node
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';
const meow = require('meow');
const fullname = require('fullname');

let fullnameNative;

try {
	fullnameNative = require('fullname-native');
} catch (err) {}

meow(`
	Example
	  $ fullname
	  Sindre Sorhus
`);

if (fullnameNative) {
	console.log(fullnameNative);
	process.exit();
}

fullname().then(console.log);
