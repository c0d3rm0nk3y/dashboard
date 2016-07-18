

let app  = (function() {
  'use strict';
  
  
  
  let _begin = function() {
    console.log(`_begin()..`);
  };
  
  return { begin: _begin };
})();

app.begin();