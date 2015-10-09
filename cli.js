#!/usr/bin/env node
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';
const meow = require('meow');
const fullname = require('fullname');

meow(`
	Example
	  $ fullname
	  Sindre Sorhus
`);

fullname().then(console.log);
