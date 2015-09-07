# promised-help

Promised help is a series of helpers for native es6 promises

## Install

```npm install promised-help --save```

## Avaliable helpers

### .key(promise, key)

`.key` is a method which will take a promise and a key and return the value of the key.

#### Usage

<pre><code>var p = require('promised-help');
var title = p.key(promise, 'title');

title.then(function(response) {
    console.log(response); // the title key will be logged to the console
});</code></pre>