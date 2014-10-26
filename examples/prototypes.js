// prototypes.js
function Person(name){
  this.name =  name;
  /* when called with new
    keyword it implicitly
    returns the context
  */
}

Person.prototype.changeName = function (name) {
  this.name = name;
};

john = new Person("Johnathan Doe");
console.log(john.name); // prints "Johnathan Doe"

john.changeName("John Doe");
console.log(john.name); // prints "John Doe"