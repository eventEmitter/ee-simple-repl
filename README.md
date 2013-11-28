# ee-simple-repl

Collect user input from a stream / stdin

## installation

	npm install ee-simple-repl

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-simple-repl.png?branch=master)](https://travis-ci.org/eventEmitter/ee-simple-repl)


## api

### Contructor

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

	repl.warn('hi');



### repl.error()

print red text

	repl.error('hi');



### repl.ask()

ask the user for single line input

	repl.ask('How are you?', function(answer){

	});



### repl.confirm()

Ask the user for a y/n input

	repl.ask('Is the input ok?', function(isOk){

	});
