function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  function returnsANamedFunction() {
    function namedFunction() {
      // This function can have its own logic
    }
    return namedFunction;
  }
  function returnsAnAnonymousFunction() {
    return function() {
      // This function can have its own logic
    };
  }