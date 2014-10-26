// klassical_inheritance.js
function Person (name) {
  this.name = name;
  this.sleeping = false;
}

Person.prototype.changeName = function (newName) {
  this.name = newName;
};

Person.prototype.sleep = function () {
  this.sleeping = true;
};

Person.prototype.wake = function () {
  this.sleeping = false;
};
