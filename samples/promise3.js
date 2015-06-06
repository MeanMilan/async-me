'use strict';

let p = function(a){
  return new Promise(function(resolve, reject){
    if( a === false){
      reject('rejected');
    }
    resolve('resolved!');
  });
}

p(true)
.then(function(res){
    console.log(res);
    return p(true);
})
.then(function(res){
    console.log(res);
    return p(false);
})
.catch(console.log);