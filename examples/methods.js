var john = {
  name: "Johnathan Doe",
  changeName: function (newName) {
    this.name = newName;
  }
};

console.log(john.name) // prints Johnathan Doe
john.changeName("John Doe")
console.log(john.name) // prints John Doe