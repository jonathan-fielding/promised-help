'use strict';

module.exports = {
	key: function(promise, key) {
		return promise.then(function(response){
			return response[key];
		});
	}
};