# promised-help

Promised help is a series of helpers for native es6 promises, each helper returns another promise which can use another helper or you can resolve yourself.

This helper is great when you want to handle the resolution of your promises somewhere else in your stack (like in your page renderer).

## Install

<pre><code>npm install promised-help --save</code></pre>

## Avaliable helpers

### .key(promise, key)

`.key` is a method which will take a promise and a key and return the value of the key.

#### Usage

<pre><code>var p = require('promised-help');
var title = p.key(promise, 'title');

title.then(function(response) {
    console.log(response); // the title key will be logged to the console
});</code></pre>


### .slice(promise, start, end)

`.slice` is a method which allows you to get a slice of an array that is returned by the promise

### .first(promise)

`.first` is a method which allows you to get a the first item in an array.