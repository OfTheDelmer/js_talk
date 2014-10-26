// constructors.js
function Person(name){
  this.name =  name;
  this.changeName = function (name) {
    this.name = name;
  };
  /* when called with new
    keyword it implicitly
    returns the context
  */
}

john = new Person("Johnathan Doe");
console.log(john.name); // prints "Johnathan Doe"

john.changeName("John Doe");
console.log(john.name); // prints "John Doe"