'use strict';

var P = require('bluebird');

var pr = P.promisify(function(timeout,done){
    setTimeout(function() {
        done(null, ['a','b', 'c']);
    }, 10);
});

pr(500)
.spread(function(a,b,c){
    console.log(a, b, c);
});