
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert')
		, stream 		= require('stream');



	var Stream = new Class({
		inherits: stream.Duplex


		, init: function(){
			stream.Duplex.call(this);
		}

		, _write: function(data, encoding, callback) {
			this.push(data);
			callback();		
		}

		, _read: function(){}
	});


	

	
	var REPL = require('../')


	var   input = new Stream()
		, output = new Stream();
	

	describe('The REPL', function(){
		var repl = new REPL({
			  inputStream: input
			, outputStream: output
		});

		it('should be able to say something', function(done){
			output.once('data', function(data){
				
				done();
			});

			repl.say('hi');
		});	

		it('should be able to ask for something', function(done){
			repl.ask('please tell me your name!', function(response){
				assert.equal(response, 'michael');
				done();
			});
			input.write('michael');
		});

		it('should be able to ask for confirmation', function(done){
			repl.confirm('Are you OK with this?', function(response){
				assert.equal(response, true);
				done();
			});
			input.write('y');
		});
	});
	