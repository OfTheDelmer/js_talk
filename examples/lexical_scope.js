// examples/lexical_scope.js

var x = 1;

function alertX(){
  alert("x is " + x);
}

alertX();
// alerts 'x is 1'
// Note how 'x' was never explictly passed as an argument.