# ee-simple-repl

Collect user input from a stream / stdin

## installation

	npm install ee-simple-repl

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-simple-repl.png?branch=master)](https://travis-ci.org/eventEmitter/ee-simple-repl)


## api

All functions are chainable

### Constructor

	var Repl = require('ee-repl');

	// repl on stdin / stdout
	var myRepl = new Repl();


	// repl on custom streams
	var myRepl = new Repl({
		  inputStream: 	myInputStream
		, outputStream: myOutputStream
	});



### repl.say()

print some text

	repl.say('hi');



### repl.warn()

print yellow text

	repl.warn('seems not to be ok ...');



### repl.error()

print red text

	repl.error('nope, there was a problem');



### repl.success()

print green text

	repl.success('yeah, that was successhul!');



### repl.ask()

ask the user for single line input

	repl.ask('How are you?', function(answer){

	});



### repl.confirm()

Ask the user for a y/n input

	repl.confirm('Is the input ok?', function(isOk){

	});


## CHANGELOG

- 0.1.0: Initial Release
- 0.1.1: Added chainablity
- 0.1.2: Bugfix in ask api && new success() method