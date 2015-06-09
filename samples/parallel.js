'use strict';

// ---------- Babel Only! ------------------

function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      return resolve(duration);
    }, duration);
  })
}

Promise.all([timeout(500), timeout(800), timeout(300)])
  .then(values => {
  console.log(values); // [true, 3]
});