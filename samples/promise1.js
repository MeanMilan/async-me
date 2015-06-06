'use strict';

let p = function(a){
  return new Promise(function(resolve, reject){
    if( a === false){
      reject('rejected');
    }
    resolve('resolved!');
  });
}

p('true')
.then(console.log)