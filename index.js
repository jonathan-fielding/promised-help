'use strict';

module.exports = {
	first: function(promise) {
        return promise.then(function(response){
            return response[0];
        });
    },
    slice: function(promise, start, end) {
        return promise.then(function(response){
            end = end || response.length;

            return response.slice(start, end);
        });
    },
    key: function(promise, key) {
		return promise.then(function(response){
			return response[key];
		});
	}
};
