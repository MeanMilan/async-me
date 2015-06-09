'use strict';

// ---------- Babel Only! ------------------

function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
          return resolve(['a','b','c']);
        }, duration);
    })
}

var p = timeout(500)
.then((res) => {
    let [a, b, c] = res;
    console.log(a, b, c);
});