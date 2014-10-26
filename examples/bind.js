var displayName = function () {
  return this.firstName;
};

var john = {
  firstName: "Johnathan"
};

var jane

displayName()// returns what? why?
//luckly we can permanently set a context
var getName = displayName.bind(john);
getName()//=> "Johnanthan"


