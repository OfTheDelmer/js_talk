// call_apply_2.js
// call_apply.js
var john = {
  firstName: "Johnathan",
  lastName: "Doe",
  update: function (property, newVal) {
    // 'this' refers to the context
    this[property] = newVal;
  }
};

update = john.update; // copy the method
//Set the context manually
update.apply(john, ["firstName", "Johnathan"]);
console.log(john.firstName); // prints "Johnanthan"
