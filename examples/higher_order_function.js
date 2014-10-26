// higher_order_function.js
var addOne = function (num) {
  return num + 1;
};

var triple = function (num) {
  return 3 * num;
};
// returns a function
var compose = function(f, g) {
  return function (value) {
    f(g(value));
  };
};

var trippleAndIncr = compose(addOne, triple);
tripleAndIncr(2) //=> 7
tripleAndIncr(3) //=> 10
