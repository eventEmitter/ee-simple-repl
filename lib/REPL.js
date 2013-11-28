!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log');



	module.exports = new Class({

		/**
		 * class contructor
		 *
		 * @param <Object> options, optional which streams to use, defaults to stdin / stdout
		 */
		init: function(options) {
			this.inputStream = options.inputStream || process.stdin;
			this.outputStream = options.outputStream || process.stdout;
		}


		/**
		 * the ask() method asks the user for input
		 *
		 * @param <String> question
		 * @param <Function> callback(response)
		 */
		, ask: function(question, callback) {
			this.outputStream.write(question);

			this.inputStream.resume();
			this.inputStream.once('data', function(data){
				callback(data.toString());
			}.bind(this));

			return this;
		}


		/**
		 * the say() method prints white text on the output stream
		 *
		 * @param <String>
		 */
		, say: function(what) {
			this.outputStream.write(what);

			return this;
		}



		/**
		 * the warn() prints yellow something on the output stream
		 *
		 * @param <String>
		 */
		, warn: function(what) {
			this.outputStream.write(''+what.yellow.bold);

			return this;
		}



		/**
		 * the error() method prints red something on the output stream
		 *
		 * @param <String>
		 */
		, error: function(what) {
			this.outputStream.write(''+what.red);

			return this;
		}


		/**
		 * the say() method prints something on the output stream
		 *
		 * @param <String>
		 */
		, confirm: function(what, callback) {
			this.ask(what+' [Yn]', function(answer){
				if (answer.toLowerCase() === 'y') callback(true);
				else if (answer.toLowerCase() === 'n') callback(false);
				else this.confirm(what, callback);
			}.bind(this));

			return this;
		}
	});
}();
