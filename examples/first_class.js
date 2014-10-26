// first_class.js

var getFirstName = function() {
  return prompt("What is your first name?") + " ";
};

var getLastName = function() {
  return prompt("What is your last name?");
};

// Takes functions as values
var add = function(f, g){
  return f() + g();
};

add(getFirstName, getLastName);//=> returns fullname
