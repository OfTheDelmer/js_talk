//Subclass
function Student (name) {
  this.name = name;
  this.sleeping = false;
  this.studying
}

Student.prototype = new Parent();
Student.prototype.constructor = Student;

Student.prototype.study = function (){
  if (!this.sleeping) {
    this.studying = true;
  }
}