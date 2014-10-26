// call_apply.js
var john = {
  firstName: "Johnathan",
  lastName: "Doe",
  update: function (property, newVal) {
    // 'this' refers to the context
    this[property] = newVal;
  }
};

console.log(john.firstName) //prints "Johnathan";
john.update("firstName", "John");
console.log(john.firstName) //prints "John"

update = john.update; // copy the method
update("firstName", "Johnathan")
console.log(john.firstName) // What???
